const focusByName = {
  "Larry Kopald": "Strategy, public case, institutional continuity",
  "Randi Fiat": "Operations, development, stakeholder engagement",
  "Zak Zaidman": "Partnerships, program direction, communication",
  "Connor Falls": "Web, publishing, digital storytelling",
};

const classByRole = {
  Founder: "is-founder",
  Leadership: "is-leadership",
  Communications: "is-comms",
};

function LeadershipSection({ people }) {
  return (
    <section className="leadership-section" aria-labelledby="leadership-title">
      <div className="leadership-inner">
        <div className="leadership-header">
          <div className="leadership-header-left">
            <div className="leadership-eyebrow">Leadership</div>
            <h2 id="leadership-title" className="leadership-headline">
              The people carrying the work into research, partnerships, and public <span>explanation.</span>
            </h2>
          </div>

          <div className="leadership-header-right">
            <p className="leadership-body">
              The team&apos;s job is not only to say the right things about climate and soil. It is to{" "}
              <strong>
                connect the public case to field work, partnerships, digital systems, and institutional continuity
              </strong>
              .
            </p>

            <div className="leadership-meta" aria-label="Leadership team summary">
              <div className="leadership-meta-item">
                <div className="leadership-meta-label">Team members</div>
                <div className="leadership-meta-value">{people.length}</div>
              </div>
              <div className="leadership-meta-divider" />
              <div className="leadership-meta-item">
                <div className="leadership-meta-label">Functions</div>
                <div className="leadership-meta-value">
                  3<span>Areas</span>
                </div>
              </div>
              <div className="leadership-meta-divider" />
              <div className="leadership-meta-item">
                <div className="leadership-meta-label">Org founded</div>
                <div className="leadership-meta-value">2013</div>
              </div>
              <div className="leadership-meta-divider" />
              <div className="leadership-meta-item">
                <div className="leadership-meta-label">Base</div>
                <div className="leadership-meta-value">
                  TCU<span>501c3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="leadership-grid">
          {people.map((person) => (
            <article
              key={person.name}
              className={`leadership-card ${classByRole[person.role] || "is-leadership"} is-${person.name
                .split(" ")[0]
                .toLowerCase()}`}
            >
              <div className="leadership-card-photo">
                <img src={person.image} alt={person.alt || person.name} loading="lazy" decoding="async" />
              </div>

              <div className="leadership-card-body">
                <div className="leadership-role-tag">{person.role}</div>
                <h3>{person.name}</h3>
                <strong>{person.title}</strong>
                <p>{person.summary}</p>
              </div>

              <div className="leadership-card-footer">
                <div className="leadership-footer-label">-&gt; Focus</div>
                <div className="leadership-footer-divider" />
                <div className="leadership-footer-text">{focusByName[person.name]}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadershipSection;
