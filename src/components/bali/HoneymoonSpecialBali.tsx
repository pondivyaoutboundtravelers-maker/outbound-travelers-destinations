'use client'

import React from 'react'
import Image from 'next/image'

export default function HoneymoonSpecialBali() {
  const highlights = [
    'Private pool villa in Ubud or Seminyak',
    'Couples spa with traditional Balinese treatments',
    'Clifftop candlelit dinner',
    'Half-day photography session',
  ]

  return (
    <section id="honeymoon" className="bg-[#FEF3C7] py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Left Side: Image */}
        <div className="w-full md:w-[45%] relative h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="https://picsum.photos/seed/bali-honeymoon-feature/800/600"
            alt="Bali honeymoon private pool villa"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            onError={(e) => {
              e.currentTarget.srcset = "";
              e.currentTarget.src = "/api/placeholder?text=" + encodeURIComponent(e.currentTarget.alt || "Image");
            }}
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-[55%] flex flex-col items-start text-left">
          <span className="inline-block bg-[#D97706] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded mb-3 tracking-wider">
            Honeymoon Special
          </span>
          <h2 className="text-3xl md:text-4xl font-fraunces font-bold text-brand-navy mb-4 leading-tight">
            Bali for the Two of You
          </h2>
          <p className="text-sm md:text-base text-muted leading-relaxed mb-6 font-inter">
            A private pool villa hidden in the Ubud jungle. A couples spa with flower bath and rice scrub. A candlelit dinner on a clifftop above the Indian Ocean. A photographer for your golden hour at Tegallalang. Tell us what your honeymoon should feel like — we&apos;ll design it around that.
          </p>

          {/* Bullet points with heart icon */}
          <ul className="space-y-3 mb-8 w-full">
            {highlights.map((h, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm md:text-base text-brand-navy font-semibold">
                <span className="text-red-500 flex-shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </span>
                {h}
              </li>
            ))}
          </ul>

          <a
            href="#bali-packages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#D97706] hover:bg-[#D97706]/95 text-white transition-colors font-bold rounded-lg shadow-sm text-sm"
          >
            See honeymoon packages
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
