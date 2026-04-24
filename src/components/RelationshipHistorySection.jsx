const historyCardMeta = [
  {
    scope: "Food / Global",
    partners: "Just Foods, CRARS at CSU Chico",
    accent: "soil",
  },
  {
    scope: "Industry / Global",
    partners: "Alter Eco, Barry Callebaut",
    accent: "warn",
  },
  {
    scope: "Public / Multi-region",
    partners: "AFT, ASBC, Navdanya, Thrive Natural Care",
    accent: "green",
  },
  {
    scope: "Standards / Global",
    partners: "Green America, Danone, Ben & Jerry's",
    accent: "water",
  },
];

function RelationshipHistorySection({ cards }) {
  return (
    <section className="relationship-history-section" aria-labelledby="relationship-history-title">
      <div className="relationship-history-inner">
        <div className="relationship-history-header">
          <div className="relationship-history-header-left">
            <div className="relationship-history-eyebrow">Relationship History</div>
            <h2 id="relationship-history-title" className="relationship-history-headline">
              Past initiatives show how TCU has moved across food, climate, and <span>public action.</span>
            </h2>
          </div>

          <div className="relationship-history-header-right">
            <p className="relationship-history-body">
              The rebuild should not bury the proof that this work has already traveled through{" "}
              <strong>farms, brands, standards, and public participation campaigns</strong>.
            </p>

            <div className="relationship-history-meta" aria-label="Relationship history summary">
              <div className="relationship-history-meta-item">
                <div className="relationship-history-meta-label">Initiatives</div>
                <div className="relationship-history-meta-value">{cards.length}</div>
              </div>
              <div className="relationship-history-meta-divider" />
              <div className="relationship-history-meta-item">
                <div className="relationship-history-meta-label">Sectors</div>
                <div className="relationship-history-meta-value">
                  3<span>Areas</span>
                </div>
              </div>
              <div className="relationship-history-meta-divider" />
              <div className="relationship-history-meta-item">
                <div className="relationship-history-meta-label">Scope</div>
                <div className="relationship-history-meta-value">
                  Global<span>+ Local</span>
                </div>
              </div>
              <div className="relationship-history-meta-divider" />
              <div className="relationship-history-meta-item">
                <div className="relationship-history-meta-label">Since</div>
                <div className="relationship-history-meta-value">2014</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relationship-history-grid">
          {cards.map((card, index) => {
            const meta = historyCardMeta[index] || historyCardMeta[historyCardMeta.length - 1];

            return (
              <article
                key={card.title}
                className={`relationship-history-card relationship-history-card-${index + 1} is-${meta.accent}`}
              >
                <div className="relationship-history-card-image">
                  <img src={card.image} alt={card.imageAlt} />
                  <div className="relationship-history-scope-badge">{meta.scope}</div>
                </div>

                <div className="relationship-history-card-body">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>

                <div className="relationship-history-thesis">
                  <div className="relationship-history-thesis-label">-&gt; Partners</div>
                  <div className="relationship-history-thesis-divider" />
                  <div className="relationship-history-thesis-text">{meta.partners}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RelationshipHistorySection;
