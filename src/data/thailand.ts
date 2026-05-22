import { DestinationTheme, TrustBadge, Package, ItineraryDay, HotelTier, Experience, FAQ, Testimonial, RelatedDestination, ProcessStep, MonthRating } from '@/lib/shared/types';

export const thailandTheme: DestinationTheme = {
  accentColor: '#0891B2',
  accentSoft: '#0C4A6E',
  motif: 'tropical',
};

export const thailandTrustBadges: TrustBadge[] = [
  { icon: 'visa', label: 'Visa-free 60 days' },
  { icon: 'vegetarian', label: 'Vegetarian-easy' },
  { icon: 'honeymoon', label: 'Honeymoon-tested' },
  { icon: 'support', label: '24/7 ground team' },
];

export interface RegionCard {
  name: string;
  image: string;
  vibe: string;
  bestFor: string;
  nights: string;
  description: string;
}

export const thailandRegions: RegionCard[] = [
  {
    name: 'Bangkok',
    image: '/images/thailand/bangkok.jpg',
    vibe: 'High-energy nightlife meets sacred history',
    bestFor: 'Rooftop dining, shopping & glittering gold temples',
    nights: '2-3 Nights',
    description: 'Bustling night markets, world-class street food, and sleek skyscrapers standing next to the ancient Grand Palace.',
  },
  {
    name: 'Phuket',
    image: '/images/thailand/phuket.jpg',
    vibe: 'Pure tropical luxury & dramatic shores',
    bestFor: 'Beachfront resorts, yacht tours & beach clubs',
    nights: '3-4 Nights',
    description: 'Thailand\'s largest island, home to ultra-luxury hideaways, fine-dining restaurants, and lively resort culture.',
  },
  {
    name: 'Krabi',
    image: '/images/thailand/krabi.jpg',
    vibe: 'Romantic, secluded limestone paradise',
    bestFor: 'Rock climbing, romantic sunset views & quiet luxury',
    nights: '2-3 Nights',
    description: 'Towering karst cliffs rising from the turquoise waters, pristine Railay Beach, and intimate boutique pool villas.',
  },
  {
    name: 'Pattaya',
    image: '/images/thailand/pattaya.jpg',
    vibe: 'Coastal entertainment & family fun hub',
    bestFor: 'Cabarets, floating markets & kids activities',
    nights: '2 Nights',
    description: 'Perfect for energetic family activities, water parks, temple sanctuaries, and vibrant shopping alleys.',
  },
  {
    name: 'Phi Phi Islands',
    image: '/images/thailand/phiphi.jpg',
    vibe: 'Cinematic emerald-green ocean adventure',
    bestFor: 'Snorkeling, sunrise island hopping & beach fires',
    nights: '1-2 Nights',
    description: 'Spectacular limestone bays made famous in cinema, clear waters teeming with colorful coral, and magical bays.',
  },
  {
    name: 'Chiang Mai',
    image: '/images/thailand/chiangmai.jpg',
    vibe: 'Misty mountains & spiritual serenity',
    bestFor: 'Lantern festivals, elephant sanctuaries & mountain views',
    nights: '2-3 Nights',
    description: 'Northern Thailand\'s cultural capital featuring ornate temples, misty peaks, local craft villages, and sanctuary hikes.',
  },
];

export interface HoneymoonStory {
  title: string;
  description: string;
  image: string;
}

export const thailandHoneymoonStories: HoneymoonStory[] = [
  {
    title: 'Floating Breakfast',
    description: 'Wake up to a floating tray of tropical fruit and premium champagne inside your private plunge pool overlooking the Andaman Sea.',
    image: '/images/thailand/floating-breakfast.jpg',
  },
  {
    title: 'Beachfront Luxury Resorts',
    description: 'Intimate pool villas tucked away in pristine cliffs with direct access to private sand stretches and personalized butler service.',
    image: '/images/thailand/beachfront-resort.jpg',
  },
  {
    title: 'Couple\'s Authentic Thai Spa',
    description: 'Rejuvenate your soul side-by-side with healing herbal steam baths, authentic massage therapy, and coconut milk baths.',
    image: '/images/thailand/thai-spa.jpg',
  },
  {
    title: 'Private Phi Phi Yacht Charter',
    description: 'Sail away from the crowds on a customized catamaran to secluded coves, private beaches, and golden snorkeling spots.',
    image: '/images/thailand/private-yacht.jpg',
  },
  {
    title: 'Maya Bay Private Sunrise',
    description: 'Walk on the empty powder sands of legendary Maya Bay just as the sun illuminates the enclosing rock walls.',
    image: '/images/thailand/maya-sunrise.jpg',
  },
  {
    title: 'Romantic Beachfront Dinners',
    description: 'A candlelit table for two on the sand under a canopy of stars, with local seafood and gourmet private chefs.',
    image: '/images/thailand/romantic-dinner.jpg',
  },
];

