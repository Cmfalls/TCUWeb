import { Link } from "react-router-dom";

function AboutHeroSection({ content }) {
  return (
    <section className="about-hero-polish-section" aria-labelledby="about-hero-polish-title">
      <div className="about-hero-polish-inner">
        <div className="about-hero-polish-layout">
          <div className="about-hero-polish-copy">
            <div className="about-hero-polish-eyebrow">About</div>
            <h1 id="about-hero-polish-title">
              An institution built to connect public explanation, field proof, and long-term <span>stewardship.</span>
            </h1>
            <p>
              The Carbon Underground exists to keep the climate case for living soil connected to{" "}
              <strong>field research, public understanding, and long-term adoption</strong>.
            </p>
            <div className="about-hero-polish-actions">
              <Link className="about-hero-polish-primary" to="/edison" data-cta="Explore Edison">
                Explore Edison
              </Link>
              <Link className="about-hero-polish-text-link" to="/larrys-message" data-cta="Read Larry's message">
                Read Larry&apos;s message
              </Link>
            </div>
          </div>

          <article className="about-hero-polish-mission">
            <div className="about-hero-polish-mission-header">
              <div className="about-hero-polish-mission-tag">Mission</div>
              <div className="about-hero-polish-mission-meta">Est. 2014 / 501(c)(3)</div>
            </div>
            <div className="about-hero-polish-mission-body">
              <h2>Why the organization exists</h2>
              <p>{content.mission}</p>
              <div className="about-hero-polish-divider" />
              <p>
                TCU&apos;s flagship field effort, Edison, is being built in close relationship with{" "}
                <strong>research and philanthropic partners</strong> rather than as a standalone idea.
              </p>
            </div>
            <div className="about-hero-polish-thesis">
              <div className="about-hero-polish-thesis-label">The Through-Line</div>
              <p>
                The work cannot live only in essays, only in research, or only in philanthropy.{" "}
                <em>It has to move between those worlds without losing seriousness in any of them.</em>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;
