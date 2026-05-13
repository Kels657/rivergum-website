export type AreaData = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  neighbors: string[]; // slugs of geographically nearby areas
};

export const areas: AreaData[] = [
  {
    slug: "bondi",
    name: "Bondi",
    metaTitle: "Window Cleaning Bondi | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Bondi. Eastern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Bondi's iconic coastal setting — salt air, sea spray, and some of Sydney's most dramatic views — creates unique demands on exterior surfaces. Rivergum Services is a locally owned Eastern Suburbs business delivering professional window cleaning, solar panel cleaning, gutter clearing, and pressure washing to Bondi homes and businesses.",
    neighbors: ["tamarama", "bronte", "rose-bay", "waverley"],
  },
  {
    slug: "coogee",
    name: "Coogee",
    metaTitle: "Window Cleaning Coogee | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Coogee. Eastern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "From Coogee's beachfront to its leafy back streets, Rivergum Services keeps local properties looking their best year-round. As a locally owned Eastern Suburbs team, we understand the coastal conditions that accelerate salt and grime build-up on windows, gutters, and outdoor surfaces.",
    neighbors: ["randwick", "maroubra", "bronte", "waverley"],
  },
  {
    slug: "randwick",
    name: "Randwick",
    metaTitle: "Window Cleaning Randwick | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Randwick. Eastern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Randwick's blend of heritage homes, modern apartments, and busy commercial strips calls for a reliable, professional exterior cleaning service. Rivergum Services is the trusted local choice for window cleaning, gutter maintenance, and pressure washing across Randwick.",
    neighbors: ["coogee", "maroubra", "waverley", "paddington"],
  },
  {
    slug: "vaucluse",
    name: "Vaucluse",
    metaTitle: "Window Cleaning Vaucluse | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Vaucluse. Eastern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Vaucluse's prestigious harbourside properties and expansive grounds demand a cleaning service that matches their standard. Rivergum Services delivers premium-quality window cleaning, solar panel care, and exterior washing to Vaucluse's most discerning homeowners.",
    neighbors: ["rose-bay", "double-bay", "bellevue-hill"],
  },
  {
    slug: "rose-bay",
    name: "Rose Bay",
    metaTitle: "Window Cleaning Rose Bay | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Rose Bay. Eastern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Rose Bay's elegant streets, boutique businesses, and harbour-facing homes create some of the Eastern Suburbs' most beautiful streetscapes. Rivergum Services is the locally trusted choice for professional, discreet exterior cleaning throughout Rose Bay.",
    neighbors: ["vaucluse", "double-bay", "bellevue-hill", "woollahra"],
  },
  {
    slug: "double-bay",
    name: "Double Bay",
    metaTitle: "Window Cleaning Double Bay | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Double Bay. Eastern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Double Bay's sophisticated character — boutique shopping, waterfront dining, and immaculate residences — calls for an exterior cleaning service that meets its standards. Rivergum Services provides professional window cleaning and exterior washing for Double Bay homes and businesses.",
    neighbors: ["rose-bay", "woollahra", "paddington", "bellevue-hill"],
  },
  {
    slug: "surry-hills",
    name: "Surry Hills",
    metaTitle: "Window Cleaning Surry Hills | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Surry Hills. Eastern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Surry Hills' mix of terrace homes, creative studios, and vibrant hospitality venues creates diverse exterior cleaning needs. Rivergum Services delivers reliable window cleaning, gutter maintenance, and pressure washing to Surry Hills properties of every size.",
    neighbors: ["paddington", "woollahra"],
  },
  {
    slug: "paddington",
    name: "Paddington",
    metaTitle: "Window Cleaning Paddington | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Paddington. Eastern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Paddington's heritage Victorian terraces and tree-lined streets are among Sydney's most beautiful — and Rivergum Services helps keep them that way. We provide professional exterior cleaning across Paddington, from terrace windows to shared driveways and facades.",
    neighbors: ["surry-hills", "woollahra", "double-bay"],
  },
  {
    slug: "woollahra",
    name: "Woollahra",
    metaTitle: "Window Cleaning Woollahra | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Woollahra. Eastern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Woollahra's Federation-era homes, antique-lined streets, and manicured gardens deserve expert care. Rivergum Services brings the precision and attention to detail that Woollahra properties deserve, with professional cleaning across windows, gutters, and exterior surfaces.",
    neighbors: ["paddington", "double-bay", "rose-bay", "bellevue-hill"],
  },
  {
    slug: "maroubra",
    name: "Maroubra",
    metaTitle: "Window Cleaning Maroubra | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Maroubra. Eastern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Maroubra's relaxed beach community is backed by ocean-facing properties that accumulate salt spray year-round. Rivergum Services provides professional, fully insured exterior cleaning across Maroubra — from beachfront apartments to family homes in the back streets.",
    neighbors: ["coogee", "randwick", "bronte"],
  },
  {
    slug: "bronte",
    name: "Bronte",
    metaTitle: "Window Cleaning Bronte | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Bronte. Eastern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Bronte's tightly-knit beachside community is one of the Eastern Suburbs' most loved. Rivergum Services works across Bronte providing professional window cleaning, gutter clearing, and pressure washing — helping local homes and businesses look their best through every season.",
    neighbors: ["tamarama", "coogee", "waverley", "bondi"],
  },
  {
    slug: "tamarama",
    name: "Tamarama",
    metaTitle: "Window Cleaning Tamarama | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Tamarama. Eastern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Tamarama's exclusive clifftop and beachside properties sit at the very edge of the ocean — making professional exterior cleaning not just desirable but essential. Rivergum Services is the specialist Eastern Suburbs choice for homes in Tamarama and surrounds.",
    neighbors: ["bondi", "bronte"],
  },
  {
    slug: "waverley",
    name: "Waverley",
    metaTitle: "Window Cleaning Waverley | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Waverley. Eastern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Waverley's well-established mix of homes, units, and small businesses enjoys reliable exterior cleaning care from Rivergum Services. We're a locally owned Eastern Suburbs team serving Waverley with professional window, gutter, and pressure washing services.",
    neighbors: ["bronte", "bondi", "randwick", "coogee"],
  },
  {
    slug: "bellevue-hill",
    name: "Bellevue Hill",
    metaTitle: "Window Cleaning Bellevue Hill | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Bellevue Hill. Eastern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Bellevue Hill's grand homes, sweeping gardens, and elevated views set some of Sydney's highest standards for residential presentation. Rivergum Services is the trusted exterior cleaning specialist for Bellevue Hill properties, delivering premium results with full insurance coverage.",
    neighbors: ["vaucluse", "rose-bay", "double-bay", "woollahra"],
  },
];

export function getArea(slug: string): AreaData | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getNeighbors(slugs: string[]): AreaData[] {
  return slugs
    .map((slug) => areas.find((a) => a.slug === slug))
    .filter(Boolean) as AreaData[];
}
