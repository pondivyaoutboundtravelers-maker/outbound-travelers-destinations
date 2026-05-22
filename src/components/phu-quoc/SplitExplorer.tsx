"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { phuQuocSplitExperiences } from "@/data/phu-quoc";
import { Sparkles } from "lucide-react";

export default function SplitExplorer() {
  return (
    <section id="philosophy" className="relative bg-[#0a0a0a] text-white overflow-hidden border-b border-white/5">
      
      {/* Editorial Title */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 border border-teal-500/10 bg-teal-950/10 px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-teal-400 mb-4"
        >
          <Sparkles className="h-3 w-3 fill-current" />
          <span>Vogue Travel Chronicles</span>
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">
          Four Corners of Absolute Stillness
        </h2>
        <p className="max-w-xl mx-auto text-xs text-neutral-450 mt-3 font-light leading-relaxed text-neutral-400">
          A visual record of the island coves and sunset cables that make Phu Quoc a premium sanctuary unlike any other.
        </p>
      </div>

      {/* Split Story Cards list */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-24 md:space-y-36">
        {phuQuocSplitExperiences.map((exp, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={exp.title}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center`}
            >
              
              {/* Image Pane (Oversized cinematic picture) */}
              <div className={`col-span-1 lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative h-[320px] sm:h-[450px] rounded-3xl overflow-hidden border border-white/5 shadow-2xl"
                >
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover opacity-80 hover:scale-102 transition-transform duration-[8s]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Subtle dark film grain gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40" />
                </motion.div>
              </div>

              {/* Text Pane (Minimalist details panel) */}
              <div className={`col-span-1 lg:col-span-5 space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="space-y-4"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0F766E]">
                    {exp.subtitle}
                  </span>
                  
                  <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                    {exp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed tracking-wide text-neutral-400">
                    {exp.desc}
                  </p>
                </motion.div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
