"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Usluge", href: "/#usluge" },
    { label: "Zašto mi", href: "/zasto-mi" },
    { label: "Akcije", href: "/akcije" },
    { label: "Blog", href: "/blog" },
    { label: "Kontakt", href: "/#kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f1117]/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Navigacija"
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display text-2xl md:text-3xl font-900 text-white tracking-tight hover:text-[#e63946] transition-colors"
          style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
        >
          Živković
          <span className="text-[#e63946]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#94a3b8] hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 uppercase"
            >
              {link.label}
            </a>
          ))}

          {/* CTA Phone */}
          <a
            href="tel:+381655703879"
            className="relative inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Pozovite: 065 570 3879
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Otvori meni"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[#1a1f2e] border-t border-white/5 px-4 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#94a3b8] hover:text-white text-base font-medium py-2 transition-colors uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+381655703879"
            className="inline-flex items-center justify-center gap-2 bg-[#e63946] text-white font-semibold px-5 py-3 rounded-lg text-base"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Pozovite: 065 570 3879
          </a>
        </motion.div>
      )}
    </header>
  );
}
