'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { keralaData } from '@/lib/kerala/data'
import { keralaEvents } from '@/lib/kerala/analytics'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'
import { captureUTMs } from '@/lib/shared/analytics'

export default function KeralaHero() {
  useEffect(() => {
    keralaEvents.pageView()
    captureUTMs()
  }, [])

  const handleCTA = () => {
    keralaEvents.heroCta(keralaData.hero.primaryCta.label)
  }

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    keralaEvents.heroCta(keralaData.hero.secondaryCta.label)
    const target = document.querySelector(keralaData.hero.secondaryCta.target)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const waUrl = buildWhatsAppUrl(keralaData.whatsapp.number, keralaData.whatsapp.heroMessage)

  return (
    <section className="relative w-full h-[95vh] flex items-end overflow-hidden bg-brand-navy">
      {/* Background Cinematic Images */}
      <div className="absolute inset-0 z-0">
        <Image
          src={keralaData.hero.desktopImage}
          alt={keralaData.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover opacity-90 scale-[1.01]"
        />
        <Image
          src={keralaData.hero.mobileImage}
          alt={keralaData.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="block md:hidden object-cover opacity-90 scale-[1.01]"
        />
        {/* Soft elegant palm-overlay vignette on top, cinematic scrim at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/35 z-10 pointer-events-none" />
      </div>

      {/* Hero Content Block */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-24 z-20 flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="max-w-2xl text-left">
          <span className="inline-block text-[11px] font-bold tracking-widest text-[#047857] bg-white/95 px-3 py-1 rounded-full uppercase mb-4 shadow-sm">
            {keralaData.hero.eyebrow}
          </span>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-fraunces font-bold text-white mb-5 leading-tight tracking-tight drop-shadow-md">
            {keralaData.hero.headline}
          </h1>
          
          <p className="text-sm md:text-base font-inter text-gray-200 mb-8 leading-relaxed max-w-xl drop-shadow-sm font-medium">
            {keralaData.hero.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCTA}
              className="px-6 h-[54px] bg-[#047857] hover:bg-[#047857]/95 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap text-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09.928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
              </svg>
              {keralaData.hero.primaryCta.label}
            </a>

            <button
              onClick={handleScroll}
              className="px-6 h-[54px] bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 rounded-xl transition-all text-sm backdrop-blur-sm"
            >
              {keralaData.hero.secondaryCta.label}
            </button>
          </div>

          {/* Trust Chips Layout */}
          <div className="flex flex-wrap gap-2.5">
            {keralaData.hero.trustChips.map((chip, idx) => (
              <span
                key={idx}
                className="inline-block bg-white/10 text-white border border-white/20 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Motif SVG on Bottom Right */}
        <div className="w-20 h-20 md:w-28 md:h-28 text-white/30 drop-shadow flex-shrink-0 self-end pointer-events-none mb-1">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Kettuvallam (houseboat) hull */}
            <path d="M10 58 Q40 54 70 58 L65 64 Q40 68 15 64 Z"
              stroke="currentColor" strokeWidth="1.5" fill="none"/>
            {/* Houseboat roof arch */}
            <path d="M20 58 Q40 44 60 58" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            {/* Palm trunk */}
            <path d="M58 56 Q60 40 56 20" stroke="currentColor" strokeWidth="1.5"/>
            {/* Palm fronds */}
            <path d="M56 20 Q44 14 36 18" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M56 20 Q50 10 62 8" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M56 20 Q66 16 68 24" stroke="currentColor" strokeWidth="1.5"/>
            {/* Water ripple */}
            <path d="M8 66 Q20 63 32 66" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
            <path d="M48 66 Q60 63 72 66" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
