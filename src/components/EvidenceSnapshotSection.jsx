import { useEffect, useRef, useState } from "react";

const snapshotCards = [
  {
    label: "Agrifood-System Emissions",
    value: "~1/3",
    description:
      "Agrifood systems account for about one-third of human-made greenhouse gas emissions, which is why agricultural transition matters so much.",
    source: "FAO agrifood systems emissions update, 2025; Crippa et al. 2021",
    icon: "emissions",
  },
  {
    label: "Water Buffering",
    value: "20K gal",
    description:
      "Per acre for every 1% soil organic matter gain in the imported SOM model used by TCU Stats.",
    source: "USDA NRCS soil health; Bryant et al.; TCU SOM model",
    icon: "water",
  },
  {
    label: "Carbon Storage",
    value: "5.8 tons C",
    description:
      "Per acre at the same example level, showing how soil condition changes atmospheric impact.",
    source: "TCU SOM-to-C conversion; USDA NRCS; Lal, Science 2004",
    icon: "soil",
  },
  {
    label: "Climate Equivalent",
    value: "21.3 tons CO2e",
    description:
      "An atmospheric equivalent that helps translate soil gains into language climate audiences already recognize.",
    source: "IPCC carbon-to-CO2 standard; TCU derived",
    icon: "cloud",
  },
];

function SnapshotIcon({ type }) {
  if (type === "water") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.5s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11z" />
        <path d="M9 14a3 3 0 0 0 3 3" opacity="0.5" />
      </svg>
    );
  }

  if (type === "soil") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 20h18" />
        <path d="M5 20v-6l7-4 7 4v6" />
        <path d="M12 14v6" />
        <line x1="5" x2="19" y1="16" y2="16" opacity="0.4" />
      </svg>
    );
  }

  if (type === "cloud") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 15a5 5 0 0 1 5-5 6 6 0 0 1 11 2 4 4 0 0 1-1 7H8a4 4 0 0 1-4-4z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 2a10 10 0 0 1 10 10h-10z" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function EvidenceSnapshotSection({ variant = "default", handoffDirection = "above" }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const variantClass = variant === "home" ? " is-home" : "";
  const handoffWord = handoffDirection === "below" ? "below" : "above";

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="evidence-snapshot" className={`evidence-snapshot-section${variantClass}`}>
      <div className={`container evidence-snapshot-shell${variantClass}`}>
        {variant === "home" ? (
          <>
            <div className="evidence-snapshot-home-copy">
              <span className="eyebrow">Evidence Snapshot</span>
              <h2>Measured gains matter because they change how land handles stress.</h2>
            </div>

            <div className="evidence-snapshot-home-panel">
              <p className="evidence-snapshot-home-lede">
                Water buffering, carbon storage, and farm resilience do not sit in separate
                silos. The numbers below matter because they shape conditions on real farms.
              </p>

              <div className={`evidence-snapshot-flow visible${variantClass}`}>
                <div className="evidence-snapshot-grid">
                  {snapshotCards.map((card, index) => (
                    <article
                      key={card.label}
                      className={`evidence-snapshot-card${visible ? " visible" : ""}`}
                      style={{ transitionDelay: visible ? `${index * 120}ms` : "0ms" }}
                    >
                      <div className="evidence-snapshot-icon">
                        <SnapshotIcon type={card.icon} />
                      </div>
                      <span>{card.label}</span>
                      <strong>{card.value}</strong>
                      <p>{card.description}</p>
                      <small>{card.source}</small>
                    </article>
                  ))}
                </div>
              </div>

              <div className={`evidence-snapshot-handoff${variantClass}`}>
                <p>
                  These four numbers connect. <strong>Pull them into motion {handoffWord}.</strong>
                </p>
                <a href="#evidence-dashboard">Interactive Climate Readout</a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="evidence-snapshot-hero">
              <div className={`evidence-snapshot-intro${variantClass}`}>
                <span className="eyebrow">Evidence Snapshot</span>
                <h2>Measured gains matter because they change how land handles stress.</h2>
                <p>
                  Water buffering, carbon storage, and farm resilience do not sit in separate
                  silos. The numbers below matter because they shape conditions on real farms.
                </p>
              </div>

              <figure className="evidence-snapshot-visual">
                <img src="/images/evidence/agronomist-clipboard-inspecting-red-green-lettuce-rows.jpeg" alt="Agronomist inspecting rows of red and green crops in a field" loading="lazy" />
                <figcaption>
                  <span>Working-land readout</span>
                  Numbers matter when they describe physical changes in soil, water, carbon, and field resilience.
                </figcaption>
              </figure>
            </div>

            <div className={`evidence-snapshot-flow${visible ? " visible" : ""}${variantClass}`}>
              <div className="evidence-snapshot-line" />

              <div className="evidence-snapshot-grid">
                {snapshotCards.map((card, index) => (
                  <article
                    key={card.label}
                    className={`evidence-snapshot-card${visible ? " visible" : ""}`}
                    style={{ transitionDelay: visible ? `${index * 120}ms` : "0ms" }}
                  >
                    <div className="evidence-snapshot-icon">
                      <SnapshotIcon type={card.icon} />
                    </div>
                    <span>{card.label}</span>
                    <strong>{card.value}</strong>
                    <p>{card.description}</p>
                    <small>{card.source}</small>
                  </article>
                ))}
              </div>
            </div>

          </>
        )}
      </div>
    </section>
  );
}

export default EvidenceSnapshotSection;
