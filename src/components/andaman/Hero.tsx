"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { andamanData } from "@/lib/andaman/data";
import { Compass, Ship, Waves } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax transform equations
  const yBg = useTransform(scrollY, [0, 800], [0, 200]);
  const scaleBg = useTransform(scrollY, [0, 800], [1, 1.15]);
  const yText = useTransform(scrollY, [0, 800], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);

  const openForm = () => {
    window.dispatchEvent(new CustomEvent("openLeadForm"));
  };

  return (
    <section className="relative h-[95vh] w-full overflow-hidden flex items-center justify-center bg-[#0C4A6E]">
      {/* Background Media with Parallax */}
      <motion.div
        style={{ y: yBg, scale: scaleBg }}
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        {/* Cinematic Backdrop Image */}
        <img
          src="/images/andaman/hero-desktop.jpg"
          alt="Andaman & Nicobar Islands Hero"
          className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.05]"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C4A6E]/40 via-transparent to-[#0C4A6E]/90" />
        
        {/* Atmospheric glow orbs */}
        <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-[#22D3EE]/8 rounded-full blur-[180px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#FB923C]/5 rounded-full blur-[160px] mix-blend-screen" />
      </motion.div>

      {/* Floating Animated Organic Waves on top */}
      <div className="absolute bottom-0 left-0 right-0 z-10 select-none pointer-events-none overflow-hidden h-[120px] w-full">
        <svg
          className="relative w-full h-full block"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            fill="#FFF7ED"
          />
        </svg>
      </div>

      {/* Hero Content Area */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 flex flex-col items-center mt-[-40px]"
      >
        {/* Floating Category Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-[0.25em] text-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.15)]"
        >
          <Compass className="w-3.5 h-3.5 animate-spin-slow text-[#FB923C]" />
          <span>Outbound Premium Expeditions</span>
        </motion.div>

        {/* Minimal but Emotional Heading */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05]"
          >
            Andaman <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-white to-[#FB923C] italic font-normal">Islands</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-white/80 text-lg sm:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
          >
            {andamanData.hero.subheadline}
          </motion.p>
        </div>

        {/* Glowing CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
        >
          <button
            onClick={openForm}
            className="group relative w-full sm:w-auto px-8 py-4.5 rounded-full overflow-hidden text-white font-bold uppercase tracking-wider text-xs shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-transform duration-300 hover:scale-105 active:scale-95 bg-[#0891B2] hover:bg-[#0E7490]"
          >
            <span className="relative z-20 flex items-center justify-center gap-2">
              {andamanData.hero.primaryCta}
            </span>
          </button>
          
          <a
            href={`https://wa.me/${andamanData.whatsapp.number}?text=${encodeURIComponent(andamanData.whatsapp.heroMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-8 py-4 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all duration-300"
          >
            <Ship className="w-3.5 h-3.5 text-[#22D3EE] group-hover:translate-x-0.5 transition-transform" />
            <span>Speak to Specialist</span>
          </a>
        </motion.div>

        {/* Trust Badge Band floating on bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 pt-6"
        >
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-white/70">
            <Waves className="w-4 h-4 text-[#22D3EE]" />
            <span>No Visa Needed for Indian Citizens</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/30 hidden sm:block" />
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-white/70">
            <Compass className="w-4 h-4 text-[#FB923C]" />
            <span>Direct Flights from South Indian Hubs</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
