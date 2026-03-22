import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Akcije i Popusti | Šlep Služba i Autoservis Živković Beograd",
  description:
    "Posebni popusti za trudnice, studente i penzionere. Šlep Živković Beograd – povoljne cene i specijalne akcije tokom cele godine.",
  openGraph: {
    title: "Akcije i Popusti – Šlep Živković Beograd",
    description:
      "Trudnice 20% popusta na šlep, studenti 5% popusta na servis. Pogledajte sve naše aktuelne akcije.",
    locale: "sr_RS",
    type: "website",
  },
};

const akcije = [
  {
    id: 1,
    tag: "Aktivna akcija",
    tagColor: "bg-[#e63946]",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    iconBg: "bg-pink-500/10 text-pink-400",
    discount: "20%",
    discountLabel: "popusta",
    title: "Trudnice – popust na šlep",
    description:
      "Sve trudnice ostvaruju pravo na 20% popusta na uslugu šlep vozila. Samo pokažite dokumentaciju na licu mesta i popust se primenjuje odmah.",
    conditions: [
      "Važi za sve trudnice bez obzira na termin",
      "Potrebno je pokazati lekarsku dokumentaciju",
      "Važi na teritoriji Beograda i okoline",
      "Ne kombinuje se sa drugim akcijama",
    ],
    validity: "Bez vremenskog ograničenja",
  },
  {
    id: 2,
    tag: "Aktivna akcija",
    tagColor: "bg-[#e63946]",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    iconBg: "bg-blue-500/10 text-blue-400",
    discount: "5%",
    discountLabel: "popusta",
    title: "Studenti – popust na servis",
    description:
      "Studenti imaju pravo na 5% popusta na sve usluge u autoservisu. Važi za sve vrste popravki – od zamene ulja do kompleksnih radova.",
    conditions: [
      "Važi uz važeći studentski index ili karticu",
      "Primenjuje se na sve usluge autoservisa",
      "Važi tokom cele godine",
      "Ne kombinuje se sa drugim akcijama",
    ],
    validity: "Bez vremenskog ograničenja",
  },
];

export default function AkcijePage() {
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
            <span className="text-[#94a3b8]">Akcije</span>
          </nav>

          <p className="text-[#e63946] font-semibold uppercase tracking-widest text-sm mb-3">
            Specijalne ponude
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
          >
            Aktuelne akcije i popusti
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl">
            Brinemo o svim kategorijama vozača. Pogledajte naše specijalne popuste i iskoristite ih
            pri sledećem pozivu.
          </p>
        </div>
      </div>

      {/* Akcije cards */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {akcije.map((akcija) => (
            <article
              key={akcija.id}
              className="bg-[#1a1f2e] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 flex flex-col"
            >
              {/* Card top accent */}
              <div className="h-1 w-full bg-gradient-to-r from-[#e63946] to-[#f59e0b]" />

              <div className="p-8 flex flex-col gap-6 flex-1">
                {/* Tag + Icon row */}
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`inline-block ${akcija.tagColor} text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full`}
                  >
                    {akcija.tag}
                  </span>
                  <div className={`shrink-0 p-3 rounded-xl ${akcija.iconBg}`}>
                    {akcija.icon}
                  </div>
                </div>

                {/* Discount badge */}
                <div className="flex items-end gap-3">
                  <span
                    className="text-6xl font-black text-white leading-none"
                    style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
                  >
                    {akcija.discount}
                  </span>
                  <span className="text-[#94a3b8] text-lg mb-2">{akcija.discountLabel}</span>
                </div>

                {/* Title + description */}
                <div>
                  <h2
                    className="text-2xl font-black text-white mb-2"
                    style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
                  >
                    {akcija.title}
                  </h2>
                  <p className="text-[#94a3b8] leading-relaxed">{akcija.description}</p>
                </div>

                {/* Conditions */}
                <ul className="flex flex-col gap-2">
                  {akcija.conditions.map((cond, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                      <svg
                        className="w-4 h-4 text-[#e63946] shrink-0 mt-0.5"
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
                      {cond}
                    </li>
                  ))}
                </ul>

                {/* Validity footer */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#64748b]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {akcija.validity}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Info box */}
        <div className="mt-10 bg-[#f59e0b]/5 border border-[#f59e0b]/20 rounded-2xl p-6 flex gap-4">
          <svg
            className="w-6 h-6 text-[#f59e0b] shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-[#94a3b8] text-sm leading-relaxed">
            Popusti se ne kombinuju međusobno niti sa drugim specijalnim ponudama. Za sve dodatne
            informacije o uslovima korišćenja popusta, slobodno nas kontaktirajte.
          </p>
        </div>

        {/* CTA strip */}
        <div className="mt-16 bg-[#1a1f2e] border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2
              className="text-2xl md:text-3xl font-black text-white mb-2"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
            >
              Iskoristite popust odmah
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
      </main>
    </div>
  );
}
