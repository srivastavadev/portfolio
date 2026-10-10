function Skills() {

  const skills = [
    {
      name: "HTML",
      percentage: "95%"
    },
    {
      name: "CSS",
      percentage: "90%"
    },
    {
      name: "JavaScript",
      percentage: "85%"
    },
    {
      name: "React",
      percentage: "80%"
    },
    {
      name: "UI/UX Design",
      percentage: "75%"
    }
  ];

  return (
    <section className="skills" id="skills">

      <h2>💻 My Skills</h2>

      {skills.map((skill) => (

        <div className="skill" key={skill.name}>

          <div className="skill-title">
            <span>{skill.name}</span>
            <span>{skill.percentage}</span>
          </div>

          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: skill.percentage }}
            ></div>
          </div>

        </div>

      ))}

    </section>
  );
}

export default Skills;