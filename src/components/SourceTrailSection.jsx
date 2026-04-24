import { useMemo, useState } from "react";
import {
  sourceTrailClaims,
  sourceTrailFilters,
  sourceTrailIntro,
} from "../content/sourceTrailContent";

function SourceTrailSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedId, setExpandedId] = useState(null);

  const visibleClaims = useMemo(
    () =>
      activeFilter === "all"
        ? sourceTrailClaims
        : sourceTrailClaims.filter((claim) => claim.tag === activeFilter),
    [activeFilter],
  );

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setExpandedId(null);
  };

  return (
    <section id="evidence-source-trail" className="source-trail-section">
      <div className="container source-trail-shell">
        <header className="source-trail-header">
          <div className="source-trail-intro">
            <span className="eyebrow">{sourceTrailIntro.eyebrow}</span>
            <h2>{sourceTrailIntro.title}</h2>
          </div>

          <figure className="source-trail-visual">
            <img
              src="/images/evidence/agronomist-clipboard-inspecting-red-green-lettuce-rows.jpeg"
              alt="Agronomist recording field observations in rows of lettuce"
              loading="lazy"
            />
            <figcaption>
              <span>Field record</span>
              Claims stay stronger when every number points back to observable land, source notes, and review history.
            </figcaption>
          </figure>

          <div className="source-trail-header-right">
            <p>{sourceTrailIntro.lede}</p>
            <div className="source-trail-toolbar" aria-label="Filter source trail claims">
              <div className="source-trail-filters">
                <span>Filter:</span>
                {sourceTrailFilters.map((filter) => (
                  <button
                    key={filter.id}
                    className={activeFilter === filter.id ? "active" : ""}
                    type="button"
                    aria-pressed={activeFilter === filter.id}
                    onClick={() => handleFilter(filter.id)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              <p>
                <strong>{visibleClaims.length}</strong> / {sourceTrailClaims.length} claims
              </p>
            </div>
          </div>
        </header>

        <div className="source-trail-table">
          <div className="source-trail-table-head" aria-hidden="true">
            <span>Stat</span>
            <span>Claim</span>
            <span>Detail</span>
          </div>

          <div className="source-trail-rows">
            {visibleClaims.map((claim) => {
              const isExpanded = expandedId === claim.id;
              const detailId = `source-trail-detail-${claim.id}`;

              return (
                <article
                  key={claim.id}
                  className={`source-trail-row source-trail-row-${claim.tag} ${isExpanded ? "open" : ""}`}
                >
                  <button
                    className="source-trail-row-main"
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={detailId}
                    onClick={() => setExpandedId(isExpanded ? null : claim.id)}
                  >
                    <span className="source-trail-row-stat">
                      <strong>{claim.displayValue}</strong>
                      <small>{claim.unit}</small>
                    </span>

                    <span className="source-trail-row-claim">
                      <span className="source-trail-row-category">{claim.label}</span>
                      <span className="source-trail-row-title">{claim.title}</span>
                      <span className="source-trail-row-inline-source">{claim.sourceLines.join(" · ")}</span>
                    </span>

                    <span className="source-trail-row-toggle" aria-hidden="true">
                      <span className="source-trail-toggle-icon" />
                    </span>
                  </button>

                  <div id={detailId} className="source-trail-detail" hidden={!isExpanded}>
                    <div className="source-trail-detail-inner">
                      {claim.detailBlocks.map((block) => (
                        <div key={block.label} className="source-trail-detail-block">
                          <h3>{block.label}</h3>
                          {block.text ? <p>{block.text}</p> : null}
                          {block.sources ? (
                            <ul>
                              {block.sources.map((source) => (
                                <li key={source}>{source}</li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="source-trail-table-footer">
            <span>{sourceTrailClaims.length} claims - click any row to inspect sources</span>
            <a href="#evidence-sources">Full evidence page -&gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SourceTrailSection;
