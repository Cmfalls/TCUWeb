import { useMemo, useState } from "react";
import { aboutContent } from "../content/aboutSupportContent";

const partnerCategories = {
  "Schuman Family Foundation": "founding",
  CRARS: "research",
  "American Farmland Trust": "research",
  "Savory Global": "research",
  "General Mills": "food",
  Danone: "food",
  "Whole Foods Market": "food",
  "Alter Eco": "food",
  Nestle: "food",
  "Regeneration International": "advocacy",
  "Kiss The Ground": "advocacy",
  "Green America": "advocacy",
  ASBC: "advocacy",
  "World Economic Forum": "global",
  "The Kingdom of Thailand": "global",
  "Reseed Global": "global",
  "Cuatro por Mil Europe": "global",
};

const partnerLogoOverrides = {
  "Schuman Family Foundation": "/images/partners/partner-schuman-foundation.png",
};

const additionalBoardDetails = {
  "Erin Fitzgerald": {
    title: "Stewardship and institutional perspective",
    image: "/images/people/person-erin-fitzgerald-board-headshot.jpg",
    alt: "Portrait of Erin Fitzgerald",
  },
  "Harbinder Kang": {
    title: "Partnerships and institutional development",
    image: "/images/people/person-harbinder-kang-board-headshot.jpeg",
    alt: "Portrait of Harbinder Kang",
  },
  "Kevin Ogorzuluk": {
    title: "Institutional stewardship and development",
    image: "/images/people/person-kevin-ogorzalek-board-headshot.jpg",
    alt: "Portrait of Kevin Ogorzuluk",
  },
};

const filterLabels = [
  ["all", "All"],
  ["founding", "Founding"],
  ["research", "Research"],
  ["food", "Food"],
  ["advocacy", "Advocacy"],
  ["global", "Global"],
];

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function categoryLabel(category, featured) {
  if (featured) return "Founding partner";
  if (category === "food") return "Food system";
  return category;
}

function partnerSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function StewardshipArtifact() {
  const [activeFilter, setActiveFilter] = useState("all");
  const boardMembers = useMemo(
    () => [
      ...aboutContent.boardFeatured,
      ...aboutContent.boardAdditional.map((name) => {
        const detail = additionalBoardDetails[name] || {};

        return {
          name,
          role: "Board",
          title: detail.title || "Governance and institutional stewardship",
          image: detail.image,
          alt: detail.alt,
        };
      }),
    ],
    [],
  );
  const partners = useMemo(
    () =>
      [...aboutContent.partners]
        .map((partner) => ({
          ...partner,
          category: partnerCategories[partner.name] || "global",
          logo: partner.logo || partnerLogoOverrides[partner.name],
        }))
        .sort((a, b) => {
          if (a.category === "founding") return -1;
          if (b.category === "founding") return 1;
          return 0;
        }),
    [],
  );
  const visiblePartners =
    activeFilter === "all" ? partners : partners.filter((partner) => partner.category === activeFilter);

  return (
    <section className="stewardship-artifact-section" aria-labelledby="stewardship-artifact-title">
      <div className="stewardship-artifact-wrap">
        <header className="stewardship-artifact-header">
          <div>
            <div className="stewardship-artifact-eyebrow">Stewardship</div>
            <h2 id="stewardship-artifact-title">
              Governance and partners help keep the work <span>serious.</span>
            </h2>
          </div>
          <p>
            TCU is strongest when public explanation, field research, and institutional stewardship{" "}
            <strong>reinforce one another instead of drifting apart.</strong>
          </p>
        </header>

        <div className="stewardship-artifact-layout">
          <section className="stewardship-artifact-panel" aria-label="Board stewardship">
            <div className="stewardship-artifact-panel-header">
              <div className="stewardship-artifact-panel-label">Board Stewardship</div>
              <div className="stewardship-artifact-panel-count">
                <strong>{boardMembers.length}</strong> / Board Members
              </div>
            </div>

            <div className="stewardship-artifact-panel-intro">
              <h3>Oversight matters because this work has to last.</h3>
              <p>
                The board helps provide continuity, discipline, and long-range responsibility as TCU builds research,
                communication, and partnerships that are meant to endure.
              </p>
            </div>

            <div className="stewardship-artifact-board">
              {boardMembers.map((member) => (
                <article key={member.name} className="stewardship-artifact-board-member">
                  <div className="stewardship-artifact-member-avatar">
                    {member.image ? (
                      <img src={member.image} alt={member.alt || `Portrait of ${member.name}`} loading="lazy" decoding="async" />
                    ) : (
                      <span>{initials(member.name)}</span>
                    )}
                  </div>
                  <div className="stewardship-artifact-member-info">
                    <h3>{member.name}</h3>
                    <p>{member.title}</p>
                  </div>
                  <div className="stewardship-artifact-member-tag">Board</div>
                </article>
              ))}
            </div>

            <p className="stewardship-artifact-board-note">
              <strong>Additional board members</strong> broaden the governance bench across stewardship, partnerships,
              and institutional development. Full biographies available on request.
            </p>
          </section>

          <section className="stewardship-artifact-panel stewardship-artifact-partner-panel" aria-label="Selected partners">
            <div className="stewardship-artifact-panel-header">
              <div className="stewardship-artifact-panel-label">Selected Partners</div>
              <div className="stewardship-artifact-panel-count">
                <strong>{visiblePartners.length}</strong> / {partners.length} Organizations
              </div>
            </div>

            <div className="stewardship-artifact-filters" aria-label="Partner filters">
              <span>Filter:</span>
              {filterLabels.map(([filter, label]) => (
                <button
                  key={filter}
                  type="button"
                  className={activeFilter === filter ? "active" : ""}
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="stewardship-artifact-partners">
              {visiblePartners.map((partner) => {
                const featured = partner.category === "founding";

                return (
                  <article
                    key={partner.name}
                    className={`stewardship-artifact-partner stewardship-artifact-partner-${partner.category}`}
                    data-category={partner.category}
                    data-partner={partnerSlug(partner.name)}
                  >
                    <div className="stewardship-artifact-partner-logo">
                      {featured ? <span className="stewardship-artifact-featured-badge">Founding</span> : null}
                      {partner.logo ? (
                        <img src={partner.logo} alt={partner.alt || `${partner.name} logo`} loading="lazy" decoding="async" />
                      ) : (
                        <span>{partner.name}</span>
                      )}
                    </div>
                    <div className="stewardship-artifact-partner-info">
                      <span className="stewardship-artifact-partner-tag">{categoryLabel(partner.category, featured)}</span>
                      <h3>{partner.name}</h3>
                      <p>{partner.note}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="stewardship-artifact-partners-footer">
              <span>
                <strong>{partners.length}</strong> / Organizations across research, food, advocacy, and global sectors
              </span>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default StewardshipArtifact;
