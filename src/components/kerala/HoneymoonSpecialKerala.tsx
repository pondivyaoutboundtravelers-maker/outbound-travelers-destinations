'use client'

import React from 'react'
import Image from 'next/image'
import { keralaData } from '@/lib/kerala/data'

const honeymoonChips = [
  'Private houseboat',
  'Candlelit deck dinner',
  'Hillside-view room Munnar',
  'Couple Ayurveda massage',
  'Late checkouts',
  'Photographer add-on Kovalam',
]

export default function HoneymoonSpecialKerala() {
  const handleCTA = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <section className="bg-[#FAF6F0] border-y border-border-soft py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left: Text */}
          <div className="flex-1 max-w-xl">
            <span className="text-[11px] font-bold tracking-widest text-[#047857] uppercase block mb-3">
              Honeymoon Special
            </span>
            <h2 className="text-2xl md:text-4xl font-fraunces font-bold text-brand-navy mb-6 leading-tight">
              {keralaData.honeymoonSpecial.title}
            </h2>

            <p className="text-base md:text-lg text-muted leading-relaxed font-medium mb-8">
              {keralaData.honeymoonSpecial.body}
            </p>

            {/* Honeymoon Differentiator Chips */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {honeymoonChips.map((chip, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 bg-white border border-[#047857]/25 text-[#047857] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm"
                >
                  <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {chip}
                </span>
              ))}
            </div>

            <button
              onClick={handleCTA}
              className="px-6 py-3.5 bg-[#047857] hover:bg-[#047857]/95 text-white font-bold rounded-xl transition-all text-sm shadow-md"
            >
              Plan our honeymoon
            </button>
          </div>

          {/* Right: Image */}
          <div className="flex-1 relative w-full h-[320px] md:h-[480px] rounded-3xl overflow-hidden shadow-md">
            <Image
              src={keralaData.honeymoonSpecial.image}
              alt={keralaData.honeymoonSpecial.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
