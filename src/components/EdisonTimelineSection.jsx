const PHASES = [
  {
    phase: "Phase 1",
    period: "2025 - 6 to 9 months",
    headline: "Secure land, begin operations",
    status: "completed",
    footer: "All milestones achieved",
    tasks: [
      { label: "Acquire and transfer the 325-acre farm", done: true },
      { label: "Establish legal structure and 501(c)(3) status", done: true },
      { label: "Execute operating agreements with CRARS", done: true },
      { label: "Set soil and water baselines across the farm", done: true },
      { label: "Launch first three crop R&D programs", done: true },
      { label: "Begin research coordination with Dr. Daley and Dr. LaSalle", done: true },
    ],
  },
  {
    phase: "Phase 2",
    period: "2026 - 9 months",
    headline: "R&D projects, facilities design",
    status: "active",
    footer: "Current phase",
    tasks: [
      { label: "Expand R&D project portfolio across 6 study areas", done: false },
      { label: "Design laboratory and research facilities", done: false },
      { label: "Establish farmer network and peer-to-peer programs", done: false },
      { label: "Develop education curriculum for residential programs", done: false },
      { label: "Begin permitting and design for physical campus", done: false },
    ],
  },
  {
    phase: "Phase 3",
    period: "2027 - 2028 - 18 months",
    headline: "Build out labs, dormitories, education center",
    status: "upcoming",
    footer: "Planned",
    tasks: [
      { label: "Construct on-site laboratory facilities", done: false },
      { label: "Build dormitory and researcher housing", done: false },
      { label: "Develop outdoor permaculture gathering area", done: false },
      { label: "Begin undergraduate and graduate residential programs", done: false },
      { label: "Host first public field days and workshops", done: false },
    ],
  },
  {
    phase: "Phase 4",
    period: "2028 - 2029 - 12 months",
    headline: "Major launch of education center, ongoing R&D",
    status: "upcoming",
    footer: "Planned",
    tasks: [
      { label: "Open education center to full public programming", done: false },
      { label: "Publish first multi-year research outcomes", done: false },
      { label: "Scale farmer-to-farmer adoption networks nationally", done: false },
      { label: "Develop replicable frameworks for other institutions", done: false },
      { label: "Build policy engagement around research findings", done: false },
    ],
  },
];

function EdisonTimelineSection() {
  return (
    <section className="section section-soft edison-timeline-section">
      <div className="container">
        <div className="edison-timeline-header">
          <div>
            <span className="eyebrow">Build timeline</span>
            <h2 className="edison-timeline-title">
              Four phases,
              <br />
              2025 through 2029.
              <br />
              <span>Phase one</span>
              <br />
              is already complete.
            </h2>
          </div>
          <div className="edison-timeline-header-body">
            <p className="edison-timeline-lede">
              The Edison Institute is not a future project. Phase one milestones - land, legal structure, operating
              agreements, baselines, and the first R&D projects - are done.
            </p>
          </div>
        </div>

        <div className="edison-timeline-grid">
          {PHASES.map((phase) => (
            <article key={phase.phase} className={`edison-timeline-card edison-timeline-card-${phase.status}`}>
              <div className="edison-timeline-card-header">
                <span className="edison-timeline-phase-label">{phase.phase}</span>
                <span className={`edison-timeline-badge edison-timeline-badge-${phase.status}`}>
                  {phase.status === "completed" ? "Complete" : phase.status === "active" ? "In progress" : "Upcoming"}
                </span>
              </div>

              <div className="edison-timeline-card-body">
                <div className="edison-timeline-period">{phase.period}</div>
                <h3 className="edison-timeline-card-headline">{phase.headline}</h3>
                <ul className="edison-timeline-tasks">
                  {phase.tasks.map((task) => (
                    <li key={task.label} className={`edison-timeline-task${task.done ? " done" : ""}`}>
                      <span className="edison-timeline-check" aria-hidden="true" />
                      <span>{task.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="edison-timeline-footer">
                <span>{phase.footer}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EdisonTimelineSection;
