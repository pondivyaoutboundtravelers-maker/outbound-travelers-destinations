export interface EventPayload {
  event_name: string
  destination_id: string
  destination_type: 'domestic' | 'international'
  cta_location?: string
  cta_label?: string
  package_id?: string
  package_name?: string
  day_number?: number
  question_text?: string
  month?: string
  travelers?: number
  nights?: number
  tier?: string
  trip_type?: string
  travel_month?: string
  departure_city?: string
  depth?: number
  [key: string]: unknown
}

export function trackEvent(payload: EventPayload): void {
  if (typeof window === 'undefined') return
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', payload.event_name, payload)
  }
  fetch('/api/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...payload,
      utm_source: sessionStorage.getItem('ot_utm_source'),
      utm_medium: sessionStorage.getItem('ot_utm_medium'),
      utm_campaign: sessionStorage.getItem('ot_utm_campaign'),
      device_type: window.innerWidth < 768 ? 'mobile' : 'desktop',
      page_path: window.location.pathname,
      timestamp: new Date().toISOString(),
    }),
  }).catch(() => {})
}

export function captureUTMs(): void {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  ;['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(key => {
    const value = params.get(key)
    if (value) sessionStorage.setItem(`ot_${key}`, value)
  })
}
