'use client'

import React, { useState, useEffect } from 'react'
import { ladakhData } from '@/lib/ladakh/data'
import { ladakhEvents } from '@/lib/ladakh/analytics'

const ACCLIMATIZATION_DAYS = [1, 2]

export default function ItineraryAccordionLadakh() {
  const [openDay, setOpenDay] = useState<number>(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash && hash.startsWith('#day-')) {
        const parsed = parseInt(hash.replace('#day-', ''), 10)
        if (!isNaN(parsed) && parsed >= 1 && parsed <= ladakhData.itinerary.length) {
          setOpenDay(parsed)
        }
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const handleToggle = (day: number) => {
    setOpenDay((prev) => (prev === day ? 0 : day))
    if (day !== 0) ladakhEvents.itineraryExpand(day)
  }

  const handleDownloadPDFSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && phone) {
      setIsModalOpen(false)
      alert('Thank you! The PDF itinerary has been sent to your email and WhatsApp.')
    }
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-8">
        Sample Ladakh Itinerary — 7 Nights, 8 Days
      </h2>

      <div className="space-y-4 mb-10">
        {ladakhData.itinerary.map((dayItem) => {
          const isOpen = openDay === dayItem.day
          const isAcclimatization = ACCLIMATIZATION_DAYS.includes(dayItem.day)

          return (
            <div
              key={dayItem.day}
              className="border border-border-soft rounded-xl bg-white overflow-hidden shadow-sm"
            >
              <button
                onClick={() => handleToggle(dayItem.day)}
                className="w-full flex justify-between items-center text-left p-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1F3A8A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    D{dayItem.day}
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-brand-navy">
                      {dayItem.title}
                    </h3>
                    {isAcclimatization && (
                      <span className="inline-flex items-center gap-1 mt-0.5 text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Acclimatization Day — No strenuous activity
                      </span>
                    )}
                  </div>
                </div>
                <span
                  className="transform transition-transform text-[#1F3A8A] flex-shrink-0"
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div
                className="transition-all duration-300 overflow-hidden"
                style={{
                  maxHeight: isOpen ? '500px' : '0px',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="p-5 border-t border-border-soft bg-cream">
                  {isAcclimatization && (
                    <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800 font-medium">
                      ⚠️ Rest completely today. Avoid alcohol, hot showers, and any strenuous activity. Drink 3–4 litres of water. Alert your guide if you feel headache or nausea.
                    </div>
                  )}
                  <p className="text-sm md:text-base text-muted mb-4 leading-relaxed">
                    {dayItem.description}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {dayItem.highlights.map((h, i) => (
                        <span key={i} className="text-xs bg-white text-brand-navy border border-border-soft px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium">
                          <svg className="w-3.5 h-3.5 text-[#1F3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          {h}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#1F3A8A] bg-[#E0E7FF] px-3 py-1 rounded-full uppercase tracking-wider">
                      Stay: {dayItem.stay}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-6 h-12 bg-transparent border-2 border-[#1F3A8A] text-[#1F3A8A] hover:bg-[#E0E7FF] transition-colors font-bold rounded-lg text-sm"
        >
          <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download full PDF itinerary
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-4">
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white rounded-2xl p-6 max-w-sm w-full z-10 shadow-2xl">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-3 right-3 text-muted hover:text-brand-navy">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-lg font-bold text-brand-navy mb-2">Get PDF Itinerary</h3>
            <p className="text-xs text-muted mb-4 leading-normal">
              Share your contact details to receive the complete 8-day Ladakh itinerary with pricing and altitude notes.
            </p>
            <form onSubmit={handleDownloadPDFSubmit} className="space-y-3">
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-border-soft rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3A8A]/30"
              />
              <input
                type="tel"
                required
                placeholder="WhatsApp Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-border-soft rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3A8A]/30"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-brand-cta text-white font-bold rounded-lg text-sm hover:bg-brand-cta/90 transition-colors"
              >
                Send PDF
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
