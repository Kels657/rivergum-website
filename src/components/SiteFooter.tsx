import { services } from "@/lib/serviceData";

export default function SiteFooter() {
  return (
    <footer className="bg-[#1b1b1b] border-t border-white/5 px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        <div>
          <span className="font-serif text-white text-xl font-medium tracking-wide">
            Rivergum <span className="font-light italic">Services</span>
          </span>
          <p className="font-sans text-gray-500 text-sm leading-relaxed mt-3 font-light">
            Professional window and exterior cleaning for Sydney&apos;s Eastern Suburbs.
            Fully insured, locally owned.
          </p>
        </div>

        <div>
          <h4 className="font-sans text-white text-xs font-medium uppercase tracking-[0.2em] mb-5">
            Contact
          </h4>
          <ul className="space-y-3 font-sans text-sm text-gray-400 font-light">
            <li className="flex items-center gap-3">
              <svg aria-hidden="true" className="w-4 h-4 text-[#8da59b] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <a href="tel:0439881460" className="hover:text-white transition-colors">
                0439 881 460
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg aria-hidden="true" className="w-4 h-4 text-[#8da59b] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:admin@rivergumservices.com.au" className="hover:text-white transition-colors">
                admin@rivergumservices.com.au
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg aria-hidden="true" className="w-4 h-4 text-[#8da59b] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Sydney&apos;s Eastern Suburbs, NSW
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-white text-xs font-medium uppercase tracking-[0.2em] mb-5">
            Services
          </h4>
          <ul className="space-y-2.5 font-sans text-sm text-gray-400 font-light">
            {services.map((s) => (
              <li key={s.slug}>
                <a
                  href={`/services/${s.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 font-sans text-xs text-gray-600">
        <span>© {new Date().getFullYear()} Rivergum Services. All rights reserved.</span>
        <span>Sydney&apos;s Eastern Suburbs, NSW</span>
      </div>
    </footer>
  );
}
