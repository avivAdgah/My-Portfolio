import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a href="/" aria-label="Aviv Adgah - Home" className="logo">
          Aviv Adgah
        </a>

        <nav aria-label="Primary" className={menuOpen ? "nav-open" : ""}>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />
          <a href="#contact" className="btn btn-sm navbar-cta">
            Let's Talk
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
