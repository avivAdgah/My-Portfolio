import "./Footer.css";

const EMAIL = "avivadgha@gmail.com";
const GITHUB_URL = "https://github.com/avivAdgah";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <span className="footer-brand">Aviv Adgah</span>

        <nav aria-label="Footer">
          <ul className="footer-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-contact">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>

        <span className="footer-copyright">
          © {new Date().getFullYear()} Aviv Adgah. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
