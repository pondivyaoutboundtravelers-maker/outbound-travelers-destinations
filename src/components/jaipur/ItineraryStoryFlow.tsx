"use client";

import React from "react";
import { motion } from "framer-motion";
import { jaipurData } from "@/lib/jaipur/data";
import { Sunrise, Sun, Sunset as SunsetIcon, Moon, MapPin, Hotel } from "lucide-react";

const dayIcons = [
  <Sunrise className="w-4 h-4" key="1" />,
  <Sun className="w-4 h-4" key="2" />,
  <SunsetIcon className="w-4 h-4" key="3" />,
  <Moon className="w-4 h-4" key="4" />,
];

const dayLabels = ["Morning Arrival", "Dawn Adventure", "Golden Afternoon", "Farewell Day"];

export default function ItineraryStoryFlow() {
  const itinerary = jaipurData.itinerary;

  return (
    <section className="py-28 lg:py-36 relative overflow-hidden">
      {/* Background gradient transitions */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F2] via-[#EFE7DA] to-[#FAF8F2]" />

      {/* Jali pattern very subtle */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230B3D2E' fill-opacity='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z M30 8L52 30L30 52L8 30Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-bold">
            Your Royal Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] mt-4">
            A Cinematic <span className="italic text-[#0B3D2E]">Itinerary</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical gold line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C6A15B]/50 via-[#C6A15B]/30 to-[#C6A15B]/50 transform -translate-x-1/2 hidden lg:block" />

          {/* Animated pulse traveling down */}
          <motion.div
            animate={{ y: [0, 600], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-0 w-1 h-8 bg-[#C6A15B] rounded-full transform -translate-x-1/2 blur-[2px] hidden lg:block z-10"
          />

          {itinerary.map((day, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div key={day.day} className="relative mb-16 lg:mb-0">
                {/* Diamond node */}
                <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-20 hidden lg:block">
                  <div className="w-5 h-5 rotate-45 bg-[#C6A15B] shadow-lg border-2 border-[#FAF8F2]" />
                </div>

                {/* Day block — alternating left/right */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 ${!isLeft ? "" : ""}`}
                >
                  {/* Content side */}
                  <div
                    className={`${
                      isLeft ? "lg:col-start-1 lg:pr-12 lg:text-right" : "lg:col-start-2 lg:pl-12"
                    } py-6 lg:py-10`}
                  >
                    {/* Time-of-day badge */}
                    <div className={`flex items-center gap-2 mb-3 ${isLeft ? "lg:justify-end" : ""}`}>
                      <div className="w-8 h-8 rounded-full bg-[#0B3D2E]/10 flex items-center justify-center text-[#0B3D2E]">
                        {dayIcons[idx] || dayIcons[0]}
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A15B] font-bold">
                        {dayLabels[idx] || "Experience"}
                      </span>
                    </div>

                    {/* Day number */}
                    <div className={`flex items-baseline gap-3 mb-3 ${isLeft ? "lg:justify-end" : ""}`}>
                      <span className="text-4xl font-serif font-bold text-[#0B3D2E]/15">
                        {String(day.day).padStart(2, "0")}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif text-[#0F172A] leading-tight">
                        {day.title}
                      </h3>
                    </div>

                    <p className="text-[#475569] text-sm leading-relaxed mt-2">
                      {day.description}
                    </p>

                    {/* Highlight chips */}
                    <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? "lg:justify-end" : ""}`}>
                      {day.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0B3D2E]/8 text-[#0B3D2E] text-[10px] uppercase tracking-wider font-semibold rounded-full border border-[#0B3D2E]/10"
                        >
                          <MapPin className="w-3 h-3" />
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Stay info */}
                    <div className={`flex items-center gap-2 mt-4 ${isLeft ? "lg:justify-end" : ""}`}>
                      <Hotel className="w-3.5 h-3.5 text-[#C6A15B]" />
                      <span className="text-[#C6A15B] text-xs font-semibold">{day.stay}</span>
                    </div>
                  </div>

                  {/* Empty spacer for opposite side on desktop */}
                  <div className={`hidden lg:block ${isLeft ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}`} />
                </motion.div>

                {/* Palace silhouette separator between days */}
                {idx < itinerary.length - 1 && (
                  <div className="flex justify-center my-4 lg:my-0">
                    <svg viewBox="0 0 200 30" className="w-32 h-6 text-[#C6A15B]/20" fill="currentColor">
                      <path d="M0,30 L20,30 L20,15 L30,15 L30,8 L35,0 L40,8 L40,15 L60,15 L60,10 L65,5 L70,10 L70,15 L80,15 L80,12 L90,5 L95,0 L100,5 L110,12 L110,15 L120,15 L120,10 L125,5 L130,10 L130,15 L140,15 L140,15 L150,15 L150,8 L155,0 L160,8 L160,15 L170,15 L170,15 L180,15 L180,30 L200,30 Z" />
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
