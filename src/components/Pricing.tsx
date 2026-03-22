"use client";

import AnimatedSection from "./AnimatedSection";

const pricingRows = [
  {
    service: "Šlepanje u gradu",
    price: "5.000 din",
    note: "",
  },
  {
    service: "Šlepanje u gradu",
    price: "5.000 – 15.000 din",
    note: "otežan utovar/istovar",
  },
  {
    service: "Šlepanje van grada",
    price: "Cena po kilometru",
    note: "",
  },
];

export default function Pricing() {
  return (
    <section
      id="cenovnik"
      className="py-20 md:py-28 bg-[#0f1117]"
      aria-labelledby="cenovnik-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-[#e63946] font-semibold uppercase tracking-widest text-sm mb-3">
            Transparentne cene
          </p>
          <h2
            id="cenovnik-heading"
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
          >
            Cenovnik šlep službe
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">
            Jasne cene, bez skrivenih troškova. Pre svake vožnje informišemo vas o konačnom iznosu.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-[#1a1f2e] border border-white/5 rounded-2xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-2 bg-[#e63946]/10 border-b border-white/5 px-6 py-4">
              <span className="text-[#e63946] font-semibold text-sm uppercase tracking-wide">
                Usluga
              </span>
              <span className="text-[#e63946] font-semibold text-sm uppercase tracking-wide text-right">
                Cena
              </span>
            </div>

            {/* Rows */}
            {pricingRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 items-center px-6 py-5 border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors`}
              >
                <div>
                  <span className="text-white font-medium">{row.service}</span>
                  {row.note && (
                    <span className="block text-[#64748b] text-sm mt-0.5">{row.note}</span>
                  )}
                </div>
                <div className="text-right">
                  <span
                    className="text-[#f59e0b] font-bold text-lg"
                    style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
                  >
                    {row.price}
                  </span>
                </div>
              </div>
            ))}

            {/* Footer note */}
            <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5">
              <p className="text-[#64748b] text-sm">
                * Cene su informativne. Za tačnu cenu šlepanja van grada pozovite nas – obračun
                ide po kilometru u zavisnosti od destinacije.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.2} className="mt-10 text-center">
          <a
            href="tel:+381655703879"
            className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-[#e63946]/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Pozovite: 065 570 3879
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
