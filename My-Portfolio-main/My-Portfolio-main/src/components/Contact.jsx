import { useState } from "react";
import { useLanguage } from "../context/useLanguage";
import translations from "../i18n/translations";
import { WHATSAPP_NUMBER } from "./WhatsAppButton";
import "./Contact.css";

const EMAIL = "avivadgha@gmail.com";
const PHONE = `+${WHATSAPP_NUMBER}`;
const PHONE_DISPLAY = "+972 52-642-8809";

const initialForm = {
  name: "",
  email: "",
  projectTypeIndex: 0,
  message: "",
};

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "projectTypeIndex" ? Number(value) : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const projectType = t.projectTypes[form.projectTypeIndex];
    const subject = `${t.labels.projectType} – ${projectType}`;
    const bodyLines = [
      `${t.labels.name}: ${form.name}`,
      `${t.labels.email}: ${form.email}`,
      `${t.labels.projectType}: ${projectType}`,
      "",
      form.message,
    ];

    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="contact container">
      <h2 className="section-title">{t.title}</h2>
      <p className="section-text contact-intro">{t.intro}</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="name">{t.labels.name}</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">{t.labels.email}</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="projectTypeIndex">{t.labels.projectType}</label>
          <select
            id="projectTypeIndex"
            name="projectTypeIndex"
            value={form.projectTypeIndex}
            onChange={handleChange}
          >
            {t.projectTypes.map((type, index) => (
              <option key={type} value={index}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="message">{t.labels.message}</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary contact-submit">
          {t.submit}
        </button>
      </form>

      <div className="contact-direct">
        <p className="contact-direct-title">{t.orReach}</p>
        <ul className="contact-methods">
          <li>
            <a
              className="contact-method contact-method-whatsapp"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-method-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" width="22" height="22">
                  <path
                    fill="currentColor"
                    d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A12.96 12.96 0 0 0 16.04 29C23.2 29 29 23.18 29 16S23.2 3 16.04 3zm5.93 15.71c-.33-.16-1.93-.95-2.23-1.06-.3-.11-.52-.16-.74.16-.21.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.33-.16-1.38-.51-2.63-1.62-.97-.87-1.63-1.94-1.82-2.27-.19-.33-.02-.5.14-.67.15-.15.33-.38.49-.57.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.71 0 1.6 1.17 3.15 1.33 3.37.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.93-.79 2.2-1.55.27-.76.27-1.42.19-1.55-.08-.14-.3-.22-.63-.38z"
                  />
                </svg>
              </span>
              <span className="contact-method-text">
                <strong>{t.whatsappLabel}</strong>
                <span dir="ltr">{PHONE_DISPLAY}</span>
              </span>
            </a>
          </li>
          <li>
            <a className="contact-method contact-method-phone" href={`tel:${PHONE}`}>
              <span className="contact-method-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                </svg>
              </span>
              <span className="contact-method-text">
                <strong>{t.callLabel}</strong>
                <span dir="ltr">{PHONE_DISPLAY}</span>
              </span>
            </a>
          </li>
          <li>
            <a className="contact-method contact-method-email" href={`mailto:${EMAIL}`}>
              <span className="contact-method-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              </span>
              <span className="contact-method-text">
                <strong>{t.emailLabel}</strong>
                <span dir="ltr">{EMAIL}</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
