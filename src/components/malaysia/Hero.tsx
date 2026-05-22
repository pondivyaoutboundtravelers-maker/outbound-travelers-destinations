"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Plane, Globe, Compass } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] min-h-[650px] w-full overflow-hidden bg-neutral-950 flex flex-col justify-between"
    >
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-900/40 to-neutral-950 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-transparent to-neutral-950/60 z-10" />
        <Image
          src="/images/malaysia/hero.jpg"
          alt="Kuala Lumpur Skyline & Langkawi Island Beach"
          fill
          priority
          className="object-cover opacity-85 scale-105"
          sizes="100vw"
        />
      </motion.div>

      {/* Header spacing / Overlay */}
      <div className="w-full z-20 pt-6 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <Globe className="h-6 w-6 text-[#0E7490] animate-spin-slow" />
          <span className="font-serif font-bold text-white text-lg tracking-wide uppercase">
            Outbound <span className="text-[#0E7490]">Travelers</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden sm:flex items-center gap-6 text-sm text-neutral-300 font-medium"
        >
          <a href="#experiences" className="hover:text-white transition-colors">Experiences</a>
          <a href="#packages" className="hover:text-white transition-colors">Packages</a>
          <a href="#itinerary" className="hover:text-white transition-colors">Itinerary</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-md"
        >
          <Compass className="h-4 w-4 text-cyan-400 animate-pulse" />
          <span>Visa-Free International Trip</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="mb-6 font-serif text-4xl font-extrabold leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl tracking-tight drop-shadow-lg"
        >
          Easy First <br />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 bg-clip-text text-transparent italic font-normal">
            International Trip.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="mb-10 max-w-3xl text-base font-light leading-relaxed text-neutral-200 sm:text-lg md:text-xl px-4"
        >
          Visa-free for 30 days. Direct flights from Chennai, Bangalore, Kochi, and Hyderabad. Experience seamless international travel without the visa hassle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto px-6"
        >
          <button
            onClick={() => {
              document.getElementById("estimator")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative overflow-hidden rounded-full bg-[#0E7490] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(14,116,144,0.4)]"
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
            <span className="relative flex items-center justify-center gap-2 uppercase tracking-wider">
              Plan My Malaysia Trip <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>

          <button
            onClick={() => {
              document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/50 uppercase tracking-wider"
          >
            View Packages
          </button>
        </motion.div>
      </div>

      {/* Trust Chips Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="w-full border-t border-white/10 bg-neutral-900/60 backdrop-blur-lg py-5 z-20"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6 px-4 text-xs font-semibold tracking-wider text-neutral-300 uppercase sm:gap-16 sm:text-sm">
          <div className="flex items-center gap-2">
            <Plane className="h-4 w-4 text-cyan-400 shrink-0" />
            <span>Visa-free 30 Days</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-extrabold shrink-0">₹0</span>
            <span>Visa Fee</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Vegetarian-Easy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>24/7 Ground Team</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
