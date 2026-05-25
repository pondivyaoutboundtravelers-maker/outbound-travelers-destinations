"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { jaipurData } from "@/lib/jaipur/data";
import { Crown, MoveRight, Sparkles, Shield, Camera, Gem } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  castle: <Crown className="w-4 h-4" />,
  crown: <Shield className="w-4 h-4" />,
  camera: <Camera className="w-4 h-4" />,
  gem: <Gem className="w-4 h-4" />,
};

export default function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1200], [0, 300]);
  const scaleBg = useTransform(scrollY, [0, 1200], [1, 1.18]);
  const yText = useTransform(scrollY, [0, 900], [0, -140]);
  const opacityText = useTransform(scrollY, [0, 700], [1, 0]);
  const yTrust = useTransform(scrollY, [0, 600], [0, -60]);

  const openForm = () => {
    window.dispatchEvent(new CustomEvent("openLeadForm"));
  };

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-[#052E16] flex items-center">
      {/* Background with parallax */}
      <motion.div
        style={{ y: yBg, scale: scaleBg }}
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        <img
          src="/images/jaipur/hero.jpg"
          alt="Hawa Mahal at golden hour, Jaipur"
          className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.15] saturate-[1.1]"
        />
        {/* Deep emerald gradient fog */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#052E16] via-[#0B3D2E]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#052E16]/70 via-transparent to-[#052E16]/40" />

        {/* Golden hour atmospheric glow */}
        <div className="absolute top-[-15%] right-[-5%] w-[55vw] h-[55vw] bg-gradient-to-bl from-[#C6A15B]/15 via-[#C6A15B]/05 to-transparent opacity-80 mix-blend-screen rounded-full blur-[60px]" />

        {/* Jali lattice SVG overlay — unique to Jaipur */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C6A15B' fill-opacity='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z M30 8L52 30L30 52L8 30Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Animated royal dust particles */}
        <motion.div
          animate={{ y: [0, -25, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[10%] w-[12vw] h-[12vw] bg-[#C6A15B]/10 rounded-full blur-[90px] mix-blend-screen"
        />
        <motion.div
          animate={{ y: [0, 35, 0], opacity: [0.1, 0.35, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[35%] right-[15%] w-[18vw] h-[18vw] bg-[#FAF8F2]/08 rounded-full blur-[110px] mix-blend-screen"
        />
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0], opacity: [0.08, 0.25, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-[60%] left-[45%] w-[8vw] h-[8vw] bg-[#C6A15B]/12 rounded-full blur-[70px] mix-blend-screen"
        />
      </motion.div>

      {/* Scalloped Mughal Arch bottom divider — unique shape */}
      <div className="absolute inset-x-0 bottom-0 h-32 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 128" preserveAspectRatio="none" className="w-full h-full block">
          <path d="M0,128 L1440,128 L1440,64 C1350,64 1320,0 1260,0 C1200,0 1200,40 1140,40 C1080,40 1080,0 1020,0 C960,0 960,40 900,40 C840,40 840,0 780,0 C720,0 720,40 660,40 C600,40 600,0 540,0 C480,0 480,40 420,40 C360,40 360,0 300,0 C240,0 240,40 180,40 C120,40 120,0 60,0 C0,0 0,64 0,64 Z" fill="#FAF8F2" />
        </svg>
      </div>

      {/* Hero Content: Split layout — text left, trust chips right */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
      >
        {/* Left: Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-7">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-5 py-2.5 border border-[#C6A15B]/30 bg-[#052E16]/50 backdrop-blur-md rounded-full shadow-[0_4px_30px_rgba(198,161,91,0.1)]"
          >
            <Sparkles className="w-4 h-4 text-[#C6A15B]" />
            <span className="text-[#FAF8F2] text-xs font-semibold uppercase tracking-[0.3em]">
              Royal Emerald Heritage
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-5xl sm:text-7xl lg:text-[6.5rem] text-[#FAF8F2] leading-[1.03] tracking-tight drop-shadow-2xl"
          >
            {jaipurData.hero.headline.split(".")[0]}
            <span className="italic font-light text-[#C6A15B]">.</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#DCE7DD] tracking-wide block mt-2">
              The Pink City Awaits
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="relative pl-6 border-l-2 border-[#C6A15B]/40 max-w-xl"
          >
            <p className="text-[#DCE7DD] text-base sm:text-lg font-light leading-relaxed tracking-wide">
              {jaipurData.hero.subheadline}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-5 pt-2"
          >
            <button
              onClick={openForm}
              className="group relative px-8 py-5 bg-[#0B3D2E] text-[#C6A15B] font-sans font-semibold uppercase tracking-[0.15em] text-sm overflow-hidden rounded-sm transition-all duration-300 hover:bg-[#14532D] shadow-[0_0_40px_rgba(11,61,46,0.5)] border border-[#C6A15B]/20"
            >
              <div className="absolute inset-0 w-0 bg-[#C6A15B]/10 group-hover:w-full transition-all duration-500 ease-out" />
              <span className="relative z-10 flex items-center gap-3">
                <Crown className="w-4 h-4" />
                {jaipurData.hero.primaryCta}
              </span>
            </button>

            <a
              href={`https://wa.me/${jaipurData.whatsapp.number}?text=${encodeURIComponent(jaipurData.whatsapp.heroMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-5 border border-[#C6A15B]/40 bg-transparent backdrop-blur-sm text-[#FAF8F2] font-sans font-medium uppercase tracking-[0.15em] text-sm flex items-center gap-3 transition-all duration-300 hover:bg-[#0B3D2E]/40 hover:border-[#C6A15B] rounded-sm"
            >
              <MoveRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-2 transition-transform duration-300" />
              <span>{jaipurData.hero.secondaryCta}</span>
            </a>
          </motion.div>
        </div>

        {/* Right: Floating Trust Chips */}
        <motion.div
          style={{ y: yTrust }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="hidden lg:flex flex-col gap-4 items-end"
        >
          {jaipurData.trustBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + idx * 0.15 }}
              className="px-6 py-4 bg-[#052E16]/60 backdrop-blur-lg border border-[#C6A15B]/15 flex items-center gap-4 min-w-[280px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-sm hover:border-[#C6A15B]/40 transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#C6A15B]/10 flex items-center justify-center text-[#C6A15B] group-hover:bg-[#C6A15B]/20 transition-colors duration-300">
                {iconMap[badge.icon] || <Sparkles className="w-4 h-4" />}
              </div>
              <span className="text-[#DCE7DD] font-sans font-light tracking-wider text-sm group-hover:text-[#FAF8F2] transition-colors duration-300">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