export const thailandExperiences: Experience[] = [
  {
    id: 'phi-phi-daytrip',
    title: 'Phi Phi Island Day-Trip',
    description: 'Island hop across gorgeous bays with vibrant marine life and clear waters.',
    image: '/images/thailand/phiphi-sunset.jpg',
    alt: 'Phi Phi Island day-trip boat',
    seasonal: false,
  },
  {
    id: 'maya-bay-sunrise',
    title: 'Maya Bay Sunrise',
    description: 'Be the first to step onto the iconic white sand beach as the sun climbs over limestone cliffs.',
    image: '/images/thailand/krabi-cliffs.jpg',
    alt: 'Maya Bay sunrise scenery',
    seasonal: false,
  },
  {
    id: 'grand-palace',
    title: 'Grand Palace Bangkok',
    description: 'Explore the spectacular home of Thai Kings with gold-leaf spires and intricate carvings.',
    image: '/images/thailand/bangkok-rooftop.jpg',
    alt: 'Grand Palace Bangkok temple',
    seasonal: false,
  },
  {
    id: 'wat-pho',
    title: 'Wat Pho Giant Reclining Buddha',
    description: 'Admire the 46-meter long gold-plated reclining Buddha and beautiful historic pagodas.',
    image: '/images/thailand/wat-pho.jpg',
    alt: 'Wat Pho Temple Buddha',
    seasonal: false,
  },
  {
    id: 'james-bond-island',
    title: 'James Bond Island',
    description: 'Paddle sea canoes around the famous vertical karst spire rising out of Phang Nga Bay.',
    image: '/images/thailand/jamesbond.jpg',
    alt: 'James Bond Island spire rock',
    seasonal: false,
  },
  {
    id: 'krabi-four-islands',
    title: 'Krabi Four Islands Tour',
    description: 'Explore Phranang Cave, Tup Island, Chicken Island, and Poda Island on a wooden longtail boat.',
    image: '/images/thailand/krabi-beach.jpg',
    alt: 'Krabi Four Islands sea tour',
    seasonal: false,
  },
  {
    id: 'floating-market',
    title: 'Damnoen Saduak Floating Market',
    description: 'Ride a wooden boat through narrow canals full of fresh fruits, snacks, and local vendors.',
    image: '/images/thailand/floating-market.jpg',
    alt: 'Thailand floating market boat',
    seasonal: false,
  },
  {
    id: 'thai-cooking-class',
    title: 'Authentic Thai Cooking Class',
    description: 'Pick fresh ingredients from organic gardens and learn the art of Pad Thai and green curry.',
    image: '/images/thailand/cooking-class.jpg',
    alt: 'Thai cooking class food preparation',
    seasonal: false,
  },
  {
    id: 'phuket-fantasea',
    title: 'Phuket FantaSea Show',
    description: 'A magical night showcasing Thai heritage with spectacular pyrotechnics, dancers, and stunts.',
    image: '/images/thailand/phuket-show.jpg',
    alt: 'Phuket FantaSea show performance',
    seasonal: false,
  },
  {
    id: 'elephant-sanctuary',
    title: 'Ethical Elephant Sanctuary',
    description: 'Bathe, feed, and walk beside rescued giants in a lush mountain jungle environment.',
    image: '/images/thailand/elephant-sanctuary.jpg',
    alt: 'Elephants at ethical Thai sanctuary',
    seasonal: false,
  },
];

