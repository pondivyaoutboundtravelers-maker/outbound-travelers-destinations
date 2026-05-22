"use client";

import React from "react";
import { motion } from "framer-motion";
import { vietnamData } from "@/data/vietnam";
import { Compass, ArrowRight, Shield } from "lucide-react";

export default function TravelPlanningProcess() {
  const steps = vietnamData.planningSteps;

  return (
    <section className="relative bg-[#FAF7F2] px-6 py-24 md:py-36 overflow-hidden border-b border-[#1F5F5B]/10">
      
      {/* Decorative vertical thread */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-[#1F5F5B]/10 select-none pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20 space-y-4"
        >
          <span className="text-xs font-bold tracking-widest text-[#5E8B7E] uppercase block">
            Pathway Curation
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1F5F5B] tracking-tight">
            Journey Planning Pathway
          </h2>
          <p className="text-xs sm:text-sm font-light text-[#2F3E46]/70 max-w-xl mx-auto">
            Our luxury advisory desk organizes all flight transitions, palace slots, and visa entries under one seamless console.
          </p>
        </motion.div>

        {/* Highly Unique Vertical Serpentine Flow (Alternate Left/Right) */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Center Thread Line (Hidden on mobile) */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#1F5F5B]/20 -translate-x-1/2 z-0 hidden md:block" />

          <div className="space-y-12 md:space-y-20">
            {steps.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.step}
                  className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 w-full ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  
                  {/* Left Side Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-[45%] bg-white border border-[#1F5F5B]/15 rounded-3xl p-6 sm:p-8 hover:border-[#1F5F5B]/35 transition-all duration-300 shadow-md text-left"
                  >
                    <span className="text-[10px] font-bold text-[#D9A441] tracking-widest block mb-2 uppercase">
                      Stage 0{item.step}
                    </span>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#1F5F5B] tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#2F3E46]/80 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>

                  {/* Centered Golden Wax Seal Connection Point */}
                  <div className="relative z-10 flex items-center justify-center shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border-2 border-[#1F5F5B] flex items-center justify-center text-[#1F5F5B] font-serif font-bold text-sm shadow-[0_0_15px_rgba(31,95,91,0.25)] animate-pulse">
                      <span>{item.step}</span>
                    </div>
                  </div>

                  {/* Empty Spacer Column (To balance layout on desktop) */}
                  <div className="w-full md:w-[45%] hidden md:block" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
