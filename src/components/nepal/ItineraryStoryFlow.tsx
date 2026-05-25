"use client";
import React from "react";
import { motion } from "framer-motion";
import { nepalData } from "@/lib/nepal/data";
import { Plane, Mountain, Landmark, Wind, TreePine, Bike, MapPin, Hotel } from "lucide-react";

const dayIcons = [<Plane className="w-4 h-4" key="1" />, <Landmark className="w-4 h-4" key="2" />, <Mountain className="w-4 h-4" key="3" />, <Wind className="w-4 h-4" key="4" />, <TreePine className="w-4 h-4" key="5" />, <Bike className="w-4 h-4" key="6" />];
const dayAtmo = ['Gateway', 'Sacred', 'Lakeside', 'Adventure', 'Jungle', 'Safari & Farewell'];

export default function ItineraryStoryFlow() {
  const itinerary = nepalData.itinerary;
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D97706] font-bold">Your Himalayan Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] mt-4">A Nepal <span className="italic text-[#0B3D2E]">Itinerary</span></h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D97706]/30 via-[#D97706]/50 to-[#D97706]/30 transform -translate-x-1/2 hidden lg:block" />
          <motion.div animate={{ y: [0, 800], opacity: [0, 1, 1, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-0 w-1 h-10 bg-[#D97706] rounded-full transform -translate-x-1/2 blur-[2px] hidden lg:block z-10" />

          {itinerary.map((day, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={day.day} className="relative mb-16 lg:mb-0">
                <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-20 hidden lg:block">
                  <div className="w-5 h-5 rounded-full bg-[#D97706] shadow-lg border-2 border-[#FAF7F2]" />
                </div>
                <motion.div initial={{ opacity: 0, x: isLeft ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                  className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className={`${isLeft ? 'lg:col-start-1 lg:pr-12 lg:text-right' : 'lg:col-start-2 lg:pl-12'} py-6 lg:py-10`}>
                    <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'lg:justify-end' : ''}`}>
                      <div className="w-8 h-8 rounded-full bg-[#0B3D2E]/10 flex items-center justify-center text-[#D97706]">{dayIcons[idx]}</div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#D97706] font-bold">{dayAtmo[idx]}</span>
                    </div>
                    <div className={`flex items-baseline gap-3 mb-3 ${isLeft ? 'lg:justify-end' : ''}`}>
                      <span className="text-4xl font-serif font-bold text-[#D97706]/15">{String(day.day).padStart(2, '0')}</span>
                      <h3 className="text-xl sm:text-2xl font-serif text-[#0F172A] leading-tight">{day.title}</h3>
                    </div>
                    <p className="text-[#475569] text-sm leading-relaxed mt-2">{day.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? 'lg:justify-end' : ''}`}>
                      {day.highlights.map((h, i) => (<span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0B3D2E]/5 text-[#0F172A] text-[10px] uppercase tracking-wider font-semibold rounded-full border border-[#D97706]/15"><MapPin className="w-3 h-3 text-[#D97706]" />{h}</span>))}
                    </div>
                    <div className={`flex items-center gap-2 mt-4 ${isLeft ? 'lg:justify-end' : ''}`}>
                      <Hotel className="w-3.5 h-3.5 text-[#0B3D2E]" /><span className="text-[#0B3D2E] text-xs font-semibold">{day.stay}</span>
                    </div>
                  </div>
                  <div className={`hidden lg:block ${isLeft ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`} />
                </motion.div>

                {idx < itinerary.length - 1 && (
                  <div className="flex justify-center my-4 lg:my-0">
                    <svg viewBox="0 0 80 25" className="w-16 h-5 text-[#0B3D2E]/10" fill="currentColor">
                      <path d="M0,25 L20,15 L35,20 L40,5 L45,20 L60,15 L80,25 Z" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
