import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Rivergum Services",
  description:
    "Rivergum Services privacy policy — how we collect, use and protect your personal information in accordance with the Australian Privacy Act.",
  alternates: { canonical: "/privacy-policy" },
};

type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  trailingParagraph?: string;
};

const sections: Section[] = [
  {
    heading: "1. Introduction",
    paragraphs: [
      "Rivergum Services is committed to protecting your privacy in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). This policy explains how we collect, use, store and disclose your personal information.",
    ],
  },
  {
    heading: "2. Information We Collect",
    paragraphs: ["We may collect the following personal information:"],
    bullets: [
      "Name, email address, phone number, suburb and property address",
      "Service type and job details",
      "Communications between you and Rivergum Services",
      "Information submitted through our website quote request form, Meta lead ads, LinkedIn lead ads, or direct",
    ],
  },
  {
    heading: "3. How We Collect Your Information",
    paragraphs: ["We collect information:"],
    bullets: [
      "Through our website quote request form (powered by ServiceM8)",
      "Through Meta (Facebook and Instagram) advertising lead forms",
      "Through LinkedIn advertising lead forms",
      "Through direct email, phone or SMS contact",
      "Automatically through website analytics (Google Analytics)",
    ],
  },
  {
    heading: "4. How We Use Your Information",
    paragraphs: ["We use your personal information to:"],
    bullets: [
      "Respond to quote requests and service enquiries",
      "Schedule, manage and deliver cleaning services",
      "Send booking confirmations, service reminders and follow-up communications via email and SMS",
      "Send marketing communications (you may opt out at any time)",
      "Improve our services and website",
      "Meet legal and regulatory obligations",
    ],
  },
  {
    heading: "5. Third Party Services",
    paragraphs: ["We use the following third party platforms that may process your data:"],
    bullets: [
      "ServiceM8 — job management and customer records (servicem8.com)",
      "Meta (Facebook/Instagram) — advertising and lead capture (facebook.com)",
      "LinkedIn — advertising and lead capture (linkedin.com)",
      "Google Analytics — website analytics (google.com)",
      "Elfsight — Google reviews display widget (elfsight.com)",
      "Vercel — website hosting (vercel.com)",
    ],
    trailingParagraph:
      "Each of these services has its own privacy policy. We recommend reviewing them if you have concerns.",
  },
  {
    heading: "6. SMS and Email Communications",
    paragraphs: [
      "By submitting a quote request, you consent to receiving SMS and email communications related to your enquiry. We may also send service reminders, follow-up messages and occasional marketing communications. You can opt out at any time by replying STOP to any SMS or clicking unsubscribe in any email.",
    ],
  },
  {
    heading: "7. Data Storage and Security",
    paragraphs: [
      "Your personal information is stored securely within ServiceM8's infrastructure. We take reasonable steps to protect your information from misuse, loss, unauthorised access and disclosure.",
    ],
  },
  {
    heading: "8. Your Rights",
    paragraphs: ["You have the right to:"],
    bullets: [
      "Request access to the personal information we hold about you",
      "Request correction of inaccurate information",
      "Request deletion of your personal information",
      "Opt out of marketing communications at any time",
    ],
    trailingParagraph: "To exercise any of these rights, contact us at admin@rivergumservices.com.au",
  },
  {
    heading: "9. Cookies and Analytics",
    paragraphs: [
      "Our website uses Google Analytics to collect anonymised data about how visitors use the site. This may include your IP address, browser type, pages visited and time spent on the site. You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.",
    ],
  },
  {
    heading: "10. Changes to This Policy",
    paragraphs: [
      "We may update this privacy policy from time to time. The current version will always be available at rivergumservices.com.au/privacy-policy. Last updated: June 2026.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="bg-[#fafafa] pt-16 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span aria-hidden="true" className="block w-8 h-px bg-[#8da59b]" />
            <span className="font-sans text-[#8da59b] text-xs font-medium uppercase tracking-[0.22em]">
              Legal
            </span>
          </div>
          <h1 className="font-serif font-light text-[#1b1b1b] text-4xl md:text-6xl leading-[1.1] mb-5 max-w-3xl">
            Privacy Policy
          </h1>
          <p className="font-sans text-gray-500 text-lg max-w-xl font-light leading-relaxed">
            How Rivergum Services collects, uses and protects your personal information.
          </p>
        </div>
      </section>

      {/* ── Policy sections ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto divide-y divide-gray-100">
          {sections.map((section) => (
            <div key={section.heading} className="py-10 first:pt-0">
              <h2 className="font-serif font-light text-[#1b1b1b] text-2xl leading-snug mb-4">
                {section.heading}
              </h2>
              {section.paragraphs?.map((p) => (
                <p key={p} className="font-sans text-gray-500 text-base font-light leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2.5 mb-4">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-3 font-sans text-gray-500 text-base font-light leading-relaxed">
                      <span aria-hidden="true" className="block w-1.5 h-1.5 rounded-full bg-[#c9a35b] mt-2.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.trailingParagraph && (
                <p className="font-sans text-gray-500 text-base font-light leading-relaxed">
                  {section.trailingParagraph}
                </p>
              )}
            </div>
          ))}

          {/* 11. Contact Us */}
          <div className="py-10">
            <h2 className="font-serif font-light text-[#1b1b1b] text-2xl leading-snug mb-4">
              11. Contact Us
            </h2>
            <p className="font-sans text-gray-500 text-base font-light leading-relaxed mb-5">
              For any privacy-related questions or requests:
            </p>
            <div className="bg-[#fafafa] border border-gray-100 p-6 font-sans text-base text-[#1b1b1b] leading-relaxed">
              <p className="font-medium">Rivergum Services (The Trustee for Kelso Of The Overflow)</p>
              <p className="text-gray-500 font-light mt-1">ABN: 13 625 052 864</p>
              <p className="text-gray-500 font-light">Kingsford, NSW 2032</p>
              <p className="mt-2">
                <a href="mailto:admin@rivergumservices.com.au" className="text-[#8da59b] hover:text-[#7d978d] transition-colors">
                  admin@rivergumservices.com.au
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* ── Small print ── */}
        <div className="max-w-3xl mx-auto mt-4 pt-6 border-t border-gray-100">
          <p className="font-sans text-gray-400 text-xs font-light leading-relaxed">
            This privacy policy was last updated in June 2026 and applies to Rivergum Services
            (trading name of The Trustee for Kelso Of The Overflow, ABN 13 625 052 864).
          </p>
        </div>
      </section>

    </main>
  );
}
