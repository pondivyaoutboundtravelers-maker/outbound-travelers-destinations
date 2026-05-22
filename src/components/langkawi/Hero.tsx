"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, Anchor, MapPin } from "lucide-react";
import { langkawiData } from "@/data/langkawi";

export default function Hero() {
  const triggerForm = () => {
    window.dispatchEvent(new CustomEvent("openLeadForm"));
  };

  const scrollToPackages = () => {
    const el = document.getElementById("packages-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const iconMap: Record<string, React.ReactNode> = {
    visa: <ShieldCheck className="h-5 w-5 text-amber-500" />,
    vetted: <MapPin className="h-5 w-5 text-amber-500" />,
    cruise: <Anchor className="h-5 w-5 text-amber-500" />,
    support: <Compass className="h-5 w-5 text-amber-500" />,
  };

  return (
    <div className="relative min-h-[95svh] flex flex-col justify-end overflow-hidden bg-black text-white py-16 md:py-24">
      {/* Immersive background image with dark vignette overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={langkawiData.hero.desktopImage}
          alt={langkawiData.hero.imageAlt}
          fill
          priority
          className="object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-900/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-8 space-y-8 md:space-y-12">
        <div className="max-w-4xl space-y-6">
          {/* Subtle Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md text-amber-400 text-xs font-bold uppercase tracking-widest"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-ping" />
            Duty-Free Tropical Paradise
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
          >
            Honeymoon, <span className="text-amber-500 italic font-normal">On Island Time</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-neutral-300 text-lg md:text-2xl font-light tracking-wide max-w-2xl leading-relaxed"
          >
            Cenang&apos;s energy. Tanjung Rhu&apos;s silence. Datai Bay&apos;s rainforest.
          </motion.p>
        </div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 pt-2"
        >
          <button
            onClick={triggerForm}
            className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-600 transition-all font-bold text-black uppercase tracking-wider text-sm shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95"
          >
            Plan My Langkawi Honeymoon
          </button>
          <button
            onClick={scrollToPackages}
            className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 transition-all font-bold text-white uppercase tracking-wider text-sm backdrop-blur-md hover:scale-105 active:scale-95"
          >
            Explore Packages
          </button>
        </motion.div>

        {/* Vetted Trust Chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {langkawiData.trustBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                {iconMap[badge.icon] || <ShieldCheck className="h-5 w-5 text-amber-500" />}
              </div>
              <span className="text-xs font-semibold text-neutral-300 tracking-wider">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
