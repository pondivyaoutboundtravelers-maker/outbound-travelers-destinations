'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, MapPin, Eye, Compass, Hourglass, Landmark, Ship } from 'lucide-react'
import { singaporeData } from '@/lib/singapore/data'

export default function AttractionsGrid() {
  
  // Custom icons and metadata for bento sizing
  const bentoItems = [
    {
      id: 'gardens',
      name: 'Gardens by the Bay',
      span: 'lg:col-span-8 md:col-span-6',
      icon: <Sparkles className="w-5 h-5 text-emerald" />,
      tag: 'Futuristic Flora',
      desc: 'Stroll under towering, vertical gardens illuminated by solar power, and enter the misty double domes.',
      bgGradient: 'from-emerald/20 via-emerald/5 to-transparent',
      glow: 'shadow-[0_8px_32px_rgba(16,185,129,0.15)] hover:border-emerald/40 hover:shadow-[0_15px_40px_rgba(16,185,129,0.25)]',
      badgeColor: 'bg-emerald/10 text-emerald border-emerald/20',
      vibe: 'Glow & Flora'
    },
    {
      id: 'mbs',
      name: 'Marina Bay Sands',
      span: 'lg:col-span-4 md:col-span-6',
      icon: <Landmark className="w-5 h-5 text-coral" />,
      tag: 'Iconic Skypark',
      desc: 'Float 57 storeys above Singapore in the legendary, gravity-defying rooftop infinity pool.',
      bgGradient: 'from-coral/20 via-coral/5 to-transparent',
      glow: 'shadow-[0_8px_32px_rgba(255,107,107,0.15)] hover:border-coral/40 hover:shadow-[0_15px_40px_rgba(255,107,107,0.25)]',
      badgeColor: 'bg-coral/10 text-coral border-coral/20',
      vibe: 'Luxury Skyway'
    },
    {
      id: 'uss',
      name: 'Universal Studios',
      span: 'lg:col-span-4 md:col-span-6',
      icon: <Compass className="w-5 h-5 text-sunny-yellow" />,
      tag: 'Blockbuster Thrills',
      desc: 'Ride the movies on Sentosa Island. Complete family adventure from sci-fi to ancient realms.',
      bgGradient: 'from-sunny-yellow/20 via-sunny-yellow/5 to-transparent',
      glow: 'shadow-[0_8px_32px_rgba(255,184,77,0.15)] hover:border-sunny-yellow/40 hover:shadow-[0_15px_40px_rgba(255,184,77,0.25)]',
      badgeColor: 'bg-sunny-yellow/15 text-soft-gold border-sunny-yellow/30',
      vibe: 'Theme Park VIP'
    },
    {
      id: 'night-safari',
      name: 'Night Safari',
      span: 'lg:col-span-8 md:col-span-6',
      icon: <Hourglass className="w-5 h-5 text-teal-bright" />,
      tag: 'Nocturnal Wilderness',
      desc: 'Board the open-air tram into a dense, nocturnal tropical rainforest filled with wild predators.',
      bgGradient: 'from-teal-bright/20 via-teal-bright/5 to-transparent',
      glow: 'shadow-[0_8px_32px_rgba(6,182,212,0.15)] hover:border-teal-bright/40 hover:shadow-[0_15px_40px_rgba(6,182,212,0.25)]',
      badgeColor: 'bg-teal-bright/10 text-teal-primary border-teal-bright/20',
      vibe: 'Midnight Tram'
    },
    {
      id: 'jewel',
      name: 'Jewel Changi',
      span: 'lg:col-span-7 md:col-span-6',
      icon: <Sparkles className="w-5 h-5 text-teal-primary" />,
      tag: 'Rain Vortex Canopy',
      desc: 'A magnificent seven-storey waterfall indoor forest park inside the world\'s best airport terminal.',
      bgGradient: 'from-teal-primary/20 via-teal-primary/5 to-transparent',
      glow: 'shadow-[0_8px_32px_rgba(13,148,136,0.15)] hover:border-teal-primary/40 hover:shadow-[0_15px_40px_rgba(13,148,136,0.25)]',
      badgeColor: 'bg-teal-primary/10 text-teal-primary border-teal-primary/20',
      vibe: '7-Storey Waterfall'
    },
    {
      id: 'sentosa',
      name: 'Sentosa Island',
      span: 'lg:col-span-5 md:col-span-6',
      icon: <Ship className="w-5 h-5 text-ocean-blue" />,
      tag: 'Tropical Sunsets',
      desc: 'Sandy beaches, exclusive beach clubs, luxury hotels, and return panoramic cable car rides.',
      bgGradient: 'from-ocean-blue/20 via-ocean-blue/5 to-transparent',
      glow: 'shadow-[0_8px_32px_rgba(3,105,161,0.15)] hover:border-ocean-blue/40 hover:shadow-[0_15px_40px_rgba(3,105,161,0.25)]',
      badgeColor: 'bg-ocean-blue/10 text-ocean-blue border-ocean-blue/20',
      vibe: 'Private Beach Bays'
    }
  ]

  const handleBentoCta = (name: string) => {
    window.dispatchEvent(new CustomEvent('openLeadForm', {
      detail: { prefill: { specialReq: `I am interested in adding ${name} to my Singapore trip.` } }
    }))
  }

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-cream text-dark-text overflow-hidden">
      {/* Background visual layers */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] rounded-full bg-teal-primary/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[350px] h-[350px] rounded-full bg-coral/10 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs uppercase font-bold tracking-widest text-teal-primary font-inter block mb-3">
            Attractions Experience Grid
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-dark-text max-w-2xl mx-auto leading-tight">
            Curated Architectural & Tropical Wonders
          </h2>
          <p className="text-sm md:text-base text-medium-text font-inter max-w-xl mx-auto mt-4 leading-relaxed">
            Outbound Travelers structures your entries dynamically. Skip the lines and experience Singapore's flagship wonders with full concierge luxury support.
          </p>
          <div className="w-12 h-1 bg-teal-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {bentoItems.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, type: 'spring', stiffness: 50 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`${item.span} relative group backdrop-blur-xl bg-white border border-teal-primary/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 ${item.glow}`}
              >
                {/* Asymmetric layered color glow backdrop inside panel */}
                <div className={`absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-tr ${item.bgGradient} blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none -z-10`} />
                
                {/* Panel Header */}
                <div className="flex items-start justify-between gap-4 mb-8 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white border border-teal-primary/10 shadow-sm flex items-center justify-center">
                    {item.icon}
                  </div>
                  
                  <div className={`px-3 py-1.5 rounded-full border text-[10px] font-bold font-inter tracking-wider uppercase shadow-sm ${item.badgeColor}`}>
                    {item.vibe}
                  </div>
                </div>

                {/* Content Block */}
                <div className="space-y-4 relative z-10">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-teal-primary font-inter flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-coral" />
                    {item.tag}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold font-fraunces text-dark-text leading-tight group-hover:text-teal-primary transition-colors">
                    {item.name}
                  </h3>
                  
                  <p className="text-sm text-medium-text font-inter leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>

                {/* Action CTA */}
                <div className="pt-6 mt-6 border-t border-teal-primary/10 flex items-center justify-between gap-4 relative z-10">
                  <button
                    onClick={() => handleBentoCta(item.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-primary hover:text-teal-accent tracking-wider uppercase font-inter transition-colors"
                  >
                    Add to Itinerary
                    <Eye className="w-4 h-4" />
                  </button>
                  
                  <span className="text-[10px] font-bold font-inter text-slate-400 tracking-widest uppercase">
                    Vetted Ticket
                  </span>
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
