"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { agraData } from "@/lib/agra/data";
import { Camera, Sunrise, MoveRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();

  // Cinematic Parallax
  const yBg = useTransform(scrollY, [0, 1000], [0, 250]);
  const scaleBg = useTransform(scrollY, [0, 1000], [1, 1.15]);
  const yText = useTransform(scrollY, [0, 800], [0, -120]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);

  const openForm = () => {
    window.dispatchEvent(new CustomEvent("openLeadForm"));
  };

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-[#052E16] flex items-center justify-center">
      {/* Background Media with Parallax */}
      <motion.div
        style={{ y: yBg, scale: scaleBg }}
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        <img
          src="/images/agra/hero.jpg"
          alt="Taj Mahal at Dawn"
          className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1] saturate-[0.9]"
        />
        {/* Emerald gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#052E16] via-[#0B3D2E]/40 to-transparent" />
        
        {/* Soft dawn sunbeams */}
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-bl from-[#C6A15B]/20 via-transparent to-transparent opacity-70 mix-blend-screen" />
        
        {/* Floating marble/dust particles */}
        <motion.div 
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] w-[10vw] h-[10vw] bg-[#FAFAF7]/10 rounded-full blur-[80px] mix-blend-screen"
        />
        <motion.div 
          animate={{ y: [0, 40, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[30%] right-[20%] w-[15vw] h-[15vw] bg-[#C6A15B]/10 rounded-full blur-[100px] mix-blend-screen"
        />
      </motion.div>

      {/* Mughal Arch Overlay Frame Transitioning to Soft Marble White */}
      <div className="absolute inset-x-0 bottom-0 h-48 z-10 pointer-events-none">
         <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-full block">
           <path d="M0,160 L1440,160 L1440,100 C1080,100 1080,0 720,0 C360,0 360,100 0,100 Z" fill="#FAFAF7" />
         </svg>
      </div>

      {/* Hero Content Area */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-20 w-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center mt-[-10vh]"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-5 py-2 border border-[#C6A15B]/30 bg-[#052E16]/40 backdrop-blur-md rounded-full shadow-lg mb-8"
        >
          <Sunrise className="w-4 h-4 text-[#C6A15B]" />
          <span className="text-[#FAFAF7] text-xs font-semibold uppercase tracking-[0.25em]">
            Emerald Mughal Luxury
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-5xl sm:text-7xl lg:text-[7rem] text-[#FAFAF7] leading-[1.05] tracking-tight drop-shadow-2xl mb-6"
        >
          Timeless <span className="italic font-light text-[#C6A15B]">Marble.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="text-[#F5F1E8] text-lg sm:text-xl font-light leading-relaxed tracking-wide max-w-3xl drop-shadow-md mb-12"
        >
          {agraData.hero.subheadline}
        </motion.p>

        {/* Floating CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center"
        >
          <button
            onClick={openForm}
            className="group relative px-8 py-5 bg-[#0B3D2E] text-[#C6A15B] font-sans font-medium uppercase tracking-[0.15em] text-sm overflow-hidden rounded-sm transition-all hover:bg-[#14532D] shadow-[0_0_30px_rgba(11,61,46,0.6)]"
          >
            <div className="absolute inset-0 w-0 bg-[#C6A15B]/10 group-hover:w-full transition-all duration-500 ease-out" />
            <span className="relative z-10 flex items-center gap-3">
              {agraData.hero.primaryCta}
            </span>
          </button>
          
          <a
            href={`https://wa.me/${agraData.whatsapp.number}?text=${encodeURIComponent(agraData.whatsapp.heroMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-5 border border-[#C6A15B]/40 bg-transparent backdrop-blur-sm text-[#FAFAF7] font-sans font-medium uppercase tracking-[0.15em] text-sm flex items-center gap-3 transition-all hover:bg-[#0B3D2E]/40 hover:border-[#C6A15B]"
          >
            <MoveRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-2 transition-transform duration-300" />
            <span>{agraData.hero.secondaryCta}</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
