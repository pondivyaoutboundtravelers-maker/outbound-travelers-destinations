"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { thailandRelated } from "@/data/thailand";

export default function RelatedDestinations() {
  return (
    <section className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#0891B2] uppercase mb-3">
            Alternate Escapes
          </h2>
          <p className="text-3xl md:text-4xl font-serif font-extrabold text-white">
            Explore Other Premium Packages
          </p>
          <p className="text-neutral-400 font-light mt-4">
            Not sure where to fly next? Browse our alternate custom journeys hand-crafted by travel specialists.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {thailandRelated.map((dest, i) => (
            <Link key={dest.name} href={dest.href}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative h-[240px] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 flex flex-col justify-end p-5 hover:border-[#0891B2]/30 transition-all duration-300 shadow-lg"
              >
                {/* Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={dest.image}
                    alt={`${dest.name} Tour`}
                    fill
                    className="object-cover scale-105 group-hover:scale-100 opacity-50 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                </div>

                {/* Details */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#0891B2]">Destination</span>
                    <h3 className="text-lg font-bold text-white tracking-tight">{dest.name}</h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#0891B2] text-white flex items-center justify-center transition-colors duration-300">
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
