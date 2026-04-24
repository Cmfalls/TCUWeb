import { Link } from "react-router-dom";
import HowItWorksLegacyArtifact from "../components/HowItWorksLegacyArtifact";
import LivingSystemsInteractive from "../components/LivingSystemsInteractive";
import ProofLivesCard from "../components/ProofLivesCard";
import RouteMeta from "../components/RouteMeta";
import WorkingLandsArtifact from "../components/WorkingLandsArtifact";
import { whyContent } from "../content/whyContent";

function WhyPage() {
  const heroAccent = "climate.";
  const heroTitle = "But first, we need to dramatically change our thinking about climate.";
  const heroTitleLead = heroTitle.endsWith(heroAccent) ? heroTitle.slice(0, -heroAccent.length).trim() : heroTitle;
  const factAccent = "Ever.";
  const factTitle = whyContent.fact.statement;
  const factTitleLead = factTitle.endsWith(factAccent) ? factTitle.slice(0, -factAccent.length).trim() : factTitle;
  const manifestoAccent = "other half.";
  const manifestoTitle = whyContent.manifesto.title;
  const manifestoTitleLead = manifestoTitle.endsWith(manifestoAccent)
    ? manifestoTitle.slice(0, -manifestoAccent.length).trim()
    : manifestoTitle;

  return (
    <>
      <RouteMeta
        title="The Other Half | The Carbon Underground"
        description="Understand why climate recovery requires both cutting emissions and restoring the living systems that help draw down legacy carbon."
      />

      <section className="section why-intro-section">
        <div className="container why-intro-stack">
          <article className="why-intro-card why-intro-hero-card">
            <div className="why-intro-hero-grid">
              <div className="why-intro-hero-text">
                <div>
                  <div className="why-intro-eyebrow">The Other Half</div>
                  <h1>
                    {heroTitleLead} <span>{heroAccent}</span>
                  </h1>
                </div>

                <p className="why-intro-body">{whyContent.intro}</p>

                <div className="why-intro-actions">
                  <Link to="/evidence">See the evidence</Link>
                  <Link className="secondary" to="/edison">
                    Explore Edison
                  </Link>
                </div>
              </div>

              <div className="why-intro-claim-col">
                <div className="why-intro-claim-card">
                  <div className="why-intro-claim-toolbar">
                    <div className="why-intro-claim-dot" />
                    <div className="why-intro-claim-label">Core Claim</div>
                  </div>
                  <div className="why-intro-claim-body">
                    <div className="why-intro-claim-title">{whyContent.heroClaim.title}</div>
                    <p className="why-intro-claim-text">{whyContent.heroClaim.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="why-intro-card why-missing-card">
            <div className="why-missing-grid">
              <div className="why-missing-left">
                <div className="why-intro-eyebrow">{whyContent.fact.eyebrow}</div>
                <h2>
                  {factTitleLead} <span>{factAccent}</span>
                </h2>
                <p className="why-intro-body">{whyContent.fact.explanation}</p>
              </div>

              <div className="why-missing-right">
                <div className="why-missing-fact-label">{whyContent.fact.label}</div>
                <div className="why-missing-fact-statement">{whyContent.fact.reason}</div>
                <p className="why-missing-fact-body">
                  {whyContent.fact.twoHalves} <strong>One without the other will not work.</strong>
                </p>
                <div className="why-missing-visual">
                  <img
                    src="/images/other-half/main-images/corn-sprouts-dark-soil.jpg"
                    alt="Corn sprouts emerging from dark living soil"
                    className="why-missing-visual-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="why-missing-thesis">
              <div className="why-missing-thesis-label">The Implication</div>
              <div className="why-missing-thesis-copy">{whyContent.fact.implication}</div>
            </div>
          </article>

          <article className="why-intro-card why-other-focus-card">
            <div className="why-other-grid">
              <div className="why-other-visual">
                <img
                  src="/images/other-half/main-images/working-lands-context-tulare-01.jpg"
                  alt="Working lands at scale in California's Central Valley"
                  className="why-other-visual-img"
                  loading="lazy"
                />
              </div>

              <div className="why-other-text">
                <h2>
                  {manifestoTitleLead} <span>{manifestoAccent}</span>
                </h2>
                <div className="why-intro-eyebrow">{whyContent.manifesto.eyebrow}</div>
                <p className="why-intro-body">{whyContent.manifesto.text}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <HowItWorksLegacyArtifact />

      {whyContent.contrast && (
        <section className="why-contrast-section">
          <figure className="why-contrast-panel">
            <img src={whyContent.contrast.left.image} alt="Degraded land under climate stress" />
            <figcaption>{whyContent.contrast.left.caption}</figcaption>
          </figure>
          <figure className="why-contrast-panel">
            <img src={whyContent.contrast.right.image} alt="Restored living landscape" />
            <figcaption>{whyContent.contrast.right.caption}</figcaption>
          </figure>
        </section>
      )}

      <LivingSystemsInteractive items={whyContent.systems} />

      <WorkingLandsArtifact />

      <section className="section proof-lives-section">
        <div className="container">
          <div className="proof-lives-heading">
            <span className="eyebrow">Where proof lives</span>
            <h2>Follow the argument into evidence, field research, and further reading.</h2>
            <p>
              The case for living soil gets stronger the closer you look. Pick the level of depth you want and follow
              the argument into the layer below.
            </p>
          </div>
          <div className="proof-lives-grid">
            {whyContent.proofItems.map((item) => (
              <ProofLivesCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyPage;
