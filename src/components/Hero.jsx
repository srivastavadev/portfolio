import { portfolio } from "../data";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <p className="eyebrow">HELLO, I'M</p>

        <h1>
          {portfolio.name.split(" ")[0]}{" "}
          <span>{portfolio.name.split(" ").slice(1).join(" ")}</span>
        </h1>

        <h2>{portfolio.role}</h2>
        <p className="hero-description">
          {portfolio.tagline}
        </p>

        <div className="hero-actions">
          <a className="btn primary" href="#projects">
            Explore Projects ↗
          </a>
          <a className="btn secondary" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="social-text">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="avatar">DS</div>
        <span className="floating-code">{"< />"}</span>
        <span className="floating-star">✦</span>
      </div>
    </section>
  );
}