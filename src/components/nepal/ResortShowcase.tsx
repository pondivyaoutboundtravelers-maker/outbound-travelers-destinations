"use client";
import React from "react";
import { motion } from "framer-motion";
import { nepalData } from "@/lib/nepal/data";
import { Star, Crown, MoveRight } from "lucide-react";

export default function ResortShowcase() {
  const resorts = nepalData.resorts;
  const offsets = ['mt-0', 'mt-8', 'mt-3', 'mt-10'];
  return (
    <section className="py-28 lg:py-36 relative bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-bold">Mountain Retreats</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] mt-4">Himalayan <span className="italic text-[#0B3D2E]">Sanctuaries</span></h2>
        </motion.div>
        <div className="hidden lg:grid grid-cols-4 gap-6 items-start">
          {resorts.map((r, idx) => (
            <motion.div key={r.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.12 }}
              className={`${offsets[idx]} group rounded-sm overflow-hidden shadow-xl border border-[#DCE7DD] hover:border-[#D97706]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}>
              <div className="relative h-[220px] overflow-hidden">
                <img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052E16]/70 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#0B3D2E]/80 backdrop-blur-md text-[#D97706] text-[9px] font-bold uppercase tracking-wider rounded-full border border-[#D97706]/20">{r.category.split(' ').pop()}</div>
                {idx === 0 && <div className="absolute top-4 left-4 px-3 py-1 bg-[#C6A15B] text-[#052E16] text-[9px] font-bold uppercase rounded-full flex items-center gap-1"><Crown className="w-3 h-3" />Heritage</div>}
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-base font-serif text-[#0F172A] font-semibold">{r.name}</h3>
                <p className="text-[#475569] text-xs mt-1 line-clamp-2">{r.description}</p>
                <div className="mt-3 space-y-1.5 max-h-0 group-hover:max-h-[120px] overflow-hidden transition-all duration-500">
                  {r.highlights.map((h, i) => (<div key={i} className="flex items-center gap-2"><Star className="w-3 h-3 text-[#C6A15B]" /><span className="text-[#475569] text-xs">{h}</span></div>))}
                </div>
                <div className="mt-4 pt-3 border-t border-[#DCE7DD] flex items-center justify-between">
                  <span className="text-[#0B3D2E] text-xs font-semibold">{r.priceRange}</span>
                  <MoveRight className="w-4 h-4 text-[#D97706] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 no-scrollbar">
          {resorts.map(r => (
            <div key={r.id} className="snap-start min-w-[300px] flex-shrink-0 rounded-sm overflow-hidden shadow-lg border border-[#DCE7DD]">
              <div className="relative h-[180px]"><img src={r.image} alt={r.name} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#052E16]/60 to-transparent" /></div>
              <div className="p-5 bg-white"><h3 className="text-base font-serif text-[#0F172A]">{r.name}</h3><p className="text-[#475569] text-xs mt-1 line-clamp-2">{r.description}</p><p className="text-[#0B3D2E] text-xs font-semibold mt-3">{r.priceRange}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
