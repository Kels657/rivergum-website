import type { Metadata } from "next";
import Estimator from "@/components/Estimator";

export const metadata: Metadata = {
  title: "Job Cost Estimator | Rivergum Services Sydney",
  description:
    "Get an instant price estimate for window cleaning, solar panel cleaning, gutter cleaning and pressure washing. Answer a few quick questions and see a tailored estimate in seconds.",
  alternates: { canonical: "/estimator" },
};

export default function EstimatorPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-[#fafafa] pt-16 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-8 h-px bg-[#8da59b]" />
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              Instant Pricing
            </span>
          </div>
          <h1 className="font-serif font-light text-[#1b1b1b] text-4xl md:text-6xl leading-[1.1] mb-5 max-w-3xl">
            Get an Estimate
          </h1>
          <p className="font-sans text-gray-500 text-lg max-w-xl font-light leading-relaxed">
            Answer a few quick questions and get an instant price guide — no obligation, no sign-up required.
          </p>
        </div>
      </section>

      {/* ── Estimator ── */}
      <section className="py-20 px-6 bg-white">
        <Estimator />
      </section>
    </main>
  );
}
