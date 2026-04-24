const milestoneMeta = [
  { tag: "Site Assessment", status: "Active", statusClass: "phase-one-status-active" },
  { tag: "Risk Framework", status: "Active", statusClass: "phase-one-status-active" },
  { tag: "Measurement", status: "Next Up", statusClass: "phase-one-status-next" },
  { tag: "Strategy", status: "Planned", statusClass: "phase-one-status-planned" },
  { tag: "Engagement", status: "Planned", statusClass: "phase-one-status-planned" },
  { tag: "Program Launch", status: "Planned", statusClass: "phase-one-status-planned" },
];

function PhaseOneSection({ content }) {
  return (
    <section className="phase-one-section" aria-labelledby="phase-one-title">
      <div className="phase-one-inner">
        <div className="phase-one-layout">
          <div className="phase-one-copy">
            <div>
              <div className="phase-one-eyebrow">{content.eyebrow}</div>
              <h2 id="phase-one-title" className="phase-one-headline">
                The first work is design, baseline, and <span>coherence</span>.
              </h2>
              <p className="phase-one-body">
                Phase one is where Edison becomes a credible institution rather than a loose collection of
                future projects. The early job is to{" "}
                <strong>understand the land, define the measurements, and organize the first research program</strong>{" "}
                around real field conditions.
              </p>
            </div>

            <div className="phase-one-meta">
              <div className="phase-one-meta-label">Phase One / Active</div>
              <div className="phase-one-meta-grid">
                <div className="phase-one-meta-item">
                  <div className="phase-one-meta-key">Timeline</div>
                  <div className="phase-one-meta-val">
                    18<span>MO</span>
                  </div>
                </div>
                <div className="phase-one-meta-item">
                  <div className="phase-one-meta-key">Milestones</div>
                  <div className="phase-one-meta-val">6</div>
                </div>
                <div className="phase-one-meta-item">
                  <div className="phase-one-meta-key">Started</div>
                  <div className="phase-one-meta-val">
                    2026<span>Q1</span>
                  </div>
                </div>
                <div className="phase-one-meta-item">
                  <div className="phase-one-meta-key">Budget</div>
                  <div className="phase-one-meta-val">
                    $3.5<span>M</span>
                  </div>
                </div>
              </div>

              <div className="phase-one-progress">
                <div className="phase-one-progress-top">
                  <div className="phase-one-progress-label">Phase Progress</div>
                  <div className="phase-one-progress-count">
                    <strong>2</strong> / 6 Milestones
                  </div>
                </div>
                <div className="phase-one-progress-track">
                  <div className="phase-one-progress-fill" />
                </div>
              </div>
            </div>
          </div>

          <div className="phase-one-timeline">
            {content.steps.map((item, index) => {
              const meta = milestoneMeta[index] || milestoneMeta[milestoneMeta.length - 1];

              return (
                <article key={item.step} className="phase-one-milestone">
                  <div className="phase-one-milestone-accent" />
                  <div className="phase-one-milestone-head">
                    <div className="phase-one-milestone-num">{item.step}</div>
                    <div className="phase-one-milestone-title-col">
                      <h3 className="phase-one-milestone-title">{item.title}.</h3>
                      <div className="phase-one-milestone-tag">{meta.tag}</div>
                    </div>
                    <div className={`phase-one-milestone-status ${meta.statusClass}`}>{meta.status}</div>
                  </div>
                  <p className="phase-one-milestone-desc">{item.text}</p>
                  <div className="phase-one-milestone-outcome">{item.output}</div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhaseOneSection;
