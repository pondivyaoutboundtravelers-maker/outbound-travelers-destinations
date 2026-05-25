"use client";
import React from "react";
import { motion } from "framer-motion";
import { maldivesData } from "@/lib/maldives/data";

export default function OceanAdventure() {
  const exps = maldivesData.oceanExperiences;
  return (
    <section className="py-28 lg:py-36 relative bg-[#052E16] overflow-hidden">
      {/* Animated bubble particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div key={i} animate={{ y: [0, -80 - i * 20], opacity: [0, 0.15, 0] }}
          transition={{ duration: 5 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
          className="absolute rounded-full border border-[#06B6D4]/15 pointer-events-none"
          style={{ left: `${10 + i * 18}%`, bottom: '-5%', width: `${10 + i * 5}px`, height: `${10 + i * 5}px` }} />
      ))}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#06B6D4] font-bold">Dive Into Wonder</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF7F2] mt-4">Ocean <span className="italic text-[#06B6D4]">Adventures</span></h2>
          <p className="text-[#DCE7DD] text-base mt-4 max-w-2xl mx-auto">Explore the world beneath the turquoise surface — encounters that redefine wonder.</p>
        </motion.div>

        {/* Alternating full-bleed editorial blocks */}
        <div className="space-y-8">
          {exps.map((exp, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <motion.div key={exp.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-sm overflow-hidden shadow-xl border border-[#06B6D4]/10 min-h-[280px] ${isReversed ? 'direction-rtl' : ''}`}>
                <div className={`relative min-h-[250px] ${isReversed ? 'lg:col-start-7 lg:col-end-13' : 'lg:col-span-6'} group`}>
                  <img src={exp.image} alt={exp.title} className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052E16]/40 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#06B6D4] text-[#052E16] text-[9px] font-bold uppercase tracking-wider rounded-full">{exp.badge}</div>
                </div>
                <div className={`p-8 lg:p-10 bg-[#0B3D2E]/50 backdrop-blur-sm flex flex-col justify-center ${isReversed ? 'lg:col-start-1 lg:col-end-7 lg:row-start-1' : 'lg:col-span-6'}`} style={{ direction: 'ltr' }}>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#FAF7F2]">{exp.title}</h3>
                  <p className="text-[#DCE7DD] text-sm mt-3 leading-relaxed">{exp.description}</p>
                  <div className="mt-5 w-12 h-0.5 bg-gradient-to-r from-[#06B6D4] to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
