'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { shimlaData } from '@/lib/shimla/data'
import { shimlaEvents } from '@/lib/shimla/analytics'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'
import { captureUTMs } from '@/lib/shared/analytics'

export default function ShimlaHero() {
  useEffect(() => {
    shimlaEvents.pageView()
    captureUTMs()
  }, [])

  const handleCTA = () => {
    shimlaEvents.heroCta(shimlaData.hero.primaryCta)
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  const handleWhatsApp = () => {
    shimlaEvents.whatsappClick('hero', 'hero_cta_template')
  }

  const waUrl = buildWhatsAppUrl(shimlaData.whatsapp.number, shimlaData.whatsapp.heroMessage)

  return (
    <section className="relative w-full bg-cream overflow-hidden">
      {/* Desktop Layout: Split 60/40 */}
      {/* Mobile Layout: Stacked */}
      <div className="flex flex-col md:flex-row min-h-[600px] md:min-h-[70vh]">
        {/* Left Image (60% width on Desktop, full width on Mobile) */}
        <div className="relative w-full md:w-[60%] h-[350px] md:h-auto min-h-[350px] bg-gray-200">
          {/* Mobile Image */}
          <div className="md:hidden relative w-full h-full">
            <Image
              src={shimlaData.hero.mobileImage}
              alt={shimlaData.hero.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {/* Desktop Image */}
          <div className="hidden md:block relative w-full h-full">
            <Image
              src={shimlaData.hero.desktopImage}
              alt={shimlaData.hero.imageAlt}
              fill
              priority
              sizes="60vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content Block (40% width on Desktop) */}
        <div className="w-full md:w-[40%] bg-cream px-6 py-10 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border-soft">
          <div className="max-w-md mx-auto md:mx-0">
            {/* Pine Cone Motif */}
            <div className="text-[#2F5233] w-10 h-12 mb-6">
              <svg viewBox="0 0 60 80" fill="currentColor" className="w-full h-full">
                <ellipse cx="30" cy="70" rx="8" ry="10"/>
                <ellipse cx="30" cy="55" rx="11" ry="8"/>
                <ellipse cx="30" cy="42" rx="13" ry="8"/>
                <ellipse cx="30" cy="29" rx="12" ry="7"/>
                <ellipse cx="30" cy="17" rx="9" ry="6"/>
                <ellipse cx="30" cy="7" rx="5" ry="4"/>
              </svg>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-fraunces font-bold text-[#2F5233] mb-4 leading-tight">
              {shimlaData.hero.headline}
            </h1>
            
            <p className="text-sm md:text-base text-muted font-inter mb-8 leading-relaxed">
              {shimlaData.hero.subheadline}
            </p>

            {/* Quick Stats 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8 bg-white p-5 rounded-2xl border border-border-soft">
              {shimlaData.hero.quickStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[10px] font-bold text-muted uppercase tracking-wider mb-0.5">
                    {stat.label}
                  </span>
                  <span className="text-sm font-bold text-brand-navy">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4">
              <button
                onClick={handleCTA}
                className="w-full h-[52px] bg-[#2F5233] hover:bg-[#2F5233]/90 text-white font-bold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
              >
                {shimlaData.hero.primaryCta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
                className="text-[#2F5233] hover:underline font-bold text-sm text-center block mt-2"
              >
                {shimlaData.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
