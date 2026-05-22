"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { vietnamData } from "@/data/vietnam";
import { Compass, CheckCircle2, ChevronRight } from "lucide-react";

export default function VietnamJourneyTimeline() {
  const [activeDay, setActiveDay] = useState(1);

  const itinerary = vietnamData.itinerary;

  return (
    <section id="itinerary" className="relative bg-[#FAF7F2] px-6 py-24 md:py-36 overflow-hidden border-b border-[#1F5F5B]/10">
      
      {/* Background radial soft glows */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#1F5F5B]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20 space-y-4"
        >
          <span className="text-xs font-bold tracking-widest text-[#5E8B7E] uppercase block">
            Royal Progression
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1F5F5B] tracking-tight">
            The Journey Caravan
          </h2>
          <p className="text-xs sm:text-sm text-[#2F3E46]/70 leading-relaxed max-w-md mx-auto">
            A beautiful, balanced day-by-day pacing that combines dynamic guided heritage walks with leisurely afternoons.
          </p>
        </motion.div>

        {/* Highly Unique Vertical Split Flow: Selectors on Left, Curving Line, Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Column 1: Vertical Selector List (Col-span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#B86B4B] block text-left mb-4">
              Itinerary Progressions
            </span>
            <div className="space-y-2.5">
              {itinerary.map((item) => (
                <button
                  key={item.day}
                  onClick={() => setActiveDay(item.day)}
                  className={`w-full text-left flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                    activeDay === item.day
                      ? "bg-[#1F5F5B] border-[#1F5F5B] text-white shadow-lg"
                      : "bg-white/60 border-[#1F5F5B]/10 text-[#2F3E46] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-serif font-bold ${activeDay === item.day ? "text-[#D9A441]" : "text-[#5E8B7E]"}`}>
                      Day {item.day}
                    </span>
                    <span className="font-serif font-bold text-xs tracking-tight truncate max-w-[150px]">
                      {item.title.split("–")[0]}
                    </span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform ${
                    activeDay === item.day ? "translate-x-0.5 text-[#D9A441]" : "text-[#1F5F5B]/30"
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Curving River Path Line (Col-span 1) - Hidden on Mobile */}
          <div className="lg:col-span-1 h-full flex justify-center py-6 select-none pointer-events-none hidden lg:flex">
            <div className="relative w-1 h-[300px] border-l border-dashed border-[#1F5F5B]/30 flex flex-col justify-between items-center">
              {itinerary.map((item) => (
                <div
                  key={item.day}
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                    activeDay === item.day
                      ? "bg-[#D9A441] border-[#1F5F5B] scale-125 shadow-md shadow-amber-900/20"
                      : "bg-white border-[#1F5F5B]/30"
                  }`}
                >
                  {activeDay === item.day && <div className="w-1.5 h-1.5 bg-[#1F5F5B] rounded-full" />}
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Presentation Pane (Col-span 7) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-[#1F5F5B]/15 rounded-[32px] p-6 sm:p-8 space-y-6 shadow-xl text-left"
              >
                
                {/* Image panel with circular Moon-gate design details */}
                <div className="relative h-[220px] w-full rounded-2xl overflow-hidden border-2 border-[#FAF7F2] shadow-md">
                  <Image
                    src={`/images/vietnam/hero.jpg`} // Local high-res mock
                    alt={`Day ${activeDay}`}
                    fill
                    className="object-cover opacity-95 scale-[1.01]"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-[#1F5F5B]/15" />
                  
                  {/* Floating Stay tag */}
                  <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 border border-[#1F5F5B]/20 px-3.5 py-1 text-[9px] font-bold text-[#1F5F5B] backdrop-blur-md shadow-sm">
                    <Compass className="h-3.5 w-3.5 animate-spin-slow text-[#1F5F5B]" />
                    <span>Stay: {itinerary[activeDay - 1].stay}</span>
                  </div>
                </div>

                {/* Text details */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#5E8B7E] block">
                      Day {activeDay} Route Progression
                    </span>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1F5F5B] tracking-tight leading-snug">
                      {itinerary[activeDay - 1].title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#2F3E46]/85 font-light leading-relaxed tracking-wide">
                    {itinerary[activeDay - 1].description}
                  </p>

                  {/* Day highlights tags */}
                  <div className="space-y-2.5 pt-4 border-t border-[#1F5F5B]/10">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-[#5E8B7E]">Day Highlights</span>
                    <div className="flex flex-wrap gap-2">
                      {itinerary[activeDay - 1].highlights.map((h, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF7F2] border border-[#1F5F5B]/15 px-3.5 py-1 text-[9px] font-bold text-[#2F3E46]/80"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#1F5F5B] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
