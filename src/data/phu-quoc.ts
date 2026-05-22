import { Package, ItineraryDay, HotelTier, Experience, FAQ, Testimonial, RelatedDestination, ProcessStep, DestinationTheme, TrustBadge } from "@/lib/shared/types";

export const phuQuocTheme: DestinationTheme = {
  accentColor: "#0F766E", // Muted premium emerald teal matching Six Senses / Aman
  accentSoft: "rgba(15, 118, 110, 0.12)",
  motif: "Quiet Luxury Tropical Escape",
};

export const phuQuocTrustBadges: TrustBadge[] = [
  { icon: "Plane", label: "Visa-free 30 days" },
  { icon: "Sparkles", label: "Luxury resort curated" },
  { icon: "Heart", label: "Couple-first itineraries" },
  { icon: "ShieldCheck", label: "24/7 concierge support" },
];

export const phuQuocIntro = {
  eyebrow: "The Art of Slow Travel",
  heading: "An Island of Quiet Sanctuary",
  text: "Phu Quoc does not shout. It whispers in the soft rustle of palms along Khem Beach, in the cool sea fog rising from Emerald Bay after an afternoon rain, and in the amber glow of sunsets that paint the Gulf of Thailand. This is a private alternative to the hurried rhythms of tourist strips — a tropical escape designed for couples who seek quiet luxury, elegant isolation, and unmatched architectural design.",
};

export const phuQuocSplitExperiences = [
  {
    title: "Bai Sao Beach",
    subtitle: "Sanctuary of White Sands",
    desc: "A curved crescent of sand so fine it feels like powder underfoot. Gentle warm waters colored in light shades of jade. Here, we arrange private shaded loungers far away from the commercial crowds, letting you experience the shore exactly as nature intended.",
    image: "/images/phu-quoc/baisao.jpg",
  },
  {
    title: "Hon Thom Cable Car",
    subtitle: "Flight Over the Gulf",
    desc: "Glider above the ocean inside a private cabin on the world's longest oversea cable car system. Watch fishing fleets float like toys on the blue carpet below as you glide toward pristine eco-glades at sunset.",
    image: "/images/phu-quoc/cablecar.jpg",
  },
  {
    title: "Emerald Bay",
    subtitle: "Aman-Inspired Seclusion",
    desc: "Tucked inside Phu Quoc's most exclusive cove, Emerald Bay is a sanctuary where pristine tropical forests meet calm, transparent waters. It is the architectural base for the island's most legendary resort designs.",
    image: "/images/phu-quoc/jwmarriott.jpg",
  },
  {
    title: "Fingernail Island",
    subtitle: "Private Islet Snorkeling",
    desc: "Navigate the remote southern archipelago on a private speedboat. Step onto a tiny islet surrounded by pure turquoise shallows and enjoy snorkeling along untouched coral gardens without another boat in sight.",
    image: "/images/phu-quoc/fingernail-island.jpg",
  },
];

export const phuQuocResorts = [
  {
    name: "JW Marriott Emerald Bay",
    tagline: "Architectural Storytelling by Bill Bensley",
    desc: "A fantasy university campus transformed into a beachfront luxury resort. Elegant French colonial arches, pastel coves, and direct access to pristine sands.",
    image: "/images/phu-quoc/jwmarriott.jpg",
    accent: "Michelin-tier dining & Chanterelle Spa",
  },
  {
    name: "Regent Phu Quoc",
    tagline: "Ultra-Minimal Ocean Suites",
    desc: "Clean geometric lines, private infinity plunge pools, and private butler systems. Designed for travelers who appreciate absolute, quiet sophistication.",
    image: "/images/phu-quoc/hero.jpg",
    accent: "Private luxury sunset yacht charters",
  },
  {
    name: "Premier Village Resorts",
    tagline: "Secluded Oceanfront Pool Villas",
    desc: "Perched high on limestone cliffs at the southern tip of the island. Glass walls, sunset decks, and private pathways winding down to hidden tide pools.",
    image: "/images/phu-quoc/sunset.jpg",
    accent: "Absolute 360-degree ocean views",
  },
];

export const phuQuocRituals = [
  {
    title: "Floating Breakfast Ritual",
    description: "Fresh exotic fruits, warm croissants, local coffee, and custom prosecco served on a floating tray in your villa's private plunge pool at sunrise.",
    image: "/images/phu-quoc/floating-breakfast.jpg",
  },
  {
    title: "Sunset Cable Car Ritual",
    description: "Glide silently over the vast ocean as the sun drops behind the horizon, bathing the entire Gulf of Thailand in shades of warm amber.",
    image: "/images/phu-quoc/sunset-cablecar.jpg",
  },
  {
    title: "Couple Spa Escape",
    description: "A 120-minute therapeutic body massage in an open-air beachfront pavilion, accompanied by the gentle cadence of ocean waves.",
    image: "/images/phu-quoc/couple-spa.jpg",
  },
  {
    title: "Candlelight Beach Dinner",
    description: "A private white-canopy table set directly on the sand under a blanket of stars, featuring a custom curated multi-course seafood menu.",
    image: "/images/phu-quoc/candlelight-dinner.jpg",
  },
  {
    title: "Private Island Day",
    description: "Cruise on a custom speedboat to a deserted sandy key. Enjoy chilled champagne and fresh tropical platters prepared by your private crew.",
    image: "/images/phu-quoc/private-island.jpg",
  },
];

