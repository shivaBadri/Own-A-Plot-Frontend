export type Venture = {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  region: string;
  totalAcres: number;
  heroImage: string;
  heroVideo?: string;
  accent: "olive" | "earth" | "bark";
  gallery: string[];
  story: {
    eyebrow: string;
    title: string;
    body: string[];
  };
  advantages: { title: string; body: string; image: string }[];
  amenities: string[];
  details: { label: string; value: string }[];
  landscape: { title: string; body: string; image: string }[];
  location_info: {
    address: string;
    coordinates: { lat: number; lng: number };
    nearby: { name: string; distance: string }[];
    mapEmbed: string;
  };
  brochure: {
    fileName: string;
    fileSize: string;
    url: string;
  };
};

export const ventures: Venture[] = [
  {
    slug: "hemadri-groves",
    name: "Hemadri Groves",
    tagline: "A quiet grove between two hills, held for the long view.",
    location: "Kadthal, Hyderabad",
    region: "South of the city, 45 minutes from the airport",
    totalAcres: 42,
    accent: "olive",
    heroImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop",
    ],
    story: {
      eyebrow: "The Ground Beneath",
      title:
        "Forty-two acres of gentle slope, chosen for its light and its silence.",
      body: [
        "Hemadri Groves rests between two low ranges, in a valley that catches the morning sun and holds the evening cool. The land carries an old rhythm — mango trees at the boundary, tamarind at the centre, a small seasonal stream running east.",
        "We spent a year walking this land before we drew a single line. Every road follows the contour. Every plot faces its sky. Nothing was flattened that did not need to be flattened.",
      ],
    },
    advantages: [
      {
        title: "Held Elevation",
        body: "Naturally raised ground, well above the flood line and well below the noise line of the state highway.",
        image:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2000&auto=format&fit=crop",
      },
      {
        title: "Water Table at 40 ft",
        body: "A shallow, dependable aquifer verified across three seasons — rare for the region and a quiet form of long-term wealth.",
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop",
      },
      {
        title: "Growing Corridor",
        body: "The Kadthal-Shadnagar belt has seen steady infrastructure investment since 2019 without the speculative churn of hotter markets.",
        image:
          "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2000&auto=format&fit=crop",
      },
      {
        title: "Verified Title",
        body: "Single-owner title, cleared through independent legal review. Layout regularization complete with the local municipality.",
        image:
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop",
      },
    ],
    amenities: [
      "Compound wall, all around",
      "Metalled internal roads, 30 ft & 40 ft",
      "Rainwater harvesting network",
      "Avenue trees along every road",
      "Underground electric",
      "Sewage & waste water plan",
      "Common gazebo & sit-out grove",
      "Overhead water storage",
      "Solar street lighting",
      "Managed entrance & security cabin",
    ],
    details: [
      { label: "Total Extent", value: "42 acres" },
      { label: "Plot Sizes", value: "200 – 500 sq. yd" },
      { label: "Road Widths", value: "30 ft & 40 ft" },
      { label: "Open Space", value: "12% of total extent" },
      { label: "DTCP Status", value: "Approved" },
    ],
    landscape: [
      {
        title: "The Grove at the Centre",
        body: "A three-quarter-acre grove of tamarind and neem, kept exactly as we found it. A slow, shaded place — for reading, for children, for evenings.",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop",
      },
      {
        title: "The East Ridge",
        body: "A long ridge line that catches the first light. Every plot along its edge looks out over an unbroken horizon.",
        image:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2000&auto=format&fit=crop",
      },
      {
        title: "The Seasonal Stream",
        body: "A small stream that runs the length of the property in the monsoon. Its bed is left untouched and forms the natural park edge.",
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop",
      },
    ],
    location_info: {
      address:
        "Survey No. 214/A & 215, Hemadri Village, Kadthal Mandal, Rangareddy District",
      coordinates: { lat: 17.048, lng: 78.401 },
      nearby: [
        { name: "Rajiv Gandhi Intl. Airport", distance: "45 min" },
        { name: "ORR Junction (Exit 14)", distance: "22 min" },
        { name: "Amazon Fulfilment Centre", distance: "18 min" },
        { name: "Symbiosis University", distance: "26 min" },
        { name: "Kadthal Town Centre", distance: "6 min" },
        { name: "Srisailam Highway", distance: "4 min" },
      ],
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60870.9!2d78.35!3d17.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbb9b7!2sKadthal!5e0!3m2!1sen!2sin!4v1710000000000",
    },
    brochure: {
      fileName: "Hemadri-Groves-Brochure.pdf",
      fileSize: "8.4 MB",
      url: "/brochure/hemadri-groves.pdf",
    },
  },
  {
    slug: "hemadri-hills",
    name: "Hemadri Hills",
    tagline: "A hillside chapter, opening for private preview.",
    location: "Shabad, Hyderabad",
    region: "West corridor, near ORR",
    totalAcres: 28,
    accent: "earth",
    heroImage:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop",
    ],
    story: {
      eyebrow: "Coming into View",
      title:
        "A hillside chapter, drawn for the long light of the western evening.",
      body: [
        "Hemadri Hills sits on a gentle west-facing slope, chosen for the evening light and the long view over the Shabad plain. The land rises softly, then holds — a shelf, not a climb.",
        "The masterplan is with our landscape team, and the first release opens for private preview later this season. Every road here will follow the fall of the hill, and every plot will face its own sky.",
      ],
    },
    advantages: [
      {
        title: "Evening Light",
        body: "A west-facing shelf that holds the long amber hour every evening — a light that no re-orientation can create.",
        image:
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
      },
      {
        title: "ORR Proximity",
        body: "Twelve minutes from the Outer Ring Road, yet quiet enough that the loudest sound at dusk is a peacock in the neighbouring farm.",
        image:
          "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2000&auto=format&fit=crop",
      },
      {
        title: "Bedrock Foundation",
        body: "Shallow rock strata under most of the site — a stable, cool base that reduces build costs and keeps homes naturally temperate.",
        image:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2000&auto=format&fit=crop",
      },
      {
        title: "Cleared Lineage",
        body: "Two-generation family holding, cleared through independent legal review before the first drawing was made.",
        image:
          "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2000&auto=format&fit=crop",
      },
    ],
    amenities: [
      "Contour-following internal roads",
      "Native drought-tolerant landscaping",
      "Rainwater harvesting network",
      "Underground electric",
      "Solar street lighting",
      "Common sunset deck at the ridge",
      "Overhead water storage",
      "Managed entrance & security cabin",
    ],
    details: [
      { label: "Total Extent", value: "28 acres" },
      { label: "Plot Sizes", value: "250 – 450 sq. yd" },
      { label: "Road Widths", value: "30 ft" },
      { label: "Status", value: "Private Preview" },
      { label: "DTCP Status", value: "In Process" },
    ],
    landscape: [
      {
        title: "The Sunset Deck",
        body: "A common sit-out at the highest point of the ridge, held back from the plots. A place to stand and watch the day fold away, quietly.",
        image:
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
      },
      {
        title: "The West Slope",
        body: "A gentle four-degree fall that catches the evening light across nearly every plot — no correction, no engineering, just orientation.",
        image:
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop",
      },
    ],
    location_info: {
      address: "Shabad Mandal, Rangareddy District",
      coordinates: { lat: 17.12, lng: 78.11 },
      nearby: [
        { name: "ORR Junction (Exit 8)", distance: "12 min" },
        { name: "Rajiv Gandhi Intl. Airport", distance: "35 min" },
        { name: "Shabad Town Centre", distance: "8 min" },
      ],
      mapEmbed: "",
    },
    brochure: {
      fileName: "Hemadri-Hills-Preview.pdf",
      fileSize: "2.1 MB",
      url: "/brochure/hemadri-hills.pdf",
    },
  },
  {
    slug: "hemadri-shores",
    name: "Hemadri Shores",
    tagline: "A lakeside venture, drawings under way.",
    location: "Nagarjuna Sagar Road",
    region: "South-east corridor",
    totalAcres: 36,
    accent: "bark",
    heroImage:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop",
    ],
    story: {
      eyebrow: "In Quiet Development",
      title:
        "Drawings under way on the lakeside chapter — patient, unhurried, still.",
      body: [
        "Hemadri Shores looks out over a small reservoir, on land held in the family for two generations. The waterline is protected as green edge — no plot backs on to the lake, and no plot is denied its view.",
        "The masterplan is currently in draft. Register early to receive the first preview, before the layout is published.",
      ],
    },
    advantages: [
      {
        title: "Lake Frontage",
        body: "A protected, forty-metre green edge along the reservoir — walkable, planted, and held permanently as common land.",
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop",
      },
      {
        title: "Old Family Holding",
        body: "Two generations under a single title. Cleared, mapped, and preserved without the sub-divisions that trouble neighbouring parcels.",
        image:
          "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2000&auto=format&fit=crop",
      },
      {
        title: "Micro-climate",
        body: "The reservoir lowers ambient temperature by two to three degrees through summer — verified over three years of on-site readings.",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop",
      },
      {
        title: "Sagar Corridor",
        body: "The Hyderabad-Nagarjuna Sagar highway is receiving quiet infrastructure investment — a slow, patient corridor rather than a loud one.",
        image:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2000&auto=format&fit=crop",
      },
    ],
    amenities: [
      "Protected lake-edge walk",
      "Native lakeside landscaping",
      "Rainwater harvesting network",
      "Common jetty & viewing deck",
      "Underground electric",
      "Solar street lighting",
      "Overhead water storage",
      "Managed entrance & security cabin",
    ],
    details: [
      { label: "Total Extent", value: "36 acres" },
      { label: "Plot Sizes", value: "300 – 600 sq. yd" },
      { label: "Waterfront", value: "410 m of protected edge" },
      { label: "Status", value: "In Planning" },
      { label: "DTCP Status", value: "In Process" },
    ],
    landscape: [
      {
        title: "The Lake Walk",
        body: "A shaded walking path along the reservoir edge, kept as common land in perpetuity. No plot backs on to the water, and no plot is denied its view.",
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop",
      },
      {
        title: "The Viewing Deck",
        body: "A single, quiet timber deck at the widest point of the reservoir. A place for morning tea and evening pause, held for everyone.",
        image:
          "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2000&auto=format&fit=crop",
      },
    ],
    location_info: {
      address: "Nagarjuna Sagar Road, Rangareddy District",
      coordinates: { lat: 16.9, lng: 78.5 },
      nearby: [
        { name: "Sagar Highway", distance: "5 min" },
        { name: "Rajiv Gandhi Intl. Airport", distance: "60 min" },
      ],
      mapEmbed: "",
    },
    brochure: {
      fileName: "Hemadri-Shores-Notice.pdf",
      fileSize: "1.2 MB",
      url: "/brochure/hemadri-shores.pdf",
    },
  },
];

export const primaryVenture = ventures[0];

export function getVenture(slug: string): Venture | undefined {
  return ventures.find((v) => v.slug === slug);
}
