import { useEffect, useRef, useState } from "react";

const foundationItems = [
  {
    status: "Secured",
    value: "$7M+",
    text: "Committed by Schuman Family Foundation in land and operating support",
  },
  {
    status: "Owned",
    value: "325 AC",
    text: "Edison Farm, Central Valley, California",
  },
  {
    status: "Locked",
    value: "Perm",
    text: "Permanent restrictive covenant on the land",
  },
  {
    status: "Partnered",
    value: "CRARS",
    text: "Research partnership with CSU Chico in place",
  },
  {
    status: "Running",
    value: "Live",
    text: "Phase-one research is already on the ground",
  },
];

const pressurePoints = [
  {
    tag: "Pressure Point 01",
    title: "The stakes are immediate.",
    text:
      "Heat, drought, disappearing aquifers, and degraded soil are already changing how farms operate in one of the most important agricultural regions in the country.",
    footer: "Conditions / Real-time",
  },
  {
    tag: "Pressure Point 02",
    title: "The proof gap is still real.",
    text:
      "Growers do not change practice on theory alone. They need locally relevant evidence, technical support, credible measurement, and confidence about operational tradeoffs.",
    footer: "Adoption / Evidence",
  },
  {
    tag: "Pressure Point 03",
    title: "This is the build phase.",
    text:
      "Early support does not just sustain existing work. It helps define the research agenda, the measurement systems, and the institutional footing of Edison itself.",
    footer: "Timing / Phase One",
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <polyline points="3,8 7,12 13,4" />
    </svg>
  );
}

function WhyNowSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
    <section ref={sectionRef} id="why-now" className="why-now-section">
      <div className="container why-now-shell">
        <div className="why-now-intro">
          <span className="eyebrow">Why Backing This Now Matters</span>
          <h2>The climate case is strong. The missing piece is trusted proof under real conditions.</h2>
          <p>
            We are not starting from zero. <strong>The Schuman Family Foundation has committed more than seven million dollars in land and operating support.</strong> The 325-acre Edison Farm is ours, secured by a permanent restrictive covenant. Our research partnership with CRARS is in place. The work has begun. What we need now is stability, the operating support that lets us do this work right, attract the best people, and deliver results at the speed and scale this moment demands.
          </p>
        </div>

        <div className="why-now-foundation">
          <div className="why-now-foundation-header">
            <span>Foundation In Place</span>
            <p>
              Status / <strong>Active</strong>
            </p>
          </div>

          <div className="why-now-foundation-grid">
            {foundationItems.map((item) => (
              <article key={item.status} className="why-now-foundation-item">
                <span>
                  <CheckIcon />
                  {item.status}
                </span>
                <strong>{item.value}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="why-now-transition">
          <span>What Needs Support Now</span>
        </div>

        <div className="why-now-cards">
          {pressurePoints.map((card, index) => (
            <article
              key={card.tag}
              className={`why-now-card${visible ? " visible" : ""}`}
              style={{ transitionDelay: visible ? `${index * 140}ms` : "0ms" }}
            >
              <span>{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <small>{card.footer}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyNowSection;
