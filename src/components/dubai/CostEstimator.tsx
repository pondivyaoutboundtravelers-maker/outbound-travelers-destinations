"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dubaiData } from "@/lib/dubai/data";
import { Calculator, Hotel, Car, MapPin, Users, ArrowRightLeft } from "lucide-react";

export default function CostEstimator() {
  const [days, setDays] = useState(5);
  const [tierIdx, setTierIdx] = useState(1);
  const [groupSize, setGroupSize] = useState(2);

  const tiers = dubaiData.hotelTiers;
  const tier = tiers[tierIdx];

  const estimate = useMemo(() => {
    const basePerNight = [11000, 28000, 90000][tierIdx];
    const transportPerDay = 5000;
    const experiencePerDay = 7000;
    const guidePerDay = 3000;
    const accommodation = basePerNight * (days - 1);
    const transport = transportPerDay * days;
    const experiences = experiencePerDay * days;
    const guide = guidePerDay * days;
    const total = accommodation + transport + experiences + guide;
    const perPerson = Math.round(total / groupSize);
    const aed = Math.round(total / 22.5);
    return { accommodation, transport, experiences, guide, total, perPerson, aed };
  }, [days, tierIdx, groupSize]);

  return (
    <section className="py-28 lg:py-36 relative bg-[#050816] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23CA8A04' stroke-width='0.3'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FACC15] font-bold">Luxury Travel Planner</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF7F2] mt-4">Estimate Your <span className="italic bg-gradient-to-r from-[#FACC15] to-[#CA8A04] bg-clip-text text-transparent">Journey</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Controls */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#0F172A]/60 backdrop-blur-xl border border-[#CA8A04]/12 rounded-sm shadow-xl">
              <label className="flex items-center gap-2 text-[#FACC15] text-xs font-semibold uppercase tracking-[0.2em] mb-4"><MapPin className="w-4 h-4" /> Duration</label>
              <input type="range" min={3} max={7} value={days} onChange={(e) => setDays(parseInt(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer" style={{ background: `linear-gradient(to right, #CA8A04 0%, #CA8A04 ${((days - 3) / 4) * 100}%, #0F172A ${((days - 3) / 4) * 100}%, #0F172A 100%)` }} />
              <div className="flex justify-between text-[#E7D3B3]/60 text-xs mt-2 font-semibold">
                <span>3 Days</span><span className="text-[#FACC15] text-lg font-serif">{days} Days</span><span>7 Days</span>
              </div>
            </div>

            <div className="p-6 bg-[#0F172A]/60 backdrop-blur-xl border border-[#CA8A04]/12 rounded-sm shadow-xl">
              <label className="flex items-center gap-2 text-[#FACC15] text-xs font-semibold uppercase tracking-[0.2em] mb-4"><Hotel className="w-4 h-4" /> Hotel Tier</label>
              <div className="grid grid-cols-3 gap-2">
                {tiers.map((t, i) => (
                  <button key={i} onClick={() => setTierIdx(i)}
                    className={`px-3 py-3 text-xs font-semibold rounded-sm transition-all duration-300 border ${tierIdx === i ? 'bg-gradient-to-r from-[#CA8A04] to-[#B45309] text-[#050816] border-[#FACC15] shadow-lg' : 'bg-transparent text-[#E7D3B3] border-[#CA8A04]/15 hover:border-[#CA8A04]/30'}`}>
                    {t.tier.split(' ').pop()}
                  </button>
                ))}
              </div>
              <p className="text-[#E7D3B3]/50 text-xs mt-3 italic">{tier.description}</p>
              <p className="text-[#FACC15] text-xs font-semibold mt-1">{tier.price}</p>
            </div>

            <div className="p-6 bg-[#0F172A]/60 backdrop-blur-xl border border-[#CA8A04]/12 rounded-sm shadow-xl">
              <label className="flex items-center gap-2 text-[#FACC15] text-xs font-semibold uppercase tracking-[0.2em] mb-4"><Users className="w-4 h-4" /> Group Size</label>
              <div className="flex gap-2 flex-wrap">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                  <button key={n} onClick={() => setGroupSize(n)}
                    className={`w-10 h-10 rounded-full text-sm font-bold transition-all duration-300 border ${groupSize === n ? 'bg-[#CA8A04] text-[#050816] border-[#FACC15] shadow-lg' : 'bg-transparent text-[#E7D3B3] border-[#CA8A04]/15 hover:border-[#CA8A04]/30'}`}>
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Result */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7">
            <div className="p-8 lg:p-10 bg-[#0F172A]/60 backdrop-blur-2xl border border-[#CA8A04]/15 rounded-sm shadow-[0_8px_40px_rgba(202,138,4,0.06)] h-full">
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="w-6 h-6 text-[#FACC15]" />
                <h3 className="text-lg font-serif text-[#FAF7F2]">Cost Breakdown</h3>
              </div>

              <div className="space-y-5">
                {[
                  { icon: <Hotel className="w-4 h-4" />, label: 'Accommodation', sub: `${days - 1} nights × ${tier.tier}`, val: estimate.accommodation },
                  { icon: <Car className="w-4 h-4" />, label: 'Private Transfers', sub: `${days} days chauffeured`, val: estimate.transport },
                  { icon: <MapPin className="w-4 h-4" />, label: 'Curated Experiences', sub: `${days} days guided`, val: estimate.experiences },
                  { icon: <Users className="w-4 h-4" />, label: 'Guide & Concierge', sub: `${days} days dedicated`, val: estimate.guide },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b border-[#CA8A04]/08">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#CA8A04]/08 flex items-center justify-center text-[#FACC15]">{item.icon}</div>
                      <div><p className="text-[#FAF7F2] text-sm font-semibold">{item.label}</p><p className="text-[#E7D3B3]/50 text-xs">{item.sub}</p></div>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.span key={item.val} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="text-[#FAF7F2] text-sm font-semibold font-mono">₹{item.val.toLocaleString('en-IN')}</motion.span>
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t-2 border-[#CA8A04]/20">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[#E7D3B3]/50 text-xs uppercase tracking-wider">Estimated Total</p>
                    <AnimatePresence mode="wait">
                      <motion.div key={estimate.total} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                        className="text-3xl sm:text-4xl font-serif font-bold bg-gradient-to-r from-[#FACC15] to-[#CA8A04] bg-clip-text text-transparent mt-1">₹{estimate.total.toLocaleString('en-IN')}</motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="text-right">
                    <p className="text-[#E7D3B3]/50 text-xs uppercase tracking-wider">Per Person</p>
                    <div className="text-xl font-serif text-[#FAF7F2] mt-1">₹{estimate.perPerson.toLocaleString('en-IN')}</div>
                    <div className="flex items-center gap-1 mt-1 justify-end">
                      <ArrowRightLeft className="w-3 h-3 text-[#0EA5E9]" />
                      <span className="text-[#0EA5E9] text-xs font-mono">≈ AED {estimate.aed.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-[#CA8A04] to-[#B45309] text-[#050816] font-bold uppercase tracking-[0.12em] text-sm rounded-sm hover:shadow-[0_0_30px_rgba(202,138,4,0.3)] transition-all duration-500 text-center">
                  Get Exact Quote
                </button>
                <a href={`https://wa.me/${dubaiData.whatsapp.number}?text=${encodeURIComponent(dubaiData.whatsapp.heroMessage)}`} target="_blank" rel="noopener noreferrer"
                  className="flex-1 px-6 py-4 border border-[#CA8A04]/25 text-[#FAF7F2] font-semibold uppercase tracking-[0.12em] text-sm rounded-sm hover:bg-[#CA8A04]/08 transition-all duration-300 text-center">
                  WhatsApp Specialist
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
