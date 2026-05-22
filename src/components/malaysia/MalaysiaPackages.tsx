"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight, Tag } from "lucide-react";
import { packages } from "../../data/malaysia";

export default function MalaysiaPackages() {
  return (
    <section id="packages" className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 border border-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0E7490]"
          >
            <Tag className="h-4 w-4" />
            <span>Curated Travel Packages</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
          >
            Exclusive <span className="italic text-[#0E7490]">Malaysia Packages</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 font-light"
          >
            Whether it&apos;s a quick weekend thrill, a romantic seaside honeymoon, or a luxury culinary exploration, select the ideal plan.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl border bg-white flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 ${
                pkg.isPopular ? "border-[#0E7490] ring-1 ring-[#0E7490]/20" : "border-neutral-200/60"
              }`}
            >
              {/* Popular Badge banner */}
              {pkg.isPopular && (
                <div className="absolute right-6 top-6 z-20 rounded-full bg-[#0E7490] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                  {pkg.badge || "Popular"}
                </div>
              )}

              {/* Image Header */}
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute left-6 bottom-6 rounded-full bg-black/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {pkg.duration}
                  </div>
                </div>

                {/* Package Main Info */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-1 text-neutral-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <span>{pkg.idealFor}</span>
                  </div>
                  <h3 className="font-serif text-xl font-extrabold text-neutral-900 tracking-tight leading-snug">
                    {pkg.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-neutral-500 leading-relaxed font-light">
                    {pkg.shortDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="mt-6 space-y-3">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-neutral-700 text-sm">
                        <Check className="h-4 w-4 text-[#0E7490] shrink-0 mt-0.5" />
                        <span className="font-semibold">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing & CTA footer */}
              <div className="border-t border-neutral-100 p-6 sm:p-8 bg-neutral-50/50">
                <div className="flex items-end justify-between mb-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Starting Price</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-black text-[#0E7490]">{pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-sm font-semibold text-neutral-400 line-through">{pkg.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-bold text-neutral-700">4.9</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    document.getElementById("estimator")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`group w-full flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    pkg.isPopular
                      ? "bg-[#0E7490] hover:bg-cyan-850 text-white shadow-lg shadow-cyan-900/10"
                      : "bg-white border border-neutral-300 hover:border-[#0E7490] text-[#0E7490]"
                  }`}
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
