import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JobberForm from "@/components/JobberForm";
import ElfsightReviews from "@/components/ElfsightReviews";


export const metadata: Metadata = {
  title: "Window & Exterior Cleaning Eastern Suburbs Sydney | Rivergum Services",
  description:
    "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing across Sydney's Eastern Suburbs. Rivergum Services — fully insured, locally owned. Get a free quote today.",
  alternates: { canonical: "/" },
};

const services = [
  {
    slug: "window-cleaning",
    title: "Residential Window Cleaning",
    description:
      "Crystal clear windows for your home. We handle single-storey and multi-storey properties with care and precision, leaving every pane spotless.",
    note: "Single, double & three storey properties",
    icon: (
      <svg aria-hidden="true" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    slug: "commercial-window-cleaning",
    title: "Commercial Window Cleaning",
    description:
      "Professional cleaning for offices, shops, and commercial buildings. Keep your business looking sharp and make the right impression on clients.",
    icon: (
      <svg aria-hidden="true" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    slug: "solar-panel-cleaning",
    title: "Solar Panel Cleaning",
    description:
      "Dirty panels lose up to 25% efficiency. Our specialist cleaning restores peak performance and maximises your energy return.",
    icon: (
      <svg aria-hidden="true" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning",
    description:
      "Blocked gutters invite water damage and pests. We safely clear leaves, debris, and buildup to keep water flowing freely.",
    icon: (
      <svg aria-hidden="true" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    description:
      "Driveways, pathways, decks, and facades revived. High-pressure washing strips away years of grime, moss, and stains.",
    icon: (
      <svg aria-hidden="true" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.809 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
];

const trustPoints = [
  {
    title: "Fully Insured",
    description: "Complete peace of mind — we carry full public liability insurance on every job.",
  },
  {
    title: "Locally Owned",
    description: "A family-run Eastern Suburbs business, invested in our community and reputation.",
  },
  {
    title: "Eastern Suburbs Based",
    description: "We know the area. Fast response times and local knowledge you can rely on.",
  },
  {
    title: "Satisfaction Guarantee",
    description: "Not happy? We'll come back and make it right — no questions asked.",
  },
  {
    title: "Experienced Team",
    description: "Trained, professional cleaners with years of experience across the Eastern Suburbs.",
  },
];

const galleryImages = [
  { src: "/images/before-after/Before and After 5.png", alt: "Before and after window cleaning in Sydney's Eastern Suburbs" },
  { src: "/images/before-after/Before and After 6.png", alt: "Before and after exterior surface cleaning Eastern Suburbs" },
  { src: "/images/before-after/Before and After 2.png", alt: "Before and after professional window cleaning result" },
  { src: "/images/before-after/Before and After 1.png", alt: "Before and after residential window cleaning" },
];

export default function Home() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="bg-[#fafafa] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 lg:min-h-[88vh]">

          {/* Text column */}
          <div className="flex flex-col justify-center pt-16 pb-10 lg:py-0 lg:pr-12">
            <div className="flex items-center gap-4 mb-10">
              <span aria-hidden="true" className="block w-10 h-px bg-[#8da59b]" />
              <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
                Eastern Suburbs Sydney
              </span>
            </div>
            <h1 className="font-serif font-light text-[#1b1b1b] text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-7">
              Window &amp; Exterior<br />
              Cleaning,{" "}
              <span className="italic text-[#8da59b]">Done Properly.</span>
            </h1>
            <p className="font-sans text-gray-500 text-lg max-w-md mb-10 leading-relaxed font-light">
              Professional, reliable, and fully insured. Trusted by homeowners and businesses
              across Bondi, Vaucluse, Rose Bay and beyond.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="#contact"
                className="bg-[#c9a35b] text-[#1b1b1b] font-sans font-medium text-sm px-10 py-4 hover:bg-[#b8923f] transition-colors tracking-wide"
              >
                Get a Free Quote
              </a>
              <a
                href="/estimator"
                className="bg-[#8da59b] text-[#1b1b1b] font-sans font-medium text-sm px-10 py-4 hover:bg-[#7d978d] transition-colors tracking-wide"
              >
                Get an Estimate
              </a>
              <a
                href="#services"
                className="border border-[#8da59b] text-[#1b1b1b] font-sans font-medium text-sm px-10 py-4 hover:bg-[#8da59b]/10 transition-colors tracking-wide"
              >
                Our Services
              </a>
            </div>
            <div className="mt-14 flex items-center">
              {[
                { value: "500+", label: "Jobs Completed" },
                { value: "5★", label: "Average Rating" },
                { value: "100%", label: "Fully Insured" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  {i > 0 && <div aria-hidden="true" className="h-8 w-px bg-gray-200 mx-4 md:mx-8" />}
                  <div>
                    <div className="font-serif text-2xl font-light text-[#1b1b1b]">{stat.value}</div>
                    <div className="font-sans text-xs text-gray-400 mt-0.5 uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="relative h-72 sm:h-96 lg:h-auto">
            <Image
              src="/images/videos/Water%20Fed%20Clean%20External%20-%20long.jpg"
              alt="Rivergum Services technician using a water-fed pole to clean windows on a Sydney Eastern Suburbs property"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              What We Do
            </span>
            <h2 className="font-serif font-light text-[#1b1b1b] text-4xl md:text-5xl mt-2 mb-3">
              Our Services
            </h2>
            <p className="font-sans text-gray-500 text-base max-w-md font-light leading-relaxed">
              From sparkling windows to spotless solar panels — every job done with care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white p-8 hover:bg-[#fafafa] transition-colors duration-200 flex flex-col"
              >
                <div className="text-[#8da59b] mb-6 group-hover:text-[#c9a35b] transition-colors duration-200">
                  {service.icon}
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1b1b1b] mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed font-light flex-1">
                  {service.description}
                </p>
                {"note" in service && service.note && (
                  <p className="font-sans text-[#8da59b] text-xs font-medium mt-3 tracking-wide">
                    {service.note}
                  </p>
                )}
                <span className="mt-4 font-sans text-xs text-[#c9a35b] font-medium opacity-0 group-hover:opacity-100 transition-opacity tracking-wide">
                  Learn more →
                </span>
              </Link>
            ))}
            {/* CTA tile */}
            <div className="bg-[#1b1b1b] p-8 flex flex-col justify-between">
              <div>
                <span className="font-sans text-[#c9a35b] text-xs uppercase tracking-[0.2em] font-medium">
                  Get in touch
                </span>
                <h3 className="font-serif font-light text-white text-2xl mt-3 mb-3 leading-snug">
                  Not sure what<br />you need?
                </h3>
                <p className="font-sans text-gray-400 text-sm leading-relaxed font-light">
                  We&apos;ll assess your property and recommend the right service.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-block bg-[#c9a35b] text-[#1b1b1b] font-sans font-medium text-sm px-6 py-3 hover:bg-[#b8923f] transition-colors w-fit tracking-wide"
              >
                Ask Us Anything →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Estimator CTA ── */}
      <section className="py-20 px-6 bg-[#8da59b]">
        <div className="max-w-5xl mx-auto md:flex md:items-center md:justify-between md:gap-12">
          <div className="mb-8 md:mb-0">
            <h2 className="font-serif font-light text-white text-3xl md:text-4xl mb-3 leading-tight">
              Wondering What It Might Cost?
            </h2>
            <p className="font-sans text-white/80 font-light max-w-lg leading-relaxed">
              Use our free instant estimator to get a price range for your job in under 2 minutes. No obligation, no phone call needed.
            </p>
          </div>
          <a
            href="/estimator"
            className="flex-shrink-0 inline-block bg-white text-[#1b1b1b] font-sans font-medium text-sm px-10 py-4 hover:bg-white/90 transition-colors tracking-wide whitespace-nowrap"
          >
            Try the Free Estimator →
          </a>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              Our Promise
            </span>
            <h2 className="font-serif font-light text-[#1b1b1b] text-4xl md:text-5xl mt-2 mb-3">
              Why Choose Rivergum?
            </h2>
            <p className="font-sans text-gray-500 text-base max-w-md font-light leading-relaxed">
              We take pride in doing the job right, every single time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((point) => (
              <div key={point.title} className="bg-white p-7 border border-gray-100">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-[#c9a35b] mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="font-serif font-medium text-[#1b1b1b] text-lg mb-2">{point.title}</h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed font-light">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Suburbs ── */}
      <section id="suburbs" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              Coverage
            </span>
            <h2 className="font-serif font-light text-[#1b1b1b] text-4xl md:text-5xl mt-2 mb-3">
              Suburbs We Service
            </h2>
            <p className="font-sans text-gray-500 text-base max-w-md font-light leading-relaxed">
              We work across greater Sydney — here&apos;s where you&apos;ll find us.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
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
            ].map(({ region, suburbs }) => (
              <div key={region}>
                <p className="font-sans text-[#8da59b] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  {region}
                </p>
                <div className="flex flex-wrap gap-2">
                  {suburbs.map((suburb) => (
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
          <p className="font-sans text-gray-400 text-sm mt-10">
            Don&apos;t see your suburb?{" "}
            <a href="#contact" className="text-[#8da59b] underline underline-offset-2 hover:text-[#7d978d] transition-colors">
              Get in touch
            </a>{" "}
            — we may still be able to help.
          </p>
        </div>
      </section>

      {/* ── Video Banner ── */}
      <section className="relative overflow-hidden h-72 sm:h-80 md:h-[420px]">
        {/* Mobile: static background image */}
        <div
          aria-hidden="true"
          className="md:hidden absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/before-after/Before%20and%20After%205.png')" }}
        />
        {/* Desktop: autoplay video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/videos/Video%20-%20Satisfying%20Clean%20%28music%29.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 bg-[#1b1b1b]/60" />
        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <div>
            <span aria-hidden="true" className="block w-8 h-px bg-[#c9a35b] mx-auto mb-6" />
            <h2 className="font-serif font-light text-white text-3xl md:text-5xl leading-tight max-w-2xl">
              Trusted by homeowners across Sydney
            </h2>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-24 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              Reviews
            </span>
          </div>
          <ElfsightReviews />
        </div>
      </section>

      {/* ── Our Work Gallery ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              Our Work
            </span>
            <h2 className="font-serif font-light text-[#1b1b1b] text-4xl md:text-5xl mt-2 mb-3">
              Before &amp; After
            </h2>
            <p className="font-sans text-gray-500 text-base max-w-md font-light leading-relaxed">
              See the difference a professional clean makes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {galleryImages.map((img) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={1200}
                height={800}
                style={{ width: "100%", height: "auto" }}
                className="block"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <JobberForm />

    </main>
  );
}
