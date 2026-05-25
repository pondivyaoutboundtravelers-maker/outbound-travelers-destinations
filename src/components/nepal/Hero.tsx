"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { nepalData } from "@/lib/nepal/data";
import { Mountain, MoveRight, Sparkles, Compass, Hotel, Landmark } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = { mountain: <Mountain className="w-4 h-4" />, temple: <Landmark className="w-4 h-4" />, hotel: <Hotel className="w-4 h-4" />, compass: <Compass className="w-4 h-4" /> };

export default function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1200], [0, 280]);
  const scaleBg = useTransform(scrollY, [0, 1200], [1, 1.15]);
  const yText = useTransform(scrollY, [0, 900], [0, -130]);
  const opacityText = useTransform(scrollY, [0, 700], [1, 0]);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-[#052E16] flex items-center">
      <motion.div style={{ y: yBg, scale: scaleBg }} className="absolute inset-0 z-0 select-none pointer-events-none">
        <img src="/images/nepal/hero.jpg" alt="Himalayan sunrise over snow-capped peaks" className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.2] saturate-[1.1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#052E16] via-[#052E16]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#052E16]/65 via-transparent to-[#052E16]/45" />
        {/* Sunrise amber glow */}
        <div className="absolute top-[-5%] right-[15%] w-[40vw] h-[40vw] bg-gradient-to-bl from-[#D97706]/12 via-[#D97706]/04 to-transparent rounded-full blur-[80px] mix-blend-screen" />
        <div className="absolute bottom-[20%] left-[8%] w-[30vw] h-[30vw] bg-gradient-to-tr from-[#C6A15B]/06 to-transparent rounded-full blur-[60px] mix-blend-screen" />
        {/* Animated mist particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div key={i} animate={{ x: [-30, 60, -30], opacity: [0.03, 0.12, 0.03] }} transition={{ duration: 10 + i * 3, repeat: Infinity, ease: "easeInOut", delay: i * 2.5 }}
            className="absolute rounded-full mix-blend-screen pointer-events-none" style={{ top: `${40 + i * 12}%`, left: `${5 + i * 22}%`, width: `${20 + i * 8}vw`, height: `${8 + i * 4}vw`, background: 'radial-gradient(ellipse, rgba(250,247,242,0.05), transparent)', filter: `blur(${35 + i * 12}px)` }} />
        ))}
        {/* Prayer flag colored dots floating */}
        {['#B91C1C', '#D97706', '#FAF7F2', '#0B3D2E', '#1E40AF'].map((c, i) => (
          <motion.div key={c} animate={{ y: [-5, 10, -5], x: [0, 8, 0] }} transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
            className="absolute w-2 h-2 rounded-full opacity-20 pointer-events-none" style={{ backgroundColor: c, top: `${15 + i * 3}%`, left: `${55 + i * 8}%` }} />
        ))}
      </motion.div>

      {/* Mountain ridge SVG divider */}
      <div className="absolute inset-x-0 bottom-0 h-24 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 96" preserveAspectRatio="none" className="w-full h-full block">
          <defs><linearGradient id="amberLine" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#D97706" stopOpacity="0" /><stop offset="50%" stopColor="#D97706" stopOpacity="0.5" /><stop offset="100%" stopColor="#D97706" stopOpacity="0" /></linearGradient></defs>
          <path d="M0,96 L1440,96 L1440,55 L1350,45 L1280,60 L1200,35 L1140,50 L1080,25 L1000,55 L940,30 L880,50 L800,20 L720,50 L660,35 L600,55 L520,30 L460,50 L380,25 L320,55 L240,35 L180,50 L100,30 L60,45 L0,40 Z" fill="#FAF7F2" />
          <path d="M0,40 L60,45 L100,30 L180,50 L240,35 L320,55 L380,25 L460,50 L520,30 L600,55 L660,35 L720,50 L800,20 L880,50 L940,30 L1000,55 L1080,25 L1140,50 L1200,35 L1280,60 L1350,45 L1440,55" fill="none" stroke="url(#amberLine)" strokeWidth="1.5" />
        </svg>
      </div>

      <motion.div style={{ y: yText, opacity: opacityText }} className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col items-start space-y-7">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 border border-[#D97706]/25 bg-[#052E16]/60 backdrop-blur-xl rounded-full">
            <Mountain className="w-4 h-4 text-[#D97706]" />
            <span className="text-[#DCE7DD] text-xs font-semibold uppercase tracking-[0.3em]">Himalayan Emerald Serenity</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.3, delay: 0.2 }}
            className="font-serif text-5xl sm:text-7xl lg:text-[6rem] leading-[1.03] tracking-tight drop-shadow-2xl">
            <span className="text-[#FAF7F2]">Where Earth</span><br />
            <span className="italic font-light text-[#D97706]">Touches Sky.</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.6 }}
            className="relative pl-6 border-l-2 border-[#D97706]/30 max-w-xl">
            <p className="text-[#DCE7DD] text-base sm:text-lg font-light leading-relaxed tracking-wide">{nepalData.hero.subheadline}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-5 pt-2">
            <button onClick={() => window.dispatchEvent(new CustomEvent("openLeadForm"))}
              className="group relative px-8 py-5 bg-[#0B3D2E] text-[#D97706] font-bold uppercase tracking-[0.12em] text-sm overflow-hidden rounded-sm transition-all duration-300 shadow-[0_0_40px_rgba(217,119,6,0.12)] border border-[#D97706]/20 hover:shadow-[0_0_60px_rgba(217,119,6,0.2)]">
              <div className="absolute inset-0 w-0 bg-[#D97706]/10 group-hover:w-full transition-all duration-500 ease-out" />
              <span className="relative z-10 flex items-center gap-3"><Mountain className="w-4 h-4" />{nepalData.hero.primaryCta}</span>
            </button>
            <a href={`https://wa.me/${nepalData.whatsapp.number}?text=${encodeURIComponent(nepalData.whatsapp.heroMessage)}`} target="_blank" rel="noopener noreferrer"
              className="group px-8 py-5 border border-[#C6A15B]/30 bg-transparent backdrop-blur-sm text-[#FAF7F2] font-medium uppercase tracking-[0.15em] text-sm flex items-center gap-3 transition-all duration-300 hover:bg-[#0B3D2E]/40 hover:border-[#C6A15B] rounded-sm">
              <MoveRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-2 transition-transform duration-300" />{nepalData.hero.secondaryCta}
            </a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, delay: 1 }}
          className="hidden lg:flex flex-col gap-4 items-end">
          {nepalData.trustBadges.map((badge, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.2 + idx * 0.15 }}
              className="px-6 py-4 bg-[#052E16]/65 backdrop-blur-xl border border-[#D97706]/12 flex items-center gap-4 min-w-[260px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-sm hover:border-[#D97706]/30 transition-all duration-300 group">
              <div className="w-9 h-9 rounded-full bg-[#D97706]/10 flex items-center justify-center text-[#D97706] group-hover:bg-[#D97706]/20 transition-colors">{iconMap[badge.icon] || <Sparkles className="w-4 h-4" />}</div>
              <span className="text-[#DCE7DD] font-light tracking-wider text-sm group-hover:text-[#FAF7F2] transition-colors">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
