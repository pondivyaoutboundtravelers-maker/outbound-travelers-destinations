import type {
  TrustBadge, Package, ItineraryDay, HotelTier,
  MonthRating, Season, FAQ, Testimonial, RelatedDestination,
  Experience, WhatsAppConfig, ProcessStep, DestinationTheme, LeadFormConfig
} from '@/lib/shared/types'

export const sikkimData = {
  meta: {
    title: 'Sikkim Luxury Tour Packages — Himalayan Escapes | Outbound Travelers',
    description: 'Discover the cinematic beauty of Sikkim with our premium, fully customizable itineraries. Experience Gangtok, Pelling, and North Sikkim with top-tier stays.',
    canonical: 'https://www.outboundtravelers.com/sikkim',
    ogImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80',
    h1: 'Sikkim — The Ultimate Himalayan Luxury Experience',
  },
  theme: {
    accentColor: '#0F766E', // Teal
    accentSoft: '#CCFBF1',
    motif: 'prayer-flag',
  } as DestinationTheme,
  hero: {
    headline: 'Kanchenjunga, Up Close',
    subheadline: "Gangtok's monasteries, Pelling's mountain views, North Sikkim's flower valleys, Darjeeling's tea. Quieter than Kashmir, just as breathtaking.",
    primaryCta: 'Plan My Sikkim Trip',
    secondaryCta: 'Explore Packages',
    desktopImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=2000',
    mobileImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Sunrise over Mount Kanchenjunga with prayer flags in the foreground, Sikkim',
  },
  trustBadges: [
    { icon: 'verified', label: 'Permits handled' },
    { icon: 'custom', label: 'Honeymoon-tested' },
    { icon: 'trips', label: 'Family-friendly' },
    { icon: 'support', label: '24/7 ground team' },
  ] as TrustBadge[],
  quickSummary: {
    duration: '6–8 nights ideal',
    bestSeason: 'Mar–Jun, Sep–Dec (Spring & Autumn)',
    startingFrom: 'From ₹[TBD] per person',
    tripTypes: 'Honeymoon · Premium Family · Adventure',
  },
  whyVisit: [
    {
      icon: 'specialist',
      title: 'Aman-style Luxury in the Himalayas',
      description: 'We curate stays at premium boutique lodges, tea estates, and heritage properties that blend seamlessly with the mountain aesthetic.',
    },
    {
      icon: 'verified',
      title: 'Zero-Friction Logistics',
      description: 'From tricky North Sikkim permits to navigating winding mountain roads, our expert local drivers and ground team handle every detail invisibly.',
    },
    {
      icon: 'southindia',
      title: 'Curated Authentic Experiences',
      description: 'Go beyond the tourist spots. Meditate in ancient monasteries, walk through private tea gardens, and witness cinematic sunrises in silence.',
    },
  ],
  experiences: [
    { id: 'yumthang', title: 'Yumthang Valley of Flowers', description: 'At 11,800 ft, this valley erupts in rhododendrons every spring. A surreal, cinematic landscape wrapped in snow-capped peaks.', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80', alt: 'Yumthang Valley Sikkim spring flowers', seasonal: true, seasonMonths: [3, 4, 5] },
    { id: 'pelling', title: 'Pelling Kanchenjunga Views', description: 'Wake up to the world\'s third highest peak glowing gold right outside your window. The ultimate mountain serenity.', image: 'https://images.unsplash.com/photo-1589808381861-12c5b967d6cd?auto=format&fit=crop&q=80', alt: 'Kanchenjunga view from Pelling Sikkim', seasonal: false },
    { id: 'rumtek', title: 'Rumtek Monastery Serenity', description: 'Experience the spiritual heart of Sikkim. Listen to the chanting monks and explore the intricate, colorful Buddhist architecture.', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80', alt: 'Rumtek Monastery Gangtok Sikkim', seasonal: false },
    { id: 'darjeeling', title: 'Darjeeling Tea Estates', description: 'Step back in time at a colonial-era tea bungalow. Sip world-class tea while overlooking the rolling emerald hills.', image: 'https://images.unsplash.com/photo-1596704017329-87a27072eaee?auto=format&fit=crop&q=80', alt: 'Darjeeling tea estate luxury', seasonal: false },
    { id: 'gurudongmar', title: 'Gurudongmar Lake Expedition', description: 'One of the highest lakes in the world at 17,800 ft. A pristine, frozen wonder offering an unmatched high-altitude adventure.', image: 'https://images.unsplash.com/photo-1598115682737-142dbd877e56?auto=format&fit=crop&q=80', alt: 'Gurudongmar Lake North Sikkim frozen', seasonal: true, seasonMonths: [4, 5, 10, 11] },
    { id: 'nathula', title: 'Nathu La Pass & Tsomgo Lake', description: 'Stand at the ancient Silk Route border. Drive past the glacial Tsomgo lake, revered as a sacred mirror by locals.', image: 'https://images.unsplash.com/photo-1627838520295-8c01ff0f3de5?auto=format&fit=crop&q=80', alt: 'Tsomgo lake near Gangtok', seasonal: false },
  ] as Experience[],
  packages: [
    {
      id: 'sikkim-classic',
      name: 'Gangtok & Darjeeling Elegance',
      duration: '5 Nights / 6 Days',
      idealFor: 'Couples, First-timers',
      highlights: ['Premium Gangtok stay', 'Tiger Hill sunrise', 'Tea estate visit'],
      price: 'From ₹[TBD] per person',
      image: 'https://images.unsplash.com/photo-1596704017329-87a27072eaee?auto=format&fit=crop&q=80',
      alt: 'Darjeeling tea estate luxury package',
      whatsappMessage: 'Hi Outbound Travelers, I\'m interested in the Gangtok & Darjeeling Elegance 5N/6D package.',
      seasonal: false,
    },
    {
      id: 'sikkim-honeymoon',
      name: 'Himalayan Romance',
      duration: '6 Nights / 7 Days',
      idealFor: 'Honeymooners',
      highlights: ['Boutique Pelling retreat', 'Private monastery tour', 'Candlelit dinner'],
      price: 'From ₹[TBD] per couple',
      image: 'https://images.unsplash.com/photo-1589808381861-12c5b967d6cd?auto=format&fit=crop&q=80',
      alt: 'Pelling honeymoon package mountain views',
      whatsappMessage: 'Hi Outbound Travelers, I\'m interested in the Himalayan Romance 6N/7D package.',
      seasonal: false,
    },
    {
      id: 'north-sikkim',
      name: 'North Sikkim Expedition',
      duration: '7 Nights / 8 Days',
      idealFor: 'Adventure Seekers, Photographers',
      highlights: ['Lachung & Lachen', 'Yumthang Valley', 'Gurudongmar Lake'],
      price: 'From ₹[TBD] per person',
      image: 'https://images.unsplash.com/photo-1598115682737-142dbd877e56?auto=format&fit=crop&q=80',
      alt: 'North Sikkim tour package Gurudongmar',
      whatsappMessage: 'Hi Outbound Travelers, I\'m interested in the North Sikkim Expedition 7N/8D package.',
      seasonal: false,
    },
  ] as Package[],
  itinerary: [
    { day: 1, title: 'Arrival in Bagdogra & Drive to Gangtok', description: 'Arrive at IXB airport. Scenic 4-hour drive alongside the Teesta river to Gangtok. Check-in to your premium hotel and relax.', highlights: ['Airport pickup', 'Teesta river views', 'Premium check-in'], stay: 'Gangtok' },
    { day: 2, title: 'Tsomgo Lake & Nathu La Pass', description: 'Full day excursion to the glacial Tsomgo Lake and the Indo-China border at Nathu La. Stunning alpine scenery.', highlights: ['Tsomgo Lake', 'Nathu La Pass', 'Baba Mandir'], stay: 'Gangtok' },
    { day: 3, title: 'Gangtok to Pelling', description: 'Morning visit to Rumtek Monastery. Scenic drive to Pelling. Afternoon at leisure enjoying the Kanchenjunga views from your resort.', highlights: ['Rumtek Monastery', 'Scenic drive', 'Mountain views'], stay: 'Pelling' },
    { day: 4, title: 'Pelling Sightseeing & Skywalk', description: 'Visit the Pemayangtse Monastery, Rabdentse Ruins, and walk the glass-bottomed Pelling Skywalk.', highlights: ['Pelling Skywalk', 'Rabdentse Ruins', 'Pemayangtse'], stay: 'Pelling' },
    { day: 5, title: 'Pelling to Darjeeling', description: 'Drive through beautiful winding roads to the Queen of the Hills. Walk the Mall Road in the evening.', highlights: ['Tea gardens en route', 'Mall road evening', 'Colonial charm'], stay: 'Darjeeling' },
    { day: 6, title: 'Tiger Hill Sunrise & Tea Estate', description: 'Early morning to Tiger Hill for a cinematic sunrise. Later, visit a premium tea estate and the Himalayan Mountaineering Institute.', highlights: ['Tiger Hill sunrise', 'Tea tasting', 'HMI Museum'], stay: 'Darjeeling' },
    { day: 7, title: 'Departure', description: 'Enjoy a leisurely breakfast before a smooth transfer back to Bagdogra Airport.', highlights: ['Leisurely breakfast', 'Airport drop'], stay: 'Departure' },
  ] as ItineraryDay[],
  hotelTiers: [
    { tier: '4★ Premium', description: 'Boutique properties with modern heating, excellent service, and great views.', price: 'From ₹[TBD] per night' },
    { tier: '5★ Luxury', description: 'The absolute best in town. World-class spas, heated pools, and impeccable dining.', price: 'From ₹[TBD] per night' },
    { tier: 'Heritage Estates', description: 'Colonial-era tea bungalows in Darjeeling offering an exclusive, Aman-like retreat.', price: 'From ₹[TBD] per night' },
  ] as HotelTier[],
  months: [
    { month: 'Jan', rating: 'okay', note: 'Very cold, high passes may be blocked by snow.' },
    { month: 'Feb', rating: 'okay', note: 'Cold continues, clear skies.' },
    { month: 'Mar', rating: 'best', note: 'Spring begins, rhododendrons start blooming.' },
    { month: 'Apr', rating: 'best', note: 'Peak spring. Vibrant flower valleys.' },
    { month: 'May', rating: 'best', note: 'Pleasant weather, ideal for families.' },
    { month: 'Jun', rating: 'good', note: 'Pre-monsoon showers begin.' },
    { month: 'Jul', rating: 'okay', note: 'Monsoon. Landslides possible.' },
    { month: 'Aug', rating: 'okay', note: 'Monsoon continues.' },
    { month: 'Sep', rating: 'good', note: 'Rains recede, lush green landscapes.' },
    { month: 'Oct', rating: 'best', note: 'Clear skies, perfect Kanchenjunga views.' },
    { month: 'Nov', rating: 'best', note: 'Crisp autumn weather, great for photography.' },
    { month: 'Dec', rating: 'good', note: 'Cold sets in, fewer crowds, beautiful winter sun.' },
  ] as MonthRating[],
  seasons: [
    { id: 'spring', label: 'Floral Spring', months: 'Mar–May', description: 'Rhododendrons and orchids bloom. Vibrant colors across the valleys.', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80' },
    { id: 'autumn', label: 'Clear Autumn', months: 'Oct–Nov', description: 'The absolute best visibility for Kanchenjunga. Crisp, cinematic air.', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80' },
    { id: 'winter', label: 'Serene Winter', months: 'Dec–Feb', description: 'Snow in higher altitudes. Perfect for a cozy, luxurious mountain escape.', image: 'https://images.unsplash.com/photo-1589808381861-12c5b967d6cd?auto=format&fit=crop&q=80' },
  ] as Season[],
  process: [
    { step: 1, title: 'Share your vision', description: 'Tell us your dates, group size, and whether you prefer adventure or absolute relaxation.' },
    { step: 2, title: 'Curated Itinerary', description: 'We design a cinematic journey tailored for you, featuring the best luxury properties.' },
    { step: 3, title: 'Seamless Execution', description: 'Permits, luxury transport, and internal logistics are handled entirely by our expert team.' },
  ] as ProcessStep[],
  inclusions: [
    'Premium accommodation',
    'Daily breakfast & dinner',
    'Private luxury SUV (Innova Crysta or similar)',
    'All inner-line permits (Nathu La, North Sikkim)',
    'Expert local chauffeur',
    'Airport transfers',
  ],
  exclusions: [
    'Flights to Bagdogra (IXB)',
    'Entry fees to monuments/monasteries',
    'Personal expenses and tips',
    'Travel insurance',
  ],
  gallery: [
    { image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80', alt: 'Sikkim prayer flags Kanchenjunga' },
    { image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80', alt: 'Monastery in Sikkim' },
    { image: 'https://images.unsplash.com/photo-1596704017329-87a27072eaee?auto=format&fit=crop&q=80', alt: 'Darjeeling Tea Estate' },
    { image: 'https://images.unsplash.com/photo-1589808381861-12c5b967d6cd?auto=format&fit=crop&q=80', alt: 'Snow capped mountains Pelling' },
    { image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80', alt: 'Valley of flowers Yumthang' },
    { image: 'https://images.unsplash.com/photo-1598115682737-142dbd877e56?auto=format&fit=crop&q=80', alt: 'Gurudongmar Lake' },
  ],
  testimonials: [
    { name: 'Aditi & Kunal', city: 'Mumbai', tripType: 'Honeymoon', quote: 'The attention to detail was Aman-level. Waking up in Pelling with Kanchenjunga outside our window, while having our private breakfast—unforgettable.', rating: 5, date: 'October 2025', photo: '/testimonials/placeholder1.jpg' },
    { name: 'Dr. Menon Family', city: 'Bangalore', tripType: 'Family', quote: 'North Sikkim logistics are tough, but Outbound Travelers made it feel effortless. The SUV was pristine, the permits were ready, and the hotels were top tier.', rating: 5, date: 'April 2026', photo: '/testimonials/placeholder2.jpg' },
  ] as Testimonial[],
  faqs: [
    { q: 'What is the best time to visit Sikkim and Darjeeling?', a: 'Spring (March to May) brings blooming rhododendrons. Autumn (October to November) offers the clearest, most cinematic views of the Himalayas.' },
    { q: 'Are permits required for Sikkim?', a: 'Yes. Indian nationals need an Inner Line Permit for protected areas like Tsomgo Lake, Nathu La, and North Sikkim. We handle all paperwork and permits seamlessly for you.' },
    { q: 'Is it safe to travel to North Sikkim with kids?', a: 'North Sikkim involves high altitudes (above 10,000 ft). We recommend it for older kids (10+). For younger kids, Gangtok, Pelling, and Darjeeling offer a safer, luxurious alternative.' },
    { q: 'What kind of vehicles do you use?', a: 'We exclusively use premium SUVs like Toyota Innova Crysta for all our luxury tours, ensuring comfort on winding mountain roads.' },
  ] as FAQ[],
  relatedDestinations: [
    { name: 'Kashmir', image: '/shared/kashmir-thumb.jpg', href: '/kashmir' },
    { name: 'Ladakh', image: '/shared/ladakh-thumb.jpg', href: '/ladakh' },
    { name: 'Bhutan', image: '/shared/bhutan-thumb.jpg', href: '/bhutan' },
  ] as RelatedDestination[],
  whatsapp: {
    number: '919876543210',
    heroMessage: 'Hi Outbound Travelers, I\'m interested in a luxury Sikkim tour package. Please share details.',
    stickyMessage: 'Hi, I need help planning a premium Sikkim trip.',
    floaterMessage: 'Hi, I\'m interested in a Sikkim luxury package.',
    finalCtaMessage: 'Hi Outbound Travelers, I\'m ready to plan my Sikkim trip. Please send me a custom itinerary.',
    postFormMessage: 'Hi Outbound Travelers, I just submitted my Sikkim enquiry. Looking forward to the premium itinerary.',
  } as WhatsAppConfig,
  leadForm: {
    title: 'Curate your Sikkim Journey',
    subtitle: 'Share your vision. We will craft a cinematic Himalayan escape for you.',
    submitButtonText: 'Request Luxury Itinerary',
    successMessage: 'Received. A Himalayan specialist will contact you shortly.',
    destinationId: 'sikkim',
    destinationName: 'Sikkim & Darjeeling',
  } as LeadFormConfig,
  seoContent: {
    h2: 'Experience the Himalayas in Unprecedented Luxury',
    sections: [
      {
        h3: 'The Aesthetic of Sikkim',
        body: 'Sikkim offers a rare blend of deep spirituality and dramatic landscapes. Unlike more commercialized Himalayan regions, Sikkim retains a quiet, monastic elegance. Our luxury packages lean into this serenity, focusing on boutique lodges and heritage estates.'
      },
      {
        h3: 'Seamless High-Altitude Travel',
        body: 'Navigating Sikkim requires expertise. From arranging restricted area permits for Nathu La and Gurudongmar to providing premium, comfortable SUVs for the winding roads, our ground team ensures your journey is as smooth as your destination is beautiful.'
      }
    ],
  },
}
