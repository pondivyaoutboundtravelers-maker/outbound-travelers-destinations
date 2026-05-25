"use client";

import React from "react";
import { motion } from "framer-motion";
import { agraData } from "@/lib/agra/data";
import { buildWhatsAppUrl } from "@/lib/shared/whatsapp";
import { Clock, MoveRight } from "lucide-react";

export default function PackageShowcase() {
  return (
    <section className="py-24 bg-[#F5F1E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] text-[#14532D] font-bold"
          >
            Luxury Portfolios
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-[#052E16] mt-4 tracking-tight"
          >
            Curated Experiences
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {agraData.packages.map((pkg, index) => {
            const waUrl = buildWhatsAppUrl(agraData.whatsapp.number, pkg.whatsappMessage);
            const isCenter = index === 1;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`group relative flex flex-col bg-[#FAFAF7] shadow-[0_10px_40px_rgba(5,46,22,0.08)] border border-[#DCE7DD] overflow-hidden ${isCenter ? 'lg:-translate-y-6' : ''}`}
              >
                {/* Image Header */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/90 via-[#0B3D2E]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-[#FAFAF7]">
                    <h3 className="text-2xl font-serif mb-1">{pkg.name}</h3>
                    <div className="flex items-center gap-2 text-sm font-light text-[#DCE7DD]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-[#C6A15B] font-bold mb-2">
                      Ideal For
                    </p>
                    <p className="text-[#052E16] font-medium">{pkg.idealFor}</p>
                  </div>
                  
                  <div className="flex-grow">
                    <ul className="space-y-4">
                      {pkg.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#475569]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#14532D] shrink-0 mt-1.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#DCE7DD] flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-[#475569] mb-1">Starting From</p>
                      <p className="text-xl font-serif text-[#0B3D2E]">{pkg.price}</p>
                    </div>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#0B3D2E] text-[#C6A15B] flex items-center justify-center transition-all group-hover:scale-110 hover:bg-[#14532D] shadow-lg"
                    >
                      <MoveRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
