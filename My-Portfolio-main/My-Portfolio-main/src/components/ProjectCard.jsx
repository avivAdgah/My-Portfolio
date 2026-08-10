import "./ProjectCard.css";

export default function ProjectCard({ project, featured = false }) {
  const {
    name,
    image,
    description,
    highlights,
    technologies,
    liveUrl,
    githubUrl,
    category,
    status,
  } = project;

  return (
    <article className={featured ? "project-card featured" : "project-card"}>
      <div className="project-image-wrap">
        <img
          src={`/assets/images/${image}`}
          alt={`${name} preview`}
          className="project-image"
          loading="lazy"
        />
        {category && <span className="category-badge">{category}</span>}
      </div>
      <div className="project-body">
        <div className="project-heading">
          <h3 className="project-title">{name}</h3>
          {status && status !== "Completed" && (
            <span className="status-badge">{status}</span>
          )}
        </div>
        <p className="project-text">{description}</p>
        {featured && highlights?.length > 0 && (
          <ul className="project-highlights">
            {highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        <ul className="project-tags">
          {technologies.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>
        <div className="project-links">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary"
          >
            Live Demo
          </a>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-secondary"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
