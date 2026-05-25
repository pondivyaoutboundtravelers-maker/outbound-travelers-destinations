import type {
  TrustBadge, Package, ItineraryDay, HotelTier,
  FAQ, Testimonial, RelatedDestination,
  Experience, WhatsAppConfig, ProcessStep, DestinationTheme, LeadFormConfig
} from '@/lib/shared/types'

export interface NepalLayer {
  id: string; title: string; subtitle: string; description: string; image: string; stat: string; statLabel: string
}
export interface TrekRoute {
  id: string; name: string; altitude: string; difficulty: string; duration: string; description: string; image: string
}
export interface PokharaActivity {
  id: string; title: string; description: string; icon: string
}
export interface HeritageSite {
  id: string; name: string; description: string; image: string; badge: string
}
export interface NepalResort {
  id: string; name: string; category: string; description: string; image: string; priceRange: string; highlights: string[]
}
export interface RouteStop {
  id: string; name: string; description: string; image: string; altitude: string; travelTime: string
}

export const nepalData = {
  meta: {
    title: 'Premium Nepal Tour Packages — Himalayan Emerald Serenity | Outbound Travelers',
    description: 'Experience Nepal through cinematic luxury. Everest base camp treks, Pokhara retreats, Kathmandu heritage, and Chitwan safaris curated for discerning travelers.',
    canonical: 'https://www.outboundtravelers.com/nepal',
    ogImage: '/images/nepal/hero.jpg',
    h1: 'Nepal — A Himalayan Emerald Serenity Experience',
  },
  theme: { accentColor: '#0B3D2E', accentSoft: '#FAF7F2', motif: 'himalayan-pattern' } as DestinationTheme,
  whatsapp: {
    number: '919876543210',
    heroMessage: 'Hi Outbound Travelers! I want to plan a luxury Nepal Himalayan experience.',
    stickyMessage: 'Hi Outbound Travelers! I\'m interested in Nepal tour packages.',
    floaterMessage: 'Hi Outbound Travelers! Can we discuss a custom Nepal trip?',
    finalCtaMessage: 'Hi Outbound Travelers! Ready to book my Nepal journey.',
    postFormMessage: 'Hi Outbound Travelers! I just submitted a Nepal inquiry.',
  } as WhatsAppConfig,
  leadForm: {
    title: 'Design Your Himalayan Escape',
    subtitle: 'Share your vision. Our Nepal specialists will craft a bespoke Himalayan journey.',
    submitButtonText: 'Design My Nepal Journey',
    successMessage: 'Thank you. A Nepal specialist will reach out shortly.',
    destinationId: 'nepal', destinationName: 'Nepal',
  } as LeadFormConfig,

  hero: {
    headline: 'Where Earth Touches Sky.',
    subheadline: 'Journey into the heart of the Himalayas — where ancient monasteries cling to cloud-wrapped peaks, prayer flags paint the wind, and every sunrise reveals the roof of the world in cinematic gold.',
    primaryCta: 'Design My Himalayan Journey',
    secondaryCta: 'Speak to a Nepal Specialist',
    desktopImage: '/images/nepal/hero.jpg',
  },
  trustBadges: [
    { icon: 'mountain', label: 'Himalayan Treks' },
    { icon: 'temple', label: 'Sacred Heritage' },
    { icon: 'hotel', label: 'Luxury Retreats' },
    { icon: 'compass', label: 'Expert Guides' },
  ] as TrustBadge[],

  layers: [
    { id: 'adventure', title: 'Himalayan Adventures', subtitle: 'Roof of the World', description: 'Trek to Everest Base Camp, paraglide over Pokhara\'s valleys, raft the Trisuli River, and witness mountain flights grazing 8,000m giants — Nepal is the ultimate adventure playground.', image: '/images/nepal/adventure.jpg', stat: '8,849m', statLabel: 'Mt. Everest' },
    { id: 'spiritual', title: 'Spiritual Nepal', subtitle: 'Land of Buddha', description: 'Chanting monks at Boudhanath, the eternal flames of Pashupatinath, prayer wheels spinning in mountain monasteries — Nepal\'s spiritual energy is palpable and transformative.', image: '/images/nepal/spiritual.jpg', stat: '3,000+', statLabel: 'Ancient Temples' },
    { id: 'retreats', title: 'Luxury Retreats', subtitle: 'Himalayan Wellness', description: 'Mountain-view infinity pools, Ayurvedic spa treatments, yoga at sunrise with snow-capped peaks — Nepal\'s luxury retreats rival any in the world.', image: '/images/nepal/retreat.jpg', stat: '50+', statLabel: 'Luxury Lodges' },
    { id: 'villages', title: 'Mountain Villages', subtitle: 'Living Heritage', description: 'Stone-terraced villages, Gurung homestays, Tharu cultural evenings — Nepal\'s mountain communities offer an authentic experience no resort can replicate.', image: '/images/nepal/village.jpg', stat: '125+', statLabel: 'Ethnic Groups' },
    { id: 'heritage', title: 'Cultural Heritage', subtitle: 'UNESCO Treasures', description: 'Seven UNESCO World Heritage Sites, medieval Durbar Squares, Newari architecture, and living goddess traditions — Nepal is a cultural treasure chest.', image: '/images/nepal/heritage.jpg', stat: '7', statLabel: 'UNESCO Sites' },
  ] as NepalLayer[],

  everestModule: {
    headline: 'Touch the Roof of the World',
    subheadline: 'From luxury mountain flights to full Everest Base Camp treks — experience the Himalayas at every altitude.',
    treks: [
      { id: 'ebc', name: 'Everest Base Camp Trek', altitude: '5,364m', difficulty: 'Challenging', duration: '12-14 Days', description: 'The legendary trek through Sherpa villages, ancient monasteries, and the Khumbu Icefall to the base of the world\'s tallest mountain.', image: '/images/nepal/ebc.jpg' },
      { id: 'annapurna', name: 'Annapurna Circuit', altitude: '5,416m', difficulty: 'Moderate-Hard', duration: '10-14 Days', description: 'Circle the Annapurna massif through diverse landscapes — subtropical forests to high-altitude deserts, crossing the iconic Thorong La Pass.', image: '/images/nepal/annapurna.jpg' },
      { id: 'flight', name: 'Mountain Flight', altitude: '7,500m', difficulty: 'Easy', duration: '1 Hour', description: 'A luxury 1-hour flight along the Himalayan range — Everest, Lhotse, Makalu, and Cho Oyu visible from your window seat.', image: '/images/nepal/flight.jpg' },
    ] as TrekRoute[],
  },

  pokhara: {
    headline: 'Serenity at the Lake',
    subheadline: 'Pokhara — where the Annapurna massif meets crystal lakes, creating the most serene landscape on Earth.',
    activities: [
      { id: 'paraglide', title: 'Paragliding Over Phewa', description: 'Tandem paraglide above Phewa Lake with the Annapurna range as your backdrop — Nepal\'s most iconic aerial experience.', icon: 'wind' },
      { id: 'boating', title: 'Phewa Lake Boating', description: 'Paddle across mirror-still waters reflecting the Machapuchare (Fishtail) peak in perfect symmetry.', icon: 'anchor' },
      { id: 'sunrise', title: 'Sarangkot Sunrise', description: 'Wake before dawn to witness the Annapurna range ignite in golden pink — the most photographed sunrise in Nepal.', icon: 'sunrise' },
    ] as PokharaActivity[],
    quote: '"At the edge of Phewa Lake, watching Machapuchare turn gold at sunrise, I understood why they call Nepal the roof of the world."',
  },

  heritage: [
    { id: 'pashupatinath', name: 'Pashupatinath Temple', description: 'Nepal\'s most sacred Hindu temple on the banks of the Bagmati — eternal cremation fires, sadhus, and 1,500 years of spiritual devotion.', image: '/images/nepal/pashupatinath.jpg', badge: 'Sacred' },
    { id: 'boudhanath', name: 'Boudhanath Stupa', description: 'One of the world\'s largest Buddhist stupas — circumambulate with monks as prayer wheels spin and incense rises into the Kathmandu sky.', image: '/images/nepal/boudhanath.jpg', badge: 'UNESCO' },
    { id: 'swayambhunath', name: 'Swayambhunath (Monkey Temple)', description: 'The ancient stupa atop a hill overlooking Kathmandu valley — 365 steps, watchful Buddha eyes, and panoramic city views.', image: '/images/nepal/swayambhunath.jpg', badge: 'Iconic' },
    { id: 'durbar', name: 'Kathmandu Durbar Square', description: 'Medieval royal palace complex with intricate Newari woodcarvings, living goddess Kumari, and 50+ temples in one square.', image: '/images/nepal/durbar.jpg', badge: 'Heritage' },
    { id: 'bhaktapur', name: 'Bhaktapur Durbar Square', description: 'The best-preserved medieval city in Nepal — pottery squares, 55-window palace, and Nyatapola temple\'s five-tiered pagoda.', image: '/images/nepal/bhaktapur.jpg', badge: 'Medieval' },
  ] as HeritageSite[],

  resorts: [
    { id: 'dwarika', name: 'Dwarika\'s Hotel Kathmandu', category: 'Heritage Luxury', description: 'A living museum of Newari art and architecture — hand-carved terracotta, heritage suites, and Pancha Kosha Himalayan Spa.', image: '/images/nepal/resort1.jpg', priceRange: '₹25,000 – ₹60,000 / night', highlights: ['Heritage architecture', 'Himalayan spa', 'Cultural immersion'] },
    { id: 'pavilions', name: 'Pavilions Himalayas', category: 'Eco-Luxury Retreat', description: 'Sustainable luxury farmhouse villas near Pokhara with Annapurna views, organic dining, and private infinity pools.', image: '/images/nepal/resort2.jpg', priceRange: '₹18,000 – ₹45,000 / night', highlights: ['Annapurna views', 'Organic farm-to-table', 'Infinity pool'] },
    { id: 'tiger', name: 'Tiger Tops Tharu Lodge', category: 'Wildlife Luxury', description: 'The original Nepal safari lodge in Chitwan — jungle walks, elephant encounters, and Tharu cultural evenings.', image: '/images/nepal/resort3.jpg', priceRange: '₹15,000 – ₹35,000 / night', highlights: ['Chitwan safari', 'Tharu culture', 'Jungle experiences'] },
    { id: 'yeti', name: 'Yeti Mountain Home', category: 'Trek Luxury', description: 'Luxury lodges along the Everest trail — heated rooms, hot showers, and gourmet meals at altitude.', image: '/images/nepal/resort4.jpg', priceRange: '₹12,000 – ₹30,000 / night', highlights: ['Everest trail', 'Heated rooms', 'Mountain dining'] },
  ] as NepalResort[],

  routeJourney: {
    headline: 'The Great Nepal Circuit',
    subheadline: 'Journey through the most diverse landscapes on Earth — from jungle to summit.',
    stops: [
      { id: 'kathmandu', name: 'Kathmandu Valley', description: 'The vibrant capital — temples, stupas, Durbar Squares, and the gateway to the Himalayas.', image: '/images/nepal/heritage.jpg', altitude: '1,400m', travelTime: 'Arrival' },
      { id: 'pokhara', name: 'Pokhara Lakeside', description: 'Lakeside paradise — paragliding, boating, and the most stunning mountain panorama on Earth.', image: '/images/nepal/pokhara.jpg', altitude: '822m', travelTime: '25 min flight' },
      { id: 'chitwan', name: 'Chitwan National Park', description: 'UNESCO-listed jungle — one-horned rhinos, Bengal tigers, and Tharu village experiences.', image: '/images/nepal/chitwan.jpg', altitude: '150m', travelTime: '5 hr drive' },
      { id: 'everest', name: 'Everest Region', description: 'The roof of the world — Sherpa villages, ancient monasteries, and the mighty Khumbu.', image: '/images/nepal/ebc.jpg', altitude: '2,860m+', travelTime: '35 min flight' },
      { id: 'lumbini', name: 'Lumbini — Birthplace of Buddha', description: 'Sacred pilgrimage site — the Maya Devi temple, Ashoka pillar, and monasteries from 25+ nations.', image: '/images/nepal/lumbini.jpg', altitude: '150m', travelTime: '6 hr drive' },
    ] as RouteStop[],
  },

  experiences: [
    { id: 'ebc-trek', title: 'Everest Base Camp', description: 'The legendary 14-day trek to the foot of the world\'s tallest mountain.', image: '/images/nepal/ebc.jpg', alt: 'Everest Base Camp', seasonal: false },
    { id: 'pokhara-para', title: 'Pokhara Paragliding', description: 'Soar above Phewa Lake with the Annapurna range as your backdrop.', image: '/images/nepal/pokhara.jpg', alt: 'Paragliding Pokhara', seasonal: false },
    { id: 'chitwan-safari', title: 'Chitwan Jungle Safari', description: 'Track one-horned rhinos and Bengal tigers in Nepal\'s premier national park.', image: '/images/nepal/chitwan.jpg', alt: 'Chitwan Safari', seasonal: false },
    { id: 'heritage-walk', title: 'Kathmandu Heritage Walk', description: 'Explore 1,500 years of temples, stupas, and living goddess traditions.', image: '/images/nepal/heritage.jpg', alt: 'Kathmandu heritage', seasonal: false },
  ] as Experience[],

  packages: [
    { id: 'nepal-luxury', name: 'Nepal Luxury Heritage', duration: '7 Days / 6 Nights', idealFor: 'Luxury Cultural Seekers', highlights: ['Dwarika\'s Hotel stay', 'Private Kathmandu heritage tour', 'Pokhara lakeside retreat', 'Mountain flight Everest view', 'Chitwan jungle safari'], price: '₹1,85,000', image: '/images/nepal/heritage.jpg', alt: 'Nepal Luxury', whatsappMessage: 'Hi! I want details on the Nepal Luxury Heritage package.', seasonal: false },
    { id: 'nepal-trek', name: 'Everest Explorer Premium', duration: '14 Days / 13 Nights', idealFor: 'Adventure & Trek Lovers', highlights: ['Luxury EBC trek lodges', 'Private Sherpa guide', 'Helicopter return option', 'Kathmandu heritage day', 'Mountain flight backup'], price: '₹2,45,000', image: '/images/nepal/ebc.jpg', alt: 'Nepal Trek', whatsappMessage: 'Hi! I want details on the Everest Explorer Premium.', seasonal: false },
    { id: 'nepal-honeymoon', name: 'Himalayan Honeymoon', duration: '6 Days / 5 Nights', idealFor: 'Couples & Honeymooners', highlights: ['Mountain-view luxury suite', 'Pokhara sunrise boating', 'Couples spa with Himalayan views', 'Candlelit dinner at 1,400m', 'Private cultural tours'], price: '₹1,55,000', image: '/images/nepal/retreat.jpg', alt: 'Nepal Honeymoon', whatsappMessage: 'Hi! I want details on the Himalayan Honeymoon.', seasonal: false },
    { id: 'nepal-complete', name: 'Complete Nepal Circuit', duration: '10 Days / 9 Nights', idealFor: 'Comprehensive Experience', highlights: ['Kathmandu + Pokhara + Chitwan', 'Mountain flight included', 'Jungle safari & cultural shows', 'Paragliding experience', 'All transfers & luxury stays'], price: '₹2,15,000', image: '/images/nepal/adventure.jpg', alt: 'Nepal Complete', whatsappMessage: 'Hi! I want details on the Complete Nepal Circuit.', seasonal: false },
  ] as Package[],

  itinerary: [
    { day: 1, title: 'Arrival — Gateway to the Himalayas', description: 'Arrive at Tribhuvan International Airport with dramatic mountain views on descent. Transfer to Dwarika\'s Hotel in Kathmandu. Evening exploration of Thamel district and welcome dinner with traditional Nepali cuisine.', highlights: ['Airport Transfer', 'Dwarika\'s Check-in', 'Thamel Evening Walk'], stay: 'Dwarika\'s Hotel Kathmandu' },
    { day: 2, title: 'Kathmandu Sacred Heritage', description: 'Morning visit to Boudhanath Stupa — circumambulate with monks as prayer wheels spin. Afternoon: Pashupatinath Temple and Swayambhunath (Monkey Temple) with panoramic valley views. Evening: Durbar Square cultural walk.', highlights: ['Boudhanath Stupa', 'Pashupatinath Temple', 'Durbar Square'], stay: 'Dwarika\'s Hotel Kathmandu' },
    { day: 3, title: 'Flight to Pokhara', description: 'Scenic 25-minute mountain flight to Pokhara with Himalayan panorama. Check into lakeside luxury retreat. Afternoon: Phewa Lake boating with Machapuchare reflections. Evening: lakeside dining with Annapurna views.', highlights: ['Mountain Flight', 'Phewa Lake Boating', 'Lakeside Dinner'], stay: 'Pavilions Himalayas Pokhara' },
    { day: 4, title: 'Pokhara Adventure Day', description: 'Pre-dawn drive to Sarangkot for the iconic Annapurna sunrise. Morning: tandem paragliding over Phewa Lake. Afternoon: World Peace Pagoda visit and Davis Falls. Evening: Nepali cultural show.', highlights: ['Sarangkot Sunrise', 'Paragliding', 'World Peace Pagoda'], stay: 'Pavilions Himalayas Pokhara' },
    { day: 5, title: 'Chitwan Jungle', description: 'Drive through terraced hills to Chitwan National Park. Afternoon: canoe ride on the Rapti River spotting gharials and marsh muggers. Evening: Tharu cultural dance performance around bonfire.', highlights: ['Scenic Drive', 'River Safari', 'Tharu Dance'], stay: 'Tiger Tops Tharu Lodge' },
    { day: 6, title: 'Safari & Farewell', description: 'Early morning jungle safari — track one-horned rhinos and spot over 500 bird species. Breakfast at the lodge. Transfer to Kathmandu for departure with memories of the most dramatic landscape on Earth.', highlights: ['Jungle Safari', 'Rhino Tracking', 'Departure Transfer'], stay: 'Departure' },
  ] as ItineraryDay[],

  hotelTiers: [
    { tier: 'Premium Comfort', description: 'Curated 3-4 star hotels in prime locations — clean, comfortable, with mountain views and Nepali hospitality.', price: '₹4,000 – ₹8,000 / night' },
    { tier: 'Luxury Heritage', description: 'Iconic properties like Dwarika\'s, Pavilions Himalayas — heritage suites, spa, and exceptional dining.', price: '₹12,000 – ₹35,000 / night' },
    { tier: 'Ultra-Luxury Lodge', description: 'The finest mountain lodges — Tiger Tops, Yeti Mountain Home, Meghauli Serai — ultimate Himalayan luxury.', price: '₹25,000 – ₹60,000 / night' },
  ] as HotelTier[],

  process: [
    { step: 1, title: 'Nepal Consultation', description: 'Connect with our Himalayan specialists to outline your ideal mountain experience.' },
    { step: 2, title: 'Journey Curation', description: 'We design a bespoke itinerary blending adventure, heritage, wildlife, and luxury retreats.' },
    { step: 3, title: 'Refinement', description: 'Finalize trekking difficulty, add mountain flights, select luxury lodges, and confirm permits.' },
    { step: 4, title: 'Seamless Execution', description: 'Arrive in Nepal with every detail handled — guides, permits, transfers, and 24/7 support.' },
  ] as ProcessStep[],

  testimonials: [
    { name: 'Vikram & Priya', city: 'Pune', tripType: 'Himalayan Honeymoon', quote: 'Watching the Annapurna range turn gold from our infinity pool in Pokhara was beyond anything we imagined. Nepal stole our hearts completely.', rating: 5, date: 'Jan 2026', photo: '/images/nepal/test1.jpg' },
    { name: 'The Mehta Family', city: 'Ahmedabad', tripType: 'Complete Nepal Circuit', quote: 'From Boudhanath\'s prayers to Chitwan\'s rhinos to Pokhara\'s paragliding — our kids experienced the entire spectrum of Nepal. Flawlessly planned!', rating: 5, date: 'Mar 2026', photo: '/images/nepal/test2.jpg' },
    { name: 'Amit', city: 'Bangalore', tripType: 'Everest Explorer Premium', quote: 'Standing at Everest Base Camp with my Sherpa guide — the luxury lodges, the helicopter return — this was the adventure of a lifetime, done in comfort.', rating: 5, date: 'Nov 2025', photo: '/images/nepal/test3.jpg' },
  ] as Testimonial[],

  faqs: [
    { q: 'Do Indians need a visa for Nepal?', a: 'No! Indian nationals do not need a visa to visit Nepal. You can enter with a valid Indian passport or even an Aadhaar card. No advance paperwork needed.' },
    { q: 'What is the best time to visit Nepal?', a: 'October-November (autumn) offers clear skies and stunning mountain views — perfect for trekking. March-May (spring) brings rhododendron blooms. December-February is cold but offers crisp Himalayan views and fewer crowds.' },
    { q: 'How difficult is the Everest Base Camp trek?', a: 'It\'s challenging but achievable for reasonably fit people. The 14-day trek reaches 5,364m. We provide luxury lodge stays, experienced Sherpa guides, and helicopter return options for comfort.' },
    { q: 'Is Nepal safe for tourists?', a: 'Nepal is very safe for tourists. Nepali people are famously warm and hospitable. Standard travel precautions apply. Our guides and 24/7 support ensure complete peace of mind.' },
    { q: 'Can I see Everest without trekking?', a: 'Absolutely! Our mountain flights offer a 1-hour aerial experience along the entire Himalayan range — Everest, Lhotse, Makalu — visible from your comfortable window seat. Available daily from Kathmandu.' },
    { q: 'What should I pack for Nepal?', a: 'Layers are key — temperatures vary dramatically with altitude. We provide a detailed packing list based on your specific itinerary, season, and altitude range. Trekking gear can be rented in Kathmandu.' },
  ] as FAQ[],

  relatedDestinations: [
    { name: 'Kashmir Paradise', image: '/images/kashmir/hero-desktop.jpg', href: '/kashmir' },
    { name: 'Sikkim Adventures', image: '/images/sikkim/hero-desktop.jpg', href: '/sikkim' },
    { name: 'Rajasthan Royal', image: '/images/rajasthan/hero.jpg', href: '/rajasthan' },
  ] as RelatedDestination[],
}
