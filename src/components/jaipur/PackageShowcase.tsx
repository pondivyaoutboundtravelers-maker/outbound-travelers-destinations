"use client";

import React from "react";
import { motion } from "framer-motion";
import { jaipurData } from "@/lib/jaipur/data";
import { buildWhatsAppUrl } from "@/lib/shared/whatsapp";
import { Clock, Star, MoveRight } from "lucide-react";

export default function PackageShowcase() {
  const packages = jaipurData.packages;

  return (
    <section className="py-28 lg:py-36 relative bg-[#FAF8F2] overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-bold">
            Royal Itineraries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] mt-4">
            Curated <span className="italic text-[#0B3D2E]">Heritage Journeys</span>
          </h2>
          <p className="text-[#475569] text-base mt-4 max-w-2xl mx-auto">
            Each package is meticulously designed by our heritage specialists. Every stay, every experience, every transfer — curated to perfection.
          </p>
        </motion.div>
      </div>

      {/* Asymmetric Brochure Panels */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Desktop: Horizontal panels with dynamic skyline heights */}
        <div className="hidden lg:grid grid-cols-4 gap-5 items-end">
          {packages.map((pkg, idx) => {
            const heights = ["h-[520px]", "h-[580px]", "h-[500px]", "h-[560px]"];
            const waUrl = buildWhatsAppUrl(jaipurData.whatsapp.number, pkg.whatsappMessage);

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
                className={`${heights[idx]} relative group rounded-sm overflow-hidden shadow-xl cursor-pointer`}
              >
                {/* Background image */}
                <img
                  src={pkg.image}
                  alt={pkg.alt}
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-1000"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#052E16] via-[#052E16]/60 to-[#052E16]/20 group-hover:from-[#052E16]/95 transition-all duration-500" />

                {/* Emerald glow on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C6A15B]/40 transition-all duration-500 rounded-sm z-10" />

                {/* Most Popular badge */}
                {idx === 0 && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-[#C6A15B] text-[#052E16] text-[9px] font-bold uppercase tracking-[0.15em] rounded-full shadow-lg">
                    ✦ Most Popular
                  </div>
                )}

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span className="text-[#DCE7DD] text-xs font-semibold tracking-wider">
                      {pkg.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-[#FAF8F2] leading-tight">{pkg.name}</h3>
                  <p className="text-[#DCE7DD]/70 text-xs mt-1 italic">{pkg.idealFor}</p>

                  {/* Highlights — show on hover via CSS */}
                  <div className="mt-3 space-y-1.5 max-h-0 group-hover:max-h-[200px] overflow-hidden transition-all duration-500 ease-out">
                    {pkg.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Star className="w-3 h-3 text-[#C6A15B] flex-shrink-0 mt-0.5" />
                        <span className="text-[#DCE7DD] text-xs leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="mt-4 pt-3 border-t border-[#C6A15B]/20 flex items-center justify-between">
                    <div>
                      <span className="text-[#DCE7DD]/60 text-[10px] uppercase tracking-wider">From</span>
                      <div className="text-[#C6A15B] text-xl font-serif font-bold">{pkg.price}</div>
                    </div>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-[#C6A15B]/15 hover:bg-[#C6A15B]/30 text-[#C6A15B] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 border border-[#C6A15B]/20"
                    >
                      <MoveRight className="w-3.5 h-3.5" />
                      Enquire
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Horizontal snap-scroll */}
        <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 no-scrollbar">
          {packages.map((pkg, idx) => {
            const waUrl = buildWhatsAppUrl(jaipurData.whatsapp.number, pkg.whatsappMessage);

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="snap-start min-w-[320px] sm:min-w-[350px] flex-shrink-0 relative h-[480px] rounded-sm overflow-hidden shadow-xl"
              >
                <img
                  src={pkg.image}
                  alt={pkg.alt}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052E16] via-[#052E16]/50 to-transparent" />

                {idx === 0 && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-[#C6A15B] text-[#052E16] text-[9px] font-bold uppercase tracking-[0.15em] rounded-full">
                    ✦ Most Popular
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span className="text-[#DCE7DD] text-xs font-semibold">{pkg.duration}</span>
                  </div>
                  <h3 className="text-xl font-serif text-[#FAF8F2]">{pkg.name}</h3>
                  <p className="text-[#DCE7DD]/70 text-xs mt-1 italic">{pkg.idealFor}</p>

                  {pkg.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 mt-2">
                      <Star className="w-3 h-3 text-[#C6A15B] flex-shrink-0 mt-0.5" />
                      <span className="text-[#DCE7DD] text-xs">{h}</span>
                    </div>
                  ))}

                  <div className="mt-4 pt-3 border-t border-[#C6A15B]/20 flex items-center justify-between">
                    <div className="text-[#C6A15B] text-xl font-serif font-bold">{pkg.price}</div>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-[#C6A15B]/20 text-[#C6A15B] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#C6A15B]/20"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Gold divider line decorative element */}
      <div className="flex justify-center gap-3 mt-16">
        <div className="w-12 h-px bg-[#C6A15B]/40" />
        <div className="w-2 h-2 rotate-45 border border-[#C6A15B]/40" />
        <div className="w-12 h-px bg-[#C6A15B]/40" />
      </div>
    </section>
  );
}
