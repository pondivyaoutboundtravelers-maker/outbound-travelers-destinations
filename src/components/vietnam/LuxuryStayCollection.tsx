"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Ship } from "lucide-react";

export default function LuxuryStayCollection() {
  const staysList = [
    {
      name: "Capella Hanoi",
      tagline: "Colonial Opera Splendor",
      desc: "An ultra-luxury boutique opera hotel located in the heart of Hanoi's French Quarter. Timeless Indochina fittings, classic opera artwork, and standard-setting dining.",
      image: "/images/vietnam/capella.jpg",
      accent: "Opera VIP room package upgrades",
    },
    {
      name: "InterContinental Danang",
      tagline: "Sanctuary On The Monkey Hills Cliffs",
      desc: "Perched high on a private hill overlooking isolated sand bays. Crafted by renowned architect Bill Bensley, blending modern style with cultural legacy.",
      image: "/images/vietnam/intercontinental.jpg",
      accent: "Candlelit cliff dinner inclusions",
    },
    {
      name: "JW Marriott Phu Quoc",
      tagline: "Legacy Academy By The Ocean",
      desc: "An artistic, high-concept university-themed luxury beachfront resort situated on Phu Quoc's pristine Emerald Bay white sands.",
      image: "/images/vietnam/jw-marriott.jpg",
      accent: "Oceanview suites & high tea",
    },
    {
      name: "Boutique Heritage Cruise",
      tagline: "Limestone Bay Floating Palace",
      desc: "Private wood-trimmed boutique yacht cruising the remote bays of Ha Long. Authentic brass styling, private grotto kayaking, and deck Tai Chi.",
      image: "/images/vietnam/cruise.jpg",
      accent: "All-inclusive gourmet menus",
    },
  ];

  return (
    <section id="stays" className="relative bg-[#FAF7F2] px-6 py-24 md:py-36 overflow-hidden border-b border-[#1F5F5B]/10">
      
      {/* Decorative vertical thread connector lines */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-[#1F5F5B]/5 select-none pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title pane */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20 space-y-3"
        >
          <span className="text-xs font-bold tracking-widest text-[#5E8B7E] uppercase block">
            Historic Living Museum
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#2F3E46] tracking-tight">
            Indochina Stays Collection
          </h2>
          <p className="text-xs sm:text-sm font-light text-[#2F3E46]/70 max-w-xl mx-auto leading-relaxed">
            We avoid generic commercial resorts. These are handcrafted properties selected for their design narrative, historic architecture, and premium locations.
          </p>
        </motion.div>

        {/* 4 Cards Grid - Styled as asymmetric circular Moon-gate medallions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staysList.map((resort, idx) => (
            <motion.div
              key={resort.name}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col justify-between bg-white rounded-[32px] border border-[#1F5F5B]/15 hover:border-[#1F5F5B]/30 hover:shadow-xl transition-all duration-350 p-6 shadow-md"
            >
              <div className="space-y-5">
                
                {/* Circular Porthole Image Frame (Indochine styling) */}
                <div className="relative h-[200px] w-full rounded-[24px] overflow-hidden border-2 border-[#1F5F5B]/10">
                  <Image
                    src={resort.image}
                    alt={resort.name}
                    fill
                    className="object-cover scale-[1.03] group-hover:scale-100 opacity-95 transition-transform duration-[6s]"
                    sizes="(max-width: 768px) 100vw, 220px"
                  />
                  <div className="absolute inset-0 bg-[#1F5F5B]/10" />

                  {/* Circular seal tag */}
                  <div className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 border border-[#1F5F5B]/15 text-[#1F5F5B] backdrop-blur-md shadow-sm">
                    <Ship className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 text-left">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-[#D9A441] block">
                    {resort.tagline}
                  </span>
                  
                  <h3 className="text-lg font-bold font-serif text-[#2F3E46] tracking-tight leading-tight group-hover:text-[#1F5F5B] transition-colors">
                    {resort.name}
                  </h3>

                  <p className="text-[11px] text-[#2F3E46]/75 font-light leading-relaxed">
                    {resort.desc}
                  </p>
                </div>

              </div>

              {/* Accent footer details */}
              <div className="pt-4 border-t border-[#1F5F5B]/10 mt-5 flex items-center gap-1.5 text-[9px] font-bold text-[#1F5F5B] uppercase tracking-wider text-left">
                <Sparkles className="h-3.5 w-3.5 shrink-0 animate-pulse text-[#D9A441]" />
                <span>Highlight: {resort.accent}</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
