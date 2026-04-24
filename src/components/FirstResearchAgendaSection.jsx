const researchCardMeta = [
  { pillar: "Climate / Pillar 01", accent: "climate" },
  { pillar: "Climate / Pillar 01", accent: "water" },
  { pillar: "Water / Pillar 02",   accent: "warn" },
  { pillar: "Economics / Pillar 03", accent: "gold" },
  { pillar: "Climate / Pillar 01", accent: "bright" },
  { pillar: "Water / Pillar 02",   accent: "water" },
];

function FirstResearchAgendaSection({ content }) {
  const mainItems = content.items.slice(0, content.items.length - 1);
  const pipelineItem = content.items[content.items.length - 1];

  return (
    <section className="first-research-agenda-section" aria-labelledby="first-research-agenda-title">
      <div className="first-research-agenda-inner">
        <div className="first-research-agenda-header">
          <div className="first-research-agenda-header-left">
            <div className="first-research-agenda-eyebrow">{content.eyebrow}</div>
            <h2 id="first-research-agenda-title" className="first-research-agenda-headline">
              The farm plan turns the mission into <span>testable work.</span>
            </h2>
          </div>

          <div className="first-research-agenda-header-right">
            <p className="first-research-agenda-body">{content.lede}</p>

            <div className="first-research-agenda-meta" aria-label="Research agenda summary">
              <div className="first-research-agenda-meta-item">
                <div className="first-research-agenda-meta-label">Research areas</div>
                <div className="first-research-agenda-meta-value">{content.items.length}</div>
              </div>
              <div className="first-research-agenda-meta-divider" />
              <div className="first-research-agenda-meta-item">
                <div className="first-research-agenda-meta-label">Pillars covered</div>
                <div className="first-research-agenda-meta-value">3</div>
              </div>
              <div className="first-research-agenda-meta-divider" />
              <div className="first-research-agenda-meta-item">
                <div className="first-research-agenda-meta-label">Crop programs</div>
                <div className="first-research-agenda-meta-value">3<span>Core</span></div>
              </div>
              <div className="first-research-agenda-meta-divider" />
              <div className="first-research-agenda-meta-item">
                <div className="first-research-agenda-meta-label">Phase</div>
                <div className="first-research-agenda-meta-value">One<span>Active</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="first-research-agenda-grid">
          {mainItems.map((item, index) => {
            const meta = researchCardMeta[index] || researchCardMeta[researchCardMeta.length - 1];

            return (
              <article
                key={item.title}
                className={`first-research-agenda-card first-research-agenda-card-${index + 1} is-${meta.accent}`}
              >
                <div className="first-research-agenda-card-image">
                  <img src={item.image} alt={item.imageAlt} />
                  <div className="first-research-agenda-pillar-badge">{meta.pillar}</div>
                </div>

                <div className="first-research-agenda-card-body">
                  <h3>{item.title}</h3>
                  {item.question && (
                    <p className="first-research-agenda-question">{item.question}</p>
                  )}
                </div>

                <dl className="first-research-agenda-specs">
                  <div>
                    <dt>Crop / System</dt>
                    <dd>{item.system || "In development"}</dd>
                  </div>
                  <div>
                    <dt>Duration</dt>
                    <dd>{item.durationStatus || "Multi-year"}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>

        {pipelineItem && (
          <div className="first-research-agenda-pipeline">
            <div className="first-research-agenda-pipeline-label">
              <span>→ Pipeline</span>
              <h3>{pipelineItem.title}</h3>
            </div>
            <p className="first-research-agenda-pipeline-body">{pipelineItem.text}</p>
            <div className="first-research-agenda-pipeline-system">
              <span>Candidates under consideration</span>
              <strong>{pipelineItem.system}</strong>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default FirstResearchAgendaSection;
