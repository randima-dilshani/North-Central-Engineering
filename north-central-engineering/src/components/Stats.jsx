export default function Stats() {
  const partners = [
    { name: "Honeywell", logo: "H" },
    { name: "Bosch", logo: "B" },
    { name: "Notifier", logo: "N" },
    { name: "Edwards", logo: "E" },
    { name: "Hikvision", logo: "Hi" },
  ]

  return (
    <section className="stats">
      <div
        className="stats-bg"
        style={{
          backgroundImage: `url('/image6.png')`,
        }}
      ></div>
      <div className="stats-overlay-dark"></div>
      <div className="container stats-content">
        <div className="stats-header">
          <span className="section-subtitle">Our Partners</span>
          <h2 className="section-title">Trusted Brands We Work With</h2>
          <p className="stats-description">
            We partner with world-leading fire safety and security equipment manufacturers to bring you the highest
            quality products with full warranty and local support.
          </p>
        </div>

        <div className="partners">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">
              <span className="partner-icon">{partner.logo}</span>
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
