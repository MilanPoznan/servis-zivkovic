import type { Metadata } from "next";
import Link from "next/link";
import WhyUs from "@/components/WhyUs";

export const metadata: Metadata = {
  title: "Zašto izabrati nas | Šlep Služba i Autoservis Živković Beograd",
  description:
    "Saznajte zašto su klijenti biraju Živković – šlep i autoservis na jednom mestu, dostupni 0-24, transparentne cene i 15+ godina iskustva u Beogradu.",
  openGraph: {
    title: "Zašto izabrati Živković – Šlep Služba i Autoservis Beograd",
    description:
      "Šlep + servis pod jednim krovom. Dostupni 0-24, iskusni majstori, transparentne cene.",
    locale: "sr_RS",
    type: "website",
  },
};

export default function ZastoMiPage() {
  return (
    <div className="min-h-screen bg-[#0f1117]">
      {/* Header */}
      <div className="bg-[#1a1f2e] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-20">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm text-[#64748b] mb-6"
            aria-label="Putanja"
          >
            <Link href="/" className="hover:text-[#94a3b8] transition-colors">
              Početna
            </Link>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#94a3b8]">Zašto izabrati nas</span>
          </nav>

          <p className="text-[#f59e0b] font-semibold uppercase tracking-widest text-sm mb-3">
            Naše prednosti
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
          >
            Zašto izabrati nas?
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl">
            Više od 15 godina iskustva, šlep i servis pod jednim krovom, dostupni 0-24 – evo zašto
            nam klijenti uvek iznova veruju.
          </p>
        </div>
      </div>

      {/* WhyUs section (without its own header since page has one) */}
      <main>
        <WhyUs hideHeader />
      </main>

      {/* CTA strip */}
      <div className="bg-[#1a1f2e] border-t border-white/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2
              className="text-2xl md:text-3xl font-black text-white mb-2"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
            >
              Uverite se i sami
            </h2>
            <p className="text-[#94a3b8]">
              Pozovite nas – dostupni smo 0-24, 365 dana u godini.
            </p>
          </div>
          <a
            href="tel:+381655703879"
            className="shrink-0 inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-[#e63946]/30 whitespace-nowrap"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            065 570 3879
          </a>
        </div>
      </div>
    </div>
  );
}
