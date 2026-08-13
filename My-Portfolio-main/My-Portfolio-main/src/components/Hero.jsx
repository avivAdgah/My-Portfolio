import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero container">
      <p className="hero-kicker">Hi, I'm Aviv GLORY & CO</p>
      <h1 className="hero-title">
        Frontend Developer Building <span>Modern, Responsive</span> Web
        Experiences
      </h1>
      <p className="hero-text">
        I build modern, responsive websites and web applications using
        React, Next.js, JavaScript, and Tailwind CSS — with a focus on
        clean design, performance, and user experience.
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
