import { useState } from "react";

const pillars = [
  {
    id: 1,
    num: "01",
    title: "Nature as a working partner",
    preview: "Photosynthesis is already doing the work.",
    text:
      "Photosynthesis already moves atmospheric carbon into plants and soil. The job is to restore the conditions that let that biological work continue at scale.",
  },
  {
    id: 2,
    num: "02",
    title: "Food security inside climate repair",
    preview: "The same soil that stores carbon grows better food.",
    text:
      "The living soil functions that store carbon also improve water holding, crop resilience, biodiversity, and farmer viability. One set of practices. Many returns.",
  },
  {
    id: 3,
    num: "03",
    title: "Proof before scale",
    preview: "Measured on real working land. Not in theory.",
    text:
      "Soil Intelligence becomes persuasive when it is measured on working land, translated clearly, and connected to adoption decisions growers and funders trust.",
  },
];

function SoilIntelligenceInteractive() {
  const [selectedId, setSelectedId] = useState(1);
  const [activeId, setActiveId] = useState(1);
  const activeClass = `active-${activeId}`;

  return (
    <section className="section soil-intelligence-interactive-section">
      <div className="container soil-intelligence-stage">
        <div className="soil-intelligence-intro">
          <span className="eyebrow">Soil Intelligence</span>
          <h2>The missing climate technology is also the oldest one.</h2>
          <p>
            Soil Intelligence is TCU&apos;s practical frame for the science of living soil. How carbon, water,
            microbes, roots, crops, and farm decisions behave together when land is managed for regeneration.
          </p>
        </div>

        <div className="soil-intelligence-grid">
          <div className={`soil-diagram ${activeClass}`} aria-label="Animated soil intelligence diagram">
            <svg viewBox="0 0 640 520" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="soilSkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#efe6cf" />
                  <stop offset="72%" stopColor="#e9dfc8" />
                  <stop offset="100%" stopColor="#ddd1b3" />
                </linearGradient>
                <linearGradient id="soilGroundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#7d5728" />
                  <stop offset="45%" stopColor="#5f401d" />
                  <stop offset="100%" stopColor="#341f0d" />
                </linearGradient>
                <linearGradient id="rootFade" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#dcc991" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#8d7449" stopOpacity="0.55" />
                </linearGradient>
                <linearGradient id="probeGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#d0ef66" />
                  <stop offset="100%" stopColor="#88ab24" />
                </linearGradient>
                <radialGradient id="sunGlow" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#d7f364" stopOpacity="0.95" />
                  <stop offset="65%" stopColor="#abd737" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#abd737" stopOpacity="0" />
                </radialGradient>
                <filter id="soilBlur" x="-5%" y="-5%" width="110%" height="110%">
                  <feGaussianBlur stdDeviation="8" />
                </filter>
              </defs>

              <rect x="0" y="0" width="640" height="520" fill="#2f1d0d" />
              <rect x="0" y="0" width="640" height="154" fill="url(#soilSkyGrad)" />
              <rect x="0" y="154" width="640" height="366" fill="url(#soilGroundGrad)" />
              <rect x="0" y="140" width="640" height="24" fill="#cab894" opacity="0.4" filter="url(#soilBlur)" />
              <rect x="0" y="176" width="640" height="96" fill="#6f4a22" opacity="0.28" />
              <rect x="0" y="272" width="640" height="112" fill="#553716" opacity="0.28" />
              <rect x="0" y="384" width="640" height="136" fill="#241509" opacity="0.22" />

              <g opacity="0.12" stroke="#eedeb8" strokeWidth="1">
                <path d="M 0 196 H 640" />
                <path d="M 0 278 H 640" />
                <path d="M 0 372 H 640" />
              </g>

              <g className="sun">
                <circle cx="460" cy="68" r="42" fill="url(#sunGlow)" />
                <circle cx="460" cy="68" r="22" fill="#abd737" />
                <g stroke="#99cc33" strokeWidth="2" strokeLinecap="round">
                  <line x1="460" y1="24" x2="460" y2="36" />
                  <line x1="460" y1="100" x2="460" y2="112" />
                  <line x1="416" y1="68" x2="428" y2="68" />
                  <line x1="492" y1="68" x2="504" y2="68" />
                  <line x1="431" y1="39" x2="439" y2="47" />
                  <line x1="481" y1="89" x2="489" y2="97" />
                  <line x1="431" y1="97" x2="439" y2="89" />
                  <line x1="481" y1="47" x2="489" y2="39" />
                </g>
              </g>

              <g className="plant">
                <path d="M 148 154 L 148 92" stroke="#173229" strokeWidth="4" fill="none" strokeLinecap="round" />
                <ellipse cx="133" cy="104" rx="16" ry="8" fill="#99cc33" transform="rotate(-28 133 104)" />
                <ellipse cx="162" cy="96" rx="16" ry="8" fill="#99cc33" transform="rotate(28 162 96)" />
                <ellipse cx="148" cy="84" rx="13" ry="7" fill="#c7ef68" />

                <path d="M 300 154 L 300 72" stroke="#173229" strokeWidth="4.2" fill="none" strokeLinecap="round" />
                <ellipse cx="282" cy="92" rx="18" ry="8.5" fill="#99cc33" transform="rotate(-24 282 92)" />
                <ellipse cx="318" cy="82" rx="18" ry="8.5" fill="#99cc33" transform="rotate(24 318 82)" />
                <ellipse cx="300" cy="64" rx="15" ry="7.5" fill="#c7ef68" />

                <path d="M 420 154 L 420 102" stroke="#173229" strokeWidth="4" fill="none" strokeLinecap="round" />
                <ellipse cx="405" cy="113" rx="14" ry="7" fill="#99cc33" transform="rotate(-28 405 113)" />
                <ellipse cx="435" cy="106" rx="14" ry="7" fill="#99cc33" transform="rotate(28 435 106)" />
                <ellipse cx="420" cy="92" rx="12" ry="6.5" fill="#c7ef68" />
              </g>

              <g className="carbon-flow" stroke="#b8e655" strokeWidth="2.5" fill="none" strokeLinecap="round">
                <line x1="148" y1="104" x2="148" y2="246" />
                <line x1="300" y1="84" x2="300" y2="256" />
                <line x1="420" y1="110" x2="420" y2="246" />
              </g>

              <line x1="112" y1="154" x2="542" y2="154" stroke="#342614" strokeWidth="2.4" />

              <g className="root-system" stroke="url(#rootFade)" strokeWidth="2.4" fill="none" strokeLinecap="round">
                <path d="M 148 154 Q 138 214 126 272 Q 118 316 110 368" />
                <path d="M 148 154 Q 158 208 165 260 Q 172 308 178 350" />
                <path d="M 148 184 Q 130 210 116 236" />
                <path d="M 148 214 Q 170 236 184 258" />
                <path d="M 300 154 Q 294 232 288 312 Q 282 392 276 468" />
                <path d="M 300 154 Q 313 220 320 298 Q 327 372 334 448" />
                <path d="M 300 196 Q 275 226 252 246" />
                <path d="M 300 236 Q 330 264 352 288" />
                <path d="M 292 314 Q 266 342 244 366" />
                <path d="M 320 352 Q 348 378 364 406" />
                <path d="M 420 154 Q 414 228 408 292 Q 402 360 396 420" />
                <path d="M 420 154 Q 432 212 438 280 Q 446 348 454 418" />
                <path d="M 420 196 Q 400 220 386 244" />
                <path d="M 420 246 Q 448 272 466 304" />
              </g>

              <g className="water-drop">
                <path d="M 212 246 Q 204 258 212 270 Q 220 258 212 246 Z" fill="#9cc942" />
              </g>
              <g className="water-drop d2">
                <path d="M 334 304 Q 326 316 334 328 Q 342 316 334 304 Z" fill="#9cc942" />
              </g>
              <g className="water-drop d3">
                <path d="M 262 360 Q 254 372 262 384 Q 270 372 262 360 Z" fill="#9cc942" />
              </g>

              <g className="crop-ring">
                <circle cx="300" cy="118" r="34" fill="none" stroke="#b8e655" strokeWidth="1.8" strokeDasharray="4 5" opacity="0.56" />
              </g>

              <g className="deep-layer">
                {[
                  [118, 430, 3.4],
                  [126, 438, 2.4],
                  [110, 440, 2.8],
                  [226, 470, 3.2],
                  [236, 480, 2.2],
                  [218, 486, 2.8],
                  [402, 452, 3.2],
                  [412, 460, 2.2],
                  [394, 466, 2.8],
                  [500, 442, 3.2],
                  [510, 450, 2.2],
                  [492, 456, 2.8],
                ].map(([cx, cy, r]) => (
                  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="#99cc33" />
                ))}
              </g>

              <g className="probe">
                <line x1="480" y1="120" x2="480" y2="490" stroke="url(#probeGlow)" strokeWidth="2.6" />
                <rect x="474" y="112" width="12" height="16" fill="#c6ef69" rx="1.5" />
                <polygon points="476,490 484,490 480,504" fill="#9fc13c" />
              </g>

              <circle className="data-node" cx="480" cy="214" r="4.4" fill="#b8e655" />
              <circle className="data-node n2" cx="480" cy="302" r="4.4" fill="#b8e655" />
              <circle className="data-node n3" cx="480" cy="394" r="4.4" fill="#b8e655" />
              <circle className="data-node n4" cx="480" cy="470" r="4.4" fill="#b8e655" />
            </svg>

            <div className="soil-layer-label sky l-sky">Atmosphere</div>
            <div className="soil-layer-label l-topsoil">Topsoil</div>
            <div className="soil-layer-label l-root">Root Zone</div>
            <div className="soil-layer-label l-deep">Deep Carbon</div>
          </div>

          <div className="soil-pillars" onMouseLeave={() => setActiveId(selectedId)}>
            {pillars.map((pillar) => (
              <button
                key={pillar.id}
                className={`soil-pillar ${selectedId === pillar.id ? "active" : ""}`}
                type="button"
                onClick={() => {
                  setSelectedId(pillar.id);
                  setActiveId(pillar.id);
                }}
                onMouseEnter={() => setActiveId(pillar.id)}
              >
                <span className="soil-pillar-num">{pillar.num}</span>
                <h3>{pillar.title}</h3>
                <div className="soil-pillar-body">
                  <div className="soil-pillar-preview">{pillar.preview}</div>
                  <p>{pillar.text}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SoilIntelligenceInteractive;
