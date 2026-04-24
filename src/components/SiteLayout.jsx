import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { headerAction, navItems } from "../content/siteContent";

function NavDropdownItem({ item, onClose }) {
  const [open, setOpen] = useState(false);
  const groupRef = useRef(null);
  const closeTimer = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  if (!item.children) {
    return (
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to={item.to}
        onClick={onClose}
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div
      ref={groupRef}
      className={`nav-item-group${open ? " open" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="nav-group-trigger"
        aria-expanded={open}
        type="button"
        onClick={() => setOpen((o) => !o)}
      >
        {item.label}
        <span className="nav-group-arrow" aria-hidden="true">▾</span>
      </button>
      <div className="nav-dropdown" role="menu">
        <div className="nav-dropdown-inner">
          {item.children.map((child) => {
            if (child.external) {
              return (
                <a
                  key={child.label}
                  className="nav-dropdown-item"
                  href={child.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  onClick={() => { setOpen(false); onClose(); }}
                >
                  {child.label}
                  <span className="nav-dropdown-ext" aria-hidden="true">↗</span>
                </a>
              );
            }
            return (
              <NavLink
                key={child.label}
                className={({ isActive }) => `nav-dropdown-item${isActive ? " active" : ""}`}
                to={child.to}
                role="menuitem"
                onClick={() => { setOpen(false); onClose(); }}
              >
                {child.label}
                {child.tag && <span className="nav-dropdown-tag">{child.tag}</span>}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const footerFrameRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", menuOpen);

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const closeOnDesktop = () => {
      if (window.innerWidth > 780) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, []);

  useEffect(() => {
    const frame = footerFrameRef.current;
    if (!frame) {
      return undefined;
    }

    const syncFrameHeight = () => {
      try {
        const doc = frame.contentDocument || frame.contentWindow?.document;
        if (!doc) return;
        const height = Math.max(doc.body?.scrollHeight || 0, doc.documentElement?.scrollHeight || 0);
        if (height > 0) {
          frame.style.height = `${height}px`;
        }
      } catch {
        // Same-origin content is expected; ignore transient access timing issues.
      }
    };

    const onLoad = () => {
      syncFrameHeight();
      window.setTimeout(syncFrameHeight, 120);
      window.setTimeout(syncFrameHeight, 420);
    };

    frame.addEventListener("load", onLoad);
    window.addEventListener("resize", syncFrameHeight);
    onLoad();

    return () => {
      frame.removeEventListener("load", onLoad);
      window.removeEventListener("resize", syncFrameHeight);
    };
  }, []);

  return (
    <div className={`site-shell${menuOpen ? " menu-open" : ""}`}>
      <header className="topbar">
        <div className="topbar-inner">
          <Link className="brand" to="/" aria-label="Go to The Carbon Underground homepage">
            <img alt="The Carbon Underground" aria-hidden="true" className="brand-wordmark" src="/images/brand/tcu-logo-white.png" />
          </Link>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
          </button>

          <nav id="site-nav" className={`nav ${menuOpen ? "open" : ""}`}>
            <div className="nav-links">
              {navItems.map((item) => (
                <NavDropdownItem
                  key={item.label}
                  item={item}
                  onClose={() => setMenuOpen(false)}
                />
              ))}
            </div>
            <a className="nav-cta" data-cta={headerAction.label} href={headerAction.href}>
              {headerAction.label}
            </a>
          </nav>
        </div>
      </header>

      <main className="page-main">
        <Outlet />
      </main>

      <footer className="footer">
        <iframe
          ref={footerFrameRef}
          className="site-footer-embed"
          src="/partials/tcu-footer.html"
          title="Site footer"
        />
      </footer>
    </div>
  );
}

export default SiteLayout;
