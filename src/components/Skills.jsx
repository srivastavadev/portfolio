import { skills } from "../data";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">WHAT I WORK WITH</p>
        <h2>My <span>Skills</span></h2>
        <p>Technologies I am learning and using in my projects.</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill}>
            <span className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{skill}</h3>
            <div className="skill-line">
              <span />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}