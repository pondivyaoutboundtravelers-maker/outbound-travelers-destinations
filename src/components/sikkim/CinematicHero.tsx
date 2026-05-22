'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { sikkimData } from '@/lib/sikkim/data'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'

export default function CinematicHero() {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollYProgress } = useScroll()

  // Parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const waUrl = buildWhatsAppUrl(sikkimData.whatsapp.number, sikkimData.whatsapp.heroMessage)

  return (
    <section 
      className="relative w-full h-[95vh] md:h-[90vh] bg-slate-900 text-white overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 scale-110 origin-bottom"
      >
        <div className="md:hidden relative w-full h-full">
          <Image
            src={sikkimData.hero.mobileImage}
            alt={sikkimData.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="hidden md:block relative w-full h-full">
          <Image
            src={sikkimData.hero.desktopImage}
            alt={sikkimData.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Fog / Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent" />

      {/* Floating Prayer Flags SVG Motif */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-10 left-10 md:top-20 md:left-20 z-20 w-40 h-40 text-[#CCFBF1] pointer-events-none"
      >
        <svg viewBox="0 0 100 100" fill="currentColor" className="animate-pulse">
           <path d="M10 20 L30 50 L10 80 Z M35 20 L55 50 L35 80 Z M60 20 L80 50 L60 80 Z" opacity="0.8"/>
           <path d="M5 20 Q50 30 95 20" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="absolute inset-0 z-20 flex flex-col justify-end max-w-7xl mx-auto px-4 md:px-8 pb-20 md:pb-32"
      >
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <span className="text-[#CCFBF1] text-xs md:text-sm font-bold tracking-widest uppercase bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
              Domestic · Eastern Himalaya · Mar–Jun, Sep–Dec
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-fraunces font-bold mb-6 leading-[1.1] text-white drop-shadow-lg"
          >
            {sikkimData.hero.headline}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-xl lg:text-2xl mb-10 leading-relaxed opacity-90 font-inter max-w-2xl text-slate-200"
          >
            {sikkimData.hero.subheadline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-6"
          >
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
              className="w-full sm:w-auto h-[56px] px-8 bg-[#0F766E] hover:bg-[#0d6059] text-white transition-all duration-300 font-bold rounded-lg shadow-[0_0_20px_rgba(15,118,110,0.4)] flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              {sikkimData.hero.primaryCta}
            </button>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto h-[56px] px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white transition-all duration-300 font-bold rounded-lg flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              {sikkimData.hero.secondaryCta}
            </a>
          </motion.div>
        </div>

        {/* Trust Badges Strip inside Hero for Premium feel */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 hidden md:flex items-center gap-8 border-t border-white/20 pt-8"
        >
          {sikkimData.trustBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#CCFBF1]" />
              <span className="text-sm font-medium text-slate-300 tracking-wide">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
