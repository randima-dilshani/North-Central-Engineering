import Navbar from "../components/Navbar";
import About from "../components/About";
import EmergencyBanner from "../components/EmergencyBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Hero() {

  return (
    <>
      <Navbar />
    <section id="home" className="hero">
    
      <div
        className="hero-background"
        style={{
          backgroundImage: `url('/image2.png')`,
        }}
      ></div>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text">
          
          <span className="hero-subtitle">Fire Safety Solutions Provider</span>
          <h1 className="hero-title">
            Expert Fire Alarm
            <span className="highlight"> Systems</span> & Safety Solutions
          </h1>
          <p className="hero-description">
            North Central Engineering specializes in designing, installing, and maintaining advanced fire alarm systems,
            CCTV surveillance, access control, and complete fire safety solutions for residential, commercial, and
            industrial properties across Sri Lanka.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              Our Services
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Get a Quote
            </button>
          </div>
        </div>
        
      </div>
    </section>
    <About />
    <EmergencyBanner />
    <WhyChooseUs />
    <Services />
    <Stats />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}
