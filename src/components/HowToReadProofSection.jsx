const proofSteps = [
  {
    num: "Step 01",
    label: "Dashboard",
    time: "~90 sec",
    href: "#evidence-dashboard",
    desc: "Four headline metrics that anchor the climate case in a unit every audience already works with.",
    preview: "Jump to dashboard",
  },
  {
    num: "Step 02",
    label: "Scale",
    time: "~60 sec",
    href: "#evidence-scale",
    desc: "Why delay is costly. Crop loss, harvest windows, and the centuries of residual damage built into inaction.",
    preview: "Jump to scale of problem",
  },
  {
    num: "Step 03",
    label: "Field Context",
    time: "~2 min",
    href: "#evidence-field-context",
    desc: "Where the work is tested. Central Valley operating conditions that turn abstract climate risk into working pressure.",
    preview: "Jump to field context",
  },
  {
    num: "Step 04",
    label: "Source Trail",
    time: "~2 min",
    href: "#evidence-source-trail",
    desc: "What backs the claims. Every high-risk number on this page points back to a public source path or TCU evidence reference.",
    preview: "Jump to source trail",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8 H13 M9 4 L13 8 L9 12" />
    </svg>
  );
}

function HowToReadProofSection() {
  return (
    <section id="how-to-read-proof" className="proof-reader-section">
      <div className="container proof-reader-stage">
        <div className="proof-reader-copy">
          <span className="eyebrow">How To Read The Proof</span>
          <h2>Follow the argument from risk to field evidence.</h2>
          <p>
            The page moves from system-wide climate and food risk into measurable soil function, then into Central Valley field context and the source trail behind the claims.
          </p>

          <div className="proof-reader-legend" aria-label="Reading map">
            <span>Reading Map</span>
            <div>
              <span>Sections</span>
              <strong>4</strong>
            </div>
            <div>
              <span>Direction</span>
              <strong>Risk -&gt; Proof</strong>
            </div>
            <div>
              <span>Time</span>
              <strong>~6 min</strong>
            </div>
          </div>
        </div>

        <nav className="proof-reader-path" aria-label="Evidence reading path">
          {proofSteps.map((step) => (
            <a key={step.href} className="proof-reader-path-item" href={step.href}>
              <div className="proof-reader-path-head">
                <div>
                  <span>{step.num}</span>
                  <strong>{step.label}</strong>
                </div>
                <time>{step.time}</time>
              </div>
              <p>{step.desc}</p>
              <small>
                <ArrowIcon />
                {step.preview}
              </small>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default HowToReadProofSection;
