export default function About() {
  const services = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Fire Alarm Systems",
      description: "Complete fire detection and alarm systems with smoke detectors, heat sensors, and control panels.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Professional Installation",
      description: "Expert installation by certified technicians ensuring compliance with safety standards.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "24/7 Maintenance",
      description: "Round-the-clock support and maintenance services to keep your systems running perfectly.",
    },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="about-image-main">
              <img
                src="/image3.png"
                alt="Engineer Installing Fire Alarm System"
              />
            </div>
            <div className="about-experience">
              <span className="exp-number">500+</span>
              <span className="exp-text">Projects Completed</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-subtitle">About North Central Engineering</span>
            <h2 className="section-title">Your Trusted Fire Safety Solutions Partner</h2>
            <p className="about-description">
              North Central Engineering is a leading provider of fire safety systems and security solutions in Sri
              Lanka. With over 15 years of experience, we specialize in designing, installing, and maintaining advanced
              fire alarm systems, CCTV surveillance, access control systems, and fire suppression equipment for
              residential, commercial, and industrial properties.
            </p>

            <div className="about-services">
              {services.map((service, index) => (
                <div key={index} className="about-service-item">
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
