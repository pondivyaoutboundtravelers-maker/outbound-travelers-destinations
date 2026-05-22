import type {
  TrustBadge, Package, ItineraryDay, HotelTier,
  MonthRating, Season, FAQ, Testimonial, RelatedDestination,
  Experience, WhatsAppConfig, ProcessStep, DestinationTheme, LeadFormConfig
} from '@/lib/shared/types'

export const singaporeData = {
  meta: {
    title: 'Premium Singapore Tour Packages — Customizable Trips | Outbound Travelers',
    description: 'Plan your premium Singapore trip with Outbound Travelers. Discover futuristic luxury, Sentosa beaches, Universal Studios, and multi-city combos. Free e-visa processing, direct flights, and 24/7 concierge support.',
    canonical: 'https://www.outboundtravelers.com/international/singapore-tour-packages',
    ogImage: '/images/singapore/og-singapore.jpg',
    h1: 'Singapore Tour Packages — Futuristic Luxury & Tropical Elegance',
  },
  theme: {
    accentColor: '#DC2626', // Singapore red
    accentSoft: '#FEE2E2',
    motif: 'merlion-lion',
  } as DestinationTheme,
  hero: {
    headline: 'Clean. Easy. Wow.',
    subheadline: 'Step into the future where sky-scraping gardens meet pristine tropical islands. Outbound Travelers crafts effortless, premium, customized journeys to Singapore designed for modern luxury.',
    primaryCta: 'Customize my Singapore trip',
    secondaryCta: 'Talk to a Singapore specialist on WhatsApp',
    desktopImage: '/images/singapore/hero-desktop.jpg',
    mobileImage: '/images/singapore/hero-mobile.jpg',
    imageAlt: 'Marina Bay Sands skyline at dusk with glowing supertrees and bay view, Singapore',
  },
  trustBadges: [
    { icon: 'trips', label: '1,800+ families served' },
    { icon: 'custom', label: '100% customizable pace' },
    { icon: 'verified', label: 'Vetted 4★ & 5★ luxury stays' },
    { icon: 'support', label: '24/7 dedicated on-trip concierge' },
    { icon: 'visa', label: 'E-Visa in 5–7 working days' },
    { icon: 'member', label: 'TAFI/IATA member agency' },
  ] as TrustBadge[],
  quickSummary: {
    duration: '4–5 nights ideal',
    bestSeason: 'Year-round (November–January festive lightups optimal)',
    startingFrom: 'From ₹62,500 per person',
    tripTypes: 'Family Deluxe · Romantic Honeymoon · Cruise Combos · Friends Adventure',
  },
  whyVisit: [
    {
      icon: 'efficiency',
      title: 'Metro Efficiency',
      description: 'World\'s most advanced transit system. Traverse the entire city-state under 45 minutes in silent, air-conditioned MRT bliss, completely step-free.',
    },
    {
      icon: 'tamil',
      title: 'Tamil-Friendly',
      description: 'Language is never a barrier. Tamil is one of Singapore\'s official languages; signages, announcements, and local hosts speak it fluently.',
    },
    {
      icon: 'veg',
      title: 'Vibrant Veg Food',
      description: 'Gourmet vegetarian dining, from legendary Michelin-starred Little India havelis to luxury rooftop fusion spots. Zero compromises on taste.',
    },
    {
      icon: 'safety',
      title: 'World-Class Safety',
      description: 'The global gold standard in security. Travel with kids, seniors, or solo with absolute peace of mind at any hour of the night.',
    },
    {
      icon: 'luxury',
      title: 'Tropical Luxury',
      description: 'Experience gravity-defying rooftop pools, private sunset superyacht charters, and dining inside cloud forest glass domes.',
    },
    {
      icon: 'easy',
      title: 'Perfect First International',
      description: 'Direct flights under 4 hours, paperless e-visa, and familiar comforts in an ultra-modern setting that just works.',
    },
  ],
  experiences: [
    { id: 'mbs', title: 'Marina Bay Sands Infinity Pool', description: 'Float 57 levels above the city in the world\'s largest rooftop pool, staring out at a shimmering architectural skyline.', image: '/images/singapore/exp-mbs.jpg', alt: 'Marina Bay Sands infinity pool night skyline view Singapore', seasonal: false },
    { id: 'gardens', title: 'Gardens by the Bay Supertrees', description: 'Walk the aerial skyway suspended between giant vertical gardens that come alive with a choreographed musical light show at dusk.', image: '/images/singapore/exp-gardens.jpg', alt: 'Gardens by the bay supertree grove light show Singapore', seasonal: false },
    { id: 'uss', title: 'Universal Studios VIP Access', description: 'Skip the queues and enter blockbuster cinematic realms, from ancient Egyptian coasters to cutting-edge sci-fi 3D simulators.', image: '/images/singapore/exp-uss.jpg', alt: 'Universal Studios entrance globe Sentosa Singapore', seasonal: false },
    { id: 'night-safari', title: 'World\'s First Night Safari', description: 'Board an open-air tram gliding through dense tropical rainforests, observing nocturnal wildlife in naturalistic, moonlit habitats.', image: '/images/singapore/exp-safari.jpg', alt: 'Night safari tram riding past leopards Singapore', seasonal: false },
    { id: 'jewel', title: 'Jewel Changi Rain Vortex', description: 'Marvel at the world\'s tallest indoor waterfall cascading seven storeys through a lush, climate-controlled rainforest dome.', image: '/images/singapore/exp-jewel.jpg', alt: 'Jewel Changi airport rain vortex waterfall Singapore', seasonal: false },
    { id: 'sentosa', title: 'Sentosa Beach & Cable Car', description: 'Glode over the harbor in glass cabins to reach pristine sandy bays, premium beach clubs, and high-speed luge coasters.', image: '/images/singapore/exp-sentosa.jpg', alt: 'Sentosa island cable car beach view Singapore', seasonal: false },
  ] as Experience[],
  packages: [
    {
      id: 'family-classic',
      name: 'Singapore Family Classic',
      duration: '4 Nights / 5 Days',
      idealFor: 'Families with kids, multi-generation groups, first-time international travelers.',
      highlights: ['Jewel Changi Canopy Park & Vortex', 'Gardens by the Bay Double Domes', 'Sentosa Cable Car & Wings of Time', 'Universal Studios Thrills', 'Night Safari Wildlife Tram'],
      price: 'From ₹62,500 per person',
      image: '/images/singapore/pkg-classic.jpg',
      alt: 'Singapore Family Classic tour package',
      whatsappMessage: 'Hi Outbound Travelers, I\'m interested in the Singapore Family Classic 4N/5D package. Please share details and customization options.',
      seasonal: false,
    },
    {
      id: 'luxury-escape',
      name: 'Singapore Future & Luxury',
      duration: '5 Nights / 6 Days',
      idealFor: 'Couples, luxury seekers, milestone celebrations.',
      highlights: ['1 Night Marina Bay Sands Stay', 'Private Sunset Yacht Charter', 'Gardens by the Bay VIP Skyway', 'Jewel Canopy & Changi Lounge VIP', 'Mercedes S-Class private transfers'],
      price: 'From ₹1,28,000 per person',
      image: '/images/singapore/pkg-luxury.jpg',
      alt: 'Singapore Luxury Escape package',
      whatsappMessage: 'Hi Outbound Travelers, I\'d like to know more about the Singapore Future & Luxury 5N/6D. Please share details and customization options.',
      seasonal: false,
    },
    {
      id: 'cruise-combo',
      name: 'Singapore & Spectrum Sea Cruise',
      duration: '6 Nights / 7 Days',
      idealFor: 'Families seeking land + sea adventure, leisure seekers.',
      highlights: ['3 Nights Premium Singapore Hotel', '3 Nights Spectrum of the Seas Cruise', 'Balcony Cabin Ocean View guaranteed', 'All Cruise Dining & Shows included', 'Universal Studios Sentosa tickets'],
      price: 'From ₹98,000 per person',
      image: '/images/singapore/pkg-cruise.jpg',
      alt: 'Singapore and Spectrum of the Seas Cruise Combo tour package',
      whatsappMessage: 'Hi Outbound Travelers, I\'d like to know more about the Singapore & Spectrum Sea Cruise 6N/7D combo. Please share details and customization.',
      seasonal: false,
    },
    {
      id: 'malaysia-explorer',
      name: 'Futuristic Singapore & Malaysia Twin',
      duration: '7 Nights / 8 Days',
      idealFor: 'Twin-country explorers, families.',
      highlights: ['3 Nights Singapore City Centre', '1 Night Malacca Heritage boutique', '3 Nights Kuala Lumpur & Genting', 'Private chauffeur border crossing', 'Batu Caves & Genting Cable Car'],
      price: 'From ₹74,500 per person',
      image: '/images/singapore/pkg-twin.jpg',
      alt: 'Singapore and Malaysia Twin tour package',
      whatsappMessage: 'Hi Outbound Travelers, I\'d like to know more about the Futuristic Singapore & Malaysia Twin 7N/8D. Please share details.',
      seasonal: false,
    },
  ] as Package[],
  itinerary: [
    {
      day: 1,
      title: 'Arrive in the Future – Jewel Changi & Canopy Park',
      description: 'Touch down in the world\'s best airport. Walk through Canopy Park, cross the glass Canopy Bridge, and stand before the jaw-dropping 40-meter Rain Vortex waterfall. Check-in to your premium city-center hotel. Evening at leisure near Marina Bay Sands boardwalk.',
      highlights: ['Airport pickup', 'Jewel Changi VIP passes', 'Canopy Park & Bridge', 'Marina Bay Evening Boardwalk Walk'],
      stay: 'Singapore 4★ City-Center Hotel (e.g. Parkroyal / Orchard Hotel)',
    },
    {
      day: 2,
      title: 'Futuristic Wonders – Gardens by the Bay & MBS Observatory',
      description: 'Explore the giant glass Flower Dome and misty Cloud Forest with its 35-meter indoor waterfall. Scale the Marina Bay Sands Skypark Observatory on the 57th floor for panoramic 360-degree views of the entire Singapore Strait. Evening choreographed light & sound show at Supertree Grove.',
      highlights: ['Gardens by the Bay Double Domes', 'MBS Skypark VIP Access', 'Supertree Light & Sound Show', 'Dedicated Tamil-speaking guide'],
      stay: 'Singapore 4★ City-Center Hotel',
    },
    {
      day: 3,
      title: 'Island of Thrills – Sentosa & Universal Studios Singapore',
      description: 'Ride the premium cable car over the harbor to Sentosa. Spend the day experiencing blockbuster rides at Universal Studios (Sci-Fi City, Ancient Egypt, Lost World). In the evening, watch the spectacular Wings of Time outdoor light, laser, and water show right on the beach.',
      highlights: ['Return Cable Car ride', 'Universal Studios Day Pass', 'Wings of Time beach show', 'Private hotel transfers'],
      stay: 'Singapore 4★ City-Center Hotel',
    },
    {
      day: 4,
      title: 'Wilderness & Night Wildlife – River Wonders & Night Safari',
      description: 'Visit River Wonders, Asia\'s only river-themed park, to see giant pandas Kai Kai & Jia Jia. As dusk falls, enter the world-famous Night Safari. Take the open-air tram through 7 geographical zones of nocturnal wildlife in a dense tropical forest.',
      highlights: ['River Wonders giant pandas', 'Night Safari admission ticket', 'Nocturnal Wildlife Tram tour', 'All private transfers'],
      stay: 'Singapore 4★ City-Center Hotel',
    },
    {
      day: 5,
      title: 'Elegant Departure – Merlion Park & Shopping at Orchard',
      description: 'Visit the iconic Merlion statue at sunrise for photos with the skyline. Settle in for some retail therapy on Orchard Road or visit the heritage lanes of Little India for lunch. Your private chauffeur transfers you to Changi Airport for your direct flight home.',
      highlights: ['Merlion Park sunrise photos', 'Little India or Orchard walk', 'Changi airport drop', 'Assistance with flight check-in'],
      stay: 'Departure flight home',
    },
  ] as ItineraryDay[],
  hotelTiers: [
    { tier: '3★ Comfort', description: 'Clean, modern, and highly accessible properties like Ibis Styles / Boss Hotel with family rooms and breakfast.', price: 'Included in Base Cost' },
    { tier: '4★ Premium', description: 'Flagship hotels like Parkroyal on Beach Road / Orchard Hotel with full amenities, sky pools, and central locations.', price: 'Luxury Upgrade (+₹15,000/person)' },
    { tier: '5★ Luxury', description: 'Top properties like Marina Bay Sands, Ritz-Carlton Millenia, or Capella Sentosa with butler services, infinity pools, and skyline panoramas.', price: 'Premium Upgrade (+₹55,000/person)' },
  ] as HotelTier[],
  months: [
    { month: 'Jan', rating: 'best', note: 'Perfect cool weather, festive countdown lights, dry.' },
    { month: 'Feb', rating: 'best', note: 'Clear blue skies, dry weather, perfect for beaches.' },
    { month: 'Mar', rating: 'best', note: 'Great weather, school holidays start, booking essential.' },
    { month: 'Apr', rating: 'good', note: 'Warm days, great for water parks and pools.' },
    { month: 'May', rating: 'good', note: 'Food festival season, warm and dry.' },
    { month: 'Jun', rating: 'good', note: 'Vibrant summer vibes, mild evening showers.' },
    { month: 'Jul', rating: 'good', note: 'Great shopping discounts, warm.' },
    { month: 'Aug', rating: 'good', note: 'National day celebrations, great aerial displays.' },
    { month: 'Sep', rating: 'best', note: 'Formula 1 Grand Prix season, electric nightlife.' },
    { month: 'Oct', rating: 'best', note: 'Pleasant temperature, great autumn activities.' },
    { month: 'Nov', rating: 'best', note: 'Christmas lightups begin on Orchard, perfect festive mood.' },
    { month: 'Dec', rating: 'best', note: 'Peak festive month, breathtaking firework displays, book early.' },
  ] as MonthRating[],
  seasons: [
    { id: 'festive', label: 'Festive Countdown', months: 'Nov–Jan', description: 'Stunning city lightups on Orchard and fireworks over the Bay. Unmatched vibe.', image: '/images/singapore/season-festive.jpg' },
    { id: 'dry', label: 'Clear Blue Skies', months: 'Feb–Apr', description: 'Lesser rain, perfect for outdoor walks, beach clubs, and sentosa adventures.', image: '/images/singapore/season-dry.jpg' },
    { id: 'summer', label: 'Vibrant Summer', months: 'May–Aug', description: 'Great shopping sales, food festivals, and amazing theme park summer events.', image: '/images/singapore/season-summer.jpg' },
    { id: 'nightlife', label: 'Electric Nightlife', months: 'Sep–Oct', description: 'Formula 1 Grand Prix transforms the city into an outdoor festival arena.', image: '/images/singapore/season-f1.jpg' },
  ] as Season[],
  process: [
    { step: 1, title: 'Bespoke Consultation', description: 'Share dates, group size, and meal requirements. Our Singapore architect schedules a direct chat.' },
    { step: 2, title: 'Future-City Custom Plan', description: 'Receive an optimized day-wise itinerary paced to your group, complete with flights and visa fees.' },
    { step: 3, title: 'Refine & Personalize', description: 'Choose hotels, add multi-city pathways (Malaysia/Bali), and secure South Indian meal options.' },
    { step: 4, title: 'Travel in Safe Hands', description: 'Fly paperless with pre-arranged e-visas, private chauffeurs, and 24/7 dedicated WhatsApp support.' },
  ] as ProcessStep[],
  inclusions: [
    '4 Nights staying in vetted central Singapore hotel or flagship resort',
    'Daily elaborate local and international gourmet buffet breakfast spreads',
    'All private airport transits in clean executive air-conditioned vehicles',
    'Expedited Singapore Tourist E-Visa processing fee and documentation',
    'Jewel Changi Canopy Park & Canopy Bridge admission ticket VIP skip-line',
    'Gardens by the Bay Flower Dome & Cloud Forest admission entry tickets',
    'Marina Bay Sands Skypark Observatory entry VIP observation tickets',
    'Return Singapore Cable Car tickets and Sentosa beach transfers',
    'Universal Studios Singapore full day unlimited theme park pass',
    'River Wonders Giant Pandas & Night Safari wildlife tram rides',
    '24/7 dedicated local WhatsApp ground concierge support',
    'All local tourist city taxes and hospitality service charges',
  ],
  exclusions: [
    'International flights from India (can be booked at consolidator rates)',
    'Personal lunch and dinners not specified ( Little India lists provided)',
    'Optional adventure tickets like Universal Studios Express Pass',
    'Driver and local guide tips',
    'Travel insurance (highly recommended, can be added)',
  ],
  gallery: [
    { image: '/images/singapore/gallery-01.jpg', alt: 'Marina Bay Sands light show reflection Singapore' },
    { image: '/images/singapore/gallery-02.jpg', alt: 'Gardens by the bay supertrees sunset Singapore' },
    { image: '/images/singapore/gallery-03.jpg', alt: 'Jewel Changi indoor rain vortex waterfall Singapore' },
    { image: '/images/singapore/gallery-04.jpg', alt: 'Universal Studios Singapore entrance Sentosa' },
    { image: '/images/singapore/gallery-05.jpg', alt: 'Night safari tram track Singapore' },
    { image: '/images/singapore/gallery-06.jpg', alt: 'Wings of Time beach show laser Singapore' },
    { image: '/images/singapore/gallery-07.jpg', alt: 'Singapore skyline sunrise Merlion Park' },
    { image: '/images/singapore/gallery-08.jpg', alt: 'Orchard road shopping festive lights Singapore' },
    { image: '/images/singapore/gallery-09.jpg', alt: 'Little India Sri Veeramakaliamman temple Singapore' },
    { image: '/images/singapore/gallery-10.jpg', alt: 'Spectrum of the Seas Royal Caribbean cruise' },
    { image: '/images/singapore/gallery-11.jpg', alt: 'Changi airport canopy park slide kids Singapore' },
    { image: '/images/singapore/gallery-12.jpg', alt: 'Sunset yacht charter Marina Bay Singapore' },
  ],
  testimonials: [
    {
      name: 'The Ramanathan Family',
      city: 'Chennai',
      tripType: 'Multi-Generation Family',
      quote: 'We were skeptical about traveling with my 80-year-old grandmother, but Singapore was unbelievably accessible. The Tamil signs everywhere made her feel right at home, and the Outbound team pre-arranged South Indian veg meals at every step. Stroller and senior-friendly support was excellent.',
      rating: 5,
      date: 'April 2026',
      photo: '/images/testimonials/ramanathan.jpg'
    },
    {
      name: 'Anjali & Gautham',
      city: 'Bangalore',
      tripType: 'Romantic Honeymoon',
      quote: 'Pure futuristic luxury! Our night at MBS was surreal and the private sunset yacht cruise arranged by Outbound Travelers was the highlight of our honeymoon. E-visa and transfers were completely sorted. 10/10 service!',
      rating: 5,
      date: 'March 2026',
      photo: '/images/testimonials/anjali-gautham.jpg'
    },
  ] as Testimonial[],
  faqs: [
    {
      q: 'Is Singapore visa required for Indian passport holders?',
      a: 'Yes, Indian passport holders require a tourist visa. However, Outbound Travelers provides an expedited e-visa processing service that secures your electronic visa in just 5–7 working days with minimal document hassle.'
    },
    {
      q: 'Will we get good vegetarian food in Singapore?',
      a: 'Absolutely! Singapore has some of the finest vegetarian and vegan dining options in Southeast Asia. From iconic Little India eateries serving authentic South Indian meals to Michelin-recommended fine dining, we pre-arrange and recommend vetted food joints based on your exact dietary preferences.'
    },
    {
      q: 'Is Singapore suitable for senior citizens and strollers?',
      a: 'Singapore is the global gold standard for accessibility. Every metro station, shopping mall, attraction, and sidewalk is 100% barrier-free. We also design family-paced itineraries with shorter walks and private wheelchair-compatible executive transits.'
    },
    {
      q: 'What is the ideal duration for a Singapore trip?',
      a: 'A 4 Nights / 5 Days trip is the perfect duration to cover the core experiences (Gardens by the Bay, Universal Studios, Sentosa, Jewel Changi, and Night Safari) without feeling rushed. If you want to add a Cruise or Malaysia combo, we recommend 6 to 8 nights.'
    },
    {
      q: 'Do you arrange flights from South India?',
      a: 'Yes, we book direct flights from Bangalore, Chennai, Kochi, and Trichy on request. We secure special consolidator rates which are typically 5–10% cheaper than direct consumer portal bookings.'
    },
    {
      q: 'Can we customize the Singapore package itinerary?',
      a: 'Yes. Every itinerary built by Outbound Travelers is 100% customizable. You can swap hotels, upgrade to a suite at Marina Bay Sands, add a cruise combo, or pace out the excursions to match your family\'s rhythm.'
    },
  ] as FAQ[],
  relatedDestinations: [
    { name: 'Malaysia Tour', image: '/images/malaysia/hero.jpg', href: '/malaysia' },
    { name: 'Thailand Classic', image: '/images/thailand/hero.jpg', href: '/thailand' },
    { name: 'Phu Quoc Sanctuary', image: '/images/phu-quoc/hero.jpg', href: '/phu-quoc' },
    { name: 'Vietnam Cultural', image: '/images/vietnam/hero.jpg', href: '/vietnam' },
  ] as RelatedDestination[],
  whatsapp: {
    number: '919876543210',
    heroMessage: 'Hi Outbound Travelers, I\'m interested in a premium Singapore tour package. Please share customized itineraries and quotes.',
    stickyMessage: 'Hi Outbound Travelers, I\'m planning a Singapore trip. Can you help me plan and estimate costs?',
    floaterMessage: 'Hi Outbound Travelers, I\'m interested in a Singapore tour package. Please share details on customization options and visa rules.',
    finalCtaMessage: 'Hi Outbound Travelers, I\'m ready to plan my Singapore trip. Please send me your best itinerary and a custom quote.',
    postFormMessage: 'Hi Outbound Travelers, I just submitted my Singapore enquiry. Travel month: {month}, {travelers} travelers from {city}, trip type: {tripType}. Looking forward to the customized future-city plan and quote.',
  } as WhatsAppConfig,
  leadForm: {
    title: 'Get your Singapore quote',
    subtitle: 'Step into the future. Let us design your custom premium Singapore itinerary in under 2 hours.',
    submitButtonText: 'Get my Singapore quote',
    successMessage: 'Splendid! Your Singapore specialist is crafting your future-city itinerary and will WhatsApp you within 2 hours. Meanwhile, save our number: +91-98765-43210.',
    destinationId: 'singapore',
    destinationName: 'Singapore',
  } as LeadFormConfig,
  seoContent: {
    h2: 'Planning Your Premium Singapore Getaway with Outbound Travelers',
    sections: [
      {
        h3: 'Why Singapore is the ultimate first international family trip',
        body: 'Singapore is engineered to surprise and comfort. For South Indian families, the transition from local cities to Singapore is remarkably smooth. With Tamil spoken widely as an official language, familiar vegetarian culinary giants present in Little India, and direct flights under four hours from Chennai, Trichy, Kochi, and Bangalore, it offers the ultimate stress-free introduction to international travel. The high-tech, clean, and extremely disciplined environment provides safety and convenience that is completely unmatched in Southeast Asia.',
      },
      {
        h3: 'The Land + Cruise combination — how to plan it',
        body: 'To double the experience, many families combine their land exploration with a luxury cruise. Standard schedules involve staying three nights in Singapore city to cover Gardens by the Bay, Universal Studios, and shopping, followed by boarding a premium cruise liner like Royal Caribbean\'s Spectrum of the Seas or Resorts World Cruises for a three-night roundtrip sailing to Penang and Phuket. The cruise serves as a floating five-star resort with comprehensive dining, broadway shows, and pool decks, providing the perfect relaxing finish to a high-energy city vacation.',
      },
      {
        h3: 'Bespoke custom adjustments for seniors and toddlers',
        body: 'Unlike generic operators who stack repetitive, tiring tour itineraries, we customize the travel pace for your specific group. Families traveling with seniors or very small children receive spacious, wheelchair/stroller-friendly private executive transits, and we schedule excursions with longer afternoon gaps so that nobody gets exhausted in the tropical humidity. We also pre-arrange authentic vegetarian meals, ensuring your family receives high-quality South Indian dishes, baby food, or dietary adjustments at every stop.',
      },
    ],
  },
}
