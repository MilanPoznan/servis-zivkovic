"use client";

import AnimatedSection from "./AnimatedSection";

export default function USPBanner() {
  return (
    <section
      className="bg-[#e63946] py-12 md:py-16 overflow-hidden relative"
      aria-label="Naša prednost"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 20px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="none">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Main statement */}
            <div className="text-center md:text-left max-w-2xl">
              <p
                className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight"
                style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
              >
                Šlep + servis —{" "}
                <span className="text-white/80">jedna firma, jedno pozivanje.</span>
              </p>
              <p className="mt-3 text-white/80 text-lg md:text-xl">
                Ne morate da tražite šlep i poseban servis — mi radimo sve.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-10 md:gap-12 shrink-0">
              {[
                { value: "0-24", label: "Dostupnost" },
                { value: "15+", label: "Godina iskustva" },
                { value: "1", label: "Poziv – sve rešeno" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-4xl md:text-5xl font-black text-white"
                    style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm mt-1 font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
