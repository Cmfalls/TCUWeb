import { Link } from "react-router-dom";

function ProofLivesCard({ kicker, title, summary, cue, detail, link }) {
  const isInternal = link?.href?.startsWith("/");

  return (
    <article className="proof-lives-card">
      <span className="proof-lives-label">{kicker}</span>
      <h3>{title}</h3>
      <p className="proof-lives-summary">{summary}</p>
      {cue ? <div className="proof-lives-cue">{cue}</div> : null}
      {detail || link ? (
        <details className="proof-lives-detail">
          <summary>Go deeper</summary>
          {detail ? <p>{detail}</p> : null}
          {link ? (
            isInternal ? (
              <Link to={link.href}>{link.label}</Link>
            ) : (
              <a href={link.href} {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                {link.label}
              </a>
            )
          ) : null}
        </details>
      ) : null}
    </article>
  );
}

export default ProofLivesCard;
