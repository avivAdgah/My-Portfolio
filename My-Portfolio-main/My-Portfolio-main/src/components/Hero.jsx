import { useLanguage } from "../context/useLanguage";
import translations from "../i18n/translations";
import "./Hero.css";

const techStack = ["React", "Next.js", "JavaScript", "Tailwind CSS"];

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="hero container">
      <h1 className="hero-title">
        {t.titleBefore}
        <span>{t.titleHighlight}</span>
        {t.titleAfter}
      </h1>
      <p className="hero-text">{t.text}</p>
      <div className="hero-actions">
        <a href="#work" className="btn btn-primary">
          {t.viewWork}
        </a>
        <a href="#contact" className="btn btn-secondary">
          {t.startProject}
        </a>
      </div>
      <ul className="hero-stack" aria-label={t.techAriaLabel} dir="ltr">
        {techStack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </section>
  );
}
