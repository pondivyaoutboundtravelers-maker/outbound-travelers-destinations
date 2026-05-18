'use client'

import React, { useState, useEffect } from 'react'
import type { LeadFormConfig, WhatsAppConfig } from '@/lib/shared/types'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'

interface LeadFormModalProps {
  config: LeadFormConfig
  whatsapp: WhatsAppConfig
  accentColor: string
  isOpen: boolean
  onClose: () => void
  prefill?: {
    travelers?: number
    nights?: number
  }
}

const SOUTH_INDIAN_CITIES = [
  'Chennai',
  'Bangalore',
  'Coimbatore',
  'Madurai',
  'Nagercoil',
  'Trivandrum',
  'Kochi',
  'Hyderabad',
]

const ALL_CITIES = [
  ...SOUTH_INDIAN_CITIES,
  'Mumbai',
  'Delhi',
  'Pune',
  'Kolkata',
  'Ahmedabad',
  'Goa',
]

const TRIP_TYPES = [
  'Honeymoon',
  'Family',
  'Friends',
  'Group',
  'Corporate',
  'Solo',
  'Luxury',
  'Budget',
]

export default function LeadFormModal({
  config,
  whatsapp,
  accentColor,
  isOpen,
  onClose,
  prefill,
}: LeadFormModalProps) {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Form State
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [whatsappSame, setWhatsappSame] = useState(true)
  const [email, setEmail] = useState('')
  const [travelMonth, setTravelMonth] = useState('')
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [departureCity, setDepartureCity] = useState('')
  const [tripType, setTripType] = useState('')
  const [budget, setBudget] = useState('')
  const [hotelTier, setHotelTier] = useState('4star')
  const [needFlights, setNeedFlights] = useState(true)
  const [specialReq, setSpecialReq] = useState('')

  // Show South Indian Food arrangement chip
  const [showFoodChip, setShowFoodChip] = useState(false)

  // Load from localstorage & handle prefill
  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem(`ot_form_${config.destinationId}`)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (parsed.name) setName(parsed.name)
        if (parsed.phone) setPhone(parsed.phone)
        if (parsed.email) setEmail(parsed.email)
        if (parsed.departureCity) setDepartureCity(parsed.departureCity)
      } catch (e) {
        // ignore
      }
    }
  }, [config.destinationId])

  // Handle outside prefill values (e.g. from Cost Estimator)
  useEffect(() => {
    if (prefill?.travelers) {
      setAdults(prefill.travelers)
    }
  }, [prefill])

  // Listen to city changes to toggle South Indian food chip
  useEffect(() => {
    const isSouthIndian = SOUTH_INDIAN_CITIES.some(
      (c) => c.toLowerCase() === departureCity.trim().toLowerCase()
    )
    setShowFoodChip(isSouthIndian)
  }, [departureCity])

  // Auto-save State changes to localStorage
  useEffect(() => {
    localStorage.setItem(
      `ot_form_${config.destinationId}`,
      JSON.stringify({ name, phone, email, departureCity })
    )
  }, [name, phone, email, departureCity, config.destinationId])

  if (!isOpen) return null

  // Validation
  const validateStep1 = () => name.trim().length > 0 && phone.trim().length >= 10 && email.includes('@')
  const validateStep2 = () => travelMonth !== '' && adults > 0 && departureCity.trim().length > 0 && tripType !== ''

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      window.dispatchEvent(new CustomEvent('leadFormProgress', { detail: { step: 2 } }))
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      window.dispatchEvent(new CustomEvent('leadFormProgress', { detail: { step: 3 } }))
      setStep(3)
    }
  }

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const payload = {
      destination: config.destinationName,
      destinationId: config.destinationId,
      name,
      phone,
      whatsappSame,
      email,
      travelMonth,
      travelers: adults + children,
      adults,
      children,
      departureCity,
      tripType,
      budget,
      hotelTier,
      needFlights,
      specialReq,
    }

    try {
      // Dispatch analytics event
      window.dispatchEvent(new CustomEvent('leadFormSubmitAttempt', { detail: payload }))

      // Simulated post
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {}) // Catch-all for offline or server missing in static export

      setIsSubmitted(true)
      window.dispatchEvent(new CustomEvent('formSubmitSuccess', { detail: payload }))

      // Setup WA redirection
      let msg = whatsapp.postFormMessage
        .replace('{month}', travelMonth)
        .replace('{travelers}', String(adults + children))
        .replace('{city}', departureCity)
        .replace('{tripType}', tripType)

      const waUrl = buildWhatsAppUrl(whatsapp.number, msg)
      
      setTimeout(() => {
        window.open(waUrl, '_blank')
      }, 1500)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-black/60">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal / Bottom Sheet Content */}
      <div className="relative bg-white rounded-t-3xl md:rounded-2xl max-w-lg w-full h-[95vh] md:h-auto max-h-[90vh] overflow-y-auto z-10 flex flex-col justify-between shadow-2xl transition-all duration-300 animate-slide-up">
        {/* Header */}
        <div className="p-6 border-b border-border-soft flex justify-between items-start">
          <div>
            <h3 className="text-xl md:text-2xl font-fraunces font-bold text-brand-navy">
              {isSubmitted ? 'Enquiry Submitted!' : config.title}
            </h3>
            {!isSubmitted && (
              <p className="text-xs md:text-sm text-muted mt-1">{config.subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-muted hover:text-brand-navy p-1"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form success thank-you state */}
        {isSubmitted ? (
          <div className="flex-1 p-8 text-center flex flex-col items-center justify-center animate-fade-in">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-4">We have received your request!</h4>
            <p className="text-sm md:text-base text-muted mb-8 leading-relaxed max-w-sm">
              {config.successMessage}
            </p>
            <p className="text-xs text-brand-cta font-semibold animate-pulse">
              Redirecting you to WhatsApp to start customizing...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between p-6">
            {/* Step Progress Dots */}
            <div className="flex justify-center gap-2 mb-6">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                    s === step ? 'scale-110' : 'scale-100'
                  }`}
                  style={{
                    backgroundColor: s === step ? accentColor : '#E5DCD0',
                  }}
                />
              ))}
            </div>

            {/* Step Content */}
            <div className="flex-1 overflow-y-auto mb-6">
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priya Kumar"
                      className="w-full px-4 py-3 border border-border-soft rounded-lg text-brand-navy focus:outline-none focus:border-brand-cta text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1.5">
                      Phone Number (WhatsApp Active) *
                    </label>
                    <div className="flex gap-2">
                      <span className="inline-flex items-center px-3 border border-border-soft bg-cream rounded-lg text-brand-navy text-sm font-semibold">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        pattern="[6-9][0-9]{9}"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-3 border border-border-soft rounded-lg text-brand-navy focus:outline-none focus:border-brand-cta text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 py-1">
                    <input
                      type="checkbox"
                      id="whatsappSame"
                      checked={whatsappSame}
                      onChange={(e) => setWhatsappSame(e.target.checked)}
                      className="w-4 h-4 rounded text-brand-cta focus:ring-brand-cta border-border-soft"
                    />
                    <label htmlFor="whatsappSame" className="text-xs font-semibold text-brand-navy cursor-pointer">
                      My WhatsApp number is same as my mobile number
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. priya@example.com"
                      className="w-full px-4 py-3 border border-border-soft rounded-lg text-brand-navy focus:outline-none focus:border-brand-cta text-sm"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1.5">
                      When are you planning to travel? *
                    </label>
                    <select
                      required
                      value={travelMonth}
                      onChange={(e) => setTravelMonth(e.target.value)}
                      className="w-full px-4 py-3 border border-border-soft rounded-lg text-brand-navy focus:outline-none focus:border-brand-cta text-sm bg-white"
                    >
                      <option value="">Select Month</option>
                      <option value="May 2026">May 2026</option>
                      <option value="June 2026">June 2026</option>
                      <option value="July 2026">July 2026</option>
                      <option value="August 2026">August 2026</option>
                      <option value="September 2026">September 2026</option>
                      <option value="October 2026">October 2026</option>
                      <option value="November 2026">November 2026</option>
                      <option value="December 2026">December 2026</option>
                      <option value="January 2027">January 2027</option>
                      <option value="February 2027">February 2027</option>
                      <option value="March 2027">March 2027</option>
                      <option value="April 2027">April 2027</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1.5">
                      Number of Travelers *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Adults */}
                      <div className="flex items-center justify-between border border-border-soft p-3 rounded-lg bg-cream">
                        <span className="text-xs font-bold text-brand-navy">Adults</span>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => adults > 1 && setAdults(adults - 1)}
                            className="w-7 h-7 rounded-full bg-white border border-border-soft flex items-center justify-center font-bold text-brand-navy text-base"
                          >
                            -
                          </button>
                          <span className="font-bold text-sm text-brand-navy">{adults}</span>
                          <button
                            type="button"
                            onClick={() => setAdults(adults + 1)}
                            className="w-7 h-7 rounded-full bg-white border border-border-soft flex items-center justify-center font-bold text-brand-navy text-base"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Kids */}
                      <div className="flex items-center justify-between border border-border-soft p-3 rounded-lg bg-cream">
                        <span className="text-xs font-bold text-brand-navy">Kids (Under 12)</span>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => children > 0 && setChildren(children - 1)}
                            className="w-7 h-7 rounded-full bg-white border border-border-soft flex items-center justify-center font-bold text-brand-navy text-base"
                          >
                            -
                          </button>
                          <span className="font-bold text-sm text-brand-navy">{children}</span>
                          <button
                            type="button"
                            onClick={() => setChildren(children + 1)}
                            className="w-7 h-7 rounded-full bg-white border border-border-soft flex items-center justify-center font-bold text-brand-navy text-base"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1.5">
                      Departure City *
                    </label>
                    <input
                      type="text"
                      list="cities"
                      required
                      value={departureCity}
                      onChange={(e) => setDepartureCity(e.target.value)}
                      placeholder="e.g. Chennai, Bangalore"
                      className="w-full px-4 py-3 border border-border-soft rounded-lg text-brand-navy focus:outline-none focus:border-brand-cta text-sm"
                    />
                    <datalist id="cities">
                      {ALL_CITIES.map((c) => (
                        <option key={c} value={c} />
                      ))}
                    </datalist>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1.5">
                      Trip Type *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {TRIP_TYPES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTripType(t)}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-colors ${
                            tripType === t
                              ? 'text-white border-transparent'
                              : 'text-brand-navy bg-cream border-border-soft hover:bg-gray-100'
                          }`}
                          style={{
                            backgroundColor: tripType === t ? accentColor : undefined,
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1.5">
                      Approximate Land Budget (Per Person)
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3 border border-border-soft rounded-lg text-brand-navy focus:outline-none focus:border-brand-cta text-sm bg-white"
                    >
                      <option value="">Select Budget</option>
                      <option value="Under ₹25k">Under ₹25k</option>
                      <option value="₹25k–50k">₹25k–50k</option>
                      <option value="₹50k–1L">₹50k–1L</option>
                      <option value="₹1L–2L">₹1L–2L</option>
                      <option value="₹2L+">₹2L+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1.5">
                      Preferred Stay Class
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { val: '3star', lbl: '3★' },
                        { val: '4star', lbl: '4★' },
                        { val: '5star', lbl: '5★' },
                        { val: 'mix', lbl: 'Mix' },
                      ].map((stay) => (
                        <button
                          key={stay.val}
                          type="button"
                          onClick={() => setHotelTier(stay.val)}
                          className={`py-2 rounded-lg text-xs font-bold border transition-colors ${
                            hotelTier === stay.val
                              ? 'text-white border-transparent'
                              : 'text-brand-navy bg-cream border-border-soft hover:bg-gray-100'
                          }`}
                          style={{
                            backgroundColor: hotelTier === stay.val ? accentColor : undefined,
                          }}
                        >
                          {stay.lbl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-border-soft">
                    <span className="text-xs font-bold text-brand-navy uppercase">Do you need flights as well?</span>
                    <button
                      type="button"
                      onClick={() => setNeedFlights(!needFlights)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none`}
                      style={{
                        backgroundColor: needFlights ? accentColor : '#E5DCD0',
                      }}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          needFlights ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-xs font-bold text-brand-navy uppercase">
                        Special Requirements
                      </label>
                      {showFoodChip && (
                        <button
                          type="button"
                          onClick={() => {
                            if (!specialReq.includes('South Indian food arrangements')) {
                              setSpecialReq(
                                (prev) =>
                                  `${prev}${prev ? ', ' : ''}Need South Indian food arrangements`
                              )
                            }
                          }}
                          className="bg-kashmir-soft text-kashmir-accent text-[10px] font-bold px-2 py-0.5 rounded border border-kashmir-accent/30 animate-pulse"
                        >
                          + Add South Indian food
                        </button>
                      )}
                    </div>
                    <textarea
                      value={specialReq}
                      onChange={(e) => setSpecialReq(e.target.value)}
                      placeholder="e.g. South Indian food, senior citizen in group, honeymoon decorations needed..."
                      rows={3}
                      className="w-full px-4 py-3 border border-border-soft rounded-lg text-brand-navy focus:outline-none focus:border-brand-cta text-sm resize-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer Buttons */}
            <div className="flex gap-4 pt-4 border-t border-border-soft">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="flex-1 py-3.5 border border-border-soft rounded-lg text-sm font-bold text-brand-navy bg-cream hover:bg-gray-100 transition-colors"
                >
                  Back
                </button>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={step === 1 ? !validateStep1() : !validateStep2()}
                  className={`flex-[2] py-3.5 rounded-lg text-sm font-bold text-white transition-opacity ${
                    (step === 1 && !validateStep1()) || (step === 2 && !validateStep2())
                      ? 'opacity-50 cursor-not-allowed'
                      : 'opacity-100 hover:opacity-90'
                  }`}
                  style={{ backgroundColor: accentColor }}
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-[2] py-3.5 rounded-lg text-sm font-bold text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#E85A1F' }}
                >
                  {isLoading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    config.submitButtonText
                  )}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
