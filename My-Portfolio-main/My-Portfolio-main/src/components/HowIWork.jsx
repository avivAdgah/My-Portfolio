import { useLanguage } from "../context/useLanguage";
import translations from "../i18n/translations";
import "./HowIWork.css";

export default function HowIWork() {
  const { language } = useLanguage();
  const t = translations[language].howIWork;

  return (
    <section id="how-i-work" className="how-i-work container">
      <h2 className="section-title">{t.title}</h2>
      <ol className="steps-grid">
        {t.steps.map((step) => (
          <li className="step-card" key={step.number}>
            <span className="step-number" aria-hidden="true" dir="ltr">
              {step.number}
            </span>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-text">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
