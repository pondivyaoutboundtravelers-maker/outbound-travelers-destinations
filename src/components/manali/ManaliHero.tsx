'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { manaliData } from '@/lib/manali/data'
import { manaliEvents } from '@/lib/manali/analytics'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'
import { captureUTMs } from '@/lib/shared/analytics'

export default function ManaliHero() {
  useEffect(() => {
    manaliEvents.pageView()
    captureUTMs()
  }, [])

  const handleCTA = () => {
    manaliEvents.heroCta(manaliData.hero.primaryCta)
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  const handleWhatsApp = () => {
    manaliEvents.whatsappClick('hero', 'hero_cta_template')
  }

  const waUrl = buildWhatsAppUrl(manaliData.whatsapp.number, manaliData.whatsapp.heroMessage)

  return (
    <section className="relative w-full h-[85vh] md:h-[80vh] min-h-[550px] bg-brand-navy overflow-hidden">
      {/* Background Image - Mobile */}
      <div className="md:hidden absolute inset-0 z-0">
        <Image
          src={manaliData.hero.mobileImage}
          alt={manaliData.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Background Image - Desktop */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src={manaliData.hero.desktopImage}
          alt={manaliData.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Gradient Scrim Overlay */}
      <div 
        className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/35 to-transparent"
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-end pb-12 md:pb-16">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-fraunces font-bold mb-4 leading-tight">
            {manaliData.hero.headline}
          </h1>
          
          <p className="text-sm md:text-lg font-inter text-white/90 mb-8 leading-relaxed max-w-xl">
            {manaliData.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <button
              onClick={handleCTA}
              className="w-full sm:w-auto px-8 h-[52px] bg-[#355C7D] hover:bg-[#355C7D]/95 text-white font-bold rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap text-sm md:text-base"
            >
              {manaliData.hero.primaryCta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto text-white hover:text-white/80 transition-colors font-bold text-sm md:text-base text-center py-3 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current text-green-400" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09.928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
              </svg>
              Chat with our specialist
            </a>
          </div>
        </div>
      </div>

      {/* Motif Bottom Right */}
      <div className="absolute bottom-6 right-6 z-20 text-white/20 w-16 h-16 pointer-events-none hidden md:block">
        <svg viewBox="0 0 80 80" fill="currentColor" className="w-full h-full">
          <line x1="40" y1="5" x2="40" y2="75" stroke="currentColor" strokeWidth="2"/>
          <line x1="5" y1="40" x2="75" y2="40" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="12" x2="68" y2="68" stroke="currentColor" strokeWidth="2"/>
          <line x1="68" y1="12" x2="12" y2="68" stroke="currentColor" strokeWidth="2"/>
          <circle cx="40" cy="40" r="5" fill="currentColor"/>
          <circle cx="40" cy="10" r="3"/>
          <circle cx="40" cy="70" r="3"/>
          <circle cx="10" cy="40" r="3"/>
          <circle cx="70" cy="40" r="3"/>
          <circle cx="18" cy="18" r="3"/>
          <circle cx="62" cy="62" r="3"/>
          <circle cx="62" cy="18" r="3"/>
          <circle cx="18" cy="62" r="3"/>
        </svg>
      </div>
    </section>
  )
}
