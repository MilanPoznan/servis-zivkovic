"use client";

import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section
      id="o-nama"
      className="py-20 md:py-28 bg-[#1a1f2e]"
      aria-labelledby="o-nama-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text content */}
          <AnimatedSection direction="left">
            <p className="text-[#f59e0b] font-semibold uppercase tracking-widest text-sm mb-3">
              O nama
            </p>
            <h2
              id="o-nama-heading"
              className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
            >
              Autoservis i Šlep Služba u Beogradu – Živković
            </h2>

            <div className="space-y-4 text-[#94a3b8] leading-relaxed text-base">
              <p>
                Firma Živković pruža kompletnu uslugu šlep službe i autoservisa u Beogradu i
                okolini već više od 15 godina. Specijalizovani smo za brz dolazak, stručno
                šlepanje i sve vrste mehaničkih popravki – sve pod jednim krovom.
              </p>
              <p>
                <strong className="text-white">Šlep služba Beograd</strong> – naša vozila
                pokrivaju ceo Beograd i okolna mesta, uključujući Zemun, Novi Beograd,
                Surčin, Obrenovac, Barajevo, Grocku, Palilulu i ostatak Beogradskog regiona.
                Dolazimo brzo, danju i noću, vikendom i praznicima – jer kvari se ne
                biraju vreme.
              </p>
              <p>
                Naš <strong className="text-white">autoservis Beograd</strong> opremljen je
                savremenom kompjuterskom dijagnostičkom opremom. Servisiramo sve marke i
                modele putničkih vozila i lakih komercijalnih vozila – bez obzira da li vozite
                Volkswagen, BMW, Mercedes, Renault, Peugeot, Fiat, Toyota, ili bilo koji drugi
                auto.
              </p>
              <p>
                Pored mehaničkih popravki, nudimo i <strong className="text-white">klima servis
                automobila Beograd</strong> – punjenje rashladnog sredstva, detekciju curenja
                i dezinfekciju sistema. Preporučujemo servis klime jednom godišnje, pre
                početka letnje sezone.
              </p>
              <p>
                Ono što nas izdvaja od konkurencije je kompletna usluga:{" "}
                <strong className="text-white">šlepamo vaš auto direktno u naš servis</strong>.
                Ne morate da tražite šlep i poseban autoservis Beograd – mi rešavamo sve od
                mesta kvara do završenog popravka. Transparentno informišemo o svakom koraku
                i ne pravimo skrivene troškove. Klijenti koji jednom dođu k nama, ostaju jer
                znaju da će dobiti poštenu uslugu po fer ceni.
              </p>
            </div>
          </AnimatedSection>

          {/* Stats / highlights */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "15+", label: "Godina iskustva", color: "#e63946" },
                { value: "0-24", label: "Dostupnost", color: "#f59e0b" },
                { value: "Sve marke", label: "Vozila u servisu", color: "#3b82f6" },
                { value: "1 poziv", label: "Rešava sve", color: "#10b981" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0f1117] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-white/10 transition-colors"
                >
                  <div
                    className="text-4xl md:text-5xl font-black mb-2"
                    style={{
                      fontFamily: "var(--font-barlow), system-ui, sans-serif",
                      fontWeight: 900,
                      color: stat.color,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[#94a3b8] text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Service area note */}
            <div className="mt-6 bg-[#0f1117] border border-white/5 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b] shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1" style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 700 }}>
                    Oblast pokrivenosti
                  </h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">
                    Beograd i okolina – Zemun, Novi Beograd, Surčin, Obrenovac,
                    Barajevo, Grocka, Palilula, Voždovac, Čukarica i šira okolina.
                    Za udaljenija mesta – nazovite za potvrdu.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
