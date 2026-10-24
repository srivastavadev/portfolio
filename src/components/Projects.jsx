import { projects } from "../data";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">MY RECENT WORK</p>
        <h2>Featured <span>Projects</span></h2>
        <p>A selection of my practice and portfolio projects.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className={`project-cover cover-${index + 1}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span className="cover-symbol">
                {index === 0 ? "🛍️" :
                 index === 1 ? "✦" : "</>"}
              </span>
            </div>

            <div className="project-info">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.demo}>Live Preview ↗</a>
                <a href={project.code}>Source Code ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}