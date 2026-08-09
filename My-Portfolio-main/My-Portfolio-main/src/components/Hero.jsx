import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero container">
      <p className="hero-kicker">Hi, I'm Aviv Adgah</p>
      <h1 className="hero-title">
        Frontend Developer building <span>fast, accessible</span> web
        experiences
      </h1>
      <p className="hero-text">
        I build responsive websites and React applications with clean UI,
        solid structure, and attention to detail — from small interactive
        tools to full landing pages.
      </p>
      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">
          View Projects
        </a>
        <a href="#contact" className="btn btn-secondary">
          Contact Me
        </a>
      </div>
    </section>
  );
}
