'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { baliData } from '@/lib/bali/data'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'
import { baliEvents } from '@/lib/bali/analytics'
import { captureUTMs } from '@/lib/shared/analytics'

export default function BaliHero() {
  const [showChevron, setShowChevron] = useState(true)

  useEffect(() => {
    // Fire analytics events on mount
    baliEvents.pageView()
    captureUTMs()

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowChevron(false)
      } else {
        setShowChevron(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleGetQuote = () => {
    baliEvents.heroCta(baliData.hero.primaryCta)
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  const handleWhatsApp = () => {
    baliEvents.whatsappClick('hero', 'hero_cta_template')
  }

  const waUrl = buildWhatsAppUrl(baliData.whatsapp.number, baliData.whatsapp.heroMessage)

  return (
    <section className="relative w-full h-[85vh] md:h-[75vh] bg-gray-900 text-white overflow-hidden">
      {/* Background Images with next/image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile image */}
        <div className="md:hidden relative w-full h-full">
          <Image
            src={baliData.hero.mobileImage}
            alt={baliData.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            onError={(e) => {
              e.currentTarget.srcset = "";
              e.currentTarget.src = "/api/placeholder?text=" + encodeURIComponent(e.currentTarget.alt || "Image");
            }}
          />
        </div>
        {/* Desktop image */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src={baliData.hero.desktopImage}
            alt={baliData.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            onError={(e) => {
              e.currentTarget.srcset = "";
              e.currentTarget.src = "/api/placeholder?text=" + encodeURIComponent(e.currentTarget.alt || "Image");
            }}
          />
        </div>
      </div>

      {/* Dark Overlay Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold mb-4 leading-tight">
            {baliData.hero.headline}
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-8 leading-relaxed opacity-90 font-inter max-w-xl">
            {baliData.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleGetQuote}
              className="w-full sm:w-auto h-[52px] px-8 bg-[#D97706] text-white hover:bg-[#D97706]/90 transition-colors font-bold rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              {baliData.hero.primaryCta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto h-[52px] px-6 bg-transparent border-2 border-white/60 hover:border-white text-white transition-colors font-bold rounded-lg flex items-center justify-center gap-2 text-sm"
            >
              {baliData.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      {/* Frangipani SVG Motif (absolute bottom-right) */}
      <div className="absolute bottom-6 right-6 z-20 w-24 h-24 text-[#D97706] opacity-30 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <ellipse cx="50" cy="20" rx="8" ry="18" transform="rotate(0 50 50)"/>
          <ellipse cx="50" cy="20" rx="8" ry="18" transform="rotate(72 50 50)"/>
          <ellipse cx="50" cy="20" rx="8" ry="18" transform="rotate(144 50 50)"/>
          <ellipse cx="50" cy="20" rx="8" ry="18" transform="rotate(216 50 50)"/>
          <ellipse cx="50" cy="20" rx="8" ry="18" transform="rotate(288 50 50)"/>
          <circle cx="50" cy="50" r="8" fill="#FEF3C7"/>
        </svg>
      </div>

      {/* Animated Scroll Chevron */}
      {showChevron && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-slow text-white/80 pointer-events-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      )}
    </section>
  )
}
