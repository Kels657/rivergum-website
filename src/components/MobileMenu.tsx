"use client";

import { useState } from "react";
import { areas } from "@/lib/areaData";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  function close() {
    setOpen(false);
    setAreasOpen(false);
  }

  return (
    <>
      <button
        onClick={() => { setOpen(!open); if (open) setAreasOpen(false); }}
        className="md:hidden flex items-center justify-center w-9 h-9 text-[#1b1b1b]/75 hover:text-[#1b1b1b] transition-colors"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
      >
        {open ? (
          <svg aria-hidden="true" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg aria-hidden="true" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {open && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-[#8da59b] border-t border-[#7d978d] px-6 py-5 shadow-lg">
          <nav className="font-sans text-sm text-[#1b1b1b]/80 space-y-1" aria-label="Mobile navigation">
            <a
              href="/#services"
              className="block py-2.5 hover:text-[#1b1b1b] transition-colors"
              onClick={close}
            >
              Services
            </a>

            <div>
              <button
                onClick={() => setAreasOpen(!areasOpen)}
                className="flex items-center gap-1.5 py-2.5 w-full hover:text-[#1b1b1b] transition-colors"
                aria-expanded={areasOpen}
              >
                Areas
                <svg
                  aria-hidden="true"
                  className={`w-3 h-3 transition-transform duration-200 ${areasOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {areasOpen && (
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 pb-3 pl-2 pt-1">
                  {areas.map((area) => (
                    <a
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      className="text-[#1b1b1b]/70 hover:text-[#1b1b1b] transition-colors text-xs py-0.5"
                      onClick={close}
                    >
                      {area.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/#contact"
              className="block py-2.5 hover:text-[#1b1b1b] transition-colors"
              onClick={close}
            >
              Contact
            </a>

            <div className="pt-3 border-t border-[#7d978d]/50 mt-2">
              <a
                href="/#contact"
                className="block text-center bg-[#c9a35b] text-[#1b1b1b] font-medium py-3 hover:bg-[#b8923f] transition-colors tracking-wide"
                onClick={close}
              >
                Get a Free Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
