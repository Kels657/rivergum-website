export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  date: string;
  dateDisplay: string;
  excerpt: string;
  keyTakeaways: string[];
  relatedSlugs: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "how-often-should-you-clean-your-windows-sydney",
    title: "How Often Should You Clean Your Windows in Sydney?",
    metaTitle: "How Often Should You Clean Your Windows in Sydney? | Rivergum Services",
    metaDescription:
      "Sydney window cleaning expert Aidan from Rivergum Services explains exactly how often you should clean your windows based on where you live — from Bondi to Balmain.",
    category: "Window Cleaning",
    date: "2026-05-01",
    dateDisplay: "May 2026",
    excerpt:
      "Most people think dirty windows are just an aesthetic issue — but there's more to it. Aidan explains how often Sydney homes really need their windows cleaned, and why coastal properties need extra attention.",
    keyTakeaways: [
      "Most Sydney homes should have windows cleaned at least twice a year — ideally every 3 months",
      "Inside windows are often dirtier than outside, because rain helps clean the exterior",
      "Coastal properties (Bondi, Coogee, Vaucluse) need cleaning every 3 months to prevent permanent salt etching",
      "Airport-adjacent suburbs (Alexandria, Mascot) have a soot problem from aircraft",
      "Salt, soot, pets, kids and shade all affect how quickly your specific windows get dirty",
    ],
    relatedSlugs: [
      "why-eastern-suburbs-homes-need-regular-window-cleaning",
      "do-dirty-solar-panels-really-affect-performance",
      "how-to-choose-a-window-cleaner-in-sydney",
    ],
  },
  {
    slug: "do-dirty-solar-panels-really-affect-performance",
    title: "Do Dirty Solar Panels Really Affect Performance?",
    metaTitle: "Do Dirty Solar Panels Really Affect Performance? | Rivergum Services Sydney",
    metaDescription:
      "Yes — and more than you think. Rivergum Services explains how dirt, bird droppings and soot reduce solar panel efficiency and what to do about it.",
    category: "Solar Panel Cleaning",
    date: "2026-05-05",
    dateDisplay: "May 2026",
    excerpt:
      "Australia has more rooftop solar per capita than almost anywhere else — but most people never clean their panels. Here's why that's costing them real money.",
    keyTakeaways: [
      "Dirty solar panels can lose up to 25% of their efficiency",
      "Bird droppings, dust, soot and gum tree debris are the main culprits in Sydney",
      "Airport suburbs (Alexandria, Mascot, Waterloo) face a specific soot problem from aircraft",
      "Pure water cleaning is safe, chemical-free, and won't void your panel warranty",
      "A $150–$200 clean can pay for itself quickly by restoring lost efficiency",
    ],
    relatedSlugs: [
      "how-often-should-you-clean-your-windows-sydney",
      "why-eastern-suburbs-homes-need-regular-window-cleaning",
      "hidden-costs-of-blocked-gutters",
    ],
  },
  {
    slug: "how-to-choose-a-window-cleaner-in-sydney",
    title: "How to Choose a Window Cleaner in Sydney (And Avoid Getting Burned)",
    metaTitle:
      "How to Choose a Window Cleaner in Sydney (And Avoid Getting Burned) | Rivergum Services",
    metaDescription:
      "Before you hire a window cleaner in Sydney, read this. Rivergum Services shares what to look for, what questions to ask, and the red flags to avoid.",
    category: "Tips & Advice",
    date: "2026-05-10",
    dateDisplay: "May 2026",
    excerpt:
      "The most common complaint from new clients is unreliability — late shows, no-shows, and having to chase cleaners for scheduling. Here's how to avoid that.",
    keyTakeaways: [
      "The most common complaint about window cleaners is unreliability — not cleaning quality",
      "Letting someone into your home requires real trust — that's what you're actually buying",
      "Red flags: no insurance, household cleaning products, streaks left behind, poor communication",
      "Professional cleaners use a water-fed pole or mop, squeegee and surgical towels — not spray bottles",
      "Ask about insurance, equipment, booking systems and Google reviews before hiring",
    ],
    relatedSlugs: [
      "how-often-should-you-clean-your-windows-sydney",
      "why-eastern-suburbs-homes-need-regular-window-cleaning",
      "do-dirty-solar-panels-really-affect-performance",
    ],
  },
  {
    slug: "hidden-costs-of-blocked-gutters",
    title: "The Hidden Costs of Blocked Gutters (It's More Than Just Water)",
    metaTitle:
      "The Hidden Costs of Blocked Gutters (It's More Than Just Water) | Rivergum Services",
    metaDescription:
      "Blocked gutters don't just cause water damage. Sydney gutter cleaning expert Rivergum Services reveals the hidden risks most homeowners don't know about.",
    category: "Gutter Cleaning",
    date: "2026-05-12",
    dateDisplay: "May 2026",
    excerpt:
      "Most people think blocked gutters just mean water overflowing. The real costs go much further — water damage, structural problems, pests, and a fire risk you probably haven't considered.",
    keyTakeaways: [
      "Blocked gutters cause far more than overflow — including structural damage and serious fire risk",
      "Wet debris-filled gutters are heavy enough to pull away from the roofline",
      "Up to 85% of homes lost in bushfires are victims of ember attack, not direct flames",
      "Gum trees are common in Sydney and are prolific gutter-fillers — requiring more frequent cleaning",
      "Gutter cleaning costs $150–$450. Water damage repairs can cost thousands.",
    ],
    relatedSlugs: [
      "how-often-should-you-clean-your-windows-sydney",
      "why-eastern-suburbs-homes-need-regular-window-cleaning",
      "do-dirty-solar-panels-really-affect-performance",
    ],
  },
  {
    slug: "why-eastern-suburbs-homes-need-regular-window-cleaning",
    title: "Why Eastern Suburbs Homes Need Regular Window Cleaning",
    metaTitle: "Why Eastern Suburbs Homes Need Regular Window Cleaning | Rivergum Services",
    metaDescription:
      "Salt air, ocean spray, soot and Sydney's humidity make Eastern Suburbs homes some of the hardest on windows in Australia. Here's what you need to know.",
    category: "Eastern Suburbs",
    date: "2026-05-14",
    dateDisplay: "May 2026",
    excerpt:
      "The Eastern Suburbs is one of Sydney's most beautiful areas — but also one of the hardest environments for windows. Salt spray, humidity, aircraft soot and coastal conditions all take their toll.",
    keyTakeaways: [
      "Eastern Suburbs properties face a unique combination of salt spray, humidity and coastal conditions",
      "Salt left on glass eventually etches permanently — making a standard clean impossible",
      "Coastal properties (Bondi, Coogee, Bronte) need window cleaning every 3 months",
      "Airport-adjacent suburbs (Mascot, Alexandria) face a soot problem from aircraft",
      "Different suburbs have genuinely different cleaning needs — a local cleaner understands the difference",
    ],
    relatedSlugs: [
      "how-often-should-you-clean-your-windows-sydney",
      "how-to-choose-a-window-cleaner-in-sydney",
      "do-dirty-solar-panels-really-affect-performance",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter(Boolean) as BlogPost[];
}
