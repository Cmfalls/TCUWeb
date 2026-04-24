import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { homeContent } from "../content/homeContent";

const STEPS = [
  {
    stepNum: "01 / THE COMMON STORY",
    title: "Reducing emissions will not solve climate change.",
    paragraphs: [
      "This year the world will add roughly 37 billion tons of new emissions to the atmosphere. Stopping that flow is essential.",
      "But it is only half of the solution.",
    ],
  },
  {
    stepNum: "02 / THE FUTURE HALF",
    title: "Cutting new emissions slows the damage.",
    paragraphs: [
      "Every new ton makes climate change one ton harder to stop. Humans need to stop adding emissions to the atmosphere. Full stop.",
    ],
    stats: [{ num: "37B", label: "Tons added per year", scale: 0.04 }],
    visual: "left",
  },
  {
    stepNum: "03 / THE PROBLEM",
    title: "The damage is already done.",
    paragraphs: [
      "Today's climate change comes from the trillion tons humans have already emitted. It will keep degrading climate stability if left in the sky.",
    ],
    stats: [
      { num: "37B", label: "Future, per year", scale: 0.037 },
      { num: "1T", label: "Already in the atmosphere", scale: 1, big: true },
    ],
  },
  {
    stepNum: "04 / THE OTHER HALF",
    title: "Drawing carbon back down completes the work.",
    paragraphs: [
      "Past emissions need to come out of the atmosphere and back into living systems. Healthy soil, plants, and photosynthesis do this at the scale climate change demands.",
      "The Carbon Underground works on this half.",
    ],
    visual: "right",
  },
  {
    stepNum: "05 / TOGETHER",
    title: "Two halves. One solution.",
    paragraphs: [
      "Cutting emissions and drawing them down are interdependent. One without the other will not work.",
      "Most of the world is focused on the first half. We focus on the second.",
    ],
    visual: "both",
  },
];

