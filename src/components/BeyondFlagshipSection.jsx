import { Link } from "react-router-dom";

function BeyondFlagshipSection({ content }) {
  return (
    <section className="beyond-flagship-section" aria-labelledby="beyond-flagship-title">
      <div className="beyond-flagship-inner">
        <div className="beyond-flagship-layout">
          <div className="beyond-flagship-copy">
            <div className="beyond-flagship-eyebrow">{content.eyebrow}</div>
            <h2 id="beyond-flagship-title" className="beyond-flagship-headline">
              Public participation and clear public understanding still <span>matter.</span>
            </h2>
            <p className="beyond-flagship-body">
              Edison is the flagship proof engine. These supporting routes <strong>widen participation</strong> and
              make the core ideas easier to carry forward.
            </p>
          </div>

          <div className="beyond-flagship-cards">
            {content.cards.map((card, index) => (
              <article
                key={card.title}
                className={`beyond-flagship-card ${index === 0 ? "beyond-flagship-card-adopt" : "beyond-flagship-card-learn"}`}
              >
                <div className="beyond-flagship-card-image">
                  <img src={card.image} alt="" />
                </div>
                <div className="beyond-flagship-card-body">
                  <div className="beyond-flagship-card-tag">{card.tag}</div>
                  <h3 className="beyond-flagship-card-title">{card.title}</h3>
                  <p className="beyond-flagship-card-desc">{card.text}</p>
                  <div className="beyond-flagship-card-features">
                    {card.bullets.map((bullet) => (
                      <div key={bullet} className="beyond-flagship-card-feature">
                        {bullet}
                      </div>
                    ))}
                  </div>
                  <Link className="beyond-flagship-card-cta" data-cta={card.cta} to={card.href}>
                    {card.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeyondFlagshipSection;
