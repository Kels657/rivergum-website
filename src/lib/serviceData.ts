export type ServiceData = {
  slug: string;
  name: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  included: string[];
  whyItMatters: {
    heading: string;
    paragraphs: string[];
  };
  testimonial: {
    quote: string;
    name: string;
    suburb: string;
  };
  multiStorey?: {
    body: string;
    points: string[];
  };
  images?: { src: string; alt: string }[];
  videos?: string[];
};

export const services: ServiceData[] = [
  {
    slug: "window-cleaning",
    name: "Residential Window Cleaning",
    subtitle: "Streak-free windows for homes across Sydney's Eastern Suburbs.",
    metaTitle: "Window Cleaning Sydney — Including Multi-Storey Properties | Rivergum Services",
    metaDescription:
      "Professional window cleaning for single, double and three storey properties across Sydney. Rivergum Services uses a water-fed pole system for safe, streak-free results. Get a free quote.",
    included: [
      "Interior and exterior glass cleaned to a streak-free finish",
      "Window frames, sills, and tracks wiped down",
      "Fly screen removal, cleaning, and re-fitting",
      "Water-fed pole system for safe upper-storey access",
      "Squeegee technique for crystal-clear results",
      "Before and after inspection on every job",
    ],
    whyItMatters: {
      heading: "Light, clarity, and kerb appeal",
      paragraphs: [
        "Natural light lifts the feel of any home — and clean windows let more of it in. Beyond aesthetics, salt air and coastal grime in the Eastern Suburbs etch into glass over time, causing permanent damage if left unchecked.",
        "Regular professional cleaning protects your investment, maintains your home's appeal, and ensures you always see the best of Sydney through clear glass.",
      ],
    },
    multiStorey: {
      body: "We clean windows on properties up to three storeys using a professional water-fed pole system — no ladders required on most jobs. The water-fed pole allows us to reach high windows safely from the ground, delivering a streak-free pure water clean without the risks associated with ladder work.",
      points: [
        "Single storey homes and apartments",
        "Double storey homes and townhouses",
        "Three storey properties and walk-up apartments",
        "We do not offer abseiling or rope access — for buildings requiring this we can recommend specialists",
        "The water-fed pole system means faster, safer cleaning with no risk of ladder damage to your property",
        "Pure water leaves no residue or streaking on high windows",
      ],
    },
    testimonial: {
      quote:
        "Rivergum did an incredible job on our windows. Professional, punctual, and the results were spotless. Light floods into our home now — will absolutely book again.",
      name: "Sarah M.",
      suburb: "Bondi",
    },
    images: [
      { src: "/images/before-after/Before%20and%20After%201.png", alt: "Before and after residential window cleaning in Sydney's Eastern Suburbs" },
      { src: "/images/before-after/Before%20and%20After%203.png", alt: "Before and after window cleaning on an Eastern Suburbs home" },
      { src: "/images/before-after/Before%20and%20After%20Window%20Sill%20%282%29.png", alt: "Before and after window sill cleaning" },
      { src: "/images/before-after/Before%20and%20After%20Shutters%20%282%29.png", alt: "Before and after shutter cleaning" },
    ],
    videos: ["/images/videos/Video%20-%20man%20at%20work%20video.mp4"],
  },
  {
    slug: "commercial-window-cleaning",
    name: "Commercial Window Cleaning",
    subtitle:
      "Professional window cleaning for offices, shopfronts, and commercial buildings.",
    metaTitle:
      "Commercial Window Cleaning Eastern Suburbs Sydney | Rivergum Services",
    metaDescription:
      "Professional commercial window cleaning for offices, retail & businesses across Sydney's Eastern Suburbs. Scheduled contracts available. Get a free quote.",
    included: [
      "Single and multi-storey commercial building cleaning",
      "Shopfront, retail, and restaurant window cleaning",
      "Flexible scheduling — early morning, after-hours, or weekends",
      "Regular maintenance contracts (weekly, fortnightly, or monthly)",
      "Internal cleaning of atriums and skylights",
      "Post-construction and renovation glass clean-ups",
    ],
    whyItMatters: {
      heading: "Your windows are your shopfront",
      paragraphs: [
        "In a competitive market, first impressions count. Clean, sparkling windows signal professionalism and care — and research consistently shows that customers are more likely to enter and engage with a well-presented business.",
        "For offices, natural light through clean windows measurably improves staff wellbeing and productivity. We work around your schedule so your business is never disrupted.",
      ],
    },
    testimonial: {
      quote:
        "We've used Rivergum for our office building for over a year. Always reliable and thorough — our clients regularly comment on how clean and professional the premises look.",
      name: "James T.",
      suburb: "Double Bay",
    },
    images: [
      { src: "/images/before-after/Before%20and%20After%202.png", alt: "Before and after commercial window cleaning in Sydney" },
    ],
    videos: [
      "/images/videos/Video%20-%20Time%20Laps%20office.mp4",
      "/images/videos/Video%20Office%20Clean%20Video%20-%20Normal%20speed.mp4",
      "/images/videos/Video%20-%20Water%20fed%20pole%20commercial.mp4",
    ],
  },
  {
    slug: "solar-panel-cleaning",
    name: "Solar Panel Cleaning",
    subtitle:
      "Restore your panels to peak efficiency with specialist solar cleaning.",
    metaTitle: "Solar Panel Cleaning Eastern Suburbs Sydney | Rivergum Services",
    metaDescription:
      "Specialist solar panel cleaning across Sydney's Eastern Suburbs. Restore panel efficiency, remove salt & bird droppings. Fully insured. Free quote today.",
    included: [
      "Pure water, chemical-free cleaning system — safe for all panel types",
      "Complete removal of bird droppings, dust, and coastal salt spray",
      "De-ionised rinse leaving panels streak and residue-free",
      "Visual inspection for damage, shading obstructions, or debris",
      "Safe roof access with full public liability insurance",
      "Maintenance log provided after each clean",
    ],
    whyItMatters: {
      heading: "Dirty panels cost you money every day",
      paragraphs: [
        "Studies show that dust, bird droppings, and coastal salt spray reduce solar panel output by 15–25%. In Sydney's Eastern Suburbs, proximity to the ocean means panels accumulate salt and grime faster than inland properties — further compressing efficiency.",
        "A professional clean typically pays for itself within weeks through recovered energy generation. It also extends panel lifespan by preventing the micro-etching that occurs when contaminants are left on the surface.",
      ],
    },
    testimonial: {
      quote:
        "Had our solar panels and windows done together. The difference in our electricity bill is already noticeable — down significantly in the first month. Brilliant service at a great price.",
      name: "Emily R.",
      suburb: "Vaucluse",
    },
    videos: ["/images/videos/Video%20-Water%20fed%20-%20Solar%20panel%20cleaning.mp4"],
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    subtitle: "Clear, flowing gutters that protect your home year-round.",
    metaTitle: "Gutter Cleaning Eastern Suburbs Sydney | Rivergum Services",
    metaDescription:
      "Professional gutter cleaning across Sydney's Eastern Suburbs. Prevent water damage and blockages. Fully insured, locally owned. Book a free quote today.",
    included: [
      "Complete removal of leaves, twigs, and debris by hand",
      "Downpipe flushing and blockage clearance",
      "Gutter and fascia board wipe-down",
      "Inspection for cracks, sagging, or improper fall",
      "Disposal of all removed debris — we leave your property clean",
      "Photo documentation of before and after condition",
    ],
    whyItMatters: {
      heading: "Blocked gutters are a hidden hazard",
      paragraphs: [
        "Blocked gutters are one of the most common causes of water damage in Sydney homes. When water can't flow freely, it backs up under the roofline, seeps into walls, and pools around foundations — leading to structural damage that can cost tens of thousands to repair.",
        "In the Eastern Suburbs, trees shed leaves year-round and east-coast storms can rapidly fill gutters with debris. Twice-yearly cleaning is the simplest way to protect your home from entirely avoidable water damage.",
      ],
    },
    testimonial: {
      quote:
        "The team cleared years of buildup from our gutters and were completely professional throughout. They even spotted a loose downpipe bracket and flagged it for us. Highly recommend.",
      name: "David W.",
      suburb: "Rose Bay",
    },
    images: [
      { src: "/images/before-after/Before%20and%20After%20Gutters%20%282%29.png", alt: "Before and after gutter cleaning on a Sydney Eastern Suburbs property" },
    ],
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    subtitle:
      "Revive driveways, decks, pathways, and facades with professional pressure washing.",
    metaTitle: "Pressure Washing Eastern Suburbs Sydney | Rivergum Services",
    metaDescription:
      "Professional pressure washing for driveways, decks, pathways & facades across Sydney's Eastern Suburbs. Revive your outdoor surfaces. Free quote today.",
    included: [
      "High-pressure washing of concrete driveways and pathways",
      "Timber and composite deck cleaning",
      "Brick, render, and facade washing",
      "Removal of moss, mould, algae, and lichen",
      "Oil and grease stain pre-treatment",
      "Pre-sale preparation and post-construction clean-ups",
    ],
    whyItMatters: {
      heading: "Coastal humidity means surfaces degrade faster here",
      paragraphs: [
        "Sydney's Eastern Suburbs combines sea air, humidity, and heavy foot traffic — the perfect conditions for moss, mould, and algae growth on outdoor surfaces. Left untreated, these don't just look unsightly — they make surfaces dangerously slippery, cause material breakdown, and significantly reduce a property's street appeal and value.",
        "A thorough pressure wash can restore surfaces to near-original condition in a single visit. Regular maintenance is far cheaper than surface replacement, and dramatically improves the presentation of your property.",
      ],
    },
    testimonial: {
      quote:
        "Transformed our driveway and front path — looks completely new. Quick, professional, and fairly priced. Exactly what we needed before putting the house on the market.",
      name: "Michael K.",
      suburb: "Paddington",
    },
    videos: ["/images/videos/Video%20-%20Time%20lapse%20pressure%20clean.mp4"],
  },
];

export const suburbs = [
  "Bondi", "Coogee", "Randwick", "Vaucluse", "Rose Bay", "Double Bay",
  "Surry Hills", "Paddington", "Woollahra", "Maroubra", "Bronte",
  "Tamarama", "Waverley", "Bellevue Hill",
];

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
