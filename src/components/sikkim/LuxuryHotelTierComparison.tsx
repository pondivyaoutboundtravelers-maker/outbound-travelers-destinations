'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { sikkimData } from '@/lib/sikkim/data'

export default function LuxuryHotelTierComparison() {
  return (
    <section className="py-20 px-4 md:px-8 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#CCFBF1] font-bold tracking-widest uppercase text-xs">Curated Stays</span>
          <h2 className="text-3xl md:text-5xl font-fraunces font-bold mt-3 text-white">
            The Sikkim Collection
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            We only partner with properties that meet our strict standards for service, hygiene, and atmospheric luxury.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sikkimData.hotelTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#0F766E]/30 flex items-center justify-center text-[#CCFBF1] mb-6">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-fraunces font-bold mb-4">{tier.tier}</h3>
              <p className="text-slate-400 leading-relaxed mb-8 min-h-[80px]">
                {tier.description}
              </p>
              <div className="border-t border-white/10 pt-6">
                <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">Indicative Pricing</span>
                <span className="font-bold text-lg text-[#CCFBF1]">{tier.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
