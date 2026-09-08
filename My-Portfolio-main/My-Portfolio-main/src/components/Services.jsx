import { useLanguage } from "../context/useLanguage";
import translations from "../i18n/translations";
import "./Services.css";

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <section id="services" className="services container">
      <h2 className="section-title">{t.title}</h2>
      <div className="services-grid">
        {t.items.map((service) => (
          <div className="service-card" key={service.title}>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-text">{service.description}</p>
            <ul className="service-includes">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-sm btn-secondary service-cta">
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
