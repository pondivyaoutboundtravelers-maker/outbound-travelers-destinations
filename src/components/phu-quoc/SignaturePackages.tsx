"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { phuQuocPackages } from "@/data/phu-quoc";
import { Calendar, Check, MessageSquare } from "lucide-react";

export default function SignaturePackages() {
  return (
    <section id="packages" className="relative bg-[#0a0a0a] px-6 py-20 md:py-32 overflow-hidden border-b border-white/5">
      {/* Background glow layers */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-teal-900/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title pane */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs font-bold tracking-widest text-[#0F766E] uppercase mb-3 block">
            Signature Curation
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Four Journeys of Silent Beauty
          </h2>
          <p className="text-neutral-405 mt-4 text-xs sm:text-sm font-light text-neutral-400">
            Poetic itineraries meticulously curated around beachfront stays, warm-sea speedboats, and slow-paced private schedules.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phuQuocPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between rounded-3xl bg-neutral-950/30 border border-white/5 hover:border-teal-500/20 hover:bg-neutral-950/60 overflow-hidden transition-all duration-350 shadow-2xl p-5"
            >
              {/* Image Pane */}
              <div className="relative h-[200px] w-full rounded-2xl overflow-hidden mb-5">
                <Image
                  src={pkg.image}
                  alt={pkg.alt || pkg.name}
                  fill
                  className="object-cover opacity-60 group-hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 250px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-45" />

                {/* Duration floater */}
                <div className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-neutral-950/80 border border-white/10 px-3.5 py-1 text-[10px] font-bold text-neutral-200 backdrop-blur-md">
                  <Calendar className="h-3 w-3 text-teal-400" />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              {/* Package Content details */}
              <div className="flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-[#0F766E] block">
                      {pkg.idealFor}
                    </span>
                    <h3 className="font-serif font-bold text-white text-lg tracking-tight leading-snug group-hover:text-teal-400 transition-colors">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 pt-4 border-t border-white/5">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2 items-start text-[11px] text-neutral-400 font-light leading-relaxed text-neutral-400">
                        <Check className="h-3.5 w-3.5 text-[#0F766E] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-white/5 space-y-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-500">Starting price</span>
                    <span className="text-xl font-bold font-serif text-white">{pkg.price}</span>
                  </div>

                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(pkg.whatsappMessage || "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-teal-500/20 text-[10px] font-bold uppercase tracking-widest text-teal-400 hover:bg-[#0F766E] hover:text-white transition-all duration-300 active:scale-98"
                  >
                    <MessageSquare className="h-3.5 w-3.5 fill-current shrink-0" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
