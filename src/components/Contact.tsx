"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    ime: "",
    telefon: "",
    poruka: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder – integrate with backend or email service
    setSubmitted(true);
  };

  return (
    <section
      id="kontakt"
      className="py-20 md:py-28 bg-[#0f1117]"
      aria-labelledby="kontakt-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#e63946] font-semibold uppercase tracking-widest text-sm mb-3">
            Kontakt
          </p>
          <h2
            id="kontakt-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white"
            style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
          >
            Pozovite nas odmah
          </h2>
          <p className="mt-4 text-[#94a3b8] text-lg">
            Dostupni 0-24. Jedno pozivanje – sve je rešeno.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Phone CTA block */}
          <AnimatedSection direction="left">
            <div className="bg-[#1a1f2e] border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-full min-h-[320px]">
              {/* Pulsing phone button */}
              <div className="relative mb-8 inline-flex">
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#e63946]"
                  animate={{ scale: [1, 1.7], opacity: [0.8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#e63946]"
                  animate={{ scale: [1, 1.7], opacity: [0.8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
                />
                <a
                  href="tel:+381655703879"
                  className="relative z-10 w-20 h-20 rounded-full bg-[#e63946] hover:bg-[#c1121f] flex items-center justify-center transition-colors"
                  aria-label="Pozovite nas"
                >
                  <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </a>
              </div>

              <p className="text-[#94a3b8] text-sm uppercase tracking-widest mb-2 font-medium">
                Telefon
              </p>
              <a
                href="tel:+381655703879"
                className="text-4xl md:text-5xl font-black text-white hover:text-[#e63946] transition-colors mb-4"
                style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
              >
                065 570 3879
              </a>
              <p className="text-[#94a3b8] text-base">
                Dostupni 0-24, svakog dana u godini
              </p>

              <div className="mt-8 pt-6 border-t border-white/5 w-full">
                <div className="flex items-start gap-3 text-left">
                  <svg className="w-5 h-5 text-[#f59e0b] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-semibold text-sm">Lokacija</p>
                    <p className="text-[#94a3b8] text-sm">Beograd, Srbija</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="bg-[#1a1f2e] border border-white/5 rounded-2xl p-8 md:p-10">
              <h3
                className="text-2xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 800 }}
              >
                Pošaljite poruku
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center h-48 text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#e63946]/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#e63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">Hvala!</p>
                    <p className="text-[#94a3b8] mt-1">Javićemo se u najkraćem roku.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label htmlFor="ime" className="block text-sm font-medium text-[#94a3b8] mb-2">
                      Ime i prezime
                    </label>
                    <input
                      id="ime"
                      type="text"
                      required
                      value={formData.ime}
                      onChange={(e) => setFormData({ ...formData, ime: e.target.value })}
                      placeholder="Vaše ime"
                      className="w-full bg-[#0f1117] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#4a5568] focus:outline-none focus:border-[#e63946]/50 focus:ring-1 focus:ring-[#e63946]/50 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefon" className="block text-sm font-medium text-[#94a3b8] mb-2">
                      Broj telefona
                    </label>
                    <input
                      id="telefon"
                      type="tel"
                      required
                      value={formData.telefon}
                      onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                      placeholder="06X XXX XXXX"
                      className="w-full bg-[#0f1117] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#4a5568] focus:outline-none focus:border-[#e63946]/50 focus:ring-1 focus:ring-[#e63946]/50 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="poruka" className="block text-sm font-medium text-[#94a3b8] mb-2">
                      Poruka
                    </label>
                    <textarea
                      id="poruka"
                      rows={4}
                      value={formData.poruka}
                      onChange={(e) => setFormData({ ...formData, poruka: e.target.value })}
                      placeholder="Opišite problem sa vozilom..."
                      className="w-full bg-[#0f1117] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#4a5568] focus:outline-none focus:border-[#e63946]/50 focus:ring-1 focus:ring-[#e63946]/50 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#e63946] hover:bg-[#c1121f] text-white font-bold py-3.5 rounded-lg transition-all duration-200 hover:scale-[1.02] text-base"
                  >
                    Pošaljite poruku
                  </button>

                  <p className="text-[#4a5568] text-xs text-center">
                    Za hitne situacije nazovite direktno:{" "}
                    <a href="tel:+381655703879" className="text-[#e63946] hover:underline font-medium">
                      065 570 3879
                    </a>
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
