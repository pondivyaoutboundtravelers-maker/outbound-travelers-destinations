'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { lakshadweepData } from '@/lib/lakshadweep/data'
import { lakshadweepEvents } from '@/lib/lakshadweep/analytics'
import { captureUTMs } from '@/lib/shared/analytics'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'

export default function LakshadweepHero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    lakshadweepEvents.pageView()
    captureUTMs()
  }, [])

  const { hero, whatsapp } = lakshadweepData
  const whatsappUrl = buildWhatsAppUrl(whatsapp.number, whatsapp.heroMessage)

  const handlePrimaryClick = () => {
    lakshadweepEvents.heroCta(hero.primaryCta)
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  const handleSecondaryClick = () => {
    lakshadweepEvents.whatsappClick('hero', whatsapp.heroMessage)
  }

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-end justify-center pb-16 pt-32 overflow-hidden bg-brand-navy">
      {/* Background Images */}
      {isMounted && (
        <>
          <div className="absolute inset-0 block md:hidden z-0">
            <Image
              src={hero.mobileImage}
              alt={hero.imageAlt}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 hidden md:block z-0">
            <Image
              src={hero.desktopImage}
              alt={hero.imageAlt}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </>
      )}

      {/* Scrim */}
      <div 
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 40%)' }}
      />

      {/* Motif */}
      <div className="absolute bottom-10 right-10 z-20 text-[#06B6D4] opacity-80 w-32 hidden md:block">
        <svg viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M0 40 C15 20, 30 20, 45 40 C60 60, 75 60, 90 40 C105 20, 115 25, 120 35"/>
          <path d="M0 50 C15 30, 30 30, 45 50 C60 70, 75 70, 90 50 C105 30, 115 35, 120 45" opacity="0.6"/>
          <ellipse cx="20" cy="15" rx="12" ry="6" fill="currentColor" opacity="0.3"/>
          <path d="M10 15 Q20 8 30 15" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 w-full max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-fraunces font-bold mb-4 drop-shadow-lg leading-tight">
          {hero.headline}
        </h1>
        <p className="text-sm md:text-lg text-white/95 max-w-2xl mx-auto mb-8 font-medium drop-shadow-md">
          {hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={handlePrimaryClick}
            className="w-full sm:w-auto px-8 py-4 bg-[#06B6D4] hover:bg-[#06B6D4]/90 text-white font-bold rounded-xl text-sm md:text-base shadow-lg transition-all"
          >
            {hero.primaryCta}
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSecondaryClick}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl text-sm md:text-base shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09.928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
            </svg>
            {hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  )
}
