"use client";

import React from "react";
import { motion } from "framer-motion";
import { andamanData } from "@/lib/andaman/data";

export default function ItineraryStoryFlow() {
  return (
    <section className="py-24 bg-[#F0FDFA] relative border-t border-[#0891B2]/10">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#FB923C] font-bold">
            Pacing The Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1C1917] mt-2">
            7 Days of Undisturbed Luxury
          </h2>
          <p className="text-[#57534E] mt-4 max-w-2xl mx-auto">
            A sample blueprint for the ultimate island escape. Every day is unhurried, giving you time to breathe the sea air.
          </p>
        </div>

        <div className="relative border-l-2 border-[#0891B2]/25 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {andamanData.itinerary.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[2.65rem] md:-left-[3.65rem] top-2 w-5 h-5 rounded-full bg-white border-2 border-[#0891B2] shadow-[0_0_8px_rgba(8,145,178,0.3)]" />
              
              <div className="flex flex-col gap-2 bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm">
                <span className="text-sm font-bold text-[#0891B2] tracking-wider uppercase">
                  Day {day.day}
                </span>
                <h3 className="text-2xl font-serif text-[#1C1917]">
                  {day.title}
                </h3>
                <p className="text-base text-[#57534E] leading-relaxed mt-2 mb-4">
                  {day.description}
                </p>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {day.highlights.map((hlt, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-[#F0FDFA] text-[#0891B2] px-3 py-1 rounded-full border border-[#0891B2]/20 font-medium"
                    >
                      {hlt}
                    </span>
                  ))}
                </div>
                
                {/* Stay Info */}
                <div className="flex items-center gap-2 text-sm text-[#FB923C] font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>{day.stay}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
