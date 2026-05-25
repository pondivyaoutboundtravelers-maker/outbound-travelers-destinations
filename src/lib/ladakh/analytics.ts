import { trackEvent } from '@/lib/shared/analytics'

const BASE = { destination_id: 'ladakh', destination_type: 'domestic' as const }

export const ladakhEvents = {
  pageView: () => trackEvent({ ...BASE, event_name: 'page_view_destination' }),
  heroCta: (label: string) => trackEvent({ ...BASE, event_name: 'hero_cta_click', cta_location: 'hero', cta_label: label }),
  whatsappClick: (location: string, templateId: string) => trackEvent({ ...BASE, event_name: 'whatsapp_click', cta_location: location, cta_label: templateId }),
  callClick: (location: string) => trackEvent({ ...BASE, event_name: 'call_click', cta_location: location }),
  formStart: () => trackEvent({ ...BASE, event_name: 'lead_form_start' }),
  formSubmit: (data: { tripType: string; travelMonth: string; travelers: number; departureCity: string }) => trackEvent({ ...BASE, event_name: 'lead_form_submit', ...data }),
  packageClick: (id: string, name: string) => trackEvent({ ...BASE, event_name: 'package_card_click', package_id: id, package_name: name }),
  itineraryExpand: (day: number) => trackEvent({ ...BASE, event_name: 'itinerary_expand', day_number: day }),
  hotelTierSelect: (tier: string) => trackEvent({ ...BASE, event_name: 'hotel_tier_select', tier }),
  luxuryCampView: () => trackEvent({ ...BASE, event_name: 'luxury_camp_tier_view' }),
  costEstimatorUsed: (travelers: number, nights: number, tier: string) => trackEvent({ ...BASE, event_name: 'cost_estimator_used', travelers, nights, tier }),
  seasonFilterClick: (month: string) => trackEvent({ ...BASE, event_name: 'ladakh_season_filter_click', month }),
  altitudeWarningView: () => trackEvent({ ...BASE, event_name: 'altitude_warning_view' }),
  faqExpand: (question: string) => trackEvent({ ...BASE, event_name: 'faq_expand', question_text: question }),
  galleryView: (index: number) => trackEvent({ ...BASE, event_name: 'gallery_view', cta_label: String(index) }),
  relatedClick: (destination: string) => trackEvent({ ...BASE, event_name: 'related_destination_click', cta_label: destination }),
  finalCtaClick: (label: string) => trackEvent({ ...BASE, event_name: 'final_cta_click', cta_label: label }),
  exitIntentCta: () => trackEvent({ ...BASE, event_name: 'exit_intent_cta_click' }),
  scrollDepth: (depth: number) => trackEvent({ ...BASE, event_name: 'scroll_depth', depth }),
  stickyCtaAppear: () => trackEvent({ ...BASE, event_name: 'sticky_cta_appear' }),
  thankYouView: (tripType: string) => trackEvent({ ...BASE, event_name: 'thank_you_view', trip_type: tripType }),
}
