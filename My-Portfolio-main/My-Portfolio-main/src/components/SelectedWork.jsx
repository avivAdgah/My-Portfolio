import projects, { selectedWorkIds, localizeProject } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../context/useLanguage";
import translations from "../i18n/translations";
import "./SelectedWork.css";

export default function SelectedWork() {
  const { language } = useLanguage();
  const t = translations[language].selectedWork;

  const selected = selectedWorkIds
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean)
    .map((project) => localizeProject(project, language));
  const more = projects
    .filter((project) => !selectedWorkIds.includes(project.id))
    .map((project) => localizeProject(project, language));

  return (
    <section id="work" className="selected-work container">
      <h2 className="section-title">{t.title}</h2>
      <p className="section-text selected-work-intro">{t.intro}</p>
      <div className="projects-grid featured-grid">
        {selected.map((project) => (
          <ProjectCard key={project.id} project={project} featured />
        ))}
      </div>

      <h3 className="more-work-title">{t.moreProjectsTitle}</h3>
      <div className="projects-grid other-grid">
        {more.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
