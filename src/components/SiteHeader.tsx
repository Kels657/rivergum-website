import { areas } from "@/lib/areaData";
import MobileMenu from "@/components/MobileMenu";

export default function SiteHeader() {
  return (
    <header className="bg-[#8da59b] sticky top-0 z-50 border-b border-[#7d978d]">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <a href="/" className="select-none">
          <span className="font-serif text-[#1b1b1b] text-xl font-medium tracking-wide">
            Rivergum <span className="font-light italic">Services</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-sans text-sm text-[#1b1b1b]/75 tracking-wide" aria-label="Main navigation">
          <a href="/#services" className="hover:text-[#1b1b1b] transition-colors">Services</a>

          {/* Areas dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-[#1b1b1b] transition-colors cursor-default select-none">
              Areas
              <svg aria-hidden="true" className="w-3 h-3 mt-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <div className="bg-white border border-gray-200 shadow-lg py-4 px-5 w-64">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {areas.map((area) => (
                    <a
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      className="font-sans text-sm text-[#1b1b1b]/70 hover:text-[#8da59b] transition-colors whitespace-nowrap"
                    >
                      {area.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a href="/#contact" className="hover:text-[#1b1b1b] transition-colors">Contact</a>
        </nav>

        <a
          href="/#contact"
          className="hidden md:inline-block bg-[#c9a35b] text-[#1b1b1b] font-sans font-medium text-sm px-6 py-2.5 hover:bg-[#b8923f] transition-colors tracking-wide"
        >
          Get a Free Quote
        </a>

        <MobileMenu />
      </div>
    </header>
  );
}
