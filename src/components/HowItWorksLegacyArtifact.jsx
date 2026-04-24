import { whyContent } from "../content/whyContent";

const rootFibers = [
  "M 200 70 Q 170 95 140 115 Q 110 135 80 150",
  "M 200 75 Q 230 100 260 120 Q 290 140 320 155",
  "M 200 110 Q 175 135 150 160 Q 125 185 100 210",
  "M 200 115 Q 225 140 250 165 Q 275 190 300 215",
  "M 200 160 Q 180 190 160 220 Q 140 250 120 280",
  "M 200 165 Q 220 195 240 225 Q 260 255 280 285",
];

const rootHairs = [
  "M 140 115 L 130 125",
  "M 140 115 L 145 130",
  "M 260 120 L 270 130",
  "M 260 120 L 255 135",
  "M 150 160 L 140 175",
  "M 250 165 L 260 180",
  "M 160 220 L 150 235",
  "M 240 225 L 250 240",
];

const carbonParticles = [
  [120, 60, 2.5],
  [180, 50, 2],
  [240, 55, 2.5],
  [300, 48, 2],
  [80, 45, 2],
  [160, 52, 2.5],
  [260, 58, 2],
  [340, 50, 2.5],
];

const microbes = [
  [135, 120, 2],
  [142, 118, 1.5],
  [265, 125, 2],
  [270, 130, 1.5],
  [155, 165, 2],
  [248, 170, 1.5],
  [165, 225, 2],
  [235, 228, 1.5],
];

const soilDots = [
  [50, 80, 1.5],
  [120, 95, 1],
  [180, 75, 1.5],
  [240, 100, 1],
  [320, 85, 1.5],
  [80, 150, 1],
  [160, 170, 1.5],
  [280, 155, 1],
  [350, 165, 1.5],
  [60, 220, 1],
  [200, 240, 1.5],
  [300, 225, 1],
];

const heatCells = [
  [60, 60, "#e8a547", 0.5],
  [86, 60, "#d4a640", 0.4],
  [112, 60, "#c9972f", 0.45],
  [138, 60, "#b8862a", 0.35],
  [164, 60, "#a87525", 0.4],
  [190, 60, "#99cc33", 0.25],
  [216, 60, "#7ba822", 0.3],
  [242, 60, "#5a6b3a", 0.35],
  [268, 60, "#8aa847", 0.3],
  [294, 60, "#99cc33", 0.25],
  [60, 86, "#d4a640", 0.55],
  [86, 86, "#c9972f", 0.6],
  [112, 86, "#e8a547", 0.7],
  [138, 86, "#d84a30", 0.5],
  [164, 86, "#b8862a", 0.6],
  [190, 86, "#a87525", 0.5],
  [216, 86, "#99cc33", 0.35],
  [242, 86, "#8aa847", 0.4],
  [268, 86, "#5a6b3a", 0.45],
  [294, 86, "#7ba822", 0.35],
  [320, 86, "#8aa847", 0.3],
  [60, 112, "#d84a30", 0.75],
  [86, 112, "#e8a547", 0.85],
  [112, 112, "#d84a30", 0.9],
  [138, 112, "#b83020", 0.85],
  [164, 112, "#d84a30", 0.7],
  [190, 112, "#e8a547", 0.65],
  [216, 112, "#b8862a", 0.55],
  [242, 112, "#a87525", 0.5],
  [268, 112, "#c9972f", 0.55],
  [294, 112, "#d4a640", 0.5],
  [320, 112, "#b8862a", 0.4],
  [86, 138, "#b83020", 0.7],
  [112, 138, "#b83020", 0.85],
  [138, 138, "#d84a30", 0.9],
  [164, 138, "#b83020", 0.95],
  [190, 138, "#d84a30", 0.9],
  [216, 138, "#e8a547", 0.8],
  [242, 138, "#d4a640", 0.7],
  [268, 138, "#c9972f", 0.6],
  [294, 138, "#a87525", 0.5],
  [112, 164, "#b83020", 0.7],
  [138, 164, "#d84a30", 0.85],
  [164, 164, "#b83020", 0.9],
  [190, 164, "#d84a30", 0.85],
  [216, 164, "#e8a547", 0.7],
  [242, 164, "#d4a640", 0.6],
  [268, 164, "#b8862a", 0.5],
];

function RootVisual() {
  return (
    <div className="how-legacy-visual">
      <img
        src="/images/other-half/main-images/photo-1542601906990-b4d3fb778b09.webp"
        alt="Hands holding soil and a small green plant"
        loading="lazy"
      />
      <div className="how-legacy-caption">Photosynthesis - soil - life</div>
    </div>
  );
}

function DroughtVisual() {
  return (
    <div className="how-legacy-visual">
      <img
        src="/images/other-half/module-graphics/864ed3968bad449d9f3162a170328633.png"
        alt="US drought monitor map showing legacy carbon atmospheric impact"
        loading="lazy"
      />
      <div className="how-legacy-caption">Legacy CO2 - heat - drought</div>
    </div>
  );
}

function HowItWorksLegacyArtifact() {
  return (
    <section className="how-legacy-section" aria-label="How it works and legacy carbon">
      <div className="how-legacy-wrap">
        <div className="how-legacy-chapters">
          <section className="how-legacy-chapter">
            <div className="how-legacy-text">
              <span className="how-legacy-number">Chapter 01 / The Mechanism</span>
              <div className="how-legacy-eyebrow">{whyContent.nature.eyebrow}</div>
              <h2>{whyContent.nature.title}</h2>
              <p>
                Nature uses photosynthesis to draw excess carbon, our old emissions, back down into the soil to feed
                the <strong>billions of hungry organisms in every teaspoon of healthy soil</strong>.
              </p>
              <p>{whyContent.nature.paragraphs[1]}</p>
              <p>{whyContent.nature.paragraphs[2]}</p>
            </div>
            <RootVisual />
          </section>

          <section className="how-legacy-chapter how-legacy-chapter-reverse">
            <div className="how-legacy-text">
              <span className="how-legacy-number">Chapter 02 / The Consequence</span>
              <div className="how-legacy-eyebrow">Legacy Carbon</div>
              <h2>{whyContent.legacyCarbon.title}</h2>
              <p>
                The climate conversation often stops at emissions cuts, but the atmosphere is already{" "}
                <strong>carrying the carbon load that is intensifying drought, heat, flood risk, and ecological disruption</strong>.
              </p>
              <p>{whyContent.legacyCarbon.paragraphs[1]}</p>
            </div>
            <DroughtVisual />
          </section>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksLegacyArtifact;
