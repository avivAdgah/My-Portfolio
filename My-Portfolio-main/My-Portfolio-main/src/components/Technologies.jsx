import { useLanguage } from "../context/useLanguage";
import translations from "../i18n/translations";
import "./Technologies.css";

const technologies = [
  "React",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Node.js",
  "APIs",
  "Git / GitHub",
];

export default function Technologies() {
  const { language } = useLanguage();
  const t = translations[language].technologies;

  return (
    <section id="technologies" className="technologies container">
      <h2 className="section-title-sm">{t.title}</h2>
      <ul className="tech-list" dir="ltr">
        {technologies.map((tech) => (
          <li key={tech} className="tag">
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
