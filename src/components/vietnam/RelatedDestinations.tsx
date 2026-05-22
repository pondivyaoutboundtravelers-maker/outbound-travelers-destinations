"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { vietnamData } from "@/data/vietnam";
import { ArrowRight, Compass } from "lucide-react";

export default function RelatedDestinations() {
  return (
    <section className="relative bg-[#FAF7F2] px-6 py-24 md:py-36 overflow-hidden border-b border-[#1F5F5B]/10">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#5E8B7E] uppercase block">
            Alternative Gateways
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#2F3E46] tracking-tight">
            Explore Other Sanctuaries
          </h2>
        </div>

        {/* Overlapping Asymmetrical Circle Frames Layout (Extremely unique and premium) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 max-w-4xl mx-auto">
          {vietnamData.related.map((item, idx) => {
            const isOdd = idx % 2 !== 0;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.93, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative h-[250px] w-[250px] rounded-full overflow-hidden border-4 border-white shadow-xl bg-neutral-100 ${
                  isOdd ? "md:translate-y-8" : ""
                }`}
              >
                {/* Visual Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover opacity-90 group-hover:scale-102 transition-transform duration-500"
                    sizes="250px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F5F5B]/40 to-transparent" />
                </div>

                {/* Overlaid details link */}
                <Link href={item.href} className="absolute inset-0 z-10 flex flex-col justify-end items-center p-6 text-center">
                  <div className="bg-white/95 border border-[#1F5F5B]/15 px-4 py-2 rounded-full backdrop-blur-md shadow-md flex items-center gap-1.5 group-hover:scale-[1.03] transition-all">
                    <span className="text-[9px] font-bold tracking-widest text-[#1F5F5B] uppercase">
                      {item.name}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#D9A441] transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
