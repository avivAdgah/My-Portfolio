import "./Contact.css";

const EMAIL = "avivadgha@gmail.com";
const SUBJECT = "Project Inquiry – Let's Work Together";
const BODY =
  "Hi Aviv,\n\nI came across your portfolio and would love to talk about a project I have in mind.\n\nLooking forward to hearing from you!";

const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
  SUBJECT
)}&body=${encodeURIComponent(BODY)}`;

export default function Contact() {
  return (
    <section id="contact" className="contact container">
      <h2 className="section-title">Let's Work Together</h2>
      <p className="section-text">
        Have a project in mind? Let's build it. Whether you need a landing
        page, business website, or modern web application, feel free to
        get in touch.
      </p>
      <a href={mailtoUrl} className="btn btn-primary contact-btn">
        Let's Work Together
      </a>
      <p className="contact-email">
        Or reach me directly at{" "}
        <a href={mailtoUrl}>{EMAIL}</a>
      </p>
    </section>
  );
}
