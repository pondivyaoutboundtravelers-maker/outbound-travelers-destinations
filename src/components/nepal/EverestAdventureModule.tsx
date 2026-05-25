"use client";
import React from "react";
import { motion } from "framer-motion";
import { nepalData } from "@/lib/nepal/data";
import { Mountain, Clock, Gauge, MoveRight } from "lucide-react";

export default function EverestAdventureModule() {
  const ev = nepalData.everestModule;
  return (
    <section className="py-28 lg:py-36 relative bg-[#052E16] overflow-hidden">
      {/* Altitude gradient - darker at top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020a06] via-[#052E16] to-[#0B3D2E] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FAF7F2'%3E%3Ccircle cx='10' cy='20' r='0.6'/%3E%3Ccircle cx='50' cy='10' r='0.4'/%3E%3Ccircle cx='80' cy='40' r='0.5'/%3E%3Ccircle cx='30' cy='60' r='0.3'/%3E%3Ccircle cx='70' cy='80' r='0.5'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '100px 100px' }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D97706] font-bold">Himalayan Expeditions</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-serif text-[#FAF7F2] mt-4">{ev.headline}</h2>
          <p className="text-[#DCE7DD] text-base mt-4 max-w-2xl mx-auto">{ev.subheadline}</p>
        </motion.div>

        {/* Vertical altitude storytelling */}
        <div className="relative">
          {/* Central altitude line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D97706]/50 via-[#D97706]/20 to-[#D97706]/50 transform lg:-translate-x-1/2" />

          {ev.treks.map((trek, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div key={trek.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="relative mb-12 last:mb-0">
                {/* Altitude marker */}
                <div className="absolute left-5 lg:left-1/2 top-6 transform lg:-translate-x-1/2 z-20">
                  <div className="w-7 h-7 rounded-full bg-[#D97706] shadow-lg border-2 border-[#FAF7F2] flex items-center justify-center">
                    <Mountain className="w-3.5 h-3.5 text-[#052E16]" />
                  </div>
                </div>

                <div className={`lg:grid lg:grid-cols-2 lg:gap-12 pl-16 lg:pl-0`}>
                  <div className={`${isLeft ? 'lg:col-start-1 lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}`}>
                    <div className="overflow-hidden rounded-sm shadow-xl border border-[#D97706]/10 group">
                      <div className="relative h-[220px] overflow-hidden">
                        <img src={trek.image} alt={trek.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#052E16]/80 via-transparent to-transparent" />
                        <div className="absolute top-4 right-4 px-4 py-2 bg-[#052E16]/80 backdrop-blur-md text-[#D97706] text-lg font-serif font-bold rounded-sm border border-[#D97706]/20">{trek.altitude}</div>
                      </div>
                      <div className="p-6 bg-[#0B3D2E]/50 backdrop-blur-sm">
                        <h3 className="text-xl font-serif text-[#FAF7F2]">{trek.name}</h3>
                        <p className="text-[#DCE7DD] text-sm mt-2 leading-relaxed">{trek.description}</p>
                        <div className="flex flex-wrap gap-3 mt-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#052E16] text-[#D97706] text-[10px] uppercase tracking-wider font-semibold rounded-full border border-[#D97706]/20">
                            <Gauge className="w-3 h-3" />{trek.difficulty}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#052E16] text-[#DCE7DD] text-[10px] uppercase tracking-wider font-semibold rounded-full border border-[#DCE7DD]/10">
                            <Clock className="w-3 h-3" />{trek.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`hidden lg:block ${isLeft ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
