"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass } from "lucide-react";

const destinations = [
  {
    title: "Singapore Luxury",
    description: "Cutting-edge modern city views, Universal Studios, and spectacular botanical gardens.",
    image: "/images/malaysia/petronas.jpg", // placeholder card image
    link: "/singapore",
    tag: "International",
  },
  {
    title: "Thailand Explorer",
    description: "Centuries-old historic golden temples, bustling shopping stalls, and gorgeous islands.",
    image: "/images/malaysia/langkawi.jpg", // placeholder card image
    link: "/thailand",
    tag: "International",
  },
  {
    title: "Sikkim Himalayan Stays",
    description: "Pristine mountain passes, high-altitude lakes, and tranquil Buddhist monasteries.",
    image: "/images/malaysia/batu-caves.jpg", // placeholder card image
    link: "/sikkim",
    tag: "Domestic Luxury",
  },
  {
    title: "Kashmir Classic",
    description: "Shikara rides on Dal Lake, snowcapped Gulmarg meadows, and beautiful valley gardens.",
    image: "/images/malaysia/hero.jpg", // placeholder card image
    link: "/kashmir",
    tag: "Domestic Luxury",
  },
];

export default function RelatedDestinations() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0E7490]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0E7490]"
          >
            <Compass className="h-4 w-4" />
            <span>Discover More</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
          >
            Explore Other <span className="italic text-[#0E7490]">Top Destinations</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 font-light"
          >
            Looking for something different? Explore our premium selection of other premium domestic and international escapes.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-3xl overflow-hidden border border-neutral-100 shadow-md hover:shadow-xl transition-all duration-300 bg-neutral-50 flex flex-col justify-between h-[360px]"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-44 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-neutral-950/20 z-10" />
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    className="object-cover transition-transform duration-750 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute left-5 top-5 z-20 rounded-full bg-white/10 px-3 py-1 text-2xs font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/10">
                    {dest.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-[#0E7490] transition-colors duration-300">
                    {dest.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-500 leading-relaxed font-light line-clamp-3">
                    {dest.description}
                  </p>
                </div>
              </div>

              {/* Action Button Footer */}
              <div className="p-5 pt-0">
                <Link
                  href={dest.link}
                  className="w-full flex items-center justify-between border border-neutral-200 group-hover:border-[#0E7490] rounded-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-neutral-700 group-hover:text-[#0E7490] transition-all bg-white"
                >
                  <span>Explore Route</span>
                  <ArrowUpRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
