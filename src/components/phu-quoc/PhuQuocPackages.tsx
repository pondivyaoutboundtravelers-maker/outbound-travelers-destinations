"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Compass, MessageSquare, Check } from "lucide-react";
import { phuQuocPackages } from "@/data/phu-quoc";

export default function PhuQuocPackages() {
  return (
    <section id="packages" className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-teal-650/5 rounded-full blur-3xl pointer-events-none bg-teal-600/5" />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-emerald-650/5 rounded-full blur-3xl pointer-events-none bg-emerald-600/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#0D9488] uppercase mb-3">
            Premium Packages
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white">
            Four Signature Honeymoon Escapes
          </p>
          <p className="text-neutral-400 font-light mt-4">
            Vetted premium plans crafted around beachfront resorts, romantic speedboat islet excursions, and seamless private transfers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phuQuocPackages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col justify-between rounded-3xl bg-neutral-900/30 border border-neutral-800 hover:border-teal-500/20 hover:bg-neutral-900/50 overflow-hidden transition-all duration-300 shadow-xl"
            >
              {/* Highlight badge on popular packages */}
              {pkg.id === "phu-quoc-honeymoon-classic" && (
                <div className="absolute top-4 left-4 z-20 bg-[#0D9488] border border-teal-500 text-white font-bold text-[10px] tracking-widest uppercase py-1 px-3 rounded-full">
                  ★ Most Popular
                </div>
              )}
              {pkg.id === "phu-quoc-luxury" && (
                <div className="absolute top-4 left-4 z-20 bg-rose-900 border border-rose-500 text-white font-bold text-[10px] tracking-widest uppercase py-1 px-3 rounded-full">
                  ✦ Ultra-Luxe stay
                </div>
              )}

              {/* Package Image & Basic Info */}
              <div>
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.alt || pkg.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-neutral-950/70 border border-white/10 px-3.5 py-1 text-xs font-bold text-neutral-200 backdrop-blur-md">
                    <Calendar className="h-3.5 w-3.5 text-teal-400" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Package content details */}
                <div className="p-5 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D9488]">
                      {pkg.idealFor}
                    </span>
                    <h3 className="text-lg font-bold font-serif text-white tracking-tight leading-snug group-hover:text-teal-400 transition-colors">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Highlights list */}
                  <ul className="space-y-2 pt-2 border-t border-neutral-850 border-t border-neutral-900/50">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-xs text-neutral-400 font-light leading-relaxed">
                        <Check className="h-3.5 w-3.5 text-teal-450 shrink-0 text-teal-455 text-teal-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price & CTA Action */}
              <div className="p-5 pt-0 border-t border-neutral-850 mt-4 border-t border-neutral-900/50">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Starting Price</span>
                  <span className="text-xl font-black text-white font-serif tracking-tight">{pkg.price}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(pkg.whatsappMessage || "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-teal-950/20 hover:bg-[#0D9488] text-teal-400 hover:text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-2xl transition-all duration-300 active:scale-98 border border-teal-500/20 hover:border-teal-550 hover:border-[#0D9488]"
                  >
                    <MessageSquare className="h-4 w-4 fill-current shrink-0" />
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
