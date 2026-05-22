"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hotel, Sparkles } from "lucide-react";

export default function HeritageStaySpotlight() {
  const palacesList = [
    {
      name: "Rambagh Palace, Jaipur",
      tagline: "The Jewel of Jaipur",
      desc: "Experience grand palatial living inside the former residence of the Maharaja. Elegant symmetric courtyards, indoor pools, and peacocks on expansive lawns.",
      image: "/images/rajasthan/rambagh.jpg",
      accent: "Royal Mughal garden dining curations",
    },
    {
      name: "Taj Lake Palace, Udaipur",
      tagline: "Floating White Marble Sanctuary",
      desc: "Sitting like a jewel in the middle of Lake Pichola. Accessible only by private boat, featuring butler service and historic vintage spa therapies.",
      image: "/images/rajasthan/lake-palace.jpg",
      accent: "Royal Gangaur historic barge dinners",
    },
    {
      name: "Umaid Bhawan, Jodhpur",
      tagline: "One of the World's Largest Residences",
      desc: "Golden-yellow sandstone art-deco palace sitting high above the Blue City. Majestic indoor pools, museum corridors, and expansive royal lawns.",
      image: "/images/rajasthan/umaid.jpg",
      accent: "Vintage car museum tours included",
    },
    {
      name: "Suryagarh, Jaisalmer",
      tagline: "Cinematic Desert Sandstone Palace",
      desc: "A boutique fortress sitting in Jaisalmer's golden desert fields. Elegant central courtyards featuring folk singers, peacocks, and luxury wellness.",
      image: "/images/rajasthan/suryagarh.jpg",
      accent: "Thar desert sunrise breakfasts",
    },
  ];

  return (
    <section id="palaces" className="relative bg-[#F7F3EE] px-6 py-20 md:py-32 overflow-hidden border-b border-[#D6B370]/20">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title pane */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs font-bold tracking-widest text-[#B76E79] uppercase mb-3 block">
            Historic Living Museum
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#5B2147] tracking-tight">
            Heritage Stay Spotlight
          </h2>
          <p className="mt-4 text-xs sm:text-sm font-light text-[#6B4F4F]">
            We bypass commercial generic blocks. These are historic royal residences that carry stories of kings, hand-painted murals, and quiet courtyards.
          </p>
        </motion.div>

        {/* 4 Palace cards grid with Sabyasachi framed elements */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {palacesList.map((resort, idx) => (
            <motion.div
              key={resort.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-end h-[500px] rounded-[30px] overflow-hidden border border-[#D6B370]/30 bg-white p-6 hover:border-[#D6B370]/60 transition-all duration-350 shadow-lg shadow-amber-900/5 hover:shadow-xl"
            >
              {/* background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={resort.image}
                  alt={resort.name}
                  fill
                  className="object-cover scale-[1.03] group-hover:scale-100 opacity-90 transition-transform duration-[6s]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                {/* elegant warm gold film tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B2147] via-[#5B2147]/25 to-transparent opacity-85" />
              </div>

              {/* Floating details icon */}
              <div className="absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-white/95 border border-[#D6B370]/30 text-[#5B2147] shadow-sm">
                <Hotel className="h-4.5 w-4.5 shrink-0" />
              </div>

              {/* story text */}
              <div className="relative z-10 space-y-3">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#D6B370] block">
                  {resort.tagline}
                </span>

                <h3 className="text-xl font-bold font-serif text-white tracking-tight leading-snug">
                  {resort.name}
                </h3>

                <p className="text-[11px] text-neutral-200 font-light leading-relaxed">
                  {resort.desc}
                </p>

                <div className="pt-2.5 border-t border-white/10 flex items-center gap-1.5 text-[9px] font-bold text-[#D6B370] uppercase tracking-wider">
                  <Sparkles className="h-3 w-3 shrink-0 animate-pulse text-[#B76E79]" />
                  <span>Highlight: {resort.accent}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
