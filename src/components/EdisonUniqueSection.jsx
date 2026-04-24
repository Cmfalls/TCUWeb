const ClockIcon = ({ color }) => (
  <svg className="edison-adv-icon-svg" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="11" cy="11" r="9" stroke={color} strokeWidth="1.5" />
    <path d="M11 7v4l2.5 2.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="11" cy="11" r="1.5" fill={color} />
  </svg>
);

const ValleyIcon = ({ color }) => (
  <svg className="edison-adv-icon-svg" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 18 Q11 4 18 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <circle cx="11" cy="11" r="2" fill={color} />
    <path d="M8 14h6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SystemsIcon = ({ color }) => (
  <svg className="edison-adv-icon-svg" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" rx="2" stroke={color} strokeWidth="1.5" />
    <rect x="12" y="3" width="7" height="7" rx="2" stroke={color} strokeWidth="1.5" />
    <rect x="3" y="12" width="7" height="7" rx="2" stroke={color} strokeWidth="1.5" />
    <rect x="12" y="12" width="7" height="7" rx="2" stroke={color} strokeWidth="1.5" />
    <path d="M7 10v2M10 7h2M15 10v2M10 15h2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const FarmIcon = ({ color }) => (
  <svg className="edison-adv-icon-svg" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="12" width="16" height="7" rx="2" stroke={color} strokeWidth="1.5" />
    <path d="M7 12 Q7 6 11 4 Q15 6 15 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <line x1="11" y1="4" x2="11" y2="12" stroke={color} strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);

const HorizonIcon = ({ color }) => (
  <svg className="edison-adv-icon-svg" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M4 18 L4 8 L8 10 L11 5 L14 9 L18 6 L18 18 Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="rgba(200, 96, 32, 0.1)"
    />
    <line x1="4" y1="18" x2="18" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ADVANTAGES = [
  {
    num: "01",
    color: "#99cc33",
    className: "c1",
    tag: "Independence",
    title: "First independent research center focused on agricultural practices and climate change.",
    desc:
      "The first center focused exclusively on the cross-impact of agricultural practices and climate change, independent of corporate or commodity interests. No funder controls the research agenda. No product company owns the findings.",
    footLabel: "Why this matters",
    footText: (
      <>
        Corporate-funded ag research answers the questions funders want answered.{" "}
        <em>Edison answers the questions growers and the climate need answered.</em>
      </>
    ),
    Icon: ClockIcon,
  },
  {
    num: "02",
    color: "#6fa3a0",
    className: "c2",
    tag: "Location",
    title: "Strategically located in the Central Valley.",
    dataNum: "25",
    dataUnit: "%",
    dataLabel: <>of US food<br />grown here</>,
    desc:
      "California's Central Valley produces 25% of U.S. food and 40% of fruits and nuts, grown on just 1% of U.S. farmland. What we prove here travels fast to the highest-stakes agricultural land in the country.",
    Icon: ValleyIcon,
  },
  {
    num: "03",
    color: "#e8a547",
    className: "c3",
    tag: "Systems Approach",
    title: "A systems approach to R&D.",
    desc:
      "Edison holds natural, economic, agricultural, and political systems inside the same research frame, treating food and water security as inseparable. No siloed measurements. Every study connects to the chain.",
    Icon: SystemsIcon,
  },
  {
    num: "04",
    color: "#8a6d3b",
    className: "c4",
    tag: "Scale",
    title: "More than 325 dedicated acres.",
    dataNum: "325",
    dataUnit: "AC",
    dataLabel: <>donated working<br />farmland</>,
    desc:
      "Donated land, under independent institutional control, allowing both in-situ field research and controlled in-lab study across a full working farm. Commercial-scale results, not greenhouse extrapolations.",
    Icon: FarmIcon,
  },
  {
    num: "05",
    color: "#c86020",
    className: "c5",
    tag: "Time Horizon",
    title: "Long-term research capacity.",
    dataNum: "10+",
    dataLabel: <>year horizon<br />per study</>,
    desc:
      "Most agricultural studies measure seasons. Edison is built to measure years, tracking what actually changes in soil, water, and farm economics over time. The confidence growers need comes from data that runs long enough to trust.",
    Icon: HorizonIcon,
  },
];

function AdvantageCard({ item, feature = false }) {
  const Icon = item.Icon;

  return (
    <article className={`edison-adv-card ${item.className}${feature ? " edison-adv-feature" : ""}`}>
      <div className="edison-adv-head">
        <div className="edison-adv-top">
          <div className="edison-adv-num">{item.num}</div>
          <div
            className="edison-adv-icon"
            style={{
              background: `${item.color}14`,
              borderColor: `${item.color}40`,
            }}
          >
            <Icon color={item.color} />
          </div>
        </div>
        <div className="edison-adv-tag">{item.tag}</div>
        <h3 className="edison-adv-title">{item.title}</h3>
      </div>

      {item.dataNum && (
        <>
          <div className="edison-adv-sep" />
          <div className="edison-adv-data">
            <div className="edison-adv-data-num">{item.dataNum}</div>
            {item.dataUnit && <div className="edison-adv-data-unit">{item.dataUnit}</div>}
            <div className="edison-adv-data-label">{item.dataLabel}</div>
          </div>
        </>
      )}

      <p className="edison-adv-body">{item.desc}</p>

      {feature && (
        <div className="edison-adv-feature-foot">
          <div className="edison-adv-foot-label">{item.footLabel}</div>
          <div className="edison-adv-foot-text">{item.footText}</div>
        </div>
      )}
    </article>
  );
}

function EdisonUniqueSection() {
  return (
    <section className="section edison-unique-section">
      <div className="container">
        <div className="edison-unique-header">
          <div>
            <span className="eyebrow">What makes Edison unique</span>
            <h2 className="edison-unique-title">
              Five structural advantages no other center has <span>combined.</span>
            </h2>
          </div>
          <div className="edison-unique-header-right">
            <p className="edison-unique-lede">
              Edison is not the first agricultural research center. It is the first to{" "}
              <strong>
                combine independent governance, commercial-scale land, systems R&amp;D, a water-stressed location, and
                long-horizon timelines
              </strong>{" "}
              under one roof.
            </p>
          </div>
        </div>

        <div className="edison-adv-row1">
          <AdvantageCard item={ADVANTAGES[0]} feature />
          <AdvantageCard item={ADVANTAGES[1]} />
          <AdvantageCard item={ADVANTAGES[2]} />
        </div>

        <div className="edison-adv-row2">
          <AdvantageCard item={ADVANTAGES[3]} />
          <AdvantageCard item={ADVANTAGES[4]} />
        </div>
      </div>
    </section>
  );
}

export default EdisonUniqueSection;
