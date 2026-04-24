function StayCloseSection({ content }) {
  return (
    <section className="stay-close-section" aria-labelledby="stay-close-title">
      <div className="stay-close-inner">
        <article className="stay-close-card">
          <div className="stay-close-body">
            <div>
              <div className="stay-close-eyebrow">{content.eyebrow}</div>
              <h2 id="stay-close-title" className="stay-close-headline">
                Choose the form of support that matches your <span>role.</span>
              </h2>
              <p className="stay-close-desc">
                You can fund the public case, support field research, start a partnership conversation, or simply{" "}
                <strong>stay informed as the work grows</strong>.
              </p>
            </div>

            <div className="stay-close-routes">
              <div className="stay-close-route is-fund">
                <div className="stay-close-route-dot" />
                <div>
                  <strong>Fund the work.</strong> Support Edison field research, the public case, or TCU operations
                  directly.
                </div>
              </div>
              <div className="stay-close-route is-partner">
                <div className="stay-close-route-dot" />
                <div>
                  <strong>Start a partnership conversation.</strong> Food companies, land trusts, and research
                  institutions are welcome.
                </div>
              </div>
              <div className="stay-close-route is-updates">
                <div className="stay-close-route-dot" />
                <div>
                  <strong>Stay informed.</strong> Field updates, research milestones, and Edison progress to your inbox.
                </div>
              </div>
            </div>

            <div className="stay-close-actions">
              <a className="stay-close-btn stay-close-btn-primary" href={content.action.href} data-cta={content.action.label}>
                {content.action.label}
              </a>
              <a
                className="stay-close-btn stay-close-btn-secondary"
                href={content.secondary.href}
                data-cta={content.secondary.label}
              >
                {content.secondary.label}
              </a>
            </div>
          </div>

          <div className="stay-close-photo">
            <img src={content.image} alt={content.imageAlt || ""} loading="lazy" decoding="async" />
          </div>
        </article>
      </div>
    </section>
  );
}

export default StayCloseSection;
