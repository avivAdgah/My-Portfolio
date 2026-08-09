import "./Contact.css";

const EMAIL = "avivadgha@gmail.com";
const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Portfolio inquiry"
)}&body=${encodeURIComponent("Hi Aviv, I'd love to work together!")}`;

export default function Contact() {
  return (
    <section id="contact" className="contact container">
      <h2 className="section-title">Let's Work Together</h2>
      <p className="section-text">
        Feel free to reach me for collaboration or just a friendly hello.
      </p>
      <a href={mailtoUrl} className="btn btn-primary contact-btn">
        Email Me
      </a>
      <p className="contact-email">
        Or reach me directly at{" "}
        <a href={mailtoUrl}>{EMAIL}</a>
      </p>
    </section>
  );
}
