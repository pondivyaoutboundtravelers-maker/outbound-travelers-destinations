"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-black"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 h-full w-full">
        <Image
          src="/images/meghalaya/hero.jpg"
          alt="Cinematic Meghalaya Landscape"
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        {/* Gradient Overlays for Cinematic Feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#020804] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020804] via-[#020804]/60 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-4 pb-24 sm:pb-32 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-emerald-300 backdrop-blur-md sm:text-sm uppercase"
        >
          <MapPin className="h-4 w-4" />
          <span>Meghalaya, North East India</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="mb-6 max-w-4xl font-serif text-5xl font-medium leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl tracking-tight drop-shadow-2xl"
        >
          Where Nobody&apos;s <br className="hidden sm:block" />
          <span className="italic text-emerald-400">Rushing You.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="mb-10 max-w-2xl text-base font-light leading-relaxed text-neutral-300 sm:text-lg md:text-xl"
        >
          Living root bridges in Cherrapunjee. The clearest river in Dawki. Asia&apos;s cleanest village in Mawlynnong. Discover the slow travel aesthetic of Meghalaya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <button className="group relative overflow-hidden rounded-full bg-[#065F46] px-8 py-4 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(6,95,70,0.5)]">
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
            <span className="relative flex items-center gap-2">
              Plan My Meghalaya Trip <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          
          <button className="group rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white">
            Explore Packages
          </button>
        </motion.div>
      </div>

      {/* Trust Chips / Footer of Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/40 px-4 py-4 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6 text-xs font-medium tracking-wide text-neutral-400 sm:gap-12 sm:text-sm">
          <span className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Off-beat Experts
          </span>
          <span className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Trekking Partners
          </span>
          <span className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Honeymoon-friendly
          </span>
          <span className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            24/7 Ground Team
          </span>
        </div>
      </motion.div>
    </section>
  );
}
