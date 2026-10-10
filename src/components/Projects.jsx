function Projects() {

  const projects = [
    {
      title: "DaMoana – E-commerce Website",
      description:
        "E-commerce website for premium bags with product listing, cart and checkout.",
      tech: "React"
    },

    {
      title: "AI Resume Builder",
      description:
        "AI-powered resume builder that helps users create professional resumes.",
      tech: "React"
    },

    {
      title: "Personal Portfolio Website",
      description:
        "A personal portfolio website to showcase skills, projects and contact information.",
      tech: "HTML, CSS, JS"
    }
  ];

  return (
    <section className="projects" id="projects">

      <div className="section-heading">
        <h2>📁 My Projects</h2>
        <p>Some of my recent work</p>
      </div>

      <div className="project-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-image">
              Project {index + 1}
            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>
                {project.description}
              </p>

              <span className="technology">
                {project.tech}
              </span>

            </div>

          </div>

        ))}

      </div>

      <button className="primary-btn view-projects">
        View All Projects →
      </button>

    </section>
  );
}

export default Projects;