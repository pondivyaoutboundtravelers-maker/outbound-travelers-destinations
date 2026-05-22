"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { vietnamData } from "@/data/vietnam";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function DestinationShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Custom color tokens mapping per destination to match unique identities
  const getDestBranding = (name: string) => {
    switch (name) {
      case "Hanoi":
        return {
          bg: "bg-[#2F3E46]",
          text: "text-[#FAF7F2]",
          accent: "text-[#D9A441]",
          border: "border-[#D9A441]/30",
          glow: "rgba(217,164,65,0.15)",
        };
      case "Ha Long Bay":
        return {
          bg: "bg-[#1F5F5B]",
          text: "text-[#FAF7F2]",
          accent: "text-[#5E8B7E]",
          border: "border-[#5E8B7E]/30",
          glow: "rgba(94,139,126,0.15)",
        };
      case "Hội An":
        return {
          bg: "bg-[#B86B4B]",
          text: "text-[#FAF7F2]",
          accent: "text-[#D9A441]",
          border: "border-[#D9A441]/30",
          glow: "rgba(217,164,65,0.15)",
        };
      case "Sapa":
        return {
          bg: "bg-[#15423F]",
          text: "text-[#FAF7F2]",
          accent: "text-[#5E8B7E]",
          border: "border-[#5E8B7E]/30",
          glow: "rgba(94,139,126,0.15)",
        };
      default:
        return {
          bg: "bg-[#FAF7F2]",
          text: "text-[#2F3E46]",
          accent: "text-[#B86B4B]",
          border: "border-[#B86B4B]/30",
          glow: "rgba(184,107,75,0.15)",
        };
    }
  };

  const currentBranding = getDestBranding(vietnamData.regions[activeIdx].name);

  return (
    <section id="destinations" className="relative bg-[#FAF7F2] text-[#2F3E46] py-24 md:py-36 overflow-hidden border-b border-[#1F5F5B]/10">
      
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 border border-[#1F5F5B]/20 bg-white px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#1F5F5B] shadow-sm"
        >
          <Sparkles className="h-3 w-3 text-[#D9A441]" />
          <span>Indochina Legacy Circuits</span>
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight">
          Symphony of the Six Realms
        </h2>
        <p className="max-w-md mx-auto text-xs text-[#2F3E46]/70 font-light leading-relaxed tracking-wider">
          A deeply atmospheric visual record of Vietnam's contrasting cultural wonders, reimagined as a premium contemporary luxury brand.
        </p>
      </div>

      {/* Highly Unique Slats Slider Showcase */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch h-[600px] lg:h-[550px]">
        
        {/* Left Side: Staggered selection panel with vertical stats */}
        <div className="lg:col-span-5 flex flex-col justify-between py-4 space-y-6">
          <div className="space-y-3">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#5E8B7E] block">
              Indochina Gateways
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-light text-[#2F3E46]/60 leading-none">
              Select Your Sanctuary
            </h3>
          </div>

          {/* Interactive slats selectors */}
          <div className="space-y-2">
            {vietnamData.regions.map((city, idx) => (
              <button
                key={city.name}
                onClick={() => setActiveIdx(idx)}
                className={`w-full text-left flex items-center justify-between p-4 rounded-2xl border transition-all duration-350 ${
                  activeIdx === idx
                    ? "bg-[#1F5F5B] border-[#1F5F5B] text-white shadow-xl shadow-teal-900/10"
                    : "bg-white/50 border-[#1F5F5B]/10 text-[#2F3E46]/80 hover:bg-white hover:text-[#1F5F5B]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] font-bold ${activeIdx === idx ? "text-[#D9A441]" : "text-[#5E8B7E]"}`}>
                    0{idx + 1}
                  </span>
                  <span className="font-serif font-bold text-sm sm:text-base tracking-tight">
                    {city.name}
                  </span>
                </div>
                
                <span className={`text-[8px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  activeIdx === idx ? "bg-white/10 text-white" : "bg-[#1F5F5B]/5 text-[#1F5F5B]"
                }`}>
                  {city.nights.split(" ")[0]} N
                </span>
              </button>
            ))}
          </div>

          {/* Dynamic details pane matching active realm styling */}
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-6 rounded-[24px] border ${currentBranding.border} ${currentBranding.bg} ${currentBranding.text} space-y-3 shadow-lg transition-colors duration-500`}
            style={{ boxShadow: `0 10px 30px ${currentBranding.glow}` }}
          >
            <span className={`text-[8px] font-bold uppercase tracking-widest ${currentBranding.accent}`}>
              {vietnamData.regions[activeIdx].vibe}
            </span>
            <h4 className="text-lg font-bold font-serif leading-none tracking-tight">
              {vietnamData.regions[activeIdx].name} Circuit
            </h4>
            <p className="text-[11px] font-light leading-relaxed opacity-90">
              {vietnamData.regions[activeIdx].bestFor}
            </p>
          </motion.div>
        </div>

        {/* Right Side: Immersive Moon-gate Slit Window Frame */}
        <div className="lg:col-span-7 relative h-full rounded-[40px] overflow-hidden border-4 border-white shadow-2xl bg-neutral-100">
          
          <Image
            src={vietnamData.regions[activeIdx].image}
            alt={vietnamData.regions[activeIdx].name}
            fill
            className="object-cover scale-[1.03] transition-all duration-[6s] ease-out"
            sizes="(max-width: 768px) 100vw, 600px"
          />

          {/* Sleek Indochine Slats Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F5F5B]/50 via-transparent to-transparent" />
          
          <div className="absolute bottom-6 right-6 p-4 rounded-full bg-white border border-[#1F5F5B]/20 text-[#1F5F5B] shadow-md z-10 flex items-center justify-center">
            <ArrowUpRight className="h-5 w-5 animate-pulse text-[#D9A441]" />
          </div>
          
          {/* Subtle mist effect overlay */}
          <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-10 bg-[radial-gradient(circle_at_30%_30%,white,transparent_50%)]" />

        </div>

      </div>

    </section>
  );
}
