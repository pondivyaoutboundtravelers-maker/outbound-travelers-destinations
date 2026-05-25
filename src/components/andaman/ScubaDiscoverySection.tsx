"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScubaDiscoverySection() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 0]);

  return (
    <section ref={targetRef} className="relative min-h-[120vh] bg-[#164E63] overflow-hidden flex items-center justify-center">
      {/* Deep Sea Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#164E63] via-[#0C4A6E] to-[#0E7490] z-0" />
      
      {/* Animated Bubbles (Parallax) */}
      <motion.div 
        style={{ y: y1 }} 
        className="absolute w-32 h-32 rounded-full border border-white/10 right-[10%] top-[30%] z-0" 
      />
      <motion.div 
        style={{ y: y2 }} 
        className="absolute w-64 h-64 rounded-full border border-white/10 left-[5%] bottom-[20%] z-0" 
      />
      <motion.div 
        style={{ y: y1 }} 
        className="absolute w-16 h-16 rounded-full border border-[#22D3EE]/20 right-[30%] bottom-[40%] z-0 bg-[#22D3EE]/5 blur-sm" 
      />

      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        <motion.div style={{ opacity }}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE] text-xs font-bold tracking-widest mb-6">
            Beneath The Surface
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
            Bioluminescent Scuba
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
            Plunge into the dark velvet of the Andaman Sea at night. Move your hands and watch as millions of bioluminescent plankton ignite, swirling like underwater stardust around you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#22D3EE]/20 flex items-center justify-center mx-auto mb-4 text-[#22D3EE]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-2">PADI Certified</h4>
              <p className="text-sm text-white/70">Expert instructors guide you safely, even if you are a non-swimmer.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#22D3EE]/20 flex items-center justify-center mx-auto mb-4 text-[#22D3EE]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-2">Vibrant Corals</h4>
              <p className="text-sm text-white/70">Encounter pristine reefs, clownfish, turtles and manta rays.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#22D3EE]/20 flex items-center justify-center mx-auto mb-4 text-[#22D3EE]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-2">GoPro Captured</h4>
              <p className="text-sm text-white/70">Take home ultra-HD photos and videos of your underwater dive.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
