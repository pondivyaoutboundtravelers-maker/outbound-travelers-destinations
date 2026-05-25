'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { keralaData } from '@/lib/kerala/data'
import { keralaEvents } from '@/lib/kerala/analytics'

export default function HouseboatModule() {
  const [selectedTier, setSelectedTier] = useState<string>('Standard 1BHK')

  useEffect(() => {
    keralaEvents.houseboatModuleViewed()
  }, [])

  const activeTier = keralaData.houseboatModule.tiers.find((t) => t.tier === selectedTier)

  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[11px] font-bold tracking-widest text-[#047857] uppercase block mb-3">
          Houseboat Curated
        </span>
        <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
          {keralaData.houseboatModule.title}
        </h2>
        <p className="text-sm text-muted mt-2 leading-relaxed">
          {keralaData.houseboatModule.subtitle}
        </p>
      </div>

      {/* 3-tier houseboat cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {keralaData.houseboatModule.tiers.map((tier) => {
          const isSelected = selectedTier === tier.tier
          return (
            <button
              key={tier.tier}
              onClick={() => setSelectedTier(tier.tier)}
              className={`text-left rounded-2xl overflow-hidden border-2 transition-all focus:outline-none ${
                isSelected
                  ? 'border-[#047857] shadow-md ring-1 ring-[#047857]/20'
                  : 'border-border-soft hover:border-[#047857]/40 hover:shadow-sm'
              }`}
            >
              <div className="relative w-full h-44 bg-gray-100">
                <Image
                  src={tier.image}
                  alt={tier.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                {isSelected && (
                  <div className="absolute top-3 right-3 bg-[#047857] text-white text-[9px] font-bold px-2.5 py-1 rounded-full">
                    Selected
                  </div>
                )}
              </div>
              <div className={`p-4 ${isSelected ? 'bg-[#FAF6F0]' : 'bg-white'}`}>
                <h3 className="font-bold text-brand-navy font-fraunces text-base mb-2">{tier.tier}</h3>
                <p className="text-xs text-muted leading-snug mb-3">{tier.includes}</p>
                <span className="text-sm font-bold text-[#047857]">{tier.price}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Private vs Shared callout */}
      <div className="bg-[#FAF6F0] border border-[#047857]/20 rounded-2xl p-6 md:p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#047857] text-white flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-brand-navy font-fraunces text-base mb-2">
              Why private vs shared?
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              For honeymooners we exclusively book private houseboats. Shared houseboats are used for solo travelers or groups wanting lower pricing. The crew, food quality, and boat maintenance we check ourselves — not based on third-party reviews.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
          className="px-6 py-3.5 bg-[#047857] hover:bg-[#047857]/95 text-white font-bold rounded-xl text-sm shadow-md transition-all"
        >
          Select houseboat in my quote
        </button>
      </div>
    </section>
  )
}
