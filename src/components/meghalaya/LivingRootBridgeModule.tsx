"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function LivingRootBridgeModule() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-black py-24 lg:py-32">
      {/* Background Image that scales slightly */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <Image
          src="/images/meghalaya/root-bridge.jpg"
          alt="Living Root Bridge"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col justify-center py-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
                The Architecture of <span className="italic text-emerald-400">Time.</span>
              </h2>
              <p className="mb-8 text-lg font-light leading-relaxed text-neutral-300">
                Deep in the dense tropical forests of Meghalaya, hidden in the misty valleys of the Khasi and Jaintia hills, lie some of the world&apos;s most astounding man-made wonders—living root bridges.
              </p>
              <p className="mb-8 text-lg font-light leading-relaxed text-neutral-300">
                Grown, not built. The indigenous tribes have trained the aerial roots of rubber fig trees across rivers for centuries, creating living structures that grow stronger with each passing year.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-md">
                  <div className="mb-1 text-2xl font-semibold text-emerald-400">150+</div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400">Years to Grow</div>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-md">
                  <div className="mb-1 text-2xl font-semibold text-emerald-400">500</div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400">People Can Cross</div>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-md">
                  <div className="mb-1 text-2xl font-semibold text-emerald-400">Unique</div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400">To Meghalaya</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Empty right side to let the background show */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
