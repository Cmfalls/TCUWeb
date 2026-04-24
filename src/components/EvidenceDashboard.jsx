import { useEffect, useMemo, useRef, useState } from "react";

const dashboardCards = [
  {
    id: "food-system-emissions",
    index: "01 / Problem scale",
    number: 32,
    decimals: 0,
    after: "%",
    source: "FAO / TCU Stats",
    icon: "clock",
    viz: "bar",
    methodology:
      "FAO's latest agrifood systems update places the sector at about one-third of global anthropogenic greenhouse gas emissions, including land-use change, production, processing, distribution, and waste. The number places agriculture squarely inside climate strategy rather than alongside it.",
    formula: "agrifood_system_GHG / total_anthropogenic_GHG",
    sources: ["FAO agrifood systems emissions update, 2025", "Crippa et al. 2021, Nature Food", "TCU Stats synthesis"],
  },
  {
    id: "water-buffered",
    index: "02 / Water function",
    number: 20,
    decimals: 0,
    after: "K",
    unit: "GAL",
    source: "USDA-NRCS / TCU Stats",
    icon: "drop",
    viz: "drops",
    methodology:
      "Each 1% increase in soil organic matter on one acre, to a six-inch depth, adds roughly 20,000 gallons of water holding capacity. This reframes soil health as water infrastructure, which matters where drought and flood risk converge.",
    formula: "SOM_gain_1pct x 20,000 gal / acre",
    sources: ["USDA-NRCS Soil Health Division", "Bryant et al. 2015", "TCU Stats SOM model"],
  },
  {
    id: "carbon-stored",
    index: "03 / Carbon capture",
    number: 5.8,
    decimals: 1,
    unit: "TONS C",
    source: "TCU Stats SOM model",
    icon: "bank",
    viz: "roots",
    methodology:
      "At the same 1% soil organic matter gain, one acre stores approximately 5.8 tons of carbon in the soil profile. This is the physical quantity actually moved out of the atmosphere and into biological storage on working land.",
    formula: "SOM_gain_1pct x acre x C_density = 5.8 tons C",
    sources: ["TCU SOM-to-C conversion", "USDA NRCS soil carbon standards", "Lal 2004, Science"],
  },
  {
    id: "climate-equivalent",
    index: "04 / Climate math",
    number: 21.3,
    decimals: 1,
    unit: "TONS CO2e",
    source: "Derived equivalent",
    icon: "pulse",
    viz: "conversion",
    methodology:
      "Soil carbon converts to CO2 equivalent using the molecular weight ratio of 3.67. That turns 5.8 tons of stored carbon into 21.3 tons of CO2 equivalent, the climate unit audiences and institutions already work in.",
    formula: "5.8 tons C x 3.67 = 21.3 tons CO2e",
    sources: ["IPCC conversion standard", "TCU derived equivalent"],
  },
];

const dashboardCardById = dashboardCards.reduce((lookup, card) => {
  lookup[card.id] = card;
  return lookup;
}, {});

function fallbackDashboardCard(metric, index) {
  const parsed = String(metric.value).match(/^(\d+(?:\.\d+)?)(.*)$/);

  return {
    id: metric.id,
    index: `${String(index + 1).padStart(2, "0")} / ${metric.label}`,
    number: parsed ? Number(parsed[1]) : 0,
    decimals: parsed && parsed[1].includes(".") ? 1 : 0,
    after: parsed ? parsed[2].trim() : "",
    source: metric.source,
    icon: "clock",
    viz: "bar",
    methodology: metric.detail,
    formula: "See source trail",
    sources: [metric.source].filter(Boolean),
  };
}

