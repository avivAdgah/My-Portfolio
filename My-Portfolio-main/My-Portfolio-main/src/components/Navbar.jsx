import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/useLanguage";
import translations from "../i18n/translations";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const { language } = useLanguage();
  const t = translations[language].nav;

  const links = [
    { hash: "#work", label: t.work },
    { hash: "#services", label: t.services },
    { hash: "#about", label: t.about },
    { hash: "#contact", label: t.contact },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar" dir="ltr">
      <div className="navbar-inner container">
        <a href="/" aria-label="Aviv Adgah - Home" className="logo">
          Aviv Adgah
        </a>

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
                  {t.startProject}
                </a>
              ) : (
                <Link to="/#contact" onClick={closeMenu}>
                  {t.startProject}
                </Link>
              )}
            </li>
          </ul>
        </nav>

        <div className="navbar-actions">
          <LanguageToggle />
          <ThemeToggle />
          {isHome ? (
            <a href="#contact" className="btn btn-sm btn-primary navbar-cta">
              {t.startProject}
            </a>
          ) : (
            <Link to="/#contact" className="btn btn-sm btn-primary navbar-cta">
              {t.startProject}
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
