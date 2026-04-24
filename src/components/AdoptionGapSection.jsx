const barrierIcons = [
  (
    <>
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </>
  ),
  (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20M2 12h20" />
    </>
  ),
  (
    <>
      <path d="M12 15a3 3 0 1 0-3-3" />
      <line x1="12" y1="17" x2="12" y2="19" />
      <circle cx="12" cy="12" r="10" />
    </>
  ),
  (
    <>
      <path d="M4 14h6v6H4zM14 4h6v6h-6z" />
      <path d="M14 20l6-6M4 10L10 4" />
    </>
  ),
  (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 17h7M17 14v7" strokeDasharray="2 2" />
    </>
  ),
  (
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </>
  ),
];

function AdoptionGapSection({ content }) {
  const [opening, proof] = content.lede.split(" But farmers");
  const proofSentence = proof ? `But farmers${proof}` : "";

  return (
    <section className="adoption-gap-section" aria-labelledby="adoption-gap-title">
      <div className="adoption-gap-inner">
        <div className="adoption-gap-layout">
          <div className="adoption-gap-copy">
            <div>
              <div className="adoption-gap-eyebrow">{content.eyebrow}</div>
              <h2 id="adoption-gap-title" className="adoption-gap-headline">
                Farmers are not the problem. They are the first victims of climate change, and the
                essential partners in <span>solving it</span>.
              </h2>
              <p className="adoption-gap-body">
                There are 600 million farms on this planet and 2 billion people who grow our food. If
                we can give them the knowledge, the evidence, and the confidence to change how they farm,
                we <strong>unlock the single largest lever for climate action on earth</strong>.
              </p>
              <p className="adoption-gap-body">{proofSentence}</p>
            </div>

            <div className="adoption-gap-mission">
              <div className="adoption-gap-mission-label">The Bridge</div>
              <div className="adoption-gap-mission-text">{content.bridge}</div>
            </div>
          </div>

          <div className="adoption-gap-panel">
            <figure className="adoption-gap-photo">
              <img src={content.visual.src} alt={content.visual.alt} />
              <figcaption>{content.visual.caption}</figcaption>
            </figure>

            <div className="adoption-gap-stats">
              {content.stats.map((item) => (
                <article key={item.value} className="adoption-gap-stat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>

            <div className="adoption-gap-barriers" aria-label="Barriers to adoption">
              {content.items.map((item, index) => (
                <article key={item.title} className="adoption-gap-barrier">
                  <div className="adoption-gap-barrier-top">
                    <div className="adoption-gap-barrier-num">{String(index + 1).padStart(2, "0")}</div>
                    <div className="adoption-gap-barrier-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {barrierIcons[index] || barrierIcons[0]}
                      </svg>
                    </div>
                  </div>
                  <h3>{item.title}.</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdoptionGapSection;
