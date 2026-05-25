import type {
  TrustBadge, Package, ItineraryDay, HotelTier,
  FAQ, Testimonial, RelatedDestination,
  Experience, WhatsAppConfig, ProcessStep, DestinationTheme, LeadFormConfig
} from '@/lib/shared/types'

/* ────────── Shopping & Craft types (unique to Jaipur) ────────── */
export interface CraftItem {
  id: string
  name: string
  artisanDetail: string
  description: string
  priceRange: string
  image: string
  alt: string
  heritage: string
}

/* ────────── Main Data Tree ────────── */
export const jaipurData = {
  meta: {
    title: 'Premium Jaipur Tour Packages — Royal Emerald Heritage | Outbound Travelers',
    description: 'Discover the Pink City through a cinematic luxury lens. Private palace tours, heritage haveli stays, royal photoshoots, and artisan experiences curated for discerning travelers.',
    canonical: 'https://www.outboundtravelers.com/jaipur',
    ogImage: '/images/jaipur/hero.jpg',
    h1: 'Jaipur — A Royal Emerald Heritage Experience',
  },

  theme: {
    accentColor: '#0B3D2E',
    accentSoft: '#FAF8F2',
    motif: 'palace-jali',
  } as DestinationTheme,

  whatsapp: {
    number: '919876543210',
    heroMessage: 'Hi Outbound Travelers! I want to plan a premium royal heritage journey to Jaipur.',
    stickyMessage: 'Hi Outbound Travelers! I\'m interested in the Royal Emerald Jaipur packages.',
    floaterMessage: 'Hi Outbound Travelers! Can we discuss a custom luxury tour in Jaipur?',
    finalCtaMessage: 'Hi Outbound Travelers! Ready to book my royal Jaipur experience.',
    postFormMessage: 'Hi Outbound Travelers! I just submitted an inquiry for Jaipur. Can we chat?',
  } as WhatsAppConfig,

  leadForm: {
    title: 'Curate Your Royal Jaipur Escape',
    subtitle: 'Share your vision. Our heritage specialists will design a bespoke palace-inspired itinerary.',
    submitButtonText: 'Design My Jaipur Experience',
    successMessage: 'Thank you. A royal heritage specialist will reach out shortly.',
    destinationId: 'jaipur',
    destinationName: 'Jaipur',
  } as LeadFormConfig,

  hero: {
    headline: 'Royal Pink City.',
    subheadline: 'Step into a cinematic luxury portrait of India\'s most regal city. Experience Jaipur through private palace tours, golden-hour Hawa Mahal photography, and the living craft heritage of Rajputana royalty.',
    primaryCta: 'Design My Royal Itinerary',
    secondaryCta: 'Speak to a Heritage Specialist',
    desktopImage: '/images/jaipur/hero.jpg',
  },

  trustBadges: [
    { icon: 'castle', label: 'Private Palace Tours' },
    { icon: 'crown', label: 'Royal Heritage Concierge' },
    { icon: 'camera', label: 'Luxury Photoshoot Included' },
    { icon: 'gem', label: 'Artisan Craft Experiences' },
  ] as TrustBadge[],

  storySection: {
    headline: 'Where Empires Left Their Mark in Pink Sandstone',
    body: 'Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur was India\'s first planned city — a grid of rose-colored streets designed with Vastu Shastra precision. Today, the Pink City stands as a living museum where Rajput fortresses pierce the Aravalli skyline, Mughal gardens bloom in hidden courtyards, and master artisans continue craft traditions unchanged for three centuries.',
    pullQuote: '"Every stone in Jaipur whispers a story of kings, astronomers, and artists who dreamed in pink sandstone."',
    stats: [
      { value: 'UNESCO', label: 'World Heritage City' },
      { value: '5+', label: 'Royal Fort-Palaces' },
      { value: '300yr', label: 'Living Craft Heritage' },
      { value: '1727', label: 'Year Founded' },
    ],
  },

  haveliSection: {
    headline: 'Live Like Rajputana Royalty',
    subheadline: 'Our curated haveli stays transport you into centuries-old courtyard mansions — reimagined with contemporary luxury, private rooftop dining, and intimate heritage storytelling.',
    features: [
      { title: 'Restored Heritage Suites', detail: '200-year-old haveli rooms with modern luxury amenities' },
      { title: 'Private Courtyard Dining', detail: 'Candlelit Rajasthani thalis under the stars' },
      { title: 'Rooftop Sunset Views', detail: 'Panoramic views of Nahargarh Fort and the Pink City skyline' },
    ],
    stats: '200-year-old haveli • 12 curated suites • Private rooftop dining',
    reviewSnippet: {
      name: 'Priya & Arjun',
      quote: 'The haveli stay was the highlight of our honeymoon — waking up to peacocks in the courtyard was magical.',
      rating: 5,
    },
  },

  experiences: [
    {
      id: 'hawa-mahal',
      title: 'Hawa Mahal at Golden Hour',
      description: 'Experience the Palace of Winds bathed in golden sunset light. Our private guides take you to secret vantage points for the most breathtaking photographs of Jaipur\'s iconic 953-window facade.',
      image: '/images/jaipur/hawa-mahal.jpg',
      alt: 'Hawa Mahal golden hour',
      seasonal: false,
    },
    {
      id: 'amber-fort',
      title: 'Amber Fort: The Fortress in the Sky',
      description: 'Ascend the ancient ramparts of Amer Fort at dawn, exploring the Sheesh Mahal (Mirror Palace), the Diwan-i-Aam, and the hidden underground tunnels connecting to Jaigarh Fort.',
      image: '/images/jaipur/amber-fort.jpg',
      alt: 'Amber Fort at dawn',
      seasonal: false,
    },
    {
      id: 'nahargarh-sunset',
      title: 'Nahargarh Fort Sunset Dinner',
      description: 'Watch the entire Pink City transform to amber and gold from the ramparts of Nahargarh. Our exclusive sunset dinner on the fort terrace is an unforgettable Rajasthani culinary experience.',
      image: '/images/jaipur/nahargarh.jpg',
      alt: 'Nahargarh Fort sunset panorama',
      seasonal: false,
    },
    {
      id: 'city-palace',
      title: 'City Palace Royal Quarters',
      description: 'Enter the private royal quarters of the Jaipur Maharaja with our exclusive access. Explore the Mubarak Mahal textile gallery and the stunning Pritam Niwas Chowk with its four ornate peacock gates.',
      image: '/images/jaipur/city-palace.jpg',
      alt: 'City Palace peacock gate',
      seasonal: false,
    },
    {
      id: 'jantar-mantar',
      title: 'Jantar Mantar: Astronomical Wonders',
      description: 'Explore the world\'s largest stone sundial and Jai Singh II\'s 18th-century astronomical instruments with an expert astrophysics guide. A UNESCO World Heritage site that bridges ancient wisdom and scientific precision.',
      image: '/images/jaipur/jantar-mantar.jpg',
      alt: 'Jantar Mantar instruments',
      seasonal: false,
    },
  ] as Experience[],

  crafts: [
    {
      id: 'block-printing',
      name: 'Sanganer Block Printing',
      artisanDetail: '7th-generation Chhipa artisan family',
      description: 'Watch master printers create intricate floral patterns using hand-carved wooden blocks and natural dyes in the traditional Sanganer technique.',
      priceRange: '₹500 – ₹15,000 per piece',
      image: '/images/jaipur/block-print.jpg',
      alt: 'Traditional block printing',
      heritage: '400+ years of tradition',
    },
    {
      id: 'kundan-jewellery',
      name: 'Kundan & Meenakari Jewellery',
      artisanDetail: 'Master goldsmith from Johari Bazaar',
      description: 'Witness the painstaking art of setting uncut gems in pure gold using the traditional Kundan technique, complemented by vivid Meenakari enamel work on the reverse.',
      priceRange: '₹5,000 – ₹5,00,000',
      image: '/images/jaipur/jewellery.jpg',
      alt: 'Kundan jewellery crafting',
      heritage: 'Royal patronage since 16th century',
    },
    {
      id: 'blue-pottery',
      name: 'Jaipur Blue Pottery',
      artisanDetail: 'UNESCO-recognized craft tradition',
      description: 'The distinctive turquoise-and-white pottery of Jaipur uses a unique quartz-based technique brought from Persia. No clay is used — only ground quartz, raw glaze, and multani mitti.',
      priceRange: '₹300 – ₹8,000',
      image: '/images/jaipur/blue-pottery.jpg',
      alt: 'Blue pottery artisan',
      heritage: 'Persian-Rajasthani fusion art',
    },
    {
      id: 'textiles',
      name: 'Bandhani & Leheriya Textiles',
      artisanDetail: 'Traditional tie-dye families of Jaipur',
      description: 'Experience the mesmerizing tie-dye art forms of Rajasthan — from the dot-patterned Bandhani to the wave-like Leheriya, each piece taking days of meticulous hand-tying.',
      priceRange: '₹800 – ₹25,000',
      image: '/images/jaipur/textiles.jpg',
      alt: 'Bandhani textile patterns',
      heritage: '5,000-year-old Indus Valley tradition',
    },
    {
      id: 'lac-bangles',
      name: 'Lac Bangles of Maniharon ka Rasta',
      artisanDetail: 'Bangle-making street artisans',
      description: 'Walk through the famous bangle-making street and watch artisans mold molten lac embedded with mirrors, stones, and gold leaf into vibrant, stackable bangles.',
      priceRange: '₹100 – ₹2,000 per set',
      image: '/images/jaipur/lac-bangles.jpg',
      alt: 'Colorful lac bangles',
      heritage: 'Centuries-old Maniharon tradition',
    },
    {
      id: 'miniature-paintings',
      name: 'Rajasthani Miniature Paintings',
      artisanDetail: 'Court painter lineage from Amber',
      description: 'Observe painters using single-hair brushes and natural pigments to create exquisite miniature scenes depicting royal hunts, love stories, and mythological epics.',
      priceRange: '₹2,000 – ₹50,000',
      image: '/images/jaipur/miniature.jpg',
      alt: 'Miniature painting artisan',
      heritage: '17th-century Amber School tradition',
    },
  ] as CraftItem[],

  packages: [
    {
      id: 'jaipur-royal-honeymoon',
      name: 'Royal Honeymoon Retreat',
      duration: '4 Days / 3 Nights',
      idealFor: 'Couples & Honeymooners',
      highlights: [
        'Heritage palace suite with private courtyard',
        'Professional couples photoshoot at Hawa Mahal',
        'Private sunset dinner at Nahargarh Fort',
        'Exclusive Kundan jewellery shopping experience',
        'Royal elephant sanctuary morning visit',
      ],
      price: '₹65,000',
      image: '/images/jaipur/honeymoon.jpg',
      alt: 'Royal Jaipur Honeymoon',
      whatsappMessage: 'Hi! I want details on the Royal Honeymoon Retreat in Jaipur.',
      seasonal: false,
    },
    {
      id: 'jaipur-heritage-luxury',
      name: 'The Emerald Heritage Circuit',
      duration: '5 Days / 4 Nights',
      idealFor: 'Luxury & History Connoisseurs',
      highlights: [
        'Stay at Rambagh Palace or Taj Jai Mahal',
        'Exclusive City Palace royal quarters access',
        'Curated Amber Fort & Nahargarh guided trek',
        'Private artisan workshop tour in old city',
        'Luxury chauffeured Aravalli excursion',
      ],
      price: '₹1,10,000',
      image: '/images/jaipur/luxury.jpg',
      alt: 'Jaipur Heritage Luxury',
      whatsappMessage: 'Hi! I want details on the Emerald Heritage Circuit in Jaipur.',
      seasonal: false,
    },
    {
      id: 'jaipur-weekend-escape',
      name: 'Pink City Weekend Escape',
      duration: '3 Days / 2 Nights',
      idealFor: 'Quick Premium Breaks',
      highlights: [
        'Vetted boutique haveli stay',
        'Fast-track Amber Fort & Hawa Mahal tour',
        'Old city bazaar walking experience',
        'Authentic Rajasthani thali dining',
      ],
      price: '₹28,000',
      image: '/images/jaipur/weekend.jpg',
      alt: 'Jaipur Weekend Getaway',
      whatsappMessage: 'Hi! I want details on the Pink City Weekend Escape.',
      seasonal: false,
    },
    {
      id: 'jaipur-golden-triangle',
      name: 'Golden Triangle Royal Edition',
      duration: '7 Days / 6 Nights',
      idealFor: 'Comprehensive India Experience',
      highlights: [
        'Delhi – Agra – Jaipur luxury circuit',
        'Taj Mahal dawn access + Jaipur palace tours',
        'Premium palace stays in all three cities',
        'Private chauffeured luxury transit throughout',
        'Dedicated heritage guide for full journey',
      ],
      price: '₹1,85,000',
      image: '/images/jaipur/golden-triangle.jpg',
      alt: 'Golden Triangle Tour',
      whatsappMessage: 'Hi! I want details on the Golden Triangle Royal Edition.',
      seasonal: false,
    },
  ] as Package[],

  itinerary: [
    {
      day: 1,
      title: 'Royal Arrival — The Pink City Welcomes',
      description: 'Arrive in Jaipur via luxury chauffeured transfer or flight. Check into your heritage palace or curated haveli. In the evening, embark on a guided walk through the lantern-lit streets of the old Pink City, ending with a rooftop dinner overlooking the illuminated Hawa Mahal.',
      highlights: ['Palace Check-in', 'Old City Evening Walk', 'Rooftop Welcome Dinner'],
      stay: 'Heritage Palace Suite or Luxury Haveli',
    },
    {
      day: 2,
      title: 'Fortresses in the Sky',
      description: 'Rise early for a private dawn visit to Amber Fort, entering before the crowds through the ancient Suraj Pol gate. Explore the Sheesh Mahal, Diwan-i-Aam, and the secret tunnel to Jaigarh Fort. Afternoon at the City Palace royal quarters with exclusive access to the textile gallery.',
      highlights: ['Dawn Amber Fort Tour', 'Sheesh Mahal Experience', 'City Palace Royal Quarters'],
      stay: 'Heritage Palace Suite or Luxury Haveli',
    },
    {
      day: 3,
      title: 'Artisan Soul & Golden Sunsets',
      description: 'Morning immersion in Jaipur\'s living craft heritage — visit block printing workshops in Sanganer, the Blue Pottery studio, and Johari Bazaar\'s master jewellers. In the evening, ascend Nahargarh Fort for a private sunset dinner on the ramparts with panoramic views of the Pink City below.',
      highlights: ['Artisan Workshop Trail', 'Johari Bazaar Jewellers', 'Nahargarh Sunset Dinner'],
      stay: 'Heritage Palace Suite or Luxury Haveli',
    },
    {
      day: 4,
      title: 'The Astronomer King\'s Legacy',
      description: 'Explore Jantar Mantar — the world\'s largest stone sundial — with an expert guide. Visit the Albert Hall Museum and the hidden step-wells of Jaipur. Professional couples or solo photoshoot at Hawa Mahal during golden hour, then luxury departure transfer.',
      highlights: ['Jantar Mantar Guided Tour', 'Hawa Mahal Photoshoot', 'Luxury Departure'],
      stay: 'Departure or Onward Journey',
    },
  ] as ItineraryDay[],

  hotelTiers: [
    {
      tier: 'Premium Boutique',
      description: 'Curated heritage havelis with restored Rajasthani architecture, courtyard gardens, and personalized service.',
      price: '₹6,000 – ₹12,000 / night',
    },
    {
      tier: 'Luxury Palace',
      description: 'Iconic palace hotels — Samode Palace, ITC Rajputana — with royal suites, spa, and heritage dining.',
      price: '₹15,000 – ₹35,000 / night',
    },
    {
      tier: 'Ultra-Luxury Royal',
      description: 'The legendary Rambagh Palace (Taj) or Jai Mahal Palace — stay where Maharajas once lived.',
      price: '₹45,000 – ₹1,20,000 / night',
    },
  ] as HotelTier[],

  process: [
    {
      step: 1,
      title: 'Heritage Consultation',
      description: 'Connect with our Jaipur specialists to outline your ideal royal heritage experience, from palace stays to artisan encounters.',
    },
    {
      step: 2,
      title: 'Royal Curation',
      description: 'We design a bespoke itinerary blending fort explorations, private craft workshops, and curated culinary moments.',
    },
    {
      step: 3,
      title: 'Palace Refinement',
      description: 'Finalize your hotel tier, add exclusive experiences like sunset fort dinners, and select your photoshoot preferences.',
    },
    {
      step: 4,
      title: 'Royal Execution',
      description: 'Arrive in the Pink City for an impeccably orchestrated experience with 24/7 heritage concierge support.',
    },
  ] as ProcessStep[],

  testimonials: [
    {
      name: 'Meera & Vikram',
      city: 'Mumbai',
      tripType: 'Royal Honeymoon Retreat',
      quote: 'Our honeymoon in Jaipur was nothing short of magical. Waking up in a 200-year-old haveli, the private Amber Fort tour at dawn, and the sunset dinner at Nahargarh — Outbound Travelers made every moment feel like royalty.',
      rating: 5,
      date: 'Jan 2026',
      photo: '/images/jaipur/test1.jpg',
    },
    {
      name: 'Sarah & Tom',
      city: 'London',
      tripType: 'Emerald Heritage Circuit',
      quote: 'The level of access was extraordinary. Walking through the City Palace royal quarters that are normally closed to the public, and having a master jeweller show us centuries-old Kundan techniques — this was India at its most luxurious.',
      rating: 5,
      date: 'Mar 2026',
      photo: '/images/jaipur/test2.jpg',
    },
    {
      name: 'Ananya',
      city: 'Bangalore',
      tripType: 'Pink City Weekend Escape',
      quote: 'Even a weekend was enough to fall completely in love with Jaipur. The block printing workshop, the Hawa Mahal at golden hour, and that incredible thali dinner — every detail was thoughtfully curated.',
      rating: 5,
      date: 'Apr 2026',
      photo: '/images/jaipur/test3.jpg',
    },
  ] as Testimonial[],

  faqs: [
    {
      q: 'What is the best time to visit Jaipur?',
      a: 'October to March is ideal — the weather is cool and pleasant, perfect for exploring forts and palaces. November to February is peak season with daytime temperatures around 20-25°C. We organize early morning fort visits to avoid midday heat even in warmer months.',
    },
    {
      q: 'Can you arrange private access to palace areas?',
      a: 'Yes, our heritage partnerships allow exclusive access to normally restricted areas of the City Palace, private dawn entry to Amber Fort, and after-hours Nahargarh Fort experiences. These are not available to regular tourists.',
    },
    {
      q: 'Do you offer professional photography services?',
      a: 'Absolutely. Our honeymoon and luxury packages include vetted professional photographers who specialize in heritage architecture photography. They know every hidden angle of Hawa Mahal, every perfect light at Amber Fort.',
    },
    {
      q: 'What are the best palace hotels in Jaipur?',
      a: 'We partner with the finest: Rambagh Palace (Taj), Jai Mahal Palace, Samode Palace, and ITC Rajputana. For boutique experiences, we recommend curated heritage havelis in the old city. All stays are personally vetted by our team.',
    },
    {
      q: 'How far is Jaipur from Delhi and Agra?',
      a: 'Jaipur is approximately 270 km from Delhi (5 hours by luxury car) and 240 km from Agra (4 hours). We offer premium chauffeured transfers in luxury sedans or SUVs, with curated stops at Abhaneri step-well and Fatehpur Sikri en route.',
    },
  ] as FAQ[],

  relatedDestinations: [
    {
      name: 'Agra — Taj Mahal Experience',
      image: '/images/agra/hero.jpg',
      href: '/agra',
    },
    {
      name: 'Rajasthan Royal Escapes',
      image: '/images/rajasthan/hero.jpg',
      href: '/rajasthan',
    },
    {
      name: 'Delhi Heritage Collection',
      image: '/images/delhi/hero.jpg',
      href: '/delhi',
    },
  ] as RelatedDestination[],
}
