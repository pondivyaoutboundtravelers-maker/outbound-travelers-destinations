"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Check, ArrowRight } from "lucide-react";
import { packages } from "../../data/meghalaya";

export default function PremiumPackages() {
  return (
    <section className="bg-neutral-50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 font-serif text-4xl font-medium tracking-tight text-neutral-900 md:text-5xl"
          >
            Premium <span className="italic text-[#065F46]">Journeys</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-neutral-600"
          >
            Thoughtfully crafted itineraries that balance adventure with luxury.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-xl transition-shadow hover:shadow-2xl sm:flex-row"
            >
              {pkg.isPopular && (
                <div className="absolute left-0 top-6 z-20 rounded-r-full bg-emerald-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                  Most Popular
                </div>
              )}
              
              {/* Image Section */}
              <div className="relative h-64 w-full shrink-0 overflow-hidden sm:h-auto sm:w-2/5">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 40vw"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-between p-6 sm:p-8 w-full">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-emerald-600">
                    <Clock className="h-4 w-4" />
                    {pkg.duration}
                  </div>
                  <h3 className="mb-3 font-serif text-2xl font-bold text-neutral-900">{pkg.title}</h3>
                  <p className="mb-4 text-sm text-neutral-600">{pkg.shortDescription}</p>
                  
                  <ul className="mb-6 space-y-2">
                    {pkg.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                        <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
                  <div>
                    <span className="text-xs text-neutral-500">Starting from</span>
                    <div className="font-serif text-2xl font-bold text-neutral-900">{pkg.price}</div>
                  </div>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors hover:bg-[#065F46] hover:text-white">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