export const thailandPackages: Package[] = [
  {
    id: 'thailand-classic-family',
    name: 'Thailand Classic Family',
    duration: '6 Days / 5 Nights',
    idealFor: 'Families & Multigenerational Groups',
    highlights: ['Bangkok temples', 'Phuket beach resorts', 'Floating market safari', 'Phuket FantaSea tickets'],
    price: '₹39,990',
    image: '/images/thailand/package-family.jpg',
    alt: 'Family playing on white sands of Phuket',
    whatsappMessage: 'Hi Outbound Travelers, I am interested in the Thailand Classic Family package. Please share itinerary details.',
    seasonal: false,
  },
  {
    id: 'thailand-honeymoon',
    name: 'Thailand Honeymoon Special',
    duration: '6 Days / 5 Nights',
    idealFor: 'Couples & Newlyweds',
    highlights: ['Pool villa with floating breakfast', 'Private Phi Phi catamaran', 'Romantic beachfront candlelit dinner', 'Couple spa session'],
    price: '₹52,990',
    image: '/images/thailand/package-honeymoon.jpg',
    alt: 'Couple enjoying sunset at private beach resort',
    whatsappMessage: 'Hi Outbound Travelers, I am interested in the Thailand Honeymoon package. Please share details and custom options.',
    seasonal: false,
  },
  {
    id: 'bangkok-phuket-krabi-extended',
    name: 'Bangkok Phuket Krabi Extended',
    duration: '8 Days / 7 Nights',
    idealFor: 'Avid Explorers & Leisure Seekers',
    highlights: ['Rooftop cocktail in Bangkok', 'Phi Phi island snorkeling', 'Krabi sunset cliff dinner', '4-star boutique hotels'],
    price: '₹59,990',
    image: '/images/thailand/package-extended.jpg',
    alt: 'Scenic tropical beach view of Krabi',
    whatsappMessage: 'Hi Outbound Travelers, I want to know more about the Bangkok Phuket Krabi Extended 8 Days package. Please send itinerary.',
    seasonal: false,
  },
  {
    id: 'bangkok-pattaya-family',
    name: 'Bangkok Pattaya Family Special',
    duration: '5 Days / 4 Nights',
    idealFor: 'Budget-friendly Families & Friends',
    highlights: ['Safari World Bangkok', 'Pattaya Coral Island speedboat', 'Nong Nooch Garden entry', 'Shopping tours'],
    price: '₹29,990',
    image: '/images/thailand/package-pattaya.jpg',
    alt: 'Pattaya speedboat island tour',
    whatsappMessage: 'Hi Outbound Travelers, please share details for Bangkok Pattaya Family Special package.',
    seasonal: false,
  },
  {
    id: 'thailand-luxury',
    name: 'Thailand Ultra-Luxury Escape',
    duration: '7 Days / 6 Nights',
    idealFor: 'Luxury Connoisseurs',
    highlights: ['5-star beachfront pool villas', 'Private yacht charter', 'Michelin-starred dining', 'VIP ground fast-track transfers'],
    price: '₹1,24,990',
    image: '/images/thailand/package-luxury.jpg',
    alt: 'Luxury resort infinity pool overlooking Andaman sea',
    whatsappMessage: 'Hi Outbound Travelers, I am looking for a luxury vacation. Please send customized plan for Thailand Ultra-Luxury package.',
    seasonal: false,
  },
  {
    id: 'chiang-mai-bangkok-cultural',
    name: 'Chiang Mai + Bangkok Cultural',
    duration: '7 Days / 6 Nights',
    idealFor: 'Culture Seekers & Nature Lovers',
    highlights: ['Elephant feeding & bath', 'Chiang Mai night bazaar', 'Doi Suthep mountain temple', 'Grand Palace private tour'],
    price: '₹46,990',
    image: '/images/thailand/package-cultural.jpg',
    alt: 'Ancient golden pagoda in Chiang Mai mountains',
    whatsappMessage: 'Hi Outbound Travelers, I want to know about Chiang Mai + Bangkok Cultural package. Please contact me.',
    seasonal: false,
  },
];

