import {
  MalaysiaPackage,
  Region,
  Experience,
  ItineraryDay,
  HotelTier,
  FAQItem,
  TestimonialItem,
} from "../types/malaysia";

export const packages: MalaysiaPackage[] = [
  {
    id: "malaysia-family-classic",
    title: "Malaysia Family Classic",
    duration: "6 Days / 5 Nights",
    price: "₹34,999",
    originalPrice: "₹39,999",
    shortDescription: "Our bestselling family package covering the iconic Petronas Towers, theme parks in Genting, and culture at Batu Caves.",
    highlights: ["Petronas Twin Towers Access", "Genting Highlands Day Tour", "Sunway Lagoon Theme Park ticket", "Batu Caves & KL City Tour"],
    image: "/images/malaysia/hero.jpg",
    isPopular: true,
    badge: "Best Seller",
    idealFor: "Families & Kids",
  },
  {
    id: "malaysia-honeymoon",
    title: "Malaysia Honeymoon Romantic",
    duration: "7 Days / 6 Nights",
    price: "₹42,500",
    originalPrice: "₹48,000",
    shortDescription: "A romantic seaside getaway in Langkawi combined with modern high-end city stays in Kuala Lumpur.",
    highlights: ["Sunset Yacht Cruise in Langkawi", "Private Airport Transfers", "Candlelight Dinner at Pantai Cenang", "Premium KL City View Room"],
    image: "/images/malaysia/langkawi.jpg",
    badge: "Couple Special",
    idealFor: "Honeymooners",
  },
  {
    id: "malaysia-extended",
    title: "Malaysia Explorer Extended",
    duration: "9 Days / 8 Nights",
    price: "₹54,999",
    originalPrice: "₹62,000",
    shortDescription: "Slow travel through Malaysia's best facets: Penang street food, Genting amusement, Langkawi beaches, and KL city.",
    highlights: ["George Town UNESCO Guided Trail", "Langkawi Cable Car & Sky Bridge", "Batu Caves & Genting Cable Car", "Internal Flights Included"],
    image: "/images/malaysia/penang.jpg",
    idealFor: "Culture & Beach Lovers",
  },
  {
    id: "singapore-malaysia-combo",
    title: "Singapore + Malaysia Megacity Combo",
    duration: "8 Days / 7 Nights",
    price: "₹68,500",
    originalPrice: "₹75,000",
    shortDescription: "Two nations in one epic journey. Experience the cutting-edge luxury of Singapore and the cultural richness of Malaysia.",
    highlights: ["Universal Studios Singapore", "Gardens by the Bay Double Dome", "Kuala Lumpur City Lights Tour", "Genting Highlands Cable Car"],
    image: "/images/malaysia/petronas.jpg",
    badge: "2-in-1 Country",
    idealFor: "First-time International",
  },
  {
    id: "malaysia-quick-family",
    title: "Malaysia Quick Family Escape",
    duration: "5 Days / 4 Nights",
    price: "₹29,999",
    originalPrice: "₹34,000",
    shortDescription: "A compact yet thrilling vacation crafted for quick getaways. Highlights city sightseeing and infinite fun.",
    highlights: ["Sunway Lagoon Multi-Park Ticket", "Petronas Photo Stop", "Batu Caves Climb", "Chauffeur-driven throughout"],
    image: "/images/malaysia/batu-caves.jpg",
    idealFor: "Quick Weekend Getaways",
  },
  {
    id: "malaysia-luxury",
    title: "Malaysia Ultra Luxury Signature",
    duration: "6 Days / 5 Nights",
    price: "₹75,000",
    originalPrice: "₹85,000",
    shortDescription: "Curated high-end boutique living. Stay at premium villas in Langkawi and sky-villas overlooking KL's skyline.",
    highlights: ["Ritz-Carlton Langkawi Stay", "Private Yacht Charter with dinner", "Exclusive VIP Tour of Petronas", "Private Mercedes Sprinter transfers"],
    image: "/images/malaysia/hero.jpg",
    badge: "Ultra Luxury",
    idealFor: "Elite Travelers",
  },
];

