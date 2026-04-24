import { useEffect, useMemo, useRef, useState } from "react";

const mapPositions = {
  "farmland-share": { x: 145, y: 130 },
  "sgma-retirement": { x: 160, y: 195 },
  subsidence: { x: 150, y: 275 },
  "economic-exposure": { x: 148, y: 350 },
};

function splitValue(value) {
  const match = String(value).match(/^(\$?\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { value, suffix: "" };
  return { value: match[1], suffix: match[2].trim() };
}

function buildIndicators(items = []) {
  return items.map((item, index) => {
    const split = splitValue(item.value);
    const position = mapPositions[item.id] || { x: 145, y: 130 + index * 70 };

    return {
      ...item,
      mapNumber: String(index + 1).padStart(2, "0"),
      valueMain: item.valueMain || split.value,
      suffix: item.suffix || split.suffix,
      index: item.index || `${String(index + 1).padStart(2, "0")} / ${item.title}`,
      label: item.label || item.title,
      description: item.description || item.text,
      tab: item.tab || item.value,
      ...position,
    };
  });
}

function CentralValleyMap({ activeId, indicators, setActive, stopAuto }) {
  const handleActivate = (id) => {
    stopAuto();
    setActive(id);
  };

  return (
    <div className="regional-map-card">
      <div className="regional-map-header">
        <span>CA / Central Valley</span>
        <span>N ^</span>
      </div>
      <div className="regional-map-svg-wrap">
        <svg className="regional-map-svg" viewBox="0 0 300 450" xmlns="http://www.w3.org/2000/svg" aria-labelledby="regional-map-title">
          <title id="regional-map-title">Interactive map of California's Central Valley regional indicators</title>
          <path className="regional-ca-outline" d="M 80 30 L 120 25 L 160 35 L 200 50 L 240 80 L 260 140 L 275 200 L 280 260 L 270 320 L 250 380 L 220 420 L 180 430 L 140 420 L 100 400 L 70 360 L 50 300 L 40 240 L 45 180 L 55 120 L 70 70 Z" />

          <g className="regional-mountains">
            <path d="M 200 60 Q 210 120 215 180 Q 220 240 215 300 Q 208 350 195 390" />
            <path d="M 210 80 Q 220 140 225 200 Q 228 260 220 320" />
            <path d="M 100 80 Q 95 140 90 200 Q 88 260 95 320 Q 102 370 115 400" />
            <path d="M 88 100 Q 82 160 78 220 Q 78 280 85 340" />
          </g>

          <path className="regional-valley-shape" d="M 130 70 Q 165 75 180 120 Q 188 180 185 240 Q 180 300 170 360 Q 160 400 135 395 Q 115 390 115 350 Q 118 280 125 210 Q 128 140 130 70 Z" />
          <g className="regional-valley-detail">
            <path d="M 150 85 Q 158 140 160 200 Q 162 260 158 320 Q 155 370 148 390" />
            <path d="M 140 100 Q 135 160 138 220" />
            <path d="M 165 150 Q 170 210 168 270" />
          </g>

          <g className="regional-map-cities">
            {[
              ["REDDING", 148, 90],
              ["SACRAMENTO", 152, 155],
              ["FRESNO", 155, 220],
              ["BAKERSFIELD", 150, 320],
            ].map(([city, x, y]) => (
              <g key={city}>
                <circle cx={x} cy={y} r="1.5" />
                <text x={Number(x) + 8} y={Number(y) + 3}>{city}</text>
              </g>
            ))}
          </g>

          <g className="regional-edison-marker">
            <circle cx="158" cy="245" r="4" />
            <text x="166" y="248">EDISON</text>
          </g>

          {indicators.map((indicator) => (
            <g
              key={indicator.id}
              className={`regional-hotspot${activeId === indicator.id ? " active" : ""}`}
              transform={`translate(${indicator.x}, ${indicator.y})`}
              role="button"
              tabIndex={0}
              aria-label={`${indicator.index}: ${indicator.label}`}
              onClick={() => handleActivate(indicator.id)}
              onMouseEnter={() => handleActivate(indicator.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleActivate(indicator.id);
                }
              }}
            >
              <circle className="regional-hotspot-pulse" r="14" />
              <circle className="regional-hotspot-bg" r="14" />
              <text className="regional-hotspot-num" x="0" y="1">{indicator.mapNumber}</text>
            </g>
          ))}

          <g className="regional-map-legend" transform="translate(20, 415)">
            <rect width="10" height="3" />
            <text x="14" y="4">CENTRAL VALLEY</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

function RegionalIndicatorsSection({ content }) {
  const indicators = useMemo(() => buildIndicators(content.items), [content.items]);
  const [activeId, setActiveId] = useState(indicators[0]?.id || "");
  const [autoCycle, setAutoCycle] = useState(true);
  const stopAuto = useMemo(() => () => setAutoCycle(false), []);
  const activeIndicator = indicators.find((indicator) => indicator.id === activeId) || indicators[0];
  const autoRef = useRef(null);

  useEffect(() => {
    if (!activeIndicator && indicators[0]) setActiveId(indicators[0].id);
  }, [activeIndicator, indicators]);

  useEffect(() => {
    if (!autoCycle) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (indicators.length < 2) return undefined;

    autoRef.current = window.setInterval(() => {
      setActiveId((current) => {
        const currentIndex = indicators.findIndex((indicator) => indicator.id === current);
        return indicators[(currentIndex + 1) % indicators.length].id;
      });
    }, 3500);

    return () => window.clearInterval(autoRef.current);
  }, [autoCycle, indicators]);

  if (!indicators.length) return null;

  return (
    <section className="regional-indicators-section">
      <div className="container regional-indicators-shell">
        <div className="regional-indicators-heading">
          <span className="eyebrow">{content.eyebrow || "Selected regional indicators"}</span>
          <h2>{content.title || "The Valley already shows why field proof cannot stay abstract."}</h2>
          <p>{content.lede || content.text}</p>
        </div>

        <div className="regional-indicators-stage">
          <CentralValleyMap activeId={activeId} indicators={indicators} setActive={setActiveId} stopAuto={stopAuto} />

          <div className="regional-detail">
            <div className="regional-detail-content" aria-live="polite">
              {activeIndicator && (
                <article key={activeIndicator.id} className="regional-detail-step active">
                  <span className="regional-detail-index">{activeIndicator.index}</span>
                  <strong className="regional-detail-num">
                    {activeIndicator.valueMain}
                    <span>{activeIndicator.suffix}</span>
                  </strong>
                  <h3>{activeIndicator.label}</h3>
                  <p>{activeIndicator.description}</p>
                  <cite>{activeIndicator.source}</cite>
                </article>
              )}
            </div>

            <div className="regional-selector" aria-label="Select regional indicator">
              {indicators.map((indicator) => (
                <button
                  key={indicator.id}
                  type="button"
                  className={`regional-tab${activeId === indicator.id ? " active" : ""}`}
                  onClick={() => {
                    stopAuto();
                    setActiveId(indicator.id);
                  }}
                  aria-pressed={activeId === indicator.id}
                >
                  <span>{indicator.mapNumber}</span>
                  <strong>{indicator.tab}</strong>
                </button>
              ))}
            </div>

            {(content.caption || content.imageAlt) && <p className="regional-context-note">{content.caption || content.imageAlt}</p>}
            <p className="regional-active-sr">Current indicator: {activeIndicator?.label}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegionalIndicatorsSection;
