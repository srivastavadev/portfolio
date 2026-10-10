function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>DS</span> Dev Srivastav
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <button className="cv-btn">
        ↓ Download CV 
      </button>
    </nav>
  );
}

export default Navbar;