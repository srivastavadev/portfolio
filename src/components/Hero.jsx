function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hello">Hello, I'm</p>

        <h1>
          Dev <span>Srivastav</span>
        </h1>

        <h2>
          BCA | CS Student | FullStack Developer 
        </h2>

        <p className="description">
          I build responsive, user-friendly websites and
          web applications with modern technologies.
          Passionate about clean code and great design.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            View My Work →
          </button>

          <button className="secondary-btn">
            Contact Me ✉
          </button>
        </div>

        <div className="social-icons">
          <span>GitHub</span>
          <span>LinkedIn</span>
          <span>Twitter</span>
          <span>Instagram</span>
        </div>

      </div>

      <div className="hero-image">
        <div className="glow"></div>

        <img
          src="/profile.jpg"
          alt="Profile"
        />
      </div>

    </section>
  );
}

export default Hero;