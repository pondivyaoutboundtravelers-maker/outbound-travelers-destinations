"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { jaipurData } from "@/lib/jaipur/data";
import { Calculator, Hotel, Car, MapPin, Users } from "lucide-react";

export default function CostEstimator() {
  const [days, setDays] = useState(4);
  const [tierIdx, setTierIdx] = useState(1);
  const [groupSize, setGroupSize] = useState(2);

  const tiers = jaipurData.hotelTiers;
  const tier = tiers[tierIdx];

  const estimate = useMemo(() => {
    const basePerNight = [8000, 22000, 70000][tierIdx];
    const transportPerDay = 3500;
    const experiencePerDay = 5000;
    const guidePerDay = 2500;

    const accommodation = basePerNight * (days - 1);
    const transport = transportPerDay * days;
    const experiences = experiencePerDay * days;
    const guide = guidePerDay * days;
    const perPerson = Math.round((accommodation + transport + experiences + guide) / groupSize);
    const total = accommodation + transport + experiences + guide;

    return { accommodation, transport, experiences, guide, perPerson, total };
  }, [days, tierIdx, groupSize]);

  return (
    <section className="py-28 lg:py-36 relative bg-[#052E16] overflow-hidden">
      {/* Jali pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C6A15B' fill-opacity='0.5'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-bold">
            Royal Travel Planner
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF8F2] mt-4">
            Estimate Your <span className="italic text-[#C6A15B]">Journey</span>
          </h2>
          <p className="text-[#DCE7DD] text-base mt-4 max-w-xl mx-auto">
            Configure your ideal Jaipur experience and get an instant estimate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Days Slider */}
            <div className="p-6 bg-[#0B3D2E]/50 backdrop-blur-xl border border-[#C6A15B]/15 rounded-sm shadow-xl">
              <label className="flex items-center gap-2 text-[#C6A15B] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                <MapPin className="w-4 h-4" /> Duration
              </label>
              <input
                type="range"
                min={2}
                max={7}
                value={days}
                onChange={(e) => setDays(parseInt(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #C6A15B 0%, #C6A15B ${((days - 2) / 5) * 100}%, #14532D ${((days - 2) / 5) * 100}%, #14532D 100%)`,
                }}
              />
              <div className="flex justify-between text-[#DCE7DD] text-xs mt-2 font-semibold">
                <span>2 Days</span>
                <span className="text-[#C6A15B] text-lg font-serif">{days} Days</span>
                <span>7 Days</span>
              </div>
            </div>

            {/* Hotel Tier Selector */}
            <div className="p-6 bg-[#0B3D2E]/50 backdrop-blur-xl border border-[#C6A15B]/15 rounded-sm shadow-xl">
              <label className="flex items-center gap-2 text-[#C6A15B] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                <Hotel className="w-4 h-4" /> Hotel Tier
              </label>
              <div className="grid grid-cols-3 gap-2">
                {tiers.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setTierIdx(i)}
                    className={`px-3 py-3 text-xs font-semibold rounded-sm transition-all duration-300 border ${
                      tierIdx === i
                        ? "bg-[#C6A15B] text-[#052E16] border-[#C6A15B] shadow-lg"
                        : "bg-transparent text-[#DCE7DD] border-[#C6A15B]/20 hover:border-[#C6A15B]/40"
                    }`}
                  >
                    {t.tier.split(" ").pop()}
                  </button>
                ))}
              </div>
              <p className="text-[#DCE7DD]/60 text-xs mt-3 italic">{tier.description}</p>
              <p className="text-[#C6A15B] text-xs font-semibold mt-1">{tier.price}</p>
            </div>

            {/* Group Size */}
            <div className="p-6 bg-[#0B3D2E]/50 backdrop-blur-xl border border-[#C6A15B]/15 rounded-sm shadow-xl">
              <label className="flex items-center gap-2 text-[#C6A15B] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                <Users className="w-4 h-4" /> Group Size
              </label>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <button
                    key={n}
                    onClick={() => setGroupSize(n)}
                    className={`w-10 h-10 rounded-full text-sm font-bold transition-all duration-300 border ${
                      groupSize === n
                        ? "bg-[#C6A15B] text-[#052E16] border-[#C6A15B] shadow-lg"
                        : "bg-transparent text-[#DCE7DD] border-[#C6A15B]/20 hover:border-[#C6A15B]/40"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Glassmorphism Result Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="p-8 lg:p-10 bg-[#0B3D2E]/60 backdrop-blur-2xl border border-[#C6A15B]/20 rounded-sm shadow-2xl h-full">
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="w-6 h-6 text-[#C6A15B]" />
                <h3 className="text-lg font-serif text-[#FAF8F2]">
                  Estimated Cost Breakdown
                </h3>
              </div>

              {/* Breakdown Items */}
              <div className="space-y-5">
                {[
                  { icon: <Hotel className="w-4 h-4" />, label: "Accommodation", sublabel: `${days - 1} nights × ${tier.tier}`, value: estimate.accommodation },
                  { icon: <Car className="w-4 h-4" />, label: "Luxury Transport", sublabel: `${days} days chauffeured`, value: estimate.transport },
                  { icon: <MapPin className="w-4 h-4" />, label: "Curated Experiences", sublabel: `${days} days guided`, value: estimate.experiences },
                  { icon: <Users className="w-4 h-4" />, label: "Heritage Guide", sublabel: `${days} days dedicated`, value: estimate.guide },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b border-[#C6A15B]/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#C6A15B]/10 flex items-center justify-center text-[#C6A15B]">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[#FAF8F2] text-sm font-semibold">{item.label}</p>
                        <p className="text-[#DCE7DD]/60 text-xs">{item.sublabel}</p>
                      </div>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={item.value}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#FAF8F2] text-sm font-semibold font-mono"
                      >
                        ₹{item.value.toLocaleString("en-IN")}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="mt-8 pt-6 border-t-2 border-[#C6A15B]/30">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[#DCE7DD]/60 text-xs uppercase tracking-wider">Estimated Total</p>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={estimate.total}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="text-3xl sm:text-4xl font-serif font-bold text-[#C6A15B] mt-1"
                      >
                        ₹{estimate.total.toLocaleString("en-IN")}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="text-right">
                    <p className="text-[#DCE7DD]/60 text-xs uppercase tracking-wider">Per Person</p>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={estimate.perPerson}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-xl font-serif text-[#FAF8F2] mt-1"
                      >
                        ₹{estimate.perPerson.toLocaleString("en-IN")}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("openLeadForm"))}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-[#0B3D2E] to-[#14532D] text-[#C6A15B] font-semibold uppercase tracking-[0.12em] text-sm rounded-sm hover:from-[#14532D] hover:to-[#0B3D2E] transition-all duration-500 shadow-lg border border-[#C6A15B]/20 text-center"
                >
                  Get Exact Quote
                </button>
                <a
                  href={`https://wa.me/${jaipurData.whatsapp.number}?text=${encodeURIComponent(jaipurData.whatsapp.heroMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-4 border border-[#C6A15B]/30 text-[#FAF8F2] font-semibold uppercase tracking-[0.12em] text-sm rounded-sm hover:bg-[#C6A15B]/10 transition-all duration-300 text-center"
                >
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
