function EdisonInstitutionFrameSection({ content }) {
  return (
    <section className="edison-institution-frame-section" aria-labelledby="edison-institution-frame-title">
      <div className="edison-institution-frame-inner">
        <div className="edison-institution-frame-header">
          <div>
            <div className="edison-institution-frame-eyebrow">{content.eyebrow}</div>
            <h2 id="edison-institution-frame-title">{content.title}</h2>
          </div>
          <div className="edison-institution-frame-artifact">
            <div className="edison-institution-frame-lede">
              <p>{content.lede}</p>
            </div>

            <div className="edison-institution-signal-board" aria-label="Key Edison frame signals">
              <div className="edison-institution-signal-chart" aria-hidden="true">
                <div className="edison-institution-signal-line edison-institution-signal-line-1" />
                <div className="edison-institution-signal-line edison-institution-signal-line-2" />
                <div className="edison-institution-signal-line edison-institution-signal-line-3" />
                <div className="edison-institution-signal-node edison-institution-signal-node-1" />
                <div className="edison-institution-signal-node edison-institution-signal-node-2" />
                <div className="edison-institution-signal-node edison-institution-signal-node-3" />
                <div className="edison-institution-signal-caption">Central Valley / working-land pressure</div>
              </div>

              <div className="edison-institution-signal-proof">{content.proofLine}</div>

              <div className="edison-institution-signal-stats">
                {content.stats.map((stat) => (
                  <article key={stat.label} className="edison-institution-signal-stat">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                    <cite>{stat.source}</cite>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="edison-institution-frame-grid">
          {content.cards.map((card) => (
            <article key={card.number} className="edison-institution-frame-card">
              <div className="edison-institution-frame-card-top">
                <span>{card.number}</span>
                <em>{card.label}</em>
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <div className="edison-institution-frame-bottom">
          <div className="edison-institution-build">
            <div className="edison-institution-build-title">How we build the ecosystem</div>
            <div className="edison-institution-build-grid">
              {content.buildSteps.map((step, index) => (
                <article key={step.title} className="edison-institution-build-step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EdisonInstitutionFrameSection;
