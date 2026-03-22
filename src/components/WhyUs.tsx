"use client";

import AnimatedSection from "./AnimatedSection";

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    title: "Šlep + servis na jednom mestu",
    description:
      "Jedina firma u Beogradu koja šlepuje vaše vozilo direktno u sopstveni servis. Jedan poziv – sve sredimo.",
    highlight: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Dostupni 0-24, 365 dana",
    description:
      "Kvar se ne najavljuje. Zato smo dostupni u svako doba dana i noći, vikendom i praznicima.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Iskusni majstori",
    description:
      "Više od 15 godina iskustva u servisu svih marki i modela. Koristimo modernu dijagnostičku opremu.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Transparentne cene",
    description:
      "Pre svakog rada informišemo vas o troškovima. Nema skrivenih nakanda ni neprijatnih iznenađenja.",
    highlight: false,
  },
];

export default function WhyUs({ hideHeader }: { hideHeader?: boolean }) {
  return (
    <section
      className="py-20 md:py-28 bg-[#1a1f2e]"
      aria-labelledby="zasto-mi-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        {!hideHeader && (
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#f59e0b] font-semibold uppercase tracking-widest text-sm mb-3">
              Naše prednosti
            </p>
            <h2
              id="zasto-mi-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
            >
              Zašto izabrati nas?
            </h2>
          </AnimatedSection>
        )}

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <AnimatedSection key={reason.title} delay={index * 0.1}>
              <div
                className={`rounded-2xl p-6 h-full border transition-all ${
                  reason.highlight
                    ? "bg-[#e63946] border-[#e63946] shadow-xl shadow-[#e63946]/20"
                    : "bg-[#0f1117] border-white/5 hover:border-white/10"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    reason.highlight ? "bg-white/20 text-white" : "bg-white/5 text-[#f59e0b]"
                  }`}
                >
                  {reason.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-2 ${reason.highlight ? "text-white" : "text-white"}`}
                  style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 800 }}
                >
                  {reason.title}
                </h3>
                <p className={reason.highlight ? "text-white/80 text-sm" : "text-[#94a3b8] text-sm"}>
                  {reason.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* SEO paragraph about full-service advantage */}
        <AnimatedSection>
          <div className="bg-[#0f1117] border border-white/5 rounded-2xl p-8 md:p-10 max-w-4xl mx-auto">
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 800 }}
            >
              Prednost kompletne usluge – šlep i servis pod jednim krovom
            </h3>
            <p className="text-[#94a3b8] leading-relaxed text-base md:text-lg">
              Kada se vozilo pokvari na putu, vlasnik se suočava sa dve mukotrpne pretrage –
              pronalaženje šlep službe i pronalaženje pouzdanog servisa. U firmi Živković to više
              nije vaš problem. Mi dolazimo po vaše vozilo šlep kamionom, prevozimo ga direktno
              u naš servis i odmah pristupamo dijagnostici i popravci. Nema prebacivanja
              odgovornosti između dve firme, nema čekanja ni koordinacije. Vi samo pozovete
              jedan broj – a mi se brinemo o svemu ostalom, od mesta kvara pa sve do momenta
              kada ponovo sednete za volan svog popravljenog vozila. Ova kompletna usluga
              štedi vaše vreme, novac i živce, i zato klijenti koji jednom dođu k nama uvek
              se vraćaju.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
