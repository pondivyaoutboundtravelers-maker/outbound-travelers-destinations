"use client";

import React from "react";
import { motion } from "framer-motion";
import { agraData } from "@/lib/agra/data";

export default function MughalHeritageExperiences() {
  return (
    <section className="py-32 relative bg-[#FAFAF7]">
      {/* Subtle marble texture background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'url("/images/agra/texture-paper.png")' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-bold"
          >
            Curated Heritage
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-[#052E16] mt-4 tracking-tight"
          >
            Beyond the Taj Mahal
          </motion.h2>
        </div>

        <div className="flex flex-col gap-32">
          {agraData.experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Immersive Image Panel */}
                <div className="w-full md:w-[55%] relative group">
                  <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm shadow-xl">
                    <img
                      src={exp.image}
                      alt={exp.alt}
                      className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#0B3D2E]/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  {/* Decorative Arch Offset */}
                  <div className={`absolute -z-10 top-[-20px] bottom-10 w-full border border-[#14532D]/20 ${isEven ? 'right-[-20px]' : 'left-[-20px]'}`} />
                </div>

                {/* Editorial Content */}
                <div className="w-full md:w-[45%] flex flex-col items-start bg-[#F5F1E8] p-10 md:p-12 relative">
                  {/* Small gold corner accent */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C6A15B]" />
                  
                  <span className="text-xs uppercase tracking-[0.2em] text-[#14532D] font-bold mb-4">
                    Chapter 0{index + 1}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-serif text-[#052E16] mb-6 leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-[#475569] font-light leading-relaxed text-lg">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
