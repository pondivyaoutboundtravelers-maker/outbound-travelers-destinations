"use client";
import React from "react";
import { motion } from "framer-motion";
import { nepalData } from "@/lib/nepal/data";
import { Wind, Anchor, Sunrise } from "lucide-react";

const icons = [<Wind className="w-5 h-5" key="w" />, <Anchor className="w-5 h-5" key="a" />, <Sunrise className="w-5 h-5" key="s" />];

export default function PokharaSerenity() {
  const p = nepalData.pokhara;
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F5EFE2 0%, #EADFCF 50%, #F5EFE2 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D97706] font-bold">Lakeside Paradise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] mt-4">{p.headline}</h2>
          <p className="text-[#475569] text-base mt-4 max-w-2xl mx-auto">{p.subheadline}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Lake image with CSS reflection */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="lg:col-span-7 relative">
            <div className="relative overflow-hidden rounded-sm shadow-2xl border border-[#DCE7DD]">
              <img src="/images/nepal/pokhara.jpg" alt="Phewa Lake with Machapuchare reflection" className="w-full aspect-[4/3] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052E16]/20 via-transparent to-transparent" />
            </div>
            {/* CSS reflection */}
            <div className="relative h-[80px] overflow-hidden rounded-b-sm opacity-30 -mt-1">
              <img src="/images/nepal/pokhara.jpg" alt="" className="w-full aspect-[4/3] object-cover transform scale-y-[-1] origin-top blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5EFE2]" />
            </div>
          </motion.div>

          {/* Activities */}
          <div className="lg:col-span-5 space-y-4">
            {p.activities.map((act, idx) => (
              <motion.div key={act.id} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="p-5 bg-white border border-[#DCE7DD] rounded-sm shadow-lg hover:border-[#D97706]/30 transition-all duration-300 group flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0B3D2E]/10 flex items-center justify-center text-[#0B3D2E] flex-shrink-0 group-hover:bg-[#D97706]/10 group-hover:text-[#D97706] transition-colors">{icons[idx]}</div>
                <div><h4 className="text-[#0F172A] font-semibold text-sm">{act.title}</h4><p className="text-[#475569] text-xs mt-1 leading-relaxed">{act.description}</p></div>
              </motion.div>
            ))}
            <motion.blockquote initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}
              className="p-5 bg-[#0B3D2E] rounded-sm shadow-xl mt-6">
              <p className="text-[#DCE7DD] text-sm italic leading-relaxed">{p.quote}</p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
