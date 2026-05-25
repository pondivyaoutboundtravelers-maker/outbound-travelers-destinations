"use client";

import React from "react";
import { motion } from "framer-motion";
import { delhiData } from "@/lib/delhi/data";

export default function ItineraryStoryFlow() {
  return (
    <section className="py-24 bg-[#F8F4EC] relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[#111827] tracking-tight"
          >
            The Editorial Journey
          </motion.h2>
          <p className="text-[#7C2D12] font-light mt-4">A sample pacing of your classic Delhi experience.</p>
        </div>

        <div className="relative">
          {/* Central Path Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#D4A373]/30 md:-translate-x-1/2" />

          <div className="space-y-16">
            {delhiData.itinerary.map((day, index) => {
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
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[#7C2D12] border-4 border-[#F8F4EC] -translate-x-[7px] md:-translate-x-1/2 mt-1 z-10" />

                  {/* Left Side (Empty on Odd, Content on Even) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12'}`}>
                    <span className="text-sm uppercase tracking-[0.2em] font-bold text-[#B45309]">
                      Day {day.day}
                    </span>
                    <h3 className="text-2xl font-serif text-[#111827] mt-2 mb-4">
                      {day.title}
                    </h3>
                    <p className="text-[#111827]/80 font-light leading-relaxed text-sm mb-6">
                      {day.description}
                    </p>
                    
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      {day.highlights.map((h, i) => (
                        <span key={i} className="px-3 py-1 bg-[#EADBC8]/50 border border-[#D4A373]/30 text-xs font-medium text-[#7C2D12] rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Empty Spacer for alignment */}
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
