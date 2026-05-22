'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Plane, ShieldCheck, Compass, Sparkles, Star } from 'lucide-react'
import { singaporeData } from '@/lib/singapore/data'

export default function Hero() {
  const handleCtaClick = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm'))
  }

  // Anim variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  } as const

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  } as const


  const floatingCardVariants = {
    initial: { y: 0 },
    animate: (custom: number) => ({
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
        delay: custom * 0.7
      }
    })
  }

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream to-light-blue text-dark-text py-20 px-4 md:px-8">
      {/* 1. Vibrant Tropical Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,107,107,0.08),transparent_40%)]" />
        
        {/* Subtle Light Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(to_right,#0D9488_1px,transparent_1px),linear-gradient(to_bottom,#0D9488_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

        {/* Ambient Glowing Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 right-10 w-[500px] h-[500px] rounded-full bg-teal-light/40 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 left-10 w-[600px] h-[600px] rounded-full bg-coral/10 blur-[120px]"
        />
      </div>

      {/* 2. Abstract Skyline SVG Overlay (Marina Bay Sands & ArtScience Museum silhouette) - Tropical Edition */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none opacity-40 select-none">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Marina Bay Sands Silhouette */}
          <path d="M1200 320V120H1250V320M1260 320V110H1310V320M1320 320V100H1370V320" fill="url(#mbs-grad)" opacity="0.6" />
          <path d="M1190 120C1250 110 1320 100 1380 90L1390 105C1330 115 1250 125 1190 135Z" fill="url(#mbs-skydeck)" />
          
          {/* ArtScience Museum Lotus */}
          <path d="M1030 320C1030 260 1010 240 990 220C1010 240 1030 210 1050 200C1045 220 1060 210 1080 205C1065 225 1080 230 1100 240C1075 250 1070 270 1070 320Z" fill="#0D9488" opacity="0.15" />
          
          {/* Futuristic Bridge Arcs */}
          <path d="M100 320C300 220 700 220 900 320" stroke="url(#helix-grad)" strokeWidth="3" strokeDasharray="8 4" opacity="0.5" />
          <path d="M150 320C320 240 680 240 850 320" stroke="url(#helix-grad-2)" strokeWidth="2" opacity="0.6" />

          {/* Gradients */}
          <defs>
            <linearGradient id="mbs-grad" x1="1285" y1="100" x2="1285" y2="320" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0D9488" />
              <stop offset="1" stopColor="#0369A1" />
            </linearGradient>
            <linearGradient id="mbs-skydeck" x1="1285" y1="90" x2="1285" y2="135" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF6B6B" />
              <stop offset="1" stopColor="#FFB84D" />
            </linearGradient>
            <linearGradient id="helix-grad" x1="100" y1="270" x2="900" y2="270" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06B6D4" stopOpacity="0" />
              <stop offset="0.5" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="1" stopColor="#0D9488" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="helix-grad-2" x1="150" y1="280" x2="850" y2="280" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF6B6B" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FF6B6B" stopOpacity="0.8" />
              <stop offset="1" stopColor="#FFB84D" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Hero Container */}
      <div className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 pt-10">
        {/* Left Editorial Text Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
        >
          {/* Floating Luxury Trust Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/60 border border-teal-primary/20 rounded-full backdrop-blur-md shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-coral" />
            <span className="text-xs font-semibold tracking-wider text-teal-primary font-inter uppercase">
              Tropical Paradise Meets Urban Sophistication
            </span>
          </motion.div>

          {/* Oversized Editorial Cinematic Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-fraunces font-bold tracking-tight text-dark-text leading-[1.05]"
          >
            Clean.<br className="hidden sm:inline" />
            Easy.<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-primary to-ocean-blue relative inline-block">
              Wow.
              <span className="absolute bottom-1 left-0 w-full h-[8px] bg-coral/20 blur-[2px] -z-10 rounded" />
            </span>
          </motion.h1>

          {/* Subheadline (Aspirational editorial copy) */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-medium-text font-inter leading-relaxed max-w-xl font-normal"
          >
            {singaporeData.hero.subheadline}
          </motion.p>

          {/* CTA Buttons Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4"
          >
            <button
              onClick={handleCtaClick}
              className="group py-4 px-8 bg-teal-primary hover:bg-teal-accent rounded-full text-sm font-bold text-white tracking-wider uppercase transition-all duration-300 shadow-[0_8px_20px_rgba(13,148,136,0.3)] hover:shadow-[0_8px_25px_rgba(13,148,136,0.5)] flex items-center justify-center gap-2"
            >
              {singaporeData.hero.primaryCta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleCtaClick}
              className="py-4 px-6 bg-white/50 hover:bg-white/80 text-teal-primary rounded-full text-sm font-bold tracking-wider uppercase transition-all border border-teal-primary/20 hover:border-teal-primary text-center flex items-center justify-center backdrop-blur-sm"
            >
              View Itinerary
            </button>
          </motion.div>

          {/* Floating Trust Chips (Horizontal Layout) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 pt-8 text-medium-text text-xs font-semibold font-inter"
          >
            <span className="flex items-center gap-1.5 bg-white/70 border border-teal-primary/10 shadow-sm py-1.5 px-3 rounded-full">
              <ShieldCheck className="w-4 h-4 text-emerald" />
              Visa in 5–7 Days
            </span>
            <span className="flex items-center gap-1.5 bg-white/70 border border-teal-primary/10 shadow-sm py-1.5 px-3 rounded-full">
              <Compass className="w-4 h-4 text-coral" />
              All-Inclusive
            </span>
            <span className="flex items-center gap-1.5 bg-white/70 border border-teal-primary/10 shadow-sm py-1.5 px-3 rounded-full">
              <Star className="w-4 h-4 text-sunny-yellow fill-current" />
              Family-Tested
            </span>
          </motion.div>
        </motion.div>

        {/* Right Dynamic Floating Cards Column */}
        <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center mt-10 lg:mt-0">
          
          {/* Backdrop Tech Circle Glowing */}
          <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border border-teal-primary/10 bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.05)_0%,transparent_70%)] animate-[spin_40s_linear_infinite] flex items-center justify-center">
            <div className="w-[85%] h-[85%] rounded-full border border-dashed border-teal-primary/20 flex items-center justify-center">
              <div className="w-[80%] h-[80%] rounded-full border border-teal-primary/5 bg-gradient-to-r from-teal-light/20 to-sky-light/20" />
            </div>
          </div>

          {/* CARD 1: 4N/5D (Top Left) */}
          <motion.div
            custom={0}
            variants={floatingCardVariants}
            initial="initial"
            animate="animate"
            className="absolute top-4 left-0 sm:left-10 md:left-14 w-[160px] sm:w-[180px] backdrop-blur-xl bg-white/85 border border-teal-primary/10 rounded-2xl p-4 shadow-[0_8px_32px_rgba(13,148,136,0.1)] hover:border-teal-primary/40 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-light border border-teal-primary/10 flex items-center justify-center mb-3">
              <Compass className="w-5 h-5 text-teal-primary" />
            </div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-medium-text font-inter mb-1">Paced Duration</h3>
            <p className="text-2xl font-bold font-fraunces text-dark-text">4 Nights</p>
            <p className="text-sm font-bold text-teal-primary">5 Days Classic</p>
          </motion.div>

          {/* CARD 2: Visa in 5–7 Days (Top Right) */}
          <motion.div
            custom={1}
            variants={floatingCardVariants}
            initial="initial"
            animate="animate"
            className="absolute top-16 right-0 sm:right-10 md:right-14 w-[160px] sm:w-[180px] backdrop-blur-xl bg-white/85 border border-coral/10 rounded-2xl p-4 shadow-[0_8px_32px_rgba(255,107,107,0.1)] hover:border-coral/40 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-coral/10 border border-coral/20 flex items-center justify-center mb-3">
              <Plane className="w-5 h-5 text-coral" />
            </div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-medium-text font-inter mb-1">Easy Entry</h3>
            <p className="text-2xl font-bold font-fraunces text-dark-text">E-Visa</p>
            <p className="text-sm font-semibold text-coral">Assisted in 5–7 Days</p>
          </motion.div>

          {/* CARD 3: Cruise Combos (Bottom Left) */}
          <motion.div
            custom={2}
            variants={floatingCardVariants}
            initial="initial"
            animate="animate"
            className="absolute bottom-16 left-0 sm:left-6 md:left-10 w-[160px] sm:w-[180px] backdrop-blur-xl bg-white/85 border border-ocean-blue/10 rounded-2xl p-4 shadow-[0_8px_32px_rgba(3,105,161,0.1)] hover:border-ocean-blue/40 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-light-blue border border-ocean-blue/20 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5 text-ocean-blue" />
            </div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-medium-text font-inter mb-1">Luxury Sea</h3>
            <p className="text-2xl font-bold font-fraunces text-dark-text">Cruise</p>
            <p className="text-sm font-bold text-ocean-blue">Combos & Yachting</p>
          </motion.div>

          {/* CARD 4: Family-Tested (Bottom Right) */}
          <motion.div
            custom={3}
            variants={floatingCardVariants}
            initial="initial"
            animate="animate"
            className="absolute bottom-4 right-0 sm:right-6 md:right-10 w-[160px] sm:w-[180px] backdrop-blur-xl bg-white/85 border border-sunny-yellow/10 rounded-2xl p-4 shadow-[0_8px_32px_rgba(245,158,11,0.1)] hover:border-sunny-yellow/40 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-sunny-yellow/15 border border-sunny-yellow/20 flex items-center justify-center mb-3">
              <Star className="w-5 h-5 text-soft-gold fill-current" />
            </div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-medium-text font-inter mb-1">Vetted Comfort</h3>
            <p className="text-2xl font-bold font-fraunces text-dark-text">100%</p>
            <p className="text-sm font-semibold text-soft-gold">Family-Tested Stays</p>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 z-10 pointer-events-none">
        <span className="text-[10px] font-bold tracking-widest uppercase text-teal-primary font-inter">Explore Singapore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-4 h-7 rounded-full border border-teal-primary/50 flex justify-center pt-1"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-coral" />
        </motion.div>
      </div>
    </section>
  )
}
