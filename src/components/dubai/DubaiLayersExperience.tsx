"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dubaiData } from "@/lib/dubai/data";

export default function DubaiLayersExperience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const layers = dubaiData.layers;
  const active = layers[activeIdx];

  return (
    <section className="py-28 lg:py-36 relative bg-[#FAF7F2] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23CA8A04' stroke-width='0.3'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z'/%3E%3Cpath d='M40 15L65 40L40 65L15 40Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '80px 80px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#CA8A04] font-bold">Discover Dubai</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] mt-4">Four Worlds, <span className="italic text-[#B45309]">One City</span></h2>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {layers.map((layer, idx) => (
            <button key={layer.id} onClick={() => setActiveIdx(idx)}
              className={`px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] rounded-sm transition-all duration-300 border ${activeIdx === idx ? 'bg-[#050816] text-[#FACC15] border-[#CA8A04] shadow-lg' : 'bg-white text-[#475569] border-[#E7D3B3] hover:border-[#CA8A04]/50'}`}>
              {layer.title}
            </button>
          ))}
        </div>

        {/* Active Panel */}
        <AnimatePresence mode="wait">
          <motion.div key={active.id} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-sm shadow-2xl overflow-hidden border border-[#E7D3B3]/50 min-h-[400px]">
            {/* Image */}
            <div className="lg:col-span-7 relative min-h-[300px]">
              <img src={active.image} alt={active.title} className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent lg:hidden" />
              {/* Floating stat */}
              <div className="absolute top-6 left-6 px-5 py-3 bg-[#050816]/80 backdrop-blur-xl rounded-sm shadow-xl border border-[#CA8A04]/20">
                <div className="text-2xl font-serif font-bold text-[#FACC15]">{active.stat}</div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-[#E7D3B3]">{active.statLabel}</div>
              </div>
            </div>
            {/* Content */}
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.2em] text-[#CA8A04] font-bold">{active.subtitle}</span>
              <h3 className="text-2xl lg:text-3xl font-serif text-[#0F172A] mt-3 leading-tight">{active.title}</h3>
              <p className="text-[#475569] text-sm mt-4 leading-relaxed">{active.description}</p>
              <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-[#CA8A04] to-[#B45309]" />
              {/* Side insight pills */}
              <div className="flex flex-wrap gap-2 mt-6">
                {layers.filter((_, i) => i !== activeIdx).map(l => (
                  <button key={l.id} onClick={() => setActiveIdx(layers.indexOf(l))}
                    className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-[#050816]/5 text-[#475569] hover:bg-[#050816]/10 transition-colors border border-[#E7D3B3]">
                    → {l.title}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
