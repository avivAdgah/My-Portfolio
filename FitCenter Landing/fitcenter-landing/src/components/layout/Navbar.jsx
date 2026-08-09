"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

import { FaBars, FaTimes, FaRegImages } from "react-icons/fa";
import { IoHomeOutline, IoPersonCircleOutline } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { CiDumbbell } from "react-icons/ci";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      icon: <IoHomeOutline />,
      href: "#hero",
    },
    {
      name: "About",
      icon: <IoPersonCircleOutline />,
      href: "#about",
    },
    {
      name: "Services",
      icon: <CiDumbbell />,
      href: "#services",
    },
    {
      name: "Gallery",
      icon: <FaRegImages />,
      href: "#gallery",
    },
    {
      name: "Contact",
      icon: <IoMdContacts />,
      href: "#contact",
    },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="relative z-40 bg-black px-4 py-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="#hero"
            className="font-heading text-2xl font-bold tracking-wide transition-transform duration-300 hover:scale-110"
          >
            <span className="text-white">Fit</span>
            <span className="text-blue-700">Center</span>
          </Link>

          {/* Desktop menu — no icons */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="font-heading text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:scale-110 hover:text-blue-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <Button href="#contact" className="px-6 py-3 text-sm focus:ring-offset-black">
                Start Today
              </Button>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="text-2xl text-white md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 flex min-h-dvh w-full flex-col bg-black transition-all duration-500 ease-out md:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <Link
            href="#hero"
            className="font-heading text-2xl font-bold tracking-wide"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-white">Fit</span>
            <span className="text-blue-700">Center</span>
          </Link>

          <button
            type="button"
            className="text-3xl text-white transition-transform duration-300 hover:rotate-90"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Mobile links — with icons */}
        <ul className="flex flex-1 flex-col items-center justify-center gap-10 font-heading text-3xl font-semibold uppercase tracking-wide">
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              className={`transition-all duration-500 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-white transition-all duration-300 hover:scale-110 hover:text-blue-500"
              >
                <span aria-hidden="true">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="p-6">
          <Button
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 text-lg focus:ring-offset-black"
          >
            Start Today
          </Button>
        </div>
      </div>
    </>
  );
}