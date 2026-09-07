import "./Technologies.css";

const technologies = [
  "React",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Node.js",
  "APIs",
  "Git / GitHub",
];

export default function Technologies() {
  return (
    <section id="technologies" className="technologies container">
      <h2 className="section-title-sm">Technologies I Work With</h2>
      <ul className="tech-list">
        {technologies.map((tech) => (
          <li key={tech} className="tag">
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
