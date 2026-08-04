export default function ServiceM8Button() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-2xl mx-auto text-center">
        <span className="font-sans text-[#c9a35b] text-xs font-medium uppercase tracking-[0.22em]">
          Free Quote
        </span>
        <h2 className="font-serif font-light text-[#1b1b1b] text-4xl md:text-5xl mt-3 mb-3">
          Get a Free Quote
        </h2>
        <p className="font-sans text-gray-500 font-light mb-10">
          Fill in your details and we&apos;ll get back to you within 24 hours.
        </p>
        <div className="flex justify-center">
          <a
            style={{ border: "none" }}
            href="https://book.servicem8.com/request_service_booking?strVendorUUID=019f7cc3-da33-71a5-aaf7-89a1e57b150b"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.servicem8.com/images/plugin_online_booking/Quote-Request-Button.png"
              width={250}
              height={69}
              alt="Online Enquiry powered by ServiceM8"
            />
          </a>
        </div>
        <p className="font-sans text-gray-400 text-sm mt-6">
          No obligation. We respond within 24 hours.
        </p>
      </div>
    </section>
  );
}
