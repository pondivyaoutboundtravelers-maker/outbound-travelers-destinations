export interface DestinationMeta {
  title: string;
  description: string;
  heroImage: string;
  ogImage?: string;
}

export interface TrustChip {
  icon: string;
  label: string;
}

export interface RegionInfo {
  name: string;
  image: string;
  vibe: string;
  bestFor: string;
  nights: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  seasonal?: boolean;
  seasonMonths?: number[];
}

export interface PackageItem {
  id: string;
  name: string;
  duration: string;
  price: string;
  highlights: string[];
  image: string;
  idealFor: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  highlights: string[];
  stay: string;
}

export interface HotelTier {
  tier: string;
  description: string;
  price: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  city: string;
  tripType: string;
  quote: string;
  rating: number;
  date: string;
  photo: string;
}

export interface RelatedDestination {
  name: string;
  image: string;
  href: string;
}

export interface DestinationData {
  meta: DestinationMeta;
  trustChips: TrustChip[];
  quickSummary: string;
  visaInfo: string;
  why: string;
  regions: RegionInfo[];
  honeymoonSpecial: string;
  topExperiences: ExperienceItem[];
  packages: PackageItem[];
  itinerary: ItineraryDay[];
  hotelTiers: HotelTier[];
  costEstimator: any; // placeholder for future config
  seasonCalendar: any; // placeholder
  planningSteps: ProcessStep[];
  inclusions: string[];
  exclusions: string[];
  testimonials: TestimonialItem[];
  faq: FAQItem[];
  related: RelatedDestination[];
  whatsappConfig: any; // placeholder for config
}
