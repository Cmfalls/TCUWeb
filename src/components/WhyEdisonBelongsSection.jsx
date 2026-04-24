const copyBlocks = [
  {
    tag: "The Pressure",
    heading: "Not a generic agricultural backdrop.",
    text: (
      <>
        Lower snowpack, tighter water deliveries, heavier groundwater pumping, subsidence, and forced fallowing are
        already changing{" "}
        <strong>what farmers can grow, what infrastructure still works, and how much risk the region can absorb</strong>.
      </>
    ),
  },
  {
    tag: "The Research Case",
    heading: "Edison puts research inside that pressure.",
    text: (
      <>
        It creates a place where climate, water, soil, and farm economics can be studied together rather than split
        into separate conversations. This is not a small-plot trial. It is a{" "}
        <strong>commercial-scale operation tested under real conditions</strong> - the same pressures every farmer
        faces.
      </>
    ),
  },
  {
    tag: "The Proof Standard",
    heading: "If it does not work here, it does not scale.",
    text: (
      <>
        If it does work here, it becomes <strong>proof that farmers can trust</strong>. Not promises they have to
        question. The Valley's scale, stress, and visibility make every result consequential beyond the farm boundary.
      </>
    ),
  },
];

function WhyEdisonBelongsSection({ content }) {
  const accentWord = "collide.";
  const titleBody = content.title.endsWith(accentWord)
    ? content.title.slice(0, -accentWord.length).trim()
    : content.title;
  const titleAccent = content.title.endsWith(accentWord) ? accentWord : "";

  return (
    <section id="edison-valley-case" className="why-edison-belongs-section" aria-labelledby="why-edison-belongs-title">
      <div className="why-edison-belongs-inner">
        <div className="why-edison-belongs-hero">
          <div className="why-edison-photo-frame">
            <div className="why-edison-frame-header">
              <div className="why-edison-frame-title">Central Valley / Field Conditions</div>
              <div className="why-edison-frame-meta">Climate Stress / Active</div>
            </div>

            <div className="why-edison-frame-body">
              <img src={content.image} alt={content.imageAlt} />
              <div className="why-edison-frame-caption">
                <div className="why-edison-frame-caption-text">{content.caption}</div>
              </div>
            </div>
          </div>

          <div className="why-edison-text-col">
            <div>
              <div className="why-edison-eyebrow">{content.eyebrow}</div>
              <h2 id="why-edison-belongs-title" className="why-edison-headline">
                {titleBody} {titleAccent && <span>{titleAccent}</span>}
              </h2>
            </div>

            <div className="why-edison-stat-pair">
              <div className="why-edison-stat-box">
                <div className="why-edison-stat-num">25%</div>
                <div className="why-edison-stat-desc">
                  <strong>Of the nation's food</strong> produced on 1% of U.S. farmland.
                </div>
              </div>
              <div className="why-edison-stat-box">
                <div className="why-edison-stat-num">40%</div>
                <div className="why-edison-stat-desc">
                  <strong>Of U.S. fruits and nuts</strong> tied to this single region.
                </div>
              </div>
            </div>

            <div className="why-edison-thesis-card">
              <div className="why-edison-thesis-label">Why It Matters</div>
              <div className="why-edison-thesis-text">
                That concentration makes the Valley one of the clearest places in the country to study{" "}
                <em>what climate disruption means for working land</em>.
              </div>
            </div>
          </div>
        </div>

        <div className="why-edison-copy-band">
          {copyBlocks.map((block, index) => (
            <article key={block.tag} className={`why-edison-copy-block why-edison-copy-block-${index + 1}`}>
              <div className="why-edison-block-tag">{block.tag}</div>
              <h3>{block.heading}</h3>
              <p>{block.text}</p>
            </article>
          ))}
        </div>

        <div className="why-edison-covenant">
          <div className="why-edison-covenant-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
          </div>
          <div>
            <div className="why-edison-covenant-tag">Restrictive Covenant</div>
            <p>
              The land is permanently dedicated to{" "}
              <strong>scientific research, education, and regenerative agriculture</strong> - giving Edison full
              management control and something almost no other research institution has: the freedom to commit to
              long-term research, measuring what happens over years and decades, not months or seasons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyEdisonBelongsSection;
