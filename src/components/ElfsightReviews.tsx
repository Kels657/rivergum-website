"use client";

import Script from "next/script";

export default function ElfsightReviews() {
  return (
    <>
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />
      <div
        className="elfsight-app-396d9d03-1b84-48fd-aab1-fe5dcff3cc68"
        data-elfsight-app-lazy=""
      />
    </>
  );
}
