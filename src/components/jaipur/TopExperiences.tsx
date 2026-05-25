"use client";

import React from "react";
import { motion } from "framer-motion";
import { jaipurData } from "@/lib/jaipur/data";
import { Clock, MapPin, Sparkles } from "lucide-react";

export default function TopExperiences() {
  const experiences = jaipurData.experiences;

  return (
    <section className="py-28 lg:py-36 relative bg-[#FAF8F2] overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-bold">
            Curated Encounters
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-serif text-[#0F172A] mt-4 leading-tight">
            Five Royal <span className="italic text-[#0B3D2E]">Experiences</span>
          </h2>
          <p className="text-[#475569] text-base mt-4 max-w-2xl mx-auto">
            Each experience is privately guided, exclusively timed, and designed to reveal Jaipur&apos;s hidden grandeur.
          </p>
        </motion.div>
      </div>

      {/* Alternating full-bleed editorial blocks */}
      <div className="space-y-0">
        {experiences.map((exp, idx) => {
          const isOdd = idx % 2 === 0;
          return (
            <div key={exp.id} className="relative">
              <div className={`max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[450px] lg:min-h-[500px] ${isOdd ? "" : ""}`}>
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: isOdd ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  className={`lg:col-span-7 relative min-h-[300px] ${isOdd ? "order-1" : "order-1 lg:order-2"}`}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Gradient toward content side */}
                    <div
                      className={`absolute inset-0 ${
                        isOdd
                          ? "bg-gradient-to-r from-transparent via-transparent to-[#FAF8F2]/90"
                          : "bg-gradient-to-l from-transparent via-transparent to-[#FAF8F2]/90"
                      } hidden lg:block`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F2]/80 to-transparent lg:hidden" />
                  </div>

                  {/* Floating number badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={`absolute top-6 ${isOdd ? "left-6" : "right-6"} w-16 h-16 rounded-full bg-[#0B3D2E]/80 backdrop-blur-md flex items-center justify-center shadow-xl border border-[#C6A15B]/20 z-10`}
                  >
                    <span className="text-[#C6A15B] font-serif text-2xl font-bold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Content Card — overlapping the image */}
                <motion.div
                  initial={{ opacity: 0, x: isOdd ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className={`lg:col-span-5 flex items-center ${isOdd ? "order-2" : "order-2 lg:order-1"}`}
                >
                  <div className={`w-full px-6 lg:px-10 py-10 lg:py-12 ${isOdd ? "lg:-ml-16" : "lg:-mr-16"} relative z-10`}>
                    <div className={`p-8 ${idx % 2 === 0 ? "bg-white" : "bg-[#0B3D2E]"} shadow-xl rounded-sm border ${idx % 2 === 0 ? "border-[#DCE7DD]" : "border-[#C6A15B]/20"}`}>
                      <h3 className={`text-xl sm:text-2xl font-serif ${idx % 2 === 0 ? "text-[#0F172A]" : "text-[#FAF8F2]"} leading-tight`}>
                        {exp.title}
                      </h3>
                      <p className={`text-sm mt-4 leading-relaxed ${idx % 2 === 0 ? "text-[#475569]" : "text-[#DCE7DD]"}`}>
                        {exp.description}
                      </p>

                      {/* Detail pills */}
                      <div className="flex flex-wrap gap-2 mt-5">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold rounded-full ${idx % 2 === 0 ? "bg-[#0B3D2E]/10 text-[#0B3D2E]" : "bg-[#C6A15B]/15 text-[#C6A15B]"}`}>
                          <Clock className="w-3 h-3" /> 2-3 Hours
                        </span>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold rounded-full ${idx % 2 === 0 ? "bg-[#C6A15B]/10 text-[#C6A15B]" : "bg-[#FAF8F2]/10 text-[#FAF8F2]"}`}>
                          <MapPin className="w-3 h-3" /> Private Tour
                        </span>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold rounded-full ${idx % 2 === 0 ? "bg-[#DCE7DD] text-[#0B3D2E]" : "bg-[#14532D] text-[#DCE7DD]"}`}>
                          <Sparkles className="w-3 h-3" /> Exclusive
                        </span>
                      </div>

                      {/* Gold accent border */}
                      <div className={`mt-6 w-16 h-0.5 ${idx % 2 === 0 ? "bg-[#C6A15B]" : "bg-[#C6A15B]"}`} />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Dotted gold connector between items */}
              {idx < experiences.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-px h-12 border-l-2 border-dashed border-[#C6A15B]/30" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
