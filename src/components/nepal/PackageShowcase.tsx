"use client";
import React from "react";
import { motion } from "framer-motion";
import { nepalData } from "@/lib/nepal/data";
import { buildWhatsAppUrl } from "@/lib/shared/whatsapp";
import { Clock, Star, MoveRight, Crown } from "lucide-react";

const flagColors = ['border-t-[#B91C1C]', 'border-t-[#D97706]', 'border-t-[#0B3D2E]', 'border-t-[#1E40AF]'];

export default function PackageShowcase() {
  const packages = nepalData.packages;
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #052E16 0%, #0B3D2E 50%, #052E16 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D97706] font-bold">Curated Journeys</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF7F2] mt-4">Himalayan <span className="italic text-[#D97706]">Packages</span></h2>
        </motion.div>

        <div className="hidden lg:grid grid-cols-4 gap-6 items-start">
          {packages.map((pkg, idx) => {
            const heights = ['mt-0', 'mt-10', 'mt-4', 'mt-12'];
            const waUrl = buildWhatsAppUrl(nepalData.whatsapp.number, pkg.whatsappMessage);
            return (
              <motion.div key={pkg.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.12 }}
                className={`${heights[idx]} group rounded-sm overflow-hidden shadow-2xl border-t-4 ${flagColors[idx]} border-l border-r border-b border-[#D97706]/10 hover:border-[#D97706]/30 hover:shadow-[0_20px_60px_rgba(217,119,6,0.08)] hover:-translate-y-2 transition-all duration-500`}>
                <div className="relative h-[200px] overflow-hidden">
                  <img src={pkg.image} alt={pkg.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052E16] via-[#052E16]/30 to-transparent" />
                  {idx === 0 && <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#D97706] text-[#052E16] text-[9px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1"><Crown className="w-3 h-3" />Popular</div>}
                </div>
                <div className="p-6 bg-[#052E16]">
                  <div className="flex items-center gap-2 mb-2"><Clock className="w-3.5 h-3.5 text-[#D97706]" /><span className="text-[#DCE7DD]/60 text-xs">{pkg.duration}</span></div>
                  <h3 className="text-lg font-serif text-[#FAF7F2]">{pkg.name}</h3>
                  <p className="text-[#DCE7DD]/50 text-xs mt-1 italic">{pkg.idealFor}</p>
                  <div className="mt-3 space-y-1.5 max-h-0 group-hover:max-h-[180px] overflow-hidden transition-all duration-500">
                    {pkg.highlights.slice(0, 3).map((h, i) => (<div key={i} className="flex items-start gap-2"><Star className="w-3 h-3 text-[#D97706] flex-shrink-0 mt-0.5" /><span className="text-[#DCE7DD] text-xs">{h}</span></div>))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#D97706]/15 flex items-center justify-between">
                    <div><span className="text-[#DCE7DD]/40 text-[10px] uppercase tracking-wider">From</span><div className="text-[#D97706] text-xl font-serif font-bold">{pkg.price}</div></div>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-[#D97706]/10 hover:bg-[#D97706]/20 text-[#D97706] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#D97706]/20 transition-all"><MoveRight className="w-3.5 h-3.5" />Enquire</a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 no-scrollbar">
          {packages.map((pkg, idx) => {
            const waUrl = buildWhatsAppUrl(nepalData.whatsapp.number, pkg.whatsappMessage);
            return (
              <div key={pkg.id} className={`snap-start min-w-[310px] flex-shrink-0 rounded-sm overflow-hidden shadow-xl border-t-4 ${flagColors[idx]} border-l border-r border-b border-[#D97706]/10`}>
                <div className="relative h-[180px]"><img src={pkg.image} alt={pkg.alt} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#052E16] via-[#052E16]/30 to-transparent" /></div>
                <div className="p-5 bg-[#052E16]">
                  <h3 className="text-base font-serif text-[#FAF7F2]">{pkg.name}</h3>
                  <p className="text-[#DCE7DD]/60 text-xs mt-1">{pkg.duration}</p>
                  <div className="mt-3 pt-3 border-t border-[#D97706]/15 flex items-center justify-between">
                    <div className="text-[#D97706] text-lg font-serif font-bold">{pkg.price}</div>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#D97706]/15 text-[#D97706] text-xs font-semibold uppercase rounded-sm border border-[#D97706]/20">Enquire</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