function MetricIcon({ type }) {
  if (type === "drop") {
    return (
      <svg className="evidence-dash-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2.5s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11z" />
      </svg>
    );
  }

  if (type === "bank") {
    return (
      <svg className="evidence-dash-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 20h18M5 20V10l7-5 7 5v10" />
      </svg>
    );
  }

  if (type === "pulse") {
    return (
      <svg className="evidence-dash-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12h4l3-9 4 18 3-9h4" />
      </svg>
    );
  }

  return (
    <svg className="evidence-dash-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function MiniViz({ type }) {
  if (type === "drops") {
    const droplets = Array.from({ length: 16 }, (_, index) => ({
      cx: 10 + index * 12,
      cy: index % 2 === 0 ? 20 : 14,
      r: index % 3 === 0 ? 3 : 2.3,
    }));

    return (
      <svg viewBox="0 0 200 32" aria-hidden="true">
        <g fill="#99cc33" opacity="0.82">
          {droplets.map((drop) => (
            <circle key={drop.cx} cx={drop.cx} cy={drop.cy} r={drop.r} />
          ))}
        </g>
      </svg>
    );
  }

  if (type === "roots") {
    const points = [
      [20, 6],
      [50, 10],
      [80, 4],
      [110, 8],
      [140, 12],
      [170, 6],
    ];

    return (
      <svg viewBox="0 0 200 32" aria-hidden="true">
        <g stroke="#99cc33" strokeWidth="1.5" fill="none" strokeLinecap="round">
          {points.map(([x, y]) => (
            <line key={x} x1={x} y1="28" x2={x} y2={y} />
          ))}
        </g>
        <g fill="#b8e655">
          {points.map(([x, y]) => (
            <circle key={x} cx={x} cy={y} r="2" />
          ))}
        </g>
        <line x1="0" y1="28" x2="200" y2="28" stroke="rgba(245,239,225,0.2)" strokeWidth="1" />
      </svg>
    );
  }

  if (type === "conversion") {
    return (
      <svg viewBox="0 0 200 32" aria-hidden="true">
        <rect x="5" y="8" width="40" height="20" fill="none" stroke="#99cc33" strokeWidth="1" rx="2" />
        <text x="25" y="22" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="10" fill="#b8e655">C</text>
        <line x1="50" y1="18" x2="85" y2="18" stroke="#99cc33" strokeWidth="1" strokeDasharray="2 2" />
        <text x="67" y="12" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="7" fill="#b8e655">x3.67</text>
        <polyline points="80,15 85,18 80,21" fill="none" stroke="#99cc33" strokeWidth="1" />
        <rect x="90" y="8" width="105" height="20" fill="rgba(153,204,51,0.15)" stroke="#99cc33" strokeWidth="1" rx="2" />
        <text x="142" y="22" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="10" fill="#b8e655">CO2e</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 32" aria-hidden="true">
      <rect x="0" y="10" width="200" height="12" fill="rgba(245,239,225,0.1)" rx="2" />
      <rect x="0" y="10" width="62" height="12" fill="#99cc33" rx="2" />
      <text x="66" y="19" fontFamily="Arial, Helvetica, sans-serif" fontSize="9" fill="#b8e655">32%</text>
    </svg>
  );
}

function AnimatedNumber({ value, decimals, active }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setShown(value);
      return undefined;
    }

    const duration = 1400;
    const start = performance.now();
    let rafId;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setShown(value * eased);

      if (progress < 1) rafId = window.requestAnimationFrame(tick);
      else setShown(value);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [active, decimals, value]);

  return shown.toFixed(decimals);
}

function EvidenceDashboard({ dashboard }) {
  const [activeId, setActiveId] = useState(null);
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setHasEntered(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const activeMetricIndex = activeId === null ? -1 : dashboard.metrics.findIndex((metric) => metric.id === activeId);
  const activeMetric = activeMetricIndex < 0 ? null : dashboard.metrics[activeMetricIndex];
  const activeCard = activeMetric
    ? dashboardCardById[activeMetric.id] || fallbackDashboardCard(activeMetric, activeMetricIndex)
    : null;

  return (
    <section id="evidence-dashboard" ref={sectionRef} className="evidence-dashboard-section evidence-dashboard-viz-section">
      <div className="container">
        <div className="evidence-dashboard-heading evidence-dash-heading">
          <span className="eyebrow">{dashboard.eyebrow}</span>
          <h2>{dashboard.title}</h2>
          <p>{dashboard.text} Click any card to see how it is measured.</p>
        </div>

        <div className="evidence-dash-toolbar">
          <div className="evidence-dash-toolbar-left">
            <span className="evidence-dash-status-dot" aria-hidden="true" />
            <span>Live metrics / peer reviewed sources</span>
          </div>
          <span>Last updated: Apr 2026</span>
        </div>

        <div className="evidence-dash-cards">
          {dashboard.metrics.map((metric, index) => {
            const card = dashboardCardById[metric.id] || fallbackDashboardCard(metric, index);
            const isActive = activeId === metric.id;

            return (
              <article key={metric.label} className={`evidence-dash-card${isActive ? " active" : ""}`}>
                <button
                  type="button"
                  className="evidence-dash-card-button"
                  onClick={() => setActiveId(isActive ? null : metric.id)}
                  aria-expanded={isActive}
                  aria-controls="evidence-dashboard-methodology"
                >
                  <span className="evidence-dash-card-header">
                    <span className="evidence-dash-card-index">{card.index}</span>
                    <MetricIcon type={card.icon} />
                  </span>

                  <span className="evidence-dash-stat-num">
                    <AnimatedNumber value={card.number} decimals={card.decimals} active={hasEntered} />
                    {card.after}
                    {card.unit && <span className="evidence-dash-stat-unit">{card.unit}</span>}
                  </span>

                  <span className="evidence-dash-stat-label">{metric.label}</span>
                  <span className="evidence-dash-stat-desc">{metric.detail}</span>

                  <span className="evidence-dash-mini-viz">
                    <MiniViz type={card.viz} />
                  </span>

                  <span className="evidence-dash-card-source">
                    <span>{metric.source || card.source}</span>
                    <span className="evidence-dash-expand-icon" aria-hidden="true">+</span>
                  </span>
                </button>
              </article>
            );
          })}
        </div>

        <div id="evidence-dashboard-methodology" className={`evidence-dash-methodology${activeCard ? " open" : ""}`}>
          {activeCard && activeMetric && (
            <div className="evidence-dash-methodology-inner">
              <div>
                <h3>Methodology</h3>
                <p>{activeCard.methodology}</p>
                <code>{activeCard.formula}</code>
              </div>
              <div>
                <h3>Sources</h3>
                <ul className="evidence-dash-source-list">
                  {activeCard.sources.map((source) => (
                    <li key={source}>
                      <a href="/evidence-hub/index.html">{source}</a>
                    </li>
                  ))}
                </ul>
                <p className="evidence-dash-source-note">{activeMetric.source}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default EvidenceDashboard;
