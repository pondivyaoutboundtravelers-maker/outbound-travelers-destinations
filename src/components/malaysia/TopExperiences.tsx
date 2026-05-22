"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Compass } from "lucide-react";
import { experiences } from "../../data/malaysia";

export default function TopExperiences() {
  return (
    <section id="experiences" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0E7490]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0E7490]"
          >
            <Compass className="h-4 w-4" />
            <span>Must-Do Experiences</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
          >
            Top Iconic <span className="italic text-[#0E7490]">Malaysia Experiences</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 font-light"
          >
            Handpicked premium activities that define standard vacations. High quality sights, theme parks, and ocean sunset highlights.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-96 overflow-hidden rounded-3xl border border-neutral-100 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Image & Dark Gradient Overlay */}
              <div className="absolute inset-0 z-0 h-full w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-900/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Tag / Category Badge */}
              <div className="absolute left-5 top-5 z-20 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/10">
                {exp.tag}
              </div>

              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6 flex flex-col justify-end h-1/2">
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-xs font-extrabold tracking-wider text-neutral-200">5.0 Star Rated</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white tracking-tight leading-snug">
                  {exp.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light line-clamp-2 max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100 transition-all duration-500">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
