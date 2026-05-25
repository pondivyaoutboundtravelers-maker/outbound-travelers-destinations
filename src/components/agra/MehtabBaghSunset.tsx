"use client";

import React from "react";
import { motion } from "framer-motion";
import { Moon } from "lucide-react";

export default function MehtabBaghSunset() {
  return (
    <section className="py-32 relative bg-[#052E16] overflow-hidden">
      {/* Dark River Reflection Aesthetic */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/agra/hero.jpg" 
          alt="Taj Mahal reflection" 
          className="w-full h-full object-cover filter brightness-[0.3] sepia-[0.4] saturate-[1.5]"
        />
        {/* River reflection gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#052E16] via-[#052E16]/80 to-[#0B3D2E]" />
        
        {/* Golden hour glow on the water */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-gradient-to-t from-[#C6A15B]/30 to-transparent blur-[50px] mix-blend-overlay" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-16 h-16 rounded-full border border-[#C6A15B]/50 flex items-center justify-center mb-8 bg-[#052E16]/50 backdrop-blur-sm"
        >
          <Moon className="w-6 h-6 text-[#C6A15B]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#FAFAF7] leading-tight tracking-tight mb-8"
        >
          Mehtab Bagh <br/>
          <span className="italic text-[#C6A15B] font-light">The Moonlit Garden</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl"
        >
          <p className="text-[#DCE7DD] text-xl md:text-2xl font-light leading-relaxed font-serif italic mb-10">
            "We sat across the Yamuna river as the sun dipped below the horizon. The white marble turned into liquid gold, then soft purple, before fading into the night. Absolute silence, absolute perfection."
          </p>
          
          <div className="w-24 h-[1px] bg-[#C6A15B]/50 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
