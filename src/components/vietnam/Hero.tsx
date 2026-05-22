"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Sparkles, ShieldCheck, Heart, Plane, ArrowRight } from "lucide-react";
import { vietnamData } from "@/data/vietnam";

export default function Hero() {
  const handleScrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi Outbound Travelers! I am ready to plan my customized Indochine luxury Vietnam cultural tour. Please share details and quotes."
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#FAF7F2] text-[#2F3E46] pt-8">
      
      {/* High-end Minimalist Translucent Header */}
      <div className="w-full z-20 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto border-b border-[#1F5F5B]/10 pb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2"
        >
          <Compass className="h-5 w-5 text-[#1F5F5B] animate-spin-slow" />
          <span className="font-serif font-bold text-[#2F3E46] text-base tracking-widest uppercase">
            Outbound <span className="text-[#1F5F5B] font-normal italic">Travelers</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hidden md:flex items-center gap-10 text-[9px] text-[#2F3E46]/75 tracking-widest font-bold uppercase"
        >
          <button onClick={() => document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#1F5F5B] transition-all">Philosophy</button>
          <button onClick={() => document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#1F5F5B] transition-all">Destinations</button>
          <button onClick={() => document.getElementById("stays")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#1F5F5B] transition-all">Stays</button>
          <button onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#1F5F5B] transition-all">Packages</button>
        </motion.div>
      </div>

      {/* Layered Overlapping Indochine Canvas */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16">
        
        {/* Large Decorative Vertical Label: INDOCHINE */}
        <div className="absolute right-4 top-1/4 select-none pointer-events-none hidden lg:block">
          <span className="text-[120px] font-serif font-bold text-[#1F5F5B]/5 writing-mode-vertical tracking-[0.2em] leading-none uppercase">
            Indochine
          </span>
        </div>

        {/* Left Column: Asymmetrical Editorial Focus */}
        <div className="lg:col-span-6 space-y-8 text-left z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2"
          >
            <div className="h-px w-8 bg-[#1F5F5B]/50" />
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#5E8B7E]">
              Luxury Southeast Asia Journey · Vietnam
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7.5xl font-serif font-light text-[#2F3E46] leading-[1.05] tracking-tight"
            >
              Where Culture <br />
              <span className="text-[#1F5F5B] italic font-normal font-serif relative">
                Feels Cinematic.
                <span className="absolute bottom-1 left-0 w-full h-[2px] bg-[#D9A441]/40" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-md text-xs sm:text-sm text-[#2F3E46]/70 font-light leading-relaxed tracking-wider pt-2"
            >
              Lantern-lit evenings in Hội An. Limestone cliffs across Ha Long Bay. Hidden cafés in Hanoi. Vietnam blends culture, nature, and luxury into one unforgettable journey.
            </motion.p>
          </div>

          {/* Minimalist CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <button
              onClick={handleWhatsApp}
              className="group flex items-center justify-between w-full sm:w-auto rounded-full bg-[#1F5F5B] hover:bg-[#15423F] text-white px-8 py-4.5 text-[9px] font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-98 shadow-lg border border-[#1F5F5B] gap-4"
            >
              <span>Design My Vietnam Journey</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={handleScrollToPackages}
              className="w-full sm:w-auto rounded-full bg-transparent hover:bg-[#1F5F5B]/5 border border-[#1F5F5B]/30 text-[#1F5F5B] font-bold text-[9px] uppercase tracking-widest py-4.5 px-8 transition-all duration-300 active:scale-98"
            >
              <span>Explore Packages</span>
            </button>
          </motion.div>

        </div>

        {/* Right Column: Dynamic Circular Moon-gate Image Frame & Landscape Panel */}
        <div className="lg:col-span-6 relative h-[420px] sm:h-[500px] w-full flex items-center justify-center">
          
          {/* Decorative Bamboo Slat Background Screen */}
          <div className="absolute right-12 top-6 bottom-6 w-32 border-l border-r border-[#1F5F5B]/10 flex justify-between px-4 select-none pointer-events-none opacity-40">
            <div className="h-full w-px bg-[#1F5F5B]/10" />
            <div className="h-full w-px bg-[#1F5F5B]/10" />
          </div>

          {/* Primary Circular Moon-gate Frame (Tall Portrait) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative h-[380px] w-[260px] sm:h-[450px] sm:w-[320px] rounded-full overflow-hidden border-[8px] border-white shadow-2xl z-10"
          >
            <Image
              src="/images/vietnam/hero.jpg"
              alt="Hội An ancient river barge Indochine Outbound Travelers campaign"
              fill
              priority
              className="object-cover scale-[1.02] hover:scale-100 transition-transform duration-[8s]"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F5F5B]/30 to-transparent" />
          </motion.div>

          {/* Secondary Overlapping Landscape Frame with gold accent border */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-6 left-0 h-[150px] w-[220px] sm:h-[180px] sm:w-[280px] rounded-3xl overflow-hidden border-4 border-white shadow-xl z-20 hidden sm:block"
          >
            <Image
              src="/images/vietnam/halong.jpg"
              alt="Ha Long Bay limestone karsts Outbound Travelers"
              fill
              className="object-cover"
              sizes="200px"
            />
            <div className="absolute inset-0 bg-[#1F5F5B]/10" />
          </motion.div>

        </div>

      </div>

      {/* Elegant minimalist bottom trust badges bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full border-t border-[#1F5F5B]/10 bg-white/40 backdrop-blur-md py-6 z-20 flex flex-col items-center gap-4"
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-wrap justify-center items-center gap-y-4 gap-x-12 md:gap-x-20 text-[9px] font-bold tracking-[0.2em] text-[#2F3E46]/80 uppercase">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#D9A441]" />
            <span>Luxury Stays Curated</span>
          </div>
          <div className="flex items-center gap-2">
            <Compass className="h-4 w-4 text-[#1F5F5B]" />
            <span>Cruise Journeys Included</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-[#B86B4B]" />
            <span>Honeymoon-friendly routes</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#5E8B7E]" />
            <span>24/7 destination support</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
