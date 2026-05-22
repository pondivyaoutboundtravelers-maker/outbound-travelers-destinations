"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { phuQuocItinerary } from "@/data/phu-quoc";
import { Compass, CheckCircle2, ChevronRight, CompassIcon } from "lucide-react";

export default function ImmersiveItinerary() {
  const [activeDay, setActiveDay] = useState(1);

  const itinerary = phuQuocItinerary;

  return (
    <section id="itinerary" className="relative bg-[#0a0a0a] px-6 py-20 md:py-32 overflow-hidden border-b border-white/5">
      {/* Background glow glows */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-teal-900/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title & Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-[#0F766E] uppercase mb-3 block">
            Poetic Progression
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            The Six-Day Sequence
          </h2>
        </motion.div>

        {/* Day Selectors list row */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {itinerary.map((item) => (
            <button
              key={item.day}
              onClick={() => setActiveDay(item.day)}
              className={`px-5 py-3 rounded-2xl border transition-all duration-300 font-serif font-bold text-xs uppercase tracking-wider ${
                activeDay === item.day
                  ? "bg-teal-950/20 border-teal-500/30 text-white"
                  : "bg-neutral-900/10 border-white/5 text-neutral-450 hover:bg-neutral-900/30 hover:text-white text-neutral-400"
              }`}
            >
              Day {item.day}
            </button>
          ))}
        </div>

        {/* Cinematic Showcase Card Box */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-neutral-950/30 border border-white/5 rounded-3xl p-6 sm:p-8 items-center"
            >
              
              {/* Image box (Col-span 5) */}
              <div className="col-span-1 md:col-span-5 relative h-[250px] md:h-[350px] rounded-2xl overflow-hidden">
                <Image
                  src={`/images/phu-quoc/hero.jpg`} // Local high-res mock
                  alt={`Day ${activeDay}`}
                  fill
                  className="object-cover opacity-70"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-teal-950/80 border border-teal-900/50 px-3.5 py-1 text-[9px] font-bold text-teal-400 backdrop-blur-md">
                  <Compass className="h-3 w-3 animate-spin-slow" />
                  <span>Stay: {itinerary[activeDay - 1].stay}</span>
                </div>
              </div>

              {/* Text content details (Col-span 7) */}
              <div className="col-span-1 md:col-span-7 space-y-6">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#0F766E] block">
                    Day {activeDay} Sequence
                  </span>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                    {itinerary[activeDay - 1].title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed tracking-wide text-neutral-400">
                  {itinerary[activeDay - 1].description}
                </p>

                {/* Day highlights list */}
                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-500">Day Moments</span>
                  <div className="flex flex-wrap gap-2">
                    {itinerary[activeDay - 1].highlights.map((h, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 border border-white/5 px-3 py-1 text-[9px] font-bold text-neutral-350"
                      >
                        <CheckCircle2 className="h-3 w-3 text-[#0F766E]" />
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
