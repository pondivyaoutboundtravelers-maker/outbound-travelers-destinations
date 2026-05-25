'use client'

import React from 'react'
import { shimlaData } from '@/lib/shimla/data'
import { shimlaEvents } from '@/lib/shimla/analytics'

export default function FamilyHighlightsBlock() {
  const { familyHighlights } = shimlaData

  const icons: Record<string, React.ReactNode> = {
    train: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    snow: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.32 11.32l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
      </svg>
    ),
    ice: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    pace: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  }

  const handleSeePackages = () => {
    const el = document.getElementById('shimla-packages')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleToyTrainCTA = () => {
    shimlaEvents.toyTrainCtaClick()
    window.dispatchEvent(
      new CustomEvent('openLeadForm', {
        detail: { prefill: { notes: 'Interested in Kalka-Shimla Toy Train booking assistance' } },
      })
    )
  }

  return (
    <section className="py-12 md:py-16 bg-[#E8EFE6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-4">
          Shimla for the Whole Family
        </h2>
        <p className="text-center text-muted mb-12 max-w-xl mx-auto text-sm md:text-base">
          From toddlers excited by the toy train tunnels to grandparents wanting peaceful cedar walks — we curate every day for absolute safety and joy.
        </p>

        {/* 2x2 Grid of Family Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {familyHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-border-soft shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#E8EFE6] text-[#2F5233]">
                {icons[item.icon] || (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="text-base font-bold text-brand-navy mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See family packages CTA */}
        <div className="text-center mb-16">
          <button
            onClick={handleSeePackages}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2F5233] hover:underline"
          >
            See all family-friendly Shimla packages
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Toy Train Callout Full-width Row */}
        <div className="bg-[#2F5233] rounded-3xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg max-w-5xl mx-auto">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-white fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-fraunces font-bold mb-1">
                UNESCO Heritage Toy Train — We handle the booking
              </h3>
              <p className="text-sm text-white/80 max-w-xl leading-relaxed">
                Toy train tickets are notoriously difficult to secure due to high demand and manual booking gates. Leave the hassle to us — we confirm your seats.
              </p>
            </div>
          </div>
          <button
            onClick={handleToyTrainCTA}
            className="w-full md:w-auto px-6 h-12 bg-white text-[#2F5233] hover:bg-white/90 font-bold rounded-xl transition-colors whitespace-nowrap shadow-sm text-sm"
          >
            Ask about toy train
          </button>
        </div>
      </div>
    </section>
  )
}
