"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rajasthanData } from "@/data/rajasthan";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";

export default function LuxuryTestimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const list = rajasthanData.testimonials;

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % list.length);
  };

  const prev = () => {
    setActiveIdx((prev) => (prev - 1 + list.length) % list.length);
  };

  return (
    <section className="relative bg-[#F7F3EE] px-6 py-20 md:py-32 overflow-hidden border-b border-[#D6B370]/20">
      
      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-10">
        
        {/* Title */}
        <div className="space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#B76E79] uppercase block">
            Royal Records
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#5B2147] tracking-tight">
            Voices of the Circuit
          </h2>
        </div>

        {/* Quote slide card (styled as an ivory textured card) */}
        <div className="h-[260px] sm:h-[200px] relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -10 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center space-y-6 bg-white border border-[#D6B370]/30 rounded-3xl p-8 shadow-md shadow-amber-900/5"
            >
              
              <Quote className="h-7 w-7 text-[#5B2147] opacity-20" />

              <p className="text-xs sm:text-sm md:text-base font-serif text-[#6B4F4F] italic font-light leading-relaxed max-w-2xl">
                “{list[activeIdx].quote}”
              </p>

              {/* stars rating */}
              <div className="flex gap-0.5 text-amber-500 justify-center">
                {Array.from({ length: list[activeIdx].rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-[#D6B370] fill-[#D6B370]" />
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Details names & controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-[#D6B370]/20 max-w-2xl mx-auto">
          
          {/* Guest details */}
          <div className="text-left space-y-0.5">
            <h4 className="font-serif font-bold text-sm text-[#5B2147] tracking-tight">
              {list[activeIdx].name}
            </h4>
            <span className="text-[10px] text-[#B76E79] tracking-wider font-light uppercase">
              {list[activeIdx].tripType} · {list[activeIdx].city} · {list[activeIdx].date}
            </span>
          </div>

          {/* controllers */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-[#D6B370]/30 bg-white text-[#5B2147] hover:bg-[#FAF7F2] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            
            <button
              onClick={next}
              className="p-3 rounded-full border border-[#D6B370]/30 bg-white text-[#5B2147] hover:bg-[#FAF7F2] transition-colors"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
