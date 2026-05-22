'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { sikkimData } from '@/lib/sikkim/data'

export default function WhyVisitSikkim() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'specialist':
        return (
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        )
      case 'verified':
        return (
          <svg className="w-8 h-8 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'southindia':
        return (
          <svg className="w-8 h-8 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0F766E] font-bold tracking-widest uppercase text-xs">The Outbound Travelers Standard</span>
          <h2 className="text-3xl md:text-5xl font-fraunces font-bold mt-3 text-slate-900">
            Why Plan Sikkim With Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {sikkimData.whyVisit.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-[#CCFBF1] transition-colors group"
            >
              <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center text-[#0F766E] mb-6 group-hover:bg-[#0F766E] group-hover:text-white transition-colors">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-bold font-fraunces text-slate-900 mb-4 leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
