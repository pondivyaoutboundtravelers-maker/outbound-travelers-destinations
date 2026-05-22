"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Compass } from "lucide-react";

export default function FinalCTA() {
  const handleOpen = () => {
    const text = encodeURIComponent(
      "Hi Outbound Travelers! I am ready to design my premium Phu Quoc luxury honeymoon. Please share details and quotes."
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <section className="relative bg-[#0a0a0a] px-6 py-24 md:py-36 overflow-hidden border-t border-white/5">
      {/* Subtle background sunset gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,118,110,0.1),transparent_65%)] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-teal-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex p-3.5 bg-neutral-950 border border-white/10 rounded-full text-teal-400"
        >
          <Compass className="h-6 w-6 animate-spin-slow" />
        </motion.div>

        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight"
          >
            Your Gulf of Thailand Escape <br />
            <span className="bg-gradient-to-r from-teal-400 via-emerald-350 to-teal-500 bg-clip-text text-transparent italic font-normal font-serif">
              Awaits.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-xl mx-auto text-neutral-400 font-light leading-relaxed text-xs sm:text-sm tracking-wide text-neutral-400"
          >
            Let us build the perfect quiet luxury getaway tailored to your dates, stay preferences, and style. Skip the ordinary and step into absolute private sanctuary.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={handleOpen}
            className="group relative overflow-hidden rounded-full bg-teal-800 hover:bg-teal-700 px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.03] active:scale-97 shadow-[0_0_20px_rgba(15,118,110,0.2)] flex items-center gap-2"
          >
            <MessageSquare className="h-4 w-4 fill-current shrink-0" />
            <span>Plan My Phu Quoc Trip on WhatsApp</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
