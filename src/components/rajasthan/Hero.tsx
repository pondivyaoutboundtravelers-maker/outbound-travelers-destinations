"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Sparkles, ShieldCheck, Heart, Plane, ArrowDown } from "lucide-react";
import { rajasthanData } from "@/data/rajasthan";

export default function Hero() {
  const handleScrollToNext = () => {
    const el = document.getElementById("introduction");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToPackages = () => {
    const el = document.getElementById("packages");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi Outbound Travelers! I am ready to plan my customized royal contemporary India luxury Rajasthan tour. Please share details and quotes."
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  // Map icon names to Lucide elements
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Plane":
        return Plane;
      case "Sparkles":
        return Sparkles;
      case "Heart":
        return Heart;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#F7F3EE] text-[#5B2147] pt-6">
      
      {/* Soft elegant warm ambient radial background glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_30%,rgba(91,33,71,0.06),transparent_60%)]" />

      {/* Floating high-end lifestyle header */}
      <div className="w-full z-20 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto border-b border-[#D6B370]/30 pb-5">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2"
        >
          <Compass className="h-5 w-5 text-[#5B2147] animate-spin-slow" />
          <span className="font-serif font-bold text-[#5B2147] text-base tracking-widest uppercase">
            Outbound <span className="text-[#B76E79] font-normal italic">Travelers</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hidden md:flex items-center gap-10 text-[10px] text-[#5B2147]/75 tracking-widest font-semibold uppercase"
        >
          <button onClick={() => document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#B76E79] transition-colors">Philosophy</button>
          <button onClick={() => document.getElementById("circuits")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#B76E79] transition-colors">Circuits</button>
          <button onClick={() => document.getElementById("palaces")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#B76E79] transition-colors">Sanctuaries</button>
          <button onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#B76E79] transition-colors">Packages</button>
        </motion.div>
      </div>

      {/* Modern Split Editorial Hero Layout */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        
        {/* Left Column: Left-aligned editorial typography (Col-span 7) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Sabyasachi style Plum Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 border border-[#D6B370]/40 bg-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#5B2147]"
          >
            <Sparkles className="h-3 w-3 text-[#5B2147]" />
            <span>Luxury Heritage Circuit · Rajasthan</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-[#5B2147] leading-[1.1] tracking-tight"
            >
              Where India Still <br />
              <span className="text-[#B76E79] italic font-normal font-serif">
                Feels Royal.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-xl text-xs sm:text-sm md:text-base text-[#6B4F4F] font-light leading-relaxed tracking-wide"
            >
              Palaces over lakes. Forts above blue cities. Candlelit courtyards beneath desert skies. Rajasthan is India at its most majestic.
            </motion.p>
          </div>

          {/* Luxury CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
          >
            <button
              onClick={handleWhatsApp}
              className="group w-full sm:w-auto rounded-full bg-[#5B2147] hover:bg-[#421633] text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.03] active:scale-97 shadow-[0_4px_20px_rgba(91,33,71,0.15)] border border-[#5B2147]"
            >
              <span>Design My Royal Escape</span>
            </button>

            <button
              onClick={handleScrollToPackages}
              className="w-full sm:w-auto rounded-full bg-white hover:bg-[#F7F3EE] border border-[#D6B370]/40 text-[#5B2147] font-bold text-[10px] uppercase tracking-widest py-4 px-8 transition-all duration-300 active:scale-97 shadow-sm"
            >
              <span>Explore Luxury Rajasthan</span>
            </button>
          </motion.div>

        </div>

        {/* Right Column: Layered palace imagery with decorative borders (Col-span 5) */}
        <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] w-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative h-full w-full rounded-[40px] overflow-hidden border-4 border-white shadow-2xl shadow-amber-900/5"
          >
            <Image
              src="/images/rajasthan/hero.jpg"
              alt="Udaipur Lake Palace Golden Hour Sunrise Sabyasachi Style"
              fill
              priority
              className="object-cover scale-[1.02] hover:scale-100 transition-transform duration-[8s]"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            {/* Elegant warm velvet tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#5B2147]/20 to-transparent" />
          </motion.div>

          {/* Floating decorative arch medallion widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -bottom-4 -left-4 p-4 rounded-2xl bg-white border border-[#D6B370]/30 shadow-lg text-[#5B2147] flex items-center gap-2.5 z-10"
          >
            <Sparkles className="h-4.5 w-4.5 shrink-0 text-[#D6B370]" />
            <div className="text-left font-serif leading-none">
              <span className="text-[7px] uppercase font-bold text-[#B76E79] tracking-widest block">Sabyasachi Campaign</span>
              <span className="text-[10px] font-bold text-[#5B2147] tracking-tight block">Leela Palace Standard</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Trust Chips Bar & Scroll Prompter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full border-t border-[#D6B370]/20 bg-white/70 backdrop-blur-md py-6 z-20 flex flex-col items-center gap-4"
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-wrap justify-center items-center gap-y-4 gap-x-8 sm:gap-x-12 md:gap-x-16 text-[10px] font-bold tracking-widest text-[#6B4F4F] uppercase">
          {rajasthanData.trustChips.map((badge, idx) => {
            const IconComponent = getIcon(badge.icon);
            return (
              <div key={idx} className="flex items-center gap-2">
                <IconComponent className="h-4 w-4 text-[#5B2147] shrink-0" />
                <span>{badge.label}</span>
              </div>
            );
          })}
        </div>

        {/* Scroll Cues */}
        <button
          onClick={handleScrollToNext}
          className="group flex flex-col items-center gap-1 text-[#6B4F4F] hover:text-[#5B2147] transition-colors duration-300 pt-1"
        >
          <span className="text-[7px] uppercase tracking-widest font-bold text-[#B76E79]">Discover Grandeur</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-[#5B2147]" />
        </button>
      </motion.div>
    </section>
  );
}
