import { Link } from "react-router-dom";
import { homeContent } from "../content/homeContent";

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

function InstitutionalCredibilityArtifact() {
  const { institutional } = homeContent;

  return (
    <section className="institutional-artifact-section" aria-labelledby="institutional-artifact-title">
      <div className="institutional-artifact-container">
        <div className="institutional-artifact-eyebrow">{institutional.eyebrow}</div>

        <div className="institutional-artifact-stage">
          <div className="institutional-artifact-copy">
            <h2 id="institutional-artifact-title">{institutional.title}</h2>
            <p>{institutional.lede}</p>

            <div className="institutional-artifact-rails">
              {institutional.statements.map((statement) => (
                <article key={statement.title} className="institutional-artifact-rail">
                  <h3>{statement.title}</h3>
                  <p>{statement.text}</p>
                </article>
              ))}
            </div>

            <div className="institutional-artifact-actions">
              <Link className="institutional-artifact-btn institutional-artifact-btn-primary" to="/about">
                Meet the team
                <ArrowIcon />
              </Link>
              <Link className="institutional-artifact-btn institutional-artifact-btn-ghost" to="/support">
                Support the work
              </Link>
            </div>
          </div>

          <div className="institutional-artifact-right-col">
            <section className="institutional-artifact-panel" aria-label="Leadership">
              <div className="institutional-artifact-panel-label">Leadership</div>
              <div className="institutional-artifact-leaders">
                {institutional.people.map((person) => (
                  <article key={person.name} className="institutional-artifact-leader">
                    <div className="institutional-artifact-leader-photo">
                      <img src={person.image} alt={person.alt || person.name} loading="lazy" decoding="async" />
                    </div>
                    <div className="institutional-artifact-leader-role">{person.role}</div>
                    <h3>{person.name}</h3>
                    {person.title ? <strong>{person.title}</strong> : null}
                    {person.summary ? <p>{person.summary}</p> : null}
                  </article>
                ))}
              </div>
            </section>

            <section className="institutional-artifact-panel" aria-label="Research and partners">
              <div className="institutional-artifact-panel-label">Research and Partners</div>
              <div className="institutional-artifact-partners">
                {institutional.logos.map((partner) => (
                  <article key={partner.name} className="institutional-artifact-partner">
                    <div className="institutional-artifact-partner-logo">
                      <img src={partner.logo} alt={partner.alt || partner.name} loading="lazy" decoding="async" />
                    </div>
                    <div className="institutional-artifact-partner-info">
                      <h3>{partner.name}</h3>
                      {partner.note ? <p>{partner.note}</p> : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstitutionalCredibilityArtifact;
