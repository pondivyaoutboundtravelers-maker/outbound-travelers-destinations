"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dubaiData } from "@/lib/dubai/data";
import { MapPin, Clock, ChevronRight } from "lucide-react";

export default function AbuDhabiJourney() {
  const abu = dubaiData.abuDhabi;
  const [activeStop, setActiveStop] = useState<string | null>(null);

  return (
    <section className="py-28 lg:py-36 relative bg-[#050816] overflow-hidden">
      {/* Subtle highway light streaks */}
      <div className="absolute top-0 left-[20%] w-[60%] h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/10 to-transparent" />
      <div className="absolute top-[30%] left-[10%] w-[80%] h-px bg-gradient-to-r from-transparent via-[#CA8A04]/05 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#0EA5E9] font-bold">Connected Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF7F2] mt-4">{abu.headline}</h2>
          <p className="text-[#E7D3B3] text-base mt-4 max-w-2xl mx-auto">{abu.subheadline}</p>
        </motion.div>

        {/* Floating travel duration badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#0F172A]/60 backdrop-blur-xl border border-[#0EA5E9]/20 rounded-full shadow-xl">
            <Clock className="w-4 h-4 text-[#0EA5E9]" />
            <span className="text-[#FAF7F2] text-sm font-semibold">{abu.travelTime}</span>
            <div className="w-8 h-px bg-gradient-to-r from-[#CA8A04] to-[#0EA5E9]" />
            <span className="text-[#E7D3B3] text-xs">Dubai → Abu Dhabi</span>
          </div>
        </motion.div>

        {/* Route visualization with animated pulse */}
        <div className="relative">
          {/* Horizontal route line — desktop */}
          <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-px bg-[#CA8A04]/20" />
          <motion.div animate={{ x: ['0%', '100%'] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="hidden lg:block absolute top-[49px] left-[10%] w-4 h-0.5 bg-[#FACC15] rounded-full blur-[1px] z-10" />

          {/* Vertical route line — mobile */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px bg-[#CA8A04]/20" />

          {/* Destination nodes */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4">
            {abu.stops.map((stop, idx) => (
              <motion.div key={stop.id} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="relative pl-14 lg:pl-0">
                {/* Node circle — mobile */}
                <div className="lg:hidden absolute left-3.5 top-4 w-5 h-5 rounded-full bg-[#050816] border-2 border-[#CA8A04] z-10" />

                {/* Node circle — desktop */}
                <div className="hidden lg:flex justify-center mb-4">
                  <motion.div whileHover={{ scale: 1.2 }} className="w-6 h-6 rounded-full bg-[#050816] border-2 border-[#CA8A04] cursor-pointer relative z-10 hover:border-[#FACC15] transition-colors" />
                </div>

                {/* Card */}
                <div onClick={() => setActiveStop(activeStop === stop.id ? null : stop.id)}
                  className={`p-0 rounded-sm overflow-hidden shadow-xl border transition-all duration-300 cursor-pointer ${activeStop === stop.id ? 'border-[#FACC15]/40 shadow-[0_0_30px_rgba(202,138,4,0.1)]' : 'border-[#CA8A04]/10 hover:border-[#CA8A04]/25'}`}>
                  <div className="relative h-[160px] overflow-hidden">
                    <img src={stop.image} alt={stop.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h4 className="text-[#FAF7F2] font-serif text-sm font-semibold leading-tight">{stop.name}</h4>
                    </div>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence>
                    {activeStop === stop.id && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                        className="bg-[#0F172A]">
                        <div className="p-4">
                          <p className="text-[#E7D3B3]/70 text-xs leading-relaxed">{stop.description}</p>
                          <div className="flex items-center gap-2 mt-3">
                            <MapPin className="w-3 h-3 text-[#0EA5E9]" />
                            <span className="text-[#0EA5E9] text-[10px] font-semibold">{stop.travelTime}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand indicator */}
                  <div className="p-3 bg-[#0F172A] flex items-center justify-between border-t border-[#CA8A04]/10">
                    <span className="text-[#E7D3B3]/40 text-[10px] uppercase tracking-wider">Details</span>
                    <ChevronRight className={`w-3.5 h-3.5 text-[#CA8A04] transition-transform duration-300 ${activeStop === stop.id ? 'rotate-90' : ''}`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
