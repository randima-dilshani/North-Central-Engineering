import { useState, useEffect } from "react"
import {
  Code2,
  Cloud,
  Shield,
  Database,
  Smartphone,
  Globe,
  Server,
  Workflow,
  Users,
  Clock,
  Headphones,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  Phone,
} from "lucide-react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      title: "Custom Software Development",
      desc: "Tailor-made software solutions designed to meet your exact business requirements.",
      icon: Code2,
      image: "/image36.png",
    },
    {
      title: "Cloud Solutions",
      desc: "Secure and scalable cloud infrastructure to optimize performance and reliability.",
      icon: Cloud,
      image: "/image38.png",
    },
    {
      title: "Cybersecurity",
      desc: "Advanced security solutions to protect your systems, networks, and data.",
      icon: Shield,
      image: "/image35.png",
    },
    {
      title: "Database Management",
      desc: "High-performance database solutions ensuring availability and scalability.",
      icon: Database,
      image: "/image39.png",
    },
  ]

  const techStack = [
    {
      title: "Mobile Development",
      desc: "iOS & Android native apps, cross-platform solutions using React Native and Flutter",
      icon: Smartphone,
    },
    {
      title: "Web Development",
      desc: "React, Angular, Vue.js, Node.js, Python, and modern web frameworks for scalable applications",
      icon: Globe,
    },
    {
      title: "Backend Systems",
      desc: "Robust backend architecture with microservices, APIs, and scalable server infrastructure",
      icon: Server,
    },
    {
      title: "DevOps & Automation",
      desc: "CI/CD pipelines, automated testing, Docker and Kubernetes orchestration",
      icon: Workflow,
    },
  ]

  const whyUs = [
    {
      title: "Experienced Team",
      desc: "Over 10 years of experience with certified professionals in latest technologies.",
      icon: Users,
    },
    {
      title: "On-Time Delivery",
      desc: "Agile methodology ensuring projects delivered on time and within budget.",
      icon: Clock,
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock technical support and maintenance for all solutions.",
      icon: Headphones,
    },
  ]

  const industries = [
    "Finance & Banking",
    "Healthcare",
    "E-commerce",
    "Education",
    "Manufacturing",
    "Logistics",
    "Real Estate",
    "Hospitality",
  ]

  return (
<>
      
    <div className="min-h-screen bg-[#0a1628] text-[#f8fafc]">
     
      {/* Hero Section - Updated with animations and hero image */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/image40.png')`,
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/60" />
        {/* Animated gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#fbbf24]/10 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1e40af]/20 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div
            className={`max-w-3xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="inline-block px-4 py-1.5 bg-[#fbbf24]/20 text-[#fbbf24] text-sm font-semibold rounded-full mb-6 border border-[#fbbf24]/30 animate-[bounce_2s_ease-in-out_infinite]">
              IT Solutions Provider
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
              Expert IT Solutions
              <span className="text-[#fbbf24]"> & Digital</span> Transformation
            </h1>
            <p className="text-lg md:text-xl text-[#cbd5e1] mb-8 leading-relaxed max-w-2xl">
              North Central Engineering specializes in delivering cutting-edge software development, cloud solutions,
              cybersecurity, and complete IT infrastructure services for businesses across all industries.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#fbbf24] text-[#0a1628] rounded-xl font-semibold hover:bg-[#f59e0b] transition-all duration-300 hover:shadow-xl hover:shadow-[#fbbf24]/25 hover:scale-105 flex items-center gap-2 group">
                Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 border-2 border-[#fbbf24]/50 rounded-xl font-semibold hover:bg-[#fbbf24]/10 hover:border-[#fbbf24] transition-all duration-300 flex items-center gap-2 group">
                <Phone className="w-5 h-5" />
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Updated with images and animations */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-sm text-[#fbbf24] font-semibold tracking-wider uppercase">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What we offer</h2>
            <p className="text-[#94a3b8] max-w-2xl">
              Comprehensive IT solutions tailored to transform your business and accelerate growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-0 bg-[#0f1f36] border border-[#1e3a5f] rounded-2xl hover:border-[#fbbf24]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#fbbf24]/10 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f36] to-transparent" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#fbbf24]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#fbbf24] group-hover:rotate-6 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-[#fbbf24] group-hover:text-[#0a1628] transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">{service.desc}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm text-[#fbbf24] font-medium hover:gap-3 transition-all duration-300"
                  >
                    Read more <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="tech" className="py-24 px-6 bg-[#0f1f36]/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#fbbf24 1px, transparent 1px), linear-gradient(90deg, #fbbf24 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-sm text-[#fbbf24] font-semibold tracking-wider uppercase">Technology Stack</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Built with modern tools</h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group flex gap-5 p-6 bg-[#0a1628] border border-[#1e3a5f] rounded-2xl hover:border-[#fbbf24]/50 transition-all duration-500 hover:shadow-lg hover:shadow-[#fbbf24]/5"
                style={{ animation: `float ${3 + index * 0.5}s ease-in-out infinite` }}
              >
                <div className="w-14 h-14 bg-[#1e3a5f]/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#fbbf24]/10 group-hover:rotate-12 transition-all duration-300">
                  <tech.icon className="w-7 h-7 text-[#94a3b8] group-hover:text-[#fbbf24] transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[#fbbf24] transition-colors duration-300">
                    {tech.title}
                  </h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Banner Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src="/image34.png"
              alt="Our Team at Work"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/50 to-transparent" />
            <div className="absolute inset-0 flex items-center p-12">
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Innovation Meets Excellence</h3>
                <p className="text-[#94a3b8] text-lg mb-6">
                  Our dedicated team works tirelessly to deliver cutting-edge solutions that drive your business
                  forward.
                </p>
                <button className="px-6 py-3 bg-[#fbbf24] text-[#0a1628] rounded-xl font-semibold hover:bg-[#f59e0b] transition-all duration-300 hover:scale-105">
                  Meet Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-[#fbbf24] font-semibold tracking-wider uppercase">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Your trusted technology partner</h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 bg-[#0f1f36] border border-[#1e3a5f] rounded-2xl hover:border-[#fbbf24]/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#fbbf24]/10"
              >
                <div className="w-16 h-16 bg-[#fbbf24]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#fbbf24] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <item.icon className="w-8 h-8 text-[#fbbf24] group-hover:text-[#0a1628] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#fbbf24] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 px-6 bg-[#0f1f36]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm text-[#fbbf24] font-semibold tracking-wider uppercase">Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Industries we serve</h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto">
              Delivering specialized solutions across diverse sectors with deep domain expertise.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-[#0a1628] border border-[#1e3a5f] rounded-full text-sm font-medium hover:border-[#fbbf24] hover:bg-[#fbbf24]/10 hover:text-[#fbbf24] hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Updated with image background */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 rounded-3xl overflow-hidden">
            <img
              src="/image37.png"
              alt="Technology Background"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#fbbf24]/20 via-[#0a1628]/90 to-[#1e40af]/20" />
            <div className="absolute inset-0 border border-[#fbbf24]/30 rounded-3xl" />

            <div className="relative">
              <span className="text-sm text-[#fbbf24] font-semibold tracking-wider uppercase">Join Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Ready to transform your business?</h2>
              <p className="text-[#94a3b8] max-w-xl mx-auto mb-8">
                Partner with us to leverage cutting-edge technology and drive your digital transformation journey
                forward.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-[#fbbf24] text-[#0a1628] rounded-xl font-semibold hover:bg-[#f59e0b] transition-all duration-300 hover:shadow-xl hover:shadow-[#fbbf24]/25 hover:scale-105 flex items-center gap-2 group">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <button className="px-8 py-4 border border-[#fbbf24]/30 rounded-xl font-semibold hover:bg-[#fbbf24]/10 hover:border-[#fbbf24] transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
    <Footer />
    </>
  )
}
