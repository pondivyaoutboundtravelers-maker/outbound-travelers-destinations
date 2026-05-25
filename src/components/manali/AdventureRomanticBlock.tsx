'use client'

import React from 'react'
import Image from 'next/image'
import { manaliData } from '@/lib/manali/data'
import { manaliEvents } from '@/lib/manali/analytics'

export default function AdventureRomanticBlock() {
  const { adventure, romantic } = manaliData.adventureRomantic

  const handleAdventureClick = () => {
    manaliEvents.adventureCtaClick()
    const target = document.getElementById('manali-packages')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleRomanticClick = () => {
    manaliEvents.romanticCtaClick()
    const target = document.getElementById('manali-packages')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <span className="inline-block text-[11px] font-bold tracking-widest text-[#355C7D] uppercase mb-2">
          Choose Your Vibe
        </span>
        <h2 className="text-2xl md:text-4xl font-fraunces font-bold text-brand-navy">
          One Valley, Two Distinct Journeys
        </h2>
        <p className="text-muted mt-2 text-sm md:text-base max-w-xl mx-auto">
          Whether you want high-altitude thrills with your gang or quiet mountain luxury with your spouse, we customize it.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Panel: Adventure */}
        <div className="bg-[#355C7D] text-white rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg h-full">
          <div>
            <div className="relative w-full h-[220px] md:h-[280px]">
              <Image
                src={adventure.image}
                alt="Manali adventure highlights"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-fraunces font-bold mb-4">
                {adventure.title}
              </h3>
              <ul className="space-y-3">
                {adventure.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-white text-xs mt-0.5 font-bold">
                      ✓
                    </span>
                    <span className="text-sm md:text-base text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-6 md:p-8 pt-0">
            <button
              onClick={handleAdventureClick}
              className="w-full h-12 bg-white text-[#355C7D] font-bold rounded-xl hover:bg-white/95 transition-all text-sm md:text-base"
            >
              {adventure.cta}
            </button>
          </div>
        </div>

        {/* Right Panel: Romantic */}
        <div className="bg-[#DEE5EC] text-brand-navy rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg h-full">
          <div>
            <div className="relative w-full h-[220px] md:h-[280px]">
              <Image
                src={romantic.image}
                alt="Manali romantic honeymoon highlights"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-fraunces font-bold mb-4">
                {romantic.title}
              </h3>
              <ul className="space-y-3">
                {romantic.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#355C7D]/20 flex items-center justify-center flex-shrink-0 text-[#355C7D] text-xs mt-0.5 font-bold">
                      ✓
                    </span>
                    <span className="text-sm md:text-base text-brand-navy/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-6 md:p-8 pt-0">
            <button
              onClick={handleRomanticClick}
              className="w-full h-12 bg-[#355C7D] text-white font-bold rounded-xl hover:bg-[#355C7D]/95 transition-all text-sm md:text-base"
            >
              {romantic.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
