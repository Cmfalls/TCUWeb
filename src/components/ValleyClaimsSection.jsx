import { claimSources } from "../content/claimSources";

const claimMeta = {
  centralValleyFarmland1: { category: "food", label: "Food system", stat: "1", unit: "%", context: "Of US farmland" },
  centralValleyFood25: {
    category: "food",
    label: "Food system",
    stat: "25",
    unit: "%",
    context: "Of US food production",
    displaySource: "CA Fourth Climate Assessment \u00b7 Climate justice summary",
    claim:
      "The Central Valley produces about one-quarter of the nation's food on 1% of US farmland.",
  },
  centralValleyFruitNuts40: {
    category: "food",
    label: "Food system",
    stat: "40",
    unit: "%",
    context: "Of US fruits & nuts",
    displaySource: "CA Fourth Climate Assessment \u00b7 Climate justice summary",
  },
  sgmaRetired17k: { category: "land", label: "Land-use", stat: "17K", unit: "Acres", context: "Retired farmland" },
  subsidence28ft: { category: "water", label: "Water pressure", stat: "28", unit: "Ft", context: "Max subsidence" },
  valleyEconomy50b: { category: "econ", label: "Economic exposure", stat: "$50B", unit: "", context: "Agricultural economy" },
  valleyWaterDecline20: {
    category: "water",
    label: "Water pressure",
    stat: "20",
    unit: "%",
    context: "Projected supply decline",
    displaySource: "Public Policy Institute of CA \u00b7 Future of San Joaquin Valley agriculture",
  },
};

function ValleyClaimsSection({ claimIds }) {
  const claims = claimIds.map((id) => claimSources[id]).filter(Boolean);

  if (!claims.length) return null;

  return (
    <section className="valley-claims-section" aria-labelledby="valley-claims-title">
      <div className="valley-claims-inner">
        <div className="valley-claims-panel">
          <div className="valley-claims-hero">
            <div className="valley-claims-hero-left">
              <div className="valley-claims-eyebrow">Source trail</div>
              <p>
                Edison sits inside a nationally important food region already shaped by{" "}
                <strong>water stress, subsidence, land-use pressure, and economic exposure</strong>. These source notes
                keep the regional argument inspectable.
              </p>
              <div className="valley-claims-chips" aria-label="Claim categories">
                <span className="is-food">Food system</span>
                <span className="is-water">Water pressure</span>
              </div>
            </div>

            <div className="valley-claims-hero-right">
              <h2 id="valley-claims-title">
                The Valley claims are part of the <span>evidence,</span> not decoration.
              </h2>
            </div>
          </div>

          <div className="valley-claims-grid-label">
            Regional source citations
            <span>
              <strong>{claims.length}</strong> / Verified claims
            </span>
          </div>

          <div className="valley-claims-grid">
            {claims.map((claim, index) => {
              const meta = claimMeta[claim.id] || { category: "food", label: "Source note", stat: claim.value, unit: "" };
              const percent = Number.parseFloat(meta.stat) || 0;
              const donutOffset = 201 - (201 * percent) / 100;

              return (
                <article key={claim.id} className={`valley-claims-card is-${meta.category}`}>
                  <div className="valley-claims-card-label">{meta.label}</div>
                  <div className="valley-claims-visual-row">
                    <div className="valley-claims-donut" aria-hidden="true">
                      <svg className="valley-claims-donut-svg" viewBox="0 0 72 72">
                        <circle className="valley-claims-donut-bg" cx="36" cy="36" r="32" />
                        <circle
                          className="valley-claims-donut-fg"
                          cx="36"
                          cy="36"
                          r="32"
                          transform="rotate(-90 36 36)"
                          style={{
                            "--donut-offset": donutOffset,
                            animationDelay: `${0.4 + index * 0.15}s`,
                          }}
                        />
                      </svg>
                    </div>
                    <div className="valley-claims-stat-block">
                      <div className="valley-claims-stat">{meta.stat}</div>
                      {meta.unit ? <div className="valley-claims-stat-unit">{meta.unit}</div> : null}
                      {meta.context ? <div className="valley-claims-stat-context">{meta.context}</div> : null}
                    </div>
                  </div>
                  <p className="valley-claims-claim">{meta.claim || claim.claim}</p>
                  <div className="valley-claims-divider" aria-hidden="true" />
                  <div className="valley-claims-source">
                    <div className="valley-claims-source-name">{meta.displaySource || claim.source}</div>
                    <div className="valley-claims-reference">{claim.reference}</div>
                    <div className="valley-claims-reviewed">Reviewed {claim.lastReviewed}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValleyClaimsSection;