export const regions: Region[] = [
  {
    id: "kuala-lumpur",
    title: "Kuala Lumpur",
    description: "The metallic heartbeat of Malaysia. A gleaming jungle of ultra-modern skyscrapers, luxury malls, historical landmarks, and world-renowned food courts.",
    image: "/images/malaysia/petronas.jpg",
    highlights: ["Petronas Twin Towers", "Merdeka Square", "Bukit Bintang shopping", "Jalan Alor Street Food"],
    tag: "Metropolis",
  },
  {
    id: "langkawi",
    title: "Langkawi",
    description: "An archipelago of 99 tropical islands. Pristine beaches, turquoise South China Sea waters, lush rain forests, duty-free shopping, and thrilling cable car sky bridges.",
    image: "/images/malaysia/langkawi.jpg",
    highlights: ["Langkawi Sky Bridge", "Pantai Cenang Beach", "Island Hopping Yacht Tour", "Duty-Free Shopping"],
    tag: "Tropical Paradise",
  },
  {
    id: "penang",
    title: "Penang",
    description: "The food capital of Southeast Asia. Steeped in UNESCO heritage, rich culture, stunning heritage buildings, and the world's most Instagrammable street murals.",
    image: "/images/malaysia/penang.jpg",
    highlights: ["George Town Heritage Walk", "Penang Hill Cable Railway", "Kek Lok Si Temple", "Street Art Photography"],
    tag: "UNESCO Heritage & Food",
  },
  {
    id: "genting-highlands",
    title: "Genting Highlands",
    description: "A cool mountain resort nestled above the clouds. Home to indoor/outdoor massive amusement parks, retail galleries, and Malaysia's premier hilltop casino.",
    image: "/images/malaysia/batu-caves.jpg",
    highlights: ["Awana SkyWay Cable Car", "Genting SkyWorlds Theme Park", "Chin Swee Caves Temple", "18°C Cool Mountain Air"],
    tag: "Highland Amusement",
  },
];

export const experiences: Experience[] = [
  {
    id: "petronas-towers",
    title: "Petronas Twin Towers",
    description: "Cross the spectacular 170m-high Skybridge connecting the world's tallest twin towers for a bird's-eye view of Kuala Lumpur.",
    image: "/images/malaysia/petronas.jpg",
    tag: "City Landmark",
  },
  {
    id: "langkawi-sky-bridge",
    title: "Langkawi Sky Bridge",
    description: "Walk along a curved pedestrian suspension bridge suspended 660 meters above sea level between two mountain peaks.",
    image: "/images/malaysia/langkawi.jpg",
    tag: "Mountain Adventure",
  },
  {
    id: "batu-caves",
    title: "Batu Caves Temple",
    description: "Climb the 272 vibrant rainbow-colored stairs guarded by the giant gold Lord Murugan statue into ancient limestone cave temples.",
    image: "/images/malaysia/batu-caves.jpg",
    tag: "Cultural Wonder",
  },
  {
    id: "genting-skyworlds",
    title: "Genting SkyWorlds Theme Park",
    description: "Soar above the clouds on the high-speed cable car to enjoy a world-class outdoor amusement park with immersive themed lands.",
    image: "/images/malaysia/batu-caves.jpg",
    tag: "Family Amusement",
  },
  {
    id: "penang-street-art",
    title: "Penang George Town Street Art",
    description: "Embark on an interactive treasure hunt for historical George Town's iconic 3D bicycle murals and iron-caricatures.",
    image: "/images/malaysia/penang.jpg",
    tag: "Art & Culture",
  },
  {
    id: "jalan-alor",
    title: "Jalan Alor Food Street",
    description: "Dine like a local at a sensory food street glowing with red lanterns. Try satay, butter prawns, and freshly squeezed durian juices.",
    image: "/images/malaysia/petronas.jpg",
    tag: "Culinary Feast",
  },
  {
    id: "sunway-lagoon",
    title: "Sunway Lagoon Theme Park",
    description: "Dive into 6 distinct parks: Water Park, Amusement Park, Wildlife Park, Extreme Park, Scream Park, and Nickelodeon Lost Lagoon.",
    image: "/images/malaysia/hero.jpg",
    tag: "Theme Park Splash",
  },
  {
    id: "island-hopping-cruise",
    title: "Langkawi Sunset Yacht Cruise",
    description: "Sail on a premium catamaran past majestic limestone karst islands, plunge into the natural seawater jacuzzi net, and enjoy a gourmet BBQ.",
    image: "/images/malaysia/langkawi.jpg",
    tag: "Premium Leisure",
  },
];

