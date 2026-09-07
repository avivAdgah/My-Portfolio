import "./HowIWork.css";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "Understanding your business, goals, audience, content and functionality needs.",
  },
  {
    number: "02",
    title: "Design",
    text: "Defining the visual direction, structure, content hierarchy and typography.",
  },
  {
    number: "03",
    title: "Develop",
    text: "Building the site with clean, reusable components and responsive code.",
  },
  {
    number: "04",
    title: "Test",
    text: "Checking desktop, tablet and mobile — forms, links, accessibility and performance.",
  },
  {
    number: "05",
    title: "Launch",
    text: "Deploying the site, connecting the domain and making sure it's production-ready.",
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="how-i-work container">
      <h2 className="section-title">How I Work</h2>
      <ol className="steps-grid">
        {steps.map((step) => (
          <li className="step-card" key={step.number}>
            <span className="step-number" aria-hidden="true">
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
