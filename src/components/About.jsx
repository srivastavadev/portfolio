import { portfolio } from "../data";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-heading">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-card">
        <div className="about-icon">{"{ DS }"}</div>

        <div>
          <h3>Aspiring Web Developer</h3>
          <p>{portfolio.about}</p>
          <p>📍 {portfolio.location}</p>
          <p>✉️ {portfolio.email}</p>

          <a className="btn primary" href="#contact">
            Let's Connect
          </a>
        </div>
      </div>

      <div className="education">
        <h3>My Education</h3>
        {portfolio.education.map((item) => (
          <div className="education-item" key={item.course}>
            <div>
              <h4>{item.course}</h4>
              <p>{item.college}</p>
            </div>
            <span className="year">{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}