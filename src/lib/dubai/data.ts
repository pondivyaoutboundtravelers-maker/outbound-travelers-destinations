import type {
  TrustBadge, Package, ItineraryDay, HotelTier,
  FAQ, Testimonial, RelatedDestination,
  Experience, WhatsAppConfig, ProcessStep, DestinationTheme, LeadFormConfig
} from '@/lib/shared/types'

/* ───── Dubai-specific types ───── */
export interface DubaiLayer {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  stat: string
  statLabel: string
}

export interface BurjLevel {
  id: string
  name: string
  level: string
  price: string
  highlights: string[]
  tier: 'standard' | 'premium'
}

export interface DesertExperience {
  id: string
  title: string
  description: string
  icon: string
}

export interface ThemePark {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  badge: string
}

export interface AbuDhabiStop {
  id: string
  name: string
  description: string
  image: string
  travelTime: string
}

/* ───── Main Data Tree ───── */
export const dubaiData = {
  meta: {
    title: 'Premium Dubai Tour Packages — Futuristic Arabian Luxury | Outbound Travelers',
    description: 'Experience Dubai through a cinematic luxury lens. Private Burj Khalifa access, desert safari adventures, Marina dhow cruises, and Abu Dhabi excursions curated for discerning travelers.',
    canonical: 'https://www.outboundtravelers.com/dubai',
    ogImage: '/images/dubai/hero.jpg',
    h1: 'Dubai — A Futuristic Arabian Luxury Experience',
  },

  theme: {
    accentColor: '#050816',
    accentSoft: '#FAF7F2',
    motif: 'arabic-geometry',
  } as DestinationTheme,

  whatsapp: {
    number: '919876543210',
    heroMessage: 'Hi Outbound Travelers! I want to plan a premium luxury journey to Dubai.',
    stickyMessage: 'Hi Outbound Travelers! I\'m interested in the Dubai luxury packages.',
    floaterMessage: 'Hi Outbound Travelers! Can we discuss a custom Dubai itinerary?',
    finalCtaMessage: 'Hi Outbound Travelers! Ready to book my Dubai experience.',
    postFormMessage: 'Hi Outbound Travelers! I just submitted an inquiry for Dubai. Can we chat?',
  } as WhatsAppConfig,

  leadForm: {
    title: 'Design Your Dubai Escape',
    subtitle: 'Share your vision. Our Dubai specialists will craft a futuristic luxury itinerary tailored to you.',
    submitButtonText: 'Design My Dubai Journey',
    successMessage: 'Thank you. A Dubai luxury specialist will reach out shortly.',
    destinationId: 'dubai',
    destinationName: 'Dubai',
  } as LeadFormConfig,

  hero: {
    headline: 'Future Meets Desert.',
    subheadline: 'Step into a cinematic luxury portrait of the world\'s most ambitious city. Experience Dubai through private Burj Khalifa access, sunset desert safaris, and the futuristic skyline that redefines what\'s possible.',
    primaryCta: 'Design My Dubai Journey',
    secondaryCta: 'Speak to a Dubai Specialist',
    desktopImage: '/images/dubai/hero.jpg',
  },

  trustBadges: [
    { icon: 'plane', label: 'Visa Assistance Included' },
    { icon: 'headset', label: '24/7 Dubai Concierge' },
    { icon: 'building', label: 'Luxury Hotel Stays' },
    { icon: 'car', label: 'Private Transfers' },
  ] as TrustBadge[],

  layers: [
    {
      id: 'modern',
      title: 'Modern Dubai',
      subtitle: 'The City of Tomorrow',
      description: 'The Burj Khalifa piercing clouds, Palm Jumeirah reshaping coastlines, Dubai Marina glittering at midnight — this is a city that turned desert into the future.',
      image: '/images/dubai/modern-dubai.jpg',
      stat: '830m',
      statLabel: 'World\'s Tallest',
    },
    {
      id: 'desert',
      title: 'Arabian Desert',
      subtitle: 'Timeless Golden Sands',
      description: 'Beyond the glass towers lies the eternal desert — vast, silent, majestic. Sunset dune bashing, Bedouin camps under stars, and camel caravans crossing amber horizons.',
      image: '/images/dubai/desert.jpg',
      stat: '5000yr',
      statLabel: 'Bedouin Heritage',
    },
    {
      id: 'family',
      title: 'Family Adventures',
      subtitle: 'Theme Park Capital',
      description: 'From Aquaventure\'s 30-meter waterslides to IMG Worlds of Adventure — Dubai packs more world-class attractions per square mile than anywhere on Earth.',
      image: '/images/dubai/aquaventure.jpg',
      stat: '15+',
      statLabel: 'World-Class Parks',
    },
    {
      id: 'heritage',
      title: 'Old Dubai Heritage',
      subtitle: 'Where It All Began',
      description: 'The fragrant spice souks of Deira, the gold-laden alleys of the Gold Souk, the tranquil Creek crossings by abra — Old Dubai whispers the story before the skyscrapers.',
      image: '/images/dubai/old-dubai.jpg',
      stat: '1833',
      statLabel: 'Trading Heritage',
    },
  ] as DubaiLayer[],

  burjKhalifa: {
    headline: 'Touch the Sky',
    subheadline: 'The world\'s tallest building offers two distinct observation experiences — each a masterpiece of engineering and luxury.',
    levels: [
      {
        id: 'standard',
        name: 'At the Top',
        level: 'Levels 124 & 125',
        price: '₹3,500 / person',
        highlights: [
          '456m elevation with 360° panoramic views',
          'Interactive screens & telescopes',
          'Sunset slots available (premium pricing)',
          'Gift shop & café access',
        ],
        tier: 'standard' as const,
      },
      {
        id: 'sky',
        name: 'At the Top SKY',
        level: 'Level 148',
        price: '₹12,000 / person',
        highlights: [
          '555m — highest observation deck on Earth',
          'Exclusive VIP lounge with refreshments',
          'Guided tour with dedicated host',
          'Premium sunset & twilight experiences',
        ],
        tier: 'premium' as const,
      },
    ] as BurjLevel[],
  },

  desertSafari: {
    headline: 'Into the Golden Sands',
    subheadline: 'A luxury Arabian desert experience that transforms golden dunes into your private cinema under the stars.',
    experiences: [
      { id: 'dune', title: 'Dune Bashing', description: 'Adrenaline-pumping 4x4 ride across towering red dunes with expert drivers.', icon: 'truck' },
      { id: 'camel', title: 'Camel Caravan', description: 'A serene sunset camel ride across the amber desert, retracing ancient Bedouin trade routes.', icon: 'footprints' },
      { id: 'camp', title: 'Bedouin Luxury Camp', description: 'Private majlis seating, shisha, henna art, and live tanoura dance under Arabian stars.', icon: 'tent' },
      { id: 'dinner', title: 'Sunset BBQ Dinner', description: 'A lavish Arabian BBQ feast with grilled meats, mezze, and fresh salads as the sun melts into gold.', icon: 'flame' },
    ] as DesertExperience[],
    quote: '"The desert tells a different story to each who wanders its golden seas."',
  },

  dhowCruise: {
    headline: 'Glide Through Liquid Gold',
    subheadline: 'A luxury dinner cruise where Dubai\'s skyline becomes your dining backdrop — reflected in shimmering waters.',
    options: [
      { name: 'Marina Dhow Cruise', location: 'Dubai Marina', vibe: 'Modern luxury skyline views', highlights: ['2-hour luxury cruise', 'Live music & entertainment', 'International buffet dinner', 'JBR & Ain Dubai views'], image: '/images/dubai/dhow-marina.jpg' },
      { name: 'Creek Heritage Dhow', location: 'Dubai Creek', vibe: 'Traditional Arabian romance', highlights: ['Heritage wooden dhow', 'Authentic Arabic cuisine', 'Old Dubai illuminated views', 'Intimate romantic ambience'], image: '/images/dubai/dhow-creek.jpg' },
    ],
    honeymoonQuote: '"Watching Dubai\'s skyline from the water, with my partner, was the most romantic evening of our lives."',
  },

  themeParks: [
    { id: 'aquaventure', name: 'Aquaventure Waterpark', tagline: 'World\'s Largest Waterpark', description: 'Tower of Neptune plunge, shark-tunnel lazy river, private beach — the ultimate water adventure at Atlantis.', image: '/images/dubai/aquaventure.jpg', badge: 'Family Favorite' },
    { id: 'lost-chambers', name: 'Lost Chambers Aquarium', tagline: 'Atlantis Underwater World', description: '65,000 marine animals in a mythical Atlantean setting. Dive experiences and ray feeding available.', image: '/images/dubai/lost-chambers.jpg', badge: 'Must Visit' },
    { id: 'img-worlds', name: 'IMG Worlds of Adventure', tagline: 'World\'s Largest Indoor Park', description: 'Marvel, Cartoon Network, and dinosaur zones under one massive air-conditioned roof.', image: '/images/dubai/img-worlds.jpg', badge: 'Thrill Seeker' },
    { id: 'motiongate', name: 'Motiongate Dubai', tagline: 'Hollywood in the Desert', description: 'Dreamworks, Lionsgate, and Columbia Pictures zones with epic rides and live shows.', image: '/images/dubai/motiongate.jpg', badge: 'Adventure' },
    { id: 'ski-dubai', name: 'Ski Dubai', tagline: 'Snow in the Desert', description: 'Real snow, penguins, and ski slopes inside the Mall of the Emirates. Surreal and unforgettable.', image: '/images/dubai/ski-dubai.jpg', badge: 'Unique' },
    { id: 'miracle-garden', name: 'Dubai Miracle Garden', tagline: '150 Million Flowers', description: 'The world\'s largest natural flower garden — an explosion of color in the heart of the desert.', image: '/images/dubai/miracle-garden.jpg', badge: 'Instagram Worthy' },
    { id: 'global-village', name: 'Global Village', tagline: 'World Shopping & Culture', description: '90+ countries in one venue — shopping, dining, rides, and cultural performances. Seasonal Oct-Apr.', image: '/images/dubai/global-village.jpg', badge: 'Cultural' },
  ] as ThemePark[],

  abuDhabi: {
    headline: 'Abu Dhabi Connected',
    subheadline: 'Just 1.5 hours from Dubai lies the UAE capital — a city of grand mosques, speed, and artistic masterpieces.',
    travelTime: '1.5 hours luxury drive',
    stops: [
      { id: 'mosque', name: 'Sheikh Zayed Grand Mosque', description: 'One of the world\'s largest mosques — 82 domes, 1,000+ columns, and the largest hand-knotted carpet on Earth.', image: '/images/dubai/sheikh-zayed.jpg', travelTime: '80 min from Dubai' },
      { id: 'ferrari', name: 'Ferrari World Abu Dhabi', description: 'Home to Formula Rossa — the world\'s fastest roller coaster at 240 km/h. Pure adrenaline.', image: '/images/dubai/ferrari-world.jpg', travelTime: '75 min from Dubai' },
      { id: 'emirates', name: 'Emirates Palace', description: 'A $3 billion palace hotel offering gold-dusted cappuccinos and 1.3 km of private beach.', image: '/images/dubai/emirates-palace.jpg', travelTime: '85 min from Dubai' },
      { id: 'louvre', name: 'Louvre Abu Dhabi', description: 'Jean Nouvel\'s floating dome masterpiece — 600+ artworks spanning 12,000 years of human creativity.', image: '/images/dubai/louvre-abudhabi.jpg', travelTime: '80 min from Dubai' },
    ] as AbuDhabiStop[],
  },

  experiences: [
    { id: 'burj-khalifa', title: 'Burj Khalifa Sunset', description: 'Watch Dubai transform from golden to midnight from the world\'s highest observation deck.', image: '/images/dubai/burj-khalifa.jpg', alt: 'Burj Khalifa at sunset', seasonal: false },
    { id: 'desert-safari', title: 'Premium Desert Safari', description: 'Dune bashing, camel rides, and a Bedouin luxury camp under the Arabian stars.', image: '/images/dubai/desert.jpg', alt: 'Desert safari dunes', seasonal: false },
    { id: 'dhow-cruise', title: 'Marina Dhow Cruise', description: 'A luxury dinner cruise through Dubai Marina with live entertainment and skyline views.', image: '/images/dubai/dhow-marina.jpg', alt: 'Dhow cruise at night', seasonal: false },
    { id: 'palm-atlantis', title: 'Atlantis, The Palm', description: 'Aquaventure waterpark, Lost Chambers aquarium, and the iconic Palm Jumeirah views.', image: '/images/dubai/aquaventure.jpg', alt: 'Atlantis waterpark', seasonal: false },
  ] as Experience[],

  packages: [
    {
      id: 'dubai-honeymoon',
      name: 'Dubai Luxury Honeymoon',
      duration: '5 Days / 4 Nights',
      idealFor: 'Couples & Honeymooners',
      highlights: ['5-star beachfront suite', 'Burj Khalifa SKY Level 148 sunset', 'Private dhow dinner cruise', 'Desert safari with luxury camp', 'Couples spa at Atlantis'],
      price: '₹1,45,000',
      image: '/images/dubai/honeymoon.jpg',
      alt: 'Dubai Honeymoon',
      whatsappMessage: 'Hi! I want details on the Dubai Luxury Honeymoon package.',
      seasonal: false,
    },
    {
      id: 'dubai-family',
      name: 'Family Adventure Dubai',
      duration: '6 Days / 5 Nights',
      idealFor: 'Families with Kids',
      highlights: ['Aquaventure waterpark full-day', 'IMG Worlds of Adventure', 'Desert safari with kids activities', 'Dubai Mall & aquarium', 'Ski Dubai snow experience'],
      price: '₹1,85,000',
      image: '/images/dubai/family.jpg',
      alt: 'Dubai Family Trip',
      whatsappMessage: 'Hi! I want details on the Family Adventure Dubai package.',
      seasonal: false,
    },
    {
      id: 'dubai-weekend',
      name: 'Dubai Express Weekend',
      duration: '4 Days / 3 Nights',
      idealFor: 'Quick Luxury Breaks',
      highlights: ['Premium hotel in Downtown', 'Burj Khalifa Level 124 visit', 'Desert safari evening', 'Marina walk & dining', 'Dubai Mall shopping'],
      price: '₹85,000',
      image: '/images/dubai/weekend.jpg',
      alt: 'Dubai Weekend',
      whatsappMessage: 'Hi! I want details on the Dubai Express Weekend package.',
      seasonal: false,
    },
    {
      id: 'dubai-abudhabi',
      name: 'Dubai + Abu Dhabi Premium',
      duration: '7 Days / 6 Nights',
      idealFor: 'Complete UAE Experience',
      highlights: ['Dubai + Abu Dhabi luxury circuit', 'Sheikh Zayed Mosque & Louvre', 'Ferrari World fast-pass', 'Burj Khalifa SKY + desert safari', 'Private chauffeured transfers'],
      price: '₹2,65,000',
      image: '/images/dubai/premium.jpg',
      alt: 'Dubai Abu Dhabi Tour',
      whatsappMessage: 'Hi! I want details on the Dubai + Abu Dhabi Premium package.',
      seasonal: false,
    },
  ] as Package[],

  itinerary: [
    { day: 1, title: 'Arrival — Welcome to the Future', description: 'Arrive at Dubai International Airport. Luxury transfer to your Downtown hotel with Burj Khalifa views. Evening stroll along the Dubai Fountain and a welcome dinner at a rooftop restaurant overlooking the skyline.', highlights: ['Airport Luxury Transfer', 'Dubai Fountain Show', 'Skyline Welcome Dinner'], stay: 'Downtown Dubai Luxury Hotel' },
    { day: 2, title: 'Skyline & Souks', description: 'Morning visit to Burj Khalifa observation deck during golden hour. Explore Dubai Mall\'s aquarium and shopping. Afternoon: Old Dubai heritage walk through Gold Souk, Spice Souk, and abra ride across Dubai Creek.', highlights: ['Burj Khalifa Golden Hour', 'Dubai Mall Experience', 'Gold & Spice Souks'], stay: 'Downtown Dubai Luxury Hotel' },
    { day: 3, title: 'Desert Odyssey', description: 'Morning at leisure or optional Miracle Garden visit. Afternoon: premium desert safari with dune bashing, camel rides, and sandboarding. Evening: luxury Bedouin camp dinner with live entertainment under the stars.', highlights: ['Miracle Garden Visit', 'Dune Bashing Adventure', 'Bedouin Camp Dinner'], stay: 'Downtown Dubai Luxury Hotel' },
    { day: 4, title: 'Water & Wonder', description: 'Full day at Atlantis — Aquaventure waterpark and Lost Chambers aquarium. Evening: luxury dhow cruise through Dubai Marina with dinner, live music, and the glittering JBR skyline reflected in the water.', highlights: ['Aquaventure Waterpark', 'Lost Chambers Aquarium', 'Marina Dhow Dinner Cruise'], stay: 'Atlantis The Palm or Downtown' },
    { day: 5, title: 'Abu Dhabi & Farewell', description: 'Luxury chauffeured transfer to Abu Dhabi. Visit the magnificent Sheikh Zayed Grand Mosque and Louvre Abu Dhabi. Gold-dusted cappuccino at Emirates Palace. Return to Dubai for departure transfer.', highlights: ['Sheikh Zayed Mosque', 'Louvre Abu Dhabi', 'Emirates Palace Visit'], stay: 'Departure' },
  ] as ItineraryDay[],

  hotelTiers: [
    { tier: 'Premium 4-Star', description: 'Curated 4-star hotels in prime locations — JBR, Business Bay, or Deira — with pool, spa, and breakfast.', price: '₹8,000 – ₹14,000 / night' },
    { tier: 'Luxury 5-Star', description: 'Iconic 5-star properties — JW Marriott, Taj Dubai, Address Downtown — with skyline suites and premium dining.', price: '₹18,000 – ₹40,000 / night' },
    { tier: 'Ultra-Luxury Palace', description: 'The legendary Burj Al Arab, Atlantis Royal, One&Only The Palm — the pinnacle of Arabian luxury.', price: '₹60,000 – ₹3,00,000 / night' },
  ] as HotelTier[],

  process: [
    { step: 1, title: 'Dubai Consultation', description: 'Connect with our Dubai specialists to outline your ideal experience — from skyline luxury to desert adventure.' },
    { step: 2, title: 'Luxury Curation', description: 'We design a bespoke itinerary blending skyscraper experiences, desert safaris, and world-class attractions.' },
    { step: 3, title: 'Refinement', description: 'Finalize hotel tier, add Abu Dhabi extension, select premium experiences, and confirm visa arrangements.' },
    { step: 4, title: 'Seamless Execution', description: 'Arrive in Dubai for an impeccably managed experience with 24/7 concierge and luxury transfers.' },
  ] as ProcessStep[],

  testimonials: [
    { name: 'Aisha & Ravi', city: 'Hyderabad', tripType: 'Dubai Luxury Honeymoon', quote: 'The Burj Khalifa sunset from Level 148 was otherworldly. The desert camp dinner under stars, the Marina cruise — Outbound Travelers made our honeymoon feel like a luxury film.', rating: 5, date: 'Feb 2026', photo: '/images/dubai/test1.jpg' },
    { name: 'The Sharma Family', city: 'Delhi', tripType: 'Family Adventure Dubai', quote: 'Our kids still talk about Aquaventure and Ski Dubai! The planning was flawless — from visa to transfers, everything was seamless. Best family vacation ever.', rating: 5, date: 'Dec 2025', photo: '/images/dubai/test2.jpg' },
    { name: 'Priyanka', city: 'Bangalore', tripType: 'Dubai Express Weekend', quote: 'Just 4 days but packed with luxury. The Gold Souk, the desert safari at sunset, and that dhow cruise — every moment was perfectly curated.', rating: 5, date: 'Mar 2026', photo: '/images/dubai/test3.jpg' },
  ] as Testimonial[],

  faqs: [
    { q: 'Do Indians need a visa for Dubai?', a: 'Yes, Indian nationals need a UAE tourist visa. We handle the complete visa process — application, documentation, and tracking — as part of our packages. Processing typically takes 3-5 business days.' },
    { q: 'What is the best time to visit Dubai?', a: 'November to March is ideal with pleasant 20-30°C weather. December-January is peak season. Summer (June-August) is very hot but offers incredible deals on luxury hotels and indoor attractions.' },
    { q: 'How expensive is Dubai for Indian travelers?', a: 'A premium Dubai trip costs ₹85,000-₹2,65,000 per couple depending on duration and hotel tier. Many experiences like the Dubai Fountain and beach walks are free. Our packages offer excellent value with luxury inclusions.' },
    { q: 'Can you arrange Abu Dhabi day trips?', a: 'Absolutely. We offer luxury chauffeured Abu Dhabi excursions covering Sheikh Zayed Mosque, Ferrari World, Louvre Abu Dhabi, and Emirates Palace. The drive is 1.5 hours in premium vehicles.' },
    { q: 'Is Dubai safe for families and solo travelers?', a: 'Dubai is one of the safest cities in the world with virtually zero crime. It\'s exceptionally family-friendly with world-class infrastructure, clean beaches, and incredible theme parks.' },
    { q: 'What luxury hotels do you recommend?', a: 'We partner with Address Downtown, JW Marriott Marquis, Taj Dubai, Atlantis The Palm, and for ultra-luxury — Burj Al Arab and One&Only The Palm. All stays are personally vetted by our team.' },
  ] as FAQ[],

  relatedDestinations: [
    { name: 'Thailand Adventures', image: '/images/thailand/hero.jpg', href: '/thailand' },
    { name: 'Singapore Luxury', image: '/images/singapore/hero-desktop.jpg', href: '/singapore' },
    { name: 'Rajasthan Royal', image: '/images/rajasthan/hero.jpg', href: '/rajasthan' },
  ] as RelatedDestination[],
}
