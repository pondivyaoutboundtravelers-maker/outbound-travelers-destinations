"use client";

import React from "react";
import { motion } from "framer-motion";
import { rajasthanData } from "@/data/rajasthan";

export default function PlanningProcess() {
  const steps = rajasthanData.planningSteps;

  return (
    <section className="relative bg-[#F7F3EE] px-6 py-20 md:py-32 overflow-hidden border-b border-[#D6B370]/20">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs font-bold tracking-widest text-[#B76E79] uppercase mb-3 block">
            Pathway Curation
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#5B2147] tracking-tight">
            Royal Journey Planning
          </h2>
          <p className="mt-4 text-xs sm:text-sm font-light text-[#6B4F4F]">
            Skip the stressful details. We organize everything through a seamless premium process.
          </p>
        </motion.div>

        {/* Pathway Steps list */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
          
          {/* Horizontal line divider behind cards (hidden on mobile) */}
          <div className="absolute top-12 left-12 right-12 h-0.5 bg-[#D6B370]/30 z-0 hidden md:block" />

          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center space-y-4 bg-white border border-[#D6B370]/30 rounded-3xl p-6 hover:border-[#5B2147]/30 transition-all duration-300 shadow-md"
            >
              
              {/* Royal seal icon block (wax gold stamp) */}
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border-2 border-[#D6B370] flex items-center justify-center text-[#5B2147] font-serif font-bold text-sm shadow-[0_0_15px_rgba(214,179,112,0.2)] animate-pulse">
                <span>{item.step}</span>
              </div>

              {/* descriptions */}
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-[#5B2147] text-base tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#6B4F4F] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
