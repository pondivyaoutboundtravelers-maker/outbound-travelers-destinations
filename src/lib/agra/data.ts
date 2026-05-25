import type {
  TrustBadge, Package, ItineraryDay, HotelTier,
  FAQ, Testimonial, RelatedDestination,
  Experience, WhatsAppConfig, ProcessStep, DestinationTheme, LeadFormConfig
} from '@/lib/shared/types'

export const agraData = {
  meta: {
    title: 'Premium Agra Tour Packages — Emerald Mughal Luxury | Outbound Travelers',
    description: 'Immerse yourself in a cinematic luxury journey to the Taj Mahal. Experience private dawn photography tours, Mehtab Bagh sunset dinners, and opulent royal hospitality.',
    canonical: 'https://www.outboundtravelers.com/agra',
    ogImage: '/images/agra/hero.jpg',
    h1: 'Agra — A Luxury Taj Mahal Experience',
  },
  theme: {
    accentColor: '#0B3D2E', // Deep Emerald Green
    accentSoft: '#FAFAF7',  // Soft Marble White
    motif: 'marble-inlay',
  } as DestinationTheme,
  whatsapp: {
    number: '919876543210',
    heroMessage: 'Hi Outbound Travelers! I want to plan a premium luxury journey to Agra and the Taj Mahal.',
    stickyMessage: 'Hi Outbound Travelers! Im interested in the Emerald Mughal Agra packages.',
    floaterMessage: 'Hi Outbound Travelers! Can we discuss a custom honeymoon photography tour in Agra?',
    finalCtaMessage: 'Hi Outbound Travelers! Ready to book my luxury Taj Mahal experience.',
    postFormMessage: 'Hi Outbound Travelers! I just submitted an inquiry for Agra. Can we chat?',
  } as WhatsAppConfig,
  leadForm: {
    title: 'Curate Your Taj Mahal Escape',
    subtitle: 'Share your vision. Our heritage specialists will design an impeccable, luxury Mughal itinerary.',
    submitButtonText: 'Design My Agra Experience',
    successMessage: 'Thank you. A luxury specialist will reach out shortly.',
    destinationId: 'agra',
    destinationName: 'Agra',
  } as LeadFormConfig,
  hero: {
    headline: 'Timeless Marble.',
    subheadline: 'Enter a luxury photography documentary of the world\'s greatest monument to love. Experience the Taj Mahal away from the crowds, wrapped in the serenity of emerald gardens and dawn light.',
    primaryCta: 'Curate My Editorial Journey',
    secondaryCta: 'Speak to a Heritage Specialist',
    desktopImage: '/images/agra/hero.jpg', 
  },
  trustBadges: [
    { icon: 'camera', label: 'Private Honeymoon Shoots' },
    { icon: 'sun', label: 'Exclusive Dawn Access' },
    { icon: 'building', label: 'Oberoi Amarvilas & Taj Stays' },
    { icon: 'shield', label: '24/7 Dedicated Concierge' },
  ] as TrustBadge[],
  experiences: [
    {
      id: 'agra-fort',
      title: 'Agra Fort\'s Royal Pavilions',
      description: 'Wander through the Diwan-i-Khas and the intricate pearl mosque, tracing the footsteps of emperors while taking in distant, hazy views of the Taj.',
      image: '/images/agra/agra-fort.jpg',
      alt: 'Agra Fort courtyards',
      seasonal: false,
    },
    {
      id: 'fatehpur-sikri',
      title: 'The Ghost City of Fatehpur Sikri',
      description: 'Explore the perfectly preserved, abandoned red sandstone capital of Akbar, discovering the blend of Islamic, Hindu, and Jain architectural motifs.',
      image: '/images/agra/fatehpur.jpg',
      alt: 'Fatehpur Sikri architecture',
      seasonal: false,
    },
    {
      id: 'marble-inlay',
      title: 'Pietra Dura Masterclasses',
      description: 'Visit the secretive workshops of master artisans whose ancestors built the Taj Mahal, and witness the meticulous crafting of marble inlay.',
      image: '/images/agra/marble.jpg',
      alt: 'Marble inlay artisans',
      seasonal: false,
    },
  ] as Experience[],
  packages: [
    {
      id: 'agra-taj-honeymoon',
      name: 'Taj Romance & Photography',
      duration: '3 Days / 2 Nights',
      idealFor: 'Couples & Honeymooners',
      highlights: [
        'Luxury stay with direct Taj Mahal views',
        'Private professional couples photoshoot',
        'Dawn entry to the Taj Mahal',
        'Mehtab Bagh sunset riverside picnic',
      ],
      price: '₹45,500',
      image: '/images/agra/honeymoon.jpg',
      alt: 'Taj Mahal Honeymoon',
      whatsappMessage: 'Hi! I want details on the Taj Romance & Photography package.',
      seasonal: false,
    },
    {
      id: 'agra-mughal-luxury',
      name: 'The Emerald Mughal Retreat',
      duration: '4 Days / 3 Nights',
      idealFor: 'Luxury & History Connoisseurs',
      highlights: [
        'Premium suite at Oberoi Amarvilas or ITC Mughal',
        'Curated Agra Fort & Fatehpur Sikri tours',
        'Exclusive marble inlay private workshop',
        'Luxury chauffeured transit from Delhi',
      ],
      price: '₹75,000',
      image: '/images/agra/luxury.jpg',
      alt: 'Agra Luxury Retreat',
      whatsappMessage: 'Hi! I want details on the Emerald Mughal Retreat package.',
      seasonal: false,
    },
    {
      id: 'agra-weekend-escape',
      name: 'Taj Weekend Escape',
      duration: '2 Days / 1 Night',
      idealFor: 'Quick Premium Breaks',
      highlights: [
        'Vetted 5-star boutique stay',
        'Express fast-track Taj Mahal guided tour',
        'Authentic Mughlai fine dining experience',
        'Luxury airport transfers',
      ],
      price: '₹18,500',
      image: '/images/agra/weekend.jpg',
      alt: 'Agra Weekend trip',
      whatsappMessage: 'Hi! I want details on the Taj Weekend Escape package.',
      seasonal: false,
    },
  ] as Package[],
  itinerary: [
    {
      day: 1,
      title: 'Arrival – The First Glimpse',
      description: 'Arrive in Agra via a luxury chauffeured transfer. After checking into your premium suite, relax before a private sunset visit to Mehtab Bagh, where you will catch your first unforgettable glimpse of the Taj Mahal reflecting in the Yamuna River.',
      highlights: ['Luxury Transfer', 'Mehtab Bagh Sunset', 'Mughlai Welcome Dinner'],
      stay: 'Premium Taj-view Luxury Hotel',
    },
    {
      day: 2,
      title: 'Dawn Elegance & Imperial Power',
      description: 'Rise before the sun for an exclusive, guided dawn tour of the Taj Mahal, capturing the monument as it shifts from soft pink to dazzling white. In the afternoon, explore the massive red sandstone walls and delicate marble pavilions of the Agra Fort.',
      highlights: ['Dawn Taj Mahal Access', 'Professional Photoshoot', 'Agra Fort Exploration'],
      stay: 'Premium Taj-view Luxury Hotel',
    },
    {
      day: 3,
      title: 'The Ghost City & Marble Legacies',
      description: 'Embark on a scenic drive to the abandoned imperial city of Fatehpur Sikri. Return to Agra for a private audience with master craftsmen to learn the secrets of Pietra Dura (marble inlay) before your onward journey.',
      highlights: ['Fatehpur Sikri Excursion', 'Pietra Dura Workshop', 'Luxury Departure Transfer'],
      stay: 'Departure or Onward Journey',
    },
  ] as ItineraryDay[],
  process: [
    {
      step: 1,
      title: 'Consultation',
      description: 'Connect with our luxury specialists to outline your ideal Taj Mahal experience and photography preferences.',
    },
    {
      step: 2,
      title: 'Curation',
      description: 'We construct a seamless itinerary featuring premium stays, private dawn access, and curated culinary events.',
    },
    {
      step: 3,
      title: 'Refinement',
      description: 'Finalize your luxury transport options and select exclusive add-ons like sunset river picnics.',
    },
    {
      step: 4,
      title: 'Execution',
      description: 'Arrive in Agra for an impeccably managed, chauffeured experience with our 24/7 concierge.',
    },
  ] as ProcessStep[],
  testimonials: [
    {
      name: 'Elena & Marcus',
      city: 'New York',
      tripType: 'Taj Romance & Photography',
      quote: 'Seeing the Taj Mahal at dawn was life-changing. Outbound Travelers orchestrated everything perfectly—from the fast-track entry to the incredible photoshoot that gave us memories for a lifetime.',
      rating: 5,
      date: 'Feb 2026',
      photo: '/images/agra/test1.jpg',
    },
    {
      name: 'Rohan',
      city: 'Bangalore',
      tripType: 'The Emerald Mughal Retreat',
      quote: 'The level of luxury was astounding. Staying at Amarvilas and having a private guide who knew every architectural detail of the Agra Fort made this the ultimate heritage weekend.',
      rating: 5,
      date: 'Mar 2026',
      photo: '/images/agra/test2.jpg',
    },
  ] as Testimonial[],
  faqs: [
    {
      q: 'What is the best time to see the Taj Mahal?',
      a: 'Dawn is undeniably the most magical time. The temperature is cool, the crowds are minimal, and the marble changes color as the sun rises. We organize exclusive early access to ensure you capture this perfect moment.',
    },
    {
      q: 'Do you provide professional photographers?',
      a: 'Yes, our Honeymoon and Romance packages include vetted, professional photographers who know the best angles, lighting, and less-crowded spots within the Taj Mahal complex.',
    },
    {
      q: 'Can we book a room with a view of the Taj Mahal?',
      a: 'Absolutely. We partner with premium properties like The Oberoi Amarvilas and Taj Hotel & Convention Centre, guaranteeing spectacular, uninterrupted views of the monument right from your suite.',
    },
  ] as FAQ[],
  relatedDestinations: [
    {
      name: 'Delhi Heritage',
      image: '/images/delhi/hero.jpg',
      href: '/delhi',
    },
    {
      name: 'Rajasthan Royal Escapes',
      image: '/images/rajasthan/hero.jpg',
      href: '/rajasthan',
    },
  ] as RelatedDestination[],
}
