function ProofMetrics({ items, compact = false }) {
  return (
    <div className={`proof-metrics ${compact ? "compact" : ""}`}>
      {items.map((item) => (
        <article key={item.label} className="metric-card">
          {item.icon ? <img src={item.icon} alt="" aria-hidden="true" className="metric-icon" /> : null}
          <span className="metric-label">{item.label}</span>
          <strong className="metric-value">{item.value}</strong>
          <p>{item.detail}</p>
          {item.source ? <div className="metric-source">Source: {item.source}</div> : null}
        </article>
      ))}
    </div>
  );
}

export default ProofMetrics;
