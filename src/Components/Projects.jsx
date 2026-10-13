export default function ProjectGrid({ projects }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article key={project.name} className="project-card" data-scroll-reveal>
          <div className="project-visual">
            <img
              className="project-image"
              src={project.image}
              alt={project.imageAlt}
              width="1200"
              height="750"
              loading="lazy"
              decoding="async"
            />
            <span className="project-badge">{project.label}</span>
          </div>

          <div className="project-body">
            <div className="project-header">
              <h3>{project.name}</h3>
              {/* <span className="project-tag">{project.label}</span> */}
            </div>

            <p>{project.summary}</p>

            <p className="project-highlight">
              <strong>{project.highlight.label}</strong>
              {project.highlight.text}
            </p>

            <div className="project-stack">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-small"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-small"
              >
                View Code
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}