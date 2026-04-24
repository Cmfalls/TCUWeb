import { useEffect, useRef, useState } from "react";
import { supportContent } from "../content/aboutSupportContent";

const statDetails = [
  { tag: "Water", deadline: "Down by 2040", fill: 0.2 },
  { tag: "Land", deadline: "At risk / 2040", fill: 0.75 },
  { tag: "Jobs", deadline: "At risk / 2040", fill: 0.55 },
  { tag: "Emissions", deadline: "Current share", fill: 0.31 },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8 H13 M9 4 L13 8 L9 12" />
    </svg>
  );
}

function SupportHeroArtifact() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="support-hero-artifact-wrap" aria-labelledby="support-hero-title">
        <div className="support-hero-artifact">
          <div className="support-hero-artifact-copy">
            <div className="support-hero-artifact-eyebrow">Support</div>
            <h1 id="support-hero-title">
              Back the research, explanation, and stewardship that make adoption more possible.
            </h1>
            <p>{supportContent.intro}</p>
            <div className="support-hero-artifact-actions">
              <a className="support-hero-artifact-btn support-hero-artifact-btn-primary" href="#giving-opportunities">
                Explore giving options
                <ArrowIcon />
              </a>
              <a
                className="support-hero-artifact-btn support-hero-artifact-btn-ghost"
                href="mailto:info@thecarbonunderground.org?subject=TCU%20Giving%20Inquiry"
              >
                Talk to our team
              </a>
            </div>
          </div>

          <aside className="support-hero-artifact-why-now" aria-label="Why now">
            <div className="support-hero-artifact-why-label">Why Now</div>
            <h2>{supportContent.asideTitle}</h2>
            <p>
              In the Central Valley alone, climate change could cut water supply by <strong>20% by 2040</strong>,
              threatening <strong>900,000 acres of farmland and 50,000 jobs</strong>. The need is urgent, but so is the
              need for proof that growers, institutions, and funders can trust.
            </p>
          </aside>
        </div>
      </section>

      <section className="support-pressure-artifact-wrap" aria-label="Pressure indicators">
        <div className="support-pressure-artifact">
          <div className="support-pressure-artifact-header">
            <div className="support-pressure-artifact-title">Pressure Indicators</div>
            <div className="support-pressure-artifact-region">Central Valley / Projected 2040</div>
          </div>

          <div ref={statsRef} className="support-pressure-artifact-stats">
            {supportContent.riskBand.map((item, index) => {
              const detail = statDetails[index];
              return (
                <article
                  key={item.label}
                  className={`support-pressure-artifact-stat ${statsVisible ? "visible" : ""}`}
                  style={{ "--fill": detail.fill }}
                >
                  <span className="support-pressure-artifact-stat-tag">{detail.tag}</span>
                  <strong>{item.value}</strong>
                  <p>{item.label}.</p>
                  <div className="support-pressure-artifact-trend" aria-hidden="true">
                    <div className="support-pressure-artifact-trend-fill" />
                  </div>
                  <span className="support-pressure-artifact-deadline">{detail.deadline}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default SupportHeroArtifact;
