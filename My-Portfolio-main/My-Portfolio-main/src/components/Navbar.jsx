import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

const links = [
  { hash: "#work", label: "Work" },
  { hash: "#services", label: "Services" },
  { hash: "#about", label: "About" },
  { hash: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" aria-label="Aviv Adgah - Home" className="logo">
          Aviv Adgah
        </Link>

        <nav aria-label="Primary" className={menuOpen ? "nav-open" : ""}>
          <ul className="nav-links">
            {links.map((link) =>
              isHome ? (
                <li key={link.hash}>
                  <a href={link.hash} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.hash}>
                  <Link to={`/${link.hash}`} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              )
            )}
            <li className="nav-cta-mobile">
              {isHome ? (
                <a href="#contact" onClick={closeMenu}>
                  Start a Project
                </a>
              ) : (
                <Link to="/#contact" onClick={closeMenu}>
                  Start a Project
                </Link>
              )}
            </li>
          </ul>
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />
          {isHome ? (
            <a href="#contact" className="btn btn-sm btn-primary navbar-cta">
              Start a Project
            </a>
          ) : (
            <Link to="/#contact" className="btn btn-sm btn-primary navbar-cta">
              Start a Project
            </Link>
          )}
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
