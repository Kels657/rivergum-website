import type { Metadata } from "next";
import { posts } from "@/lib/blogData";

export const metadata: Metadata = {
  title: "Window Cleaning & Home Maintenance Blog | Rivergum Services Sydney",
  description:
    "Expert advice on window cleaning, solar panel cleaning, gutter maintenance and more from Rivergum Services — Sydney's Eastern Suburbs specialists.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-[#fafafa] pt-16 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-8 h-px bg-[#8da59b]" />
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              Advice &amp; Insights
            </span>
          </div>
          <h1 className="font-serif font-light text-[#1b1b1b] text-4xl md:text-6xl leading-[1.1] mb-5 max-w-3xl">
            The Blog
          </h1>
          <p className="font-sans text-gray-500 text-lg max-w-xl font-light leading-relaxed">
            Practical advice on keeping your home looking its best — from someone who works in
            Sydney&apos;s toughest environments every day.
          </p>
        </div>
      </section>

      {/* ── Post Grid ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col border border-gray-100 hover:border-[#8da59b]/40 transition-colors"
              >
                {/* Category bar */}
                <div className="bg-[#8da59b]/10 px-5 py-3 border-b border-gray-100">
                  <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.18em]">
                    {post.category}
                  </span>
                </div>
                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <p className="font-sans text-gray-400 text-xs mb-3">{post.dateDisplay}</p>
                  <h2 className="font-serif font-light text-[#1b1b1b] text-xl leading-snug mb-4 group-hover:text-[#8da59b] transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-sans text-gray-500 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="font-sans text-[#8da59b] text-xs font-medium tracking-wide">
                      Read more →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
