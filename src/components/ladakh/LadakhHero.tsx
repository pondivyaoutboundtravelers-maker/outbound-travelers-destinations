'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ladakhData } from '@/lib/ladakh/data'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'
import { ladakhEvents } from '@/lib/ladakh/analytics'
import { captureUTMs } from '@/lib/shared/analytics'

export default function LadakhHero() {
  const [showChevron, setShowChevron] = useState(true)

  useEffect(() => {
    ladakhEvents.pageView()
    captureUTMs()

    const handleScroll = () => {
      setShowChevron(window.scrollY <= 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleGetQuote = () => {
    ladakhEvents.heroCta(ladakhData.hero.primaryCta)
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  const handleWhatsApp = () => {
    ladakhEvents.whatsappClick('hero', 'hero_cta_template')
  }

  const waUrl = buildWhatsAppUrl(ladakhData.whatsapp.number, ladakhData.whatsapp.heroMessage)

  return (
    <section className="relative w-full h-[85vh] md:h-[75vh] bg-gray-900 text-white overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="md:hidden relative w-full h-full">
          <Image
            src={ladakhData.hero.mobileImage}
            alt={ladakhData.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="hidden md:block relative w-full h-full">
          <Image
            src={ladakhData.hero.desktopImage}
            alt={ladakhData.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold mb-4 leading-tight">
            {ladakhData.hero.headline}
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-8 leading-relaxed opacity-90 font-inter max-w-xl">
            {ladakhData.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleGetQuote}
              className="w-full sm:w-auto h-[52px] px-8 bg-brand-cta text-white hover:bg-brand-cta/90 transition-colors font-bold rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              {ladakhData.hero.primaryCta}
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
              {ladakhData.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      {/* Prayer Flag SVG Motif */}
      <div className="absolute bottom-6 right-6 z-20 opacity-25 pointer-events-none">
        <svg viewBox="0 0 120 40" width="120" height="40">
          <line x1="0" y1="5" x2="120" y2="5" stroke="white" strokeWidth="1"/>
          <rect x="5" y="0" width="15" height="12" fill="#DC2626" opacity="0.8"/>
          <rect x="25" y="0" width="15" height="12" fill="#FFFFFF" opacity="0.8"/>
          <rect x="45" y="0" width="15" height="12" fill="#1F3A8A" opacity="0.8"/>
          <rect x="65" y="0" width="15" height="12" fill="#16A34A" opacity="0.8"/>
          <rect x="85" y="0" width="15" height="12" fill="#D97706" opacity="0.8"/>
          <rect x="105" y="0" width="15" height="12" fill="#DC2626" opacity="0.8"/>
        </svg>
      </div>

      {/* Scroll Chevron */}
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
