"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 17a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zM2 5h3l1.5 7h11L21 5H2zM5.5 12l-1-5"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 5h18M7 5l1 7m8-7l-1 7"
        />
      </svg>
    ),
    title: "Šlep Služba 0-24",
    subtitle: "Brz dolazak, sigurno prevoženje",
    bullets: [
      "Brz dolazak na mesto kvara ili nezgode",
      "Sigurno prevoženje vozila do servisa",
      "Dostupni non-stop – 365 dana u godini",
      "Pokrivamo Beograd i okolna mesta",
    ],
    description:
      "Naša šlep služba Beograd dostupna je 24 časa dnevno, 7 dana u nedelji, tokom cele godine. Imamo opremu za šlepanje svih vrsta putničkih vozila – od malih automobila do kombija. Dolazimo brzo, postupamo pažljivo sa vašim vozilom i transportujemo ga direktno u naš autoservis gde počinje popravka.",
    accent: "#e63946",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Autoservis – Mehanička Radionica",
    subtitle: "Dijagnostika i sve vrste popravki",
    bullets: [
      "Kompjuterska dijagnostika i analiza kvarova",
      "Popravke motora, menjača i transmisije",
      "Servis kočionog sistema i ovjesa",
      "Zamena ulja, filtera i redovni servis",
    ],
    description:
      "Naša mehanička radionica u Beogradu opremljena je savremenom dijagnostičkom opremom za sve marke i modele vozila. Iskusni majstori rešavaju sve vrste kvarova – od jednostavnog servisa do složenih popravki motora i menjača. Transparentno informišemo o svakom koraku i troškovima pre nego što počnemo s radom.",
    accent: "#f59e0b",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Klima Servis Automobila",
    subtitle: "Punjenje i servisiranje klime",
    bullets: [
      "Punjenje rashladnog sredstva (freon R134a/R1234yf)",
      "Detekcija i otklanjanje curenja sistema",
      "Dezinfekcija i čišćenje klima sistema",
      "Priprema vozila za letnju sezonu",
    ],
    description:
      "Klima servis automobila u Beogradu – punimo i servisiramo klimatizacione sisteme svih vrsta vozila. Koristimo modernu opremu za punjenje freona i detekciju curenja. Pre svake letnje sezone preporučujemo pregled i servis klime kako biste putovali komforno i bez neprijatnih iznenađenja.",
    accent: "#3b82f6",
  },
];

export default function Services() {
  return (
    <section
      id="usluge"
      className="py-20 md:py-28 bg-[#0f1117]"
      aria-labelledby="usluge-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#e63946] font-semibold uppercase tracking-widest text-sm mb-3">
            Šta nudimo
          </p>
          <h2
            id="usluge-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white"
            style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
          >
            Naše Usluge
          </h2>
          <p className="mt-4 text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Sve što vašem vozilu treba — na jednom mestu.
          </p>
        </AnimatedSection>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full bg-[#161b27] border border-white/5 rounded-2xl p-7 flex flex-col hover:border-white/10 hover:shadow-2xl hover:shadow-black/40 transition-shadow"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ backgroundColor: `${service.accent}18`, color: service.accent }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 800 }}
                >
                  {service.title}
                </h3>
                <p className="text-[#94a3b8] text-sm mb-5">{service.subtitle}</p>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-6">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-[#cbd5e1] text-sm">
                      <svg
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: service.accent }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Description */}
                <p className="text-[#64748b] text-sm leading-relaxed mt-auto border-t border-white/5 pt-5">
                  {service.description}
                </p>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
