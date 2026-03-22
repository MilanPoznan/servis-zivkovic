"use client";

import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    title: "Pozovite nas",
    description:
      "Pozovite broj 065 570 3879 u bilo koje vreme. Kažite nam gde se nalazite i šta se desilo – mi se pobrinemo za sve ostalo.",
  },
  {
    number: "02",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
    title: "Dolazimo po vaše vozilo",
    description:
      "Naš šlep kamion stiže brzo na lokaciju. Stručno i pažljivo ukrcavamo i prevozimo vaše vozilo direktno u naš autoservis.",
  },
  {
    number: "03",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Popravljamo u našem servisu",
    description:
      "Naši iskusni majstori dijagnostikuju i popravljaju kvar. Obaveštavamo vas o svakom koraku i vraćamo vam vozilo u punom redu.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-20 md:py-28 bg-[#0f1117]"
      aria-labelledby="kako-radimo-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#e63946] font-semibold uppercase tracking-widest text-sm mb-3">
            Jednostavan proces
          </p>
          <h2
            id="kako-radimo-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white"
            style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
          >
            Kako funkcioniše?
          </h2>
          <p className="mt-4 text-[#94a3b8] text-lg max-w-xl mx-auto">
            Tri koraka – i vaš problem je rešen.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.15}>
                <div className="relative text-center flex flex-col items-center">
                  {/* Step number bubble */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-[#1a1f2e] border-2 border-[#e63946]/40 flex items-center justify-center text-[#e63946] mx-auto">
                      {step.icon}
                    </div>
                    <span
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#e63946] text-white text-xs font-black flex items-center justify-center"
                      style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
                    >
                      {index + 1}
                    </span>
                  </div>

                  {/* Big step number (decorative) */}
                  <div
                    className="text-7xl font-black text-white/[0.04] mb-2 leading-none absolute -top-2 left-1/2 -translate-x-1/2"
                    style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>

                  <h3
                    className="text-2xl font-bold text-white mb-3 mt-2"
                    style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 800 }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#94a3b8] text-base leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* CTA below steps */}
        <AnimatedSection className="text-center mt-16">
          <a
            href="tel:+381655703879"
            className="inline-flex items-center gap-3 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-[#e63946]/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Pozovite sada – 065 570 3879
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
