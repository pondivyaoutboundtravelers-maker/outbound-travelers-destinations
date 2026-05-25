"use client";

import React from "react";
import { motion } from "framer-motion";
import { agraData } from "@/lib/agra/data";

export default function ItineraryStoryFlow() {
  return (
    <section className="py-24 bg-[#FAFAF7] relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[#052E16] tracking-tight"
          >
            The Imperial Journey
          </motion.h2>
          <p className="text-[#475569] font-light mt-4 text-lg">A cinematic flow of your Agra experience.</p>
        </div>

        <div className="relative">
          {/* Central Path Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#DCE7DD] md:-translate-x-1/2" />

          <div className="space-y-16">
            {agraData.itinerary.map((day, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative flex flex-col md:flex-row items-start md:justify-between"
                >
                  {/* Timeline Dot with Gold accent */}
                  <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full bg-[#0B3D2E] border-4 border-[#FAFAF7] -translate-x-[9px] md:-translate-x-1/2 mt-1 z-10 shadow-[0_0_10px_rgba(11,61,46,0.2)]" />

                  {/* Content Side */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:order-2 md:pl-16'}`}>
                    <span className="text-sm uppercase tracking-[0.2em] font-bold text-[#C6A15B]">
                      Day {day.day}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-serif text-[#052E16] mt-3 mb-4">
                      {day.title}
                    </h3>
                    <p className="text-[#475569] font-light leading-relaxed text-base mb-6">
                      {day.description}
                    </p>
                    
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      {day.highlights.map((h, i) => (
                        <span key={i} className="px-4 py-1.5 bg-[#F5F1E8] border border-[#DCE7DD] text-xs font-medium text-[#14532D] rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Empty Spacer */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'md:order-2' : ''}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
