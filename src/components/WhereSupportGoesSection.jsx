import { useEffect, useRef, useState } from "react";

const allocations = [
  {
    id: "1",
    shortLabel: "Farm ops",
    title: "Farm management and operations",
    amount: "~$650K",
    percent: 18.6,
    pctScale: 0.186,
    text:
      "Keep the working farm functioning as a credible research environment. Citrus, grape, and agave field programs, soil monitoring, and data collection.",
  },
  {
    id: "2",
    shortLabel: "Research staff",
    title: "Research staff and program leadership",
    amount: "~$1M",
    percent: 28.6,
    pctScale: 0.286,
    text:
      "Fund the research coordinators, farm management, program leadership, and administrative operations needed to do this work right.",
  },
  {
    id: "3",
    shortLabel: "Data platform",
    title: "Data platform and measurement systems",
    amount: "~$700K",
    percent: 20,
    pctScale: 0.2,
    text:
      "Support the monitoring, data infrastructure, and analysis tools that serious institutions can review and trust.",
  },
  {
    id: "4",
    shortLabel: "Infrastructure",
    title: "Infrastructure, irrigation, and soil restoration",
    amount: "~$600K",
    percent: 17.1,
    pctScale: 0.171,
    text:
      "Rehabilitate irrigation, improve field conditions, and build the physical base needed for credible long-term trials.",
  },
  {
    id: "5",
    shortLabel: "Education",
    title: "Education, field labs, and farmer engagement",
    amount: "~$550K",
    percent: 15.7,
    pctScale: 0.157,
    text:
      "Fund field days, applied workshops, training protocols, and implementation guides so lessons can travel beyond one farm.",
  },
];

function WhereSupportGoesSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState(null);

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

  const activeClass = activeId ? " has-active" : "";

  return (
    <section ref={sectionRef} id="where-support-goes" className="where-support-section">
      <div className="container where-support-shell">
        <div className="where-support-intro">
          <span className="eyebrow">Where Support Goes</span>
          <h2>Backing this work means building research capacity, not only funding a message.</h2>
          <p>
            Here is how the money moves. Each line is a working cost, not a marketing
            budget. Hover a segment to see which category it funds.
          </p>
        </div>

        <div className="where-support-budget">
          <div className="where-support-budget-header">
            <span>Phase One Allocation</span>
            <div>
              <strong>~$3.5M</strong>
              <em>Total</em>
            </div>
          </div>

          <div className={`where-support-bar${activeClass}`} onMouseLeave={() => setActiveId(null)}>
            {allocations.map((item) => (
              <button
                key={item.id}
                className={activeId === item.id ? "active" : ""}
                style={{ flex: item.percent }}
                type="button"
                title={item.title}
                onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                onFocus={() => setActiveId(item.id)}
                onMouseEnter={() => setActiveId(item.id)}
              >
                <span>{item.shortLabel}</span>
              </button>
            ))}
          </div>

          <div className="where-support-scale">
            <span>$0</span>
            <span>$1M</span>
            <span>$2M</span>
            <span>$3M</span>
            <span>$3.5M</span>
          </div>
        </div>

        <div className={`where-support-grid${activeClass}`} onMouseLeave={() => setActiveId(null)}>
          {allocations.map((item, index) => (
            <article
              key={item.id}
              className={[
                "where-support-card",
                `where-support-card-${item.id}`,
                visible ? "visible" : "",
                activeId === item.id ? "active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{
                "--pct": item.pctScale,
                transitionDelay: visible ? `${index * 100}ms` : "0ms",
              }}
              onFocus={() => setActiveId(item.id)}
              onMouseEnter={() => setActiveId(item.id)}
            >
              <div className="where-support-card-header">
                <strong>{item.amount}</strong>
                <span />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="where-support-pct-bar">
                <span />
              </div>
              <small>{item.percent.toFixed(1)}% of total</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhereSupportGoesSection;
