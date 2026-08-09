import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const other = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="projects container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid featured-grid">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} featured />
        ))}
      </div>

      <h2 className="section-title other-title">Other Projects</h2>
      <div className="projects-grid other-grid">
        {other.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
