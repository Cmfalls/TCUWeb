import { useState } from "react";

const FRAMEWORK_NODES = [
  {
    num: "01",
    color: "#7ab840",
    bg: "rgba(122, 184, 64, 0.06)",
    tag: "Regenerative Practices",
    label: ["Regenerative", "Practices"],
    meta: "Input layer",
    title: "The starting point. Every Edison study begins here.",
    desc: "What farmers actually do on the ground: cover cropping, composting, reduced tillage, rotational grazing. Edison measures how each practice propagates through the chain, not just its isolated effect.",
  },
  {
    num: "02",
    color: "#99cc33",
    bg: "rgba(153, 204, 51, 0.06)",
    tag: "Crop Performance",
    label: ["Crop", "Performance"],
    meta: "Farm output",
    title: "Does regenerative management hold up at commercial yield?",
    desc: "Yield, quality, pest resistance, and market viability across citrus, grapes, and agave. The agricultural case depends on crops performing under transition, not just in theory.",
  },
  {
    num: "03",
    color: "#c8a020",
    bg: "rgba(200, 160, 32, 0.06)",
    tag: "Soil Health",
    label: ["Soil", "Health"],
    meta: "Carbon + biology",
    title: "Soil condition is the mechanism everything else depends on.",
    desc: "Carbon content, biological activity, water retention, and structure. Measured across treatment and control plots at Edison, with long-horizon baselines that short-term pilots cannot produce.",
  },
  {
    num: "04",
    color: "#6fa3a0",
    bg: "rgba(111, 163, 160, 0.06)",
    tag: "Water Dynamics",
    label: ["Water", "Dynamics"],
    meta: "Infiltration + supply",
    title: "Healthy soil is water infrastructure. Edison measures how much.",
    desc: "Infiltration rates, groundwater recharge, irrigation demand, and drought resilience. In the Central Valley, where water is the binding constraint, this node is the most commercially urgent.",
  },
  {
    num: "05",
    color: "#e8a547",
    bg: "rgba(232, 165, 71, 0.06)",
    tag: "Economic Outcomes",
    label: ["Economic", "Outcomes"],
    meta: "Farm viability",
    title: "The transition has to pencil out. Edison tracks the full cost.",
    desc: "Input costs, yield revenue, transition timeline, and market premium potential. Growers need an economic model before they commit, not just a scientific one.",
  },
  {
    num: "06",
    color: "#c86020",
    bg: "rgba(200, 96, 32, 0.06)",
    tag: "Labor Practices",
    label: ["Labor", "Practices"],
    meta: "Workforce impact",
    title: "Regenerative agriculture changes how land gets worked.",
    desc: "Labor demand, skill requirements, and workforce conditions shift with practice. Edison tracks whether transition creates better or harder working conditions alongside its climate benefits.",
  },
  {
    num: "07",
    color: "#a03020",
    bg: "rgba(160, 48, 32, 0.06)",
    tag: "Planetary Health",
    label: ["Planetary", "Health"],
    meta: "Climate impact",
    title: "The end of the chain is the reason the chain exists.",
    desc: "Atmospheric carbon drawdown, biodiversity, water security, and food system resilience. Every upstream measurement connects here, making the climate case inspectable, not rhetorical.",
  },
];

const KNOW_CLAIMS = [
  {
    id: "emissions-rank",
    copy: (
      <>
        Agriculture is <strong>second only to fossil fuels</strong> for greenhouse gas emissions {"\u2014"} but its
        impact goes beyond emissions alone.
      </>
    ),
    pill: "Peer-reviewed consensus",
  },
  {
    id: "soil-health-disruption",
    copy: (
      <>
        By degrading soil health, agriculture has disrupted <strong>nature's most vital climate solution</strong>:
        photosynthesis-based carbon drawdown.
      </>
    ),
    pill: "Mechanism established",
  },
  {
    id: "systems-capacity",
    copy: (
      <>
        We're not just accelerating climate change {"\u2014"} we're <strong>dismantling the planet's natural capacity</strong>{" "}
        to repair itself.
      </>
    ),
    pill: "Systems-level conclusion",
  },
];

