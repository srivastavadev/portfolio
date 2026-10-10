function About() {
  return (
    <section className="about" id="about">

      <div className="about-box">

        <h2>👤 About Me</h2>

        <p>
          I'm a passionate Frontend Developer with a strong
          foundation in HTML, CSS, JavaScript and modern
          frameworks like React.
        </p>

        <p>
          I love turning ideas into real-world,
          responsive and beautiful websites.
        </p>

        <div className="details">

          {/* <p>📅 20 July 2003</p> */}
          <p>📧 devsri2908@gmail.com</p>
          <p>📍 India</p>
          <p>📞 +91 7428101516</p>

        </div>

        <button className="outline-btn">
          More About Me →
        </button>

      </div>

    </section>
  );
}

export default About;