export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface MeghalayaPackage {
  id: string;
  title: string;
  duration: string; // e.g., "5 Days / 4 Nights"
  price: string;
  shortDescription: string;
  highlights: string[];
  image: string;
  isPopular?: boolean;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  meals: string[];
  stay: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
