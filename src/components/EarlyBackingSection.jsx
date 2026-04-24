const capacityIcons = [
  (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 21v-1a5 5 0 0 1 5-5" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M14 21v-1a4 4 0 0 0-1-3" />
    </>
  ),
  (
    <>
      <line x1="3" y1="12" x2="3" y2="20" />
      <line x1="9" y1="6" x2="9" y2="20" />
      <line x1="15" y1="10" x2="15" y2="20" />
      <line x1="21" y1="4" x2="21" y2="20" />
    </>
  ),
  <path d="M12 2.5s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11z" />,
  (
    <>
      <path d="M2 12 L8 6 L14 12 L22 4" />
      <polyline points="16 4 22 4 22 10" />
    </>
  ),
];

function EarlyBackingSection({ content }) {
  const stackItems = [...content.items]
    .map((item, index) => ({
      title: item.title,
      step: String(index + 1).padStart(2, "0"),
    }))
    .reverse();

  return (
    <section className="early-backing-section" aria-labelledby="early-backing-title">
      <div className="early-backing-inner">
        <div className="early-backing-hero">
          <div className="early-backing-copy">
            <div>
              <div className="early-backing-eyebrow">{content.eyebrow}</div>
              <h2 id="early-backing-title" className="early-backing-headline">
                Edison has to be built as research <span>capacity</span>, not only as a place.
              </h2>
              <p className="early-backing-body">{content.lede}</p>
            </div>

            <div className="early-backing-summary">
              <div className="early-backing-summary-label">What Backing Unlocks</div>
              <div className="early-backing-summary-text">
                Every layer of capacity you fund builds on the one below it. Land without measurement is a site.
                Measurement without people is data. <em>Early backing builds them together</em>.
              </div>
            </div>
          </div>

          <div className="early-backing-stack-card">
            <div className="early-backing-stack-header">
              <div className="early-backing-stack-title">Capacity Stack</div>
              <div className="early-backing-stack-meta">4 Layers / Bottom Up</div>
            </div>

            <div className="early-backing-stack-body">
              <div className="early-backing-stack-visual" aria-hidden="true">
                <div className="early-backing-stack-visual-kicker">Capacity accumulates across people, systems, and land</div>
                <div className="early-backing-stack-visual-note">
                  Early backing does more than secure a farm. It creates the operating platform that lets evidence travel.
                </div>
              </div>

              <div className="early-backing-stack-arrow">Up / <span>Reach</span> / What travels beyond Edison</div>
              {stackItems.map((item, index) => (
                <div key={item.title} className={`early-backing-block early-backing-block-${index + 1}`}>
                  <div className="early-backing-block-num">{item.step}</div>
                  <div className="early-backing-block-text">{item.title}</div>
                </div>
              ))}
              <div className="early-backing-stack-foundation">
                Down / <span>Foundation</span> / Without this, the farm is a site
              </div>
            </div>
          </div>
        </div>

        <div className="early-backing-capacities">
          {content.items.map((item, index) => (
            <article key={item.title} className={`early-backing-capacity early-backing-capacity-${index + 1}`}>
              <div className="early-backing-capacity-icon-zone">
                <div className="early-backing-capacity-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {capacityIcons[index] || capacityIcons[0]}
                  </svg>
                </div>
                <div className="early-backing-capacity-num">{String(index + 1).padStart(2, "0")}</div>
              </div>
              <div className="early-backing-capacity-body">
                <h3>{item.title}.</h3>
                <p>{item.text}</p>
              </div>
              <div className="early-backing-capacity-thesis">
                <div className="early-backing-capacity-thesis-text">{item.why}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EarlyBackingSection;
