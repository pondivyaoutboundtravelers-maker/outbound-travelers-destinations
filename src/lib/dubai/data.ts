import type {
  TrustBadge, Package, ItineraryDay, HotelTier,
  MonthRating, Season, FAQ, Testimonial, RelatedDestination,
  Experience, WhatsAppConfig, ProcessStep, DestinationTheme, LeadFormConfig
} from '@/lib/shared/types'

export const dubaiData = {
  meta: {
    title: 'Ultra-Luxury Dubai Tour Packages — Premium Travel | Outbound Travelers',
    description: 'Experience Arabian Futurism. Plan your premium Dubai trip with Outbound Travelers. Desert safaris, Burj Khalifa VIP access, luxury stays, and seamless Abu Dhabi extensions.',
    canonical: 'https://www.outboundtravelers.com/international/dubai-tour-packages',
    ogImage: '/images/dubai/og-dubai.jpg',
    h1: 'Dubai Tour Packages — Arabian Futurism Meets Ultra-Luxury',
  },
  theme: {
    accentColor: '#D4A017', // Desert Gold
    accentSoft: '#8B5E3C', // Metallic Bronze
    motif: 'arabian-luxury',
  } as DestinationTheme,
  hero: {
    headline: 'Skyscrapers. Sand. Style.',
    subheadline: 'Immerse yourself in a cinematic journey where futuristic architecture meets boundless desert sands. Elevate your standard with VIP access and elite storytelling in Dubai.',
    primaryCta: 'Craft My Luxury Dubai Experience',
    secondaryCta: 'Speak with a UAE Concierge',
    desktopImage: '/images/dubai/hero-desktop.jpg',
    mobileImage: '/images/dubai/hero-mobile.jpg',
    imageAlt: 'Dubai Burj Khalifa skyline at night with desert golden haze and futuristic luxury lights',
  },
  trustBadges: [
    { icon: 'visa', label: 'E-Visa in 3–5 Days' },
    { icon: 'verified', label: 'Burj Level 148 Priority' },
    { icon: 'custom', label: 'Desert Safari Included' },
    { icon: 'support', label: 'Atlantis Luxury Stays' },
  ] as TrustBadge[],
  quickSummary: {
    duration: '5–6 nights ideal',
    bestSeason: 'October to March (Ideal for Desert activities & Shopping Festivals)',
    startingFrom: 'From ₹75,000 per person',
    tripTypes: 'Ultra-Luxury Family · Elite Couples Retreat · Abu Dhabi Add-ons',
  },
  whyVisit: [
    {
      icon: 'luxury',
      title: 'Modern Luxury',
      description: 'Dine in the clouds, shop in world-class designer malls, and stay in ultra-premium properties defining the global standard of high-end travel.',
    },
    {
      icon: 'efficiency',
      title: 'Arabian Experiences',
      description: 'From majestic desert dunes at sunset to traditional Dhow cruises, experience the soul of Arabia wrapped in five-star elegance.',
    },
    {
      icon: 'easy',
      title: 'Family Attractions',
      description: 'A paradise for families with monumental indoor theme parks, the mesmerizing Miracle Garden, and state-of-the-art waterparks like Aquaventure.',
    },
    {
      icon: 'veg',
      title: 'Shopping Festivals',
      description: 'Global flagship stores, massive seasonal sales, and gold souks offer an unmatched retail therapy experience for elite shoppers.',
    },
    {
      icon: 'safety',
      title: 'Desert Adventures',
      description: 'Private dune bashing in premium SUVs, luxury desert camps with curated gastronomy, and cinematic stargazing under Arabian nights.',
    },
    {
      icon: 'luxury',
      title: 'Abu Dhabi Add-ons',
      description: 'Extend your journey to the capital to witness the majestic Sheikh Zayed Grand Mosque, Louvre, and Ferrari World just an hour away.',
    },
  ],
  experiences: [
    { id: 'burj', title: 'Burj Khalifa VIP Access', description: 'Ascend to Level 148 for exclusive sky-high lounges, avoiding the standard crowds for a premium viewing experience.', image: '/images/dubai/exp-burj.jpg', alt: 'Burj Khalifa Dubai', seasonal: false },
    { id: 'safari', title: 'Luxury Desert Safari', description: 'Experience the dunes in cinematic style with private Land Cruisers, ending with an exclusive five-star desert banquet.', image: '/images/dubai/exp-safari.jpg', alt: 'Dubai luxury desert safari', seasonal: false },
    { id: 'atlantis', title: 'Atlantis Aquaventure', description: 'Plunge into futuristic water slides and private beach clubs at the iconic Atlantis, The Palm.', image: '/images/dubai/exp-atlantis.jpg', alt: 'Atlantis Aquaventure Dubai', seasonal: false },
    { id: 'dhow', title: 'Marina Dhow Cruise', description: 'Sail the futuristic Dubai Marina in a traditional wooden dhow, enjoying a curated dinner amidst glowing skyscrapers.', image: '/images/dubai/exp-dhow.jpg', alt: 'Dubai Marina Dhow Cruise', seasonal: false },
    { id: 'global-village', title: 'Global Village VIP', description: 'A massive cultural pavilion showcasing global luxury and entertainment, best experienced with our priority access.', image: '/images/dubai/exp-global-village.jpg', alt: 'Global Village Dubai', seasonal: true },
    { id: 'miracle', title: 'Miracle Garden', description: 'Walk through an unbelievable oasis of millions of blooming flowers engineered right in the desert.', image: '/images/dubai/exp-miracle.jpg', alt: 'Dubai Miracle Garden', seasonal: true },
    { id: 'ski', title: 'Ski Dubai Exclusives', description: 'Hit the slopes inside one of the largest indoor ski resorts, completely defying the Arabian heat.', image: '/images/dubai/exp-ski.jpg', alt: 'Ski Dubai indoor snow park', seasonal: false },
    { id: 'old-dubai', title: 'Old Dubai & Gold Souk', description: 'A guided premium tour of the historic Al Fahidi neighborhood, crossing the creek to the legendary shimmering Gold Souk.', image: '/images/dubai/exp-old-dubai.jpg', alt: 'Old Dubai Creek and Gold Souk', seasonal: false },
  ] as Experience[],
  packages: [
    {
      id: 'family-classic',
      name: 'Dubai Family Classic',
      duration: '5 Nights / 6 Days',
      idealFor: 'Families with kids seeking a blend of futuristic thrills and desert magic.',
      highlights: ['Burj Khalifa Level 124/125', 'Premium Desert Safari', 'Atlantis Aquaventure Tickets', 'Miracle Garden VIP', 'Private Chauffeur Transfers'],
      price: 'From ₹82,000 per person',
      image: '/images/dubai/pkg-classic.jpg',
      alt: 'Dubai Family Classic tour package',
      whatsappMessage: 'Hi Outbound Travelers, I\'m interested in the Dubai Family Classic 5N/6D package. Please share details.',
      seasonal: false,
    },
    {
      id: 'luxury-escape',
      name: 'Arabian Ultra-Luxury',
      duration: '6 Nights / 7 Days',
      idealFor: 'Couples and elite travelers demanding the absolute best.',
      highlights: ['Burj Level 148 VIP Sky Lounge', 'Private Yacht Marina Charter', '1 Night Atlantis Resort Stay', 'Helicopter City Tour', 'Abu Dhabi Mosque Extension'],
      price: 'From ₹1,85,000 per person',
      image: '/images/dubai/pkg-luxury.jpg',
      alt: 'Arabian Ultra-Luxury package',
      whatsappMessage: 'Hi Outbound Travelers, I\'d like to know more about the Arabian Ultra-Luxury 6N/7D. Please share customization options.',
      seasonal: false,
    },
  ] as Package[],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in the City of Gold',
      description: 'Arrive via private luxury transfer. Check in to your premium downtown hotel. Evening Dhow Cruise dinner across the futuristic glowing Marina.',
      highlights: ['Private Airport Pickup', 'Premium Hotel Check-in', 'Marina Dhow Cruise Dinner'],
      stay: 'Dubai 5★ Premium Hotel',
    },
    {
      day: 2,
      title: 'Skyscrapers & Sky Lounges',
      description: 'Morning tour of Old Dubai and Gold Souk. Afternoon ascent to the Burj Khalifa via fast-track access. Watch the spectacular Dubai Fountain show at dusk.',
      highlights: ['Gold Souk VIP Walk', 'Burj Khalifa Priority', 'Fountain Show Reserved Viewing'],
      stay: 'Dubai 5★ Premium Hotel',
    },
    {
      day: 3,
      title: 'Cinematic Desert Safari',
      description: 'Leisurely morning. At 3 PM, your private SUV whisks you away for luxury dune bashing, ending with an exclusive VIP desert camp dinner and entertainment.',
      highlights: ['Private 4x4 Dune Bashing', 'Cinematic Sunset Stargazing', 'VIP Desert Banquet'],
      stay: 'Dubai 5★ Premium Hotel',
    },
    {
      day: 4,
      title: 'Aquaventure & The Palm',
      description: 'Spend the day at Atlantis Aquaventure on Palm Jumeirah. Enjoy priority access to slides and private beach clubs.',
      highlights: ['Atlantis Aquaventure Passes', 'Palm Jumeirah Monorail', 'Premium Beach Access'],
      stay: 'Dubai 5★ Premium Hotel',
    },
    {
      day: 5,
      title: 'Abu Dhabi Grandeur',
      description: 'Day trip to Abu Dhabi. Marvel at the stunning Sheikh Zayed Grand Mosque with its gold and marble architecture. Return to Dubai in the evening.',
      highlights: ['Private Abu Dhabi Transfer', 'Grand Mosque Guided Tour', 'Louvre Abu Dhabi Photo Stop'],
      stay: 'Dubai 5★ Premium Hotel',
    },
    {
      day: 6,
      title: 'Farewell from the Future',
      description: 'Morning shopping at Dubai Mall. Private chauffeur transfer back to the airport for your departure flight.',
      highlights: ['Dubai Mall Leisure', 'Private Airport Drop', 'Seamless Check-in Assistance'],
      stay: 'Departure flight home',
    },
  ] as ItineraryDay[],
  hotelTiers: [
    { tier: '4★ Premium', description: 'Excellent properties in Downtown or Al Barsha with rooftop pools.', price: 'Included in Base Cost' },
    { tier: '5★ Luxury', description: 'Elite hotels like JW Marriott Marquis or Taj Dubai with Burj views.', price: 'Premium Upgrade (+₹25,000/person)' },
    { tier: 'Ultra-Luxury', description: 'Iconic stays at Atlantis The Palm, Burj Al Arab, or Armani Hotel.', price: 'Elite Upgrade (+₹80,000/person)' },
  ] as HotelTier[],
  months: [
    { month: 'Jan', rating: 'best', note: 'Perfect cool weather, shopping festival.' },
    { month: 'Feb', rating: 'best', note: 'Clear skies, perfect for desert safaris.' },
    { month: 'Mar', rating: 'best', note: 'Great weather before the summer heat.' },
    { month: 'Apr', rating: 'good', note: 'Getting warm, good for water parks.' },
    { month: 'May', rating: 'good', note: 'Summer begins, great indoor deals.' },
    { month: 'Jun', rating: 'good', note: 'Peak summer, mostly indoor activities.' },
    { month: 'Jul', rating: 'good', note: 'Summer Surprises shopping festival.' },
    { month: 'Aug', rating: 'good', note: 'Warmest month, excellent hotel discounts.' },
    { month: 'Sep', rating: 'good', note: 'Temperatures dropping, outdoor spots opening.' },
    { month: 'Oct', rating: 'best', note: 'Global village opens, beautiful weather.' },
    { month: 'Nov', rating: 'best', note: 'Perfect outdoor weather, high demand.' },
    { month: 'Dec', rating: 'best', note: 'Festive season, NYE fireworks at Burj Khalifa.' },
  ] as MonthRating[],
  seasons: [
    { id: 'winter', label: 'Golden Winter', months: 'Oct–Mar', description: 'Cool breezes, perfect for desert camps, Miracle Garden, and Global Village.', image: '/images/dubai/season-winter.jpg' },
    { id: 'summer', label: 'Indoor Extravaganza', months: 'Apr–Sep', description: 'Massive shopping discounts and uncrowded futuristic indoor parks.', image: '/images/dubai/season-summer.jpg' },
  ] as Season[],
  process: [
    { step: 1, title: 'Luxury Consultation', description: 'Connect with our UAE concierge to design your elite experience.' },
    { step: 2, title: 'Cinematic Itinerary', description: 'Receive a visually stunning proposal outlining your futuristic journey.' },
    { step: 3, title: 'VIP Finalization', description: 'Secure Burj priority access, luxury vehicles, and bespoke accommodations.' },
    { step: 4, title: 'Flawless Execution', description: 'Travel seamlessly with e-visas and 24/7 on-ground premium support.' },
  ] as ProcessStep[],
  inclusions: [
    'Premium accommodations in vetted 4★/5★ properties',
    'Daily lavish buffet breakfast',
    'Private airport transfers in executive vehicles',
    'Dubai Tourist E-Visa processing',
    'Burj Khalifa Observation Deck Tickets',
    'Premium Desert Safari with BBQ Dinner',
    'Half-day Dubai City Tour with Guide',
    'All local tourist taxes (Tourism Dirham)',
  ],
  exclusions: [
    'International flights',
    'Personal lunches and dinners (unless specified)',
    'Tourism Dirham tax paid directly at the hotel',
    'Travel insurance',
  ],
  gallery: [
    { image: '/images/dubai/gallery-01.jpg', alt: 'Burj Khalifa night' },
    { image: '/images/dubai/gallery-02.jpg', alt: 'Desert Safari dunes' },
  ],
  testimonials: [
    {
      name: 'The Kapoor Family',
      city: 'Mumbai',
      tripType: 'Multi-Generation Family',
      quote: 'The VIP access to the Burj Khalifa completely transformed our trip. Skipping the lines was exactly the luxury we paid for. The entire Dubai experience was flawlessly executed, feeling cinematic and grand.',
      rating: 5,
      date: 'January 2026',
      photo: '/images/testimonials/kapoor.jpg'
    },
    {
      name: 'Raj & Simran',
      city: 'Delhi',
      tripType: 'Couples Retreat',
      quote: 'We wanted a premium escape and Outbound Travelers delivered. The private yacht in Dubai Marina and the luxury desert camp were unforgettable. Truly a 7-star experience.',
      rating: 5,
      date: 'February 2026',
      photo: '/images/testimonials/raj-simran.jpg'
    },
  ] as Testimonial[],
  faqs: [
    {
      q: 'Do Indians need a visa for Dubai?',
      a: 'Yes, a tourist visa is required. We handle the entire e-visa process ensuring a paperless, hassle-free approval within 3-5 working days.'
    },
    {
      q: 'Can we add an Abu Dhabi day trip?',
      a: 'Absolutely. We seamlessly integrate luxury day tours to Abu Dhabi, including the Grand Mosque and Louvre, with private chauffeur service from your Dubai hotel.'
    },
  ] as FAQ[],
  relatedDestinations: [
    { name: 'Singapore Future & Luxury', image: '/images/singapore/hero.jpg', href: '/singapore' },
    { name: 'Malaysia Twin City', image: '/images/malaysia/hero.jpg', href: '/malaysia' },
  ] as RelatedDestination[],
  whatsapp: {
    number: '919876543210',
    heroMessage: 'Hi Outbound Travelers, I\'m interested in a luxury Dubai tour package. Please share VIP itineraries.',
    stickyMessage: 'Hi Outbound Travelers, I\'m planning a Dubai trip. Can you help plan a premium experience?',
    floaterMessage: 'Hi Outbound Travelers, I want to know more about Dubai custom tours and Burj VIP access.',
    finalCtaMessage: 'Hi Outbound Travelers, I am ready to book my cinematic Dubai journey. Please send the quote.',
    postFormMessage: 'Hi Outbound Travelers, I submitted my Dubai enquiry. Travel month: {month}, {travelers} travelers from {city}. Ready for luxury!',
  } as WhatsAppConfig,
  leadForm: {
    title: 'Design Your Luxury Dubai Trip',
    subtitle: 'Step into the future. Let our UAE experts curate a flawless cinematic itinerary for you in under 2 hours.',
    submitButtonText: 'Get My Dubai Quote',
    successMessage: 'Excellent. Your UAE concierge is crafting a spectacular itinerary and will WhatsApp you within 2 hours.',
    destinationId: 'dubai',
    destinationName: 'Dubai',
  } as LeadFormConfig,
  seoContent: {
    h2: 'Experience Dubai Like Never Before',
    sections: [
      {
        h3: 'The Ultimate Luxury Destination',
        body: 'Dubai offers a vision of the future fused with deep Arabian heritage. It is the definitive destination for families and couples seeking uncompromising luxury, world-first attractions, and cinematic experiences.',
      },
    ],
  },
}
