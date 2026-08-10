import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript (ES6+)", "HTML5"],
  },
  {
    title: "Styling",
    skills: ["Tailwind CSS", "CSS3", "Responsive Design", "Flexbox & Grid"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vite", "npm", "ESLint", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills container">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skills-group" key={group.title}>
            <h3 className="skills-group-title">{group.title}</h3>
            <ul className="skills-tags">
              {group.skills.map((skill) => (
                <li key={skill} className="tag">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
