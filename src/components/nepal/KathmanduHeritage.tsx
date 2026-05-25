"use client";
import React from "react";
import { motion } from "framer-motion";
import { nepalData } from "@/lib/nepal/data";

export default function KathmanduHeritage() {
  const sites = nepalData.heritage;
  const heroSites = sites.slice(0, 2);
  const otherSites = sites.slice(2);
  return (
    <section className="py-28 lg:py-36 relative bg-[#0B3D2E] overflow-hidden">
      {/* Prayer wheel SVG pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='20' fill='none' stroke='%23D97706' stroke-width='0.3'/%3E%3Ccircle cx='25' cy='25' r='12' fill='none' stroke='%23D97706' stroke-width='0.3'/%3E%3Cline x1='25' y1='5' x2='25' y2='45' stroke='%23D97706' stroke-width='0.2'/%3E%3Cline x1='5' y1='25' x2='45' y2='25' stroke='%23D97706' stroke-width='0.2'/%3E%3C/svg%3E")`, backgroundSize: '50px 50px' }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D97706] font-bold">Sacred Heritage</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF7F2] mt-4">Kathmandu <span className="italic text-[#D97706]">Treasures</span></h2>
          <p className="text-[#DCE7DD] text-base mt-4 max-w-2xl mx-auto">Seven UNESCO World Heritage Sites, medieval Durbar Squares, and 1,500 years of living spiritual tradition.</p>
        </motion.div>

        {/* 2 hero panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {heroSites.map((s, idx) => (
            <motion.div key={s.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.12 }}
              className="group relative h-[320px] md:h-[380px] rounded-sm overflow-hidden shadow-xl cursor-pointer">
              <img src={s.image} alt={s.name} className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052E16]/90 via-[#052E16]/30 to-transparent" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D97706]/30 rounded-sm transition-all duration-500" />
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#B91C1C] text-white text-[9px] font-bold uppercase tracking-wider rounded-full">{s.badge}</div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-serif text-[#FAF7F2]">{s.name}</h3>
                <p className="text-[#DCE7DD]/70 text-xs mt-2 leading-relaxed max-h-0 group-hover:max-h-[80px] overflow-hidden transition-all duration-500">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3 smaller panels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {otherSites.map((s, idx) => (
            <motion.div key={s.id} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group relative h-[240px] rounded-sm overflow-hidden shadow-lg cursor-pointer">
              <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052E16]/80 via-[#052E16]/20 to-transparent" />
              <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#052E16]/70 backdrop-blur-md text-[#D97706] text-[9px] font-bold uppercase tracking-wider rounded-full border border-[#D97706]/20">{s.badge}</div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-[#FAF7F2] font-serif text-sm font-semibold">{s.name}</h4>
                <p className="text-[#DCE7DD]/60 text-xs mt-1 line-clamp-2">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prayer wheel decorative divider */}
        <div className="flex justify-center gap-3 mt-12">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D97706]/40" />
          <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#D97706]/40"><circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1" /><circle cx="10" cy="10" r="3" fill="currentColor" /></svg>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D97706]/40" />
        </div>
      </div>
    </section>
  );
}