export const phuQuocTimeline = [
  {
    title: "Hon Thom Cable Car",
    note: "Ocean Glider flight",
    desc: "A scenic silent journey over turquoise waters.",
    image: "/images/phu-quoc/cablecar.jpg",
  },
  {
    title: "Sunset Sanato",
    note: "Art Installations Beach",
    desc: "Iconic artistic silhouettes against warm crimson sunsets.",
    image: "/images/phu-quoc/sunset.jpg",
  },
  {
    title: "Phu Quoc Night Market",
    note: "Authentic Seafood Curation",
    desc: "Try locally roasted pepper oysters and fresh ice cream rolls.",
    image: "/images/phu-quoc/night-market.jpg",
  },
  {
    title: "Pearl Farm Tour",
    note: "Island Cultivation",
    desc: "Observe live black pearl extractions at a historic estate.",
    image: "/images/phu-quoc/pearl-farm.jpg",
  },
  {
    title: "Fingernail Island",
    note: "Deserted Beach",
    desc: "A completely quiet, private islet beach escape.",
    image: "/images/phu-quoc/fingernail-island.jpg",
  },
];

export const phuQuocPackages: Package[] = [
  {
    id: "phu-quoc-honeymoon-classic",
    name: "Phu Quoc Honeymoon Classic",
    duration: "6 Days / 5 Nights",
    idealFor: "Newlyweds seeking quiet beaches",
    price: "₹68,500",
    highlights: [
      "5 Nights stay in boutique pool resort",
      "Private return oversea cable car flight",
      "Sao Beach private daybeds & cocktail lounge",
      "Private southern islet custom speedboat charter",
      "Daily gourmet breakfasts & airport transfers",
    ],
    image: "/images/phu-quoc/package-classic.jpg",
    alt: "Phu Quoc Honeymoon Classic",
    whatsappMessage: "Hi Outbound Travelers! I want to request details for the Phu Quoc Honeymoon Classic trip (6 Days).",
    seasonal: false,
  },
  {
    id: "phu-quoc-quiet-luxury-escape",
    name: "Quiet Luxury Escape",
    duration: "6 Days / 5 Nights",
    idealFor: "Travelers seeking absolute seclusion",
    price: "₹92,000",
    highlights: [
      "Vetted 5★ beachfront suites",
      "Complimentary couple's beachfront spa ritual",
      "Sunset Sanato photography & cocktail lounge access",
      "Private custom speedboat islet hopping & snorkel",
      "Daily elaborate breakfast spreads & airport transfers",
    ],
    image: "/images/phu-quoc/package-quick.jpg",
    alt: "Quiet Luxury Escape Phu Quoc",
    whatsappMessage: "Hi Outbound Travelers! Please share details and pricing for the Quiet Luxury Escape package.",
    seasonal: false,
  },
  {
    id: "phu-quoc-ultra-luxury",
    name: "Phu Quoc Ultra Luxury",
    duration: "6 Days / 5 Nights",
    idealFor: "Discerning couples wanting the absolute best",
    price: "₹1,32,000",
    highlights: [
      "Vetted 5★ private pool villa (JW Marriott / Regent)",
      "Daily custom floating breakfast ritual in-villa",
      "Private yacht charter with champagne at sunset",
      "Private candlelit white-canopy beach seafood dinner",
      "Dedicated butler service & premium airport pick-ups",
    ],
    image: "/images/phu-quoc/package-luxury.jpg",
    alt: "Phu Quoc Ultra Luxury",
    whatsappMessage: "Hi Outbound Travelers! Please customize a VVIP 5★ Phu Quoc Ultra Luxury trip for us.",
    seasonal: false,
  },
  {
    id: "vietnam-phu-quoc-journey",
    name: "Vietnam + Phu Quoc Journey",
    duration: "9 Days / 8 Nights",
    idealFor: "Culture seekers wanting beach endings",
    price: "₹96,500",
    highlights: [
      "3 Nights in historical Saigon boutique stays",
      "Mekong Delta private canal wooden boat cruise",
      "Cu Chi Tunnels historical exploration guide",
      "5 Nights quiet resort bliss in Phu Quoc coves",
      "All internal domestic flights & premium transits",
    ],
    image: "/images/phu-quoc/package-combo.jpg",
    alt: "Vietnam and Phu Quoc Journey",
    whatsappMessage: "Hi Outbound Travelers! Please send itineraries for the Vietnam + Phu Quoc Journey.",
    seasonal: false,
  },
];

