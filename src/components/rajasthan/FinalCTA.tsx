"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Compass } from "lucide-react";

export default function FinalCTA() {
  const handleOpen = () => {
    const text = encodeURIComponent(
      "Hi Outbound Travelers! I am ready to plan my customized contemporary royal Rajasthan heritage tour. Please share details and quotes."
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <section className="relative bg-[#F7F3EE] px-6 py-24 md:py-36 overflow-hidden border-t border-[#D6B370]/20">
      
      {/* Background elegant final visual illustration */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rajasthan/royal-night.jpg"
          alt="Palace at night chandelier campaign"
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F3EE]/95 via-[#F7F3EE]/85 to-[#F7F3EE]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex p-3.5 bg-white border border-[#D6B370]/30 rounded-full text-amber-500 shadow-sm"
        >
          <Compass className="h-6 w-6 animate-spin-slow text-[#5B2147]" />
        </motion.div>

        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#5B2147] tracking-tight leading-tight"
          >
            Your Rajputana Caravan <br />
            <span className="text-[#B76E79] italic font-normal font-serif">
              Awaits.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-xl mx-auto text-[#6B4F4F] font-light leading-relaxed text-xs sm:text-sm tracking-wide"
          >
            Let us build the perfect heritage escape tailored precisely to your dates, staying preferences, and visual style. Skip the ordinary and step into absolute grand living.
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
            className="group relative overflow-hidden rounded-full bg-[#5B2147] hover:bg-[#421633] px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.03] active:scale-97 shadow-[0_4px_20px_rgba(91,33,71,0.15)] border border-[#5B2147] flex items-center gap-2"
          >
            <MessageSquare className="h-4 w-4 fill-current shrink-0" />
            <span>Design My Royal Escape</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
