import { notFound } from "next/navigation";
import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { areas, getArea, getNeighbors } from "@/lib/areaData";
import { services } from "@/lib/serviceData";

export async function generateStaticParams() {
  return areas.map((a) => ({ suburb: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ suburb: string }>;
}): Promise<Metadata> {
  const { suburb } = await params;
  const area = getArea(suburb);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `/areas/${suburb}` },
  };
}

const trustPoints = [
  {
    heading: "We know your suburb",
    body: (name: string) =>
      `We work regularly in ${name} and the surrounding streets — so we understand local property styles, access requirements, and the coastal conditions that affect exterior surfaces here.`,
  },
  {
    heading: "Fast, reliable turnaround",
    body: () =>
      "Being local means we can respond quickly, fit around your schedule, and show up on time — no long waits or out-of-area travel fees.",
  },
  {
    heading: "Fully insured, no surprises",
    body: () =>
      "Rivergum Services is fully insured for all residential and commercial work. Every job comes with an upfront quote and a satisfaction guarantee.",
  },
];

export default async function AreaPage({
  params,
}: {
  params: Promise<{ suburb: string }>;
}) {
  const { suburb } = await params;
  const area = getArea(suburb);
  if (!area) notFound();

  const neighbors = getNeighbors(area.neighbors);

  return (
    <main>

      {/* ── Hero ── */}
      <section className="bg-[#fafafa] pt-16 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-10">
            <a
              href="/"
              className="font-sans text-sm text-[#8da59b] hover:text-[#7d978d] transition-colors tracking-wide"
            >
              ← Back to Home
            </a>
          </div>

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-8 h-px bg-[#8da59b]" />
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              Eastern Suburbs Sydney
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif font-light text-[#1b1b1b] text-4xl md:text-6xl leading-[1.1] mb-5 max-w-3xl">
            Window & Exterior Cleaning in {area.name}
          </h1>

          {/* Intro */}
          <p className="font-sans text-gray-500 text-lg max-w-xl font-light leading-relaxed mb-8">
            {area.intro}
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-block bg-[#c9a35b] text-[#1b1b1b] font-sans font-medium text-sm px-10 py-4 hover:bg-[#b8923f] transition-colors tracking-wide"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              What We Offer
            </span>
            <h2 className="font-serif font-light text-[#1b1b1b] text-3xl md:text-4xl mt-2">
              Our Services in {area.name}
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-center justify-between py-6 gap-6 hover:bg-[#fafafa] -mx-4 px-4 transition-colors"
              >
                <div>
                  <p className="font-serif font-light text-[#1b1b1b] text-xl group-hover:text-[#8da59b] transition-colors">
                    {service.name}
                  </p>
                  <p className="font-sans text-gray-500 text-sm font-light mt-1">
                    {service.subtitle}
                  </p>
                </div>
                <span className="font-sans text-[#8da59b] text-sm flex-shrink-0 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Local ── */}
      <section className="py-20 px-6 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              Why Local Matters
            </span>
            <h2 className="font-serif font-light text-[#1b1b1b] text-3xl md:text-4xl mt-2">
              Why choose a local cleaner?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {trustPoints.map((point) => (
              <div key={point.heading}>
                <div className="w-8 h-px bg-[#c9a35b] mb-5" />
                <h3 className="font-serif font-light text-[#1b1b1b] text-xl mb-3">
                  {point.heading}
                </h3>
                <p className="font-sans text-gray-500 text-sm font-light leading-relaxed">
                  {point.body(area.name)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nearby Suburbs ── */}
      {neighbors.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
                Also Nearby
              </span>
              <h2 className="font-serif font-light text-[#1b1b1b] text-3xl md:text-4xl mt-2 mb-1">
                Suburbs We Also Service
              </h2>
              <p className="font-sans text-gray-500 text-sm font-light mt-2">
                We work throughout the Eastern Suburbs — including these areas near {area.name}.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {neighbors.map((neighbor) => (
                <a
                  key={neighbor.slug}
                  href={`/areas/${neighbor.slug}`}
                  className="group border border-gray-200 px-5 py-4 hover:border-[#8da59b] transition-colors"
                >
                  <p className="font-serif font-light text-[#1b1b1b] text-base group-hover:text-[#8da59b] transition-colors">
                    {neighbor.name}
                  </p>
                  <p className="font-sans text-[#8da59b] text-xs mt-1 group-hover:translate-x-0.5 transition-transform">
                    View area →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Quote Form ── */}
      <QuoteForm />

    </main>
  );
}
