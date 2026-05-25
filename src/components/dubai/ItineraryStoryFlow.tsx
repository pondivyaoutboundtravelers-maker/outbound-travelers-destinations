"use client";

import React from "react";
import { motion } from "framer-motion";
import { dubaiData } from "@/lib/dubai/data";
import { Plane, Building2, Palmtree, Waves, Sun, MapPin, Hotel } from "lucide-react";

const dayIcons = [<Plane className="w-4 h-4" key="1" />, <Building2 className="w-4 h-4" key="2" />, <Sun className="w-4 h-4" key="3" />, <Waves className="w-4 h-4" key="4" />, <Palmtree className="w-4 h-4" key="5" />];
const dayAtmo = ['Arrival', 'Exploration', 'Adventure', 'Waterworld', 'Farewell'];

export default function ItineraryStoryFlow() {
  const itinerary = dubaiData.itinerary;

  return (
    <section className="py-28 lg:py-36 relative overflow-hidden bg-[#FAF7F2]">
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23CA8A04' stroke-width='0.3'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#CA8A04] font-bold">Your Dubai Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] mt-4">A Cinematic <span className="italic text-[#B45309]">Itinerary</span></h2>
        </motion.div>

        <div className="relative">
          {/* Central gold line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#CA8A04]/30 via-[#CA8A04]/50 to-[#CA8A04]/30 transform -translate-x-1/2 hidden lg:block" />
          <motion.div animate={{ y: [0, 800], opacity: [0, 1, 1, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-0 w-1 h-10 bg-[#FACC15] rounded-full transform -translate-x-1/2 blur-[2px] hidden lg:block z-10" />

          {itinerary.map((day, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={day.day} className="relative mb-16 lg:mb-0">
                {/* Diamond node */}
                <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-20 hidden lg:block">
                  <div className="w-5 h-5 rotate-45 bg-[#CA8A04] shadow-lg border-2 border-[#FAF7F2]" />
                </div>

                <motion.div initial={{ opacity: 0, x: isLeft ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                  className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className={`${isLeft ? 'lg:col-start-1 lg:pr-12 lg:text-right' : 'lg:col-start-2 lg:pl-12'} py-6 lg:py-10`}>
                    <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'lg:justify-end' : ''}`}>
                      <div className="w-8 h-8 rounded-full bg-[#050816]/10 flex items-center justify-center text-[#CA8A04]">{dayIcons[idx]}</div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#CA8A04] font-bold">{dayAtmo[idx]}</span>
                    </div>
                    <div className={`flex items-baseline gap-3 mb-3 ${isLeft ? 'lg:justify-end' : ''}`}>
                      <span className="text-4xl font-serif font-bold text-[#CA8A04]/15">{String(day.day).padStart(2, '0')}</span>
                      <h3 className="text-xl sm:text-2xl font-serif text-[#0F172A] leading-tight">{day.title}</h3>
                    </div>
                    <p className="text-[#475569] text-sm leading-relaxed mt-2">{day.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? 'lg:justify-end' : ''}`}>
                      {day.highlights.map((h, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#050816]/5 text-[#0F172A] text-[10px] uppercase tracking-wider font-semibold rounded-full border border-[#CA8A04]/15">
                          <MapPin className="w-3 h-3 text-[#CA8A04]" />{h}
                        </span>
                      ))}
                    </div>
                    <div className={`flex items-center gap-2 mt-4 ${isLeft ? 'lg:justify-end' : ''}`}>
                      <Hotel className="w-3.5 h-3.5 text-[#CA8A04]" />
                      <span className="text-[#CA8A04] text-xs font-semibold">{day.stay}</span>
                    </div>
                  </div>
                  <div className={`hidden lg:block ${isLeft ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`} />
                </motion.div>

                {/* Skyline silhouette separator */}
                {idx < itinerary.length - 1 && (
                  <div className="flex justify-center my-4 lg:my-0">
                    <svg viewBox="0 0 200 24" className="w-32 h-5 text-[#CA8A04]/15" fill="currentColor">
                      <path d="M0,24 L10,24 L10,18 L15,18 L15,6 L18,2 L21,6 L21,18 L35,18 L35,12 L40,8 L45,12 L45,18 L55,18 L55,14 L60,10 L65,14 L65,18 L75,18 L75,20 L80,20 L80,8 L83,4 L86,0 L89,4 L89,8 L92,20 L100,20 L100,18 L110,18 L110,14 L115,10 L120,14 L120,18 L135,18 L135,6 L138,2 L141,6 L141,18 L155,18 L155,12 L160,8 L165,12 L165,18 L180,18 L180,18 L190,18 L190,24 L200,24 Z" />
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