export const phuQuocItinerary: ItineraryDay[] = [
  {
    day: 1,
    title: "Arrival Phu Quoc – Step Into Sanctuary",
    description: "Land at Phu Quoc Airport. Your dedicated driver welcomes you and transfers you in premium comfort to your beachfront resort. Spend the afternoon checking in, enjoying a chilled local drink on warm sands, and letting the ocean breezes slow your pace.",
    stay: "Quiet Beachfront Resort",
    highlights: ["Private Airport Pick-up", "Beachfront Sunset Cocktails", "Slow Check-in"],
  },
  {
    day: 2,
    title: "Hon Thom Sea Cable Car Flight & Islet Sunsets",
    description: "Embark on a spectacular high-altitude flight over emerald fishing bays inside a private cable car cabin. Arrive at Hon Thom islet, enjoy fresh coconut water under palms, and glide back to the resort in time for private sunset photography on the cove sands.",
    stay: "Quiet Beachfront Resort",
    highlights: ["Oversea Cable Car return tickets", "Sunset Sanato beach art access", "Resort Beach Dinner"],
  },
  {
    day: 3,
    title: "Sao Beach Powdery Sands & Coconut Swings",
    description: "Spend a slow morning lounging on the legendary powdery white sands of Sao Beach. Walk on shallow emerald waters, swing on coco palms overlooking clear lagoons, and enjoy a curated beachside lunch arranged by our private ground team.",
    stay: "Quiet Beachfront Resort",
    highlights: ["Sao Beach Private Lounge", "Coconut Tree Swings Photos", "Curated Beachfront Lunch"],
  },
  {
    day: 4,
    title: "Private Speedboat Tour – Secluded Southern Islets",
    description: "Navigate deep into the pristine southern islets aboard a private custom speedboat. Stop at Fingernail and Gam Ghi islands. Snorkel clear coral trails and enjoy an intimate champagne picnic set up by your private crew on a completely deserted sandy cove.",
    stay: "Quiet Beachfront Resort",
    highlights: ["Private Custom Speedboat Charter", "Islet Coral Snorkeling", "Champagne Beach Picnic"],
  },
  {
    day: 5,
    title: "Pearl Farming Estates & Organic Island Curations",
    description: "Visit a historic, slow-paced black pearl farming estate to learn cultivation methods. Spend the afternoon exploring organic pepper plantations and forest preserves. In the evening, explore street foods and local crafts at the cozy Phu Quoc Night Market.",
    stay: "Quiet Beachfront Resort",
    highlights: ["Pearl Cultivation Tour", "Island Organic Pepper Plantation", "Vibrant Phu Quoc Night Market"],
  },
  {
    day: 6,
    title: "Final Ocean Views & Departure",
    description: "Awake to the quiet cadence of waves. Enjoy a final slow oceanfront breakfast, walk along the sands one last time, and let your private driver transfer you back to the airport in comfort for your return flights.",
    stay: "Departure Flight",
    highlights: ["Slow Beachside Breakfast Buffet", "Private Airport Drop-off", "Happy Memories"],
  },
];

export const phuQuocHotelTiers: HotelTier[] = [
  {
    tier: "Premium Boutique (4★)",
    description: "Vetted premium properties situated directly on clean sands, featuring elegant infinity pools, beach bars, tropical gardens, and highly rated modern hospitality.",
    price: "Included in Base Cost",
  },
  {
    tier: "Ultra-Luxury Resorts (5★)",
    description: "Indulge in award-winning stays like JW Marriott Emerald Bay, Regent Phu Quoc, or InterContinental. Experience oceanfront pool villas, butler support, and Michelin-tier beachfront restaurants.",
    price: "Upgrade Available",
  },
];

export const phuQuocFAQs: FAQ[] = [
  {
    q: "Is Phu Quoc visa-free for Indian passport holders?",
    a: "Yes! Phu Quoc is a special economic zone offering a 100% visa-free entry to all international tourists (including Indian passport holders) for stays up to 30 days. No paperwork, visa fees, or embassy visits are required.",
  },
  {
    q: "What makes Phu Quoc a quiet alternative to Bali?",
    a: "Bali is beautiful but highly crowded and commercially dense. Phu Quoc provides absolute serenity, powdery white sands (Bai Sao) with calm, protected warm waters, low-key luxury resorts, and high-end privacy without traffic noise.",
  },
  {
    q: "Can we fully customize the itinerary daily?",
    a: "Yes. All our Phu Quoc packages are fully customizable. You can extend stays, change flights, add private sunset yacht charters, or upgrade your beachfront stay to the JW Marriott Emerald Bay.",
  },
  {
    q: "Are vegetarian meals easy to arrange?",
    a: "Absolutely. We secure delicious daily breakfast spreads at our vetted resorts and curate a list of exceptional Indian, vegetarian, and Jain-friendly restaurants across the island for your dinners and lunches.",
  },
];

