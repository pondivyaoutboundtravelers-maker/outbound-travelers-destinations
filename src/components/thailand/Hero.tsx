"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Plane, ShieldCheck, Heart, Sparkles, Compass } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] min-h-[700px] w-full overflow-hidden bg-neutral-950 flex flex-col justify-between"
    >
      {/* Background Image Parallax with luxury dark overlays */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 h-full w-full">
        {/* Soft tropical teal/dark blue color gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-900/50 to-neutral-950 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/70 via-transparent to-neutral-950/70 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,145,178,0.15),transparent_60%)] z-10" />
        
        <Image
          src="/images/thailand/hero.jpg"
          alt="Cinematic Phi Phi Island lagoons, Thailand"
          fill
          priority
          className="object-cover scale-105 opacity-90 transition-transform duration-10000 ease-out"
          sizes="100vw"
        />
      </motion.div>

      {/* Floating brand header */}
      <div className="w-full z-20 pt-6 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <Compass className="h-6 w-6 text-[#0891B2] animate-spin-slow" />
          <span className="font-serif font-bold text-white text-lg tracking-wide uppercase">
            Outbound <span className="text-[#0891B2]">Travelers</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex items-center gap-8 text-sm text-neutral-300 font-medium tracking-wider uppercase"
        >
          <button onClick={() => handleScrollTo("regions")} className="hover:text-[#0891B2] transition-colors">Regions</button>
          <button onClick={() => handleScrollTo("experiences")} className="hover:text-[#0891B2] transition-colors">Experiences</button>
          <button onClick={() => handleScrollTo("packages")} className="hover:text-[#0891B2] transition-colors">Packages</button>
          <button onClick={() => handleScrollTo("itinerary")} className="hover:text-[#0891B2] transition-colors">Itinerary</button>
          <button onClick={() => handleScrollTo("faq")} className="hover:text-[#0891B2] transition-colors">FAQs</button>
        </motion.div>
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-5 py-2 text-xs font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
          <span>International · Family + Honeymoon · Year-round</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mb-6 font-serif text-4xl font-extrabold leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl tracking-tight drop-shadow-xl"
        >
          Beaches, Temples, <br />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 bg-clip-text text-transparent italic font-normal">
            and Easy Logistics
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="mb-10 max-w-3xl text-sm font-light leading-relaxed text-neutral-200 sm:text-base md:text-lg lg:text-xl px-4"
        >
          Bangkok's energy. Phuket's beaches. Krabi's limestone cliffs. Thailand is the trip your South Indian friends rave about — and we make sure you get the version they didn't.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto px-6"
        >
          <a
            href="https://wa.me/919876543210?text=Hi%20Outbound%20Travelers%2C%20I%20am%20interested%20in%20planning%20a%20luxury%20Thailand%20trip.%20Please%20share%20details%21"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-full bg-[#0891B2] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(8,145,178,0.4)] flex items-center justify-center gap-2"
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
            <span className="uppercase tracking-wider">Plan My Thailand Trip on WhatsApp</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <button
            onClick={() => handleScrollTo("packages")}
            className="group rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/40 uppercase tracking-wider active:scale-95"
          >
            See Packages
          </button>
        </motion.div>
      </div>

      {/* Trust Chips Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full border-t border-white/10 bg-neutral-950/80 backdrop-blur-md py-6 z-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-8 sm:gap-x-12 md:gap-x-16 text-xs font-semibold tracking-wider text-neutral-300 uppercase sm:text-sm">
            <div className="flex items-center gap-2">
              <Plane className="h-4 w-4 text-[#0891B2] shrink-0" />
              <span>Visa-free 60 days</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#0891B2] shrink-0" />
              <span>Vegetarian-easy</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-[#0891B2] shrink-0" />
              <span>Honeymoon-tested</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>24/7 ground team</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
