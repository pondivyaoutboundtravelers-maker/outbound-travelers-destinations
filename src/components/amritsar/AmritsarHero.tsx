'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { amritsarData } from '@/lib/amritsar/data'
import { amritsarEvents } from '@/lib/amritsar/analytics'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'
import { captureUTMs } from '@/lib/shared/analytics'

export default function AmritsarHero() {
  useEffect(() => {
    amritsarEvents.pageView()
    captureUTMs()
  }, [])

  const handleCTA = () => {
    amritsarEvents.heroCta(amritsarData.hero.primaryCta.label)
  }

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    amritsarEvents.heroCta(amritsarData.hero.secondaryCta.label)
    const target = document.querySelector(amritsarData.hero.secondaryCta.target)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const waUrl = buildWhatsAppUrl(amritsarData.whatsapp.number, amritsarData.whatsapp.heroMessage)

  return (
    <section className="relative w-full min-h-[80vh] bg-white flex flex-col md:flex-row overflow-hidden border-b border-border-soft">
      {/* Left Column: Editorial Copy */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-12 md:py-16 z-20">
        <div className="max-w-xl">
          <span className="inline-block text-[11px] font-bold tracking-widest text-[#A16207] uppercase mb-4">
            {amritsarData.hero.eyebrow}
          </span>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-fraunces font-bold text-brand-navy mb-5 leading-tight">
            {amritsarData.hero.headline}
          </h1>
          
          <p className="text-sm md:text-base font-inter text-muted mb-8 leading-relaxed">
            {amritsarData.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCTA}
              className="px-6 h-[52px] bg-[#A16207] hover:bg-[#A16207]/95 text-white font-bold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap text-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09.928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
              </svg>
              {amritsarData.hero.primaryCta.label}
            </a>

            <button
              onClick={handleScroll}
              className="px-6 h-[52px] border border-border-soft hover:bg-gray-50 text-brand-navy font-bold rounded-lg transition-colors text-sm"
            >
              {amritsarData.hero.secondaryCta.label}
            </button>
          </div>

          {/* Trust Chips Layout */}
          <div className="flex flex-wrap gap-2">
            {amritsarData.hero.trustChips.map((chip, idx) => (
              <span
                key={idx}
                className="inline-block bg-[#FEF3C7] text-[#A16207] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Visual Layout with Motif Backdrop */}
      <div className="flex-1 relative min-h-[350px] md:min-h-0 bg-gray-150">
        <Image
          src={amritsarData.hero.desktopImage}
          alt={amritsarData.hero.imageAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        
        {/* Soft Gold motif in absolute layout */}
        <div className="absolute bottom-6 right-6 z-20 text-white/40 w-20 h-20 pointer-events-none drop-shadow">
          <svg viewBox="0 0 80 80" fill="currentColor" className="w-full h-full">
            <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="40" y1="20" x2="40" y2="60" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M30 30 Q40 15 50 30" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M30 50 Q40 65 50 50" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="40" cy="40" r="3" fill="currentColor"/>
            <line x1="20" y1="40" x2="60" y2="40" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
