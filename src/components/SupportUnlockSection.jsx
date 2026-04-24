import { useEffect, useRef, useState } from "react";

const supportHref =
  "mailto:info@thecarbonunderground.org?subject=Support%20TCU%20Work%20Package";

const unlockCards = [
  {
    index: "01",
    category: "Research",
    title: "Baseline studies and monitoring",
    text:
      "Help establish the measurements that allow Edison and related work to track soil, water, infrastructure, and farm condition credibly over time.",
    deliverable: "Sensors, soil cores, baseline reports the field can be measured against.",
    icon: "pulse",
  },
  {
    index: "02",
    category: "Field Trials",
    title: "Research design and field trials",
    text:
      "Support a carbon farm plan, research plans, and the early projects that turn broad climate goals into tested agricultural work.",
    deliverable: "A documented farm plan and first-season trial data from working acreage.",
    icon: "farm",
  },
  {
    index: "03",
    category: "Education",
    title: "Student and grower learning",
    text:
      "Expand internships, field days, farmer-to-farmer learning, and practical educational experiences that help the next generation carry this work forward.",
    deliverable: "Field days, student placements, and farmer training cohorts each season.",
    icon: "education",
  },
  {
    index: "04",
    category: "Communication",
    title: "Public evidence and communication",
    text:
      "Strengthen the writing, visuals, monthly case studies, and evidence-based storytelling that help serious funders and the broader public understand why this work matters now.",
    deliverable: "Monthly evidence briefs, case studies, and public-facing explainers.",
    icon: "brief",
  },
  {
    index: "05",
    category: "Outreach",
    title: "Campaign tools that travel",
    text:
      "Build donor and public-facing materials such as card decks, newsletters, digital booklets, and field updates so the case can keep moving after a first visit.",
    deliverable: "A deck, a booklet, and a newsletter cadence donors can take with them.",
    icon: "message",
  },
];

function UnlockIcon({ type }) {
  if (type === "farm") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20V8l8-4 8 4v12" />
        <path d="M4 20h16" />
        <path d="M10 20v-6h4v6" />
      </svg>
    );
  }

  if (type === "education") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 8l10-5 10 5-10 5z" />
        <path d="M6 10v5c0 1 3 3 6 3s6-2 6-3v-5" />
      </svg>
    );
  }

  if (type === "brief") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="M4 10h16" />
        <path d="M8 14h4" />
      </svg>
    );
  }

  if (type === "message") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h16v14h-7l-5 4v-4H4z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 12h4l3-8 4 16 3-8h4" />
    </svg>
  );
}

function SupportUnlockSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const totalPackages = unlockCards.length;
  const categoryCount = new Set(unlockCards.map((card) => card.category)).size;

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
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="support-unlock" className="support-unlock-section">
      <div className="container support-unlock-shell">
        <div className="support-unlock-intro">
          <div>
            <span className="eyebrow">What New Support Can Unlock</span>
            <h2>These are not abstract needs. They are the next pieces of visible work.</h2>
          </div>

          <div className="support-unlock-intro-copy">
            <p>
              Each item below is a funded work package waiting for a partner. Pick the one
              that matches what you want to see move next.
            </p>
            <div className="support-unlock-intro-meta" aria-label="Work package summary">
              <span>
                <strong>{totalPackages}</strong> live packages
              </span>
              <span>
                <strong>{categoryCount}</strong> focus areas
              </span>
            </div>
          </div>
        </div>

        <div className="support-unlock-toolbar">
          <span>Open Work Packages</span>
          <p>
            <strong>{totalPackages}</strong> / {totalPackages} available now
          </p>
        </div>

        <div className="support-unlock-grid">
          {unlockCards.map((card, index) => (
            <article
              key={card.title}
              className={`support-unlock-card${visible ? " visible" : ""}`}
              style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
            >
              <div className="support-unlock-card-top">
                <div className="support-unlock-icon">
                  <UnlockIcon type={card.icon} />
                </div>
                <span>
                  {card.index} / {card.category}
                </span>
              </div>

              <div className="support-unlock-card-body">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>

              <div className="support-unlock-deliverable">
                <span>-&gt; Delivers</span>
                <strong>{card.deliverable}</strong>
              </div>

              <a className="support-unlock-footer" href={supportHref}>
                <span>Support this work</span>
                <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SupportUnlockSection;
