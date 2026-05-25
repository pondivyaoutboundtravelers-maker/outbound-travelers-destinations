export interface TrustBadge {
  icon: string
  label: string
}

export interface Package {
  id: string
  name: string
  duration: string
  idealFor: string
  highlights: string[]
  price: string
  image: string
  alt: string
  whatsappMessage: string
  seasonal: boolean
  seasonMonths?: number[]
  featured?: boolean
  tier?: string
}

export interface ItineraryDay {
  day: number
  title: string
  description: string
  highlights: string[]
  stay: string
}

export interface HotelTier {
  tier: string
  description: string
  price: string
}

export interface MonthRating {
  month: string
  rating: 'best' | 'good' | 'okay' | 'avoid'
  status?: 'peak' | 'shoulder' | 'off-peak' | 'wellness'
  note: string
}

export interface Season {
  id: string
  label: string
  months: string
  description: string
  image: string
}

export interface FAQ {
  q: string
  a: string
}

export interface Testimonial {
  name: string
  city: string
  tripType: string
  quote: string
  rating: number
  date: string
  photo: string
}

export interface RelatedDestination {
  name: string
  image: string
  href: string
}

export interface Experience {
  id: string
  title: string
  subtitle?: string
  description: string
  image: string
  alt: string
  seasonal: boolean
  seasonMonths?: number[]
}

export interface WhatsAppConfig {
  number: string
  heroMessage: string
  stickyMessage: string
  floaterMessage: string
  finalCtaMessage: string
  postFormMessage: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface DestinationTheme {
  accentColor: string
  accentSoft: string
  motif: string
}

export interface LeadFormConfig {
  title: string
  subtitle: string
  submitButtonText: string
  successMessage: string
  destinationId: string
  destinationName: string
}
