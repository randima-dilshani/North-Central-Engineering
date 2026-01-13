export default function Services() {
  const services = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: "Fire Alarm Systems",
      description:
        "Complete fire detection systems including smoke detectors, heat sensors, control panels, and emergency notification systems.",
      color: "#f5a623",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "CCTV Surveillance",
      description:
        "Advanced IP cameras, DVR/NVR systems, and remote monitoring solutions for complete property surveillance.",
      color: "#f5a623",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
          <path
            d="M7 11V7a5 5 0 0110 0v4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Access Control",
      description:
        "Biometric systems, card readers, door locks, and integrated access management for enhanced security.",
      color: "#f5a623",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Fire Suppression",
      description:
        "Automatic sprinkler systems, gas suppression, and fire extinguisher supply and installation services.",
      color: "#f5a623",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "PA Systems",
      description: "Public address and voice evacuation systems for emergency announcements and daily communications.",
      color: "#f5a623",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
          <path
            d="M8 21h8M12 17v4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "System Integration",
      description: "Seamless integration of all safety systems with centralized monitoring and control solutions.",
      color: "#f5a623",
    },
  ]

  return (
    <section id="services" className="services">
      <div
        className="services-bg"
        style={{
          backgroundImage: `url('/fire-alarm-control-panel-installation-dark-backgro.jpg')`,
        }}
      ></div>
      <div className="services-overlay"></div>
      <div className="container services-content">
        <div className="services-header">
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title">Complete Fire Safety Solutions</h2>
          <p className="services-description">
            From fire alarm installation to integrated security systems, we provide comprehensive solutions tailored to
            protect your property and ensure compliance with safety regulations.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-icon">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              <a href="#contact" className="service-link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
