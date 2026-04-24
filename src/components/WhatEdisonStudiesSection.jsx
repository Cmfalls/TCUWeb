const pillars = [
  {
    id: "01",
    className: "what-edison-pillar-1",
    tag: "Pillar One / Climate",
    title: "Climate-agriculture reciprocity.",
    text: "Track how farming practices alter soil carbon, biological function, and emissions while rising heat and climate instability alter the farm in return.",
    keywords: ["Soil carbon", "Biology", "Emissions", "Crop response"],
    thesis: "Starts with soil condition, crop response, and carbon dynamics.",
  },
  {
    id: "02",
    className: "what-edison-pillar-2",
    tag: "Pillar Two / Water",
    title: "Water security and resilience.",
    text: "Study infiltration, retention, irrigation systems, groundwater stress, and drought response as core parts of farm survival in a warming region.",
    keywords: ["Infiltration", "Retention", "Groundwater", "Irrigation"],
    thesis: "Water is not context here. It is a primary research pillar.",
  },
  {
    id: "03",
    className: "what-edison-pillar-3",
    tag: "Pillar Three / Economics",
    title: "Economic resilience.",
    text: "Connect agronomic results to cost, labor, risk, land management, policy barriers, and supply-chain consequence so serious institutions can evaluate transition clearly.",
    keywords: ["Cost", "Labor", "Policy", "Supply chain"],
    thesis: "If the economics never clear, the science does not travel.",
  },
];

function WhatEdisonStudiesSection() {
  return (
    <section className="what-edison-studies-section" aria-labelledby="what-edison-studies-title">
      <div className="what-edison-studies-inner">
        <div className="what-edison-studies-hero">
          <div className="what-edison-studies-copy">
            <div>
              <div className="what-edison-studies-eyebrow">What Edison Studies</div>
              <h2 id="what-edison-studies-title" className="what-edison-studies-headline">
                Edison keeps climate, water, and farm economics inside the same research{" "}
                <span>frame</span>.
              </h2>
              <p className="what-edison-studies-body">
                The institute is structured around three R&amp;D pillars so the work does{" "}
                <strong>not separate soil, water, climate, and farm viability</strong> into different
                conversations.
              </p>
            </div>
          </div>

          <div className="what-edison-diagram-card" aria-label="System integration diagram">
            <div className="what-edison-diagram-header">
              <div className="what-edison-diagram-title">System Integration</div>
              <div className="what-edison-diagram-meta">3 Pillars / 1 Frame</div>
            </div>

            <div className="what-edison-diagram-body">
              <svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Climate, water, and economics overlapping inside the Edison frame">
                <circle className="what-edison-venn-ring" cx="120" cy="110" r="70" fill="rgba(153, 204, 51, 0.12)" stroke="#99cc33" strokeWidth="1.5" />
                <circle className="what-edison-venn-ring" cx="200" cy="110" r="70" fill="rgba(111, 163, 160, 0.12)" stroke="#6fa3a0" strokeWidth="1.5" />
                <circle className="what-edison-venn-ring" cx="160" cy="180" r="70" fill="rgba(201, 160, 102, 0.12)" stroke="#c9a066" strokeWidth="1.5" />

                <g className="what-edison-venn-center-pulse">
                  <circle cx="160" cy="140" r="22" fill="#0a1f1a" stroke="#99cc33" strokeWidth="2" />
                  <text x="160" y="138" textAnchor="middle" fontFamily="Bebas Neue, sans-serif" fontSize="10" fill="#b8e655" letterSpacing="0.5">EDISON</text>
                  <text x="160" y="148" textAnchor="middle" fontFamily="Bebas Neue, sans-serif" fontSize="10" fill="#b8e655" letterSpacing="0.5">FRAME</text>
                </g>

                <g fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" letterSpacing="1.2">
                  <text className="what-edison-venn-label" x="65" y="58" fill="#99cc33">CLIMATE</text>
                  <text className="what-edison-venn-label" x="240" y="58" fill="#6fa3a0">WATER</text>
                  <text className="what-edison-venn-label" x="160" y="260" textAnchor="middle" fill="#c9a066">ECONOMICS</text>
                </g>

                <g fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#f5efe1" opacity="0.4">
                  <text x="32" y="75">01</text>
                  <text x="278" y="75">02</text>
                  <text x="90" y="250">03</text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="what-edison-pillars">
          {pillars.map((pillar) => (
            <article key={pillar.id} className={`what-edison-pillar ${pillar.className}`}>
              <div className="what-edison-pillar-medallion">{pillar.id}</div>
              <div className="what-edison-pillar-tag">{pillar.tag}</div>
              <h3 className="what-edison-pillar-title">{pillar.title}</h3>
              <p className="what-edison-pillar-desc">{pillar.text}</p>
              <div className="what-edison-pillar-keywords">
                {pillar.keywords.map((keyword) => (
                  <span key={keyword} className="what-edison-keyword">{keyword}</span>
                ))}
              </div>
              <div className="what-edison-pillar-thesis">
                <div className="what-edison-pillar-thesis-label">Thesis</div>
                <div className="what-edison-pillar-thesis-text">{pillar.thesis}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatEdisonStudiesSection;
