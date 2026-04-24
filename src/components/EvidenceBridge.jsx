import { Link } from "react-router-dom";

function EvidenceBridge({ content }) {
  return (
    <section className="section">
      <div className="container">
        <article className="evidence-bridge">
          <div className="bridge-copy">
            <span className="eyebrow">{content.eyebrow}</span>
            <h2>{content.title}</h2>
            <p>{content.text}</p>
            <div className="hero-actions">
              {content.action.href ? (
                <a href={content.action.href} data-cta={content.action.label}>
                  {content.action.label}
                </a>
              ) : (
                <Link data-cta={content.action.label} to={content.action.to}>
                  {content.action.label}
                </Link>
              )}
              {content.secondary ? (
                content.secondary.to ? (
                  <Link className="secondary" data-cta={content.secondary.label} to={content.secondary.to}>
                    {content.secondary.label}
                  </Link>
                ) : (
                  <a className="secondary" data-cta={content.secondary.label} href={content.secondary.href}>
                    {content.secondary.label}
                  </a>
                )
              ) : null}
            </div>
          </div>
          <div className="bridge-image-wrap">
            <img src={content.image} alt={content.imageAlt || ""} className="bridge-image" />
          </div>
        </article>
      </div>
    </section>
  );
}

export default EvidenceBridge;