export const sampleItinerary: ItineraryDay[] = [
  {
    day: 1,
    title: "Arrival in Kuala Lumpur & Night City Lights Tour",
    activities: [
      "Touch down at KLIA Airport with warm local welcome.",
      "Private transfer to your luxury hotel overlooking the KL skyline.",
      "Evening city lights tour: Visit illuminated Petronas Towers, Saloma Link Bridge, and dynamic Bukit Bintang.",
    ],
    meals: ["N/A"],
    stay: "Kuala Lumpur (4-Star / 5-Star)",
  },
  {
    day: 2,
    title: "Batu Caves Climb & Genting Highlands Highland Escape",
    activities: [
      "Visit the iconic Batu Caves and admire the golden 140ft Lord Murugan statue.",
      "Scenic drive to Genting Highlands, boarding the Awana Skyway glass cable car.",
      "Explore Chin Swee Caves Temple and enjoy Genting SkyWorlds outdoor theme park games.",
    ],
    meals: ["Breakfast"],
    stay: "Kuala Lumpur (4-Star / 5-Star)",
  },
  {
    day: 3,
    title: "Thrills & Splashes at Sunway Lagoon Theme Park",
    activities: [
      "Full day pass to Sunway Lagoon: 6 unique parks in 1 mega destination.",
      "Enjoy the world's largest surf wave pool, high-speed waterslides, and the pedestrian suspension bridge.",
      "Evening drop back to hotel. Dinner recommendation: dining at Jalan Alor.",
    ],
    meals: ["Breakfast"],
    stay: "Kuala Lumpur (4-Star / 5-Star)",
  },
  {
    day: 4,
    title: "Fly to Langkawi & Beachside Sunset Leisure",
    activities: [
      "Morning flight from Kuala Lumpur to the tropical paradise of Langkawi.",
      "Check-in at your premium beachfront resort on Pantai Cenang beach.",
      "Unwind on the soft sand, catch a beautiful sunset, or explore local night duty-free markets.",
    ],
    meals: ["Breakfast"],
    stay: "Langkawi Premium Beachfront Resort",
  },
  {
    day: 5,
    title: "Langkawi SkyBridge & Shared Sunset Yacht Cruise with BBQ",
    activities: [
      "Board the Langkawi Cable Car to the curved SkyBridge suspended between mountain peaks.",
      "Afternoon boarding of a luxury yacht cruise around pristine Southern Islands.",
      "Indulge in a saltwater jacuzzi net experience, sunset views, and free-flow gourmet BBQ buffet dinner.",
    ],
    meals: ["Breakfast", "BBQ Dinner"],
    stay: "Langkawi Premium Beachfront Resort",
  },
  {
    day: 6,
    title: "Mangrove Safari & Airport Transfer for Homebound Journey",
    activities: [
      "Optional early morning boat safari through Kilim Karst Geoforest Park mangroves.",
      "Last-minute souvenir duty-free shopping (chocolates, perfume).",
      "Private transfer to Langkawi Airport for your flight back home via Kuala Lumpur.",
    ],
    meals: ["Breakfast"],
    stay: "N/A",
  },
];

export const hotelTiers: HotelTier[] = [
  {
    name: "Premium Tier",
    description: "Modern upscale 4-star hotels positioned in primary city zones or beachfronts, featuring gorgeous infinity pools, delicious buffet spreads, and top-tier hospitality.",
    priceRange: "₹4,500 - ₹7,000 / night",
    features: [
      "City Center hotels in KL (e.g., Mercure Shaw Parade / Capri by Fraser)",
      "Beachfront resort in Langkawi (e.g., Aloft Pantai Tengah / Pelangi Beach Resort standard)",
      "Daily international breakfast buffet included",
      "Rooftop infinity pool access",
      "Complimentary high-speed Wi-Fi & fitness room",
    ],
    recommended: false,
    stars: 4,
  },
  {
    name: "Luxury Tier",
    description: "World-renowned international 5-star iconic properties offering spectacular views, customized service, premium spas, and private balconies.",
    priceRange: "₹9,500 - ₹22,000+ / night",
    features: [
      "Premium view properties in KL (e.g., EQ Kuala Lumpur / W Kuala Lumpur)",
      "Elite private villa resorts in Langkawi (e.g., The Ritz-Carlton / The Datai)",
      "Private luxury airport lounge access & transfers",
      "Personalized butler service & VIP priority access",
      "Access to luxury club lounge with complimentary cocktails",
    ],
    recommended: true,
    stars: 5,
  },
];

