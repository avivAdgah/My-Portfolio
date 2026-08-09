import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        isScrolled
          ? "border-ink-200 bg-white/85 backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between sm:h-20">
        <a
          href="#home"
          className="text-xl font-extrabold tracking-tight text-ink-950 sm:text-2xl"
        >
          Edie
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-950"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden md:inline-flex">
          Start a project
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-900 transition-colors hover:bg-ink-100 md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-ink-200 bg-white transition-[max-height] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-ink-950"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full"
            >
              Start a project
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