function StepContent({ step, className = "" }) {
  return (
    <div className={`thi-step-content ${className}`}>
      <div className="thi-step-num">{step.stepNum}</div>
      <h3 className="thi-step-title">{step.title}</h3>
      {step.paragraphs.map((paragraph) => (
        <p key={paragraph} className="thi-step-para">
          {paragraph}
        </p>
      ))}

      {step.stats ? (
        <div className="thi-stat-row">
          {step.stats.map((stat) => (
            <div key={`${stat.num}-${stat.label}`} className="thi-stat">
              <div className={`thi-stat-num ${stat.big ? "thi-stat-num--big" : ""}`}>{stat.num}</div>
              <div className="thi-stat-label">{stat.label}</div>
              <div className="thi-stat-bar">
                <div className="thi-stat-bar-fill" style={{ "--thi-scale": stat.scale }} />
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function TwoHalvesInteractive() {
  const [current, setCurrent] = useState(0);
  const { twoHalves } = homeContent;

  const visualState = useMemo(() => {
    const marker = STEPS[current]?.visual;

    if (marker === "left") return { leftDim: false, rightDim: true };
    if (marker === "right") return { leftDim: true, rightDim: false };
    if (marker === "both") return { leftDim: false, rightDim: false };
    return { leftDim: true, rightDim: true };
  }, [current]);

  const nextStep = () => setCurrent((prev) => ((prev + 1) % STEPS.length));
  const prevStep = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const goToStep = (index) => setCurrent(index);

  return (
    <section className="thi-section" aria-labelledby="two-halves-title">
      <div className="thi-container">
        <header className="thi-header">
          <div className="thi-header-copy">
            <span className="eyebrow">{twoHalves.eyebrow}</span>
            <h2 id="two-halves-title" className="thi-headline">
              {twoHalves.title}
            </h2>
            <p className="thi-lede">{twoHalves.lede}</p>
          </div>
        </header>

        <div className="thi-stage">
          <div className="thi-visual" aria-label="Two climate jobs visual">
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
              <defs>
                <clipPath id="thiLeftHalf">
                  <rect x="0" y="0" width="250" height="500" />
                </clipPath>
                <clipPath id="thiRightHalf">
                  <rect x="250" y="0" width="250" height="500" />
                </clipPath>
              </defs>

              <g
                className={`thi-half ${visualState.leftDim ? "thi-half--dim" : ""}`}
                onClick={() => goToStep(1)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    goToStep(1);
                  }
                }}
              >
                <circle cx="250" cy="250" r="220" fill="#0a2e26" clipPath="url(#thiLeftHalf)" />
                <g stroke="#99cc33" strokeWidth="3" fill="none" strokeLinecap="round">
                  <line x1="120" y1="340" x2="120" y2="200" />
                  <polyline points="105,215 120,200 135,215" strokeLinejoin="round" />
                  <line x1="170" y1="360" x2="170" y2="180" />
                  <polyline points="155,195 170,180 185,195" strokeLinejoin="round" />
                  <line x1="80" y1="320" x2="80" y2="220" />
                  <polyline points="65,235 80,220 95,235" strokeLinejoin="round" />
                  <line x1="215" y1="340" x2="215" y2="210" />
                  <polyline points="200,225 215,210 230,225" strokeLinejoin="round" />
                </g>
              </g>

              <g
                className={`thi-half ${visualState.rightDim ? "thi-half--dim" : ""}`}
                onClick={() => goToStep(3)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    goToStep(3);
                  }
                }}
              >
                <circle cx="250" cy="250" r="220" fill="#0a2e26" clipPath="url(#thiRightHalf)" />
                <g stroke="#99cc33" strokeWidth="3" fill="none" strokeLinecap="round">
                  <line x1="285" y1="180" x2="285" y2="320" />
                  <polyline points="270,305 285,320 300,305" strokeLinejoin="round" />
                  <line x1="335" y1="160" x2="335" y2="340" />
                  <polyline points="320,325 335,340 350,325" strokeLinejoin="round" />
                  <line x1="385" y1="200" x2="385" y2="300" />
                  <polyline points="370,285 385,300 400,285" strokeLinejoin="round" />
                  <line x1="425" y1="220" x2="425" y2="290" />
                  <polyline points="410,275 425,290 440,275" strokeLinejoin="round" />
                </g>
              </g>

              <line x1="250" y1="40" x2="250" y2="460" stroke="#f5efe1" strokeWidth="6" />
            </svg>
            <div className="thi-circle-labels" aria-hidden="true">
              <button className={`thi-circle-label ${visualState.leftDim ? "thi-circle-label--dim" : ""}`} onClick={() => goToStep(1)}>
                Cut New Emissions
              </button>
              <button className={`thi-circle-label ${visualState.rightDim ? "thi-circle-label--dim" : ""}`} onClick={() => goToStep(3)}>
                Draw Down Legacy Carbon
              </button>
            </div>
          </div>

          <div className="thi-panel" role="group" aria-live="polite" aria-label="Two halves explanation steps">
            <div className="thi-panel-body">
              <StepContent key={current} step={STEPS[current]} className="thi-step-content--active" />
              {STEPS.map((step) => (
                <StepContent key={step.stepNum} step={step} className="thi-step-content--sizer" />
              ))}
            </div>

            <div className="thi-controls">
              <button type="button" className="thi-btn thi-btn--ghost" onClick={prevStep} disabled={current === 0}>
                Back
              </button>
              <button type="button" className="thi-btn" onClick={nextStep}>
                {current === STEPS.length - 1 ? "Restart" : "Next"}
              </button>
              <div className="thi-controls-right">
                <span className="thi-step-counter">{current + 1} / {STEPS.length}</span>
                <div className="thi-dots" role="tablist" aria-label="Step navigation">
                  {STEPS.map((step, index) => (
                    <button
                      key={step.stepNum}
                      type="button"
                      className={`thi-dot ${index === current ? "thi-dot--active" : ""}`}
                      onClick={() => goToStep(index)}
                      aria-label={`Go to ${step.stepNum}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="thi-closer">
          <div className="thi-closer-col">
            <h3>The emissions half</h3>
            <p>{twoHalves.cards[0]?.text}</p>
          </div>
          <div className="thi-closer-col thi-closer-col--focus">
            <h3>
              Our half <span className="thi-accent">-&gt;</span>
            </h3>
            <p>{twoHalves.cards[1]?.text}</p>
            <Link className="thi-closer-link" to="/why">Read The Other Half →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TwoHalvesInteractive;
