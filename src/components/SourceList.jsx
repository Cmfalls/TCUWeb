function SourceList({ title, intro, groups }) {
  const citationCount = groups.reduce((total, group) => total + group.items.length, 0);
  const groupImages = [
    {
      src: "/images/evidence/soil-hands-closeup.webp",
      alt: "Close view of soil held in hands",
      label: "Core evidence",
    },
    {
      src: "/images/visuals/edison/edison-aerial-mid-4.jpg",
      alt: "Aerial view of Edison and Central Valley working land",
      label: "Field context",
    },
  ];

  return (
    <section className="section evidence-sources-section">
      <div className="container evidence-sources-container">
        <div className="evidence-sources-header">
          <div className="evidence-sources-header-left">
            <div className="evidence-sources-eyebrow">Sources</div>
            <h2 className="evidence-sources-headline">
              Research & <span>sources.</span>
            </h2>
          </div>

          <div className="evidence-sources-header-right">
            <p className="evidence-sources-body">
              {intro} <strong>Each entry is reviewed and tagged by type.</strong>
            </p>

            <div className="evidence-sources-meta" aria-label="Research and sources summary">
              <div className="evidence-sources-meta-item">
                <div className="evidence-sources-meta-label">Source Groups</div>
                <div className="evidence-sources-meta-value">{groups.length}</div>
              </div>
              <div className="evidence-sources-meta-divider" />
              <div className="evidence-sources-meta-item">
                <div className="evidence-sources-meta-label">Citations</div>
                <div className="evidence-sources-meta-value">
                  {citationCount}
                  <span>Primary</span>
                </div>
              </div>
              <div className="evidence-sources-meta-divider" />
              <div className="evidence-sources-meta-item">
                <div className="evidence-sources-meta-label">Reviewed</div>
                <div className="evidence-sources-meta-value">
                  April<span>2026</span>
                </div>
              </div>
              <div className="evidence-sources-meta-divider" />
              <div className="evidence-sources-meta-item">
                <div className="evidence-sources-meta-label">Status</div>
                <div className="evidence-sources-meta-value">
                  Live<span>Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="evidence-sources-grid">
          {groups.map((group, groupIndex) => (
            <article
              key={group.title}
              className={`evidence-sources-card ${groupIndex === 0 ? "is-core" : "is-field"}`}
            >
              <figure className="evidence-sources-card-media">
                <img src={groupImages[groupIndex]?.src || groupImages[0].src} alt={groupImages[groupIndex]?.alt || "Evidence source visual"} loading="lazy" />
                <figcaption>{groupImages[groupIndex]?.label || "Evidence source"}</figcaption>
              </figure>

              <div className="evidence-sources-card-toolbar">
                <div className="evidence-sources-toolbar-tag">{group.label}</div>
                <div className="evidence-sources-toolbar-count">
                  <strong>{group.items.length}</strong> / PRIMARY SOURCES
                </div>
              </div>

              <div className="evidence-sources-card-body">
                <div className="evidence-sources-card-title">{group.title}</div>
                {group.description ? <p className="evidence-sources-card-desc">{group.description}</p> : null}

                <div className="evidence-sources-citations">
                  {group.items.map((item) => (
                    <div key={item.title} className="evidence-sources-citation">
                      <div className="evidence-sources-citation-head">
                        {item.href ? (
                          <a
                            className="evidence-sources-citation-name"
                            href={item.href}
                            {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                          >
                            {item.title}
                          </a>
                        ) : (
                          <div className="evidence-sources-citation-name">{item.title}</div>
                        )}
                        {item.strength ? (
                          <div className="evidence-sources-citation-badge is-primary">{item.strength}</div>
                        ) : null}
                      </div>
                      <p className="evidence-sources-citation-desc">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="evidence-sources-card-footer">
                <div className="evidence-sources-footer-label">-&gt; Used For</div>
                <div className="evidence-sources-footer-divider" />
                <div className="evidence-sources-footer-text">
                  {groupIndex === 0
                    ? "SOM readout, dashboard metrics, pillar evidence"
                    : "Food security framing, field context, Valley stakes"}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SourceList;
