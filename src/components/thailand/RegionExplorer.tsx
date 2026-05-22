"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Compass, MapPin } from "lucide-react";
import { thailandRegions } from "@/data/thailand";

export default function RegionExplorer() {
  return (
    <section id="regions" className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Background soft glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#0891B2] uppercase mb-3">
            Region Explorer
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white">
            Six Paradises, Infinite Vibes
          </p>
          <p className="text-neutral-400 font-light mt-4">
            From the bustling skyscrapers of Bangkok to the ancient emerald peaks of Chiang Mai, explore the regions that make up the perfect Southeast Asian journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {thailandRegions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 flex flex-col justify-end p-6 hover:border-[#0891B2]/30 transition-all duration-300 shadow-xl"
            >
              {/* Region Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={region.image}
                  alt={`${region.name} Scenic View`}
                  fill
                  className="object-cover scale-105 group-hover:scale-100 group-hover:opacity-60 opacity-50 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/50 to-transparent" />
              </div>

              {/* Quick Nights Badge */}
              <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 px-3.5 py-1 text-xs font-bold text-cyan-350 text-cyan-350 text-cyan-350">
                <Calendar className="h-3 w-3 text-cyan-400" />
                <span>{region.nights}</span>
              </div>

              {/* Card Details */}
              <div className="relative z-10 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <MapPin className="h-4 w-4 text-[#0891B2] shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">Thailand</span>
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-white tracking-tight">
                    {region.name}
                  </h3>
                </div>

                <div className="border-t border-white/10 pt-3 space-y-2">
                  <p className="text-xs text-neutral-300 font-medium">
                    <span className="text-[#0891B2] font-semibold">Vibe:</span> {region.vibe}
                  </p>
                  <p className="text-xs text-neutral-350 text-neutral-400 font-light leading-relaxed">
                    {region.description}
                  </p>
                  <p className="text-xs text-neutral-300 font-medium pt-1">
                    <span className="text-[#0891B2] font-semibold">Best for:</span> {region.bestFor}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
