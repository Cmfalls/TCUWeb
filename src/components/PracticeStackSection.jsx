const practiceCardMeta = [
  {
    imageLabel: "IMG / Mulch / Cover Crop",
    accent: "green",
  },
  {
    imageLabel: "IMG / Compost / Soil",
    accent: "soil",
  },
  {
    imageLabel: "IMG / Intercropping / Field",
    accent: "water",
  },
  {
    imageLabel: "IMG / Hedgerow / Road",
    accent: "bright",
  },
];

function PracticeStackSection({ content }) {
  const accentWord = "inspect.";
  const titleBody = content.title.endsWith(accentWord)
    ? content.title.slice(0, -accentWord.length).trim()
    : content.title;
  const titleAccent = content.title.endsWith(accentWord) ? accentWord : "";

  return (
    <section className="practice-stack-section" aria-labelledby="practice-stack-title">
      <div className="practice-stack-inner">
        <div className="practice-stack-header">
          <div className="practice-stack-header-left">
            <div className="practice-stack-eyebrow">{content.eyebrow}</div>
            <h2 id="practice-stack-title" className="practice-stack-headline">
              {titleBody} {titleAccent && <span>{titleAccent}</span>}
            </h2>
          </div>

          <div className="practice-stack-header-right">
            <p className="practice-stack-body">
              The farm plan names the practical tools Edison can test and refine. Each practice affects{" "}
              <strong>soil, water, biodiversity, cost, and farm operations</strong> in different ways.
            </p>

            <div className="practice-stack-meta" aria-label="Practice stack summary">
              <div className="practice-stack-meta-item">
                <div className="practice-stack-meta-label">Practices</div>
                <div className="practice-stack-meta-value">{content.items.length}</div>
              </div>
              <div className="practice-stack-meta-divider" />
              <div className="practice-stack-meta-item">
                <div className="practice-stack-meta-label">Standard</div>
                <div className="practice-stack-meta-value">
                  NRCS<span>CPS</span>
                </div>
              </div>
              <div className="practice-stack-meta-divider" />
              <div className="practice-stack-meta-item">
                <div className="practice-stack-meta-label">Cost range</div>
                <div className="practice-stack-meta-value">
                  $200<span>-3K/ac</span>
                </div>
              </div>
              <div className="practice-stack-meta-divider" />
              <div className="practice-stack-meta-item">
                <div className="practice-stack-meta-label">Phase</div>
                <div className="practice-stack-meta-value">
                  One<span>Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="practice-stack-grid">
          {content.items.map((item, index) => {
            const meta = practiceCardMeta[index] || practiceCardMeta[practiceCardMeta.length - 1];

            return (
              <article
                key={item.title}
                className={`practice-stack-card practice-stack-card-${index + 1} is-${meta.accent}`}
              >
                <div className="practice-stack-card-image">
                  <img src={item.image} alt={item.imageAlt} />
                </div>

                <div className="practice-stack-card-body">
                  <div className="practice-stack-standard">{item.standard}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <div className="practice-stack-cost">
                  <div className="practice-stack-cost-label">-&gt; Est. Cost</div>
                  <div className="practice-stack-cost-divider" />
                  <div className="practice-stack-cost-value">{item.cost}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PracticeStackSection;
