"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { vietnamData } from "@/data/vietnam";
import { Calendar, Check, MessageSquare, Compass } from "lucide-react";

export default function PremiumPackageCollection() {
  const customMessage = (name: string) => {
    return `Hi Outbound Travelers! I am ready to customize the premium Sabyasachi-style ${name} tour package. Please share itinerary details.`;
  };

  return (
    <section id="packages" className="relative bg-[#FAF7F2] px-6 py-24 md:py-36 overflow-hidden border-b border-[#1F5F5B]/10">
      
      {/* Decorative full screen grid lines */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-20">
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-[#1F5F5B]/15" />
        <div className="absolute top-0 bottom-0 right-1/3 w-px bg-[#1F5F5B]/15" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title pane */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20 space-y-4"
        >
          <span className="text-xs font-bold tracking-widest text-[#5E8B7E] uppercase block">
            Signature Circuits
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1F5F5B] tracking-tight">
            The Indochine Collections
          </h2>
          <p className="text-xs sm:text-sm font-light text-[#2F3E46]/70 max-w-xl mx-auto leading-relaxed">
            Carefully paced itineraries combining high-end boutique properties, private cruises, and standard-setting local chauffeur concierges.
          </p>
        </motion.div>

        {/* 4 Cards Grid styled with premium transparent surfaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vietnamData.packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between rounded-[32px] bg-white/60 border border-[#1F5F5B]/15 hover:border-[#1F5F5B]/30 hover:shadow-2xl hover:bg-white transition-all duration-350 shadow-md p-5 backdrop-blur-sm"
            >
              
              {/* Image Pane with circular frame details */}
              <div className="relative h-[160px] w-full rounded-2xl overflow-hidden mb-5 border border-[#1F5F5B]/10">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover opacity-95 group-hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F5F5B]/30 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 border border-[#1F5F5B]/15 px-3.5 py-1 text-[9px] font-bold text-[#1F5F5B] backdrop-blur-md shadow-sm">
                  <Calendar className="h-3 w-3 text-[#D9A441]" />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              {/* Package Content details */}
              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-[#B86B4B] block text-left">
                      {pkg.idealFor}
                    </span>
                    <h3 className="font-serif font-bold text-[#2F3E46] text-base tracking-tight leading-snug group-hover:text-[#1F5F5B] transition-colors text-left">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 pt-3 border-t border-[#1F5F5B]/10">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2 items-start text-[10px] text-[#2F3E46]/85 font-light leading-relaxed text-left">
                        <Check className="h-3.5 w-3.5 text-[#1F5F5B] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-3 border-t border-[#1F5F5B]/10 space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-500">Starting price</span>
                    <span className="text-lg font-bold font-serif text-[#1F5F5B]">{pkg.price}</span>
                  </div>

                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(customMessage(pkg.name))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#1F5F5B]/5 hover:bg-[#1F5F5B] border border-[#1F5F5B]/20 text-[9px] font-bold uppercase tracking-widest text-[#1F5F5B] hover:text-white transition-all duration-300 active:scale-98"
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
