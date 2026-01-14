export default function WhyChooseUs() {
  const steps = [
    {
      number: "01",
      title: "Certified, Reliable Equipment",
      description:
        "Trusted, compliant brands that meet regulations and pass inspections with confidence.",
    },
    {
      number: "02",
      title: "End-to-End Project Delivery",
      description:
        "A single partner for surveying, design, supply, installation, testing, and ongoing maintenance.",
    },
    {
      number: "03",
      title: "Inspection-Ready Handovers",
      description:
        "Complete documentation, test reports, tagging, and clear labeling for smooth audits.",
    },
    {
      number: "04",
      title: "Fast, Accountable Support",
      description: "Direct communication, rapid response, and minimal downtime you can rely on.",
    },
  ]

  return (
    <section id="why-us" className="why-choose-us">
      <div className="why-container">
        <div className="why-left">
          <div className="why-content">
            <span className="section-subtitle-dark">How We Work</span>
            <h2 className="section-title-dark">Making Fire Safety Simple & Effective</h2>
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
              backgroundImage: `url('/image14.png')`,
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