export const phuQuocTestimonials: Testimonial[] = [
  {
    quote: "An absolute dream. No visa hassle, pure white sands, and the JW Marriott resort was the most spectacular hotel we've ever stayed in. Outbound Travelers handled all our transfers flawlessly.",
    name: "Dr. Rohit & Shalini",
    tripType: "Honeymoon Escape",
    city: "Bangalore",
    date: "Jan 2026",
    rating: 5,
    photo: "/images/phu-quoc/hero.jpg",
  },
  {
    quote: "If you want a quiet alternative to crowded Phuket or Bali, fly to Phu Quoc! The sea cable car was a visual marvel and the private boat tour was incredibly romantic. Outstanding ground support by Outbound guides.",
    name: "Pooja & Abhinav",
    tripType: "Anniversary Getaway",
    city: "Coimbatore",
    date: "March 2026",
    rating: 5,
    photo: "/images/phu-quoc/hero.jpg",
  },
];

export const phuQuocRelated: RelatedDestination[] = [
  {
    name: "Thailand Classic",
    image: "/images/thailand/hero.jpg",
    href: "/thailand",
  },
  {
    name: "Langkawi Luxury",
    image: "/images/langkawi/hero.jpg",
    href: "/malaysia",
  },
  {
    name: "Meghalaya Serenity",
    image: "/images/meghalaya/hero.jpg",
    href: "/meghalaya",
  },
  {
    name: "Sikkim Peaks",
    image: "/images/sikkim/hero.jpg",
    href: "/sikkim",
  },
];

export const phuQuocProcessSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Design Your Vision",
    description: "Tell us your preferred dates, stay tier, and romantic highlights (floating breakfasts or yacht cruises).",
  },
  {
    step: 2,
    title: "Get Custom Itinerary",
    description: "Our Phu Quoc island specialists curate a detailed day-wise proposal tailored to your pace.",
  },
  {
    step: 3,
    title: "Refine & Perfect",
    description: "Modify excursions, upgrade beachfront properties, or add extra days to your liking.",
  },
  {
    step: 4,
    title: "One-Click Booking",
    description: "Secure flights, domestic transits, and luxury stays through our trusted premium payment gateway.",
  },
  {
    step: 5,
    title: "Luxe On-Trip Concierge",
    description: "Arrive stress-free. Have live, 24/7 WhatsApp guidance from our English-speaking island crew.",
  },
];

export const phuQuocInclusions = [
  "5 Nights stay in premium beachfront properties",
  "Daily elaborate international breakfast spreads",
  "Roundtrip airport transfers in private executive van",
  "Hon Thom return sea cable car tickets included",
  "Private custom speedboat charter for islet hopping",
  "Complimentary Sao Beach romantic swing photo access",
  "Vetted english-speaking island guide during excursions",
  "Local pearl cultivation farm admission voucher",
  "24/7 dedicated local WhatsApp ground concierge support",
  "All Vietnam tourism taxes & resort service charges",
];

export const phuQuocExclusions = [
  "International airfare to Phu Quoc Airport",
  "Personal dining (lunch & dinner not mentioned in itinerary)",
  "Optional extreme adventure sports (jet ski, paragliding)",
  "Local guide/driver gratuities & personal tipping",
  "Travel insurance policies (available as add-ons)",
];

export const phuQuocSeasons = [
  {
    title: "The Dry Sanctuary",
    months: "November – March",
    vibe: "Clear skies & calm emerald seas",
    desc: "The absolute peak dry season. Brilliant warm sun, calm transparent Gulf tides, and cool, fresh sea breezes perfect for beach walks and island snorkeling.",
    image: "/images/phu-quoc/hero.jpg",
  },
  {
    title: "Warm Emerald coves",
    months: "April – May",
    vibe: "Shoulder season stillness",
    desc: "Warm tropical skies, absolute low crowd sizes, and extremely high boutique hotel savings. The sea is extremely still and calm during these months.",
    image: "/images/phu-quoc/sunset.jpg",
  },
  {
    title: "Tropical Mist & Spas",
    months: "June – October",
    vibe: "Refreshing afternoon showers",
    desc: "Lush tropical green forest scenery and warm refreshing rainfall periods. Ideal for indoor beachfront luxury couples massage retreats and empty private sands.",
    image: "/images/phu-quoc/jwmarriott.jpg",
  },
];
