"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Compass, ArrowRight, MessageSquare, Check } from "lucide-react";
import { thailandPackages } from "@/data/thailand";

export default function ThailandPackages() {
  return (
    <section id="packages" className="relative bg-neutral-950 px-6 py-16 md:py-24 overflow-hidden border-t border-neutral-900">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#0891B2] uppercase mb-3">
            Premium Packages
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white">
            Six Signature Journeys
          </p>
          <p className="text-neutral-400 font-light mt-4">
            Vetted premium plans crafted around authentic experiences, handpicked beachfront stays, and seamless executive ground travel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {thailandPackages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col justify-between rounded-3xl bg-neutral-900/30 border border-neutral-800 hover:border-[#0891B2]/30 hover:bg-neutral-900/50 overflow-hidden transition-all duration-300 shadow-xl"
            >
              {/* Highlight bar on popular package */}
              {pkg.id === "thailand-honeymoon" && (
                <div className="absolute top-4 left-4 z-20 bg-rose-600 border border-rose-500 text-white font-bold text-[10px] tracking-widest uppercase py-1 px-3 rounded-full">
                  ★ Couples Choice
                </div>
              )}
              {pkg.id === "thailand-luxury" && (
                <div className="absolute top-4 left-4 z-20 bg-[#0891B2] border border-cyan-500 text-white font-bold text-[10px] tracking-widest uppercase py-1 px-3 rounded-full">
                  ✦ Ultra-Luxe
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-neutral-950/70 border border-white/10 px-3.5 py-1 text-xs font-bold text-neutral-250 backdrop-blur-md text-neutral-200">
                    <Calendar className="h-3.5 w-3.5 text-[#0891B2]" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Package content details */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0891B2]">
                      {pkg.idealFor}
                    </span>
                    <h3 className="text-xl font-bold font-serif text-white tracking-tight leading-snug group-hover:text-[#0891B2] transition-colors">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Highlights list */}
                  <ul className="space-y-2 pt-2 border-t border-neutral-800">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs text-neutral-350 text-neutral-400 font-light leading-relaxed">
                        <Check className="h-4 w-4 text-[#0891B2] shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price & CTA Action */}
              <div className="p-6 pt-0 border-t border-neutral-850 border-t border-neutral-900/50 mt-4">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Starting Price</span>
                  <span className="text-2xl font-black text-white font-serif tracking-tight">{pkg.price}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(pkg.whatsappMessage || "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0891B2]/10 hover:bg-[#0891B2] text-[#0891B2] hover:text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-2xl transition-all duration-300 active:scale-98 border border-[#0891B2]/30 hover:border-[#0891B2]"
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
