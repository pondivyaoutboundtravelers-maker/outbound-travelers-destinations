"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { rajasthanData } from "@/data/rajasthan";
import { Sparkles } from "lucide-react";

export default function CircuitExperience() {
  
  // Custom color tokens mapping per city to match unique identities
  const getCityBranding = (name: string) => {
    switch (name) {
      case "Jaipur":
        return {
          bg: "bg-[#F5EFF2]", // plum hint
          border: "border-[#5B2147]/20",
          accent: "text-[#5B2147]",
          subtitleColor: "text-[#B76E79]",
          overlay: "bg-[#5B2147]/5",
        };
      case "Udaipur":
        return {
          bg: "bg-[#EEF2F5]", // sapphire hint
          border: "border-[#355C7D]/20",
          accent: "text-[#355C7D]",
          subtitleColor: "text-[#B76E79]",
          overlay: "bg-[#355C7D]/5",
        };
      case "Jodhpur":
        return {
          bg: "bg-[#F3EFEF]", // cocoa hint
          border: "border-[#6B4F4F]/20",
          accent: "text-[#6B4F4F]",
          subtitleColor: "text-[#5B2147]",
          overlay: "bg-[#6B4F4F]/5",
        };
      case "Jaisalmer":
      default:
        return {
          bg: "bg-[#F7F3EE]", // champagne hint
          border: "border-[#D6B370]/20",
          accent: "text-[#D6B370]",
          subtitleColor: "text-[#B76E79]",
          overlay: "bg-[#D6B370]/5",
        };
    }
  };

  return (
    <section id="circuits" className="relative bg-[#F7F3EE] text-[#5B2147] overflow-hidden border-b border-[#D6B370]/20">
      
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 border border-[#D6B370]/30 bg-white px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#5B2147] mb-4 shadow-sm"
        >
          <Sparkles className="h-3 w-3 fill-current text-[#D6B370]" />
          <span>The Four Pillars of Rajputana</span>
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">
          Symphony of the Four Castles
        </h2>
        <p className="max-w-xl mx-auto text-xs text-[#6B4F4F] mt-3 font-light leading-relaxed">
          A deep visual record of Rajasthan's contrasting architectural wonders, reimagined as a modern contemporary luxury brand.
        </p>
      </div>

      {/* Split Story Cards list */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-24 md:space-y-36">
        {rajasthanData.regions.map((city, idx) => {
          const isEven = idx % 2 === 0;
          const branding = getCityBranding(city.name);
          return (
            <div
              key={city.name}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center"
            >
              
              {/* Image Pane (Framed in luxury white borders) */}
              <div className={`col-span-1 lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative h-[320px] sm:h-[450px] rounded-[32px] overflow-hidden border-4 border-white shadow-xl shadow-amber-900/5"
                >
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover opacity-90 hover:scale-102 transition-transform duration-[8s]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Elegant soft ambient film tint */}
                  <div className={`absolute inset-0 ${branding.overlay}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5B2147]/25 to-transparent" />
                </motion.div>
              </div>

              {/* Text Pane (Ivory-carded details panel) */}
              <div className={`col-span-1 lg:col-span-5 space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`p-8 sm:p-10 rounded-[30px] border border-[#D6B370]/30 shadow-md ${branding.bg} space-y-5`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${branding.subtitleColor}`}>
                    {city.vibe}
                  </span>
                  
                  <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#5B2147] tracking-tight leading-tight">
                    {city.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B4F4F] font-light leading-relaxed tracking-wide">
                    {city.bestFor}
                  </p>

                  <div className="pt-4 border-t border-[#D6B370]/20 flex flex-col gap-1 text-[9px] font-bold uppercase tracking-wider">
                    <span className="text-[#D6B370]">Exclusive Circuit Stay:</span>
                    <span className={branding.accent}>{city.nights}</span>
                  </div>
                </motion.div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
