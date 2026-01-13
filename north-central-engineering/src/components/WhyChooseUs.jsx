export default function WhyChooseUs() {
  const steps = [
    {
      number: "01",
      title: "Free Site Assessment",
      description:
        "Our engineers visit your property to assess fire safety requirements and provide expert recommendations.",
    },
    {
      number: "02",
      title: "Custom System Design",
      description:
        "We design a tailored fire safety system that meets your specific needs and regulatory requirements.",
    },
    {
      number: "03",
      title: "Professional Installation",
      description:
        "Our certified technicians install and configure your system with minimal disruption to your operations.",
    },
    {
      number: "04",
      title: "Training & Support",
      description: "We provide comprehensive training and ongoing maintenance to keep your systems running optimally.",
    },
  ]

  return (
    <section id="why-us" className="why-choose-us">
      <div className="why-container">
        <div className="why-left">
          <div className="why-content">
            <span className="section-subtitle-dark">How We Work</span>
            <h2 className="section-title-dark">Our Installation Process</h2>
            <p className="why-description-dark">
              We follow a proven process to ensure your property gets the best fire safety protection. From initial
              assessment to ongoing maintenance, we're with you every step of the way.
            </p>

            <div className="why-steps">
              {steps.map((step, index) => (
                <div key={index} className="why-step-light">
                  <div className="step-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="step-content-light">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="why-right">
          <div
            className="why-bg-image"
            style={{
              backgroundImage: `url('/image5.png')`,
            }}
          ></div>
          <div className="why-cta-box">
            <h4>Request a Free Quote or Schedule a Site Visit</h4>
            <a href="#contact" className="btn-primary">
              Contact Us
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
      </div>
    </section>
  )
}
