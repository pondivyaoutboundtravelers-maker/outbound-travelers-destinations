"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { kashmirData } from '@/lib/kashmir/data'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'
import { kashmirEvents } from '@/lib/kashmir/analytics'
import { captureUTMs } from '@/lib/shared/analytics'

export default function KashmirHero() {
  const [showChevron, setShowChevron] = useState(true)

  useEffect(() => {
    // Fire analytics events on mount
    kashmirEvents.pageView()
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
    kashmirEvents.heroCta(kashmirData.hero.primaryCta)
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  const handleWhatsApp = () => {
    kashmirEvents.whatsappClick('hero', 'hero_cta_template')
  }

  const waUrl = buildWhatsAppUrl(kashmirData.whatsapp.number, kashmirData.whatsapp.heroMessage)

  return (
    <section className="relative w-full h-[85vh] md:h-[75vh] bg-gray-900 text-white overflow-hidden">
      {/* Background Images with next/image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile image */}
        <div className="md:hidden relative w-full h-full">
          <Image
            src={kashmirData.hero.mobileImage}
            alt={kashmirData.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Desktop image */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src={kashmirData.hero.desktopImage}
            alt={kashmirData.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Dark Overlay Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold mb-4 leading-tight">
            {kashmirData.hero.headline}
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-8 leading-relaxed opacity-90 font-inter max-w-xl">
            {kashmirData.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleGetQuote}
              className="w-full sm:w-auto h-[52px] px-8 bg-brand-cta text-white hover:bg-brand-cta/90 transition-colors font-bold rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              {kashmirData.hero.primaryCta}
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
              {kashmirData.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      {/* Chinar Leaf SVG Motif (absolute bottom-right) */}
      <div className="absolute bottom-6 right-6 z-20 w-24 h-24 text-kashmir-accent opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5 C30 15, 10 30, 15 50 C20 65, 35 70, 50 95 C65 70, 80 65, 85 50 C90 30, 70 15, 50 5 Z M50 20 C40 30, 30 40, 35 52 C40 62, 50 65, 50 80 C50 65, 60 62, 65 52 C70 40, 60 30, 50 20 Z" />
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
