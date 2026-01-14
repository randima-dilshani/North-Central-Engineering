import { useState } from "react"
import logoImg from "../assets/NCE LOGO.jpg" // adjust path based on file location

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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#why-us">Why Us</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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
