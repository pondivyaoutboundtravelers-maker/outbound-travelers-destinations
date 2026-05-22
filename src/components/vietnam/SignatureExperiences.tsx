"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { vietnamData } from "@/data/vietnam";
import { Compass, Sparkles, Flame } from "lucide-react";

export default function SignatureExperiences() {
  const [activeIdx, setActiveIdx] = useState(0);

  const list = vietnamData.topExperiences;

  return (
    <section className="relative bg-[#FAF7F2] px-6 py-24 md:py-36 overflow-hidden border-b border-[#1F5F5B]/10">
      
      {/* Decorative vertical background slats */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-20">
        <div className="absolute top-0 bottom-0 left-[15%] w-px bg-[#1F5F5B]/15" />
        <div className="absolute top-0 bottom-0 right-[15%] w-px bg-[#1F5F5B]/15" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 border border-[#1F5F5B]/20 bg-white px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#1F5F5B] shadow-sm"
          >
            <Flame className="h-3 w-3 animate-pulse text-[#D9A441]" />
            <span>Cultural Revelations</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#2F3E46] tracking-tight leading-tight">
            Signature Indochine Moments
          </h2>
          <p className="text-xs sm:text-sm text-[#2F3E46]/70 max-w-md mx-auto leading-relaxed">
            We bypass crowded paths. These are highly curated private local experiences centering around traditional heritage arts, rowboat cruises, and sunrise isolation.
          </p>
        </div>

        {/* Highly Unique Horizontal Accordion Layout (Completely distinct from Rajasthan) */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4 h-[550px] lg:h-[450px]">
          {list.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                animate={{ width: isActive ? "100%" : "30%" }}
                className={`relative flex flex-col justify-end overflow-hidden rounded-[36px] border border-[#1F5F5B]/15 bg-neutral-900 cursor-pointer p-6 sm:p-8 transition-all duration-500 ease-in-out ${
                  isActive ? "shadow-2xl" : "hover:border-[#1F5F5B]/30"
                }`}
                style={{ flex: isActive ? "3" : "1" }}
              >
                
                {/* Background full-size visual */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-90 transition-transform duration-[6s]"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F5F5B] via-[#1F5F5B]/25 to-transparent opacity-85" />
                </div>

                {/* Vertical text display when collapsed */}
                {!isActive && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 pointer-events-none">
                    <span className="text-[14px] font-serif font-bold text-white/90 writing-mode-vertical tracking-[0.2em] uppercase whitespace-nowrap">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-bold text-[#D9A441] mt-4">
                      0{idx + 1}
                    </span>
                  </div>
                )}

                {/* Full elegant content display when expanded */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative z-10 max-w-xl text-left space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#D9A441] tracking-widest uppercase">
                        Active Experience 0{idx + 1}
                      </span>
                      <div className="h-px w-8 bg-[#D9A441]" />
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-serif font-light text-white tracking-tight leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed tracking-wide">
                      {item.description}
                    </p>

                    <div className="pt-4 border-t border-white/15 flex items-center gap-2 text-[9px] font-bold text-[#D9A441] uppercase tracking-widest">
                      <Compass className="h-4 w-4 animate-spin-slow shrink-0" />
                      <span>Complimentary Outbound Chauffeur Assist Included</span>
                    </div>
                  </motion.div>
                )}

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
