"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "../../data/meghalaya";

export default function TopExperiencesGrid() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 font-serif text-4xl font-medium tracking-tight text-neutral-900 md:text-5xl"
          >
            Curated <span className="italic text-[#065F46]">Experiences</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-neutral-600"
          >
            Handpicked activities to ensure you experience the very best of Meghalaya&apos;s natural and cultural heritage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl"
            >
              {/* Background Image */}
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div className="translate-y-8 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="mb-2 font-serif text-2xl font-medium text-white">{exp.title}</h3>
                  <p className="mb-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-neutral-300">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
