"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nepalData } from "@/lib/nepal/data";
import { Mountain, Clock, ChevronRight, MapPin } from "lucide-react";

export default function NepalRouteJourney() {
  const route = nepalData.routeJourney;
  const [activeStop, setActiveStop] = useState<string | null>(null);
  return (
    <section className="py-28 lg:py-36 relative bg-[#0B3D2E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D97706] font-bold">Your Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF7F2] mt-4">{route.headline}</h2>
          <p className="text-[#DCE7DD] text-base mt-4 max-w-2xl mx-auto">{route.subheadline}</p>
        </motion.div>

        <div className="relative">
          {/* Mountain ridge route line */}
          <div className="hidden lg:block absolute top-[50px] left-[3%] right-[3%] overflow-hidden h-8">
            <svg viewBox="0 0 1000 25" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,15 L100,12 L180,8 L220,18 L300,5 L350,12 L420,15 L500,3 L560,10 L650,8 L720,18 L800,6 L860,12 L940,10 L1000,15" fill="none" stroke="rgba(217,119,6,0.25)" strokeWidth="2" />
            </svg>
            <motion.div animate={{ x: ['0%', '100%'] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-[10px] left-0 w-3 h-3 bg-[#D97706] rounded-full blur-[1px] shadow-lg" />
          </div>
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px bg-[#D97706]/20" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 pt-16 lg:pt-20">
            {route.stops.map((stop, idx) => (
              <motion.div key={stop.id} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="relative pl-14 lg:pl-0">
                <div className="lg:hidden absolute left-3.5 top-4 w-5 h-5 rounded-full bg-[#0B3D2E] border-2 border-[#D97706] z-10" />
                <div className="hidden lg:flex justify-center mb-3"><Mountain className="w-5 h-5 text-[#D97706]" /></div>
                <div onClick={() => setActiveStop(activeStop === stop.id ? null : stop.id)}
                  className={`rounded-sm overflow-hidden shadow-xl border transition-all duration-300 cursor-pointer ${activeStop === stop.id ? 'border-[#D97706]/40' : 'border-[#D97706]/10 hover:border-[#D97706]/25'}`}>
                  <div className="relative h-[130px] overflow-hidden">
                    <img src={stop.image} alt={stop.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#052E16] to-transparent" />
                    <div className="absolute bottom-2 left-3"><h4 className="text-[#FAF7F2] font-serif text-xs font-semibold leading-tight">{stop.name}</h4></div>
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#052E16]/80 backdrop-blur text-[#D97706] text-[9px] font-mono font-bold rounded-full">{stop.altitude}</div>
                  </div>
                  <AnimatePresence>
                    {activeStop === stop.id && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="bg-[#052E16]">
                        <div className="p-3"><p className="text-[#DCE7DD] text-[11px] leading-relaxed">{stop.description}</p>
                          <div className="flex items-center gap-2 mt-2"><Clock className="w-3 h-3 text-[#D97706]" /><span className="text-[#D97706] text-[10px] font-semibold">{stop.travelTime}</span></div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="p-2.5 bg-[#052E16] flex items-center justify-between border-t border-[#D97706]/10">
                    <span className="text-[#DCE7DD]/40 text-[9px] uppercase tracking-wider">Explore</span>
                    <ChevronRight className={`w-3 h-3 text-[#D97706] transition-transform duration-300 ${activeStop === stop.id ? 'rotate-90' : ''}`} />
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
