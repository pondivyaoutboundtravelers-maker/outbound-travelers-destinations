"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { delhiData } from "@/lib/delhi/data";
import { Compass, Sparkles, Navigation } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();

  // Cinematic Parallax
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const scaleBg = useTransform(scrollY, [0, 1000], [1, 1.2]);
  const yText = useTransform(scrollY, [0, 800], [0, -150]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);

  const openForm = () => {
    window.dispatchEvent(new CustomEvent("openLeadForm"));
  };

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-[#111827] flex items-center justify-center">
      {/* Background Media with Parallax */}
      <motion.div
        style={{ y: yBg, scale: scaleBg }}
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        <img
          src="/images/delhi/hero.jpg"
          alt="Humayuns Tomb at Dawn"
          className="w-full h-full object-cover filter brightness-[0.6] sepia-[0.3] contrast-[1.1]"
        />
        {/* Soft warm gradient fog */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#2D1606]/40 to-transparent" />
        
        {/* Sunbeams / Atmospheric lighting */}
        <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-gradient-to-bl from-[#D4A373]/20 via-transparent to-transparent opacity-60 mix-blend-screen" />
        
        {/* Floating dust particles (simulated via subtle glowing orbs) */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[20%] w-[15vw] h-[15vw] bg-[#B45309]/10 rounded-full blur-[100px] mix-blend-screen"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] right-[25%] w-[20vw] h-[20vw] bg-[#D4A373]/10 rounded-full blur-[120px] mix-blend-screen"
        />
      </motion.div>

      {/* Mughal Arch Overlay Frame */}
      <div className="absolute inset-x-0 bottom-0 h-40 z-10 pointer-events-none">
         <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-full block">
           {/* Custom arch geometry transitioning to Vintage Ivory */}
           <path d="M0,160 L1440,160 L1440,80 C1200,80 1200,0 720,0 C240,0 240,80 0,80 Z" fill="#F8F4EC" />
         </svg>
      </div>

      {/* Floating Typography & Content */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-[-10vh]"
      >
        {/* Left Side: Editorial Typography */}
        <div className="lg:col-span-8 flex flex-col items-start space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-5 py-2 border border-[#D4A373]/40 bg-[#111827]/40 backdrop-blur-md rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          >
            <Compass className="w-4 h-4 text-[#D4A373]" />
            <span className="text-[#EADBC8] text-xs font-semibold uppercase tracking-[0.3em]">
              Heritage Collection
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-5xl sm:text-7xl lg:text-[6.5rem] text-[#F8F4EC] leading-[1.05] tracking-tight drop-shadow-2xl"
          >
            Empires <span className="italic font-light text-[#D4A373]">in Stone.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="relative pl-6 border-l border-[#D4A373]/50 max-w-2xl"
          >
            <p className="text-[#EADBC8] text-lg sm:text-xl font-light leading-relaxed tracking-wide">
              {delhiData.hero.subheadline}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-5 pt-4"
          >
            <button
              onClick={openForm}
              className="group relative px-8 py-4.5 bg-[#7C2D12] text-[#F8F4EC] font-sans font-medium uppercase tracking-[0.15em] text-sm overflow-hidden rounded-sm transition-all hover:bg-[#B45309]"
            >
              <div className="absolute inset-0 w-0 bg-white/10 group-hover:w-full transition-all duration-500 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                {delhiData.hero.primaryCta}
              </span>
            </button>
            <a
              href={`https://wa.me/${delhiData.whatsapp.number}?text=${encodeURIComponent(delhiData.whatsapp.heroMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4.5 border border-[#D4A373]/40 bg-black/20 backdrop-blur-sm text-[#F8F4EC] font-sans font-medium uppercase tracking-[0.15em] text-sm flex items-center gap-3 transition-all hover:bg-[#D4A373]/10 hover:border-[#D4A373]"
            >
              <Navigation className="w-4 h-4 text-[#D4A373] group-hover:translate-x-1 transition-transform" />
              <span>{delhiData.hero.secondaryCta}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Trust Chips */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="hidden lg:flex flex-col gap-4 items-end justify-center"
        >
          {delhiData.trustBadges.map((badge, idx) => (
            <div 
              key={idx}
              className="px-6 py-4 bg-[#111827]/50 backdrop-blur-md border-l-2 border-[#D4A373] flex items-center gap-4 min-w-[280px] shadow-2xl"
            >
              <Sparkles className="w-5 h-5 text-[#D4A373]" />
              <span className="text-[#EADBC8] font-sans font-light tracking-wider text-sm">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
