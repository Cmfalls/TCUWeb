import { useState } from "react";
import { whyContent } from "../content/whyContent";

const forces = [
  {
    name: "Climate",
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" />
      </>
    ),
  },
  {
    name: "Water",
    icon: <path d="M12 2.5s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11z" />,
  },
  {
    name: "Economics",
    icon: (
      <>
        <path d="M3 20h18M6 20v-8l6-4 6 4v8" />
        <path d="M12 20v-6" />
      </>
    ),
  },
  {
    name: "Public consequence",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="10" r="2.5" />
        <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
        <path d="M14 20c0-2 2-4 4-4s4 1.5 4 4" />
      </>
    ),
  },
];

function LandVisual() {
  return (
    <div className="working-lands-artifact-card">
      <img
        src="/images/other-half/main-images/aerial-polyculture-flower-strips-between-grain-fields.jpeg"
        alt="Aerial view of polyculture flower strips between grain fields"
        loading="lazy"
      />
    </div>
  );
}

function ConvergenceDiagram() {
  return (
    <div className="working-lands-artifact-diagram">
      <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
        <circle cx="140" cy="140" r="130" fill="none" stroke="rgba(10, 46, 38, 0.06)" strokeWidth="1" strokeDasharray="2 4" />
        <circle cx="140" cy="140" r="90" fill="none" stroke="rgba(10, 46, 38, 0.08)" strokeWidth="1" strokeDasharray="2 4" />
        <line className="working-lands-artifact-line working-lands-artifact-line-climate" x1="40" y1="40" x2="140" y2="140" stroke="#99cc33" strokeWidth="2" strokeLinecap="round" />
        <line className="working-lands-artifact-line working-lands-artifact-line-water" x1="240" y1="40" x2="140" y2="140" stroke="#6fa3a0" strokeWidth="2" strokeLinecap="round" />
        <line className="working-lands-artifact-line working-lands-artifact-line-econ" x1="40" y1="240" x2="140" y2="140" stroke="#8a6d3b" strokeWidth="2" strokeLinecap="round" />
        <line className="working-lands-artifact-line working-lands-artifact-line-public" x1="240" y1="240" x2="140" y2="140" stroke="#e8a547" strokeWidth="2" strokeLinecap="round" />
        <g>
          <circle cx="40" cy="40" r="14" fill="#fdfaf0" stroke="#99cc33" strokeWidth="2" />
          <circle cx="40" cy="40" r="5" fill="#99cc33" />
          <circle cx="240" cy="40" r="14" fill="#fdfaf0" stroke="#6fa3a0" strokeWidth="2" />
          <circle cx="240" cy="40" r="5" fill="#6fa3a0" />
          <circle cx="40" cy="240" r="14" fill="#fdfaf0" stroke="#8a6d3b" strokeWidth="2" />
          <circle cx="40" cy="240" r="5" fill="#8a6d3b" />
          <circle cx="240" cy="240" r="14" fill="#fdfaf0" stroke="#e8a547" strokeWidth="2" />
          <circle cx="240" cy="240" r="5" fill="#e8a547" />
        </g>
        <g className="working-lands-artifact-center">
          <circle cx="140" cy="140" r="38" fill="rgba(10, 46, 38, 0.95)" />
          <circle cx="140" cy="140" r="38" fill="none" stroke="#99cc33" strokeWidth="2" />
        </g>
        <text x="140" y="137" textAnchor="middle" fontFamily="Bebas Neue, sans-serif" fontSize="16" fill="#b8e655">WORKING</text>
        <text x="140" y="152" textAnchor="middle" fontFamily="Bebas Neue, sans-serif" fontSize="16" fill="#b8e655">LAND</text>
        <g fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#0a2e26" fontWeight="600">
          <text className="working-lands-artifact-diagram-label l1" x="40" y="22" textAnchor="middle">CLIMATE</text>
          <text className="working-lands-artifact-diagram-label l2" x="240" y="22" textAnchor="middle">WATER</text>
          <text className="working-lands-artifact-diagram-label l3" x="40" y="268" textAnchor="middle">ECONOMICS</text>
          <text className="working-lands-artifact-diagram-label l4" x="240" y="268" textAnchor="middle">PUBLIC</text>
        </g>
      </svg>
    </div>
  );
}

function WorkingLandsArtifact() {
  const [activeForce, setActiveForce] = useState("Climate");
  const { workingLands } = whyContent;

  return (
    <section className="working-lands-artifact-section" aria-labelledby="working-lands-artifact-title">
      <div className="working-lands-artifact-wrap">
        <div className="working-lands-artifact-hero">
          <LandVisual />
          <div className="working-lands-artifact-copy">
            <div className="working-lands-artifact-eyebrow">Working Lands</div>
            <h2 id="working-lands-artifact-title">{workingLands.title}</h2>
            <p>
              Agriculture sits where climate, water, economics, and public consequence meet.{" "}
              <strong>No industry is more threatened by climate change than the one that feeds us.</strong>
            </p>
            <p>{workingLands.paragraphs[1]}</p>
          </div>
        </div>

        <div className="working-lands-artifact-convergence">
          <div className="working-lands-artifact-convergence-header">
            <div className="working-lands-artifact-convergence-label">Where Four Forces Meet</div>
            <div className="working-lands-artifact-convergence-caption">Agriculture as the intersection</div>
          </div>

          <div className="working-lands-artifact-convergence-grid">
            <div className="working-lands-artifact-forces">
              {forces.map((force) => (
                <button
                  key={force.name}
                  className={`working-lands-artifact-force ${activeForce === force.name ? "active" : ""}`}
                  type="button"
                  aria-pressed={activeForce === force.name}
                  onClick={() => setActiveForce(force.name)}
                >
                  <span className="working-lands-artifact-force-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {force.icon}
                    </svg>
                  </span>
                  <span>{force.name}</span>
                </button>
              ))}
            </div>

            <ConvergenceDiagram />

            <div className="working-lands-artifact-consequences">
              {workingLands.bullets.map((bullet, index) => (
                <article key={bullet} className="working-lands-artifact-consequence">
                  <span>{["01 / Growers", "02 / Land", "03 / Evidence"][index]}</span>
                  <p>{bullet}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkingLandsArtifact;
