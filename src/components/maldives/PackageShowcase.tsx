"use client";
import React from "react";
import { motion } from "framer-motion";
import { maldivesData } from "@/lib/maldives/data";
import { buildWhatsAppUrl } from "@/lib/shared/whatsapp";
import { Clock, Star, MoveRight, Crown } from "lucide-react";

export default function PackageShowcase() {
  const packages = maldivesData.packages;
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #052E16 0%, #0B3D2E 50%, #052E16 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#06B6D4] font-bold">Curated Escapes</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF7F2] mt-4">Paradise <span className="italic text-[#06B6D4]">Packages</span></h2>
        </motion.div>

        {/* Desktop: wave-height brochure panels */}
        <div className="hidden lg:grid grid-cols-4 gap-6 items-start">
          {packages.map((pkg, idx) => {
            const heights = ['mt-0', 'mt-8', 'mt-3', 'mt-10'];
            const waUrl = buildWhatsAppUrl(maldivesData.whatsapp.number, pkg.whatsappMessage);
            return (
              <motion.div key={pkg.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.12 }}
                className={`${heights[idx]} group rounded-sm overflow-hidden shadow-2xl border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 hover:shadow-[0_20px_60px_rgba(6,182,212,0.08)] hover:-translate-y-2 transition-all duration-500`}>
                <div className="relative h-[200px] overflow-hidden">
                  <img src={pkg.image} alt={pkg.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052E16] via-[#052E16]/30 to-transparent" />
                  {idx === 0 && <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#EA580C] text-white text-[9px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1"><Crown className="w-3 h-3" />Bestseller</div>}
                </div>
                <div className="p-6 bg-[#052E16]">
                  <div className="flex items-center gap-2 mb-2"><Clock className="w-3.5 h-3.5 text-[#06B6D4]" /><span className="text-[#DCE7DD]/60 text-xs">{pkg.duration}</span></div>
                  <h3 className="text-lg font-serif text-[#FAF7F2]">{pkg.name}</h3>
                  <p className="text-[#DCE7DD]/50 text-xs mt-1 italic">{pkg.idealFor}</p>
                  <div className="mt-3 space-y-1.5 max-h-0 group-hover:max-h-[180px] overflow-hidden transition-all duration-500">
                    {pkg.highlights.slice(0, 3).map((h, i) => (<div key={i} className="flex items-start gap-2"><Star className="w-3 h-3 text-[#06B6D4] flex-shrink-0 mt-0.5" /><span className="text-[#DCE7DD] text-xs">{h}</span></div>))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#06B6D4]/15 flex items-center justify-between">
                    <div><span className="text-[#DCE7DD]/40 text-[10px] uppercase tracking-wider">From</span><div className="text-[#06B6D4] text-xl font-serif font-bold">{pkg.price}</div></div>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-[#06B6D4]/10 hover:bg-[#06B6D4]/20 text-[#06B6D4] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#06B6D4]/20 transition-all"><MoveRight className="w-3.5 h-3.5" />Enquire</a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 no-scrollbar">
          {packages.map((pkg, idx) => {
            const waUrl = buildWhatsAppUrl(maldivesData.whatsapp.number, pkg.whatsappMessage);
            return (
              <div key={pkg.id} className="snap-start min-w-[310px] flex-shrink-0 rounded-sm overflow-hidden shadow-xl border border-[#06B6D4]/10">
                <div className="relative h-[180px]"><img src={pkg.image} alt={pkg.alt} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#052E16] via-[#052E16]/30 to-transparent" /></div>
                <div className="p-5 bg-[#052E16]">
                  <h3 className="text-base font-serif text-[#FAF7F2]">{pkg.name}</h3>
                  <p className="text-[#DCE7DD]/60 text-xs mt-1">{pkg.duration}</p>
                  <div className="mt-3 pt-3 border-t border-[#06B6D4]/15 flex items-center justify-between">
                    <div className="text-[#06B6D4] text-lg font-serif font-bold">{pkg.price}</div>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#06B6D4]/15 text-[#06B6D4] text-xs font-semibold uppercase rounded-sm border border-[#06B6D4]/20">Enquire</a>
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
