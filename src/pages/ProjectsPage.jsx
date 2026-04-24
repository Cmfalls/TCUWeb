import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import RouteMeta from "../components/RouteMeta";
import { projectsContent } from "../content/projectsContent";

function ProjectsPage() {
  return (
    <>
      <RouteMeta
        title="Projects | The Carbon Underground"
        description="Explore The Carbon Underground's work in research, public participation, and public education."
      />

      <PageIntro
        eyebrow="Projects"
        title="Start with Edison, then use the rest as supporting ways in."
        lede={projectsContent.intro}
        aside={
          <div className="aside-card">
            <span className="card-kicker">Priority</span>
            <h3>Edison carries the most institutional weight.</h3>
            <p>
              For a quick map of the work, start here. For the strongest proof, start with Edison and Evidence first.
            </p>
          </div>
        }
      />

      <section className="section">
        <div className="container editorial-split editorial-split-reverse">
          <aside className="editorial-aside">
            <div className="image-card">
              <img src={projectsContent.featured.image} alt={projectsContent.featured.title} />
            </div>
          </aside>
          <div className="editorial-copy">
            <span className="eyebrow">{projectsContent.featured.tag}</span>
            <h2>{projectsContent.featured.title}</h2>
            <p>{projectsContent.featured.text}</p>
            {projectsContent.featured.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="editorial-list">
              {projectsContent.featured.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="support-actions">
              <Link to={projectsContent.featured.href}>{projectsContent.featured.cta}</Link>
              <Link className="secondary" to="/evidence">
                See the evidence
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading compact">
            <span className="eyebrow">Supporting ways in</span>
            <h2>The other initiatives help people participate or get oriented more easily.</h2>
          </div>
          <div className="projects-photo-grid">
            {projectsContent.secondary.map((project) => (
              <article
                key={project.title}
                className="projects-photo-card"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="projects-photo-card-overlay" />
                <div className="projects-photo-card-content">
                  <span className="projects-photo-card-tag">{project.tag}</span>
                  <h3 className="projects-photo-card-title">{project.title}</h3>
                  <p className="projects-photo-card-text">{project.text}</p>
                  {project.external ? (
                    <a
                      className="projects-photo-card-cta"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.cta} ↗
                    </a>
                  ) : (
                    <Link className="projects-photo-card-cta" to={project.href}>
                      {project.cta} →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading compact">
            <span className="eyebrow">Related resources</span>
            <h2>Use these if you want more evidence or wider context.</h2>
          </div>
          <div className="info-grid two-up">
            {projectsContent.related.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={item.href} {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                  {item.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
