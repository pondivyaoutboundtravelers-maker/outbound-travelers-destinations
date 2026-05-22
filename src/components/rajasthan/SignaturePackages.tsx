"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { rajasthanData } from "@/data/rajasthan";
import { Calendar, Check, MessageSquare } from "lucide-react";

export default function SignaturePackages() {
  const customMessage = (name: string) => {
    return `Hi Outbound Travelers! I am ready to customize the premium Sabyasachi-style ${name} tour package. Please share itinerary details.`;
  };

  return (
    <section id="packages" className="relative bg-[#F7F3EE] px-6 py-20 md:py-32 overflow-hidden border-b border-[#D6B370]/20">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title pane */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs font-bold tracking-widest text-[#B76E79] uppercase mb-3 block">
            Signature Circuits
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#5B2147] tracking-tight">
            The Palace Collection
          </h2>
          <p className="mt-4 text-xs sm:text-sm font-light text-[#6B4F4F]">
            Meticulously planned circuits spanning vetted Leela and Taj palatial coves, private lake cruises, and 24/7 dedicated local chauffeured transition.
          </p>
        </motion.div>

        {/* 4 Cards Grid styled with premium surfaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rajasthanData.packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between rounded-3xl bg-white border border-[#D6B370]/30 hover:border-[#5B2147]/40 hover:shadow-xl transition-all duration-350 shadow-md p-4"
            >
              {/* Image Pane with elegant overlay filters */}
              <div className="relative h-[160px] w-full rounded-2xl overflow-hidden mb-4">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover opacity-90 group-hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B2147]/20 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 border border-[#D6B370]/30 px-3 py-0.5 text-[9px] font-bold text-[#5B2147] backdrop-blur-md">
                  <Calendar className="h-3 w-3 text-[#B76E79]" />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              {/* Package Content details */}
              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-[#B76E79] block">
                      {pkg.idealFor}
                    </span>
                    <h3 className="font-serif font-bold text-[#5B2147] text-base tracking-tight leading-snug group-hover:text-[#B76E79] transition-colors">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 pt-2 border-t border-[#D6B370]/10">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex gap-1.5 items-start text-[10px] text-[#6B4F4F] font-light leading-relaxed">
                        <Check className="h-3.5 w-3.5 text-[#5B2147] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-3 border-t border-[#D6B370]/10 space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-500">Starting price</span>
                    <span className="text-lg font-bold font-serif text-[#5B2147]">{pkg.price}</span>
                  </div>

                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(customMessage(pkg.name))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#FAF7F2] hover:bg-[#5B2147] border border-[#D6B370]/20 text-[9px] font-bold uppercase tracking-widest text-[#5B2147] hover:text-white transition-all duration-300 active:scale-98"
                  >
                    <MessageSquare className="h-3 w-3 fill-current shrink-0" />
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
