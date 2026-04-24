import { Link } from "react-router-dom";

const TIERS = [
  {
    className: "t1",
    nameClass: "tn-gold",
    label: "Founding Partner",
    amount: "$500,000+",
    tierLabel: "Multi-year commitment \u00b7 Per year",
    scale: "100%",
    scaleLabel: "Max tier",
    funds: [
      "Full operating stability and long-term research capacity",
      "Co-architect status in Institute governance and program direction",
      "Named recognition across Edison research publications",
    ],
    desc:
      "Backbone of operating stability. Founding Partners are recognized as co-architects of the Institute, not just supporters of it. Your commitment makes the long-horizon work structurally possible.",
    footLabel: "Partnership access",
    footText: "Direct engagement with research leadership, early access to findings, and regular field visits to Edison Farm.",
  },
  {
    className: "t2",
    nameClass: "tn-green",
    label: "Research Partner",
    amount: "$250,000 - $499,000",
    tierLabel: "Per year",
    scale: "65%",
    scaleLabel: "Tier 2",
    funds: [
      "A major research initiative: a full crop program or measurement campaign",
      "A full farmer engagement season with real growers at scale",
      "Research design participation and milestone reporting",
    ],
    desc:
      "Supports a major research initiative: a full crop program, a measurement campaign, or a farmer engagement season. This tier shapes what gets studied and how results get communicated.",
  },
  {
    className: "t3",
    nameClass: "tn-teal",
    label: "Field Partner",
    amount: "$100,000 - $249,000",
    tierLabel: "Per year",
    scale: "38%",
    scaleLabel: "Tier 3",
    compact: true,
    funds: [
      "Daily demonstrations, farmer engagement, and evidence production",
      "Field-visible research that makes the case credible at farm scale",
    ],
    desc:
      "Funds the daily work of demonstrations, farmer engagement, and evidence production that makes the research visible and credible beyond the lab.",
  },
  {
    className: "t4",
    nameClass: "tn-muted",
    label: "Supporting Partner",
    amount: "$25,000 - $99,000",
    tierLabel: "Per year",
    scale: "18%",
    scaleLabel: "Tier 4",
    compact: true,
    funds: [
      "Essential operating support: the infrastructure research runs on",
      "Regular research updates and invitations to Edison field events",
    ],
    desc:
      "Essential operating support. Receives regular research updates and invitations to field events at Edison Farm. Entry point into the work with full access to findings as they emerge.",
  },
];

function TierCard({ tier }) {
  return (
    <article className={`edison-giving-tier ${tier.className}`}>
      <div className={`edison-giving-tier-head${tier.compact ? " compact" : ""}`}>
        <div className={`edison-giving-tier-name ${tier.nameClass}`}>{tier.label}</div>
        <div className="edison-giving-tier-amount">{tier.amount}</div>
        <div className="edison-giving-tier-label">{tier.tierLabel}</div>
      </div>

      <div className={`edison-giving-scale${tier.compact ? " compact" : ""}`}>
        <div className="edison-giving-scale-track">
          <div className="edison-giving-scale-fill" style={{ width: tier.scale }} />
        </div>
        <div className="edison-giving-scale-pct">{tier.scaleLabel}</div>
      </div>

      <div className={`edison-giving-funds${tier.compact ? " compact" : ""}`}>
        <div className="edison-giving-funds-label">This tier funds</div>
        <div className="edison-giving-fund-items">
          {tier.funds.map((item) => (
            <div className="edison-giving-fund-item" key={item}>
              <span className="edison-giving-fund-dot" aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <p className={`edison-giving-tier-body${tier.compact ? " compact" : ""}`}>{tier.desc}</p>

      {tier.footLabel && (
        <div className="edison-giving-feature-foot">
          <div className="edison-giving-feature-foot-label">{tier.footLabel}</div>
          <div className="edison-giving-feature-foot-text">{tier.footText}</div>
        </div>
      )}
    </article>
  );
}

function EdisonGivingTiersSection() {
  return (
    <section className="section section-dark edison-giving-section">
      <div className="container">
        <div className="edison-giving-header">
          <div>
            <span className="eyebrow">How to back Edison</span>
            <h2 className="edison-giving-title">
              Four tiers. <span>All of them matter.</span>
            </h2>
          </div>
          <div className="edison-giving-header-right">
            <p className="edison-giving-note">
              Multi-year pledges, appreciated stock, and donor-advised fund contributions welcomed.{" "}
              <strong>Every tier funds something specific and traceable at Edison.</strong>
            </p>
          </div>
        </div>

        <div className="edison-giving-row1">
          <TierCard tier={TIERS[0]} />
          <TierCard tier={TIERS[1]} />
        </div>

        <div className="edison-giving-row2">
          <TierCard tier={TIERS[2]} />
          <TierCard tier={TIERS[3]} />
        </div>

        <div className="edison-giving-footer">
          <p>
            <strong>Multi-year pledges, appreciated stock, and donor-advised fund contributions welcomed.</strong> Every
            contribution funds specific, traceable work at Edison.
          </p>
          <div className="edison-giving-footer-links">
            <Link className="edison-giving-footer-btn primary" data-cta="Support Edison" to="/support">
              Support Edison
            </Link>
            <a
              href="mailto:info@thecarbonunderground.org?subject=Edison%20Institute%20Partnership"
              className="edison-giving-footer-btn secondary"
            >
              Contact us directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EdisonGivingTiersSection;
