import { useState } from "react"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Kasun Perera",
      role: "Factory Manager",
      company: "Lanka Industries",
      image: "/image7.png",
      text: "North Central Engineering installed our factory's complete fire alarm system. Their team was professional, and the system works flawlessly. Excellent after-sales support!",
      rating: 5,
    },
    {
      name: "Dilini Fernando",
      role: "Operations Director",
      company: "City Hospital",
      image: "/image9.png",
      text: "We needed a comprehensive fire safety solution for our hospital. NCE designed and installed a system that meets all regulatory requirements. Highly professional service.",
      rating: 5,
    },
    {
      name: "Rajith Silva",
      role: "Property Manager",
      company: "Colombo Towers",
      image: "/image8.png",
      text: "We've been using NCE for all our fire alarm and CCTV needs for 5 years. Their maintenance service is prompt and reliable. Best fire safety company in Sri Lanka!",
      rating: 5,
    },
  ]

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-left">
        <div className="container">
          <div className="testimonials-content">
            <span className="section-subtitle">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>

            <div className="testimonial-card">
              <div className="testimonial-author">
                <img src={testimonials[activeIndex].image || "/placeholder.svg"} alt={testimonials[activeIndex].name} />
                <div className="author-info">
                  <h4>{testimonials[activeIndex].name}</h4>
                  <div className="testimonial-rating">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <span key={i} className="star">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">"{testimonials[activeIndex].text}"</p>
              <p className="testimonial-role">
                {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
              </p>
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${activeIndex === index ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials-right">
        <div
          className="testimonials-bg"
          style={{
            backgroundImage: `url('/image11.png')`,
          }}
        ></div>
        <div className="testimonials-overlay"></div>
        <div className="testimonials-stats-overlay">
          {stats.map((stat, index) => (
            <div key={index} className="tstat-item-overlay">
              <span className="tstat-number-overlay">{stat.number}</span>
              <span className="tstat-label-overlay">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
