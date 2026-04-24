import { useState } from "react";

const progression = [
  { id: "1", label: "Conviction" },
  { id: "2", label: "Design" },
  { id: "3", label: "Measurement" },
  { id: "4", label: "Institutional Trust" },
];

const cards = [
  {
    id: "1",
    step: "01",
    phase: "Long-Horizon Research",
    headline: "The point is continuity, not a short pilot cycle.",
    body:
      "Edison is valuable because it is designed for sustained observation, management control, and long-term study rather than one-season demonstration plots.",
    pullquote:
      "Confidence compounds when the evidence is allowed to stay on the ground long enough.",
    image: "/images/visuals/edison/edison-aerial-wide-1.jpg",
    imageAlt: "Aerial view of Edison research fields in California",
  },
  {
    id: "2",
    step: "02",
    phase: "Phase-One Discipline",
    headline: "The first job is design before declaration.",
    body:
      "Baseline, measurement, farm management, and research coherence all come before claims about what the institute can prove.",
    pullquote:
      "If the initial design is weak, the rest of the institution inherits that weakness.",
    image: "/images/visuals/edison/rd/rd-soil-science.jpg",
    imageAlt: "Soil science research activity in the field",
  },
  {
    id: "4",
    step: "03",
    phase: "Institutional Role",
    headline: "Field proof can steady the broader climate case.",
    body:
      "Edison gives growers, funders, and public institutions a place where serious evidence can accumulate instead of remaining symbolic or anecdotal.",
    pullquote: "This is how bold public claims become durable institutions.",
    image: "/images/visuals/edison/rd/rd-field-researcher.jpg",
    imageAlt: "Field researcher documenting conditions on working land",
  },
];

function WhyItMattersSection() {
  const [activeWord, setActiveWord] = useState(null);

  return (
    <section className="why-matters-section">
      <div className="container why-matters-shell">
        <div className="why-matters-intro">
          <div className="why-matters-intro-copy">
            <span className="eyebrow">Why It Matters</span>
            <div className="why-matters-intro-rule" aria-hidden="true" />
            <h2>Edison helps turn conviction into something institutions can examine.</h2>
            <p>
              The case for regenerative agriculture gets stronger when public language, scientific framing, and
              working-land evidence reinforce one another over time.
            </p>
            <div className="why-matters-intro-foot">
              <span>Public claim</span>
              <span>Field design</span>
              <span>Measured trust</span>
            </div>
          </div>

          <figure className="why-matters-hero-visual">
            <div className="why-matters-hero-chip">Working-land proof</div>
            <img
              src="/images/visuals/edison/edison-aerial-compound-6.jpg"
              alt="Aerial view of Edison working-land research site"
              loading="lazy"
            />
            <figcaption>
              <span>Phase One Field Frame</span>
              Working land gives the public claim a place to be measured, revised, and trusted.
            </figcaption>
          </figure>
        </div>

        <div className="why-matters-progression" aria-label="Evidence progression">
          {progression.map((word, index) => (
            <div key={word.id} className="why-matters-progress-pair">
              <span className="why-matters-progress-index">{String(index + 1).padStart(2, "0")}</span>
              <span className={`why-matters-progress-label ${activeWord === word.id ? "lit" : ""}`}>{word.label}</span>
              {index < progression.length - 1 ? <span aria-hidden="true" className="why-matters-progress-arrow" /> : null}
            </div>
          ))}
        </div>

        <div className="why-matters-cards" onMouseLeave={() => setActiveWord(null)}>
          {cards.map((card) => (
            <article
              key={card.step}
              className="why-matters-card"
              tabIndex={0}
              onFocus={() => setActiveWord(card.id)}
              onMouseEnter={() => setActiveWord(card.id)}
              onBlur={() => setActiveWord(null)}
            >
              <div className="why-matters-card-head">
                <div className="why-matters-card-step">Step {card.step}</div>
                <div className="why-matters-phase">
                  <span />
                  <strong>{card.phase}</strong>
                </div>
              </div>
              <div className="why-matters-card-media">
                <img src={card.image} alt={card.imageAlt} loading="lazy" />
              </div>
              <div className="why-matters-card-body">
                <h3>{card.headline}</h3>
                <p>{card.body}</p>
              </div>
              <blockquote>{card.pullquote}</blockquote>
            </article>
          ))}
        </div>

        <div className="why-matters-meta">
          <span>The Edison Institute / Phase One</span>
          <span>325 acres / Central Valley, CA</span>
        </div>
      </div>
    </section>
  );
}

export default WhyItMattersSection;
