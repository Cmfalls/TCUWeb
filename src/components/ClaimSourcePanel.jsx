import { claimSources } from "../content/claimSources";

function ClaimSourcePanel({ eyebrow = "Source trail", title, intro, claimIds = [], compact = false }) {
  const claims = claimIds.map((id) => claimSources[id]).filter(Boolean);

  if (!claims.length) return null;

  return (
    <section className={`claim-source-section${compact ? " compact" : ""}`}>
      <div className="container">
        <div className="claim-source-panel">
          <div className="claim-source-heading">
            <span className="eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            {intro ? <p>{intro}</p> : null}
          </div>

          <div className="claim-source-grid">
            {claims.map((claim) => (
              <article key={claim.id} className="claim-source-card">
                <strong>{claim.value}</strong>
                <p>{claim.claim}</p>
                <div className="claim-source-meta">
                  {claim.href ? (
                    <a href={claim.href} {...(claim.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
                      {claim.source}
                    </a>
                  ) : (
                    <span>{claim.source}</span>
                  )}
                  <em>{claim.reference}</em>
                  <small>Reviewed {claim.lastReviewed}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClaimSourcePanel;
