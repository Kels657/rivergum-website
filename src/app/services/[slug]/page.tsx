import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import JobberForm from "@/components/JobberForm";
import { services, getService } from "@/lib/serviceData";

const serviceAreaRegions = [
  {
    region: "Eastern Suburbs",
    suburbs: ["Bondi", "Coogee", "Randwick", "Vaucluse", "Rose Bay", "Double Bay", "Surry Hills", "Paddington", "Woollahra", "Maroubra", "Bronte", "Tamarama", "Waverley", "Bellevue Hill"],
  },
  {
    region: "Inner West",
    suburbs: ["Marrickville", "Newtown", "Glebe", "Leichhardt", "Balmain", "Rozelle", "Annandale", "Petersham", "Stanmore", "Dulwich Hill", "Tempe"],
  },
  {
    region: "Lower North Shore",
    suburbs: ["North Sydney", "Kirribilli", "McMahons Point", "Neutral Bay", "Cremorne", "Mosman"],
  },
  {
    region: "Northern Suburbs",
    suburbs: ["Chatswood", "Willoughby", "Artarmon", "St Leonards", "Crows Nest", "Waverton"],
  },
  {
    region: "Northern Beaches",
    suburbs: ["Manly", "Fairlight", "Balgowlah", "Seaforth", "Clontarf"],
  },
  {
    region: "Sutherland Shire",
    suburbs: ["Sutherland", "Cronulla", "Miranda", "Caringbah", "Gymea", "Kirrawee"],
  },
  {
    region: "Inner South",
    suburbs: ["Erskineville", "Alexandria", "Waterloo", "Zetland", "Beaconsfield", "Mascot"],
  },
];

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

      {/* ── Before & After ── */}
      {service.images && service.images.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
                Our Work
              </span>
              <h2 className="font-serif font-light text-[#1b1b1b] text-3xl md:text-4xl mt-2">
                Before &amp; After
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.images.map((img) => (
                <div key={img.src} className="relative aspect-video overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Videos ── */}
      {service.videos && service.videos.length > 0 && (
        <section className="py-20 px-6 bg-[#fafafa]">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
                See Us In Action
              </span>
              <h2 className="font-serif font-light text-[#1b1b1b] text-3xl md:text-4xl mt-2">
                Watch Us Work
              </h2>
            </div>
            <div className={`grid grid-cols-1 ${service.videos.length > 1 ? "sm:grid-cols-2" : ""} gap-6`}>
              {service.videos.map((src) => (
                <video
                  key={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full aspect-video object-cover bg-black"
                >
                  <source src={src} type="video/mp4" />
                </video>
              ))}
            </div>
          </div>
        </section>
      )}

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
              We work across greater Sydney — here&apos;s where you&apos;ll find us.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreaRegions.map(({ region, suburbs: regionSuburbs }) => (
              <div key={region}>
                <p className="font-sans text-[#8da59b] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  {region}
                </p>
                <div className="flex flex-wrap gap-2">
                  {regionSuburbs.map((suburb) => (
                    <span
                      key={suburb}
                      className="bg-[#8da59b]/15 text-[#1b1b1b] border border-[#8da59b]/30 px-4 py-1.5 rounded-full font-sans text-sm font-medium tracking-wide"
                    >
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>
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

      {/* ── Estimator callout ── */}
      <section className="py-12 px-6 bg-[#c9a35b]">
        <div className="max-w-5xl mx-auto sm:flex sm:items-center sm:justify-between sm:gap-12">
          <div className="mb-6 sm:mb-0">
            <p className="font-serif font-light text-[#1b1b1b] text-xl md:text-2xl leading-snug">
              Wondering about the cost?
            </p>
            <p className="font-sans text-[#1b1b1b]/70 text-sm font-light mt-1 leading-relaxed">
              Try our free instant price estimator and get a ballpark figure in under 2 minutes.
            </p>
          </div>
          <a
            href="/estimator"
            className="flex-shrink-0 inline-block bg-[#1b1b1b] text-white font-sans font-medium text-sm px-8 py-3.5 hover:bg-[#1b1b1b]/80 transition-colors tracking-wide whitespace-nowrap"
          >
            Try the Estimator →
          </a>
        </div>
      </section>

      {/* ── Quote Form ── */}
      <JobberForm />

    </main>
  );
}
