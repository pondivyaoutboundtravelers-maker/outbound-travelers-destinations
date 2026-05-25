'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { lakshadweepData } from '@/lib/lakshadweep/data'
import { lakshadweepEvents } from '@/lib/lakshadweep/analytics'

export default function HoneymoonLuxuryBlock() {
  const { honeymoonyLuxury } = lakshadweepData

  useEffect(() => {
    lakshadweepEvents.conservationRulesView()
  }, [])

  const scrollToPackages = () => {
    const el = document.getElementById('lakshadweep-packages')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="bg-[#CFFAFE] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-sm">
        {/* Image (Top on mobile, left on desktop - 60%) */}
        <div className="w-full md:w-[60%] relative h-72 md:h-auto min-h-[400px]">
          <Image
            src={honeymoonyLuxury.image}
            alt="Lakshadweep Honeymoon"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
        </div>

        {/* Content (Bottom on mobile, right on desktop - 40%) */}
        <div className="w-full md:w-[40%] p-8 md:p-12 flex flex-col justify-center">
          <span className="text-[11px] font-bold tracking-widest text-[#06B6D4] uppercase block mb-3">
            Honeymoon & Luxury
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-fraunces font-bold text-brand-navy mb-4 leading-tight">
            {honeymoonyLuxury.title}
          </h2>
          <p className="text-sm text-brand-navy/80 mb-8 leading-relaxed font-medium">
            {honeymoonyLuxury.body}
          </p>

          <ul className="space-y-4 mb-8">
            {honeymoonyLuxury.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#06B6D4] mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 15c3 0 3-3 6-3s3 3 6 3 3-3 6-3v6H3v-6z" />
                  </svg>
                </span>
                <span className="text-sm font-bold text-brand-navy">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>

          <button
            onClick={scrollToPackages}
            className="w-full sm:w-auto px-6 py-3.5 bg-brand-navy hover:bg-brand-navy/90 text-white font-bold rounded-xl text-sm transition-all"
          >
            {honeymoonyLuxury.cta}
          </button>
        </div>
      </div>

      {/* Conservation Note Callout */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-4 md:p-5 flex items-start sm:items-center gap-3">
        <span className="bg-green-100 text-green-700 p-2 rounded-full flex-shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </span>
        <div>
          <h4 className="text-xs font-bold text-green-800 uppercase tracking-wider mb-1">Conservation First</h4>
          <p className="text-sm text-green-900 font-medium">
            Lakshadweep is a protected ecosystem. We brief all travelers on conservation rules before departure.
          </p>
        </div>
      </div>
    </section>
  )
}
