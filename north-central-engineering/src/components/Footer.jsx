export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-cta">
            <div className="cta-item">
              <span className="cta-icon">📞</span>
              <div className="cta-content">
                <span className="cta-label">Give Us A Call</span>
                <span className="cta-value">+94 77 769 3389</span>
              </div>
            </div>
            <div className="cta-item">
              <span className="cta-icon">📧</span>
              <div className="cta-content">
                <span className="cta-label">Send Us Email</span>
                <span className="cta-value">ncefire.projects@gmail.com</span>
              </div>
            </div>
            <div className="cta-item">
              <span className="cta-icon">📍</span>
              <div className="cta-content">
                <span className="cta-label">Our Location</span>
                <span className="cta-value">No 593/2 C, Bulugaha Junction, Kelaniya, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="footer-logo">
  <div className="logo footer-logo-highlight">
  <div className="logo-image-container">
    <img
      src="/NCE.png"
      alt="North Central Engineering Logo"
      className="logo-image"
    />
  </div>

  <div className="logo-text">
    <span className="logo-name">North Central</span>
    <span className="logo-tagline">Engineering</span>
  </div>
</div>



               
              </div>
              <p className="footer-description">
                Leading provider of fire alarm systems and security solutions in Sri Lanka. Protecting lives and
                property with cutting-edge technology and expert service.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link">
                  FB
                </a>
                <a href="#" className="social-link">
                  TW
                </a>
                <a href="#" className="social-link">
                  LI
                </a>
                <a href="#" className="social-link">
                  IG
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Fire Alarm Systems</a>
                </li>
                <li>
                  <a href="#">CCTV Surveillance</a>
                </li>
                <li>
                  <a href="#">Access Control</a>
                </li>
                <li>
                  <a href="#">Fire Suppression</a>
                </li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h4>Subscribe Newsletter</h4>
              <p>Get the latest updates and news about fire safety.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit" className="btn-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 North Central Engineering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
