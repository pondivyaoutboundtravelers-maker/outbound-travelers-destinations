"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HoneymoonLuxuryShowcase() {
  return (
    <section className="relative py-24 bg-[#0C4A6E]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/andaman/pkg-luxury.jpg"
          alt="Luxury honeymoon dinner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0C4A6E]/85" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-widest text-[#22D3EE] font-bold mb-4 block">
              Ultimate Indulgence
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              A Honeymoon Crafted in the Tropics
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Elevate your romance with our exclusive honeymoon blueprint. From private beachside dinners beneath a canopy of stars to high-end spa retreats hidden in the mahogany forests, we design an unhurried escape that prioritizes your privacy and connection.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Candlelit seafood grills on secluded sandbars",
                "Private luxury catamaran sunset cruises",
                "Floral bed décor & couple spa treatments",
                "Bespoke sunset editorial photo sessions",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openLeadForm"))}
              className="bg-[#FB923C] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-[#F97316] transition-colors shadow-lg"
            >
              Design Our Honeymoon
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glass Card Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/andaman/gallery-03.jpg"
                    alt="Candlelit dinner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl">
                  <h4 className="text-white font-serif text-xl mb-2">Private Dining</h4>
                  <p className="text-sm text-white/70">Ocean-to-table culinary experiences at the water&apos;s edge.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#22D3EE]/10 backdrop-blur-xl border border-[#22D3EE]/30 p-6 rounded-3xl">
                  <h4 className="text-white font-serif text-xl mb-2">Secluded Stays</h4>
                  <p className="text-sm text-white/70">Luxury plunge pool villas tucked away from the crowds.</p>
                </div>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/andaman/gallery-06.jpg"
                    alt="Couple sunset"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
