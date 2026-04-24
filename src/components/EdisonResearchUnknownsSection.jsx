const pressureRows = [
  {
    label: "Heat & Drought",
    value: 88,
    color: "#e8a547",
    gradient: "linear-gradient(to right, #c8241a, #e8a547)",
  },
  {
    label: "Water Limits",
    value: 72,
    color: "#6fa3a0",
    gradient: "linear-gradient(to right, #3a6a9a, #6fa3a0)",
  },
  {
    label: "Soil Degradation",
    value: 65,
    color: "#8a6d3b",
    gradient: "linear-gradient(to right, #5a3a10, #8a6d3b)",
  },
];

const questionMeta = [
  {
    tag: "Soil Metrics",
    status: "Phase One Active",
    statusType: "active",
    progress: 28,
    stage: "Baseline set",
    method: "Measurement framework",
  },
  {
    tag: "Water",
    status: "Phase One Active",
    statusType: "active",
    progress: 22,
    stage: "Baseline set",
    method: "Field measurement",
  },
  {
    tag: "Systems",
    status: "In Design",
    statusType: "design",
    progress: 10,
    stage: "Protocol stage",
    method: "Crop program trials",
  },
  {
    tag: "Adoption Barriers",
    status: "In Design",
    statusType: "design",
    progress: 8,
    stage: "Scoping",
    method: "Barrier mapping",
  },
];

const ringCircumference = 69;
const arcCircumference = 113;

function renderAdoptionAccent(title) {
  const match = title.match(/adoption/i);

  if (!match || match.index == null) {
    return title;
  }

  const start = title.slice(0, match.index);
  const highlighted = title.slice(match.index, match.index + match[0].length);
  const end = title.slice(match.index + match[0].length);

  return (
    <>
      {start}
      <span>{highlighted}</span>
      {end}
    </>
  );
}

function EdisonResearchUnknownsSection({ content }) {
  return (
    <section className="edison-research-unknowns-section" aria-labelledby="edison-research-unknowns-title">
      <div className="edison-research-unknowns-inner">
        <div className="edison-research-unknowns-heading">
          <div>
            <div className="edison-research-unknowns-eyebrow">{content.eyebrow}</div>
            <h2 id="edison-research-unknowns-title">{renderAdoptionAccent(content.title)}</h2>
          </div>
          <p>{content.lede}</p>
        </div>

        <div className="edison-research-unknowns-panels">
          <article className="edison-research-known-panel">
            <div className="edison-research-panel-header">
              <div className="edison-research-panel-kicker">What we know</div>
              <div className="edison-research-panel-count">
                <strong>{content.known.length}</strong> / Established
              </div>
            </div>

            <div className="edison-research-pressure">
              <div className="edison-research-pressure-label">Current pressure on U.S. farmland</div>
              <div className="edison-research-pressure-rows">
                {pressureRows.map((row, index) => (
                  <div key={row.label} className="edison-research-pressure-row">
                    <div className="edison-research-pressure-name">{row.label}</div>
                    <div className="edison-research-pressure-ring">
                      <svg viewBox="0 0 44 44">
                        <circle className="edison-research-pressure-ring-bg" cx="22" cy="22" r="18" />
                        <circle
                          className="edison-research-pressure-ring-fg"
                          cx="22"
                          cy="22"
                          r="18"
                          stroke={row.color}
                          style={{
                            strokeDashoffset: arcCircumference - (arcCircumference * row.value) / 100,
                            transitionDelay: `${0.3 + index * 0.15}s`,
                          }}
                          transform="rotate(-90 22 22)"
                        />
                        <text x="22" y="26" textAnchor="middle" fontFamily="Bebas Neue, Arial, sans-serif" fontSize="13" fill={row.color}>
                          {row.value}
                        </text>
                      </svg>
                    </div>
                    <div className="edison-research-pressure-bar">
                      <div
                        className="edison-research-pressure-fill"
                        style={{
                          width: `${row.value}%`,
                          background: row.gradient,
                          animationDelay: `${0.25 + index * 0.15}s`,
                        }}
                      />
                    </div>
                    <div className="edison-research-pressure-percent" style={{ color: row.color }}>
                      {row.value}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="edison-research-known-list">
              {content.known.map((item, index) => (
                <div key={item} className="edison-research-known-item">
                  <div className="edison-research-known-num">{index + 1}</div>
                  <div>
                    <p>{item}</p>
                    <span>Established</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="edison-research-gap">
              <div className="edison-research-gap-label">The gap Edison closes</div>
              <p>
                The science establishes the mechanism. <em>Edison tests whether it holds under the pressures real farms actually face.</em>
              </p>
            </div>
          </article>

          <article className="edison-research-unknown-panel">
            <div className="edison-research-panel-header">
              <div className="edison-research-panel-kicker">What Edison has to test</div>
              <div className="edison-research-panel-count">
                <strong>{content.unknown.length}</strong> / Open Questions
              </div>
            </div>

            <div className="edison-research-question-grid">
              {content.unknown.map((item, index) => {
                const meta = questionMeta[index] || questionMeta[0];
                const questionNumber = String(index + 1).padStart(2, "0");

                return (
                  <div key={item.title} className={`edison-research-question edison-research-question-${index + 1}`}>
                    <div className="edison-research-question-top">
                      <div className="edison-research-question-big">{questionNumber}</div>
                      <div className={`edison-research-question-status is-${meta.statusType}`}>{meta.status}</div>
                    </div>

                    <div className="edison-research-question-progress">
                      <svg viewBox="0 0 28 28">
                        <circle className="edison-research-progress-bg" cx="14" cy="14" r="11" />
                        <circle
                          className="edison-research-progress-fg"
                          cx="14"
                          cy="14"
                          r="11"
                          style={{
                            strokeDashoffset: ringCircumference - (ringCircumference * meta.progress) / 100,
                            transitionDelay: `${0.45 + index * 0.12}s`,
                          }}
                          transform="rotate(-90 14 14)"
                        />
                      </svg>
                      <div>
                        <strong>{meta.progress}% complete</strong>
                        <span>{meta.stage}</span>
                      </div>
                    </div>

                    <div className="edison-research-question-tag">{meta.tag}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className="edison-research-question-method">{meta.method}</div>
                  </div>
                );
              })}
            </div>
          </article>
        </div>

        {content.sourceNote && <div className="edison-research-source-note">{content.sourceNote}</div>}
      </div>
    </section>
  );
}

export default EdisonResearchUnknownsSection;
