import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPost, getRelatedPosts } from "@/lib/blogData";
import PostWindowCleaning from "@/components/blog/PostWindowCleaning";
import PostSolarPanels from "@/components/blog/PostSolarPanels";
import PostChooseWindowCleaner from "@/components/blog/PostChooseWindowCleaner";
import PostBlockedGutters from "@/components/blog/PostBlockedGutters";
import PostEasternSuburbs from "@/components/blog/PostEasternSuburbs";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${slug}` },
  };
}

const contentMap: Record<string, React.ReactNode> = {
  "how-often-should-you-clean-your-windows-sydney": <PostWindowCleaning />,
  "do-dirty-solar-panels-really-affect-performance": <PostSolarPanels />,
  "how-to-choose-a-window-cleaner-in-sydney": <PostChooseWindowCleaner />,
  "hidden-costs-of-blocked-gutters": <PostBlockedGutters />,
  "why-eastern-suburbs-homes-need-regular-window-cleaning": <PostEasternSuburbs />,
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);

  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-[#fafafa] pt-16 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-10">
            <a
              href="/blog"
              className="font-sans text-sm text-[#8da59b] hover:text-[#7d978d] transition-colors tracking-wide"
            >
              ← Back to Blog
            </a>
          </div>

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-8 h-px bg-[#8da59b]" />
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              {post.category}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif font-light text-[#1b1b1b] text-3xl md:text-5xl leading-[1.1] mb-5">
            {post.title}
          </h1>

          <p className="font-sans text-gray-400 text-sm">{post.dateDisplay}</p>
        </div>
      </section>

      {/* ── Key Takeaways ── */}
      <section className="py-10 px-6 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#8da59b]/8 border border-[#8da59b]/25 p-7">
            <h2 className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em] mb-4">
              Key Takeaways
            </h2>
            <ul className="space-y-2.5">
              {post.keyTakeaways.map((point) => (
                <li key={point} className="flex items-start gap-3">
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Post Content ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-2xl mx-auto">{contentMap[post.slug]}</div>
      </section>

      {/* ── About the Author ── */}
      <section className="py-12 px-6 bg-[#fafafa] border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full bg-[#8da59b] flex items-center justify-center text-white font-sans font-semibold text-base flex-shrink-0">
              A
            </div>
            <div>
              <p className="font-sans font-medium text-[#1b1b1b] text-sm mb-1">Aidan</p>
              <p className="font-sans text-xs text-gray-400 mb-3">
                Founder, Rivergum Services &mdash; Eastern Suburbs Sydney
              </p>
              <p className="font-sans text-gray-500 text-sm leading-relaxed">
                Aidan grew up in regional NSW and has been operating Rivergum Services in
                Sydney&apos;s Eastern Suburbs for several years. He specialises in window
                cleaning, solar panel cleaning, gutter cleaning and pressure washing for
                residential properties across Sydney.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif font-light text-[#1b1b1b] text-2xl md:text-3xl leading-snug mb-4">
            Ready to book a clean?
          </p>
          <p className="font-sans text-gray-500 text-base font-light mb-8 max-w-md mx-auto">
            Use our free instant estimator for a quick price range, or get in touch directly
            to discuss your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/estimator"
              className="inline-block bg-[#c9a35b] text-[#1b1b1b] font-sans font-medium text-sm px-10 py-4 hover:bg-[#b8923f] transition-colors tracking-wide"
            >
              Get an Estimate
            </a>
            <a
              href="/#contact"
              className="inline-block border border-[#1b1b1b] text-[#1b1b1b] font-sans font-medium text-sm px-10 py-4 hover:bg-[#1b1b1b] hover:text-white transition-colors tracking-wide"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* ── Related Posts ── */}
      {related.length > 0 && (
        <section className="py-16 px-6 bg-[#fafafa] border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
                Keep Reading
              </span>
              <h2 className="font-serif font-light text-[#1b1b1b] text-2xl md:text-3xl mt-2">
                Related Articles
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group flex flex-col border border-gray-100 hover:border-[#8da59b]/40 transition-colors bg-white"
                >
                  <div className="bg-[#8da59b]/10 px-5 py-3 border-b border-gray-100">
                    <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.18em]">
                      {rel.category}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <p className="font-sans text-gray-400 text-xs mb-2">{rel.dateDisplay}</p>
                    <h3 className="font-serif font-light text-[#1b1b1b] text-lg leading-snug mb-3 group-hover:text-[#8da59b] transition-colors">
                      {rel.title}
                    </h3>
                    <div className="mt-auto pt-4 border-t border-gray-100">
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
      )}
    </main>
  );
}
