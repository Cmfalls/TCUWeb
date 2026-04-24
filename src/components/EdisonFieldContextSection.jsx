const atlasNodes = [
  {
    className: "field-context-node-1",
    tag: "Food Share",
    value: "25",
    unit: "%",
    desc: "Of the nation's food tied to the Central Valley.",
    icon: (
      <>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    className: "field-context-node-2",
    tag: "Farmland Share",
    value: "1",
    unit: "%",
    desc: "Of U.S. farmland carrying outsized national importance.",
    icon: (
      <>
        <rect x="3" y="8" width="18" height="12" rx="1" />
        <line x1="3" y1="14" x2="21" y2="14" strokeDasharray="2 2" />
        <line x1="12" y1="4" x2="12" y2="8" />
      </>
    ),
  },
  {
    className: "field-context-node-3",
    tag: "Water Decline",
    value: "20",
    unit: "%",
    desc: "Possible regional water-supply decline by 2040.",
    icon: <path d="M12 2.5s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11z" />,
  },
  {
    className: "field-context-node-4",
    tag: "Jobs At Risk",
    value: "50",
    unit: "K",
    desc: "Jobs threatened if that decline accelerates.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 21v-1a5 5 0 0 1 6-5M15 21v-1a5 5 0 0 0-2-4" />
        <circle cx="17" cy="7" r="2.5" />
      </>
    ),
  },
];

const pillars = [
  {
    index: "01 / Concentration",
    title: "Food concentration.",
    text: "A region that produces so much food cannot be treated as a local agricultural issue alone.",
    icon: (
      <>
        <path d="M12 2L4 8v8l8 6 8-6V8L12 2z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    index: "02 / Infrastructure",
    title: "Water limits.",
    text: "Drought, groundwater pressure, subsidence, and allocation risk turn soil function into infrastructure.",
    icon: <path d="M12 2.5s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11z" />,
  },
  {
    index: "03 / Field Proof",
    title: "Field proof.",
    text: "Edison gives the broader climate claim a place to be tested against real farm decisions.",
    icon: <polyline points="20 6 9 17 4 12" />,
  },
];

function EdisonFieldContextSection({ id = "edison-valley-case", titleId = "field-context-title" }) {
  return (
    <section id={id} className="field-context-section" aria-labelledby={titleId}>
      <div className="field-context-inner">
        <div className="field-context-hero">
          <div className="field-context-copy">
            <div>
              <div className="field-context-eyebrow">Edison Field Context</div>
              <h2 id={titleId} className="field-context-headline">
                The Central Valley is where food security, water stress, and climate risk <span>meet</span>.
              </h2>
              <p className="field-context-body">
                Edison matters because the region is <strong>both nationally important and visibly exposed</strong>.
                It concentrates food production, water pressure, climate stress, jobs, and farm decision-making in
                one landscape.
              </p>
            </div>

            <div className="field-context-coords">
              <div className="field-context-coord-item">
                <div className="field-context-coord-label">Latitude</div>
                <div className="field-context-coord-value">
                  34.8<span>N</span>
                </div>
              </div>
              <div className="field-context-coord-item">
                <div className="field-context-coord-label">Longitude</div>
                <div className="field-context-coord-value">
                  119.5<span>W</span>
                </div>
              </div>
              <div className="field-context-coord-item">
                <div className="field-context-coord-label">Elevation</div>
                <div className="field-context-coord-value">
                  380<span>FT</span>
                </div>
              </div>
              <div className="field-context-coord-item">
                <div className="field-context-coord-label">Climate Zone</div>
                <div className="field-context-coord-value">
                  9B<span>USDA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="field-context-photo-frame">
            <div className="field-context-frame-header">
              <div className="field-context-frame-title">Central Valley / Field Conditions</div>
              <div className="field-context-frame-meta">April 2026 / Edison Farm</div>
            </div>

            <div className="field-context-frame-body">
              <img
                src="/images/visuals/edison/edison-aerial-mid-4.jpg"
                alt="Aerial view of Edison Farm and surrounding Central Valley agricultural landscape"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="field-context-frame-footer">
              <div className="field-context-frame-footer-text">
                The evidence becomes more consequential when it is tested in a place where{" "}
                <em>land, water, food, and economics are already under pressure</em>.
              </div>
            </div>
          </div>
        </div>

        <div className="field-context-atlas">
          <div className="field-context-atlas-header">
            <div className="field-context-atlas-label">The Central Valley Atlas</div>
            <div className="field-context-atlas-meta">
              Region Pressure Read / <strong>Live Conditions</strong>
            </div>
          </div>

          <div className="field-context-atlas-body">
            {atlasNodes.map((node) => (
              <article key={node.tag} className={`field-context-atlas-node ${node.className}`}>
                <div className={`field-context-node-dot ${node.className}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {node.icon}
                  </svg>
                </div>
                <div className="field-context-node-tag">{node.tag}</div>
                <div className="field-context-node-value">
                  {node.value}
                  <span>{node.unit}</span>
                </div>
                <p className="field-context-node-desc">{node.desc}</p>
                <div className="field-context-node-bar">
                  <div className="field-context-node-bar-fill" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="field-context-pillars">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="field-context-pillar">
              <div className="field-context-pillar-header">
                <div className="field-context-pillar-index">{pillar.index}</div>
                <div className="field-context-pillar-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {pillar.icon}
                  </svg>
                </div>
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EdisonFieldContextSection;
