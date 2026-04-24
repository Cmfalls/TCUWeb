import { Link } from "react-router-dom";
import EdisonFieldContextSection from "../components/EdisonFieldContextSection";
import EvidenceDashboard from "../components/EvidenceDashboard";
import EvidenceSnapshotSection from "../components/EvidenceSnapshotSection";
import HowToReadProofSection from "../components/HowToReadProofSection";
import RouteMeta from "../components/RouteMeta";
import ScaleProblemSection from "../components/ScaleProblemSection";
import SOMReadout from "../components/SOMReadout";
import SourceList from "../components/SourceList";
import SourceTrailSection from "../components/SourceTrailSection";
import WhyItMattersSection from "../components/WhyItMattersSection";
import { evidenceContent } from "../content/evidenceContent";

const toPanelSlug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function EvidencePage() {
  const {
    meta,
    hero,
    missionClaim,
    proofDashboard,
    crisisStats,
    foodClimateBridge,
    pillarEvidence,
    somReadoutIntro,
    sourceGroups,
  } = evidenceContent;
  const heroAccent = "stand on.";
  const heroTitleLead = hero.title.endsWith(heroAccent) ? hero.title.slice(0, -heroAccent.length).trim() : hero.title;
  const proofLines = missionClaim.title.split(".").filter(Boolean);

  return (
    <>
      <RouteMeta title={meta.title} description={meta.description} />

      <section className="evidence-hero-section">
        <div className="container evidence-hero-layout">
          <div className="evidence-hero-copy">
            <div className="evidence-hero-eyebrow">{hero.eyebrow}</div>
            <h1>
              {heroTitleLead} <span>{heroAccent}</span>
            </h1>
            <p className="evidence-hero-body">{hero.lede}</p>
            <p className="evidence-hero-body">
              The evidence below shows why living soil belongs in the climate conversation: it{" "}
              <strong>
                stores carbon, holds water, supports farm economics, and gives institutions a practical place to test
                what restoration can change
              </strong>
              .
            </p>
            <div className="evidence-hero-actions">
              <a href={hero.primary.href}>{hero.primary.label}</a>
              <Link className="secondary" to={hero.secondary.to}>
                {hero.secondary.label}
              </Link>
            </div>
          </div>

          <aside className="evidence-proof-card">
            <div className="evidence-proof-toolbar">
              <div className="evidence-proof-toolbar-tag">{missionClaim.eyebrow}</div>
              <div className="evidence-proof-toolbar-meta">TCU Evidence</div>
            </div>

            <div className="evidence-proof-statement">
              <div className="evidence-proof-text">
                {proofLines.map((line, index) => (
                  <div key={line} className={`line-${index + 1}`}>
                    {line.trim()}.
                  </div>
                ))}
              </div>
              <p className="evidence-proof-desc">
                That is the evidence standard for The Carbon Underground. <strong>Soil health is not a slogan here.</strong>{" "}
                It has to be measured across carbon, water, farm performance, and real operating conditions.
              </p>
            </div>

            <div className="evidence-proof-photo-pair">
              {hero.visuals.map((visual, index) => (
                <div key={visual.caption} className="evidence-proof-thumb">
                  <img src={visual.src} alt={visual.alt} />
                  <div className="evidence-proof-thumb-drop">
                    {index === 0 ? "IMG / DROUGHT" : "IMG / WATER STRESS"}
                  </div>
                  <div className="evidence-proof-thumb-overlay" />
                  <div className="evidence-proof-thumb-caption">{visual.caption}</div>
                </div>
              ))}
            </div>

            <div className="evidence-proof-thesis-list">
              {missionClaim.proofLines.map((line) => (
                <div key={line} className="evidence-proof-thesis-item">
                  {line}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <HowToReadProofSection />

      <EvidenceDashboard dashboard={proofDashboard} />

      <ScaleProblemSection content={crisisStats} />

      <section
        id="evidence-field-context"
        className="section evidence-system-section"
        style={{ "--evidence-system-image": `url(${foodClimateBridge.image})` }}
        aria-label={`${foodClimateBridge.eyebrow}: ${foodClimateBridge.title}`}
      >
        <div className="container evidence-system-layout">
          <div className="evidence-system-copy">
            <span className="eyebrow">{foodClimateBridge.eyebrow}</span>
            <h2>{foodClimateBridge.title}</h2>
            <p>{foodClimateBridge.text}</p>
            <blockquote>{foodClimateBridge.callout}</blockquote>
            <div className="evidence-system-proof-rail" aria-label="Field evidence signals">
              {foodClimateBridge.signals.map((signal, index) => (
                <div key={signal} className="evidence-system-proof-item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="evidence-pillars-section">
        <div className="container">
          <div className="evidence-pillars-heading">
            <span className="eyebrow">{pillarEvidence.eyebrow}</span>
            <h2>{pillarEvidence.title}</h2>
            <p>{pillarEvidence.text}</p>
          </div>

          <div className="evidence-pillar-stack">
            {pillarEvidence.pillars.map((pillar, index) => (
              <article key={pillar.title} className="evidence-pillar-panel" data-pillar={toPanelSlug(pillar.kicker)}>
                <div className="evidence-pillar-index">0{index + 1}</div>
                <div className="evidence-pillar-media">
                  <img src={pillar.image} alt={pillar.imageAlt} />
                </div>
                <div className="evidence-pillar-copy">
                  <span className="card-kicker">{pillar.kicker}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                  <div className="evidence-pillar-signals">
                    {pillar.signals.map((signal) => (
                      <span key={signal}>{signal}</span>
                    ))}
                  </div>
                </div>
                <div className="evidence-pillar-metric">
                  <strong>{pillar.metric}</strong>
                  <span>{pillar.unit}</span>
                  <p>{pillar.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SOMReadout intro={somReadoutIntro} />

      <EdisonFieldContextSection id="evidence-central-valley-context" titleId="evidence-central-valley-title" />

      <SourceTrailSection />

      <WhyItMattersSection />

      <EvidenceSnapshotSection />

      <div id="evidence-sources" className="evidence-source-wrap">
        <SourceList
          title="Research & Sources"
          intro="Selected source materials behind the measures, summaries, and field context above."
          groups={sourceGroups}
        />
      </div>
    </>
  );
}

export default EvidencePage;
