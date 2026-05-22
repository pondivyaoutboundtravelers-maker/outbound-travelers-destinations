"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { rajasthanData } from "@/data/rajasthan";
import { ArrowRight } from "lucide-react";

export default function RelatedDestinations() {
  return (
    <section className="relative bg-[#F7F3EE] px-6 py-20 md:py-32 overflow-hidden border-b border-[#D6B370]/20">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#B76E79] uppercase mb-3 block">
            Alternative Gateways
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#5B2147] tracking-tight">
            Explore Other Sanctuaries
          </h2>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {rajasthanData.related.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative h-[180px] rounded-[24px] overflow-hidden border border-[#D6B370]/30 bg-white shadow-md hover:shadow-lg"
            >
              <Link href={item.href} className="absolute inset-0 z-10 flex flex-col justify-end p-4">
                <span className="text-[10px] font-bold tracking-widest text-[#5B2147] uppercase flex items-center gap-1.5 group-hover:text-[#B76E79] transition-colors bg-white/90 px-3 py-1.5 rounded-full w-fit backdrop-blur-md shadow-sm border border-[#D6B370]/20">
                  <span>{item.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-[#D6B370]" />
                </span>
              </Link>
              
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover opacity-90 group-hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B2147]/20 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
