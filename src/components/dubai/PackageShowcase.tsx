"use client";

import React from "react";
import { motion } from "framer-motion";
import { dubaiData } from "@/lib/dubai/data";
import { buildWhatsAppUrl } from "@/lib/shared/whatsapp";
import { Clock, Star, MoveRight, Crown } from "lucide-react";

export default function PackageShowcase() {
  const packages = dubaiData.packages;

  return (
    <section className="py-28 lg:py-36 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0F172A 0%, #050816 50%, #0F172A 100%)' }}>
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23CA8A04' stroke-width='0.3'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3Cpath d='M30 10L50 30L30 50L10 30Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FACC15] font-bold">Luxury Itineraries</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF7F2] mt-4">Curated <span className="italic bg-gradient-to-r from-[#FACC15] to-[#CA8A04] bg-clip-text text-transparent">Journeys</span></h2>
        </motion.div>

        {/* Desktop: Overlapping cards with 3D depth */}
        <div className="hidden lg:grid grid-cols-4 gap-6 items-start">
          {packages.map((pkg, idx) => {
            const offsets = ['mt-0', 'mt-8', 'mt-2', 'mt-10'];
            const waUrl = buildWhatsAppUrl(dubaiData.whatsapp.number, pkg.whatsappMessage);

            return (
              <motion.div key={pkg.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.12 }}
                className={`${offsets[idx]} group relative rounded-sm overflow-hidden shadow-2xl border border-[#CA8A04]/10 hover:border-[#FACC15]/40 hover:shadow-[0_20px_60px_rgba(202,138,4,0.12)] transition-all duration-500 hover:-translate-y-2`}>
                <div className="relative h-[220px] overflow-hidden">
                  <img src={pkg.image} alt={pkg.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />
                  {idx === 0 && (
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#CA8A04] text-[#050816] text-[9px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                      <Crown className="w-3 h-3" /> Most Popular
                    </div>
                  )}
                </div>
                <div className="p-6 bg-[#050816]">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-3.5 h-3.5 text-[#CA8A04]" />
                    <span className="text-[#E7D3B3]/60 text-xs font-semibold">{pkg.duration}</span>
                  </div>
                  <h3 className="text-lg font-serif text-[#FAF7F2]">{pkg.name}</h3>
                  <p className="text-[#E7D3B3]/50 text-xs mt-1 italic">{pkg.idealFor}</p>
                  <div className="mt-3 space-y-1.5 max-h-0 group-hover:max-h-[180px] overflow-hidden transition-all duration-500">
                    {pkg.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Star className="w-3 h-3 text-[#FACC15] flex-shrink-0 mt-0.5" />
                        <span className="text-[#E7D3B3] text-xs">{h}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#CA8A04]/15 flex items-center justify-between">
                    <div>
                      <span className="text-[#E7D3B3]/40 text-[10px] uppercase tracking-wider">From</span>
                      <div className="text-[#FACC15] text-xl font-serif font-bold">{pkg.price}</div>
                    </div>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-[#CA8A04]/10 hover:bg-[#CA8A04]/20 text-[#FACC15] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#CA8A04]/20 transition-all duration-300">
                      <MoveRight className="w-3.5 h-3.5" /> Enquire
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Snap scroll */}
        <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 no-scrollbar">
          {packages.map((pkg, idx) => {
            const waUrl = buildWhatsAppUrl(dubaiData.whatsapp.number, pkg.whatsappMessage);
            return (
              <motion.div key={pkg.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="snap-start min-w-[320px] flex-shrink-0 rounded-sm overflow-hidden shadow-xl border border-[#CA8A04]/10">
                <div className="relative h-[200px]">
                  <img src={pkg.image} alt={pkg.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />
                  {idx === 0 && <div className="absolute top-4 right-4 px-3 py-1 bg-[#CA8A04] text-[#050816] text-[9px] font-bold uppercase rounded-full">Most Popular</div>}
                </div>
                <div className="p-6 bg-[#050816]">
                  <div className="flex items-center gap-2 mb-2"><Clock className="w-3.5 h-3.5 text-[#CA8A04]" /><span className="text-[#E7D3B3]/60 text-xs">{pkg.duration}</span></div>
                  <h3 className="text-lg font-serif text-[#FAF7F2]">{pkg.name}</h3>
                  {pkg.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 mt-2"><Star className="w-3 h-3 text-[#FACC15] flex-shrink-0 mt-0.5" /><span className="text-[#E7D3B3] text-xs">{h}</span></div>
                  ))}
                  <div className="mt-4 pt-3 border-t border-[#CA8A04]/15 flex items-center justify-between">
                    <div className="text-[#FACC15] text-xl font-serif font-bold">{pkg.price}</div>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#CA8A04]/15 text-[#FACC15] text-xs font-semibold uppercase rounded-sm border border-[#CA8A04]/20">Enquire</a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
