import type { Metadata } from "next";
import JobberForm from "@/components/JobberForm";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Rivergum Services Sydney",
  description:
    "Got questions about window cleaning, solar panel cleaning, gutter cleaning or pressure washing? Find answers to the most common questions about Rivergum Services.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    category: "Window Cleaning",
    items: [
      {
        q: "How often should I get my windows cleaned?",
        a: "For most homes we recommend every three months — once per season — as a minimum, or at least twice a year. If your property is in a high-traffic area or close to the ocean, salt air and pollution can build up faster and you may need more frequent cleans to keep your windows looking their best.",
      },
      {
        q: "How high can you clean?",
        a: "We use a professional water-fed pole system which allows us to safely clean up to three storeys from the ground. We don't offer abseiling or rope access work.",
      },
      {
        q: "Do I need to be home for the clean?",
        a: "No — you don't need to be home. We treat every property like it's the Queen's. We take our shoes off on entry, work carefully around your home, and will lock up on the way out based on your preference. Just let us know your access instructions when you book.",
      },
      {
        q: "How long will the job take?",
        a: "Job length depends on the type of windows, number of windows, and access around your property. We'll give you an honest time estimate when we provide your free quote.",
      },
      {
        q: "Do you use chemicals or detergents?",
        a: "We use a pure water-fed pole system with streak-free techniques. Pure water leaves no residue, meaning your windows stay cleaner for longer compared to traditional methods.",
      },
    ],
  },
  {
    category: "Solar Panels",
    items: [
      {
        q: "Why do solar panels need cleaning?",
        a: "Dust, bird droppings, pollen and grime build up on solar panels over time and can reduce their efficiency by up to 25%. Regular cleaning restores peak performance and maximises your energy output and return on investment.",
      },
      {
        q: "How often should solar panels be cleaned?",
        a: "We recommend at least once or twice a year for most properties. Homes near the ocean, in high-traffic areas, or under trees may benefit from more frequent cleaning.",
      },
      {
        q: "Will cleaning damage my solar panels?",
        a: "Not at all. We use pure water and soft brushes specifically designed for solar panel cleaning — no harsh chemicals or abrasive materials that could scratch or damage the panels or void your warranty.",
      },
    ],
  },
  {
    category: "Gutters",
    items: [
      {
        q: "How often should gutters be cleaned?",
        a: "At least once a year, ideally twice — before winter rains and after autumn leaf fall. Properties surrounded by trees may need more frequent cleans to prevent blockages and water damage.",
      },
      {
        q: "What happens if I don't clean my gutters?",
        a: "Blocked gutters can cause water to overflow into your walls and foundations, attract pests and mosquitoes, and lead to costly water damage repairs. Regular cleaning is far cheaper than the alternative.",
      },
    ],
  },
  {
    category: "Pressure Washing",
    items: [
      {
        q: "What surfaces can you pressure wash?",
        a: "We pressure wash driveways, pathways, decks, patios, building facades, fences and more. If you're not sure whether a surface is suitable, just ask us when you get your quote.",
      },
      {
        q: "Will pressure washing damage my surfaces?",
        a: "We adjust the pressure settings based on the surface type to ensure a thorough clean without any damage. We have experience working on a wide variety of surfaces across Sydney properties.",
      },
    ],
  },
  {
    category: "General",
    items: [
      {
        q: "Are you insured?",
        a: "Yes — we carry full public liability insurance on every job. You can have complete peace of mind knowing your property is protected.",
      },
      {
        q: "Do you service my area?",
        a: "We're based in Sydney's Eastern Suburbs and service a wide area across greater Sydney including the Eastern Suburbs, Inner West, Lower North Shore, Northern Beaches, Sutherland Shire and surrounds. Get in touch and we'll confirm if we cover your area.",
      },
      {
        q: "How do I get a quote?",
        a: "Simply fill in our free quote form on the website and we'll get back to you within 24 hours. There's no obligation and no call-out fee for quotes.",
      },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="bg-[#fafafa] pt-16 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-8 h-px bg-[#8da59b]" />
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              Help &amp; Support
            </span>
          </div>
          <h1 className="font-serif font-light text-[#1b1b1b] text-4xl md:text-6xl leading-[1.1] mb-5 max-w-3xl">
            Frequently Asked Questions
          </h1>
          <p className="font-sans text-gray-500 text-lg max-w-xl font-light leading-relaxed">
            Everything you need to know about our services
          </p>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-16">
          {faqs.map((section) => (
            <div key={section.category}>
              {/* Category heading */}
              <div className="flex items-center gap-4 mb-8">
                <span className="block w-6 h-px bg-[#c9a35b]" />
                <span className="font-sans text-[#8da59b] text-xs font-semibold uppercase tracking-[0.22em]">
                  {section.category}
                </span>
              </div>

              {/* Items */}
              <div className="divide-y divide-gray-100">
                {section.items.map((item) => (
                  <div key={item.q} className="py-7">
                    <h2 className="font-serif font-light text-[#1b1b1b] text-xl leading-snug mb-3">
                      {item.q}
                    </h2>
                    <p className="font-sans text-gray-500 text-base font-light leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-[#fafafa]">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
            Get in Touch
          </span>
          <h2 className="font-serif font-light text-[#1b1b1b] text-3xl md:text-4xl mt-3 mb-4">
            Still have a question?
          </h2>
          <p className="font-sans text-gray-500 font-light mb-8">
            Get in touch and we&apos;ll get back to you within 24 hours.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#c9a35b] text-[#1b1b1b] font-sans font-medium text-sm px-10 py-4 hover:bg-[#b8923f] transition-colors tracking-wide"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* ── Quote Form ── */}
      <JobberForm />
    </main>
  );
}
