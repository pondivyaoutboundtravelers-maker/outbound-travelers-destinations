"use client";

import React from "react";
import { motion } from "framer-motion";
import { vietnamData } from "@/data/vietnam";
import { Compass } from "lucide-react";

export default function CulturalIntro() {
  const story = vietnamData;

  return (
    <section id="introduction" className="relative bg-[#FAF7F2] px-6 py-24 md:py-36 overflow-hidden border-b border-[#1F5F5B]/10">
      
      {/* Dynamic Indochine Decorative Grid Lines */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-20">
        <div className="absolute top-0 bottom-0 left-1/4 w-px bg-[#1F5F5B]/15" />
        <div className="absolute top-0 bottom-0 right-1/4 w-px bg-[#1F5F5B]/15" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
        
        {/* Editorial Motif Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3"
        >
          <div className="h-px w-6 bg-[#D9A441]" />
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#D9A441] font-bold">
            TIMELISTS OF INDOCHINA
          </span>
          <div className="h-px w-6 bg-[#D9A441]" />
        </motion.div>

        {/* Storytelling Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl font-serif font-light text-[#2F3E46] tracking-tight leading-tight"
        >
          Vietnam, Beautifully Layered
        </motion.h2>

        {/* Dynamic centered quotation panel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative max-w-3xl mx-auto px-6 py-10 rounded-[32px] border border-[#1F5F5B]/15 bg-white/50 backdrop-blur-sm"
        >
          <p className="text-sm sm:text-base md:text-lg font-serif text-[#2F3E46]/80 font-light leading-relaxed tracking-wider italic">
            “{story.quickSummary}”
          </p>
        </motion.div>

        {/* Compass seal connector */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="pt-6 flex justify-center text-[#1F5F5B]/30"
        >
          <div className="p-3.5 rounded-full border border-[#1F5F5B]/15 bg-white shadow-sm text-[#1F5F5B]">
            <Compass className="h-5 w-5 animate-spin-slow" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
