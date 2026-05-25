"use client";

import React from "react";
import { motion } from "framer-motion";
import { jaipurData } from "@/lib/jaipur/data";
import { Gem, Palette, Scissors } from "lucide-react";

export default function ShoppingCraftCulture() {
  const crafts = jaipurData.crafts;
  const featured = crafts.find((c) => c.id === "blue-pottery")!;
  const otherCrafts = crafts.filter((c) => c.id !== "blue-pottery");

  return (
    <section className="py-28 lg:py-36 relative bg-[#052E16] overflow-hidden">
      {/* Block-print texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C6A15B' fill-opacity='0.6'%3E%3Cpath d='M24 4l4 8h-8l4-8zm0 32l-4-8h8l-4 8zm-16-16l8 4v-8l-8 4zm32 0l-8-4v8l8-4z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-bold">
            Living Artisan Heritage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF8F2] mt-4">
            The Pink City&apos;s <span className="italic text-[#C6A15B]">Bazaar Soul</span>
          </h2>
          <p className="text-[#DCE7DD] text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Jaipur&apos;s craft traditions span five millennia. We curate intimate artisan encounters that go beyond shopping into cultural immersion.
          </p>
        </motion.div>

        {/* Featured Hero Craft — Blue Pottery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-12 bg-[#0B3D2E] rounded-sm overflow-hidden shadow-2xl border border-[#C6A15B]/15"
        >
          <div className="relative min-h-[300px]">
            <img
              src={featured.image}
              alt={featured.alt}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B3D2E]/50 hidden lg:block" />
            <div className="absolute top-5 left-5 px-4 py-2 bg-[#C6A15B] text-[#052E16] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
              ✦ UNESCO Recognized
            </div>
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="w-6 h-6 text-[#C6A15B]" />
              <span className="text-[#C6A15B] text-xs font-semibold uppercase tracking-[0.2em]">
                Featured Craft
              </span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-serif text-[#FAF8F2]">{featured.name}</h3>
            <p className="text-[#DCE7DD] text-sm mt-3 leading-relaxed">{featured.description}</p>
            <div className="flex flex-wrap gap-3 mt-5">
              <span className="px-3 py-1.5 bg-[#C6A15B]/15 text-[#C6A15B] text-[10px] uppercase tracking-wider font-semibold rounded-full">
                {featured.heritage}
              </span>
              <span className="px-3 py-1.5 bg-[#FAF8F2]/10 text-[#FAF8F2] text-[10px] uppercase tracking-wider font-semibold rounded-full">
                {featured.priceRange}
              </span>
            </div>
            <p className="text-[#DCE7DD]/60 text-xs mt-4 italic">{featured.artisanDetail}</p>
          </div>
        </motion.div>

        {/* Staggered Mosaic Grid of remaining crafts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherCrafts.map((craft, idx) => (
            <motion.div
              key={craft.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`group relative bg-[#0B3D2E] border border-[#C6A15B]/10 rounded-sm overflow-hidden shadow-xl hover:border-[#C6A15B]/30 transition-all duration-300 ${
                idx === 0 ? "sm:row-span-2" : ""
              }`}
            >
              <div className={`relative ${idx === 0 ? "h-[250px] sm:h-full" : "h-[200px]"} overflow-hidden`}>
                <img
                  src={craft.image}
                  alt={craft.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052E16]/80 via-[#052E16]/20 to-transparent" />

                {/* Content overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#C6A15B]/20 flex items-center justify-center">
                      {idx % 2 === 0 ? (
                        <Gem className="w-3 h-3 text-[#C6A15B]" />
                      ) : (
                        <Scissors className="w-3 h-3 text-[#C6A15B]" />
                      )}
                    </div>
                    <span className="text-[#C6A15B] text-[10px] uppercase tracking-[0.15em] font-semibold">
                      {craft.heritage}
                    </span>
                  </div>
                  <h4 className="text-[#FAF8F2] font-serif text-lg font-semibold">{craft.name}</h4>
                  <p className="text-[#DCE7DD] text-xs mt-1 leading-relaxed line-clamp-2">{craft.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[#C6A15B] text-xs font-semibold">{craft.priceRange}</span>
                    <span className="text-[#DCE7DD]/50 text-[10px] italic">{craft.artisanDetail}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl sm:text-2xl font-serif italic text-[#C6A15B] max-w-3xl mx-auto leading-relaxed">
            &ldquo;The Pink City&apos;s living artisan heritage — where every craft tells a story of kings, traders, and artists who dreamed in colour.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="px-4 py-2 bg-[#C6A15B]/10 text-[#C6A15B] text-[10px] uppercase tracking-wider font-semibold rounded-full border border-[#C6A15B]/20">
              300+ Years of Craft Lineage
            </span>
            <span className="px-4 py-2 bg-[#C6A15B]/10 text-[#C6A15B] text-[10px] uppercase tracking-wider font-semibold rounded-full border border-[#C6A15B]/20">
              UNESCO Creative City
            </span>
          </div>

          {/* Decorative gold dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]/40" />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gold filigree SVG border at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A15B]/30 to-transparent" />
    </section>
  );
}
