function ProofItem({ kicker, title, summary, cue, detail, link }) {
  return (
    <article className="proof-item">
      <span className="card-kicker">{kicker}</span>
      <h3>{title}</h3>
      <p>{summary}</p>
      {cue ? <div className="proof-cue">{cue}</div> : null}
      {detail || link ? (
        <details className="proof-detail">
          <summary>Go deeper</summary>
          {detail ? <p>{detail}</p> : null}
          {link ? (
            <a
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {link.label}
            </a>
          ) : null}
        </details>
      ) : null}
    </article>
  );
}

export default ProofItem;
