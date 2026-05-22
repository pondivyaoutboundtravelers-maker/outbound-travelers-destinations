"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { phuQuocTestimonials } from "@/data/phu-quoc";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";

export default function LuxuryTestimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const list = phuQuocTestimonials;

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % list.length);
  };

  const prev = () => {
    setActiveIdx((prev) => (prev - 1 + list.length) % list.length);
  };

  return (
    <section className="relative bg-[#0a0a0a] px-6 py-20 md:py-32 overflow-hidden border-b border-white/5">
      {/* soft back layers */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-teal-900/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-10">
        
        {/* Title */}
        <div className="space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#0F766E] uppercase block">
            Guest Records
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Voices of Sanctuary
          </h2>
        </div>

        {/* Sliding quote block */}
        <div className="h-[260px] sm:h-[200px] relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -10 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center space-y-6 bg-neutral-950/40 border border-white/5 rounded-3xl p-8 backdrop-blur-md shadow-2xl"
            >
              
              <Quote className="h-7 w-7 text-teal-800 opacity-30" />

              <p className="text-xs sm:text-sm md:text-base font-serif text-neutral-250 italic font-light leading-relaxed max-w-2xl text-neutral-300">
                “{list[activeIdx].quote}”
              </p>

              {/* rating stars */}
              <div className="flex gap-0.5 text-yellow-500 justify-center">
                {Array.from({ length: list[activeIdx].rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer controls & names */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/5 max-w-2xl mx-auto">
          
          {/* Guest Identity */}
          <div className="text-left space-y-0.5">
            <h4 className="font-serif font-bold text-sm text-white tracking-tight">
              {list[activeIdx].name}
            </h4>
            <span className="text-[10px] text-neutral-450 tracking-wider font-light text-neutral-400">
              {list[activeIdx].tripType} · {list[activeIdx].city} · {list[activeIdx].date}
            </span>
          </div>

          {/* Buttons controls */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-white/5 bg-neutral-900/20 text-neutral-450 hover:text-white hover:border-neutral-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            
            <button
              onClick={next}
              className="p-3 rounded-full border border-white/5 bg-neutral-900/20 text-neutral-450 hover:text-white hover:border-neutral-800 transition-colors"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
