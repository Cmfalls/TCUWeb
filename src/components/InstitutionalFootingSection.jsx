const partnerMeta = {
  CRARS: {
    type: "Research",
    role: "Lead scientific partner for Edison",
    className: "is-crars",
    description: "Center for Regenerative Agriculture and Resilient Systems at CSU Chico. Applied research close to the field.",
  },
  "The Edison Institute": {
    type: "Field research",
    role: "Field site and demonstration platform",
    className: "is-edison",
    description: "A visible home for field research and demonstration. The 325-acre R&D farm in California's Central Valley.",
  },
  "American Farmland Trust": {
    type: "Land stewardship",
    role: "Stewardship and working-land credibility",
    className: "is-aft",
    description:
      "Working-land stewardship and agricultural credibility. Connects Edison to the broader land conservation movement.",
  },
  "General Mills": {
    type: "Industry",
    role: "Food-system recognition and supply-chain reach",
    className: "is-general-mills",
    description:
      "Food-system institutions recognizing the stakes here. Major food companies bring supply-chain reach to regenerative transition.",
  },
};

function InstitutionalFootingSection({ partners }) {
  return (
    <section className="institutional-footing-section" aria-labelledby="institutional-footing-title">
      <div className="institutional-footing-inner">
        <div className="institutional-footing-header">
          <div className="institutional-footing-header-left">
            <div className="institutional-footing-eyebrow">Institutional footing</div>
            <h2 id="institutional-footing-title" className="institutional-footing-headline">
              Support becomes easier to trust when the surrounding relationships are <span>visible.</span>
            </h2>
          </div>

          <div className="institutional-footing-header-right">
            <p className="institutional-footing-body">
              The institutions connected to TCU and Edison bring{" "}
              <strong>applied research credibility, working-land stewardship, and food-system reach</strong> that keep
              the case grounded.
            </p>
            <div className="institutional-footing-meta" aria-label="Institutional relationship summary">
              <div className="institutional-footing-meta-item">
                <div className="institutional-footing-meta-label">Partners</div>
                <div className="institutional-footing-meta-value">{partners.length}</div>
              </div>
              <div className="institutional-footing-meta-divider" />
              <div className="institutional-footing-meta-item">
                <div className="institutional-footing-meta-label">Research</div>
                <div className="institutional-footing-meta-value">
                  CRARS<span>CSU</span>
                </div>
              </div>
              <div className="institutional-footing-meta-divider" />
              <div className="institutional-footing-meta-item">
                <div className="institutional-footing-meta-label">Land trust</div>
                <div className="institutional-footing-meta-value">AFT</div>
              </div>
              <div className="institutional-footing-meta-divider" />
              <div className="institutional-footing-meta-item">
                <div className="institutional-footing-meta-label">Industry</div>
                <div className="institutional-footing-meta-value">
                  Food<span>Sector</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="institutional-footing-grid">
          {partners.map((partner) => {
            const meta = partnerMeta[partner.name] || {};

            return (
              <article key={partner.name} className={`institutional-footing-card ${meta.className || ""}`}>
                <div className="institutional-footing-logo-frame">
                  <img src={partner.logo} alt={partner.alt || partner.name} loading="lazy" decoding="async" />
                </div>

                <div className="institutional-footing-card-body">
                  <div className="institutional-footing-partner-type">{meta.type || "Partner"}</div>
                  <h3>{partner.name}</h3>
                  <p>{meta.description || partner.note}</p>
                </div>

                <div className="institutional-footing-card-footer">
                  <div className="institutional-footing-footer-label">-&gt; Role</div>
                  <div className="institutional-footing-footer-divider" />
                  <div className="institutional-footing-footer-text">{meta.role || partner.note}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default InstitutionalFootingSection;
