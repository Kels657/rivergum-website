"use client";

import { useState } from "react";

interface QuoteFormProps {
  defaultService?: string;
}

export default function QuoteForm({ defaultService = "" }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    suburb: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#1b1b1b]">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[#c9a35b] text-xs font-medium uppercase tracking-[0.22em]">
            Free Quote
          </span>
          <h2 className="font-serif font-light text-white text-4xl md:text-5xl mt-3 mb-3">
            Get a Free Quote
          </h2>
          <p className="font-sans text-gray-400 font-light">
            Fill in your details and we&apos;ll respond within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white p-12 text-center">
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-5">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-[#c9a35b]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-serif font-light text-[#1b1b1b] text-2xl mb-2">
              Thanks — we&apos;ll be in touch.
            </h3>
            <p className="font-sans text-gray-500 text-sm font-light">
              We&apos;ll respond within 24 hours with your free, no-obligation quote.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-sans text-xs font-medium text-[#1b1b1b] uppercase tracking-wider mb-2">
                  Full Name <span className="text-[#c9a35b]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 px-4 py-3 font-sans text-sm text-[#1b1b1b] focus:outline-none focus:border-[#8da59b] transition-colors placeholder:text-gray-300"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label className="block font-sans text-xs font-medium text-[#1b1b1b] uppercase tracking-wider mb-2">
                  Phone <span className="text-[#c9a35b]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 px-4 py-3 font-sans text-sm text-[#1b1b1b] focus:outline-none focus:border-[#8da59b] transition-colors placeholder:text-gray-300"
                  placeholder="0439 881 460"
                />
              </div>
            </div>

            <div>
              <label className="block font-sans text-xs font-medium text-[#1b1b1b] uppercase tracking-wider mb-2">
                Email <span className="text-[#c9a35b]">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-200 px-4 py-3 font-sans text-sm text-[#1b1b1b] focus:outline-none focus:border-[#8da59b] transition-colors placeholder:text-gray-300"
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label className="block font-sans text-xs font-medium text-[#1b1b1b] uppercase tracking-wider mb-2">
                Service Required <span className="text-[#c9a35b]">*</span>
              </label>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-200 px-4 py-3 font-sans text-sm text-[#1b1b1b] focus:outline-none focus:border-[#8da59b] transition-colors bg-white appearance-none"
              >
                <option value="">Select a service…</option>
                <option>Residential Window Cleaning</option>
                <option>Commercial Window Cleaning</option>
                <option>Solar Panel Cleaning</option>
                <option>Gutter Cleaning</option>
                <option>Pressure Washing</option>
                <option>Multiple / Unsure</option>
              </select>
            </div>

            <div>
              <label className="block font-sans text-xs font-medium text-[#1b1b1b] uppercase tracking-wider mb-2">
                Suburb <span className="text-[#c9a35b]">*</span>
              </label>
              <input
                type="text"
                name="suburb"
                required
                value={formData.suburb}
                onChange={handleChange}
                className="w-full border border-gray-200 px-4 py-3 font-sans text-sm text-[#1b1b1b] focus:outline-none focus:border-[#8da59b] transition-colors placeholder:text-gray-300"
                placeholder="e.g. Bondi"
              />
            </div>

            <div>
              <label className="block font-sans text-xs font-medium text-[#1b1b1b] uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-200 px-4 py-3 font-sans text-sm text-[#1b1b1b] focus:outline-none focus:border-[#8da59b] transition-colors resize-none placeholder:text-gray-300"
                placeholder="Property type, number of storeys, any special requirements…"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#c9a35b] text-[#1b1b1b] font-sans font-medium py-4 hover:bg-[#b8923f] transition-colors text-sm tracking-widest uppercase"
            >
              Request Free Quote
            </button>

            <p className="text-center font-sans text-xs text-gray-400 font-light">
              No obligation. We respond within 24 hours.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
