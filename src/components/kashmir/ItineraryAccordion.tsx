'use client'

import React, { useState, useEffect } from 'react'
import { kashmirData } from '@/lib/kashmir/data'
import { kashmirEvents } from '@/lib/kashmir/analytics'

export default function ItineraryAccordion() {
  const [openDay, setOpenDay] = useState<number>(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    // Listen for hash deep-links (e.g. #day-1)
    const handleHash = () => {
      const hash = window.location.hash
      if (hash && hash.startsWith('#day-')) {
        const parsed = parseInt(hash.replace('#day-', ''), 10)
        if (!isNaN(parsed) && parsed >= 1 && parsed <= 7) {
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
    if (day !== 0) {
      kashmirEvents.itineraryExpand(day)
    }
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
        Sample Kashmir Itinerary — 6 Nights, 7 Days
      </h2>

      {/* Accordion List */}
      <div className="space-y-4 mb-10">
        {kashmirData.itinerary.map((dayItem) => {
          const isOpen = openDay === dayItem.day
          return (
            <div
              key={dayItem.day}
              className="border border-border-soft rounded-xl bg-white overflow-hidden shadow-sm"
            >
              {/* Day Header Button */}
              <button
                onClick={() => handleToggle(dayItem.day)}
                className="w-full flex justify-between items-center text-left p-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-kashmir-accent text-white flex items-center justify-center font-bold text-sm">
                    D{dayItem.day}
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-brand-navy">
                      {dayItem.title}
                    </h3>
                  </div>
                </div>
                <span className={`transform transition-transform text-kashmir-accent ${isOpen ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {/* Day Content Area */}
              <div
                className="transition-all duration-300 overflow-hidden"
                style={{
                  maxHeight: isOpen ? '400px' : '0px',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="p-5 border-t border-border-soft bg-cream">
                  <p className="text-sm md:text-base text-muted mb-4 leading-relaxed">
                    {dayItem.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5">
                      {dayItem.highlights.map((h, i) => (
                        <span key={i} className="text-xs bg-white text-brand-navy border border-border-soft px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium">
                          <svg className="w-3.5 h-3.5 text-kashmir-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Stay Badge */}
                    <span className="text-xs font-bold text-kashmir-accent bg-kashmir-soft px-3 py-1 rounded-full uppercase tracking-wider">
                      Stay: {dayItem.stay}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* PDF download Action */}
      <div className="text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-6 h-12 bg-transparent border-2 border-kashmir-accent text-kashmir-accent hover:bg-kashmir-soft transition-colors font-bold rounded-lg text-sm"
        >
          <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download full PDF itinerary
        </button>
      </div>

      {/* PDF Download Gate Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-4">
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white rounded-2xl p-6 max-w-sm w-full z-10 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-muted hover:text-brand-navy"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-lg font-bold text-brand-navy mb-2">Get PDF Itinerary</h3>
            <p className="text-xs text-muted mb-4 leading-normal">
              Please share your contact details below to instantly download the complete day-by-day itinerary with pricing.
            </p>
            <form onSubmit={handleDownloadPDFSubmit} className="space-y-3">
              <div>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-border-soft rounded-lg text-sm focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-border-soft rounded-lg text-sm focus:outline-none"
                />
              </div>
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
