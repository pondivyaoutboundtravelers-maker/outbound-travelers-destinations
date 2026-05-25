"use client";

import React from "react";
import { motion } from "framer-motion";
import { dubaiData } from "@/lib/dubai/data";
import { Eye, Crown, Star, Ticket } from "lucide-react";

export default function BurjKhalifaModule() {
  const burj = dubaiData.burjKhalifa;

  return (
    <section className="py-28 lg:py-36 relative bg-[#050816] overflow-hidden">
      {/* Star-field background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FAF7F2'%3E%3Ccircle cx='10' cy='20' r='0.8'/%3E%3Ccircle cx='50' cy='10' r='0.5'/%3E%3Ccircle cx='80' cy='40' r='0.6'/%3E%3Ccircle cx='30' cy='60' r='0.4'/%3E%3Ccircle cx='70' cy='80' r='0.7'/%3E%3Ccircle cx='90' cy='15' r='0.3'/%3E%3Ccircle cx='20' cy='90' r='0.5'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '100px 100px' }} />

      {/* Upward light gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-[#B45309]/08 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FACC15] font-bold">World&apos;s Tallest Tower</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-serif text-[#FAF7F2] mt-4">{burj.headline}</h2>
          <p className="text-[#E7D3B3] text-base mt-4 max-w-2xl mx-auto">{burj.subheadline}</p>
        </motion.div>

        {/* Central layout: tower image with floating cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left card: At the Top */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-4 order-2 lg:order-1">
            <div className="p-7 bg-[#0F172A]/60 backdrop-blur-2xl border border-[#CA8A04]/15 rounded-sm shadow-2xl hover:border-[#CA8A04]/40 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-5 h-5 text-[#0EA5E9]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#0EA5E9] font-bold">Standard</span>
              </div>
              <h3 className="text-xl font-serif text-[#FAF7F2]">{burj.levels[0].name}</h3>
              <p className="text-[#E7D3B3]/60 text-xs mt-1">{burj.levels[0].level}</p>
              <div className="mt-4 space-y-2.5">
                {burj.levels[0].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Star className="w-3 h-3 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E7D3B3] text-xs leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-[#CA8A04]/10 flex items-center justify-between">
                <span className="text-[#FACC15] text-lg font-serif font-bold">{burj.levels[0].price}</span>
                <Ticket className="w-4 h-4 text-[#E7D3B3]/40" />
              </div>
            </div>
          </motion.div>

          {/* Center: Tower image */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="lg:col-span-4 order-1 lg:order-2 relative">
            <div className="relative mx-auto w-[200px] sm:w-[240px] lg:w-full max-w-[280px] aspect-[1/2.5] overflow-hidden rounded-sm">
              <img src="/images/dubai/burj-khalifa.jpg" alt="Burj Khalifa at twilight" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-[#050816]/30" />
              {/* Glow effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(202,138,4,0.1)]" />
            </div>
            {/* Gold tier lines */}
            <div className="absolute top-[35%] left-0 w-[30%] h-px bg-gradient-to-r from-transparent to-[#CA8A04]/40 hidden lg:block" />
            <div className="absolute top-[25%] right-0 w-[30%] h-px bg-gradient-to-l from-transparent to-[#FACC15]/40 hidden lg:block" />
            {/* Height label */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#050816]/80 backdrop-blur-md text-[#FACC15] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-[#CA8A04]/20">
              828 Meters
            </div>
          </motion.div>

          {/* Right card: SKY Level */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-4 order-3">
            <div className="p-7 bg-[#0F172A]/60 backdrop-blur-2xl border border-[#FACC15]/20 rounded-sm shadow-[0_8px_40px_rgba(202,138,4,0.1)] hover:border-[#FACC15]/50 transition-all duration-300 group relative">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#CA8A04] text-[#050816] text-[9px] font-bold uppercase tracking-wider rounded-bl-sm rounded-tr-sm">Premium</div>
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-5 h-5 text-[#FACC15]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#FACC15] font-bold">VIP Experience</span>
              </div>
              <h3 className="text-xl font-serif text-[#FAF7F2]">{burj.levels[1].name}</h3>
              <p className="text-[#E7D3B3]/60 text-xs mt-1">{burj.levels[1].level}</p>
              <div className="mt-4 space-y-2.5">
                {burj.levels[1].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Star className="w-3 h-3 text-[#FACC15] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E7D3B3] text-xs leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-[#FACC15]/15 flex items-center justify-between">
                <span className="text-[#FACC15] text-lg font-serif font-bold">{burj.levels[1].price}</span>
                <Ticket className="w-4 h-4 text-[#FACC15]/40" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
