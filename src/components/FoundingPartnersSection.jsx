function FoundingPartnersSection({ partners }) {
  return (
    <section className="founding-partners-section section">
      <div className="container">
        <span className="eyebrow">Founding Partners</span>
        <h2 className="founding-partners-heading">
          Three institutions. Over 80 years combined in agricultural innovation, scientific research, communications, and government relations.
        </h2>
        <div className="founding-partners-grid">
          {partners.map((partner) => (
            <article key={partner.abbr || partner.name} className="founding-partner-card">
              <div className="founding-partner-logo-wrap">
                <img
                  src={partner.logo}
                  alt={partner.logoAlt}
                  className="founding-partner-logo"
                  loading="lazy"
                />
              </div>
              <div className="founding-partner-body">
                <h3 className="founding-partner-name">
                  {partner.abbr ? (
                    <>
                      <span className="founding-partner-abbr">{partner.abbr}</span>
                      <span className="founding-partner-full">{partner.name}</span>
                    </>
                  ) : (
                    partner.name
                  )}
                </h3>
                <p className="founding-partner-desc">{partner.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FoundingPartnersSection;
