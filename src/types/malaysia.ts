export interface MalaysiaPackage {
  id: string;
  title: string;
  duration: string;
  price: string;
  originalPrice?: string;
  shortDescription: string;
  highlights: string[];
  image: string;
  isPopular?: boolean;
  badge?: string;
  idealFor?: string;
}

export interface Region {
  id: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  tag: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  meals: string[];
  stay: string;
  image?: string;
}

export interface HotelTier {
  name: string;
  description: string;
  priceRange: string;
  features: string[];
  recommended?: boolean;
  stars: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  tag: string;
  location: string;
}
