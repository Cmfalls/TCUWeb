import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import RouteMeta from "../components/RouteMeta";
import { larryMessageContent } from "../content/whyContent";

function LarryMessagePage() {
  return (
    <>
      <RouteMeta
        title="Larry's Message | The Carbon Underground"
        description="Read Larry Kopald's perspective on climate, soil, and the restoration of living systems."
      />

      <PageIntro
        eyebrow="Founder Voice"
        title="Larry Kopald on climate repair, soil, and the long work of restoration."
        lede={larryMessageContent.intro}
        actions={
          <>
            <Link to="/edison">Explore Edison</Link>
            <Link className="secondary" to="/evidence">
              See the evidence
            </Link>
          </>
        }
        aside={
          <div className="aside-card">
            <span className="card-kicker">Founder voice</span>
            <h3>A public argument that now needs lasting institutional proof.</h3>
            <p>
              Larry's message names the scale of the challenge plainly. The rest of the institution exists to help that
              argument stand up under evidence, stewardship, and field conditions.
            </p>
            <div className="larry-portrait">
              <img src={larryMessageContent.portrait} alt="Larry Kopald speaking" />
            </div>
          </div>
        }
      />

      {larryMessageContent.opening && (
        <section className="section section-soft">
          <div className="container">
            <div className="larry-opening-stack">
              {larryMessageContent.opening.map((paragraph) => (
                <p key={paragraph} className="larry-opening-graf">{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section-dark">
        <div className="container">
          <div className="info-grid three-up dark-cards">
            {larryMessageContent.highlights.map((item) => (
              <article key={item} className="why-card">
                <span className="card-kicker">Key line</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container manifesto-stack">
          {larryMessageContent.sections.map((section) => (
            <article key={section.title} className="message-card manifesto-card">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default LarryMessagePage;
