import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import translations from "../i18n/translations";
import "./ProjectCard.css";

export default function ProjectCard({ project, featured = false }) {
  const { language } = useLanguage();
  const t = translations[language].selectedWork;

  const {
    id,
    name,
    image,
    industryLabel,
    description,
    highlights,
    technologies,
    liveUrl,
    githubUrl,
    category,
    status,
    caseStudy,
  } = project;

  return (
    <article className={featured ? "project-card featured" : "project-card"}>
      <div className="project-image-wrap">
        <img
          src={`/assets/images/${image}`}
          alt={`${name} – ${industryLabel || category || "website"} screenshot`}
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
        {industryLabel && <p className="project-industry">{industryLabel}</p>}
        <p className="project-text">{description}</p>
        {featured && highlights?.length > 0 && (
          <ul className="project-highlights">
            {highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        <ul className="project-tags" dir="ltr">
          {technologies.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>
        <div className="project-links">
          {caseStudy && (
            <Link to={`/work/${id}`} className="btn btn-sm btn-primary">
              {t.viewCaseStudy}
            </Link>
          )}
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={
              caseStudy ? "btn btn-sm btn-secondary" : "btn btn-sm btn-primary"
            }
          >
            {caseStudy ? t.liveWebsite : t.liveDemo}
          </a>
          {!caseStudy && githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-secondary"
            >
              {t.viewCode}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
