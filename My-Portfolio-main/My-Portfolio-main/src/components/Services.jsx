import "./Services.css";

const services = [
  {
    title: "Landing Pages",
    description:
      "Modern, responsive landing pages designed to load fast, look great on any device, and clearly communicate your product or offer.",
  },
  {
    title: "Business Websites",
    description:
      "Professional, well-structured websites that represent your business online and give visitors a clear, credible first impression.",
  },
  {
    title: "React / Next.js Development",
    description:
      "Interactive interfaces and web applications built with React and Next.js, from dashboards to full product UIs.",
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
          </div>
        ))}
      </div>
    </section>
  );
}
