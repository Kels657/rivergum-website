import { notFound } from "next/navigation";
import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { services, getService, suburbs } from "@/lib/serviceData";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

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
            {service.name}
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-gray-500 text-lg max-w-xl font-light leading-relaxed mb-8">
            {service.subtitle}
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

      {/* ── What's Included ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              What We Cover
            </span>
            <h2 className="font-serif font-light text-[#1b1b1b] text-3xl md:text-4xl mt-2">
              What&apos;s Included
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
            {service.included.map((point) => (
              <div key={point} className="flex items-start gap-4">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-[#c9a35b] flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-[#1b1b1b] text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why It Matters ── */}
      <section className="py-20 px-6 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto md:grid md:grid-cols-[1fr_2fr] md:gap-16 md:items-start">
          <div>
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              Why It Matters
            </span>
            <h2 className="font-serif font-light text-[#1b1b1b] text-3xl md:text-4xl mt-2 leading-tight">
              {service.whyItMatters.heading}
            </h2>
          </div>
          <div className="mt-8 md:mt-7 space-y-4">
            {service.whyItMatters.paragraphs.map((para, i) => (
              <p key={i} className="font-sans text-gray-600 text-base leading-relaxed font-light">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Suburbs ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              Coverage
            </span>
            <h2 className="font-serif font-light text-[#1b1b1b] text-3xl md:text-4xl mt-2 mb-1">
              Suburbs We Service
            </h2>
            <p className="font-sans text-gray-500 text-sm font-light mt-2">
              Based in Sydney&apos;s Eastern Suburbs — we&apos;re right around the corner.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {suburbs.map((suburb) => (
              <span
                key={suburb}
                className="bg-[#8da59b]/15 text-[#1b1b1b] border border-[#8da59b]/30 px-5 py-2 rounded-full font-sans text-sm font-medium tracking-wide"
              >
                {suburb}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-20 px-6 bg-[#fafafa]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-gray-100 p-10">
            {/* Stars */}
            <div className="flex gap-0.5 mb-6" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg aria-hidden="true" key={i} className="w-4 h-4 text-[#c9a35b]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            {/* Quote */}
            <p className="font-serif font-light italic text-[#1b1b1b] text-xl leading-relaxed mb-8">
              &ldquo;{service.testimonial.quote}&rdquo;
            </p>
            {/* Attribution */}
            <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
              <div className="w-8 h-8 rounded-full bg-[#8da59b] flex items-center justify-center text-[#1b1b1b] font-sans font-semibold text-xs flex-shrink-0">
                {service.testimonial.name[0]}
              </div>
              <div>
                <p className="font-sans font-medium text-[#1b1b1b] text-sm">
                  {service.testimonial.name}
                </p>
                <p className="font-sans text-xs text-gray-400">{service.testimonial.suburb}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote Form ── */}
      <QuoteForm defaultService={service.name} />

    </main>
  );
}
