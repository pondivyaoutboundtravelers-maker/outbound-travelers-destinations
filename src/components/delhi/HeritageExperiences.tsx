"use client";

import React from "react";
import { motion } from "framer-motion";
import { delhiData } from "@/lib/delhi/data";

export default function HeritageExperiences() {
  return (
    <section className="py-24 relative bg-[#F8F4EC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[#111827] mb-6 tracking-tight"
          >
            Curated Heritage Experiences
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#7C2D12] text-lg font-light leading-relaxed"
          >
            Step off the tourist trail into private dawn walks, exclusive architectural access, and deeply knowledgeable local storytelling.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {delhiData.experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Visual */}
                <div className="w-full md:w-3/5 relative group">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                    <img
                      src={exp.image}
                      alt={exp.alt}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#7C2D12]/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  {/* Brutalist offset frame */}
                  <div className={`absolute -z-10 top-6 bottom-[-24px] w-full border border-[#D4A373]/50 ${isEven ? 'left-6' : 'right-6'}`} />
                </div>

                {/* Content */}
                <div className="w-full md:w-2/5 flex flex-col items-start bg-[#EADBC8]/30 p-8 md:p-12 border-t border-[#D4A373]/30">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#B45309] font-bold mb-4">
                    Experience {index + 1}
                  </span>
                  <h3 className="text-3xl font-serif text-[#111827] mb-6 leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-[#111827]/80 font-light leading-relaxed text-base">
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
