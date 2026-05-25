"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, Heart } from "lucide-react";
import { jaipurData } from "@/lib/jaipur/data";

export default function HoneymoonPhotoModule() {
  return (
    <section className="py-28 lg:py-36 relative bg-[#EFE7DA] overflow-hidden">
      {/* Subtle warm texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/images/jaipur/texture-jali.png')]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-bold">
            Luxury Photoshoot Campaign
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] mt-4">
            Your Royal <span className="italic text-[#0B3D2E]">Love Story</span>
          </h2>
          <p className="text-[#475569] text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Professional editorial photography at Jaipur&apos;s most iconic royal backdrops — curated exclusively for couples seeking timeless memories.
          </p>
        </motion.div>

        {/* Masonry-style Asymmetric Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          {/* Hero large frame — spans 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-7 relative group"
          >
            <div className="relative overflow-hidden rounded-sm border-2 border-[#C6A15B]/20 shadow-xl aspect-[4/3]">
              <img
                src="/images/jaipur/honeymoon.jpg"
                alt="Couple at Amber Fort"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052E16]/40 via-transparent to-transparent" />
              {/* "As featured in" badge */}
              <div className="absolute top-5 left-5 px-4 py-2 bg-[#052E16]/70 backdrop-blur-md text-[#C6A15B] text-[10px] font-semibold uppercase tracking-[0.2em] rounded-full border border-[#C6A15B]/20">
                ✦ Editorial Campaign Style
              </div>
            </div>
            {/* Gold corner decorations */}
            <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-[#C6A15B] rounded-tl-sm" />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-[#C6A15B] rounded-br-sm" />
          </motion.div>

          {/* Right column — 5 cols, stacked vertically */}
          <div className="md:col-span-5 flex flex-col gap-5 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative group flex-1"
            >
              <div className="relative overflow-hidden rounded-sm border-2 border-[#C6A15B]/20 shadow-lg h-full min-h-[200px]">
                <img
                  src="/images/jaipur/hawa-mahal.jpg"
                  alt="Couple at Hawa Mahal"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052E16]/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-[#FAF8F2]">
                  <p className="text-xs uppercase tracking-wider font-semibold">Golden Hour</p>
                  <p className="text-sm font-serif italic">Hawa Mahal Sessions</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-5 lg:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-sm border-2 border-[#C6A15B]/20 shadow-lg aspect-square">
                  <img
                    src="/images/jaipur/city-palace.jpg"
                    alt="City Palace photoshoot"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052E16]/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[#FAF8F2]">
                    <p className="text-[10px] uppercase tracking-wider font-semibold">Palace</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.45 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-sm border-2 border-[#C6A15B]/20 shadow-lg aspect-square">
                  <img
                    src="/images/jaipur/nahargarh.jpg"
                    alt="Nahargarh sunset shoot"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052E16]/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[#FAF8F2]">
                    <p className="text-[10px] uppercase tracking-wider font-semibold">Sunset</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Overlapping testimonial card at grid junction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-20 -mt-12 mx-auto max-w-md"
        >
          <div className="px-6 py-5 bg-white shadow-2xl rounded-sm border border-[#DCE7DD] flex items-start gap-4">
            <Heart className="w-6 h-6 text-[#C6A15B] flex-shrink-0 mt-1" />
            <div>
              <p className="text-[#0F172A] text-sm italic leading-relaxed">
                &ldquo;The Hawa Mahal golden-hour session gave us magazine-worthy photos. Our families couldn&apos;t believe they weren&apos;t from a Vogue shoot!&rdquo;
              </p>
              <p className="text-[#475569] text-xs font-semibold uppercase tracking-wider mt-2">
                — Meera & Vikram, Mumbai
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("openLeadForm"))}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0B3D2E] text-[#C6A15B] font-semibold uppercase tracking-[0.15em] text-sm rounded-sm hover:bg-[#14532D] transition-all duration-300 shadow-lg border border-[#C6A15B]/20"
          >
            <Camera className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            Book Your Royal Photoshoot
          </button>
        </motion.div>

        {/* Vertical gold connecting line — design element */}
        <div className="absolute top-12 right-12 w-px h-[200px] bg-gradient-to-b from-[#C6A15B]/30 via-[#C6A15B]/10 to-transparent hidden xl:block" />
        <div className="absolute bottom-12 left-12 w-px h-[200px] bg-gradient-to-t from-[#C6A15B]/30 via-[#C6A15B]/10 to-transparent hidden xl:block" />
      </div>
    </section>
  );
}
