const facilityKeywords = [
  ["Analysis", "Sampling"],
  ["Residency", "Field access"],
  ["Events", "Training"],
  ["Permaculture", "Field work"],
];

const educationChips = [
  "Cover crops",
  "Compost",
  "Mulching",
  "Reduced tillage",
  "Drought-tolerant crops",
  "Value-added marketing",
];

function renderHeadline(title) {
  const match = title.match(/campus/i);

  if (!match || match.index == null) {
    return title;
  }

  const start = title.slice(0, match.index);
  const highlighted = title.slice(match.index, match.index + match[0].length);
  const end = title.slice(match.index + match[0].length);

  return (
    <>
      {start}
      <span>{highlighted}</span>
      {end}
    </>
  );
}

function FacilityVisual({ index }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 200 100" aria-hidden="true">
        <g stroke="#6fa3a0" strokeWidth="1.2" fill="none" opacity="0.5">
          <path d="M 60 75 L 60 40 L 50 25 M 60 40 L 70 25" />
          <rect x="50" y="75" width="20" height="8" rx="2" fill="rgba(111, 163, 160, 0.15)" />
          <circle cx="80" cy="50" r="12" strokeDasharray="2 3" />
          <path d="M 130 75 L 130 35 Q 130 25 140 25 L 150 25 Q 160 25 160 35 L 160 75" />
          <rect x="125" y="75" width="40" height="8" rx="2" fill="rgba(111, 163, 160, 0.15)" />
          <circle cx="145" cy="55" r="4" fill="#6fa3a0" opacity="0.3" />
        </g>
        <g stroke="#6fa3a0" strokeWidth="0.6" opacity="0.3">
          <line x1="15" y1="30" x2="35" y2="30" />
          <line x1="15" y1="40" x2="30" y2="40" />
          <line x1="15" y1="50" x2="25" y2="50" />
          <line x1="170" y1="35" x2="190" y2="35" />
          <line x1="175" y1="45" x2="190" y2="45" />
        </g>
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 200 100" aria-hidden="true">
        <g fill="rgba(201, 160, 102, 0.15)" stroke="#c9a066" strokeWidth="1" opacity="0.6">
          <rect x="40" y="40" width="30" height="40" rx="2" />
          <rect x="75" y="30" width="30" height="50" rx="2" />
          <rect x="110" y="45" width="30" height="35" rx="2" />
          <rect x="145" y="35" width="25" height="45" rx="2" />
        </g>
        <g fill="#c9a066" opacity="0.3">
          <rect x="48" y="48" width="5" height="5" rx="1" />
          <rect x="58" y="48" width="5" height="5" rx="1" />
          <rect x="48" y="60" width="5" height="5" rx="1" />
          <rect x="58" y="60" width="5" height="5" rx="1" />
          <rect x="83" y="38" width="5" height="5" rx="1" />
          <rect x="93" y="38" width="5" height="5" rx="1" />
          <rect x="83" y="50" width="5" height="5" rx="1" />
          <rect x="93" y="50" width="5" height="5" rx="1" />
          <rect x="83" y="62" width="5" height="5" rx="1" />
          <rect x="93" y="62" width="5" height="5" rx="1" />
        </g>
        <line x1="30" y1="80" x2="180" y2="80" stroke="#c9a066" strokeWidth="0.8" opacity="0.3" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 200 100" aria-hidden="true">
        <g stroke="#99cc33" strokeWidth="1" fill="none" opacity="0.5">
          <ellipse cx="100" cy="60" rx="55" ry="25" strokeDasharray="3 3" />
          <ellipse cx="100" cy="60" rx="35" ry="16" />
          <circle cx="100" cy="60" r="8" fill="rgba(153, 204, 51, 0.2)" />
        </g>
        <g fill="#99cc33" opacity="0.35">
          <circle cx="60" cy="45" r="3" />
          <circle cx="80" cy="38" r="3" />
          <circle cx="100" cy="35" r="3" />
          <circle cx="120" cy="38" r="3" />
          <circle cx="140" cy="45" r="3" />
          <circle cx="55" cy="70" r="3" />
          <circle cx="145" cy="70" r="3" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 100" aria-hidden="true">
      <g stroke="#8a6d3b" strokeWidth="1" fill="none" opacity="0.5">
        <rect x="30" y="30" width="40" height="20" rx="8" />
        <rect x="80" y="25" width="40" height="25" rx="8" />
        <rect x="130" y="30" width="40" height="20" rx="8" />
        <rect x="55" y="60" width="40" height="20" rx="8" />
        <rect x="105" y="60" width="40" height="20" rx="8" />
      </g>
      <g fill="#8a6d3b" opacity="0.4">
        <circle cx="45" cy="38" r="2" />
        <circle cx="55" cy="42" r="2" />
        <circle cx="95" cy="35" r="2" />
        <circle cx="105" cy="40" r="2" />
        <circle cx="145" cy="38" r="2" />
        <circle cx="155" cy="42" r="2" />
        <circle cx="70" cy="68" r="2" />
        <circle cx="80" cy="72" r="2" />
        <circle cx="120" cy="68" r="2" />
        <circle cx="130" cy="72" r="2" />
      </g>
      <path d="M 50 85 Q 100 75 150 85" stroke="#8a6d3b" strokeWidth="0.8" fill="none" opacity="0.4" strokeDasharray="3 3" />
    </svg>
  );
}

