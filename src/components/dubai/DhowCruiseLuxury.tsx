"use client";

import React from "react";
import { motion } from "framer-motion";
import { dubaiData } from "@/lib/dubai/data";
import { Ship, Heart, Star, Utensils, Music } from "lucide-react";

export default function DhowCruiseLuxury() {
  const dhow = dubaiData.dhowCruise;

  return (
    <section className="py-28 lg:py-36 relative bg-[#0F172A] overflow-hidden">
      {/* Water ripple pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q25 0 50 10 Q75 20 100 10' fill='none' stroke='%230EA5E9' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: '100px 20px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#0EA5E9] font-bold">Luxury Dinner Cruise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF7F2] mt-4">{dhow.headline}</h2>
          <p className="text-[#E7D3B3] text-base mt-4 max-w-2xl mx-auto">{dhow.subheadline}</p>
        </motion.div>

        {/* Two comparison cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {dhow.options.map((opt, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group relative overflow-hidden rounded-sm shadow-2xl border border-[#CA8A04]/10 hover:border-[#CA8A04]/30 transition-all duration-300">
              {/* Image with reflection effect */}
              <div className="relative h-[250px] overflow-hidden">
                <img src={opt.image} alt={opt.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                {/* Simulated water reflection */}
                <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#0EA5E9]/05 to-transparent mix-blend-screen" />
              </div>
              {/* Content */}
              <div className="p-7 bg-[#0F172A]">
                <div className="flex items-center gap-3 mb-3">
                  <Ship className="w-5 h-5 text-[#CA8A04]" />
                  <div>
                    <h3 className="text-lg font-serif text-[#FAF7F2]">{opt.name}</h3>
                    <p className="text-[#0EA5E9] text-xs font-semibold">{opt.location}</p>
                  </div>
                </div>
                <p className="text-[#E7D3B3]/60 text-xs italic mb-4">{opt.vibe}</p>
                <div className="space-y-2">
                  {opt.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {[<Utensils key="u" />, <Music key="m" />, <Star key="s" />, <Ship key="sh" />][i % 4]}
                      <span className="text-[#E7D3B3] text-xs">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Honeymoon quote */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 mx-auto max-w-xl text-center">
          <div className="px-6 py-5 bg-[#050816]/50 backdrop-blur-xl border border-[#CA8A04]/15 rounded-sm shadow-xl">
            <Heart className="w-5 h-5 text-[#CA8A04] mx-auto mb-3" />
            <p className="text-[#E7D3B3] text-sm italic leading-relaxed">{dhow.honeymoonQuote}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