export const faqs: FAQItem[] = [
  {
    question: "Is Malaysia really visa-free for Indian travelers?",
    answer: "Yes, currently Indian passport holders can enter Malaysia visa-free for up to 30 days. You do not need to apply or pay for a visa beforehand. You only need to register the Malaysia Digital Arrival Card (MDAC) online 3 days before travel, which takes 2 minutes and is completely free.",
  },
  {
    question: "Are there direct flights from India, and how long does it take?",
    answer: "Yes, Malaysia is incredibly accessible. Direct flights to Kuala Lumpur (KUL) operate daily from major Indian cities including Chennai, Bengaluru, Kochi, Mumbai, New Delhi, and Hyderabad. Flight times are extremely short: just 4 hours from Chennai and Bengaluru, and 5.5 hours from Mumbai.",
  },
  {
    question: "Is it easy to find vegetarian and Indian food in Malaysia?",
    answer: "Absolutely! Due to a large local Indian diaspora, finding high-quality Indian vegetarian food is extremely easy. In Kuala Lumpur, districts like Little India (Brickfields) and Bukit Bintang host dozens of vegetarian South Indian and North Indian restaurants. Even international fast-food chains are fully Halal-certified and offer veg options.",
  },
  {
    question: "What is the local currency, and is it expensive?",
    answer: "The local currency is the Malaysian Ringgit (MYR). 1 MYR is equivalent to roughly ₹18 - ₹19 INR. Malaysia is highly economical and offers much better value for money compared to Europe or the Americas, making luxury hotels, dining, and premium theme parks highly affordable.",
  },
  {
    question: "When is the best season to visit Malaysia?",
    answer: "Malaysia is a warm, tropical, year-round destination with temperatures hovering between 25°C to 32°C. The dry season (November to April) is optimal for Langkawi's beaches and Penang's culture. Even during the monsoon seasons, showers are brief tropical bursts followed by bright sunshine, meaning sightseeing is rarely disrupted.",
  },
  {
    question: "Is Malaysia suitable for families with infants or elderly travelers?",
    answer: "Extremely. Malaysia is highly modern, super clean, and well-designed. Sidewalks in Kuala Lumpur are stroller and wheelchair-friendly, shopping malls have top-tier baby changing rooms, public transport is ultra-modern, and private chauffeur-driven cars are widely available at very affordable rates.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: "testi-1",
    name: "Subhash & Deepa Nair",
    role: "Family of 4 with Kids",
    text: "We booked the Malaysia Family Classic. The entire trip was completely stress-free! The visa-free entry saved us thousands, and Sunway Lagoon was an absolute hit for our two kids. Our chauffeur was punctual, highly knowledgeable, and very polite.",
    rating: 5,
    tag: "Family Trip",
    location: "Bengaluru",
  },
  {
    id: "testi-2",
    name: "Ananya & Rohit Sen",
    role: "Honeymoon Couple",
    text: "The Langkawi sunset yacht cruise was breathtaking. Staying at the luxury tier properties overlooking Pantai Tengah Cenang made our honeymoon so romantic. We loved the combination of city shopping in KL and beach relaxation in Langkawi.",
    rating: 5,
    tag: "Romantic Getaway",
    location: "Kolkata",
  },
  {
    id: "testi-3",
    name: "Vikram Malhotra",
    role: "First Time Abroad",
    text: "Malaysia was my very first international trip. I was nervous about immigration, food, and transport, but Outbound Travelers made everything a breeze. Direct flights from Kochi and the vegetarian food in KL were perfect. A solid 10/10!",
    rating: 5,
    tag: "First International",
    location: "Kochi",
  },
];
