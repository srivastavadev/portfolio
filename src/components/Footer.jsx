import { portfolio } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <a className="logo" href="#home">
        Dev<span>Portfolio.</span>
      </a>

      <p>
        Designed and built with React.js by {portfolio.name}.
      </p>

      <a href="#home">Back to top ↑</a>
      <p className="copyright">
        © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
      </p>
    </footer>
  );
}