'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { lakshadweepData } from '@/lib/lakshadweep/data'
import { lakshadweepEvents } from '@/lib/lakshadweep/analytics'
import { Package } from '@/lib/shared/types'

export default function PackageCardsLakshadweep() {
  const [visiblePackages, setVisiblePackages] = useState<Package[]>([])

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1
    const isTurtleSeason = [11, 12, 1, 2].includes(currentMonth)
    
    const filtered = lakshadweepData.packages.filter(pkg => {
      if (pkg.seasonal && pkg.seasonMonths) {
        return isTurtleSeason
      }
      return true
    })
    setVisiblePackages(filtered)
  }, [])

  const handleCardClick = (pkgId: string, pkgName: string) => {
    lakshadweepEvents.packageClick(pkgId, pkgName)
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  return (
    <section id="lakshadweep-packages" className="py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-brand-navy">
          Popular Lakshadweep Packages
        </h2>
        <p className="text-sm text-muted mt-3">
          Fully customizable island itineraries. Entry permits and NOC included in all packages.
        </p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        {visiblePackages.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => handleCardClick(pkg.id, pkg.name)}
            className="snap-start snap-always shrink-0 w-[85vw] md:w-auto relative rounded-3xl overflow-hidden bg-brand-navy group cursor-pointer shadow-md h-[480px]"
          >
            {/* Background Image */}
            <Image
              src={pkg.image}
              alt={pkg.alt}
              fill
              sizes="(max-width: 768px) 85vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

            {/* Badges */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <div className="bg-[#06B6D4] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Permit Included
              </div>
              <div className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-[10px] font-bold px-3 py-1.5 rounded-full">
                {pkg.duration}
              </div>
            </div>

            {/* Content Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white font-fraunces font-bold text-xl mb-1 group-hover:text-[#CFFAFE] transition-colors">
                {pkg.name}
              </h3>
              <p className="text-[#CFFAFE] text-xs font-medium mb-4">
                Ideal for: {pkg.idealFor}
              </p>

              <ul className="space-y-2 mb-6">
                {pkg.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-white/90">
                    <span className="text-[#06B6D4] mt-1 text-[10px]">♦</span>
                    <span className="font-medium leading-snug">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                <span className="text-white font-bold">{pkg.price}</span>
                <button className="w-10 h-10 rounded-full bg-white text-brand-navy flex items-center justify-center group-hover:bg-[#06B6D4] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
