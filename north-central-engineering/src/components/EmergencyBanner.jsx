export default function EmergencyBanner() {
  return (
    <section className="emergency-banner">
      <div className="emergency-left">
        <div className="container">
          <div className="emergency-content">
            <span className="emergency-label">Contact Us For Sales & Support</span>
            <h2 className="emergency-number-large">+94 77 769 3389</h2>
            <p className="emergency-email">ncefire.projects@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="emergency-right">
        <div
          className="emergency-bg"
          style={{
            backgroundImage: `url('/image4.png')`,
          }}
        ></div>
        <div className="emergency-overlay"></div>
        <div className="container">
          <div className="emergency-content">
            <span className="emergency-label-alt">Quality Products & Expert Installation</span>
            <h2 className="emergency-title">We Provide Fire Safety Solutions That Suit Your Needs</h2>
            <p className="emergency-desc">
              From small businesses to large industrial facilities, we offer customized fire safety systems, quality
              equipment, and professional installation services with ongoing maintenance support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
