import React, { useState } from 'react';
import "./Nav.css";
import "./../App.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="Nav">
      <div className="nav-header">
        {/* <h2 className="logo">Portfolio</h2> */}

        {/* Hamburger Button */}
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
        <li><a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a></li>
        <li><a href="#achievements" onClick={() => setMenuOpen(false)}>Achievements</a></li>
        <li><a href="#interests" onClick={() => setMenuOpen(false)}>Interests</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
