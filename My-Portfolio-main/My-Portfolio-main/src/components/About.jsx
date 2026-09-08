import { useLanguage } from "../context/useLanguage";
import translations from "../i18n/translations";
import "./About.css";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="about container">
      <h2 className="section-title">{t.title}</h2>
      {t.paragraphs.map((paragraph) => (
        <p className="section-text" key={paragraph}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}