function EdisonCampusBuildoutSection({ content }) {
  return (
    <section className="edison-campus-buildout-section" aria-labelledby="edison-campus-buildout-title">
      <div className="edison-campus-buildout-inner">
        <div className="edison-campus-buildout-hero">
          <div className="edison-campus-buildout-copy">
            <div className="edison-campus-buildout-eyebrow">{content.eyebrow}</div>
            <h2 id="edison-campus-buildout-title">{renderHeadline(content.title)}</h2>
            <p>{content.lede}</p>
          </div>

          <div className="edison-campus-blueprint">
            <div className="edison-campus-blueprint-header">
              <div className="edison-campus-blueprint-title">Campus Site Plan</div>
              <div className="edison-campus-blueprint-meta">Edison Farm / 320 AC / Phase Two</div>
            </div>

            <div className="edison-campus-blueprint-body" aria-hidden="true">
              <svg viewBox="0 0 400 320">
                <rect x="30" y="20" width="340" height="280" fill="none" stroke="rgba(153, 204, 51, 0.2)" strokeWidth="1" strokeDasharray="4 3" />

                <line x1="30" y1="160" x2="370" y2="160" stroke="rgba(245, 239, 225, 0.15)" strokeWidth="6" />
                <line x1="200" y1="20" x2="200" y2="300" stroke="rgba(245, 239, 225, 0.1)" strokeWidth="4" />

                <rect x="55" y="50" width="110" height="75" rx="4" fill="rgba(111, 163, 160, 0.2)" stroke="#6fa3a0" strokeWidth="1.5" />
                <line x1="110" y1="50" x2="110" y2="125" stroke="#6fa3a0" strokeWidth="0.5" opacity="0.5" />
                <line x1="55" y1="88" x2="165" y2="88" stroke="#6fa3a0" strokeWidth="0.5" opacity="0.5" />
                <circle cx="80" cy="70" r="3" fill="#6fa3a0" opacity="0.6" />
                <circle cx="135" cy="70" r="3" fill="#6fa3a0" opacity="0.6" />
                <circle cx="80" cy="108" r="3" fill="#6fa3a0" opacity="0.6" />
                <circle cx="135" cy="108" r="3" fill="#6fa3a0" opacity="0.6" />
                <text x="110" y="42" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#6fa3a0" fontWeight="700" letterSpacing="1.5">
                  01 LABS
                </text>

                <rect x="230" y="45" width="100" height="85" rx="4" fill="rgba(201, 160, 102, 0.15)" stroke="#c9a066" strokeWidth="1.5" />
                <g stroke="#c9a066" strokeWidth="0.5" opacity="0.4">
                  <line x1="265" y1="45" x2="265" y2="130" />
                  <line x1="297" y1="45" x2="297" y2="130" />
                  <line x1="230" y1="73" x2="330" y2="73" />
                  <line x1="230" y1="101" x2="330" y2="101" />
                </g>
                <text x="280" y="37" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#c9a066" fontWeight="700" letterSpacing="1.5">
                  02 HOUSING
                </text>

                <rect x="55" y="188" width="120" height="80" rx="4" fill="rgba(153, 204, 51, 0.15)" stroke="#99cc33" strokeWidth="1.5" />
                <circle cx="115" cy="228" r="25" fill="none" stroke="#99cc33" strokeWidth="0.8" opacity="0.5" strokeDasharray="3 3" />
                <circle cx="115" cy="228" r="6" fill="#99cc33" opacity="0.35" />
                <circle cx="95" cy="210" r="2.5" fill="#99cc33" opacity="0.4" />
                <circle cx="135" cy="210" r="2.5" fill="#99cc33" opacity="0.4" />
                <circle cx="95" cy="248" r="2.5" fill="#99cc33" opacity="0.4" />
                <circle cx="135" cy="248" r="2.5" fill="#99cc33" opacity="0.4" />
                <text x="115" y="280" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#99cc33" fontWeight="700" letterSpacing="1.5">
                  03 LEARNING
                </text>

                <rect x="225" y="188" width="115" height="80" rx="4" fill="rgba(138, 109, 59, 0.15)" stroke="#8a6d3b" strokeWidth="1.5" strokeDasharray="4 2" />
                <path d="M 282 228 Q 260 208 282 190 Q 305 208 282 228 Q 260 245 282 265" fill="none" stroke="#8a6d3b" strokeWidth="0.8" opacity="0.5" />
                <g fill="#8a6d3b" opacity="0.4">
                  <circle cx="245" cy="208" r="2" />
                  <circle cx="260" cy="208" r="2" />
                  <circle cx="245" cy="225" r="2" />
                  <circle cx="260" cy="225" r="2" />
                  <circle cx="245" cy="242" r="2" />
                  <circle cx="260" cy="242" r="2" />
                  <circle cx="305" cy="208" r="2" />
                  <circle cx="320" cy="208" r="2" />
                  <circle cx="305" cy="242" r="2" />
                  <circle cx="320" cy="242" r="2" />
                </g>
                <text x="282" y="280" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8a6d3b" fontWeight="700" letterSpacing="1.5">
                  04 OUTDOOR
                </text>

                <g stroke="rgba(245, 239, 225, 0.2)" strokeWidth="1" strokeDasharray="3 4" fill="none">
                  <path d="M 165 100 L 230 100" />
                  <path d="M 115 125 L 115 188" />
                  <path d="M 282 130 L 282 188" />
                  <path d="M 175 228 L 225 228" />
                </g>

                <circle cx="200" cy="160" r="12" fill="#0a1f1a" stroke="#99cc33" strokeWidth="2" />
                <circle cx="200" cy="160" r="4" fill="#b8e655" />

                <line x1="310" y1="302" x2="360" y2="302" stroke="rgba(245, 239, 225, 0.3)" strokeWidth="1" />
                <line x1="310" y1="299" x2="310" y2="305" stroke="rgba(245, 239, 225, 0.3)" strokeWidth="1" />
                <line x1="360" y1="299" x2="360" y2="305" stroke="rgba(245, 239, 225, 0.3)" strokeWidth="1" />
                <text x="335" y="314" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="rgba(245, 239, 225, 0.35)" letterSpacing="0.5">
                  ~200 FT
                </text>

                <g transform="translate(50, 295)">
                  <circle cx="0" cy="0" r="10" fill="rgba(10, 31, 26, 0.5)" stroke="rgba(245, 239, 225, 0.2)" strokeWidth="1" />
                  <text x="0" y="4" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgba(245, 239, 225, 0.5)" fontWeight="700">
                    N
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="edison-campus-buildout-grid">
          {content.facilities.map((facility, index) => (
            <article key={facility.title} className={`edison-campus-buildout-card edison-campus-buildout-card-${index + 1}`}>
              <div className={`edison-campus-facility-visual edison-campus-facility-visual-${index + 1}`}>
                <FacilityVisual index={index} />
              </div>

              <div className="edison-campus-buildout-card-body">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{facility.title}.</h3>
                <p>{facility.text}</p>
              </div>

              <div className="edison-campus-buildout-card-footer">
                {facilityKeywords[index].map((keyword) => (
                  <span key={keyword} className="edison-campus-buildout-keyword">
                    {keyword}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="edison-campus-education-note">
          <div className="edison-campus-education-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 8 L12 3 L22 8 L12 13 Z" />
              <path d="M6 10v5c0 1 3 3 6 3s6-2 6-3v-5" />
            </svg>
          </div>

          <div className="edison-campus-education-content">
            <span>Education Center</span>
            <h3>The education center supports learning at every level.</h3>
            <p>{content.education}</p>
            <div className="edison-campus-education-chips">
              {educationChips.map((chip) => (
                <span key={chip} className="edison-campus-education-chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EdisonCampusBuildoutSection;
