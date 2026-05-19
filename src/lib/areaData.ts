export type AreaData = {
  slug: string;
  name: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  neighbors: string[];
};

export const regionLabels: Record<string, string> = {
  "eastern-suburbs": "Eastern Suburbs Sydney",
  "inner-west": "Inner West Sydney",
  "lower-north-shore": "Lower North Shore Sydney",
  "northern-suburbs": "Northern Suburbs Sydney",
  "northern-beaches": "Northern Beaches Sydney",
  "sutherland-shire": "Sutherland Shire Sydney",
  "inner-south": "Inner South Sydney",
};

export const regions = Object.keys(regionLabels);

export const areas: AreaData[] = [
  // ── Eastern Suburbs ──
  {
    slug: "bondi",
    name: "Bondi",
    region: "eastern-suburbs",
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
    region: "eastern-suburbs",
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
    region: "eastern-suburbs",
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
    region: "eastern-suburbs",
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
    region: "eastern-suburbs",
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
    region: "eastern-suburbs",
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
    region: "eastern-suburbs",
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
    region: "eastern-suburbs",
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
    region: "eastern-suburbs",
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
    region: "eastern-suburbs",
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
    region: "eastern-suburbs",
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
    region: "eastern-suburbs",
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
    region: "eastern-suburbs",
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
    region: "eastern-suburbs",
    metaTitle: "Window Cleaning Bellevue Hill | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Bellevue Hill. Eastern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Bellevue Hill's grand homes, sweeping gardens, and elevated views set some of Sydney's highest standards for residential presentation. Rivergum Services is the trusted exterior cleaning specialist for Bellevue Hill properties, delivering premium results with full insurance coverage.",
    neighbors: ["vaucluse", "rose-bay", "double-bay", "woollahra"],
  },

  // ── Inner West ──
  {
    slug: "newtown",
    name: "Newtown",
    region: "inner-west",
    metaTitle: "Window Cleaning Newtown | Rivergum Services",
    metaDescription:
      "Professional window cleaning, gutter cleaning & pressure washing in Newtown. Inner West Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Newtown's eclectic terrace homes, creative businesses, and vibrant King Street strip call for a cleaning service that understands inner-city property. Rivergum Services delivers professional window cleaning, gutter maintenance, and pressure washing to Newtown homes and commercial properties.",
    neighbors: ["marrickville", "stanmore", "petersham", "erskineville"],
  },
  {
    slug: "marrickville",
    name: "Marrickville",
    region: "inner-west",
    metaTitle: "Window Cleaning Marrickville | Rivergum Services",
    metaDescription:
      "Professional window cleaning, gutter cleaning & pressure washing in Marrickville. Inner West Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Marrickville's diverse community, heritage terraces, and thriving small-business scene create a wide range of exterior cleaning needs. Rivergum Services is a trusted local choice for professional window cleaning, gutter clearing, and pressure washing throughout Marrickville.",
    neighbors: ["newtown", "dulwich-hill", "petersham", "alexandria"],
  },
  {
    slug: "leichhardt",
    name: "Leichhardt",
    region: "inner-west",
    metaTitle: "Window Cleaning Leichhardt | Rivergum Services",
    metaDescription:
      "Professional window cleaning, gutter cleaning & pressure washing in Leichhardt. Inner West Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Leichhardt's famous Italian Quarter, Federation-era homes, and tree-lined streets make it one of the Inner West's most charming suburbs. Rivergum Services keeps Leichhardt properties looking their best with professional window cleaning, gutter maintenance, and exterior washing.",
    neighbors: ["glebe", "annandale", "rozelle", "petersham"],
  },
  {
    slug: "balmain",
    name: "Balmain",
    region: "inner-west",
    metaTitle: "Window Cleaning Balmain | Rivergum Services",
    metaDescription:
      "Professional window cleaning, gutter cleaning & pressure washing in Balmain. Inner West Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Balmain's historic waterfront village, sandstone cottages, and elevated harbour views are some of Sydney's most distinctive. Rivergum Services provides professional exterior cleaning across Balmain's heritage properties, ensuring windows, gutters, and facades stay pristine.",
    neighbors: ["rozelle", "annandale", "balmain-east", "lilyfield"],
  },
  {
    slug: "rozelle",
    name: "Rozelle",
    region: "inner-west",
    metaTitle: "Window Cleaning Rozelle | Rivergum Services",
    metaDescription:
      "Professional window cleaning, gutter cleaning & pressure washing in Rozelle. Inner West Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Rozelle's leafy streets, creative community, and mix of terrace and cottage homes are well-served by Rivergum Services. We provide reliable window cleaning, gutter clearing, and pressure washing across Rozelle for both residential and commercial clients.",
    neighbors: ["balmain", "leichhardt", "annandale", "glebe"],
  },
  {
    slug: "glebe",
    name: "Glebe",
    region: "inner-west",
    metaTitle: "Window Cleaning Glebe | Rivergum Services",
    metaDescription:
      "Professional window cleaning, gutter cleaning & pressure washing in Glebe. Inner West Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Glebe's heritage terrace homes, university precinct, and vibrant Saturday market draw a community that takes pride in its properties. Rivergum Services delivers professional window cleaning, gutter maintenance, and exterior washing throughout Glebe.",
    neighbors: ["newtown", "leichhardt", "rozelle", "forest-lodge"],
  },
  {
    slug: "annandale",
    name: "Annandale",
    region: "inner-west",
    metaTitle: "Window Cleaning Annandale | Rivergum Services",
    metaDescription:
      "Professional window cleaning, gutter cleaning & pressure washing in Annandale. Inner West Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Annandale's tree-canopied streets and well-maintained Federation and Victorian homes are a hallmark of the Inner West. Rivergum Services works throughout Annandale providing professional window cleaning, gutter clearing, and pressure washing tailored to heritage properties.",
    neighbors: ["leichhardt", "rozelle", "glebe"],
  },
  {
    slug: "dulwich-hill",
    name: "Dulwich Hill",
    region: "inner-west",
    metaTitle: "Window Cleaning Dulwich Hill | Rivergum Services",
    metaDescription:
      "Professional window cleaning, gutter cleaning & pressure washing in Dulwich Hill. Inner West Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Dulwich Hill's quiet residential streets, heritage bungalows, and growing café culture attract homeowners who take pride in their properties. Rivergum Services provides professional window cleaning, gutter maintenance, and pressure washing across Dulwich Hill.",
    neighbors: ["marrickville", "summer-hill", "stanmore"],
  },
  {
    slug: "summer-hill",
    name: "Summer Hill",
    region: "inner-west",
    metaTitle: "Window Cleaning Summer Hill | Rivergum Services",
    metaDescription:
      "Professional window cleaning, gutter cleaning & pressure washing in Summer Hill. Inner West Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Summer Hill's village charm, heritage streetscapes, and leafy character make it one of the Inner West's most sought-after pockets. Rivergum Services provides professional exterior cleaning to Summer Hill residents — from terrace windows to gutters and driveways.",
    neighbors: ["dulwich-hill", "stanmore", "petersham"],
  },
  {
    slug: "petersham",
    name: "Petersham",
    region: "inner-west",
    metaTitle: "Window Cleaning Petersham | Rivergum Services",
    metaDescription:
      "Professional window cleaning, gutter cleaning & pressure washing in Petersham. Inner West Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Petersham's multicultural character, Federation terraces, and community-focused streets create a suburb that values quality local services. Rivergum Services is the reliable choice for professional window cleaning, gutter clearing, and pressure washing throughout Petersham.",
    neighbors: ["newtown", "marrickville", "stanmore", "summer-hill"],
  },
  {
    slug: "stanmore",
    name: "Stanmore",
    region: "inner-west",
    metaTitle: "Window Cleaning Stanmore | Rivergum Services",
    metaDescription:
      "Professional window cleaning, gutter cleaning & pressure washing in Stanmore. Inner West Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Stanmore's quiet Federation streetscapes and well-kept homes sit at the heart of the Inner West. Rivergum Services delivers professional window cleaning, gutter maintenance, and pressure washing to Stanmore residents and small businesses.",
    neighbors: ["newtown", "petersham", "dulwich-hill", "summer-hill"],
  },
  {
    slug: "forest-lodge",
    name: "Forest Lodge",
    region: "inner-west",
    metaTitle: "Window Cleaning Forest Lodge | Rivergum Services Sydney",
    metaDescription:
      "Professional window cleaning, gutter cleaning & pressure washing in Forest Lodge. Inner West Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Forest Lodge is a quiet residential enclave nestled between Glebe and Annandale, with heritage terraces and tree-lined streets that reward regular exterior care. Rivergum Services provides professional window cleaning, gutter maintenance, and pressure washing to Forest Lodge homes and surrounding areas across greater Sydney.",
    neighbors: ["glebe", "annandale", "leichhardt", "rozelle"],
  },
  {
    slug: "balmain-east",
    name: "Balmain East",
    region: "inner-west",
    metaTitle: "Window Cleaning Balmain East | Rivergum Services Sydney",
    metaDescription:
      "Professional window cleaning, gutter cleaning & pressure washing in Balmain East. Inner West Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Balmain East's peninsular position offers stunning harbour views from some of the Inner West's most distinguished homes. Rivergum Services delivers professional window cleaning, gutter clearing, and exterior washing to Balmain East's harbour-facing properties and surrounding areas.",
    neighbors: ["balmain", "rozelle", "lilyfield"],
  },
  {
    slug: "lilyfield",
    name: "Lilyfield",
    region: "inner-west",
    metaTitle: "Window Cleaning Lilyfield | Rivergum Services Sydney",
    metaDescription:
      "Professional window cleaning, gutter cleaning & pressure washing in Lilyfield. Inner West Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Lilyfield's leafy residential streets and well-maintained homes sit at the heart of the Inner West, bordered by Leichhardt and Rozelle. Rivergum Services provides professional window cleaning, gutter maintenance, and pressure washing to Lilyfield properties across the suburb and surrounding areas.",
    neighbors: ["leichhardt", "rozelle", "balmain", "annandale"],
  },

  // ── Lower North Shore ──
  {
    slug: "mosman",
    name: "Mosman",
    region: "lower-north-shore",
    metaTitle: "Window Cleaning Mosman | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Mosman. Lower North Shore Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Mosman's prestigious harbourside homes, waterfront gardens, and elevated outlooks demand an exterior cleaning service of the highest standard. Rivergum Services provides premium window cleaning, solar panel care, and exterior washing to Mosman's discerning residents.",
    neighbors: ["neutral-bay", "cremorne", "waverton"],
  },
  {
    slug: "neutral-bay",
    name: "Neutral Bay",
    region: "lower-north-shore",
    metaTitle: "Window Cleaning Neutral Bay | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Neutral Bay. Lower North Shore Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Neutral Bay's cosmopolitan mix of apartments, terrace homes, and waterfront properties benefits from regular professional exterior cleaning. Rivergum Services provides reliable window cleaning, gutter maintenance, and pressure washing throughout Neutral Bay.",
    neighbors: ["mosman", "cremorne", "kirribilli", "waverton"],
  },
  {
    slug: "cremorne",
    name: "Cremorne",
    region: "lower-north-shore",
    metaTitle: "Window Cleaning Cremorne | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Cremorne. Lower North Shore Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Cremorne's leafy harbour-facing streets and well-maintained residential properties are a testament to the care its community takes. Rivergum Services delivers professional window cleaning, gutter clearing, and exterior washing to homes and apartments throughout Cremorne.",
    neighbors: ["mosman", "neutral-bay", "kirribilli", "cremorne-point"],
  },
  {
    slug: "kirribilli",
    name: "Kirribilli",
    region: "lower-north-shore",
    metaTitle: "Window Cleaning Kirribilli | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Kirribilli. Lower North Shore Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Kirribilli sits directly across the harbour from the CBD, with iconic views of the Sydney Harbour Bridge and Opera House from some of Sydney's most sought-after homes. Rivergum Services provides professional window cleaning and exterior care to Kirribilli's remarkable properties.",
    neighbors: ["neutral-bay", "lavender-bay", "mcmahons-point", "milsons-point"],
  },
  {
    slug: "mcmahons-point",
    name: "McMahons Point",
    region: "lower-north-shore",
    metaTitle: "Window Cleaning McMahons Point | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in McMahons Point. Lower North Shore Sydney — locally owned & fully insured. Free quote.",
    intro:
      "McMahons Point's waterfront village atmosphere and stunning harbour panoramas make it one of Sydney's most coveted addresses. Rivergum Services delivers professional window cleaning and exterior washing to McMahons Point properties, keeping those views crystal clear.",
    neighbors: ["kirribilli", "lavender-bay", "milsons-point"],
  },
  {
    slug: "milsons-point",
    name: "Milsons Point",
    region: "lower-north-shore",
    metaTitle: "Window Cleaning Milsons Point | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Milsons Point. Lower North Shore Sydney — locally owned & fully insured. Free quote.",
    intro:
      "In the shadow of the Harbour Bridge, Milsons Point offers some of Sydney's most spectacular waterfront living. Rivergum Services provides professional window cleaning, gutter maintenance, and exterior washing to Milsons Point apartments and homes.",
    neighbors: ["kirribilli", "lavender-bay", "mcmahons-point"],
  },
  {
    slug: "lavender-bay",
    name: "Lavender Bay",
    region: "lower-north-shore",
    metaTitle: "Window Cleaning Lavender Bay | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Lavender Bay. Lower North Shore Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Lavender Bay's peaceful harbourside setting and charming residential streets have long attracted those who want Sydney's best without the crowds. Rivergum Services provides professional window cleaning and exterior care to Lavender Bay's distinctive homes and apartments.",
    neighbors: ["kirribilli", "mcmahons-point", "milsons-point"],
  },
  {
    slug: "waverton",
    name: "Waverton",
    region: "lower-north-shore",
    metaTitle: "Window Cleaning Waverton | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Waverton. Lower North Shore Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Waverton's quiet leafy streets, heritage homes, and strong community spirit make it a gem on the Lower North Shore. Rivergum Services delivers professional window cleaning, gutter maintenance, and pressure washing throughout Waverton's well-kept residential streets.",
    neighbors: ["mosman", "neutral-bay", "crows-nest"],
  },
  {
    slug: "wollstonecraft",
    name: "Wollstonecraft",
    region: "lower-north-shore",
    metaTitle: "Window Cleaning Wollstonecraft | Rivergum Services Sydney",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Wollstonecraft. Lower North Shore Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Wollstonecraft's heritage apartments, terrace homes, and quiet streets sit conveniently between Crows Nest and the waterfront. Rivergum Services delivers professional window cleaning, gutter clearing, and exterior washing to Wollstonecraft's well-kept residential properties and surrounding areas.",
    neighbors: ["crows-nest", "waverton", "cammeray", "neutral-bay"],
  },
  {
    slug: "cammeray",
    name: "Cammeray",
    region: "lower-north-shore",
    metaTitle: "Window Cleaning Cammeray | Rivergum Services Sydney",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Cammeray. Lower North Shore Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Cammeray's village atmosphere, established homes, and proximity to Neutral Bay make it one of the Lower North Shore's most appealing suburbs. Rivergum Services provides professional window cleaning, solar panel care, and pressure washing to Cammeray properties across the suburb and surrounding areas.",
    neighbors: ["neutral-bay", "crows-nest", "wollstonecraft", "mosman"],
  },
  {
    slug: "cremorne-point",
    name: "Cremorne Point",
    region: "lower-north-shore",
    metaTitle: "Window Cleaning Cremorne Point | Rivergum Services Sydney",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Cremorne Point. Lower North Shore Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Cremorne Point's exclusive harbourfront peninsula offers spectacular views of Sydney Harbour from some of Sydney's most coveted addresses. Rivergum Services delivers professional window cleaning, gutter clearing, and exterior washing to Cremorne Point's prestigious waterfront properties.",
    neighbors: ["cremorne", "mosman", "neutral-bay"],
  },
  {
    slug: "greenwich",
    name: "Greenwich",
    region: "lower-north-shore",
    metaTitle: "Window Cleaning Greenwich | Rivergum Services Sydney",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Greenwich. Lower North Shore Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Greenwich's waterfront homes, heritage properties, and quiet streets along the Lane Cove River are among the Lower North Shore's best-kept secrets. Rivergum Services provides professional window cleaning, gutter maintenance, and pressure washing to Greenwich's distinguished homes and surrounding areas across greater Sydney.",
    neighbors: ["lane-cove", "northwood", "wollstonecraft", "waverton"],
  },

  // ── Northern Suburbs ──
  {
    slug: "chatswood",
    name: "Chatswood",
    region: "northern-suburbs",
    metaTitle: "Window Cleaning Chatswood | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Chatswood. Northern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Chatswood's thriving commercial centre is complemented by established residential streets and a growing number of apartment buildings. Rivergum Services provides professional window cleaning, solar panel maintenance, and exterior washing to both residential and commercial properties in Chatswood.",
    neighbors: ["willoughby", "lane-cove", "artarmon", "st-leonards"],
  },
  {
    slug: "lane-cove",
    name: "Lane Cove",
    region: "northern-suburbs",
    metaTitle: "Window Cleaning Lane Cove | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Lane Cove. Northern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Lane Cove's riverside setting, leafy streets, and family-friendly community make it one of Sydney's most liveable northern suburbs. Rivergum Services delivers professional window cleaning, gutter clearing, and pressure washing to Lane Cove homes.",
    neighbors: ["chatswood", "willoughby", "artarmon", "lane-cove-west"],
  },
  {
    slug: "willoughby",
    name: "Willoughby",
    region: "northern-suburbs",
    metaTitle: "Window Cleaning Willoughby | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Willoughby. Northern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Willoughby's quiet residential character and well-maintained homes reflect a suburb that takes pride in its appearance. Rivergum Services provides professional exterior cleaning across Willoughby, from high-set windows to gutters and driveways.",
    neighbors: ["chatswood", "lane-cove", "artarmon", "crows-nest"],
  },
  {
    slug: "artarmon",
    name: "Artarmon",
    region: "northern-suburbs",
    metaTitle: "Window Cleaning Artarmon | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Artarmon. Northern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Artarmon's mix of established homes and commercial precincts creates diverse exterior cleaning needs. Rivergum Services delivers professional window cleaning, gutter maintenance, and pressure washing for Artarmon's residential and business clients.",
    neighbors: ["chatswood", "lane-cove", "willoughby", "st-leonards", "crows-nest"],
  },
  {
    slug: "st-leonards",
    name: "St Leonards",
    region: "northern-suburbs",
    metaTitle: "Window Cleaning St Leonards | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in St Leonards. Northern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "St Leonards' urban high-density precinct — with hospitals, high-rises, and a growing residential population — relies on professional exterior cleaning services. Rivergum Services provides window cleaning and exterior washing for apartments and commercial buildings throughout St Leonards.",
    neighbors: ["chatswood", "artarmon", "crows-nest", "waverton"],
  },
  {
    slug: "crows-nest",
    name: "Crows Nest",
    region: "northern-suburbs",
    metaTitle: "Window Cleaning Crows Nest | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Crows Nest. Northern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Crows Nest's village feel, popular café culture, and mix of apartments and houses make it one of Sydney's most desirable northern addresses. Rivergum Services delivers professional window cleaning, gutter clearing, and pressure washing throughout Crows Nest.",
    neighbors: ["st-leonards", "artarmon", "willoughby", "neutral-bay"],
  },
  {
    slug: "lane-cove-west",
    name: "Lane Cove West",
    region: "northern-suburbs",
    metaTitle: "Window Cleaning Lane Cove West | Rivergum Services Sydney",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Lane Cove West. Northern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Lane Cove West's quiet streets, generous blocks, and well-established homes make it a peaceful corner of Sydney's North Shore. Rivergum Services delivers professional window cleaning, gutter clearing, and exterior washing to Lane Cove West homes and surrounding areas.",
    neighbors: ["lane-cove", "longueville", "northwood", "riverview"],
  },
  {
    slug: "longueville",
    name: "Longueville",
    region: "northern-suburbs",
    metaTitle: "Window Cleaning Longueville | Rivergum Services Sydney",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Longueville. Northern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Longueville's prestigious waterfront homes and leafy streets along the Lane Cove River are among the North Shore's finest. Rivergum Services provides professional window cleaning, solar panel care, and exterior washing to Longueville's elegant harbourside properties and surrounding areas.",
    neighbors: ["lane-cove", "lane-cove-west", "northwood", "riverview"],
  },
  {
    slug: "northwood",
    name: "Northwood",
    region: "northern-suburbs",
    metaTitle: "Window Cleaning Northwood | Rivergum Services Sydney",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Northwood. Northern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Northwood's secluded harbourfront homes and quiet residential streets offer exclusive living on Sydney's North Shore. Rivergum Services delivers professional window cleaning, gutter clearing, and pressure washing to Northwood's well-maintained properties along the Lane Cove River.",
    neighbors: ["lane-cove", "lane-cove-west", "longueville", "greenwich"],
  },
  {
    slug: "riverview",
    name: "Riverview",
    region: "northern-suburbs",
    metaTitle: "Window Cleaning Riverview | Rivergum Services Sydney",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Riverview. Northern Suburbs Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Riverview's serene bushland setting and prestigious homes along the Lane Cove River create a distinctive residential character on Sydney's North Shore. Rivergum Services provides professional window cleaning and exterior washing to Riverview's sought-after properties and surrounding areas.",
    neighbors: ["lane-cove", "longueville", "lane-cove-west", "northwood"],
  },

  // ── Northern Beaches ──
  {
    slug: "manly",
    name: "Manly",
    region: "northern-beaches",
    metaTitle: "Window Cleaning Manly | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Manly. Northern Beaches Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Manly's iconic surf beach, vibrant esplanade, and mix of beachfront apartments and residential homes all face the full force of Sydney's coastal conditions. Rivergum Services provides professional window cleaning, solar panel care, and exterior washing to Manly properties.",
    neighbors: ["freshwater", "curl-curl", "dee-why"],
  },
  {
    slug: "dee-why",
    name: "Dee Why",
    region: "northern-beaches",
    metaTitle: "Window Cleaning Dee Why | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Dee Why. Northern Beaches Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Dee Why's relaxed beachside atmosphere and growing residential community create steady demand for professional exterior cleaning. Rivergum Services delivers reliable window cleaning, gutter maintenance, and pressure washing across Dee Why homes and apartments.",
    neighbors: ["curl-curl", "collaroy", "freshwater"],
  },
  {
    slug: "freshwater",
    name: "Freshwater",
    region: "northern-beaches",
    metaTitle: "Window Cleaning Freshwater | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Freshwater. Northern Beaches Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Freshwater's intimate beach community, with its rocky headlands and sea-facing homes, requires expert exterior cleaning to manage salt spray and coastal grime. Rivergum Services provides professional window cleaning and exterior washing to Freshwater properties.",
    neighbors: ["manly", "curl-curl", "dee-why"],
  },
  {
    slug: "curl-curl",
    name: "Curl Curl",
    region: "northern-beaches",
    metaTitle: "Window Cleaning Curl Curl | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Curl Curl. Northern Beaches Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Curl Curl's quieter beach and leafy residential streets attract families and professionals who value quality of life. Rivergum Services provides professional window cleaning, gutter clearing, and pressure washing to Curl Curl's coastal homes.",
    neighbors: ["manly", "freshwater", "dee-why", "collaroy"],
  },
  {
    slug: "collaroy",
    name: "Collaroy",
    region: "northern-beaches",
    metaTitle: "Window Cleaning Collaroy | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Collaroy. Northern Beaches Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Collaroy's long stretch of surf beach and established residential streets are well-known on the Northern Beaches. Rivergum Services delivers professional window cleaning, gutter maintenance, and exterior washing to Collaroy homes exposed to coastal elements year-round.",
    neighbors: ["dee-why", "curl-curl"],
  },

  // ── Sutherland Shire ──
  {
    slug: "cronulla",
    name: "Cronulla",
    region: "sutherland-shire",
    metaTitle: "Window Cleaning Cronulla | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Cronulla. Sutherland Shire Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Cronulla's beachside lifestyle, waterfront properties, and coastal exposure make exterior cleaning a necessity. Rivergum Services provides professional window cleaning, solar panel care, and pressure washing to Cronulla homes and apartments facing the elements.",
    neighbors: ["caringbah", "gymea"],
  },
  {
    slug: "miranda",
    name: "Miranda",
    region: "sutherland-shire",
    metaTitle: "Window Cleaning Miranda | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Miranda. Sutherland Shire Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Miranda is one of the Sutherland Shire's major suburban hubs, with a mix of family homes, apartments, and commercial properties. Rivergum Services delivers professional window cleaning, gutter maintenance, and pressure washing throughout Miranda.",
    neighbors: ["caringbah", "gymea", "sutherland"],
  },
  {
    slug: "caringbah",
    name: "Caringbah",
    region: "sutherland-shire",
    metaTitle: "Window Cleaning Caringbah | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Caringbah. Sutherland Shire Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Caringbah's established residential streets and local business precinct benefit from reliable professional exterior cleaning. Rivergum Services provides window cleaning, gutter clearing, and pressure washing to Caringbah homes and commercial clients.",
    neighbors: ["cronulla", "miranda", "gymea"],
  },
  {
    slug: "gymea",
    name: "Gymea",
    region: "sutherland-shire",
    metaTitle: "Window Cleaning Gymea | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Gymea. Sutherland Shire Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Gymea's quiet, family-friendly streets and well-kept homes reflect a community that values its living environment. Rivergum Services delivers professional window cleaning, solar panel maintenance, and exterior washing across Gymea.",
    neighbors: ["cronulla", "miranda", "caringbah", "sutherland"],
  },
  {
    slug: "sutherland",
    name: "Sutherland",
    region: "sutherland-shire",
    metaTitle: "Window Cleaning Sutherland | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Sutherland. Sutherland Shire Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Sutherland is the heart of the Shire — a well-established suburb with a blend of homes, units, and busy local businesses. Rivergum Services provides professional window cleaning, gutter maintenance, and pressure washing across Sutherland's diverse property mix.",
    neighbors: ["miranda", "gymea", "menai"],
  },
  {
    slug: "menai",
    name: "Menai",
    region: "sutherland-shire",
    metaTitle: "Window Cleaning Menai | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Menai. Sutherland Shire Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Menai's leafy residential streets and newer developments make it a growing community within the Sutherland Shire. Rivergum Services delivers professional window cleaning, gutter clearing, and pressure washing to Menai homes.",
    neighbors: ["sutherland", "gymea"],
  },

  // ── Inner South ──
  {
    slug: "alexandria",
    name: "Alexandria",
    region: "inner-south",
    metaTitle: "Window Cleaning Alexandria | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Alexandria. Inner South Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Alexandria's rapid transformation from industrial heartland to vibrant mixed-use suburb has created a wealth of new apartments, converted warehouses, and commercial properties — all needing professional exterior care. Rivergum Services provides window cleaning and exterior washing throughout Alexandria.",
    neighbors: ["waterloo", "zetland", "redfern", "erskineville"],
  },
  {
    slug: "waterloo",
    name: "Waterloo",
    region: "inner-south",
    metaTitle: "Window Cleaning Waterloo | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Waterloo. Inner South Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Waterloo's urban renewal has produced a dense mix of new apartment towers and established terrace homes just minutes from the CBD. Rivergum Services provides professional window cleaning, gutter maintenance, and pressure washing to Waterloo's growing residential community.",
    neighbors: ["alexandria", "zetland", "redfern", "beaconsfield"],
  },
  {
    slug: "zetland",
    name: "Zetland",
    region: "inner-south",
    metaTitle: "Window Cleaning Zetland | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Zetland. Inner South Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Zetland's rapidly developed precinct of modern apartment complexes is home to thousands of Sydney residents who expect quality professional services. Rivergum Services delivers professional window cleaning and exterior washing to Zetland's high-rise and mid-rise buildings.",
    neighbors: ["waterloo", "alexandria", "beaconsfield"],
  },
  {
    slug: "redfern",
    name: "Redfern",
    region: "inner-south",
    metaTitle: "Window Cleaning Redfern | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Redfern. Inner South Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Redfern's evolving urban character — from heritage terraces to new developments — creates a diverse mix of exterior cleaning needs. Rivergum Services provides professional window cleaning, gutter clearing, and pressure washing across Redfern's residential and commercial properties.",
    neighbors: ["newtown", "waterloo", "erskineville", "alexandria"],
  },
  {
    slug: "erskineville",
    name: "Erskineville",
    region: "inner-south",
    metaTitle: "Window Cleaning Erskineville | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Erskineville. Inner South Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Erskineville's charming village atmosphere, terrace-lined streets, and close-knit community make it one of Sydney's best-loved inner suburbs. Rivergum Services delivers professional window cleaning and exterior washing to Erskineville homes.",
    neighbors: ["redfern", "newtown", "beaconsfield", "alexandria"],
  },
  {
    slug: "beaconsfield",
    name: "Beaconsfield",
    region: "inner-south",
    metaTitle: "Window Cleaning Beaconsfield | Rivergum Services",
    metaDescription:
      "Professional window cleaning, solar panel cleaning, gutter cleaning & pressure washing in Beaconsfield. Inner South Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Beaconsfield's quiet residential streets, surrounded by Alexandria, Waterloo, and Erskineville, offer a calm pocket within Sydney's busy inner south. Rivergum Services provides professional window cleaning, gutter maintenance, and pressure washing to Beaconsfield homes.",
    neighbors: ["waterloo", "zetland", "erskineville", "alexandria"],
  },
  {
    slug: "chippendale",
    name: "Chippendale",
    region: "inner-south",
    metaTitle: "Window Cleaning Chippendale | Rivergum Services Sydney",
    metaDescription:
      "Professional window cleaning, gutter cleaning & pressure washing in Chippendale. Inner South Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Chippendale's mix of heritage terraces, converted warehouse apartments, and university precincts creates diverse exterior cleaning needs just minutes from the CBD. Rivergum Services provides professional window cleaning, gutter clearing, and pressure washing for Chippendale's residential and commercial properties.",
    neighbors: ["redfern", "newtown", "ultimo", "glebe"],
  },
  {
    slug: "ultimo",
    name: "Ultimo",
    region: "inner-south",
    metaTitle: "Window Cleaning Ultimo | Rivergum Services Sydney",
    metaDescription:
      "Professional window cleaning, gutter cleaning & pressure washing in Ultimo. Inner South Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Ultimo's dense inner-city character — from student accommodation near UTS to heritage warehouses and the Powerhouse Museum precinct — creates diverse exterior cleaning demands. Rivergum Services delivers professional window cleaning and exterior washing to Ultimo properties and surrounding areas.",
    neighbors: ["glebe", "pyrmont", "chippendale"],
  },
  {
    slug: "pyrmont",
    name: "Pyrmont",
    region: "inner-south",
    metaTitle: "Window Cleaning Pyrmont | Rivergum Services Sydney",
    metaDescription:
      "Professional window cleaning, gutter cleaning & pressure washing in Pyrmont. Inner South Sydney — locally owned & fully insured. Free quote.",
    intro:
      "Pyrmont's dramatic transformation from industrial peninsula to vibrant urban village has produced thousands of waterfront apartments and businesses with spectacular city and harbour views. Rivergum Services provides professional window cleaning, gutter maintenance, and pressure washing to Pyrmont's residential and commercial properties.",
    neighbors: ["glebe", "ultimo", "forest-lodge"],
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

export function getAreasByRegion(region: string): AreaData[] {
  return areas.filter((a) => a.region === region);
}
