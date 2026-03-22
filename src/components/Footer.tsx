export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080b11] border-t border-white/5 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div
              className="text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
            >
              Živković<span className="text-[#e63946]">.</span>
            </div>
            <p className="text-[#64748b] text-sm leading-relaxed mb-4">
              Autoservis i šlep služba u Beogradu. Dostupni 0-24.
            </p>
            <a
              href="tel:+381655703879"
              className="inline-flex items-center gap-2 text-[#e63946] hover:text-white font-bold text-lg transition-colors"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 800 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              065 570 3879
            </a>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-white font-bold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
            >
              Usluge
            </h3>
            <ul className="space-y-2.5">
              {[
                "Šlep služba Beograd 0-24",
                "Autoservis – mehanička radionica",
                "Klima servis automobila",
                "Kompjuterska dijagnostika",
                "Servis kočionog sistema",
                "Zamena ulja i filtera",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#usluge"
                    className="text-[#64748b] hover:text-[#94a3b8] text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3
              className="text-white font-bold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
            >
              Navigacija
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Usluge", href: "#usluge" },
                { label: "O nama", href: "#o-nama" },
                { label: "Kako funkcioniše", href: "#kontakt" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#64748b] hover:text-[#94a3b8] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3
              className="text-white font-bold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
            >
              Informacije
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#e63946] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[#64748b] text-sm">Beograd, Srbija</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#e63946] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-[#64748b] text-sm">Dostupni 0-24, 365 dana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#4a5568] text-sm text-center sm:text-left">
            © {currentYear} Autoservis i Šlep Služba Živković. Sva prava zadržana.
          </p>
          <p className="text-[#4a5568] text-xs text-center">
            Šlep služba Beograd · Autoservis Beograd · Klima servis automobila Beograd
          </p>
        </div>
      </div>
    </footer>
  );
}
