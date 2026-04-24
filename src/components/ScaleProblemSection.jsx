import { useEffect, useMemo, useRef, useState } from "react";

const rowDetails = {
  "crop-calories-24": {
    index: "01 / Food supply collapse",
    text: "Heat, drought, and climate disruption are projected to reduce staple-crop calories even when farmers adapt.",
    visual: "crop",
  },
  "soil-lifespan-caution": {
    index: "02 / Soil degradation",
    text: "Soil decline is urgent, but simple global countdowns are too blunt. The stronger claim is local, measured, and tied to real soil function.",
    visual: "harvest",
  },
  "residual-climate-300-1000": {
    index: "03 / Residual damage",
    text: "Even if every smokestack stopped tomorrow, the carbon already overhead would keep degrading the climate for centuries. Cuts alone do not rewind the damage.",
    visual: "timeline",
  },
};

function splitStatValue(value) {
  if (Number.isNaN(Number.parseFloat(value))) {
    return { prefix: "", value, unit: "" };
  }

  const match = String(value).match(/^(<\s*)?(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", value, unit: "" };
  return { prefix: (match[1] || "").trim(), value: match[2], unit: match[3].trim() };
}

function CropLossViz({ visible }) {
  const lostCells = useMemo(() => {
    const indices = new Set();
    for (let index = 0; index < 40; index += 1) {
      indices.add((index * 37 + 11) % 80);
    }
    return indices;
  }, []);

  return (
    <div className="scale-problem-crop-viz">
      <div className="scale-problem-crop-grid">
        {Array.from({ length: 80 }, (_, index) => (
          <span
            key={index}
            className={`scale-problem-crop-cell${lostCells.has(index) ? " lost" : ""}${visible ? " visible" : ""}`}
            style={{ transitionDelay: `${index * 12}ms` }}
          />
        ))}
      </div>
      <div className="scale-problem-crop-timeline">
        <span>2026</span>
        <span>2063</span>
        <span>2100</span>
      </div>
    </div>
  );
}

function HarvestViz({ visible }) {
  const heights = useMemo(() => Array.from({ length: 60 }, (_, index) => 40 + ((index * 17) % 41)), []);

  return (
    <div className="scale-problem-harvest-viz">
      <div className="scale-problem-harvest-marks">
        {heights.map((height, index) => (
          <span
            key={index}
            className={`scale-problem-harvest-mark${visible ? " visible" : ""}`}
            style={{ height: `${height}%`, transitionDelay: `${index * 20}ms` }}
          />
        ))}
      </div>
      <div className="scale-problem-harvest-legend">
        <span>Soil condition varies by place</span>
        <span>Measure before claiming</span>
      </div>
    </div>
  );
}

function TimelineViz({ visible }) {
  return (
    <div className="scale-problem-timeline-viz">
      <div className="scale-problem-timeline-track">
        <span className="scale-problem-timeline-marker" />
        <span className={`scale-problem-timeline-range${visible ? " visible" : ""}`}>
          <span>Healing window</span>
        </span>
      </div>
      <div className="scale-problem-timeline-scale">
        <span>2026</span>
        <span>2326</span>
        <span>2626</span>
        <span>2926</span>
        <span>3026</span>
      </div>
      <div className="scale-problem-timeline-caption">The scale of damage already overhead</div>
    </div>
  );
}

function ScaleVisual({ type, visible }) {
  if (type === "harvest") return <HarvestViz visible={visible} />;
  if (type === "timeline") return <TimelineViz visible={visible} />;
  return <CropLossViz visible={visible} />;
}

function ScaleProblemSection({ content }) {
  const [visibleRows, setVisibleRows] = useState(() => new Set());
  const rowRefs = useRef([]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setVisibleRows(new Set(content.stats.map((stat) => stat.id)));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-scale-row");
            setVisibleRows((current) => {
              const next = new Set(current);
              next.add(id);
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    rowRefs.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => observer.disconnect();
  }, [content.stats]);

  return (
    <section id="evidence-scale" className="scale-problem-section">
      <div className="container">
        <div className="scale-problem-heading">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2>{content.title}</h2>
          <p>
            These are the stakes if humans cut emissions without also drawing carbon back down. The scale of damage already in the
            system is not something time alone will fix.
          </p>
        </div>

        <div className="scale-problem-stats">
          {content.stats.map((sourceStat, index) => {
            const row = rowDetails[sourceStat.id] || {};
            const visible = visibleRows.has(sourceStat.id);
            const statValue = splitStatValue(sourceStat.value);

            return (
              <article
                key={sourceStat.id || sourceStat.label}
                ref={(element) => {
                  rowRefs.current[index] = element;
                }}
                data-scale-row={sourceStat.id}
                className={`scale-problem-row${visible ? " visible" : ""}`}
              >
                <div className="scale-problem-copy">
                  <span className="scale-problem-index">{row.index || `0${index + 1}`}</span>
                  <strong className="scale-problem-number">
                    {statValue.prefix && <span className="prefix">{statValue.prefix}</span>}
                    {statValue.value}
                    {statValue.unit && <span className="unit">{statValue.unit}</span>}
                  </strong>
                  <h3>{sourceStat.label}</h3>
                  <p>{row.text}</p>
                  {sourceStat.source && <cite>{sourceStat.source}</cite>}
                </div>
                <div className="scale-problem-visual">
                  <ScaleVisual type={row.visual} visible={visible} />
                </div>
              </article>
            );
          })}
        </div>

        <div className="scale-problem-closer">
          <p>
            Cuts alone arrive too late. <span>Drawdown is the only tool that shortens this timeline.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ScaleProblemSection;
