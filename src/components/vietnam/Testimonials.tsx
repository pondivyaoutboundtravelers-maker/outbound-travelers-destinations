"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { vietnamData } from "@/data/vietnam";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const list = vietnamData.testimonials;

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % list.length);
  };

  const prev = () => {
    setActiveIdx((prev) => (prev - 1 + list.length) % list.length);
  };

  return (
    <section className="relative bg-[#FAF7F2] px-6 py-24 md:py-36 overflow-hidden border-b border-[#1F5F5B]/10">
      
      {/* Decorative vertical partition lines */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-20">
        <div className="absolute top-0 bottom-0 left-[25%] w-px bg-[#1F5F5B]/15" />
        <div className="absolute top-0 bottom-0 right-[25%] w-px bg-[#1F5F5B]/15" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
        
        {/* Title */}
        <div className="space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#5E8B7E] uppercase block">
            Traveler Records
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1F5F5B] tracking-tight">
            Voices of the Circuit
          </h2>
        </div>

        {/* Elegant Glassmorphic Floating Slider Frame */}
        <div className="h-[280px] sm:h-[220px] relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center space-y-6 bg-white/70 backdrop-blur-md border border-[#1F5F5B]/15 rounded-[36px] p-8 shadow-xl"
            >
              
              <Quote className="h-8 w-8 text-[#1F5F5B] opacity-15" />

              <p className="text-xs sm:text-sm md:text-base font-serif text-[#2F3E46]/85 italic font-light leading-relaxed max-w-2xl">
                “{list[activeIdx].quote}”
              </p>

              {/* rating stars */}
              <div className="flex gap-0.5 text-[#D9A441] justify-center">
                {Array.from({ length: list[activeIdx].rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Details names & controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#1F5F5B]/15 max-w-2xl mx-auto">
          
          {/* Guest details */}
          <div className="text-left space-y-0.5">
            <h4 className="font-serif font-bold text-sm text-[#1F5F5B] tracking-tight">
              {list[activeIdx].name}
            </h4>
            <span className="text-[9px] text-[#5E8B7E] tracking-widest font-bold uppercase block">
              {list[activeIdx].tripType} · {list[activeIdx].city} · {list[activeIdx].date}
            </span>
          </div>

          {/* controllers */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-[#1F5F5B]/20 bg-white text-[#1F5F5B] hover:bg-[#FAF7F2] hover:scale-105 active:scale-95 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            
            <button
              onClick={next}
              className="p-3 rounded-full border border-[#1F5F5B]/20 bg-white text-[#1F5F5B] hover:bg-[#FAF7F2] hover:scale-105 active:scale-95 transition-all"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
