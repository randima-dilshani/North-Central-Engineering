import { useState } from "react"
import logoImg from "../assets/NCE LOGO.jpg" // adjust path based on file location

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span>📍 North Central Province, Sri Lanka</span>
            <span>📞 +94 77 123 4567</span>
          </div>
          <div className="top-bar-right">
            <span>🕐 24/7 Emergency Service</span>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="container navbar-content">
          <a href="#home" className="logo">
            {/* Use image from assets */}
            <div className="logo-icon">
              <img src={logoImg} alt="North Central Engineering Logo" className="w-full h-full object-contain" />
            </div>
            <div className="logo-text">
              <span className="logo-name">North Central</span>
              <span className="logo-tagline">Engineering</span>
            </div>
          </a>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "✕" : "☰"}
          </button>

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

          <div className="nav-cta">
            <div className="emergency-number">
              <span className="emergency-label">Emergency</span>
              <span className="emergency-phone">077-123-4567</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
