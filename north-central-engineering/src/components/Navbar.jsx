import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">North Central Engineering</h1>

      <button className="md:hidden" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <ul className={`md:flex gap-6 ${open ? "block" : "hidden"} md:block`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/products">Tools</Link></li>
        <li><Link to="/it-solutions">IT Solutions</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
