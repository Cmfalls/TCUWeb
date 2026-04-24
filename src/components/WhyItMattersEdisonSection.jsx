const cardIcons = [
  (
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </>
  ),
  (
    <>
      <path d="M12 2L4 8v8l8 6 8-6V8L12 2z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  (
    <>
      <path d="M2 12 L8 6 L14 12 L22 4" />
      <polyline points="16 4 22 4 22 10" />
    </>
  ),
];

function WhyItMattersEdisonSection({ content }) {
  return (
    <section className="edison-why-matters-section" aria-labelledby="edison-why-matters-title">
      <div className="edison-why-matters-inner">
        <div className="edison-why-matters-head-row">
          <div>
            <div className="edison-why-matters-eyebrow">{content.eyebrow}</div>
            <h2 id="edison-why-matters-title" className="edison-why-matters-headline">
              Edison helps turn conviction into something institutions can <span>examine</span>.
            </h2>
          </div>
          <div>
            <p className="edison-why-matters-lede">
              The case for regenerative agriculture gets stronger when{" "}
              <strong>public language, scientific framing, and working-land evidence reinforce one another</strong>{" "}
              over time.
            </p>
            <div className="edison-why-matters-progression" aria-label="Conviction becomes institutional trust">
              <div className="edison-why-matters-prog-node start">Conviction</div>
              <div className="edison-why-matters-prog-arrow" />
              <div className="edison-why-matters-prog-node end">Institutional Trust</div>
            </div>
          </div>
        </div>

        <div className="edison-why-matters-cards">
          {content.items.map((item, index) => (
            <article key={item.title} className="edison-why-matters-card">
              <div className="edison-why-matters-card-top">
                <div className="edison-why-matters-card-top-row">
                  <div className="edison-why-matters-card-medallion" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {cardIcons[index] || cardIcons[0]}
                    </svg>
                  </div>
                  <div className="edison-why-matters-card-step">Step {String(index + 1).padStart(2, "0")} / 03</div>
                </div>
                <div className="edison-why-matters-card-tag">{item.kicker}</div>
                <h3 className="edison-why-matters-card-claim">{item.title}</h3>
              </div>
              <div className="edison-why-matters-card-body">
                <p className="edison-why-matters-card-desc">{item.text}</p>
              </div>
              <div className="edison-why-matters-card-thesis">
                <div className="edison-why-matters-card-thesis-label">-&gt; Thesis</div>
                <div className="edison-why-matters-card-thesis-text">{item.cue}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyItMattersEdisonSection;
