import { useState } from "react";
import { useLanguage } from "../context/useLanguage";
import translations from "../i18n/translations";
import "./Contact.css";

const EMAIL = "avivadgha@gmail.com";

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

      <p className="contact-email">
        {t.orReach} <a href={`mailto:${EMAIL}`} dir="ltr">{EMAIL}</a>
      </p>
    </section>
  );
}
