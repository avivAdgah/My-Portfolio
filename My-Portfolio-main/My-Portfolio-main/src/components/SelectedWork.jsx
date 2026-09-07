import projects, { selectedWorkIds } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./SelectedWork.css";

export default function SelectedWork() {
  const selected = selectedWorkIds
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean);
  const more = projects.filter((project) => !selectedWorkIds.includes(project.id));

  return (
    <section id="work" className="selected-work container">
      <h2 className="section-title">Selected Work</h2>
      <p className="section-text selected-work-intro">
        A few recent projects — each one built to solve a real business
        problem, not just to show off code.
      </p>
      <div className="projects-grid featured-grid">
        {selected.map((project) => (
          <ProjectCard key={project.id} project={project} featured />
        ))}
      </div>

      <h3 className="more-work-title">More Projects</h3>
      <div className="projects-grid other-grid">
        {more.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
