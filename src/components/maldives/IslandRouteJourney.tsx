"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { maldivesData } from "@/lib/maldives/data";
import { MapPin, Clock, ChevronRight, Anchor } from "lucide-react";

export default function IslandRouteJourney() {
  const route = maldivesData.islandRoute;
  const [activeStop, setActiveStop] = useState<string | null>(null);

  return (
    <section className="py-28 lg:py-36 relative bg-[#0B3D2E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#06B6D4] font-bold">Chart Your Course</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF7F2] mt-4">{route.headline}</h2>
          <p className="text-[#DCE7DD] text-base mt-4 max-w-2xl mx-auto">{route.subheadline}</p>
        </motion.div>

        {/* Ocean wave route line */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[50px] left-[5%] right-[5%] overflow-hidden h-6">
            <svg viewBox="0 0 1000 20" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,10 Q125,0 250,10 Q375,20 500,10 Q625,0 750,10 Q875,20 1000,10" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="2" />
            </svg>
            <motion.div animate={{ x: ['0%', '100%'] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute top-[7px] left-0 w-4 h-1 bg-[#06B6D4] rounded-full blur-[1px]" />
          </div>

          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px bg-[#06B6D4]/20" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-5 pt-16 lg:pt-20">
            {route.stops.map((stop, idx) => (
              <motion.div key={stop.id} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="relative pl-14 lg:pl-0">
                <div className="lg:hidden absolute left-3.5 top-4 w-5 h-5 rounded-full bg-[#0B3D2E] border-2 border-[#06B6D4] z-10" />
                <div className="hidden lg:flex justify-center mb-4"><Anchor className="w-5 h-5 text-[#06B6D4]" /></div>
                <div onClick={() => setActiveStop(activeStop === stop.id ? null : stop.id)}
                  className={`rounded-sm overflow-hidden shadow-xl border transition-all duration-300 cursor-pointer ${activeStop === stop.id ? 'border-[#06B6D4]/40' : 'border-[#06B6D4]/10 hover:border-[#06B6D4]/25'}`}>
                  <div className="relative h-[150px] overflow-hidden">
                    <img src={stop.image} alt={stop.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#052E16] to-transparent" />
                    <div className="absolute bottom-3 left-3"><h4 className="text-[#FAF7F2] font-serif text-sm font-semibold">{stop.name}</h4></div>
                  </div>
                  <AnimatePresence>
                    {activeStop === stop.id && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="bg-[#052E16]">
                        <div className="p-4"><p className="text-[#DCE7DD] text-xs leading-relaxed">{stop.description}</p><div className="flex items-center gap-2 mt-3"><Clock className="w-3 h-3 text-[#06B6D4]" /><span className="text-[#06B6D4] text-[10px] font-semibold">{stop.travelTime}</span></div></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="p-3 bg-[#052E16] flex items-center justify-between border-t border-[#06B6D4]/10">
                    <span className="text-[#DCE7DD]/40 text-[10px] uppercase tracking-wider">Explore</span>
                    <ChevronRight className={`w-3.5 h-3.5 text-[#06B6D4] transition-transform duration-300 ${activeStop === stop.id ? 'rotate-90' : ''}`} />
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
