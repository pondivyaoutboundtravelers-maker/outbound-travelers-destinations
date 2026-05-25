"use client";

import React from "react";
import { motion } from "framer-motion";
import { dubaiData } from "@/lib/dubai/data";

export default function AtlantisThemeParks() {
  const parks = dubaiData.themeParks;
  const heroParks = parks.slice(0, 2);
  const otherParks = parks.slice(2);

  return (
    <section className="py-28 lg:py-36 relative bg-[#FAF7F2] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23CA8A04' stroke-width='0.3'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#CA8A04] font-bold">World-Class Attractions</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] mt-4">Thrills & <span className="italic text-[#B45309]">Wonders</span></h2>
          <p className="text-[#475569] text-base mt-4 max-w-2xl mx-auto">From underwater aquariums to indoor snow — Dubai packs more world-class attractions than any city on Earth.</p>
        </motion.div>

        {/* Hero panels — 2 large side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {heroParks.map((park, idx) => (
            <motion.div key={park.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.12 }}
              className="group relative h-[350px] md:h-[420px] rounded-sm overflow-hidden shadow-xl cursor-pointer">
              <img src={park.image} alt={park.name} className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/30 to-transparent group-hover:from-[#050816]/95 transition-all duration-500" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FACC15]/30 transition-all duration-500 rounded-sm" />
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#CA8A04] text-[#050816] text-[9px] font-bold uppercase tracking-wider rounded-full">{park.badge}</div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[#FACC15] text-[10px] uppercase tracking-[0.15em] font-bold">{park.tagline}</p>
                <h3 className="text-xl font-serif text-[#FAF7F2] mt-1">{park.name}</h3>
                <p className="text-[#E7D3B3]/70 text-xs mt-2 leading-relaxed max-h-0 group-hover:max-h-[80px] overflow-hidden transition-all duration-500">{park.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Staggered mosaic — remaining 5 parks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherParks.map((park, idx) => (
            <motion.div key={park.id} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-sm shadow-lg cursor-pointer ${idx === 0 ? 'sm:row-span-2' : ''}`}>
              <div className={`relative ${idx === 0 ? 'h-[250px] sm:h-full' : 'h-[220px]'} overflow-hidden`}>
                <img src={park.image} alt={park.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-[#050816]/20 to-transparent" />
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#050816]/70 backdrop-blur-md text-[#FACC15] text-[9px] font-bold uppercase tracking-wider rounded-full border border-[#CA8A04]/20">{park.badge}</div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[#FACC15] text-[9px] uppercase tracking-wider font-semibold">{park.tagline}</p>
                  <h4 className="text-[#FAF7F2] font-serif text-base font-semibold mt-0.5">{park.name}</h4>
                  <p className="text-[#E7D3B3]/60 text-xs mt-1 line-clamp-2">{park.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Neon gold accent divider */}
        <div className="flex justify-center gap-3 mt-12">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#CA8A04]/40" />
          <div className="w-2 h-2 rotate-45 bg-[#CA8A04]/40" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#CA8A04]/40" />
        </div>
      </div>
    </section>
  );
}
