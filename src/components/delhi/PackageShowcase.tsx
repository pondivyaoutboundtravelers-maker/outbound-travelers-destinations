"use client";

import React from "react";
import { motion } from "framer-motion";
import { delhiData } from "@/lib/delhi/data";
import { buildWhatsAppUrl } from "@/lib/shared/whatsapp";
import { ArrowRight, Clock } from "lucide-react";

export default function PackageShowcase() {
  return (
    <section className="py-24 bg-[#EADBC8] relative overflow-hidden">
      {/* Background arch vectors */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full border-[1px] border-[#B45309]/10 pointer-events-none" />
      <div className="absolute bottom-[-150px] left-[-50px] w-[600px] h-[600px] rounded-full border-[1px] border-[#7C2D12]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] text-[#7C2D12] font-bold"
          >
            The Collection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-[#111827] mt-4 tracking-tight"
          >
            Signature Itineraries
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {delhiData.packages.map((pkg, index) => {
            const waUrl = buildWhatsAppUrl(delhiData.whatsapp.number, pkg.whatsappMessage);
            const isCenter = index === 1; // Elevate the center card slightly

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`group relative flex flex-col bg-[#F8F4EC] rounded-sm shadow-lg border border-[#D4A373]/30 overflow-hidden ${isCenter ? 'lg:-translate-y-8' : ''}`}
              >
                {/* Image Header */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-[#F8F4EC]">
                    <h3 className="text-2xl font-serif mb-1">{pkg.name}</h3>
                    <div className="flex items-center gap-2 text-sm font-light text-[#EADBC8]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-[#B45309] font-bold mb-3">
                      Ideal For
                    </p>
                    <p className="text-[#111827] font-medium">{pkg.idealFor}</p>
                  </div>
                  
                  <div className="flex-grow">
                    <ul className="space-y-3">
                      {pkg.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#111827]/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] shrink-0 mt-1.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#D4A373]/30 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#111827]/60 mb-1">Starting from</p>
                      <p className="text-xl font-serif text-[#7C2D12]">{pkg.price}</p>
                    </div>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#111827] text-[#F8F4EC] flex items-center justify-center transition-transform group-hover:scale-110 hover:bg-[#7C2D12]"
                    >
                      <ArrowRight className="w-5 h-5" />
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
