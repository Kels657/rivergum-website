import type { Metadata } from "next";
import Image from "next/image";
import JobberForm from "@/components/JobberForm";

export const metadata: Metadata = {
  title: "About Rivergum Services | Aidan Kelso, Sydney Window Cleaner",
  description:
    "Meet Aidan Kelso, the face behind Rivergum Services. A country kid from Orange NSW who brought small-town values to Sydney's Eastern Suburbs — and never looked back.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    heading: "Show up when you say you will",
    body: "The number one complaint about tradespeople is unreliability. It drives me mad too. Every booking gets a confirmation, every job starts on time.",
  },
  {
    heading: "Respect the home",
    body: "Shoes off at the door, drop sheets down, equipment kept tidy. You're letting me into your space — I take that seriously.",
  },
  {
    heading: "Do it properly or not at all",
    body: "I'd rather tell you a job needs more time than rush it and leave a result I'm not proud of. The standard is the same whether you're watching or not.",
  },
  {
    heading: "Be straight with people",
    body: "If your glass has permanent salt etching that a clean won't fix, I'll tell you. If your gutters need attention beyond what I'm there to do, I'll say so.",
  },
];

export default function AboutPage() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="bg-[#fafafa] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 lg:min-h-[80vh]">

          {/* Text column */}
          <div className="flex flex-col justify-center pt-16 pb-10 lg:py-0 lg:pr-12">
            <div className="flex items-center gap-4 mb-10">
              <span aria-hidden="true" className="block w-10 h-px bg-[#8da59b]" />
              <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
                About Rivergum Services
              </span>
            </div>
            <h1 className="font-serif font-light text-[#1b1b1b] text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-7">
              Built on Country Values.{" "}
              <span className="italic text-[#8da59b]">Delivered in the Eastern Suburbs.</span>
            </h1>
            <p className="font-sans text-gray-500 text-lg max-w-md mb-10 leading-relaxed font-light">
              Meet Aidan — the person who will show up on time, take his shoes off at the door,
              and leave your home better than he found it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="bg-[#c9a35b] text-[#1b1b1b] font-sans font-medium text-sm px-10 py-4 hover:bg-[#b8923f] transition-colors tracking-wide"
              >
                Get a Free Quote
              </a>
              <a
                href="/estimator"
                className="border border-[#8da59b] text-[#1b1b1b] font-sans font-medium text-sm px-10 py-4 hover:bg-[#8da59b]/10 transition-colors tracking-wide"
              >
                Try the Estimator
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="relative h-72 sm:h-96 lg:h-auto">
            <Image
              src="/images/videos/Water%20Fed%20Clean%20External%20-%20long.jpg"
              alt="Aidan from Rivergum Services cleaning windows on a Sydney Eastern Suburbs property with a water-fed pole"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>

      {/* ── The Story ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto md:grid md:grid-cols-[1fr_2fr] md:gap-20 md:items-start">

          {/* Label column */}
          <div className="mb-10 md:mb-0 md:pt-2">
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              The Story
            </span>
            <h2 className="font-serif font-light text-[#1b1b1b] text-3xl md:text-4xl mt-2 leading-tight">
              From Orange<br />to the Ocean
            </h2>
          </div>

          {/* Narrative column */}
          <div className="space-y-5 font-sans text-gray-600 text-base leading-relaxed">
            <p>
              I grew up in Orange, in the Central West of NSW. It&apos;s the kind of place where
              tradespeople are known by name, where your reputation follows you to the hardware
              store and the footy oval, and where cutting corners isn&apos;t really an option
              because you&apos;ll see the client again on Saturday. That accountability shapes
              how you work.
            </p>
            <p>
              I moved to Sydney in my twenties and ended up in the Eastern Suburbs — Bondi,
              Coogee, Randwick, the harbour-side streets of Vaucluse and Rose Bay. It&apos;s a
              long way from Orange in every sense. The streets are narrow, the properties are
              dense, and the environmental conditions &mdash; salt air off the ocean, soot from
              flight paths, humidity off the harbour &mdash; are genuinely harder on homes than
              anything I&apos;d seen growing up.
            </p>
            <p>
              I started Rivergum Services because I saw a gap between what clients in this part
              of Sydney needed and what most cleaning businesses were actually delivering. The
              standard complaint wasn&apos;t about quality — it was about reliability. Cleaners
              who didn&apos;t show up, didn&apos;t communicate, and were impossible to rebook.
              That&apos;s a solvable problem.
            </p>
            <p>
              The name comes from where I&apos;m from. River red gums are the trees of inland
              NSW — tough, deep-rooted, shaped by a harsh environment. That&apos;s the idea I
              wanted to carry into the business.
            </p>
            <p>
              These days I work across Sydney&apos;s Eastern Suburbs and surrounding areas,
              cleaning windows, solar panels, gutters and exterior surfaces for homeowners who
              care about their properties. Right now, Rivergum Services is just me. I think
              that&apos;s actually a good thing &mdash; when you book with Rivergum, you get me
              every time. Same standard, same face, same person who will pick up the phone.
            </p>
            <p>
              I&apos;m proud of what we do. There&apos;s something satisfying about looking back
              at a property after a clean and knowing the client is going to be happy when they
              get home.
            </p>
          </div>

        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 px-6 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              How We Work
            </span>
            <h2 className="font-serif font-light text-[#1b1b1b] text-3xl md:text-4xl mt-2">
              The Things That Matter
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.heading} className="bg-white border border-gray-100 p-8">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-[#c9a35b] mb-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="font-serif font-medium text-[#1b1b1b] text-lg mb-3">{v.heading}</h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed font-light">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blockquote ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <span aria-hidden="true" className="block w-8 h-px bg-[#c9a35b] mx-auto mb-8" />
          <blockquote>
            <p className="font-serif font-light italic text-[#1b1b1b] text-2xl md:text-3xl leading-relaxed">
              &ldquo;I want every client to feel the same way I&apos;d want to feel if someone
              came to work on my home — confident they did a proper job, and glad they called.&rdquo;
            </p>
            <footer className="mt-8">
              <span className="font-sans text-gray-400 text-sm tracking-wide">— Aidan, Rivergum Services</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── Services reminder ── */}
      <section className="py-24 px-6 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              What We Do
            </span>
            <h2 className="font-serif font-light text-[#1b1b1b] text-3xl md:text-4xl mt-2 mb-3">
              Our Services
            </h2>
            <p className="font-sans text-gray-500 text-base font-light leading-relaxed max-w-md">
              Every service carried out to the same standard — on time, done properly, and worth
              calling back.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Window Cleaning", slug: "window-cleaning" },
              { name: "Solar Panel Cleaning", slug: "solar-panel-cleaning" },
              { name: "Gutter Cleaning", slug: "gutter-cleaning" },
              { name: "Pressure Washing", slug: "pressure-washing" },
            ].map((s) => (
              <a
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white border border-gray-100 p-6 hover:border-[#8da59b]/40 transition-colors"
              >
                <p className="font-serif font-light text-[#1b1b1b] text-lg mb-3 group-hover:text-[#8da59b] transition-colors">
                  {s.name}
                </p>
                <span className="font-sans text-[#8da59b] text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 px-6 bg-[#c9a35b]">
        <div className="max-w-5xl mx-auto sm:flex sm:items-center sm:justify-between sm:gap-12">
          <div className="mb-6 sm:mb-0">
            <p className="font-serif font-light text-[#1b1b1b] text-xl md:text-2xl leading-snug">
              Ready to book a clean?
            </p>
            <p className="font-sans text-[#1b1b1b]/70 text-sm font-light mt-1 leading-relaxed">
              Get a free quote or use the estimator for an instant price range — no phone call
              needed.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="#contact"
              className="inline-block bg-[#1b1b1b] text-white font-sans font-medium text-sm px-8 py-3.5 hover:bg-[#1b1b1b]/80 transition-colors tracking-wide whitespace-nowrap"
            >
              Get a Free Quote
            </a>
            <a
              href="/estimator"
              className="inline-block border border-[#1b1b1b] text-[#1b1b1b] font-sans font-medium text-sm px-8 py-3.5 hover:bg-[#1b1b1b]/10 transition-colors tracking-wide whitespace-nowrap"
            >
              Try the Estimator
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <JobberForm />

    </main>
  );
}
