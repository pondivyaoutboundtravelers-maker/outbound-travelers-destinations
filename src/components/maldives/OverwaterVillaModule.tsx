"use client";
import React from "react";
import { motion } from "framer-motion";
import { maldivesData } from "@/lib/maldives/data";
import { Star, Eye, Waves, Anchor } from "lucide-react";

const featureIcons = [<Eye className="w-5 h-5" key="e" />, <Waves className="w-5 h-5" key="w" />, <Anchor className="w-5 h-5" key="a" />];

export default function OverwaterVillaModule() {
  const villa = maldivesData.villaSection;
  return (
    <section className="py-0 relative bg-[#0B3D2E] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='30' viewBox='0 0 60 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15 Q15 5 30 15 Q45 25 60 15' fill='none' stroke='%2306B6D4' stroke-width='0.3'/%3E%3C/svg%3E")`, backgroundSize: '60px 30px' }} />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[700px]">
          {/* Left: Full-bleed villa image */}
          <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-full">
            <img src="/images/maldives/overwater.jpg" alt="Overwater villa with infinity pool" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B3D2E]/80 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/60 via-transparent to-transparent lg:hidden" />
            {/* Overlapping glassmorphism feature cards */}
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-auto lg:top-[12%] lg:right-[-60px] lg:left-auto lg:w-[320px] z-20 space-y-3">
              {villa.features.map((f, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 + idx * 0.15 }}
                  className="px-5 py-4 bg-[#052E16]/70 backdrop-blur-xl border border-[#06B6D4]/15 rounded-sm shadow-2xl group hover:border-[#06B6D4]/40 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#06B6D4]/15 flex items-center justify-center text-[#06B6D4] flex-shrink-0 mt-0.5">{featureIcons[idx]}</div>
                    <div><h4 className="text-[#FAF7F2] font-semibold text-sm">{f.title}</h4><p className="text-[#DCE7DD] text-xs mt-1 leading-relaxed">{f.detail}</p></div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Floating review */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-8 right-8 lg:bottom-[10%] lg:right-[-40px] z-30 hidden lg:block">
              <div className="px-5 py-4 bg-white/95 backdrop-blur-md shadow-2xl rounded-sm max-w-[280px] border border-[#DCE7DD]">
                <div className="flex items-center gap-1 mb-2">{Array.from({ length: villa.reviewSnippet.rating }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}</div>
                <p className="text-[#0F172A] text-xs italic leading-relaxed">&ldquo;{villa.reviewSnippet.quote}&rdquo;</p>
                <p className="text-[#475569] text-[10px] font-semibold uppercase tracking-wider mt-2">— {villa.reviewSnippet.name}</p>
              </div>
            </motion.div>
          </div>
          {/* Right: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center px-6 lg:px-12 py-16 lg:py-24 relative">
            <div className="absolute top-8 right-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[#06B6D4]/20 to-transparent hidden lg:block" />
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-xs uppercase tracking-[0.25em] text-[#06B6D4] font-bold">Paradise Living</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-serif text-[#FAF7F2] mt-4 leading-[1.15]">{villa.headline}</h2>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#DCE7DD] text-base leading-relaxed mt-6 tracking-wide">{villa.subheadline}</motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 px-5 py-4 bg-[#052E16]/50 backdrop-blur-sm border border-[#06B6D4]/15 rounded-sm">
              <p className="text-[#06B6D4] text-sm font-semibold tracking-wide text-center">{villa.stats}</p>
            </motion.div>
            <motion.button initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}
              onClick={() => window.dispatchEvent(new CustomEvent("openLeadForm"))}
              className="mt-8 self-start px-8 py-4 bg-[#06B6D4] text-[#052E16] font-semibold uppercase tracking-[0.15em] text-sm rounded-sm hover:bg-[#0EA5E9] transition-colors duration-300 shadow-lg">
              Experience Paradise Living
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
