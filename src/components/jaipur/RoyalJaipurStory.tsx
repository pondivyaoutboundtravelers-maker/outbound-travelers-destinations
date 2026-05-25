"use client";

import React from "react";
import { motion } from "framer-motion";
import { jaipurData } from "@/lib/jaipur/data";

export default function RoyalJaipurStory() {
  const story = jaipurData.storySection;

  return (
    <section className="py-28 lg:py-36 relative bg-[#FAF8F2] overflow-hidden">
      {/* Subtle jali pattern background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230B3D2E' fill-opacity='1'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z M40 10L70 40L40 70L10 40Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left 7 cols: Editorial Typography with Drop Cap */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-bold">
                The Pink City Chronicle
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] mt-4 leading-[1.15]">
                {story.headline}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Drop cap styling */}
              <p className="text-[#475569] text-base sm:text-lg leading-[1.9] tracking-wide first-letter:text-6xl first-letter:font-serif first-letter:text-[#0B3D2E] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
                {story.body}
              </p>
            </motion.div>

            {/* Pull Quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative pl-6 border-l-4 border-[#C6A15B] py-4 my-6"
            >
              <p className="text-xl sm:text-2xl font-serif italic text-[#0B3D2E] leading-relaxed">
                {story.pullQuote}
              </p>
              <div className="absolute -left-3 top-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">&ldquo;</span>
              </div>
            </motion.blockquote>

            {/* Floating Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
            >
              {story.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="px-4 py-4 bg-white border border-[#DCE7DD] rounded-sm shadow-sm text-center hover:shadow-md hover:border-[#C6A15B]/30 transition-all duration-300"
                >
                  <div className="text-2xl font-serif font-bold text-[#0B3D2E]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.15em] text-[#475569] mt-1 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right 5 cols: Stacked Tilted Photo Frames */}
          <div className="lg:col-span-5 relative min-h-[500px] lg:min-h-[650px]">
            {/* Frame 1 — large, slight rotate */}
            <motion.div
              initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: -3, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-0 left-0 w-[85%] h-[55%] z-10"
            >
              <div className="w-full h-full p-3 bg-white shadow-xl rounded-sm">
                <img
                  src="/images/jaipur/hawa-mahal.jpg"
                  alt="Hawa Mahal facade"
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              {/* Gold corner accent */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#C6A15B]" />
            </motion.div>

            {/* Frame 2 — medium, opposite rotate */}
            <motion.div
              initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: 4, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-[30%] right-0 w-[65%] h-[40%] z-20"
            >
              <div className="w-full h-full p-3 bg-white shadow-2xl rounded-sm">
                <img
                  src="/images/jaipur/amber-fort.jpg"
                  alt="Amber Fort ramparts"
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#C6A15B]" />
            </motion.div>

            {/* Frame 3 — small, accent */}
            <motion.div
              initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute bottom-0 left-[10%] w-[55%] h-[35%] z-30"
            >
              <div className="w-full h-full p-3 bg-white shadow-xl rounded-sm">
                <img
                  src="/images/jaipur/city-palace.jpg"
                  alt="City Palace courtyard"
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#C6A15B]" />
            </motion.div>

            {/* Floating mini-info cards */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute top-[15%] right-[-5%] z-40 px-4 py-2.5 bg-[#0B3D2E] text-[#FAF8F2] text-xs font-semibold uppercase tracking-wider rounded-full shadow-lg hidden lg:block"
            >
              ✦ UNESCO Heritage
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute bottom-[25%] right-[-8%] z-40 px-4 py-2.5 bg-[#C6A15B] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-lg hidden lg:block"
            >
              ✦ 5 Royal Forts
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section bottom: architectural arch SVG divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,64 L1440,64 L1440,32 Q1260,0 1080,32 Q900,64 720,32 Q540,0 360,32 Q180,64 0,32 Z"
            fill="#0B3D2E"
          />
        </svg>
      </div>
    </section>
  );
}
