"use client";

import React, { useState, useEffect } from "react";
import { Calculator, HelpCircle, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/shared/whatsapp";
import { langkawiData } from "@/data/langkawi";

export default function CostEstimator() {
  const [nights, setNights] = useState<number>(5);
  const [travelers, setTravelers] = useState<number>(2);
  const [hotelTier, setHotelTier] = useState<string>("5-star"); // "4-star", "5-star", "overwater"
  const [excursions, setExcursions] = useState<string>("standard"); // "basic", "standard", "deluxe"
  const [totalCost, setTotalCost] = useState<number>(0);

  // Simple dynamic formula
  useEffect(() => {
    let hotelRate = 12000; // 4-star comfort rate
    if (hotelTier === "5-star") hotelRate = 22000;
    if (hotelTier === "overwater") hotelRate = 38000;

    let excursionRate = 4500; // basic
    if (excursions === "standard") excursionRate = 9500;
    if (excursions === "deluxe") excursionRate = 17500;

    // Total Cost = (HotelRate * Nights + ExcursionRate * Travelers) + Base Flight Estimate per traveler
    const flightsEstimate = 25000 * travelers;
    const baseAccommodation = hotelRate * nights;
    const activities = excursionRate * travelers;

    setTotalCost(baseAccommodation + activities + flightsEstimate);
  }, [nights, travelers, hotelTier, excursions]);

  const triggerForm = () => {
    window.dispatchEvent(new CustomEvent("openLeadForm"));
  };

  const getWaMessage = () => {
    return `Hi Outbound Travelers, I calculated my estimated Langkawi trip cost. Stays: ${hotelTier}, Nights: ${nights}, Travelers: ${travelers}, Excursions: ${excursions}. Total Estimate: ₹${totalCost.toLocaleString("en-IN")}. Please share custom itineraries and exact prices!`;
  };

  const waUrl = buildWhatsAppUrl(langkawiData.whatsapp.number, getWaMessage());

  return (
    <section className="py-24 bg-neutral-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Heading and info */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500 flex items-center gap-1.5">
              <Calculator className="h-4 w-4" />
              <span>Live Pricing Engine</span>
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Estimate Your Langkawi <span className="text-amber-500 italic font-normal">Trip Cost</span>
            </h2>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              Use our interactive calculator to estimate your packages based on stays, flights, and activities. Adjust parameters in real-time to match your target budget.
            </p>
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 flex items-start gap-4">
              <HelpCircle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Important Note</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Estimates include return economy flights from South India (average ₹25,000/person), airport transfers, resort lodging, and chosen sightseeing packages.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Live Form Widget */}
          <div className="bg-neutral-950 border border-white/5 rounded-3xl p-8 space-y-8 shadow-2xl relative overflow-hidden">
            
            {/* Nights slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-baseline text-xs font-semibold">
                <label className="text-neutral-400 uppercase tracking-wider">Number of Nights</label>
                <span className="text-amber-400 text-base font-bold">{nights} Nights</span>
              </div>
              <input
                type="range"
                min={3}
                max={10}
                value={nights}
                onChange={(e) => setNights(Number(e.target.value))}
                className="w-full accent-amber-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Travelers slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-baseline text-xs font-semibold">
                <label className="text-neutral-400 uppercase tracking-wider">Number of Travelers</label>
                <span className="text-amber-400 text-base font-bold">{travelers} Travelers</span>
              </div>
              <input
                type="range"
                min={1}
                max={6}
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                className="w-full accent-amber-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Hotel Tier Selection */}
            <div className="space-y-3">
              <label className="text-neutral-400 text-xs font-semibold uppercase tracking-wider block">Resort Stay Tier</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "4-star", label: "4★ Premium" },
                  { value: "5-star", label: "5★ Luxury" },
                  { value: "overwater", label: "Overwater Villa" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setHotelTier(option.value)}
                    className={`py-3 rounded-2xl text-xs font-bold transition-all border ${
                      hotelTier === option.value
                        ? "bg-amber-500 border-amber-600 text-black shadow-lg"
                        : "bg-white/[0.02] border-white/5 text-neutral-300 hover:bg-white/[0.04]"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Excursion style */}
            <div className="space-y-3">
              <label className="text-neutral-400 text-xs font-semibold uppercase tracking-wider block">Excursions Included</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "basic", label: "Essential" },
                  { value: "standard", label: "Active Explore" },
                  { value: "deluxe", label: "Romantic VIP" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setExcursions(option.value)}
                    className={`py-3 rounded-2xl text-xs font-bold transition-all border ${
                      excursions === option.value
                        ? "bg-amber-500 border-amber-600 text-black shadow-lg"
                        : "bg-white/[0.02] border-white/5 text-neutral-300 hover:bg-white/[0.04]"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Cost Results */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">Estimated Total Cost</span>
                <span className="text-2xl font-black text-amber-400">
                  ₹{totalCost.toLocaleString("en-IN")}*
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={triggerForm}
                  className="py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors font-bold text-xs uppercase tracking-wider text-center"
                >
                  Send Inquiry Form
                </button>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 rounded-full border border-amber-500/30 hover:bg-amber-500/10 text-amber-400 transition-all font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="h-4 w-4 fill-current" />
                  <span>Share details</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