const UNKNOWN_CLAIMS = [
  {
    id: "soil-health-metrics",
    copy: (
      <>
        What are the <strong>key soil health metrics</strong> for monitoring yields during transition to healthier soils?
      </>
    ),
    pill: "Edison Phase One",
  },
  {
    id: "water-dynamics",
    copy: (
      <>
        What is the <strong>capacity of regenerative systems</strong> to influence soil-water dynamics and groundwater
        recharge in water-scarce environments like the Central Valley?
      </>
    ),
    pill: "Edison Phase One",
  },
  {
    id: "crop-system-adaptation",
    copy: (
      <>
        How do farmers best <strong>adapt for different soil types and cropping systems</strong> to maximize soil carbon
        accrual and resiliency?
      </>
    ),
    pill: "In design",
  },
  {
    id: "policy-transition",
    copy: (
      <>
        How can research <strong>inform policy to support equitable, science-based transitions</strong> and scale adoption?
      </>
    ),
    pill: "In design",
  },
];

function EdisonResearchFrameworkSection() {
  const [activeNode, setActiveNode] = useState(0);
  const active = FRAMEWORK_NODES[activeNode];

  const handleNodeKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveNode(index);
    }
  };

  return (
    <>
      <section className="section section-soft edison-framework-section">
        <div className="container">
          <div className="edison-framework-header">
            <div>
              <span className="eyebrow">Research framework</span>
              <h2 className="edison-framework-title">
                From practice to planetary health {"\u2014"} a connected research <span>chain.</span>
              </h2>
            </div>
            <p className="edison-framework-lede">
              Every R&amp;D project at Edison maps to this chain. Regenerative practices are not studied in isolation{" "}
              {"\u2014"} their effects are traced through soil, water, economics, and labor to measure real-world impact.
            </p>
          </div>

          <div className="edison-chain-wrap">
            <div className="edison-chain-toolbar">
              <div className="edison-chain-tag">Connected Research Chain</div>
              <div className="edison-chain-meta">7 nodes {"\u00b7"} Click any to explore</div>
            </div>

            <div className="edison-chain-diagram">
              <svg className="edison-chain-svg" viewBox="0 0 1100 130" xmlns="http://www.w3.org/2000/svg" aria-label="Connected research chain">
                <defs>
                  <marker id="edison-chain-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 Z" className="edison-chain-arr-head" />
                  </marker>
                </defs>

                {[136, 292, 448, 604, 760, 916].map((x, index) => (
                  <line
                    key={x}
                    className="edison-chain-connector"
                    x1={x}
                    y1="65"
                    x2={x + 30}
                    y2="65"
                    markerEnd="url(#edison-chain-arrow)"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  />
                ))}

                {FRAMEWORK_NODES.map((node, index) => {
                  const x = 2 + index * 156;

                  return (
                    <g
                      key={node.tag}
                      className={`edison-chain-node${activeNode === index ? " active" : ""}`}
                      role="button"
                      tabIndex="0"
                      aria-label={node.tag}
                      aria-pressed={activeNode === index}
                      onClick={() => setActiveNode(index)}
                      onKeyDown={(event) => handleNodeKeyDown(event, index)}
                      style={{
                        "--node-color": node.color,
                        "--node-bg": node.bg,
                        animationDelay: `${0.1 + index * 0.08}s`,
                      }}
                    >
                      <rect className="edison-chain-node-outer" x={x} y="22" width="134" height="86" rx="10" />
                      <rect className="edison-chain-node-accent" x={x} y="22" width="134" height="5" rx="2" />
                      <text className="edison-chain-node-num" x={x + 12} y="43">
                        {node.num}
                      </text>
                      <text className="edison-chain-node-label" x={x + 12} y="60">
                        {node.label[0]}
                      </text>
                      <text className="edison-chain-node-label" x={x + 12} y="74">
                        {node.label[1]}
                      </text>
                      <text className="edison-chain-node-meta" x={x + 12} y="96">
                        {node.meta}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="edison-chain-detail" style={{ "--detail-color": active.color }}>
              <div className="edison-chain-detail-inner">
                <div className="edison-chain-detail-num">{active.num}</div>
                <div className="edison-chain-detail-body">
                  <div className="edison-chain-detail-tag">{active.tag}</div>
                  <div className="edison-chain-detail-title">{active.title}</div>
                  <p className="edison-chain-detail-desc">{active.desc}</p>
                </div>
                <div className="edison-chain-detail-nav" aria-label="Choose a research chain node">
                  {FRAMEWORK_NODES.map((node, index) => (
                    <button
                      key={node.tag}
                      type="button"
                      className={`edison-chain-dot${activeNode === index ? " active" : ""}`}
                      aria-label={node.tag}
                      aria-pressed={activeNode === index}
                      onClick={() => setActiveNode(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="edison-chain-caption">
              <div className="edison-chain-caption-text">Each node connects to the next: no isolated measurements</div>
              <div className="edison-chain-caption-hint">Practice {"\u2192"} Impact chain</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section edison-knowns-section">
        <div className="container">
          <div className="edison-knowns-card">
            <div className="edison-knowns-toolbar">
              <div className="edison-knowns-toolbar-left">
                <div className="edison-knowns-toolbar-tag know">What We Know</div>
                <div className="edison-knowns-toolbar-sep" aria-hidden="true" />
                <div className="edison-knowns-toolbar-tag unknown">What We Don't Know Yet</div>
              </div>
              <div className="edison-knowns-toolbar-meta">3 established {"\u00b7"} 4 open questions</div>
            </div>

            <div className="edison-knowns-split">
              <div className="edison-knowns-side edison-knowns-side-know">
                <div className="edison-knowns-side-eyebrow">Established</div>
                <h2 className="edison-knowns-side-head">The science behind the problem is clear.</h2>

                <div className="edison-knowns-claims">
                  {KNOW_CLAIMS.map((claim) => (
                    <div className="edison-knowns-claim" key={claim.id}>
                      <div className="edison-knowns-claim-icon" aria-hidden="true">
                        <span className="edison-knowns-icon-check">{"\u2713"}</span>
                      </div>
                      <div className="edison-knowns-claim-body">
                        <p className="edison-knowns-claim-text">{claim.copy}</p>
                        <div className="edison-knowns-claim-pill know">{claim.pill}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="edison-knowns-side-foot">
                  <div className="edison-knowns-foot-count">3</div>
                  <div className="edison-knowns-foot-label">Established claims<br />from peer-reviewed science</div>
                </div>
              </div>

              <div className="edison-knowns-side edison-knowns-side-unknown">
                <div className="edison-knowns-side-eyebrow">Open Questions</div>
                <h2 className="edison-knowns-side-head">The proof at farm scale is what Edison builds.</h2>

                <div className="edison-knowns-claims">
                  {UNKNOWN_CLAIMS.map((claim) => (
                    <div className="edison-knowns-claim" key={claim.id}>
                      <div className="edison-knowns-claim-icon" aria-hidden="true">
                        <span className="edison-knowns-icon-q">?</span>
                      </div>
                      <div className="edison-knowns-claim-body">
                        <p className="edison-knowns-claim-text">{claim.copy}</p>
                        <div className="edison-knowns-claim-pill unknown">{claim.pill}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="edison-knowns-side-foot">
                  <div className="edison-knowns-foot-count">4</div>
                  <div className="edison-knowns-foot-label">Open questions<br />Edison is designed to answer</div>
                </div>
              </div>
            </div>

            <div className="edison-knowns-bridge">
              <div className="edison-knowns-bridge-icon" aria-hidden="true">
                <div className="edison-knowns-bridge-arrow" />
              </div>
              <p className="edison-knowns-bridge-text">
                The science behind soil carbon and regenerative agriculture is increasingly clear. What is missing is the
                bridge between that science and the working farm. <strong>That bridge is what The Edison Institute exists to build.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EdisonResearchFrameworkSection;
