import { Link } from "react-router-dom";
import { useState } from "react";



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-content">
          {/* Logo */}
          <a href="#" className="logo">
            <div className="logo-image-container">
              <img src="/NCE.png" alt="North Central Engineering Logo" className="logo-image" />
            </div>
            <div className="logo-text">
              <span className="logo-name">North Central</span>
              <span className="logo-name">Engineering</span>
            </div>
          </a>

          {/* Menu toggle for mobile */}
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Nav links */}
       <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
  <li>
    <Link to="/#home" onClick={() => setIsMenuOpen(false)}>Home</Link>
  </li>
  <li>
    <Link to="/#about" onClick={() => setIsMenuOpen(false)}>About</Link>
  </li>
  <li>
    <Link to="/#why-us" onClick={() => setIsMenuOpen(false)}>Why Us</Link>
  </li>
  <li>
    <Link to="/#services" onClick={() => setIsMenuOpen(false)}>Services</Link>
  </li>
  <li>
    <Link to="/#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
  </li>
  <li>
    <Link to="/itsolutions" onClick={() => setIsMenuOpen(false)}>IT Solutions</Link>
  </li>
  <li>
    <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
  </li>
</ul>


          {/* Get Free Quote Button */}
          <div className="nav-cta">
            <a
              href="#contact"
              className="btn-primary"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
