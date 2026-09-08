import { useLanguage } from "../context/useLanguage";
import translations from "../i18n/translations";
import "./FinalCTA.css";

export default function FinalCTA() {
  const { language } = useLanguage();
  const t = translations[language].finalCTA;

  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <h2 className="final-cta-title">{t.title}</h2>
        <p className="final-cta-text">{t.text}</p>
        <a href="#contact" className="btn btn-primary">
          {t.cta}
        </a>
      </div>
    </section>
  );
}
