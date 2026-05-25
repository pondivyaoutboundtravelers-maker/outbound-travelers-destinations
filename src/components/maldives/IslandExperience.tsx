"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { maldivesData } from "@/lib/maldives/data";

export default function IslandExperience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const layers = maldivesData.layers;
  const active = layers[activeIdx];

  return (
    <section className="py-28 lg:py-36 relative bg-[#FAF7F2] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='40' viewBox='0 0 80 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q20 5 40 20 Q60 35 80 20' fill='none' stroke='%2306B6D4' stroke-width='0.3'/%3E%3C/svg%3E")`, backgroundSize: '80px 40px' }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#06B6D4] font-bold">Discover Paradise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] mt-4">Five Worlds of <span className="italic text-[#0B3D2E]">Island Luxury</span></h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {layers.map((layer, idx) => (
            <button key={layer.id} onClick={() => setActiveIdx(idx)}
              className={`px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] rounded-sm transition-all duration-300 border ${activeIdx === idx ? 'bg-[#0B3D2E] text-[#06B6D4] border-[#0B3D2E] shadow-lg' : 'bg-white text-[#475569] border-[#DCE7DD] hover:border-[#06B6D4]/40'}`}>
              {layer.title.split(' ').pop()}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active.id} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-sm shadow-2xl overflow-hidden border border-[#DCE7DD]/50 min-h-[400px]">
            <div className="lg:col-span-7 relative min-h-[300px]">
              <img src={active.image} alt={active.title} className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent lg:hidden" />
              <div className="absolute top-6 left-6 px-5 py-3 bg-[#052E16]/80 backdrop-blur-xl rounded-sm shadow-xl border border-[#06B6D4]/20">
                <div className="text-2xl font-serif font-bold text-[#06B6D4]">{active.stat}</div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-[#DCE7DD]">{active.statLabel}</div>
              </div>
            </div>
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.2em] text-[#06B6D4] font-bold">{active.subtitle}</span>
              <h3 className="text-2xl lg:text-3xl font-serif text-[#0F172A] mt-3 leading-tight">{active.title}</h3>
              <p className="text-[#475569] text-sm mt-4 leading-relaxed">{active.description}</p>
              <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-[#06B6D4] to-[#0B3D2E]" />
              <div className="flex flex-wrap gap-2 mt-6">
                {layers.filter((_, i) => i !== activeIdx).map(l => (
                  <button key={l.id} onClick={() => setActiveIdx(layers.indexOf(l))} className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-[#0B3D2E]/5 text-[#475569] hover:bg-[#0B3D2E]/10 border border-[#DCE7DD]">→ {l.title.split(' ').pop()}</button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
