import type {
  TrustBadge, Package, ItineraryDay, HotelTier,
  FAQ, Testimonial, RelatedDestination,
  Experience, WhatsAppConfig, ProcessStep, DestinationTheme, LeadFormConfig
} from '@/lib/shared/types'

export const delhiData = {
  meta: {
    title: 'Premium Delhi Tour Packages — Modern Heritage Editorial | Outbound Travelers',
    description: 'Immerse yourself in a cinematic journey through Delhi. Experience Mughal grandeur, colonial legacy, and modern luxury with our curated premium packages.',
    canonical: 'https://www.outboundtravelers.com/delhi',
    ogImage: '/images/delhi/hero.jpg',
    h1: 'Delhi — A Cinematic Historical Journey',
  },
  theme: {
    accentColor: '#7C2D12', // Heritage Rust
    accentSoft: '#F8F4EC',  // Vintage Ivory
    motif: 'mughal-arch',
  } as DestinationTheme,
  whatsapp: {
    number: '919876543210',
    heroMessage: 'Hi Outbound Travelers! I want to plan a premium editorial Delhi heritage journey.',
    stickyMessage: 'Hi Outbound Travelers! Im interested in the cinematic Delhi packages.',
    floaterMessage: 'Hi Outbound Travelers! Can we discuss a custom luxury Delhi itinerary?',
    finalCtaMessage: 'Hi Outbound Travelers! Ready to book my premium Delhi tour.',
    postFormMessage: 'Hi Outbound Travelers! I just submitted an inquiry for Delhi. Can we chat?',
  } as WhatsAppConfig,
  leadForm: {
    title: 'Curate Your Cinematic Delhi Journey',
    subtitle: 'Share your vision. Our heritage specialists will design an impeccable editorial-style itinerary.',
    submitButtonText: 'Design My Delhi Experience',
    successMessage: 'Thank you. A heritage specialist will reach out shortly.',
    destinationId: 'delhi',
    destinationName: 'Delhi',
  } as LeadFormConfig,
  hero: {
    headline: 'Empires in Stone.',
    subheadline: 'Enter a cinematic documentary of history. Outbound Travelers curates luxury heritage journeys through Mughal grandeur, colonial avenues, and modern glass skylines.',
    primaryCta: 'Curate My Editorial Journey',
    secondaryCta: 'Speak to a Heritage Specialist',
    desktopImage: '/images/delhi/hero.jpg', // Placeholder, we can use an architectural abstract
  },
  trustBadges: [
    { icon: 'history', label: 'Curated Heritage Walks' },
    { icon: 'car', label: 'Luxury Chauffeured Transit' },
    { icon: 'building', label: 'Premium Boutique Havelis' },
    { icon: 'shield', label: '24/7 Dedicated Concierge' },
  ] as TrustBadge[],
  experiences: [
    {
      id: 'humayuns-tomb',
      title: 'Dawn at Humayun\'s Tomb',
      description: 'Walk through perfect Mughal symmetry as the morning sun casts warm golden shadows on red sandstone and marble, long before the crowds arrive.',
      image: '/images/delhi/humayuns-tomb.jpg',
      alt: 'Humayuns Tomb at dawn',
      seasonal: false,
    },
    {
      id: 'jama-masjid',
      title: 'Architectural Grandeur of Jama Masjid',
      description: 'Climb the minarets for a breathtaking panorama of Old Delhi, experiencing the sheer scale of India\'s largest 17th-century mosque.',
      image: '/images/delhi/jama-masjid.jpg',
      alt: 'Jama Masjid courtyard',
      seasonal: false,
    },
    {
      id: 'lutyens-delhi',
      title: 'The Colonial Avenues of Lutyens',
      description: 'A chauffeured drive down Rajpath (Kartavya Path), flanked by vast green lawns and monumental colonial architecture culminating at India Gate.',
      image: '/images/delhi/india-gate.jpg',
      alt: 'India Gate Lutyens Delhi',
      seasonal: false,
    },
    {
      id: 'qutub-minar',
      title: 'Qutub Minar Under the Stars',
      description: 'Wander the ancient ruins of the Qutub complex, beautifully illuminated against the night sky, feeling the weight of centuries of history.',
      image: '/images/delhi/qutub-minar.jpg',
      alt: 'Qutub Minar illuminated',
      seasonal: false,
    },
  ] as Experience[],
  packages: [
    {
      id: 'delhi-heritage-weekend',
      name: 'Delhi Heritage Weekend',
      duration: '3 Days / 2 Nights',
      idealFor: 'Culture Enthusiasts & Short Breaks',
      highlights: [
        'Vetted boutique stays in South Delhi',
        'Private guided Humayun\'s Tomb dawn walk',
        'Exclusive Old Delhi evening food tour',
        'Luxury airport transfers',
      ],
      price: '₹22,500',
      image: '/images/delhi/heritage.jpg',
      alt: 'Delhi Heritage architecture',
      whatsappMessage: 'Hi! I want details on the Delhi Heritage Weekend package.',
      seasonal: false,
    },
    {
      id: 'delhi-agra-jaipur-classic',
      name: 'The Golden Triangle Signature',
      duration: '6 Days / 5 Nights',
      idealFor: 'First-time Luxury Travelers',
      highlights: [
        'Premium stays across Delhi, Agra, and Jaipur',
        'Taj Mahal private sunrise tour',
        'Jaipur Amber Fort & City Palace',
        'Inter-city travel in premium luxury sedans',
      ],
      price: '₹55,000',
      image: '/images/delhi/golden-triangle.jpg',
      alt: 'Golden Triangle India',
      whatsappMessage: 'Hi! I want details on the Golden Triangle Signature package.',
      seasonal: false,
    },
    {
      id: 'delhi-mughal-luxury',
      name: 'Mughal Grandeur Experience',
      duration: '4 Days / 3 Nights',
      idealFor: 'Architecture & History Buffs',
      highlights: [
        '5-Star heritage property accommodations',
        'Curated Red Fort & Jama Masjid architectural tour',
        'Fine-dining at Bukhara (ITC Maurya)',
        'Private Sufi music evening at Nizamuddin',
      ],
      price: '₹42,000',
      image: '/images/delhi/mughal.jpg',
      alt: 'Mughal Architecture Delhi',
      whatsappMessage: 'Hi! I want details on the Mughal Grandeur Experience package.',
      seasonal: false,
    },
  ] as Package[],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in the Capital – The Colonial Introduction',
      description: 'Your private chauffeur meets you at IGI Airport. After settling into your premium heritage hotel, embark on a late afternoon drive through the wide, tree-lined boulevards of Lutyens\' Delhi, passing India Gate and the Rashtrapati Bhavan as they are bathed in golden hour light.',
      highlights: ['VIP Airport Pick-up', 'Lutyens\' Delhi Scenic Drive', 'Welcome Heritage Dinner'],
      stay: 'Premium South Delhi Boutique Hotel',
    },
    {
      day: 2,
      title: 'Mughal Symmetry – Humayun\'s Tomb & Old Delhi',
      description: 'Start the day before the crowds at Humayun\'s Tomb, a masterpiece of red sandstone and white marble. In the afternoon, dive into the sensory intensity of Old Delhi with a curated rickshaw ride through Chandni Chowk and a private street food tasting.',
      highlights: ['Dawn at Humayun\'s Tomb', 'Jama Masjid Panorama', 'Old Delhi Culinary Walk'],
      stay: 'Premium South Delhi Boutique Hotel',
    },
    {
      day: 3,
      title: 'Ancient Ruins & Modern Luxury',
      description: 'Explore the towering Qutub Minar complex and the serene Lodhi Gardens. Conclude your Delhi experience with high tea at a historic venue before your departure or onward journey to Agra.',
      highlights: ['Qutub Minar Exploration', 'Lodhi Gardens Stroll', 'Heritage High Tea'],
      stay: 'Departure or Onward Journey',
    },
  ] as ItineraryDay[],
  process: [
    {
      step: 1,
      title: 'Consultation',
      description: 'Connect with our heritage specialists to define your architectural and culinary interests.',
    },
    {
      step: 2,
      title: 'Curation',
      description: 'We craft a bespoke itinerary, blending historic walks with luxury dining and premium stays.',
    },
    {
      step: 3,
      title: 'Refinement',
      description: 'Review the day-by-day flow and finalize hotel tiers and exclusive experiences.',
    },
    {
      step: 4,
      title: 'Execution',
      description: 'Arrive in Delhi to a seamless, chauffeured experience with 24/7 concierge support.',
    },
  ] as ProcessStep[],
  testimonials: [
    {
      name: 'James & Sarah',
      city: 'London',
      tripType: 'Golden Triangle Signature',
      quote: 'The way Outbound Travelers presented Delhi was like walking through a living museum. The dawn tour of Humayun\'s tomb was breathtaking, and our concierge was impeccable.',
      rating: 5,
      date: 'Jan 2026',
      photo: '/images/delhi/test1.jpg',
    },
    {
      name: 'Arjun',
      city: 'Mumbai',
      tripType: 'Delhi Heritage Weekend',
      quote: 'I thought I knew Delhi, but the curated food walk and the stories shared by our guide gave me a completely new appreciation for the city\'s layered history. Pure luxury.',
      rating: 5,
      date: 'Mar 2026',
      photo: '/images/delhi/test2.jpg',
    },
  ] as Testimonial[],
  faqs: [
    {
      q: 'What is the best time to visit Delhi?',
      a: 'The optimal time for a premium experience is from October to March. The weather is cool and pleasant, perfect for architectural walks, open-air dining, and exploring the monuments without the intense summer heat.',
    },
    {
      q: 'How do you handle the chaos of Old Delhi?',
      a: 'We transform it into a curated experience. You are accompanied by expert local guides and navigate the narrow lanes in reserved, comfortable transport, focusing on the history and safe, vetted culinary experiences.',
    },
    {
      q: 'Are your Golden Triangle tours fully private?',
      a: 'Yes, completely private. You will have a dedicated luxury sedan, a personal chauffeur for the entire route (Delhi-Agra-Jaipur), and expert local guides at each destination.',
    },
  ] as FAQ[],
  relatedDestinations: [
    {
      name: 'Rajasthan Royal Escapes',
      image: '/images/rajasthan/hero.jpg',
      href: '/rajasthan',
    },
    {
      name: 'Kashmir Valley',
      image: '/images/kashmir/hero.jpg',
      href: '/kashmir',
    },
  ] as RelatedDestination[],
}
