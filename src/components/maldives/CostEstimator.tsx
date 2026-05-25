"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { maldivesData } from "@/lib/maldives/data";
import { Calculator, Hotel, Plane, MapPin, Users, ArrowRightLeft } from "lucide-react";

export default function CostEstimator() {
  const [days, setDays] = useState(5);
  const [tierIdx, setTierIdx] = useState(1);
  const [groupSize, setGroupSize] = useState(2);
  const tiers = maldivesData.hotelTiers;
  const tier = tiers[tierIdx];

  const estimate = useMemo(() => {
    const basePerNight = [50000, 130000, 300000][tierIdx];
    const transferPerPerson = 25000;
    const experiencePerDay = 10000;
    const mealsPerDay = 6000;
    const accommodation = basePerNight * (days - 1);
    const transfers = transferPerPerson * groupSize;
    const experiences = experiencePerDay * days;
    const meals = mealsPerDay * days * groupSize;
    const total = accommodation + transfers + experiences + meals;
    const perPerson = Math.round(total / groupSize);
    const usd = Math.round(total / 85);
    return { accommodation, transfers, experiences, meals, total, perPerson, usd };
  }, [days, tierIdx, groupSize]);

  return (
    <section className="py-28 lg:py-36 relative bg-[#0B3D2E] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='30' viewBox='0 0 60 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15 Q15 5 30 15 Q45 25 60 15' fill='none' stroke='%2306B6D4' stroke-width='0.3'/%3E%3C/svg%3E")`, backgroundSize: '60px 30px' }} />
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#06B6D4] font-bold">Island Budget Planner</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF7F2] mt-4">Estimate Your <span className="italic text-[#06B6D4]">Escape</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#052E16]/60 backdrop-blur-xl border border-[#06B6D4]/12 rounded-sm shadow-xl">
              <label className="flex items-center gap-2 text-[#06B6D4] text-xs font-semibold uppercase tracking-[0.2em] mb-4"><MapPin className="w-4 h-4" />Duration</label>
              <input type="range" min={4} max={8} value={days} onChange={(e) => setDays(parseInt(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer" style={{ background: `linear-gradient(to right, #06B6D4 0%, #06B6D4 ${((days - 4) / 4) * 100}%, #052E16 ${((days - 4) / 4) * 100}%, #052E16 100%)` }} />
              <div className="flex justify-between text-[#DCE7DD]/60 text-xs mt-2 font-semibold"><span>4 Days</span><span className="text-[#06B6D4] text-lg font-serif">{days} Days</span><span>8 Days</span></div>
            </div>

            <div className="p-6 bg-[#052E16]/60 backdrop-blur-xl border border-[#06B6D4]/12 rounded-sm shadow-xl">
              <label className="flex items-center gap-2 text-[#06B6D4] text-xs font-semibold uppercase tracking-[0.2em] mb-4"><Hotel className="w-4 h-4" />Resort Tier</label>
              <div className="grid grid-cols-3 gap-2">
                {tiers.map((t, i) => (
                  <button key={i} onClick={() => setTierIdx(i)} className={`px-3 py-3 text-xs font-semibold rounded-sm transition-all duration-300 border ${tierIdx === i ? 'bg-[#06B6D4] text-[#052E16] border-[#06B6D4] shadow-lg' : 'bg-transparent text-[#DCE7DD] border-[#06B6D4]/15 hover:border-[#06B6D4]/30'}`}>
                    {t.tier.split(' ').pop()}
                  </button>
                ))}
              </div>
              <p className="text-[#DCE7DD]/50 text-xs mt-3 italic">{tier.description}</p>
              <p className="text-[#06B6D4] text-xs font-semibold mt-1">{tier.price}</p>
            </div>

            <div className="p-6 bg-[#052E16]/60 backdrop-blur-xl border border-[#06B6D4]/12 rounded-sm shadow-xl">
              <label className="flex items-center gap-2 text-[#06B6D4] text-xs font-semibold uppercase tracking-[0.2em] mb-4"><Users className="w-4 h-4" />Travelers</label>
              <div className="flex gap-2 flex-wrap">
                {[1, 2, 3, 4, 5, 6].map(n => (<button key={n} onClick={() => setGroupSize(n)} className={`w-10 h-10 rounded-full text-sm font-bold transition-all duration-300 border ${groupSize === n ? 'bg-[#06B6D4] text-[#052E16] border-[#06B6D4] shadow-lg' : 'bg-transparent text-[#DCE7DD] border-[#06B6D4]/15 hover:border-[#06B6D4]/30'}`}>{n}</button>))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7">
            <div className="p-8 lg:p-10 bg-[#052E16]/60 backdrop-blur-2xl border border-[#06B6D4]/15 rounded-sm shadow-[0_8px_40px_rgba(6,182,212,0.06)] h-full">
              <div className="flex items-center gap-3 mb-8"><Calculator className="w-6 h-6 text-[#06B6D4]" /><h3 className="text-lg font-serif text-[#FAF7F2]">Cost Breakdown</h3></div>
              <div className="space-y-5">
                {[
                  { icon: <Hotel className="w-4 h-4" />, label: 'Resort Accommodation', sub: `${days - 1} nights × ${tier.tier.split(' ').pop()}`, val: estimate.accommodation },
                  { icon: <Plane className="w-4 h-4" />, label: 'Seaplane/Boat Transfers', sub: `${groupSize} travelers return`, val: estimate.transfers },
                  { icon: <MapPin className="w-4 h-4" />, label: 'Curated Experiences', sub: `${days} days guided`, val: estimate.experiences },
                  { icon: <Users className="w-4 h-4" />, label: 'All-Inclusive Dining', sub: `${days} days × ${groupSize} pax`, val: estimate.meals },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b border-[#06B6D4]/08">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#06B6D4]/08 flex items-center justify-center text-[#06B6D4]">{item.icon}</div>
                      <div><p className="text-[#FAF7F2] text-sm font-semibold">{item.label}</p><p className="text-[#DCE7DD]/50 text-xs">{item.sub}</p></div>
                    </div>
                    <AnimatePresence mode="wait"><motion.span key={item.val} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="text-[#FAF7F2] text-sm font-semibold font-mono">₹{item.val.toLocaleString('en-IN')}</motion.span></AnimatePresence>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t-2 border-[#06B6D4]/20">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[#DCE7DD]/50 text-xs uppercase tracking-wider">Estimated Total</p>
                    <AnimatePresence mode="wait"><motion.div key={estimate.total} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-3xl sm:text-4xl font-serif font-bold text-[#06B6D4] mt-1">₹{estimate.total.toLocaleString('en-IN')}</motion.div></AnimatePresence>
                  </div>
                  <div className="text-right">
                    <p className="text-[#DCE7DD]/50 text-xs uppercase tracking-wider">Per Person</p>
                    <div className="text-xl font-serif text-[#FAF7F2] mt-1">₹{estimate.perPerson.toLocaleString('en-IN')}</div>
                    <div className="flex items-center gap-1 mt-1 justify-end"><ArrowRightLeft className="w-3 h-3 text-[#C6A15B]" /><span className="text-[#C6A15B] text-xs font-mono">≈ ${estimate.usd.toLocaleString('en-IN')}</span></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))} className="flex-1 px-6 py-4 bg-[#06B6D4] text-[#052E16] font-bold uppercase tracking-[0.12em] text-sm rounded-sm hover:bg-[#0EA5E9] transition-all duration-300 text-center shadow-lg">Get Exact Quote</button>
                <a href={`https://wa.me/${maldivesData.whatsapp.number}?text=${encodeURIComponent(maldivesData.whatsapp.heroMessage)}`} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-4 border border-[#06B6D4]/25 text-[#FAF7F2] font-semibold uppercase tracking-[0.12em] text-sm rounded-sm hover:bg-[#06B6D4]/08 transition-all duration-300 text-center">WhatsApp Specialist</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