export const thailandItinerary: ItineraryDay[] = [
  { day: 1, title: 'Arrival Bangkok – Night Skyline Welcome', description: 'VIP airport pickup, check-in to your luxury high-rise hotel. Evening welcome cocktails at a premier rooftop bar overlooking the glittering neon city.', highlights: ['VIP Airport Pickup', 'High-rise luxury stay', 'Rooftop skyline lounge'], stay: 'Bangkok' },
  { day: 2, title: 'Bangkok Sacred Temples & Canal Cruise', description: 'Guided tour of Grand Palace and Wat Pho Reclining Buddha. Cruise the Chao Phraya River on a private longtail boat, ending with delicious local street food.', highlights: ['Grand Palace', 'Wat Pho', 'Private Canal Cruise', 'Street Food Safari'], stay: 'Bangkok' },
  { day: 3, title: 'Fly to Phuket – Andaman Tropical Sunset', description: 'Morning flight to Phuket. Private transfer to a lush beachfront resort. Unwind in your pool villa or walk on the pristine sand during the warm golden hour.', highlights: ['Flight to Phuket', 'Beachfront resort check-in', 'Private beach walk'], stay: 'Phuket' },
  { day: 4, title: 'Phi Phi Islands Private Catamaran Tour', description: 'Sail to Maya Bay, Pileh Lagoon, and Bamboo Island. Enjoy snorkeling in sparkling turquoise waters with a catered picnic lunch on board.', highlights: ['Maya Bay morning', 'Pileh Lagoon swim', 'Private Catamaran Charter', 'Premium snorkeling'], stay: 'Phuket' },
  { day: 5, title: 'Scenic Krabi Cliff & Beach Hideaway', description: 'Scenic coast transfer to Krabi. Check-in to cliffside boutique resort. Evening longtail boat ride to Railay beach followed by sunset dinner at a grotto restaurant.', highlights: ['Krabi scenic transfer', 'Railay beach walk', 'Grotto sunset dinner'], stay: 'Krabi' },
  { day: 6, title: 'Krabi Four Islands & Authentic Thai Spa', description: 'Explore hidden caves and beaches of the Four Islands. Return for an luxurious couple\'s aromatherapy spa massage at a luxury cliffside wellness center.', highlights: ['Four Islands longtail tour', 'Phranang Cave explorer', 'Couple aromatherapy spa'], stay: 'Krabi' },
  { day: 7, title: 'Departure from Phuket/Krabi Airport', description: 'Enjoy your final floating breakfast in your pool villa. Private transfer to the airport for your flight home with unforgettable memories.', highlights: ['Floating breakfast', 'Airport transfer', 'Farewell'], stay: 'Departure' },
];

export const thailandHotelTiers: HotelTier[] = [
  { tier: 'Premium Boutique (4-Star)', description: 'Beautiful design properties with private pools, sunset decks, highly-rated hospitality, and prime locations.', price: 'Included in Base Packages' },
  { tier: 'Ultra-Luxury Resorts (5-Star)', description: 'World-famous resorts like Banyan Tree, Sri Panwa, and Rayavadee. Expansive private villas, custom butler service, and private beaches.', price: 'Upgrade available from +₹28,000/night' },
];

export const thailandFAQs: FAQ[] = [
  { q: 'Is Thailand currently visa-free for Indian tourists?', a: 'Yes! Indian passport holders enjoy 60 days visa-free entry into Thailand. No visa fees, no paperwork beforehand, just show your passport at immigration.' },
  { q: 'What is the best time of year to visit Thailand?', a: 'The ideal time is the cool, dry season between November and February. March to May is wonderful for tropical beach lovers, while the green season (June-October) offers the absolute best luxury hotel deals with fewer tourists.' },
  { q: 'Are vegetarian and Jain food easily available in Thailand?', a: 'Absolutely! Our ground team handpicks restaurants that serve delicious, authentic Indian vegetarian and Jain dishes. Most luxury resorts also serve premium vegetarian options for breakfast.' },
  { q: 'How does Outbound Travelers secure the best pricing?', a: 'Through direct partnerships with high-end resorts, local catamaran charters, and regional airlines, we pass bulk savings directly to our guests, avoiding intermediate agency markups.' },
  { q: 'Is this itinerary suitable for senior citizens and young kids?', a: 'Yes, we curate family-tested itineraries. Private luxury vans, shorter drives, elevators, beach ramp accesses, and kid-friendly meal options are pre-planned for a seamless experience.' },
  { q: 'Can we fully customize the daily itinerary?', a: 'Absolutely! Outbound Travelers specialises in bespoke itineraries. You can add extra days in Bangkok, swap out activities for luxury shopping, book private chefs, or choose different hotels.' },
];

