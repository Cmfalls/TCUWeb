import { Link } from "react-router-dom";

function WaysToBackSection({ caseStatement, cards }) {
  const pathwayMeta = [
    { cls: "pathway-1", label: "Support The Carbon Underground", heading: "Fund the public case.", cta: "Support TCU" },
    { cls: "pathway-2", label: "Support The Edison Institute", heading: "Back Edison field research.", cta: "Visit Edison" },
    { cls: "pathway-3", label: "Partnership & Philanthropy", heading: "Start a serious conversation.", cta: "Contact TCU" },
  ];

  return (
    <section className="ways-back-section">
      <div className="ways-back-shell">
        <div className="ways-back-head-row">
          <div>
            <div className="ways-back-eyebrow">Ways To Back The Work</div>
            <h2 className="ways-back-headline">Different kinds of support strengthen different parts of the mission.</h2>
          </div>
          <p className="ways-back-lede">{caseStatement}</p>
        </div>

        <div className="ways-back-pathways">
          {cards.map((card, idx) => {
            const meta = pathwayMeta[idx] || pathwayMeta[pathwayMeta.length - 1];
            const pathwayIndex = String(idx + 1).padStart(2, "0");

            return (
              <article key={card.title} className={`ways-back-pathway ${meta.cls}`}>
                <div className="ways-back-pathway-top">
                  <div className="ways-back-pathway-strip" />
                  <div className="ways-back-pathway-index">{pathwayIndex}</div>
                  <div className="ways-back-pathway-label">{meta.label}</div>
                  <h3>{meta.heading}</h3>
                </div>

                <p className="ways-back-pathway-desc">{card.text}</p>

                <div className="ways-back-best-for">
                  <div className="ways-back-best-for-label">Best For</div>
                  <div className="ways-back-best-for-text">{card.fit}</div>
                </div>

                <div className="ways-back-pathway-cta">
                  {card.external ? (
                    <a className="ways-back-pathway-cta-label" href={card.href} target="_blank" rel="noreferrer">
                      {meta.cta}
                    </a>
                  ) : card.href?.startsWith("mailto:") ? (
                    <a className="ways-back-pathway-cta-label" href={card.href}>
                      {meta.cta}
                    </a>
                  ) : (
                    <Link className="ways-back-pathway-cta-label" to={card.href}>
                      {meta.cta}
                    </Link>
                  )}
                  <div className="ways-back-pathway-cta-arrow" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                    </svg>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="ways-back-contact-line">
          <div className="ways-back-contact-left">
            <div className="ways-back-contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="ways-back-contact-text">
              <strong>Not sure which path fits?</strong>
              We&apos;ll help match your intent, timeline, and priorities to the right part of the work.
            </div>
          </div>
          <a className="ways-back-contact-cta" href="mailto:info@thecarbonunderground.org?subject=Support%20Path%20Question">
            Talk to our team
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 8 H13 M9 4 L13 8 L9 12" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default WaysToBackSection;