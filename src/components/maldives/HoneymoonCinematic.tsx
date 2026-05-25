"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Camera } from "lucide-react";

export default function HoneymoonCinematic() {
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F5EFE2 0%, #EADFCF 50%, #F5EFE2 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#EA580C] font-bold">Romance & Luxury</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] mt-4">Your Tropical <span className="italic text-[#0B3D2E]">Love Story</span></h2>
          <p className="text-[#475569] text-base mt-4 max-w-2xl mx-auto">Private sandbank dinners, couples spa above the ocean, sunrise dolphin cruises — the world&apos;s ultimate romantic destination.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="md:col-span-7 relative group">
            <div className="relative overflow-hidden rounded-sm border-2 border-[#C6A15B]/20 shadow-xl aspect-[4/3]">
              <img src="/images/maldives/honeymoon.jpg" alt="Couple at overwater villa sunset" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052E16]/40 via-transparent to-transparent" />
              <div className="absolute top-5 left-5 px-4 py-2 bg-[#052E16]/70 backdrop-blur-md text-[#EA580C] text-[10px] font-semibold uppercase tracking-[0.2em] rounded-full border border-[#EA580C]/20">✦ #1 Honeymoon Destination</div>
            </div>
            <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-[#C6A15B] rounded-tl-sm" />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-[#C6A15B] rounded-br-sm" />
          </motion.div>
          <div className="md:col-span-5 flex flex-col gap-5 lg:gap-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.15 }}
              className="relative group flex-1">
              <div className="relative overflow-hidden rounded-sm border-2 border-[#C6A15B]/20 shadow-lg h-full min-h-[200px]">
                <img src="/images/maldives/spa.jpg" alt="Overwater spa" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052E16]/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-[#FAF7F2]"><p className="text-xs uppercase tracking-wider font-semibold">Couples Spa</p><p className="text-sm font-serif italic">Above the Ocean</p></div>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-5">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.3 }} className="relative group">
                <div className="relative overflow-hidden rounded-sm border-2 border-[#C6A15B]/20 shadow-lg aspect-square">
                  <img src="/images/maldives/sandbank.jpg" alt="Sandbank dinner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052E16]/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[#FAF7F2]"><p className="text-[10px] uppercase tracking-wider font-semibold">Sandbank</p></div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.45 }} className="relative group">
                <div className="relative overflow-hidden rounded-sm border-2 border-[#C6A15B]/20 shadow-lg aspect-square">
                  <img src="/images/maldives/dolphin.jpg" alt="Dolphin cruise" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052E16]/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[#FAF7F2]"><p className="text-[10px] uppercase tracking-wider font-semibold">Dolphins</p></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-20 -mt-12 mx-auto max-w-md">
          <div className="px-6 py-5 bg-white shadow-2xl rounded-sm border border-[#DCE7DD] flex items-start gap-4">
            <Heart className="w-6 h-6 text-[#EA580C] flex-shrink-0 mt-1" />
            <div>
              <p className="text-[#0F172A] text-sm italic leading-relaxed">&ldquo;Waking up to dolphins beneath our glass floor was the most magical moment of our lives.&rdquo;</p>
              <p className="text-[#475569] text-xs font-semibold uppercase tracking-wider mt-2">— Nisha & Arjun, Mumbai</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.8 }} className="text-center mt-12">
          <button onClick={() => window.dispatchEvent(new CustomEvent("openLeadForm"))}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0B3D2E] text-[#06B6D4] font-semibold uppercase tracking-[0.15em] text-sm rounded-sm hover:bg-[#14532D] transition-all duration-300 shadow-lg border border-[#06B6D4]/20">
            <Camera className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />Plan Your Honeymoon
          </button>
        </motion.div>
      </div>
    </section>
  );
}
