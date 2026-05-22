"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Compass } from "lucide-react";

export default function FinalCTA() {
  const handleOpen = () => {
    const text = encodeURIComponent(
      "Hi Outbound Travelers! I am ready to design my premium Thailand luxury tour package. Please share details and quotes."
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <section className="relative bg-neutral-950 px-6 py-20 md:py-28 overflow-hidden border-t border-neutral-900">
      {/* Cinematic glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-[#0891B2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex p-3 bg-neutral-900 border border-neutral-800 rounded-full text-[#0891B2] animate-bounce-slow"
        >
          <Compass className="h-8 w-8" />
        </motion.div>

        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight"
          >
            Your Andaman Adventure <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-350 to-cyan-500 bg-clip-text text-transparent italic font-normal">
              Awaits.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl mx-auto text-neutral-400 font-light leading-relaxed text-sm md:text-base"
          >
            Let us build the perfect itinerary tailored to your dates, travelers, and pace. Skip the ordinary and step into a custom Southeast Asian experience designed by experts.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={handleOpen}
            className="group relative overflow-hidden rounded-full bg-[#0891B2] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(8,145,178,0.3)] flex items-center gap-2"
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
            <MessageSquare className="h-4.5 w-4.5 fill-current shrink-0 text-white" />
            <span className="uppercase tracking-wider">Plan My Thailand Trip on WhatsApp</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
