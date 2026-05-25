"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TajSunriseExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animate the marble light reflection line width
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      className="py-32 relative bg-[#FAFAF7] border-b border-[#DCE7DD] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Typography / Storytelling Side */}
          <div className="w-full lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.2em] text-[#14532D] font-bold"
            >
              The Grand Awakening
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#052E16] mt-4 tracking-tight leading-tight"
            >
              A Symphony of <br/><span className="text-[#C6A15B] italic">Shifting Light</span>
            </motion.h2>
            
            <div className="mt-8 space-y-6">
              <motion.div 
                style={{ width: lineWidth }}
                className="h-[1px] bg-gradient-to-r from-[#C6A15B] to-transparent"
              />
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-[#475569] text-lg font-light leading-relaxed"
              >
                Experience the Taj Mahal not as a static monument, but as a living canvas. As the dawn breaks, the translucent marble absorbs the morning sky, shifting from soft pearlescent pinks to brilliant, blinding white by noon.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-[#475569] text-lg font-light leading-relaxed"
              >
                We orchestrate your access precisely to witness this miraculous transition, long before the crowds gather at the gates.
              </motion.p>
            </div>
          </div>

          {/* Layered Visual Transition Side */}
          <div className="w-full lg:w-1/2 relative h-[500px]">
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1 }}
               className="absolute top-0 right-0 w-[80%] h-[80%] bg-[#F5F1E8] rounded-sm shadow-xl overflow-hidden border border-[#DCE7DD] z-10"
             >
                <img src="/images/agra/hero.jpg" alt="Taj Mahal Dawn" className="w-full h-full object-cover filter brightness-[0.9]" />
             </motion.div>
             
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1, delay: 0.3 }}
               className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-[#0B3D2E] p-1 rounded-sm shadow-2xl z-20"
             >
                <div className="w-full h-full border border-[#C6A15B]/30 flex flex-col justify-center items-center text-center p-6 bg-[url('/images/agra/texture-paper.png')] bg-cover">
                   <p className="font-serif text-[#C6A15B] text-xl italic mb-2">"The tear on the cheek of eternity."</p>
                   <span className="text-[#FAFAF7] text-xs font-sans uppercase tracking-[0.2em]">- Rabindranath Tagore</span>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
