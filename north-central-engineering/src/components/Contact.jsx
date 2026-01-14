export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-subtitle">Contact Us</span>
            <h2 className="section-title">Get In Touch With Us</h2>
            <p className="contact-description">
              Ready to protect your property? Contact us for a free consultation and quote. Our team is available 24/7
              for emergency services.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Our Location</h4>
                  <p>No 593/2 C, Bulugaha Junction, Kelaniya, Sri Lanka</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <h4>Phone Number</h4>
                  <p>+94 77 769 3389</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>Email Address</h4>
                  <p>ncefire.projects@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div className="contact-text">
                  <h4>Working Hours</h4>
                  <p>24/7 Emergency Service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form">
              <h3>Request a Quote</h3>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Select Service</option>
                    <option value="fire-alarm">Fire Extinguisherss</option>
                    <option value="cctv">Fire Detection & Alarm</option>
                    <option value="access">Clean Agent & Special Suppression</option>
                    <option value="pa">Fire Pump Rooms & Electrical</option>
                    <option value="suppression">Hydrant, Hose Reel & Sprinkler Systems</option>
                    <option value="integration">Compliance Audits & Training</option>
                    <option value="integration">Spares & Rapid Replacement</option>
                    <option value="integration">Hydrant, Hose Reel & Sprinkler Systems</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <textarea placeholder="Tell us about your project..." rows={4}></textarea>
              </div>
              <button type="submit" className="btn-primary full-width">
                Send Message
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
    </section>
  )
}
