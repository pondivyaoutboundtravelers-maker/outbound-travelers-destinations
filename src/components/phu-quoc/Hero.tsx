"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Sparkles, ShieldCheck, Heart, Plane, ArrowDown } from "lucide-react";
import { phuQuocTrustBadges } from "@/data/phu-quoc";

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
      "Hi Outbound Travelers! I am ready to design my premium Phu Quoc luxury honeymoon. Please share details and quotes."
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
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background Cinematic Parallax Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/phu-quoc/hero.jpg"
          alt="Cinematic Aerial Phu Quoc Island Sanctuary"
          fill
          priority
          className="object-cover scale-[1.03] opacity-65 animate-[slow-pan_20s_ease-in-out_infinite]"
          sizes="100vw"
        />
        
        {/* Soft elegant fog gradients and warm sand dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/30 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,118,110,0.12),transparent_75%)]" />
      </div>

      {/* Floating high-end header */}
      <div className="w-full z-20 pt-8 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2"
        >
          <Compass className="h-5 w-5 text-[#0F766E]" />
          <span className="font-serif font-bold text-white text-base tracking-widest uppercase">
            Outbound <span className="text-[#0F766E] font-normal italic">Travelers</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hidden md:flex items-center gap-10 text-[10px] text-neutral-450 tracking-widest font-semibold uppercase"
        >
          <button onClick={() => document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-teal-400 transition-colors">Philosophy</button>
          <button onClick={() => document.getElementById("resorts")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-teal-400 transition-colors">Resorts</button>
          <button onClick={() => document.getElementById("rituals")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-teal-400 transition-colors">Rituals</button>
          <button onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-teal-400 transition-colors">Journeys</button>
        </motion.div>
      </div>

      {/* Minimal Centered Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto space-y-8">
        
        {/* Editorial Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-2 border border-teal-500/10 bg-teal-950/10 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-teal-450 text-teal-400"
        >
          <Sparkles className="h-3 w-3 fill-teal-400 text-teal-400" />
          <span>Quiet Luxury · Vietnam’s Island Escape</span>
        </motion.div>

        {/* Serif Headings */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.05] tracking-tight"
          >
            The Honeymoon Island <br />
            <span className="bg-gradient-to-r from-teal-400 via-emerald-350 to-teal-500 bg-clip-text text-transparent italic font-normal font-serif">
              Nobody Told You About
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-neutral-350 font-light leading-relaxed tracking-wide px-4 text-neutral-350 text-neutral-400"
          >
            Bai Sao at sunrise. Emerald Bay after rain. Cable cars above the Gulf of Thailand. Phu Quoc is not loud luxury — it’s slow luxury.
          </motion.p>
        </div>

        {/* Glassmorphism CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto px-6"
        >
          <button
            onClick={handleWhatsApp}
            className="group w-full sm:w-auto relative overflow-hidden rounded-full bg-teal-800 hover:bg-teal-700 px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.03] active:scale-97 shadow-[0_0_20px_rgba(15,118,110,0.2)]"
          >
            <span>Design My Honeymoon</span>
          </button>

          <button
            onClick={handleScrollToPackages}
            className="w-full sm:w-auto rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest py-4 px-8 transition-all duration-300 active:scale-97 backdrop-blur-md"
          >
            <span>Explore Island Journeys</span>
          </button>
        </motion.div>

      </div>

      {/* Footer Trust Chips & Vertical Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full border-t border-white/5 bg-[#0a0a0a]/90 backdrop-blur-md py-6 z-20 flex flex-col items-center gap-4"
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-wrap justify-center items-center gap-y-4 gap-x-8 sm:gap-x-12 md:gap-x-16 text-[10px] font-bold tracking-widest text-neutral-450 uppercase text-neutral-400">
          {phuQuocTrustBadges.map((badge, idx) => {
            const IconComponent = getIcon(badge.icon);
            return (
              <div key={idx} className="flex items-center gap-2">
                <IconComponent className="h-4 w-4 text-[#0F766E] shrink-0" />
                <span>{badge.label}</span>
              </div>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={handleScrollToNext}
          className="group flex flex-col items-center gap-1.5 text-neutral-600 hover:text-white transition-colors duration-300 pt-2"
        >
          <span className="text-[8px] uppercase tracking-widest font-bold">Discover</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-teal-500" />
        </button>
      </motion.div>
    </section>
  );
}
