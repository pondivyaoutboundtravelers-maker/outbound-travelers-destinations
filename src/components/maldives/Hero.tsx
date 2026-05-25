"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { maldivesData } from "@/lib/maldives/data";
import { Palmtree, MoveRight, Sparkles, Heart, Waves, Gift } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = { palmtree: <Palmtree className="w-4 h-4" />, heart: <Heart className="w-4 h-4" />, waves: <Waves className="w-4 h-4" />, sparkles: <Gift className="w-4 h-4" /> };

export default function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1200], [0, 280]);
  const scaleBg = useTransform(scrollY, [0, 1200], [1, 1.15]);
  const yText = useTransform(scrollY, [0, 900], [0, -130]);
  const opacityText = useTransform(scrollY, [0, 700], [1, 0]);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-[#052E16] flex items-center">
      <motion.div style={{ y: yBg, scale: scaleBg }} className="absolute inset-0 z-0 select-none pointer-events-none">
        <img src="/images/maldives/hero.jpg" alt="Maldives overwater villa at sunset" className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.15] saturate-[1.15]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#052E16] via-[#052E16]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#052E16]/65 via-transparent to-[#052E16]/40" />
        {/* Aqua atmospheric glow */}
        <div className="absolute top-[-10%] right-[5%] w-[50vw] h-[50vw] bg-gradient-to-bl from-[#06B6D4]/10 via-[#06B6D4]/03 to-transparent rounded-full blur-[80px] mix-blend-screen" />
        <div className="absolute bottom-[15%] left-[10%] w-[35vw] h-[35vw] bg-gradient-to-tr from-[#C6A15B]/08 to-transparent rounded-full blur-[60px] mix-blend-screen" />
        {/* Water caustics overlay */}
        <div className="absolute inset-0 opacity-[0.025] mix-blend-screen pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2306B6D4' stroke-width='0.5' opacity='0.8'%3E%3Cellipse cx='20' cy='20' rx='15' ry='8' transform='rotate(30 20 20)'/%3E%3Cellipse cx='60' cy='50' rx='12' ry='6' transform='rotate(-20 60 50)'/%3E%3Cellipse cx='40' cy='70' rx='18' ry='7' transform='rotate(15 40 70)'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '80px 80px' }} />
        {/* Floating tropical particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div key={i} animate={{ y: [0, -30 - i * 10, 0], opacity: [0.05, 0.2, 0.05] }} transition={{ duration: 7 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
            className="absolute rounded-full mix-blend-screen" style={{ left: `${15 + i * 20}%`, bottom: `${25 + i * 10}%`, width: `${6 + i * 3}vw`, height: `${6 + i * 3}vw`, background: i % 2 === 0 ? 'radial-gradient(circle, rgba(6,182,212,0.08), transparent)' : 'radial-gradient(circle, rgba(198,161,91,0.06), transparent)', filter: `blur(${40 + i * 15}px)` }} />
        ))}
      </motion.div>

      {/* Coral reef SVG divider */}
      <div className="absolute inset-x-0 bottom-0 h-28 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 112" preserveAspectRatio="none" className="w-full h-full block">
          <defs><linearGradient id="aquaLine" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#06B6D4" stopOpacity="0" /><stop offset="50%" stopColor="#06B6D4" stopOpacity="0.5" /><stop offset="100%" stopColor="#06B6D4" stopOpacity="0" /></linearGradient></defs>
          <path d="M0,112 L1440,112 L1440,50 Q1360,30 1280,50 Q1200,70 1120,45 Q1040,20 960,50 Q880,80 800,45 Q720,10 640,50 Q560,90 480,45 Q400,0 320,50 Q240,80 160,45 Q80,10 0,50 Z" fill="#FAF7F2" />
          <path d="M0,50 Q80,10 160,45 Q240,80 320,50 Q400,0 480,45 Q560,90 640,50 Q720,10 800,45 Q880,80 960,50 Q1040,20 1120,45 Q1200,70 1280,50 Q1360,30 1440,50" fill="none" stroke="url(#aquaLine)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Hero content */}
      <motion.div style={{ y: yText, opacity: opacityText }} className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col items-start space-y-7">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 border border-[#06B6D4]/25 bg-[#052E16]/60 backdrop-blur-xl rounded-full">
            <Sparkles className="w-4 h-4 text-[#06B6D4]" />
            <span className="text-[#DCE7DD] text-xs font-semibold uppercase tracking-[0.3em]">Emerald Ocean Luxury</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.3, delay: 0.2 }}
            className="font-serif text-5xl sm:text-7xl lg:text-[6.5rem] leading-[1.03] tracking-tight drop-shadow-2xl">
            <span className="text-[#FAF7F2]">Paradise</span>{" "}
            <span className="italic font-light text-[#06B6D4]">Found.</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.6 }}
            className="relative pl-6 border-l-2 border-[#06B6D4]/30 max-w-xl">
            <p className="text-[#DCE7DD] text-base sm:text-lg font-light leading-relaxed tracking-wide">{maldivesData.hero.subheadline}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-5 pt-2">
            <button onClick={() => window.dispatchEvent(new CustomEvent("openLeadForm"))}
              className="group relative px-8 py-5 bg-[#0B3D2E] text-[#06B6D4] font-bold uppercase tracking-[0.12em] text-sm overflow-hidden rounded-sm transition-all duration-300 shadow-[0_0_40px_rgba(6,182,212,0.15)] border border-[#06B6D4]/20 hover:shadow-[0_0_60px_rgba(6,182,212,0.25)]">
              <div className="absolute inset-0 w-0 bg-[#06B6D4]/10 group-hover:w-full transition-all duration-500 ease-out" />
              <span className="relative z-10 flex items-center gap-3"><Palmtree className="w-4 h-4" />{maldivesData.hero.primaryCta}</span>
            </button>
            <a href={`https://wa.me/${maldivesData.whatsapp.number}?text=${encodeURIComponent(maldivesData.whatsapp.heroMessage)}`} target="_blank" rel="noopener noreferrer"
              className="group px-8 py-5 border border-[#C6A15B]/30 bg-transparent backdrop-blur-sm text-[#FAF7F2] font-medium uppercase tracking-[0.15em] text-sm flex items-center gap-3 transition-all duration-300 hover:bg-[#0B3D2E]/40 hover:border-[#C6A15B] rounded-sm">
              <MoveRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-2 transition-transform duration-300" />{maldivesData.hero.secondaryCta}
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, delay: 1 }}
          className="hidden lg:flex flex-col gap-4 items-end">
          {maldivesData.trustBadges.map((badge, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.2 + idx * 0.15 }}
              className="px-6 py-4 bg-[#052E16]/65 backdrop-blur-xl border border-[#06B6D4]/12 flex items-center gap-4 min-w-[270px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-sm hover:border-[#06B6D4]/30 transition-all duration-300 group">
              <div className="w-9 h-9 rounded-full bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4] group-hover:bg-[#06B6D4]/20 transition-colors">{iconMap[badge.icon] || <Sparkles className="w-4 h-4" />}</div>
              <span className="text-[#DCE7DD] font-light tracking-wider text-sm group-hover:text-[#FAF7F2] transition-colors">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
