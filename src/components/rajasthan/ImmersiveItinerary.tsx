"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { rajasthanData } from "@/data/rajasthan";
import { Compass, CheckCircle2 } from "lucide-react";

export default function ImmersiveItinerary() {
  const [activeDay, setActiveDay] = useState(1);

  const itinerary = rajasthanData.itinerary;

  return (
    <section id="itinerary" className="relative bg-[#F7F3EE] px-6 py-20 md:py-32 overflow-hidden border-b border-[#D6B370]/20">
      
      {/* Background glow layers */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#5B2147]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-[#B76E79] uppercase mb-3 block">
            Royal Progression
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#5B2147] tracking-tight">
            The Seven-Day Caravan
          </h2>
        </motion.div>

        {/* Day selectors */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {itinerary.map((item) => (
            <button
              key={item.day}
              onClick={() => setActiveDay(item.day)}
              className={`px-5 py-3 rounded-2xl border transition-all duration-300 font-serif font-bold text-xs uppercase tracking-wider ${
                activeDay === item.day
                  ? "bg-white border-[#5B2147] text-[#5B2147] shadow-md"
                  : "bg-white/40 border-[#D6B370]/20 text-[#6B4F4F] hover:bg-white hover:text-[#5B2147]"
              }`}
            >
              Day {item.day}
            </button>
          ))}
        </div>

        {/* Dynamic Presentation Card (Framed as luxury ivory block) */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-white border border-[#D6B370]/30 rounded-[32px] p-6 sm:p-8 items-center shadow-lg shadow-amber-900/5"
            >
              
              {/* Image Pane */}
              <div className="col-span-1 md:col-span-5 relative h-[250px] md:h-[350px] rounded-2xl overflow-hidden border-4 border-[#F7F3EE]">
                <Image
                  src={`/images/rajasthan/hero.jpg`} // Local high-res mock
                  alt={`Day ${activeDay}`}
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B2147]/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 border border-[#D6B370]/30 px-3.5 py-1 text-[9px] font-bold text-[#5B2147] backdrop-blur-md">
                  <Compass className="h-3 w-3 animate-spin-slow text-[#5B2147]" />
                  <span>Stay: {itinerary[activeDay - 1].stay}</span>
                </div>
              </div>

              {/* Text pane details */}
              <div className="col-span-1 md:col-span-7 space-y-6">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#B76E79] block">
                    Day {activeDay} Route Sequence
                  </span>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#5B2147] tracking-tight leading-snug">
                    {itinerary[activeDay - 1].title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#6B4F4F] font-light leading-relaxed tracking-wide">
                  {itinerary[activeDay - 1].description}
                </p>

                {/* Day moments list */}
                <div className="space-y-2.5 pt-4 border-t border-[#D6B370]/20">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-[#B76E79]">Day Moments</span>
                  <div className="flex flex-wrap gap-2">
                    {itinerary[activeDay - 1].highlights.map((h, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF7F2] border border-[#D6B370]/20 px-3 py-1 text-[9px] font-bold text-[#6B4F4F]"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#5B2147]" />
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
    </section>
  );
}
