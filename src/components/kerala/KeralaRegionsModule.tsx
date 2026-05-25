'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { keralaData } from '@/lib/kerala/data'
import { keralaEvents } from '@/lib/kerala/analytics'

export default function KeralaRegionsModule() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleRegionClick = (regionId: string) => {
    keralaEvents.regionClicked(regionId)
  }

  const handleAddToTrip = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[11px] font-bold tracking-widest text-[#047857] uppercase block mb-3">
          Six Distinct Moods
        </span>
        <h2 className="text-2xl md:text-4xl font-fraunces font-bold text-brand-navy">
          Explore Kerala by Region
        </h2>
        <p className="text-muted mt-3 text-sm md:text-base leading-relaxed">
          Build your own circuit. Each region is a different Kerala — and they all connect into one slow, unhurried journey.
        </p>
      </div>

      {/* Mobile: horizontal scroll carousel */}
      <div
        ref={scrollRef}
        className="md:hidden flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-4"
      >
        {keralaData.regions.map((region) => (
          <div
            key={region.id}
            onClick={() => handleRegionClick(region.id)}
            className="flex-shrink-0 w-64 bg-white border border-border-soft rounded-2xl overflow-hidden shadow-sm cursor-pointer hover:border-[#047857]/40 hover:shadow-md transition-all"
          >
            <div className="relative w-full h-40">
              <Image
                src={region.image}
                alt={region.imageAlt}
                fill
                sizes="256px"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-fraunces font-bold text-brand-navy text-base leading-tight">
                  {region.name}
                </h3>
                <span className="bg-[#FAF6F0] text-[#047857] text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap border border-[#047857]/20">
                  {region.idealFor.split(',')[0]}
                </span>
              </div>
              <p className="text-xs text-muted mb-3 leading-snug">{region.description}</p>
              <ul className="space-y-1 mb-4">
                {region.topThree.map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-xs text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#047857] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={(e) => { e.stopPropagation(); handleAddToTrip() }}
                className="w-full h-9 text-xs font-bold text-[#047857] border border-[#047857]/30 rounded-xl hover:bg-[#047857] hover:text-white transition-all"
              >
                Add to my trip →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: 3×2 grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {keralaData.regions.map((region) => (
          <div
            key={region.id}
            onClick={() => handleRegionClick(region.id)}
            className="bg-white border border-border-soft rounded-2xl overflow-hidden shadow-sm cursor-pointer hover:border-[#047857]/40 hover:shadow-md transition-all group"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={region.image}
                alt={region.imageAlt}
                fill
                sizes="33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-fraunces font-bold text-brand-navy text-lg leading-tight">
                  {region.name}
                </h3>
                <span className="bg-[#FAF6F0] text-[#047857] text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap border border-[#047857]/20 flex-shrink-0 mt-1">
                  {region.idealFor}
                </span>
              </div>
              <p className="text-sm text-muted mb-4 leading-snug">{region.description}</p>
              <ul className="space-y-1.5 mb-5">
                {region.topThree.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#047857] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={(e) => { e.stopPropagation(); handleAddToTrip() }}
                className="w-full h-10 text-sm font-bold text-[#047857] border border-[#047857]/30 rounded-xl hover:bg-[#047857] hover:text-white transition-all"
              >
                Add to my trip →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
