export default function Stats() {
  const partners = [
     { name: "BRANDIX", logo: "/images25.png" },
    { name: "BODYLINE", logo: "/image26.avif" },
    { name: "HAVELOCKCITY", logo: "/image27.png" },
    { name: "PHOENIX", logo: "/image28.png" },
    { name: "CEAT", logo: "/image29.png" },
    { name: "CBL", logo: "/image30.png" },
    { name: "PRIME LANDS", logo: "/image31.png" },
    { name: "COLOMBO CITY CENTER", logo: "/image33.jpeg" },
    { name: "NESTLE", logo: "/image32.png" },
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
          <span className="section-subtitle">Locations & Our Partners</span>
          <h2 className="section-title">Over 100+ Operation Locations In Sri Lanka</h2>
          <p className="stats-description">
            We partner with world-leading fire safety and security equipment manufacturers to bring you the highest
            quality products with full warranty and local support.
          </p>
        </div>

     <div className="partners">
  {partners.map((partner, index) => (
    <div key={index} className="partner-logo">
      <img
        src={partner.logo}
        alt={partner.name}
        className="partner-icon"
      />
      <span className="partner-name">{partner.name}</span>
    </div>
  ))}
</div>
      </div>
    </section>
  )
}
