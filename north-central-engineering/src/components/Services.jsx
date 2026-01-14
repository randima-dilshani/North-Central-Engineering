export default function Services() {
const services = [
  {
    image: "/image15.jpg",
     icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 3h6v4H9z"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M12 7v14"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  />
  <path
    d="M8 13h8"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  />
  <path
    d="M16 5l3 2"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  />
</svg>
      ),
    title: "Fire Extinguishers",
    description:
      "Supply and install water, dry powder, foam, CO2, and clean agent units. Refilling, hydro-testing, inspections, and tagging.",
  },
  {
    image: "/image18.jpg",
    icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <path
    d="M12 22a2 2 0 002-2h-4a2 2 0 002 2z"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  />
  <path
    d="M18 16v-5a6 6 0 10-12 0v5l-2 2h16l-2-2z"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M4 10c-.5-1-.5-3 0-4M20 10c.5-1 .5-3 0-4"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  />
</svg>

      ),

    title: "Fire Detection & Alarm",
    description:
      "Addressable and conventional systems, sounders, MCPs,panels, and integrations. Upgrades and rectifications.",
  },
  {
    image: "/image17.jpg",
    icon: (
       <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 2h6v4H9z"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M12 6v10"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  />
  <path
    d="M8 10c-1 1-1 3 0 4M16 10c1 1 1 3 0 4"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  />
  <path
    d="M6 18h12"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  />
</svg>

      ),
    title: "Clean Agent & Special Suppression",
    description:
      "FM-200, NOVEC-type, CO2 and kitchen hood systems wherewater is not suitable.",
  },
  {
    image: "/image16.jpg",
    icon: (
       <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <path
    d="M3 12h18M12 3v18"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  />
  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
  <path d="M12 15v4M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>

      ),

    title: "Fire Pump Rooms & Electrical",
    description:
      "UL-listed Pump, local pumps, control panels, testing, and commissioning for reliable operation and uptime.",
  },
  {
    image: "/image21.jpg",
    icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
      ),
    title: "Maintenance & AMC",
    description:
      "Planned preventive maintenance with checklists, compliance reports, and fast call-outs",
  },
  {
    image: "/image20.jpg",
    icon: (
       <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2C10 4 8 6 8 10c0 3 4 6 4 6s4-3 4-6c0-4-2-6-4-8z" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8 12h8M8 16h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
      ),
    title: "Hydrant, Hose Reel & Sprinkler Systems",
    description:
      "Design, install, test, and commission complete protection networks with cabinets, landing valves, pumps, and accessorie.",
  },
   {
    image: "/image23.jpg",
    icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7 6h10M7 9h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
      ),
    title: "Compliance Audits & Training",
    description:
      "Site surveys, risk assessments, evacuation plans, and staff training for extinguisher use and alarm response.",
  },
   {
    image: "/image19.jpg",
    icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <path d="M3 7h18v14H3V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3 7l9-4 9 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  <path d="M9 14h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  <path d="M9 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
      ),
    title: "Spares & Rapid Replacement",
    description:
      "Hose reel cabinets, landing valves, nozzles, hoses, MCP back boxes, sounders, signage, and more.",
  },
   {
    image: "/image24.jpg",
    icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <path d="M4 4h16v16H4V4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4 8h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  <path d="M8 16h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  <path d="M16 20l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
      ),
    title: "Documentation & Handover",
    description:
      "As-built drawings, test records, asset registers, and maintenance schedules to keep you inspection ready.",
  },
];


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
          <h2 className="section-title">We Serve The Best Service</h2>
          <p className="services-description">
            From fire alarm installation to integrated security systems, we provide comprehensive solutions tailored to
            protect your property and ensure compliance with safety regulations.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
           <div key={index} className="service-card">
  <div className="service-image">
    <img src={service.image} alt={service.title} />
  </div>

  <div className="service-card-icon">{service.icon}</div>

  <h3 className="service-card-title">{service.title}</h3>
  <p className="service-card-description">{service.description}</p>

  <a href="#contact" className="service-link">
    Learn More
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
