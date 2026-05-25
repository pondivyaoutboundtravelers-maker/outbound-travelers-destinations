"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { dubaiData } from "@/lib/dubai/data";
import { Plane, MoveRight, Sparkles, Headset, Building2, Car } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  plane: <Plane className="w-4 h-4" />,
  headset: <Headset className="w-4 h-4" />,
  building: <Building2 className="w-4 h-4" />,
  car: <Car className="w-4 h-4" />,
};

export default function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1200], [0, 280]);
  const scaleBg = useTransform(scrollY, [0, 1200], [1, 1.15]);
  const yText = useTransform(scrollY, [0, 900], [0, -130]);
  const opacityText = useTransform(scrollY, [0, 700], [1, 0]);

  const openForm = () => window.dispatchEvent(new CustomEvent("openLeadForm"));

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-[#050816] flex items-center">
      {/* Background with parallax */}
      <motion.div style={{ y: yBg, scale: scaleBg }} className="absolute inset-0 z-0 select-none pointer-events-none">
        <img src="/images/dubai/hero.jpg" alt="Dubai skyline at night with Burj Khalifa" className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.2] saturate-[1.1]" />
        {/* Deep midnight gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/70 via-transparent to-[#050816]/50" />

        {/* Golden atmospheric glow */}
        <div className="absolute top-[-10%] right-[10%] w-[45vw] h-[45vw] bg-gradient-to-bl from-[#CA8A04]/12 via-[#CA8A04]/04 to-transparent rounded-full blur-[80px] mix-blend-screen" />
        <div className="absolute bottom-[20%] left-[5%] w-[30vw] h-[30vw] bg-gradient-to-tr from-[#0EA5E9]/08 via-transparent to-transparent rounded-full blur-[60px] mix-blend-screen" />

        {/* Arabic geometric overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-screen pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23CA8A04' stroke-width='0.5'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3Cpath d='M30 10L50 30L30 50L10 30Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} />

        {/* Animated skyline light particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div key={i}
            animate={{ y: [0, -60 - i * 15, 0], opacity: [0.05, 0.25 + i * 0.05, 0.05] }}
            transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
            className="absolute rounded-full mix-blend-screen"
            style={{ left: `${15 + i * 17}%`, bottom: `${20 + i * 8}%`, width: `${4 + i * 2}vw`, height: `${4 + i * 2}vw`, background: i % 2 === 0 ? 'radial-gradient(circle, rgba(202,138,4,0.08), transparent)' : 'radial-gradient(circle, rgba(14,165,233,0.06), transparent)', filter: `blur(${40 + i * 10}px)` }}
          />
        ))}
      </motion.div>

      {/* Futuristic wave bottom divider with golden glow */}
      <div className="absolute inset-x-0 bottom-0 h-28 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 112" preserveAspectRatio="none" className="w-full h-full block">
          <defs>
            <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#CA8A04" stopOpacity="0" />
              <stop offset="50%" stopColor="#CA8A04" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#CA8A04" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,112 L1440,112 L1440,40 Q1200,0 960,40 Q720,80 480,40 Q240,0 0,40 Z" fill="#FAF7F2" />
          <path d="M0,40 Q240,0 480,40 Q720,80 960,40 Q1200,0 1440,40" fill="none" stroke="url(#goldLine)" strokeWidth="2" />
        </svg>
      </div>

      {/* Hero Content */}
      <motion.div style={{ y: yText, opacity: opacityText }} className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left: Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-7">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 border border-[#CA8A04]/25 bg-[#050816]/60 backdrop-blur-xl rounded-full shadow-[0_4px_30px_rgba(202,138,4,0.08)]">
            <Sparkles className="w-4 h-4 text-[#FACC15]" />
            <span className="text-[#F5E6C8] text-xs font-semibold uppercase tracking-[0.3em]">Futuristic Arabian Luxury</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.3, delay: 0.2 }}
            className="font-serif text-5xl sm:text-7xl lg:text-[6.5rem] leading-[1.03] tracking-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-[#FACC15] via-[#CA8A04] to-[#B45309] bg-clip-text text-transparent">Future</span>
            <span className="text-[#FAF7F2]"> Meets </span>
            <span className="bg-gradient-to-r from-[#F5E6C8] to-[#CA8A04] bg-clip-text text-transparent italic font-light">Desert.</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.6 }}
            className="relative pl-6 border-l-2 border-[#CA8A04]/30 max-w-xl">
            <p className="text-[#E7D3B3] text-base sm:text-lg font-light leading-relaxed tracking-wide">{dubaiData.hero.subheadline}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-5 pt-2">
            <button onClick={openForm}
              className="group relative px-8 py-5 bg-gradient-to-r from-[#CA8A04] to-[#B45309] text-[#050816] font-sans font-bold uppercase tracking-[0.12em] text-sm overflow-hidden rounded-sm transition-all duration-300 shadow-[0_0_40px_rgba(202,138,4,0.2)] hover:shadow-[0_0_60px_rgba(202,138,4,0.35)]">
              <div className="absolute inset-0 w-0 bg-white/15 group-hover:w-full transition-all duration-500 ease-out" />
              <span className="relative z-10 flex items-center gap-3">{dubaiData.hero.primaryCta}</span>
            </button>
            <a href={`https://wa.me/${dubaiData.whatsapp.number}?text=${encodeURIComponent(dubaiData.whatsapp.heroMessage)}`} target="_blank" rel="noopener noreferrer"
              className="group px-8 py-5 border border-[#CA8A04]/30 bg-[#050816]/30 backdrop-blur-sm text-[#FAF7F2] font-sans font-medium uppercase tracking-[0.15em] text-sm flex items-center gap-3 transition-all duration-300 hover:bg-[#CA8A04]/10 hover:border-[#CA8A04]/60 rounded-sm">
              <MoveRight className="w-4 h-4 text-[#FACC15] group-hover:translate-x-2 transition-transform duration-300" />
              <span>{dubaiData.hero.secondaryCta}</span>
            </a>
          </motion.div>
        </div>

        {/* Right: Floating trust chips */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, delay: 1 }}
          className="hidden lg:flex flex-col gap-4 items-end">
          {dubaiData.trustBadges.map((badge, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.2 + idx * 0.15 }}
              className="px-6 py-4 bg-[#050816]/70 backdrop-blur-xl border border-[#CA8A04]/12 flex items-center gap-4 min-w-[280px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-sm hover:border-[#CA8A04]/35 transition-all duration-300 group">
              <div className="w-9 h-9 rounded-full bg-[#CA8A04]/10 flex items-center justify-center text-[#FACC15] group-hover:bg-[#CA8A04]/20 transition-colors duration-300">
                {iconMap[badge.icon] || <Sparkles className="w-4 h-4" />}
              </div>
              <span className="text-[#E7D3B3] font-sans font-light tracking-wider text-sm group-hover:text-[#FAF7F2] transition-colors">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
