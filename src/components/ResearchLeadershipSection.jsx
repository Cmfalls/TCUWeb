const researcherMeta = {
  "Dr. Cynthia Daley": {
    initials: "CD",
    index: "01",
    image: "/images/people/person-cynthia-daley-research-headshot.jpg",
    alt: "Portrait of Dr. Cynthia Daley",
    keywords: ["Soil health", "Water conservation", "Carbon sequestration", "Research design"],
  },
  "Dr. Tim LaSalle": {
    initials: "TL",
    index: "02",
    image: "/images/people/person-tim-lasalle-research-headshot.jpg",
    alt: "Portrait of Dr. Tim LaSalle",
    keywords: ["Food security", "Soils", "Global programs", "Rodale"],
  },
};

const cleanTitle = (value) => value.replace(/\u00e2\u20ac\u201d/g, "-");

function ResearchLeadershipSection({ people }) {
  return (
    <section className="research-leadership-section" aria-labelledby="research-leadership-title">
      <div className="research-leadership-inner">
        <div className="research-leadership-header">
          <div className="research-leadership-header-left">
            <div className="research-leadership-eyebrow">Research leadership</div>
            <h2 id="research-leadership-title" className="research-leadership-headline">
              The science is led by farmers who are also <span>scientists.</span>
            </h2>
          </div>

          <div className="research-leadership-header-right">
            <p className="research-leadership-body">
              CRARS at CSU Chico leads all Edison Institute research design, data collection, and analysis, ensuring{" "}
              <strong>every finding is grounded in practical agricultural reality</strong>.
            </p>
            <div className="research-leadership-strip">
              <div className="research-leadership-abbr">CRARS</div>
              <div className="research-leadership-strip-divider" />
              <div className="research-leadership-strip-desc">
                <strong>Center for Regenerative Agriculture and Resilient Systems</strong> at California State
                University, Chico. Scientific partner and lead research institution for The Edison Institute.
              </div>
            </div>
          </div>
        </div>

        <div className="research-leadership-grid">
          {people.map((person) => {
            const meta = researcherMeta[person.name];

            return (
              <article key={person.name} className="research-leadership-card">
                <div className="research-leadership-medallion">
                  <div className="research-leadership-initials">
                    {meta.image ? (
                      <img src={meta.image} alt={meta.alt || `Portrait of ${person.name}`} loading="lazy" decoding="async" />
                    ) : (
                      meta.initials
                    )}
                  </div>
                  <div className="research-leadership-index">{meta.index}</div>
                </div>

                <div className="research-leadership-card-body">
                  <div className="research-leadership-role-tag">{person.role}</div>
                  <h3>{person.name}</h3>
                  <strong>{cleanTitle(person.title)}</strong>
                  <p>{person.summary}</p>
                  <div className="research-leadership-keywords">
                    {meta.keywords.map((keyword) => (
                      <span key={keyword}>{keyword}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ResearchLeadershipSection;
