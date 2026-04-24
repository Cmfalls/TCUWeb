import { useEffect, useRef, useState } from "react";

const contactHref = "mailto:info@thecarbonunderground.org?subject=TCU%20Giving%20Inquiry";

const tiers = [
  {
    label: "Tier 01",
    name: "Founding Partner",
    amount: "$500K",
    plus: "+",
    text:
      "Your early commitment makes everything else possible. Founding Partners are the backbone of the Institute's operating stability and long-term research capacity.",
    unlocks: "Operating stability and long-term research capacity",
    cta: "Become a Founding Partner",
    flagship: true,
  },
  {
    label: "Tier 02",
    name: "Research Champion",
    amount: "$250K-$499K",
    text:
      "Supports a major research initiative. A crop program, a measurement campaign, or a full season of farmer engagement.",
    unlocks: "A major research initiative or full measurement campaign",
    cta: "Support research",
  },
  {
    label: "Tier 03",
    name: "Program Partner",
    amount: "$100K-$249K",
    text:
      "Support the daily work of running demonstrations, engaging farmers, and producing evidence that moves the field forward.",
    unlocks: "Daily operations, demonstrations, and farmer engagement",
    cta: "Partner with us",
  },
  {
    label: "Tier 04",
    name: "Institute Supporter",
    amount: "$25K-$99K",
    text:
      "Provide essential operating support that keeps the Institute running. Supporters receive regular updates and invitations to field events.",
    unlocks: "Operating support, updates, and field event access",
    cta: "Become a supporter",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8 H13 M9 4 L13 8 L9 12" />
    </svg>
  );
}

function GivingOpportunitiesSection() {
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
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="giving-opportunities" ref={sectionRef} className="giving-opportunities-section">
      <div className="container">
        <div className="giving-opportunities-heading">
          <span className="eyebrow">Giving Opportunities</span>
          <h2>
            We are building a founding community of supporters who share our belief in the power of agriculture to address climate change.
          </h2>
        </div>

        <div className="giving-opportunities-tiers">
          {tiers.map((tier, index) => (
            <article
              key={tier.label}
              className={`giving-opportunity-tier${tier.flagship ? " flagship" : ""}${visible ? " visible" : ""}`}
              style={{ transitionDelay: visible ? `${index * 120}ms` : "0ms" }}
            >
              {tier.flagship && <span className="giving-opportunity-flag">Flagship</span>}
              <span className="giving-opportunity-label">{tier.label}</span>
              <h3>{tier.name}</h3>
              <strong className="giving-opportunity-amount">
                {tier.amount}
                {tier.plus && <span>{tier.plus}</span>}
              </strong>
              <p>{tier.text}</p>
              <div className="giving-opportunity-unlocks">
                <span>-&gt; Unlocks</span>
                <strong>{tier.unlocks}</strong>
              </div>
              <a href={contactHref}>
                {tier.cta}
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>

        <div className="giving-opportunities-flexible">
          <div>
            <span>Flexible Giving</span>
            <p>
              <strong>Multi-year pledges, gifts of appreciated stock, and donor-advised fund contributions are welcomed.</strong> We work with partners to structure the gift that fits.
            </p>
          </div>
          <a href={contactHref}>
            Talk to our team
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

export default GivingOpportunitiesSection;
