import { Link } from "react-router-dom";

const PROJECTS = [
  {
    label: "Soil Climate Initiative",
    tag: "External",
    desc: "A global movement connecting farmers, scientists, and policymakers around soil carbon as a climate solution.",
    href: "https://www.soilclimateinitiative.org",
    external: true,
    image: "/images/visuals/past-projects/soil-climate-initiative.jpg",
    imagePosition: "center 40%",
  },
  {
    label: "Adopt-A-Meter",
    tag: "Public participation",
    desc: "A public-facing way to support soil restoration with a tangible, trackable stake in the outcome.",
    href: "/projects/adopt-a-meter",
    external: false,
    image: "/images/visuals/past-projects/adopt-a-meter-launch.jpg",
    imagePosition: "center 30%",
  },
  {
    label: "The Other Half",
    tag: "Climate case",
    desc: "The argument for why stopping emissions alone cannot reverse climate change — and what the other half of the solution looks like.",
    href: "/why",
    external: false,
    image: "/images/visuals/photo-bank/farmer-harvest.jpg",
    imagePosition: "center 50%",
  },
];

function ProjectsSnapshotSection() {
  return (
    <section className="projects-snapshot-section section">
      <div className="container">
        <div className="projects-snapshot-header">
          <div>
            <span className="eyebrow">All projects</span>
            <h2 className="projects-snapshot-title">
              Edison is the flagship. These are the supporting ways in.
            </h2>
          </div>
          <Link className="projects-snapshot-all-link" to="/projects">
            View all projects →
          </Link>
        </div>

        <div className="projects-snapshot-grid">
          {PROJECTS.map((project) => (
            <article
              key={project.label}
              className="projects-snapshot-card"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundPosition: project.imagePosition,
              }}
            >
              <div className="projects-snapshot-card-overlay" />
              <div className="projects-snapshot-card-content">
                <span className="projects-snapshot-tag">{project.tag}</span>
                <h3 className="projects-snapshot-card-title">{project.label}</h3>
                <p className="projects-snapshot-card-desc">{project.desc}</p>
                {project.external ? (
                  <a
                    className="projects-snapshot-card-link"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit {project.label} ↗
                  </a>
                ) : (
                  <Link className="projects-snapshot-card-link" to={project.href}>
                    Explore →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSnapshotSection;
