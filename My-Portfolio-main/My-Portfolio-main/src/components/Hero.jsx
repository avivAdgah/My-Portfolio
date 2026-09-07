import "./Hero.css";

const techStack = ["React", "Next.js", "JavaScript", "Tailwind CSS"];

export default function Hero() {
  return (
    <section className="hero container">
      <h1 className="hero-title">
        I Design & Build <span>Modern Websites</span> for Businesses
      </h1>
      <p className="hero-text">
        Custom, responsive and high-performance websites designed to help
        businesses, professionals and growing brands stand out online.
      </p>
      <div className="hero-actions">
        <a href="#work" className="btn btn-primary">
          View My Work
        </a>
        <a href="#contact" className="btn btn-secondary">
          Start a Project
        </a>
      </div>
      <ul className="hero-stack" aria-label="Technologies I work with">
        {techStack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </section>
  );
}
