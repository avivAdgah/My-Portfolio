import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript (ES6+)", "Vite", "HTML5"],
  },
  {
    title: "Styling",
    skills: ["CSS3", "Responsive Design", "Flexbox & Grid"],
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "ESLint", "npm"],
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
