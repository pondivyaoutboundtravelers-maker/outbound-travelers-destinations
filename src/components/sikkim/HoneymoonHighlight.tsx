'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { sikkimData } from '@/lib/sikkim/data'

export default function HoneymoonHighlight() {
  const honeymoonPkg = sikkimData.packages.find(p => p.id === 'sikkim-honeymoon')

  if (!honeymoonPkg) return null

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={honeymoonPkg.image}
          alt={honeymoonPkg.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold uppercase tracking-widest text-[#0F766E] bg-[#CCFBF1] rounded-full">
              Featured Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-fraunces font-bold text-white mb-6 leading-tight">
              A Himalayan <br/><span className="text-[#CCFBF1] italic">Romance</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed font-inter">
              Escape the crowds. Wake up to Kanchenjunga outside your window, enjoy private tea estate walks, and experience candlelit dinners in boutique mountain lodges. Our honeymoon itineraries are designed for absolute privacy and cinematic beauty.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {honeymoonPkg.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0F766E]/40 flex items-center justify-center border border-[#0F766E]">
                    <svg className="w-3 h-3 text-[#CCFBF1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
              className="px-8 py-4 bg-[#CCFBF1] text-[#0F766E] font-bold rounded-xl hover:bg-white transition-colors flex items-center gap-2 group"
            >
              Plan Your Honeymoon
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
