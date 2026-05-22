'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const regions = [
  {
    id: 'gangtok',
    name: 'Gangtok',
    tagline: 'Urban Mountain Luxury',
    description: 'The vibrant capital perched on a ridge. Experience ancient monasteries like Rumtek, explore the bustling MG Marg, and enjoy premium boutique stays with panoramic valley views.',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80',
    highlights: ['Rumtek Monastery', 'MG Marg', 'Tsomgo Lake Excursions']
  },
  {
    id: 'pelling',
    name: 'Pelling',
    tagline: 'Panoramic Serenity',
    description: 'A quiet town offering the closest and most spectacular views of Mount Kanchenjunga. Walk the glass skywalk, visit ancient ruins, and retreat to luxury mountain lodges.',
    image: 'https://images.unsplash.com/photo-1589808381861-12c5b967d6cd?auto=format&fit=crop&q=80',
    highlights: ['Kanchenjunga Views', 'Pelling Skywalk', 'Rabdentse Ruins']
  },
  {
    id: 'north-sikkim',
    name: 'North Sikkim',
    tagline: 'High-Altitude Adventure',
    description: 'For the bold traveler. Pristine frozen lakes at 17,000 ft, hot springs, and sweeping valleys of flowers. We provide premium SUVs to navigate the rugged terrain comfortably.',
    image: 'https://images.unsplash.com/photo-1598115682737-142dbd877e56?auto=format&fit=crop&q=80',
    highlights: ['Gurudongmar Lake', 'Yumthang Valley', 'Lachen & Lachung']
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    tagline: 'Colonial Elegance',
    description: 'Just across the border in West Bengal, this Queen of the Hills offers world-class tea estates, the heritage Toy Train, and sweeping sunrise views from Tiger Hill.',
    image: 'https://images.unsplash.com/photo-1596704017329-87a27072eaee?auto=format&fit=crop&q=80',
    highlights: ['Tiger Hill Sunrise', 'Tea Estate Stays', 'Himalayan Railway']
  }
]

export default function InteractiveRegionSelector() {
  const [activeTab, setActiveTab] = useState(regions[0].id)
  
  const activeRegion = regions.find(r => r.id === activeTab) || regions[0]

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-fraunces font-bold text-slate-900 mb-4">
            Four Unique Landscapes
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our itineraries blend these distinct regions into a seamless journey. Select a region to explore what makes it special.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveTab(region.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === region.id 
                ? 'bg-[#0F766E] text-white shadow-lg shadow-[#0F766E]/30 scale-105' 
                : 'bg-white text-slate-500 hover:bg-[#CCFBF1]/50 hover:text-[#0F766E] border border-slate-200'
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRegion.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row h-full min-h-[500px]"
            >
              {/* Image Side */}
              <div className="relative w-full md:w-1/2 h-[300px] md:h-auto">
                <Image
                  src={activeRegion.image}
                  alt={activeRegion.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
                <span className="text-[#0F766E] font-bold tracking-widest uppercase text-xs mb-2">
                  {activeRegion.tagline}
                </span>
                <h3 className="text-3xl md:text-4xl font-fraunces font-bold text-slate-900 mb-6">
                  {activeRegion.name}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {activeRegion.description}
                </p>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Key Highlights</h4>
                  <ul className="space-y-3">
                    {activeRegion.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
