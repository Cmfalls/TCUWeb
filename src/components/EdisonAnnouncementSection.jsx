import { Link } from "react-router-dom";

const stats = [
  {
    label: "Land",
    value: "325",
    text: "Acres dedicated to research and demonstration",
  },
  {
    label: "Food supply",
    value: "25%",
    text: "Of the nation's food tied to the Central Valley",
  },
  {
    label: "Specialty crops",
    value: "40%",
    text: "Of U.S. fruits and nuts connected to this region",
  },
  {
    label: "Farmland share",
    value: "1%",
    text: "Of U.S. farmland carrying outsized national importance",
  },
];

const pillars = [
  {
    meta: "01 / Measurement",
    title: "Baseline studies and monitoring",
    text:
      "The work starts with measuring soil, water, infrastructure, and farm condition so change can be tracked credibly over time.",
  },
  {
    meta: "02 / Research",
    title: "Carbon and research plans",
    text:
      "Field trials, research design, and a carbon farm plan help keep the science anchored in a coherent systems strategy.",
  },
  {
    meta: "03 / Implementation",
    title: "Education and implementation",
    text:
      "Student learning, grower engagement, and practical implementation are treated as part of the same long-term mission.",
  },
];

function EdisonAnnouncementSection({ exploreTo, variant = "page" }) {
  const sectionClassName =
    variant === "home"
      ? "edison-announcement-section edison-announcement-section-home"
      : "edison-announcement-section";

  return (
    <section id="edison-announcement" className={sectionClassName}>
      {/* Aerial 1 as full-bleed atmospheric background */}
      <div className="edison-announcement-bg-aerial" aria-hidden="true">
        <img src="/images/visuals/edison/edison-aerial-wide-1.jpg" alt="" />
      </div>

      <div className="container edison-announcement-shell">
        <div className="edison-announcement-layout">
          <div className="edison-announcement-copy">
            <span className="eyebrow">Announcing the Launch</span>
            <img
              className="edison-announcement-tei-logo"
              src="/images/brand/tei-logo-black.png"
              alt="The Edison Institute For Food & Environmental Security"
              loading="eager"
              decoding="async"
            />
            <h1>The Carbon Underground is proud to announce the launch of the Edison Institute.</h1>
            <p className="edison-announcement-tagline">
              Advancing the evolution of agriculture in an era of climate change.
            </p>
            <div className="edison-announcement-lede">
              <p>
                The Edison Institute is a farm-based R&amp;D center and living laboratory in California's Central Valley. It studies three pressures together: the mutual impact of agriculture and climate change, the economics of transition, and the immediate threat of water shortages.
              </p>
              <p>
                The future is not being written from a distance. It is being planted, measured, grazed, and tested on working land.
              </p>
            </div>
            <div className="edison-announcement-actions">
              {exploreTo ? (
                <Link to={exploreTo} data-cta="Explore Edison">
                  Explore Edison
                </Link>
              ) : (
                <a href="#edison-valley-case" data-cta="Explore Edison">Explore Edison</a>
              )}
              <Link className="secondary" to="/evidence" data-cta="See the evidence">
                See the evidence
              </Link>
            </div>
          </div>

          <div className="edison-announcement-visual" aria-hidden="false">
            {/* Main photo: grapevine row */}
            <figure className="edison-announcement-main-photo">
              <img
                src="/images/visuals/edison/edison-mature-grapevine-row-with-grapes.jpg"
                alt="Mature Edison grapevine row with grapes"
                loading="eager"
                decoding="async"
              />
              <figcaption>Edison Farm · Central Valley, CA</figcaption>
            </figure>
            {/* Aerial 8 inset */}
            <div className="edison-announcement-aerial-inset" aria-hidden="true">
              <img
                src="/images/visuals/edison/edison-aerial-close-8.jpg"
                alt=""
              />
              <span>325 ac / Research grid active</span>
            </div>
          </div>
        </div>

        <div className="edison-announcement-stats" aria-label="Edison Institute regional context">
          {stats.map((item) => (
            <article key={item.label} className="edison-announcement-stat">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="edison-announcement-pillars">
          {pillars.map((pillar) => (
            <article key={pillar.meta} className="edison-announcement-pillar">
              <span>{pillar.meta}</span>
              <h2>{pillar.title}</h2>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EdisonAnnouncementSection;
