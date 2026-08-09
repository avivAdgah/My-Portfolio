import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import BackToTopButton from "../ui/BackToTopButton";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      brandColor: "#1877F2",
      icon: <FaFacebookF aria-hidden="true" />,
    },
    {
      name: "TikTok",
      href: "https://tiktok.com",
      brandColor: "#25F4EE",
      icon: <FaTiktok aria-hidden="true" />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      brandColor: "#E1306C",
      icon: <FaInstagram aria-hidden="true" />,
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      brandColor: "#FF0000",
      icon: <FaYoutube aria-hidden="true" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      brandColor: "#0A66C2",
      icon: <FaLinkedin aria-hidden="true" />,
    },
    {
      name: "WhatsApp",
      href: "https://web.whatsapp.com/",
      brandColor: "#25D366",
      icon: <IoLogoWhatsapp aria-hidden="true" />,
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Personal Training", href: "#services" },
    { name: "Group Classes", href: "#services" },
    { name: "Nutrition Plans", href: "#services" },
    { name: "Yoga", href: "#services" },
    { name: "Cardio", href: "#services" },
    { name: "CrossFit", href: "#services" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-blue-700 bg-black px-4 py-12 text-white sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="#hero"
              className="inline-block font-heading text-2xl font-bold tracking-wide transition-transform duration-300 hover:scale-105"
            >
              <span className="text-white">Fit</span>
              <span className="text-blue-700">Center</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-300">
              Helping you build strength, improve your health, and achieve
              lasting results.
            </p>

            <ul className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    style={{ "--brand-color": social.brandColor }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-lg transition duration-300 hover:scale-110 hover:border-(--brand-color) hover:bg-(--brand-color) hover:text-white"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h2 className="font-heading text-lg font-semibold uppercase tracking-wide">
              Quick Links
            </h2>

            <ul className="mt-4 flex flex-col gap-3 text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-300 hover:text-blue-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h2 className="font-heading text-lg font-semibold uppercase tracking-wide">
              Services
            </h2>

            <ul className="mt-4 flex flex-col gap-3 text-gray-300">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="transition-colors duration-300 hover:text-blue-500"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-heading text-lg font-semibold uppercase tracking-wide">
              Contact
            </h2>

            <div className="mt-4 flex flex-col gap-3 text-gray-300">
              <p>
                123 Fitness St.
                <span className="block">Tel Aviv, Israel</span>
              </p>

              <a
                href="tel:+972501234567"
                className="transition-colors duration-300 hover:text-blue-500"
              >
                050-1234-567
              </a>

              <a
                href="mailto:info@fitcenter.com"
                className="break-all transition-colors duration-300 hover:text-blue-500"
              >
                info@fitcenter.com
              </a>

              <p>
                Sun - Thu: 06:00 - 22:00
                <span className="block">Fri: 06:00 - 15:00</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-700 pt-6 text-sm text-gray-300 sm:flex-row sm:items-center sm:justify-between">
          <p>All rights reserved © {currentYear} FitCenter.</p>

          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
}
