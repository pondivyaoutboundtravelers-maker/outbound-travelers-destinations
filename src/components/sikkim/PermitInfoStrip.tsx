'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function PermitInfoStrip() {
  return (
    <section className="w-full bg-[#0F766E]/5 border-y border-[#0F766E]/10 py-6 md:py-8 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-[#CCFBF1] flex items-center justify-center text-[#0F766E]">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-lg">Inner Line Permits Handled</h3>
            <p className="text-slate-600 text-sm">Required for Nathu La & North Sikkim</p>
          </div>
        </motion.div>

        <div className="hidden md:block w-px h-12 bg-[#0F766E]/20" />

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md"
        >
          <p className="text-sm text-slate-600 leading-relaxed">
            Sikkim requires specific government permits for high-altitude zones. <span className="font-semibold text-[#0F766E]">Our ground team processes all paperwork invisibly</span> before you arrive. You just need to pack your bags.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