export const thailandTestimonials: Testimonial[] = [
  { name: 'Dr. Vivek & Anjali', city: 'Coimbatore', tripType: 'Honeymoon', quote: 'The floating breakfast and private Phi Phi catamaran made our honeymoon feel like a celebrity film. Everything was handled flawlessly by the team on WhatsApp.', rating: 5, date: 'Feb 2026', photo: '/images/thailand/testimonial-couple.jpg' },
  { name: 'Meenakshi & Family', city: 'Chennai', tripType: 'Family Trip', quote: 'Traveling with parents and two young children is usually stressful, but the luxury Mercedes sprinter and prompt ground team made it effortless. Food was excellent!', rating: 5, date: 'April 2026', photo: '/images/thailand/testimonial-family.jpg' },
];

export const thailandRelated: RelatedDestination[] = [
  { name: 'Malaysia', image: '/images/thailand/related-malaysia.jpg', href: '/malaysia' },
  { name: 'Sikkim', image: '/images/thailand/related-sikkim.jpg', href: '/sikkim' },
  { name: 'Meghalaya', image: '/images/thailand/related-meghalaya.jpg', href: '/meghalaya' },
  { name: 'Kashmir', image: '/images/thailand/related-kashmir.jpg', href: '/kashmir' },
];

export const thailandProcessSteps: ProcessStep[] = [
  { step: 1, title: 'Share Your Travel Vision', description: 'Tell us your dates, guests, and whether you lean towards honeymoon romance, family leisure, or custom adventures.' },
  { step: 2, title: 'Receive Your Custom Plan', description: 'Our specialist crafts a premium luxury day-wise itinerary with dynamic pricing options within 2 hours.' },
  { step: 3, title: 'Refine to Perfection', description: 'Swap hotel tiers, add yacht charters, customize vegetarian meal requests until it matches your exact dream.' },
  { step: 4, title: 'Hassle-Free Booking', description: 'Secure transparent booking process. We issue flight tickets, premium hotel confirmations, and private boat vouchers.' },
  { step: 5, title: 'Luxe On-Trip Care', description: 'Our dedicated English-speaking guides and 24/7 WhatsApp ground team handle everything from fast-track arrivals to airport departures.' },
];

export const thailandSeasonRatings: MonthRating[] = [
  { month: 'November', rating: 'best', note: 'Cool weather, clear seas, festive vibes.' },
  { month: 'December', rating: 'best', note: 'Perfect tropical skies, popular peak season.' },
  { month: 'January', rating: 'best', note: 'Crisp pleasant evenings, crystal clear waters.' },
  { month: 'February', rating: 'best', note: 'Ideal romantic sunshine, perfect snorkeling.' },
  { month: 'March', rating: 'good', note: 'Warm sunny days, beach clubs are vibrant.' },
  { month: 'April', rating: 'good', note: 'Songkran festival energy, warm oceans.' },
  { month: 'May', rating: 'good', note: 'Calmer crowds, resort pool villa discounts.' },
  { month: 'June', rating: 'okay', note: 'Tropical afternoon showers, lush mountains.' },
  { month: 'July', rating: 'okay', note: 'Great pricing, nice luxury spa weather.' },
  { month: 'August', rating: 'okay', note: 'Warm rain spells, perfect empty beaches.' },
  { month: 'September', rating: 'okay', note: 'Northern culture sights are beautiful & green.' },
  { month: 'October', rating: 'good', note: 'Monsoon fading, fresh landscapes, low rates.' },
];

export const thailandInclusions = [
  'Luxury 4-star / 5-star pool villa accommodations',
  'Daily multi-cuisine breakfasts & pre-arranged Indian veg dinners',
  'VIP Fast-Track airport arrival service in Bangkok & Phuket',
  'Private luxury Mercedes-Sprinter or Toyota Alphard transfers',
  'All domestic internal flights (Bangkok to Phuket/Krabi) with luggage',
  'Private Catamaran cruise to Phi Phi Islands with beach lunch',
  'Luxury couple spa therapy session (Aromatherapy/Thai)',
  'English-speaking local guides at historic temple sights',
  'All national park entry permits, expressway tolls, and local marine taxes',
  '24/7 Outbound Travelers ground concierge team access',
];

export const thailandExclusions = [
  'International flights to/from India (can be booked at consolidator discounts)',
  'Optional adventure sports like scuba diving, parasailing, and rock climbing',
  'Personal expenses, mini-bar, alcoholic drinks, tips',
  'Travel insurance (highly recommended, offered during booking)',
  'Anything not explicitly mentioned in the package inclusions',
];
