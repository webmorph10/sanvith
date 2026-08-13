import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personal } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav id="mainNav" className="main-nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand" aria-label="Sanvith B home">
          <span className="brand-mark">SB</span>
          <span>{personal.name}</span>
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta">
            Let’s Talk
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="burger"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <button type="button" className="close-btn" onClick={() => setOpen(false)} aria-label="Close menu">
          ✕
        </button>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
