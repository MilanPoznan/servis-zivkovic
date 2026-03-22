"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-[#0f1117] hero-grid-pattern overflow-hidden"
      aria-label="Naslovna sekcija"
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(230,57,70,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Diagonal accent line */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 60%, rgba(230,57,70,0.05) 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#e63946]/10 border border-[#e63946]/30 text-[#e63946] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-[#e63946] animate-pulse inline-block" />
            Dostupni 0-24 · Beograd i okolina
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-6"
            style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
          >
            Šlep Služba i{" "}
            <span className="text-[#e63946]">Autoservis</span>{" "}
            Beograd –{" "}
            <span className="text-[#f59e0b]">Živković</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#94a3b8] max-w-2xl mb-10 leading-relaxed"
          >
            Slepamo vaš auto{" "}
            <strong className="text-white">direktno u naš servis.</strong>{" "}
            Jedna firma – od mesta kvara do završenog popravka. Nema stresa,
            nema traženja servisa.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            {/* Primary CTA with pulsing ring */}
            <a
              href="tel:+381655703879"
              className="relative inline-flex items-center justify-center gap-3 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-[#e63946]/30 pulse-ring"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Pozovite odmah
            </a>

            {/* Secondary CTA */}
            <a
              href="#usluge"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200"
            >
              Naše usluge
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 items-center"
          >
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                text: "0-24 dostupni",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                text: "Beograd i okolina",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                text: "15+ godina iskustva",
              },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-[#94a3b8] text-sm font-medium"
              >
                <span className="text-[#f59e0b]">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0f1117] pointer-events-none" />
    </section>
  );
}
