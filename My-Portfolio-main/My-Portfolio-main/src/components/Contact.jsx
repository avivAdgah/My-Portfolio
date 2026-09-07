import { useState } from "react";
import "./Contact.css";

const EMAIL = "avivadgha@gmail.com";

const projectTypes = [
  "Business Website",
  "Landing Page",
  "Portfolio Website",
  "Custom Development",
  "Other",
];

const initialForm = {
  name: "",
  email: "",
  projectType: projectTypes[0],
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Project Inquiry – ${form.projectType}`;
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project Type: ${form.projectType}`,
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
      <h2 className="section-title">Tell Me About Your Project</h2>
      <p className="section-text contact-intro">
        Share a few details and I'll get back to you to talk about your
        project.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="name">Name</label>
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
            <label htmlFor="email">Email</label>
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
          <label htmlFor="projectType">Project Type</label>
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
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
          Tell Me About Your Project
        </button>
      </form>

      <p className="contact-email">
        Or reach me directly at{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
    </section>
  );
}
