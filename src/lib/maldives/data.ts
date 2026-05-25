import type {
  TrustBadge, Package, ItineraryDay, HotelTier,
  FAQ, Testimonial, RelatedDestination,
  Experience, WhatsAppConfig, ProcessStep, DestinationTheme, LeadFormConfig
} from '@/lib/shared/types'

/* ───── Maldives-specific types ───── */
export interface IslandLayer {
  id: string; title: string; subtitle: string; description: string; image: string; stat: string; statLabel: string
}
export interface VillaFeature {
  title: string; detail: string; icon: string
}
export interface OceanExperience {
  id: string; title: string; description: string; image: string; badge: string
}
export interface ResortCard {
  id: string; name: string; category: string; description: string; image: string; priceRange: string; highlights: string[]
}
export interface IslandStop {
  id: string; name: string; description: string; image: string; travelTime: string
}

/* ───── Main Data Tree ───── */
export const maldivesData = {
  meta: {
    title: 'Premium Maldives Tour Packages — Emerald Ocean Luxury | Outbound Travelers',
    description: 'Experience the Maldives through cinematic luxury. Overwater villas, private island stays, sunset dolphin cruises, and underwater dining curated for discerning travelers.',
    canonical: 'https://www.outboundtravelers.com/maldives',
    ogImage: '/images/maldives/hero.jpg',
    h1: 'Maldives — An Emerald Ocean Luxury Experience',
  },

  theme: {
    accentColor: '#0B3D2E',
    accentSoft: '#FAF7F2',
    motif: 'ocean-wave',
  } as DestinationTheme,

  whatsapp: {
    number: '919876543210',
    heroMessage: 'Hi Outbound Travelers! I want to plan a luxury Maldives vacation.',
    stickyMessage: 'Hi Outbound Travelers! I\'m interested in Maldives luxury packages.',
    floaterMessage: 'Hi Outbound Travelers! Can we discuss a custom Maldives trip?',
    finalCtaMessage: 'Hi Outbound Travelers! Ready to book my Maldives experience.',
    postFormMessage: 'Hi Outbound Travelers! I just submitted a Maldives inquiry.',
  } as WhatsAppConfig,

  leadForm: {
    title: 'Design Your Maldives Escape',
    subtitle: 'Share your dream. Our island specialists will craft a bespoke overwater paradise itinerary.',
    submitButtonText: 'Design My Island Experience',
    successMessage: 'Thank you. A Maldives luxury specialist will reach out shortly.',
    destinationId: 'maldives',
    destinationName: 'Maldives',
  } as LeadFormConfig,

  hero: {
    headline: 'Paradise Found.',
    subheadline: 'Drift into the world\'s most exclusive island paradise. Crystal lagoons, overwater villas at sunset, private sandbank dinners, and the infinite turquoise of the Indian Ocean — curated for those who seek perfection.',
    primaryCta: 'Design My Island Escape',
    secondaryCta: 'Speak to an Island Specialist',
    desktopImage: '/images/maldives/hero.jpg',
  },

  trustBadges: [
    { icon: 'palmtree', label: 'Private Island Stays' },
    { icon: 'heart', label: 'Honeymoon Specialist' },
    { icon: 'waves', label: 'Ocean Adventures' },
    { icon: 'sparkles', label: 'All-Inclusive Luxury' },
  ] as TrustBadge[],

  layers: [
    { id: 'private', title: 'Private Island Luxury', subtitle: 'Your Own Piece of Paradise', description: 'Step onto your own private island where barefoot luxury meets pristine nature. White sand, swaying palms, and crystal waters — shared with no one but the ocean breeze.', image: '/images/maldives/private-island.jpg', stat: '1,192', statLabel: 'Coral Islands' },
    { id: 'overwater', title: 'Overwater Villas', subtitle: 'Floating Above Paradise', description: 'Wake to glass-floor views of reef fish, step from your deck into warm turquoise waters, and dine on your private overwater terrace as the sun melts into the Indian Ocean.', image: '/images/maldives/overwater.jpg', stat: '100+', statLabel: 'Luxury Resorts' },
    { id: 'honeymoon', title: 'Honeymoon Paradise', subtitle: 'Where Romance Lives', description: 'Sandbank dinners under stars, couples spa on the ocean, sunrise dolphin cruises, and petal-strewn villa arrivals — the Maldives is the world\'s ultimate romantic destination.', image: '/images/maldives/honeymoon.jpg', stat: '#1', statLabel: 'Honeymoon Destination' },
    { id: 'ocean', title: 'Ocean Adventures', subtitle: 'Dive Into Wonder', description: 'Snorkel with manta rays, dive pristine coral walls, kayak luminous lagoons at night, and dine in underwater restaurants surrounded by marine life.', image: '/images/maldives/snorkelling.jpg', stat: '2,500+', statLabel: 'Reef Species' },
    { id: 'spa', title: 'Luxury Spa Escapes', subtitle: 'Wellness Above Water', description: 'Overwater spa pavilions, Ayurvedic treatments with ocean sounds, couples massages at sunset — healing and luxury intertwined above the Indian Ocean.', image: '/images/maldives/spa.jpg', stat: '60+', statLabel: 'Spa Resorts' },
  ] as IslandLayer[],

  villaSection: {
    headline: 'Float Above Paradise',
    subheadline: 'Our curated overwater villas offer glass-floor ocean views, private infinity pools, and direct lagoon access — luxury reimagined above the turquoise Indian Ocean.',
    features: [
      { title: 'Glass-Floor Ocean Views', detail: 'Watch reef sharks and rays glide beneath your living room through crystal-clear glass floors', icon: 'eye' },
      { title: 'Private Infinity Pool', detail: 'Your personal plunge pool merging with the horizon — an infinity of turquoise blue', icon: 'waves' },
      { title: 'Direct Lagoon Access', detail: 'Step from your private deck into warm, crystal-clear waters teeming with marine life', icon: 'anchor' },
    ] as VillaFeature[],
    stats: 'Glass floor • Infinity pool • Butler service • Sunset deck',
    reviewSnippet: { name: 'Nisha & Arjun', quote: 'Waking up to dolphins playing beneath our glass floor was the most magical moment of our lives.', rating: 5 },
  },

  oceanExperiences: [
    { id: 'scuba', title: 'Scuba Diving', description: 'Explore pristine coral walls, shipwrecks, and underwater caves with PADI-certified instructors. Encounter whale sharks, manta rays, and vibrant reef ecosystems.', image: '/images/maldives/scuba.jpg', badge: 'Adventure' },
    { id: 'snorkelling', title: 'House Reef Snorkelling', description: 'Step off your villa deck into crystal waters teeming with tropical fish, sea turtles, and baby reef sharks — no boat needed.', image: '/images/maldives/snorkelling.jpg', badge: 'Must Do' },
    { id: 'dolphin', title: 'Sunset Dolphin Cruise', description: 'A luxury catamaran cruise through spinner dolphin waters as the Maldivian sun paints the sky in coral and gold.', image: '/images/maldives/dolphin.jpg', badge: 'Romantic' },
    { id: 'underwater-dining', title: 'Underwater Restaurant', description: 'Dine 5 meters below sea level surrounded by panoramic ocean views at Ithaa or SEA — the world\'s most iconic underwater restaurants.', image: '/images/maldives/underwater.jpg', badge: 'Iconic' },
    { id: 'watersports', title: 'Premium Water Sports', description: 'Jet skiing, parasailing, flyboarding, catamaran sailing, and luminous night kayaking through bioluminescent lagoons.', image: '/images/maldives/watersports.jpg', badge: 'Thrill' },
  ] as OceanExperience[],

  resorts: [
    { id: 'soneva', name: 'Soneva Fushi', category: 'Ultra-Luxury Barefoot', description: 'Barefoot luxury pioneer — private villas with pools, an observatory, chocolate room, and the Maldives\' finest dining.', image: '/images/maldives/resort1.jpg', priceRange: '₹1,20,000 – ₹4,50,000 / night', highlights: ['Private pool villas', 'Observatory & cinema', 'Sustainable luxury'] },
    { id: 'waldorf', name: 'Waldorf Astoria Ithaafushi', category: 'Premium All-Inclusive', description: '11 restaurants, the Maldives\' largest private island, reef villas, and a 24/7 personal concierge.', image: '/images/maldives/resort2.jpg', priceRange: '₹85,000 – ₹3,00,000 / night', highlights: ['11 dining venues', 'Largest private island', 'Overwater treehouse'] },
    { id: 'cocoon', name: 'Cocoon Maldives', category: 'Luxury Value', description: 'Italian-designed all-inclusive resort with overwater villas, vibrant house reef, and exceptional value.', image: '/images/maldives/resort3.jpg', priceRange: '₹35,000 – ₹85,000 / night', highlights: ['All-inclusive', 'House reef snorkelling', 'Italian design'] },
    { id: 'anantara', name: 'Anantara Veli', category: 'Romantic Boutique', description: 'Adults-only intimate resort with overwater bungalows, PADI dive centre, and legendary Baan Huraa Thai dining.', image: '/images/maldives/resort4.jpg', priceRange: '₹55,000 – ₹1,80,000 / night', highlights: ['Adults-only', 'Dive centre', 'Thai fine dining'] },
  ] as ResortCard[],

  islandRoute: {
    headline: 'Island-Hopping Journey',
    subheadline: 'Chart your course through the most beautiful atolls on Earth.',
    stops: [
      { id: 'male', name: 'Malé — Gateway City', description: 'The vibrant capital — fish markets, mosques, and speedboat transfers to paradise.', image: '/images/maldives/male.jpg', travelTime: 'Arrival point' },
      { id: 'private-island', name: 'Private Resort Island', description: 'Your exclusive island — overwater villas, white sand, and crystal lagoons.', image: '/images/maldives/private-island.jpg', travelTime: '30 min speedboat' },
      { id: 'sandbank', name: 'Secluded Sandbank', description: 'A private sandbank picnic — just you, white sand, and infinite turquoise ocean.', image: '/images/maldives/sandbank.jpg', travelTime: '15 min from resort' },
      { id: 'dive-site', name: 'Dive & Adventure Zone', description: 'World-class dive sites with manta cleaning stations, shark nurseries, and coral gardens.', image: '/images/maldives/scuba.jpg', travelTime: '20 min boat ride' },
    ] as IslandStop[],
  },

  experiences: [
    { id: 'overwater', title: 'Overwater Villa Sunset', description: 'Watch the sun dissolve into the Indian Ocean from your private infinity pool.', image: '/images/maldives/overwater.jpg', alt: 'Overwater villa sunset', seasonal: false },
    { id: 'dolphin-cruise', title: 'Dolphin Sunset Cruise', description: 'A catamaran cruise through spinner dolphin waters at golden hour.', image: '/images/maldives/dolphin.jpg', alt: 'Dolphin cruise', seasonal: false },
    { id: 'underwater-dining', title: 'Underwater Dining', description: 'Dine 5m below sea level surrounded by panoramic marine views.', image: '/images/maldives/underwater.jpg', alt: 'Underwater restaurant', seasonal: false },
    { id: 'sandbank-picnic', title: 'Private Sandbank Picnic', description: 'A champagne picnic on a private sandbank in the middle of the ocean.', image: '/images/maldives/sandbank.jpg', alt: 'Sandbank picnic', seasonal: false },
  ] as Experience[],

  packages: [
    { id: 'maldives-honeymoon', name: 'Honeymoon Paradise', duration: '5 Days / 4 Nights', idealFor: 'Couples & Honeymooners', highlights: ['Overwater villa with pool', 'Sunset dolphin cruise', 'Couples spa treatment', 'Sandbank dinner under stars', 'Private seaplane transfer'], price: '₹2,85,000', image: '/images/maldives/honeymoon.jpg', alt: 'Maldives Honeymoon', whatsappMessage: 'Hi! I want details on the Maldives Honeymoon Paradise package.', seasonal: false },
    { id: 'maldives-luxury', name: 'Ultra-Luxury Island Escape', duration: '6 Days / 5 Nights', idealFor: 'Luxury Connoisseurs', highlights: ['Soneva Fushi or Waldorf villa', 'Underwater restaurant dining', 'Private island excursion', 'Sunset fishing & BBQ', 'Butler service throughout'], price: '₹4,50,000', image: '/images/maldives/resort1.jpg', alt: 'Ultra Luxury Maldives', whatsappMessage: 'Hi! I want details on the Ultra-Luxury Island Escape.', seasonal: false },
    { id: 'maldives-adventure', name: 'Ocean Adventure Package', duration: '5 Days / 4 Nights', idealFor: 'Adventure & Dive Lovers', highlights: ['PADI diving certification', 'Manta ray snorkelling', 'Night kayak bioluminescence', 'Jet ski & parasailing', 'Beach villa with reef access'], price: '₹1,95,000', image: '/images/maldives/watersports.jpg', alt: 'Maldives Adventure', whatsappMessage: 'Hi! I want details on the Ocean Adventure Package.', seasonal: false },
    { id: 'maldives-family', name: 'Family Island Retreat', duration: '6 Days / 5 Nights', idealFor: 'Families with Kids', highlights: ['Family beach villa', 'Kids club & marine biology', 'Family snorkelling trips', 'Glass-bottom boat ride', 'All-inclusive dining'], price: '₹3,25,000', image: '/images/maldives/family.jpg', alt: 'Maldives Family', whatsappMessage: 'Hi! I want details on the Family Island Retreat.', seasonal: false },
  ] as Package[],

  itinerary: [
    { day: 1, title: 'Arrival — Welcome to Paradise', description: 'Arrive at Velana International Airport. Scenic seaplane or luxury speedboat transfer to your resort island. Check into your overwater villa, followed by a welcome cocktail at the infinity pool and sunset dinner on the beach.', highlights: ['Seaplane Transfer', 'Villa Check-in', 'Sunset Beach Dinner'], stay: 'Overwater Villa with Pool' },
    { day: 2, title: 'Ocean Discovery', description: 'Morning guided house reef snorkelling — encounter turtles, reef sharks, and tropical fish steps from your villa. Afternoon: couples spa treatment in an overwater pavilion. Evening: sunset dolphin cruise on a luxury catamaran.', highlights: ['House Reef Snorkelling', 'Overwater Spa', 'Dolphin Sunset Cruise'], stay: 'Overwater Villa with Pool' },
    { day: 3, title: 'Private Island Day', description: 'Speedboat to a secluded sandbank for a private champagne picnic. Afternoon: scuba diving at a world-class reef site with manta ray encounters. Evening: private beach dinner with toes in the sand.', highlights: ['Sandbank Picnic', 'Scuba Diving', 'Private Beach Dinner'], stay: 'Overwater Villa with Pool' },
    { day: 4, title: 'Underwater Wonders', description: 'Breakfast on your private deck overlooking the lagoon. Visit the underwater restaurant for a once-in-a-lifetime lunch 5m below sea level. Afternoon: water sports — jet ski, parasailing, kayaking. Evening: stargazing from your villa deck.', highlights: ['Underwater Restaurant', 'Water Sports', 'Stargazing'], stay: 'Overwater Villa with Pool' },
    { day: 5, title: 'Farewell to Paradise', description: 'Final sunrise yoga on the beach. Leisurely breakfast and last swim in your infinity pool. Luxury transfer to Malé for departure, carrying memories of the most beautiful place on Earth.', highlights: ['Sunrise Yoga', 'Farewell Swim', 'Luxury Departure'], stay: 'Departure' },
  ] as ItineraryDay[],

  hotelTiers: [
    { tier: 'Luxury All-Inclusive', description: 'Premium resorts like Cocoon, Sun Island, or Meeru — overwater bungalows with full board, house reef, and curated experiences.', price: '₹30,000 – ₹70,000 / night' },
    { tier: 'Ultra-Luxury Resort', description: 'Anantara, Conrad, Niyama — private pool villas, multiple dining venues, dive centre, and butler service.', price: '₹80,000 – ₹2,00,000 / night' },
    { tier: 'Iconic Private Island', description: 'Soneva Fushi, Waldorf Astoria, St. Regis — the pinnacle of Maldivian luxury with unmatched privacy and exclusivity.', price: '₹1,50,000 – ₹5,00,000 / night' },
  ] as HotelTier[],

  process: [
    { step: 1, title: 'Island Consultation', description: 'Connect with our Maldives specialists to outline your dream island experience.' },
    { step: 2, title: 'Paradise Curation', description: 'We design a bespoke itinerary matching your ideal resort, villa type, and experiences.' },
    { step: 3, title: 'Refinement', description: 'Finalize resort selection, add honeymoon upgrades, and confirm seaplane logistics.' },
    { step: 4, title: 'Seamless Arrival', description: 'Touch down in paradise with every detail handled — transfers, villa prep, and concierge.' },
  ] as ProcessStep[],

  testimonials: [
    { name: 'Nisha & Arjun', city: 'Mumbai', tripType: 'Honeymoon Paradise', quote: 'Waking up to dolphins beneath our glass floor, the sandbank dinner under stars, the dolphin cruise at sunset — Outbound Travelers created the honeymoon of our dreams.', rating: 5, date: 'Jan 2026', photo: '/images/maldives/test1.jpg' },
    { name: 'The Kapoor Family', city: 'Delhi', tripType: 'Family Island Retreat', quote: 'Our kids learned to snorkel with baby sharks! The kids club was incredible, and the family villa was perfection. Already planning our return.', rating: 5, date: 'Mar 2026', photo: '/images/maldives/test2.jpg' },
    { name: 'Rohan', city: 'Bangalore', tripType: 'Ocean Adventure Package', quote: 'PADI certification in the Maldives! Swimming with manta rays and dining underwater — this was the adventure trip of a lifetime.', rating: 5, date: 'Feb 2026', photo: '/images/maldives/test3.jpg' },
  ] as Testimonial[],

  faqs: [
    { q: 'What is the best time to visit the Maldives?', a: 'November to April is the dry season with calm seas and excellent visibility. December-March is peak season. May-October has occasional rain but offers incredible deals and fewer crowds — plus the best manta ray season (June-November).' },
    { q: 'Do Indians need a visa for the Maldives?', a: 'No! Indians get a free 30-day tourist visa on arrival. Just bring your passport (valid 6+ months), return tickets, and hotel confirmation. We handle all resort coordination.' },
    { q: 'How do I get to my resort from Malé?', a: 'Resorts arrange transfers via speedboat (15-90 min) or scenic seaplane (30-60 min). We coordinate all transfers as part of your package — you\'ll be in paradise within an hour of landing.' },
    { q: 'Are Maldives trips only for honeymooners?', a: 'Not at all! While it\'s the world\'s #1 honeymoon destination, the Maldives offers incredible family resorts, adventure diving, underwater restaurants, and all-inclusive luxury perfect for any traveler.' },
    { q: 'What\'s included in all-inclusive packages?', a: 'Typically: meals, selected drinks, house reef snorkelling, non-motorized water sports, and some excursions. Premium all-inclusive adds spa credits, diving, and premium dining. We\'ll clarify exact inclusions for your chosen resort.' },
    { q: 'How much does a Maldives trip cost?', a: 'Our curated packages range from ₹1,95,000 to ₹4,50,000 per couple. Budget depends on resort tier, villa type, and experiences. We offer options at every luxury level.' },
  ] as FAQ[],

  relatedDestinations: [
    { name: 'Bali Tropical Luxury', image: '/images/bali/hero.jpg', href: '/bali' },
    { name: 'Andaman Islands', image: '/images/andaman/hero.jpg', href: '/andaman' },
    { name: 'Thailand Escapes', image: '/images/thailand/hero.jpg', href: '/thailand' },
  ] as RelatedDestination[],
}
