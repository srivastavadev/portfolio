import { useState } from "react";
import { portfolio } from "../data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2>Let's <span>Connect</span></h2>
        <p>Have an idea or opportunity? Send me a message.</p>
      </div>

      <div className="contact-card">
        <div className="contact-details">
          <h3>Get in touch</h3>
          <p>I'm open to learning, collaboration and
            entry-level opportunities.</p>

          <a href={`mailto:${portfolio.email}`}>
            ✉️ {portfolio.email}
          </a>
          <p>📍 {portfolio.location}</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name"
            placeholder="Enter your name" required />

          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email"
            placeholder="you@example.com" required />

          <label htmlFor="message">Your message</label>
          <textarea id="message" name="message"
            placeholder="Tell me about your idea..."
            rows="4" required />

          <button className="btn primary" type="submit">
            Send Message ↗
          </button>

          {submitted && (
            <p className="success-message" role="status">
              Demo submitted successfully! No message was sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}