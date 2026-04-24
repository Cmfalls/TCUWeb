import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import ProofItem from "../components/ProofItem";
import RouteMeta from "../components/RouteMeta";
import { adoptContent } from "../content/projectsContent";

function AdoptPage() {
  return (
    <>
      <RouteMeta
        title="Adopt-A-Meter | The Carbon Underground"
        description="Learn how Adopt-A-Meter gives people a more tangible way to support land restoration."
      />

      <PageIntro
        eyebrow="Adopt-A-Meter"
        title="A more concrete entry point into supporting restoration."
        lede={adoptContent.intro}
        actions={
          <>
            <a href="https://adopt-a-meter.org" target="_blank" rel="noreferrer">
              Visit Adopt-A-Meter
            </a>
            <Link className="secondary" to="/support">
              See support options
            </Link>
          </>
        }
        aside={
          <div className="aside-card">
            <img
              src="/images/visuals/adopt/aam-logo-green.png"
              alt="Adopt-A-Meter logo"
              className="adopt-logo"
              loading="eager"
              decoding="async"
            />
            <span className="card-kicker">Purpose</span>
            <h3>Make support visible without losing the connection to land.</h3>
            <p>
              Adopt-A-Meter works best when it helps new supporters understand that restoration is real work happening
              on real ground with real costs.
            </p>
          </div>
        }
      />

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading compact">
            <span className="eyebrow">How it works</span>
            <h2>Use a simpler public ask without breaking the mission.</h2>
          </div>
          <div className="info-grid three-up">
            {adoptContent.steps.map((step) => (
              <article key={step.title} className="info-card">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="adopt-action-band-section">
        <div className="container">
          <article className="adopt-action-band">
            <div>
              <span className="eyebrow">{adoptContent.actionBand.eyebrow}</span>
              <h2>{adoptContent.actionBand.title}</h2>
              <p>{adoptContent.actionBand.text}</p>
            </div>
            <div className="hero-actions">
              {adoptContent.actionBand.actions.map((action) =>
                action.to ? (
                  <Link key={action.label} className="secondary" to={action.to}>
                    {action.label}
                  </Link>
                ) : (
                  <a key={action.label} href={action.href} target={action.external ? "_blank" : undefined} rel={action.external ? "noreferrer" : undefined}>
                    {action.label}
                  </a>
                ),
              )}
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading compact">
            <span className="eyebrow">What it can strengthen</span>
            <h2>A public campaign should create clearer support, not generic noise.</h2>
          </div>
          <div className="info-grid three-up">
            {adoptContent.outcomes.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading compact section-heading-dark">
            <span className="eyebrow">{adoptContent.community.eyebrow}</span>
            <h2>{adoptContent.community.title}</h2>
            <p>{adoptContent.community.lede}</p>
          </div>
          <div className="info-grid four-up">
            {adoptContent.community.cards.map((card) => (
              <article key={card.title} className="why-card adopt-community-card">
                <img src={card.image} alt={card.imageAlt} loading="lazy" decoding="async" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading compact">
            <span className="eyebrow">Why it matters</span>
            <h2>Public support grows when people can picture what they are helping make possible.</h2>
          </div>
          <div className="proof-grid two-up">
            {adoptContent.proofItems.map((item) => (
              <ProofItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AdoptPage;
