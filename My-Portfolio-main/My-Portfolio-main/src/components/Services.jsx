import "./Services.css";

const services = [
  {
    title: "Business Websites",
    description:
      "Professional websites for businesses that want a modern digital presence and a credible first impression online.",
    includes: ["Responsive design", "Services & About sections", "Contact & lead forms", "Custom sections"],
  },
  {
    title: "Landing Pages",
    description:
      "Focused, conversion-driven pages built to turn visitors into leads for a product, offer, or campaign.",
    includes: ["Strong hero & clear CTA", "Lead forms", "Clear content hierarchy", "Fast performance"],
  },
  {
    title: "Portfolio Websites",
    description:
      "For photographers, architects, designers and other professionals who need to showcase their work and build a professional presence.",
    includes: ["Image-led layouts", "Project showcases", "Responsive galleries", "Contact & inquiries"],
  },
  {
    title: "Custom Web Development",
    description:
      "For projects that need more than a standard website — custom functionality built around how your business actually works.",
    includes: ["Custom functionality", "API integrations", "Interactive experiences", "Forms & dashboards"],
  },
];

export default function Services() {
  return (
    <section id="services" className="services container">
      <h2 className="section-title">Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-text">{service.description}</p>
            <ul className="service-includes">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-sm btn-secondary service-cta">
              Start a Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
