"use client";

import Script from "next/script";

const JOBBER_ID = "b77ce13b-abc5-4027-a029-7f8efe48345a-2191373";
const JOBBER_FORM_URL =
  "https://clienthub.getjobber.com/client_hubs/b77ce13b-abc5-4027-a029-7f8efe48345a/public/work_request/embedded_work_request_form?form_id=2191373";

// Cast required because next/script's types don't include the non-standard
// attributes that Jobber's embed script reads from its own <script> element.
const JobberScript = Script as React.ComponentType<Record<string, unknown>>;

export default function JobberForm() {
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
            Fill in your details and we&apos;ll be in touch shortly.
          </p>
        </div>

        <link
          rel="stylesheet"
          href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
          media="screen"
        />
        <div id={JOBBER_ID} />
        <JobberScript
          src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"
          strategy="afterInteractive"
          clienthub_id={JOBBER_ID}
          form_url={JOBBER_FORM_URL}
        />
      </div>
    </section>
  );
}
