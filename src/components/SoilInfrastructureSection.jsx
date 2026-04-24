import { Link } from "react-router-dom";

function SoilInfrastructureSection({ content }) {
  const facts = content.facts || [];

  return (
    <section className="soil-infrastructure-section">
      <div className="soil-ref-shell">
        <div className="soil-ref-hero">
          <div className="soil-ref-text-col">
            <div>
              <div className="soil-ref-eyebrow">Why Soil Matters</div>
              <h2 className="soil-ref-headline">Living soil acts like climate and water infrastructure.</h2>
            </div>

            <div>
              <p className="soil-ref-body-copy">Healthy soil helps move carbon back into living cycles, improves infiltration, and reduces the volatility that growers face when drought and flood pressure rise together.</p>
              <p className="soil-ref-body-copy">That makes <strong>soil restoration more than a symbolic climate gesture</strong>. It becomes part of the practical work of protecting farmland, water systems, and food production.</p>
            </div>

            <div className="soil-ref-stat-card">
              <div className="soil-ref-stat-label">Water Holding Capacity</div>
              <div className="soil-ref-stat-num">20,000<span className="soil-ref-unit">GAL</span></div>
              <div className="soil-ref-stat-desc">Of water held per acre for every 1% gain in soil organic matter. Soil becomes living infrastructure.</div>
            </div>
          </div>

          <aside className="soil-ref-collage" aria-label="Living soil visual evidence placeholders">
            <div className="soil-ref-tile soil-ref-tile-1">
              <div className="soil-ref-placeholder soil-ref-placeholder-photo">
                <img className="soil-ref-placeholder-img" src="/images/library/agriculture-soil_undated_agriculture_0003.jpg" alt="Agricultural soil and crop rows" />
              </div>
            </div>

            <div className="soil-ref-tile soil-ref-tile-2">
              <div className="soil-ref-placeholder soil-ref-placeholder-photo">
                <img className="soil-ref-placeholder-img" src="/images/library/water-infrastructure_undated_aerial-edison-ca_0001.jpg" alt="Aerial view of Edison irrigation infrastructure" />
              </div>
            </div>

            <div className="soil-ref-tile soil-ref-tile-3">
              <div className="soil-ref-placeholder soil-ref-placeholder-photo">
                <img className="soil-ref-placeholder-img" src="/images/library/ecosystems-restoration_2021-06-30_ai-elkhorn-project-f4haq_0005.jpg" alt="Elkhorn restoration project" />
              </div>
            </div>

            <div className="soil-ref-tile soil-ref-tile-4a" aria-hidden="true">
              <div className="soil-ref-quote-tag">The Shift</div>
              <div className="soil-ref-quote-text">Soil is no longer a background. It is <em>infrastructure</em> at the scale of the climate problem.</div>
            </div>

            <div className="soil-ref-tile soil-ref-tile-5">
              <div>
                <div className="soil-ref-tile-5-header">
                  <div className="soil-ref-tile-5-label">Go Deeper</div>
                  <div className="soil-ref-tile-5-icon" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                    </svg>
                  </div>
                </div>
                <h4>The full evidence case lives next door.</h4>
                <p>See the measurements behind water buffering and carbon storage claims.</p>
              </div>
              <div className="soil-ref-tile-5-bottom">
                <Link to="/evidence">Explore Evidence</Link>
                <svg className="soil-ref-tile-5-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden="true">
                  <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                </svg>
              </div>
            </div>
          </aside>
        </div>

        <div className="soil-ref-pillars">
          <article className="soil-ref-pillar">
            <div className="soil-ref-pillar-top">
              <div className="soil-ref-pillar-index">01 / Water Behavior</div>
              <div className="soil-ref-pillar-glyph" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.5s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11z" />
                </svg>
              </div>
            </div>
            <h3>Soil condition changes how land moves water.</h3>
            <p>{facts[0] || "Soil condition influences how land absorbs, stores, and releases water."}</p>
          </article>

          <article className="soil-ref-pillar">
            <div className="soil-ref-pillar-top">
              <div className="soil-ref-pillar-index">02 / Biological Function</div>
              <div className="soil-ref-pillar-glyph" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="6" cy="8" r="1.5" />
                  <circle cx="18" cy="8" r="1.5" />
                  <circle cx="6" cy="16" r="1.5" />
                  <circle cx="18" cy="16" r="1.5" />
                  <path d="M9 12H6 M15 12h3 M12 9V6 M12 15v3" />
                </svg>
              </div>
            </div>
            <h3>Biology does the work when conditions let it.</h3>
            <p>{facts[1] || "Biological soil function can improve resilience across carbon, biodiversity, and crop health."}</p>
          </article>

          <article className="soil-ref-pillar">
            <div className="soil-ref-pillar-top">
              <div className="soil-ref-pillar-index">03 / Proof At Work</div>
              <div className="soil-ref-pillar-glyph" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 14 8 9 13 13 21 5" />
                  <polyline points="15 5 21 5 21 11" />
                </svg>
              </div>
            </div>
            <h3>The strongest case is operational, not rhetorical.</h3>
            <p>{facts[2] || "The strongest case for regenerative agriculture is the one that survives real farm budgets, water years, and grower decisions."}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default SoilInfrastructureSection;
