"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { andamanData } from "@/lib/andaman/data";

export default function ExperienceTimelineRiver() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      className="py-32 relative bg-[#F0FDFA] border-y border-[#0891B2]/10"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-24 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#FB923C] font-bold"
          >
            Curated Moments
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-[#1C1917] mt-4"
          >
            A River of Experiences
          </motion.h2>
        </div>

        {/* Central River Line */}
        <div className="absolute left-4 md:left-1/2 top-[200px] bottom-0 w-px bg-[#0891B2]/15 -translate-x-1/2 hidden md:block">
          <motion.div 
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-[#0891B2] via-[#0891B2]/50 to-transparent"
          />
        </div>

        {/* Experiences */}
        <div className="relative z-10 flex flex-col gap-24 md:gap-32">
          {andamanData.experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-lg">
                    <img 
                      src={exp.image} 
                      alt={exp.alt} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C4A6E]/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                  {/* Floating Dot connecting to river */}
                  <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0891B2] shadow-[0_0_12px_rgba(8,145,178,0.4)] hidden md:block ${
                    isEven ? "-right-[2rem] translate-x-1/2" : "-left-[2rem] -translate-x-1/2"
                  }`} />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col">
                  <h3 className="text-3xl font-serif text-[#1C1917] mb-4">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-[#57534E] leading-relaxed">
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
