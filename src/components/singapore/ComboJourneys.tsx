'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plane, Ship, Car, ArrowRight, Sparkles, MapPin, CheckCircle2 } from 'lucide-react'

export default function ComboJourneys() {
  const [activeRoute, setActiveRoute] = useState<string>('malaysia')

  const routesData = [
    {
      id: 'malaysia',
      title: 'Singapore → Malaysia',
      badge: 'Twin-City Heritage',
      description: 'The ultimate overland or air dual-nation escape. Explore the hyper-modern cityscape of Singapore before crossing borders in private chauffeur-driven comfort to explore historic Malacca, vibrant Kuala Lumpur, and pristine beaches of Langkawi.',
      transit: 'Private overland luxury vehicle or 55-min flight',
      idealFor: 'Twin-country first timers & heritage lovers',
      stayIdea: '4N Singapore + 3N Kuala Lumpur & Genting',
      highlights: [
        'Private hassle-free border chauffeur',
        'Batu Caves & Petronas Twin Towers',
        'Genting Highlands cable car ride',
        'Direct flights back home from KL'
      ],
      icon: <Car className="w-5 h-5 text-teal-primary" />,
      glowColor: 'hover:border-teal-primary/30 shadow-[0_8px_32px_rgba(13,148,136,0.1)]'
    },
    {
      id: 'cruise',
      title: 'Singapore → Cruise',
      badge: 'Sea & Sky Luxury',
      description: 'Step directly from the futurism of Marina Bay onto a five-star floating ocean palace. Sail away on Royal Caribbean\'s Spectrum of the Seas or Resorts World Cruises for a premium cruising adventure to Penang or Phuket, packed with Broadway shows and unlimited fine dining.',
      transit: 'Seamless luxury terminal boarding at Marina South',
      idealFor: 'Multi-generational families & leisure seekers',
      stayIdea: '3N Singapore Hotel + 3N Ocean Balcony Cabin Cruise',
      highlights: [
        'Ocean-view Balcony cabin guaranteed',
        'All global onboard dining included',
        'Broadway plays, surf simulator, and rock climbing',
        'Full assistance at Singapore cruise terminal'
      ],
      icon: <Ship className="w-5 h-5 text-ocean-blue" />,
      glowColor: 'hover:border-ocean-blue/30 shadow-[0_8px_32px_rgba(3,105,161,0.1)]'
    },
    {
      id: 'bali',
      title: 'Singapore → Bali',
      badge: 'Metropolis & Sanctuary',
      description: 'The ultimate contrast between urban innovation and mystical tropical bliss. Balance Singapore\'s fast-paced, high-tech gardens with the silent emerald rice valleys of Ubud, custom beach clubs of Seminyak, and cliff-side temples of Uluwatu.',
      transit: 'Direct 2.5-hour premium flight connection',
      idealFor: 'Honeymoon couples & luxury seekers',
      stayIdea: '3N Singapore City + 4N Bali Private Pool Villa',
      highlights: [
        'Ubud private pool villa stays',
        'Personal chauffeur & Balinese guide',
        'Sunset cliff dinners in Uluwatu',
        'Seamless flight connections on Singapore Air'
      ],
      icon: <Plane className="w-5 h-5 text-coral" />,
      glowColor: 'hover:border-coral/30 shadow-[0_8px_32px_rgba(255,107,107,0.1)]'
    }
  ]

  const activeData = routesData.find((r) => r.id === activeRoute) || routesData[0]

  const handleRouteCta = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm', {
      detail: { prefill: { specialReq: `I am interested in the ${activeData.title} combo journey option.` } }
    }))
  }

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-sky-light text-dark-text overflow-hidden">
      {/* Background neon light layers */}
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-teal-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-coral/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs uppercase font-bold tracking-widest text-teal-primary font-inter block mb-3">
            Multi-Center Masterpieces
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-dark-text max-w-3xl mx-auto leading-tight">
            Cinematic Combo Journeys
          </h2>
          <p className="text-sm md:text-base text-medium-text font-inter max-w-xl mx-auto mt-4 leading-relaxed">
            Why settle for one? Integrate Singapore's high-tech playgrounds with nearby tropical islands, ancient towns, or legendary sea cruises in one single, seamless booking.
          </p>
          <div className="w-12 h-1 bg-coral mx-auto mt-6 rounded-full" />
        </div>

        {/* Route Selector Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Columns: Horizontal route map connectors */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <h3 className="text-xs uppercase tracking-widest font-bold font-inter text-medium-text mb-2">
              Select Combo Corridor
            </h3>
            
            <div className="flex flex-col gap-3">
              {routesData.map((route) => {
                const isActive = activeRoute === route.id
                return (
                  <button
                    key={route.id}
                    onClick={() => setActiveRoute(route.id)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                      isActive
                        ? 'bg-white border-teal-primary/30 shadow-[0_8px_20px_rgba(13,148,136,0.1)]'
                        : 'bg-white/50 border-teal-primary/5 hover:bg-white hover:border-teal-primary/20 shadow-sm'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-teal-primary" />
                    )}

                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${
                        isActive ? 'bg-teal-light border-teal-primary/20 text-teal-primary' : 'bg-white border-teal-primary/10 text-medium-text'
                      }`}>
                        {route.icon}
                      </div>

                      <div className="flex-1">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-medium-text font-inter block mb-1">
                          {route.badge}
                        </span>
                        <h4 className={`text-base font-bold font-inter ${isActive ? 'text-dark-text' : 'text-medium-text'}`}>
                          {route.title}
                        </h4>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Technical telemetries block */}
            <div className="hidden lg:block backdrop-blur-md bg-white border border-teal-primary/10 rounded-2xl p-5 font-inter text-[11px] text-medium-text space-y-2.5 shadow-sm">
              <div className="flex justify-between">
                <span>TRANSIT PROTOCOL:</span>
                <span className="font-bold text-teal-primary">SEAMLESS CONCIERGE</span>
              </div>
              <div className="flex justify-between">
                <span>VISA ARRANGEMENT:</span>
                <span className="font-bold text-teal-primary">DUAL APPLICANT AUTO</span>
              </div>
              <div className="flex justify-between">
                <span>BAGGAGE TRANSFER:</span>
                <span className="font-bold text-teal-primary">PORTER TO CABIN/CAR</span>
              </div>
            </div>
          </div>

          {/* Right Columns: Dynamic visualization and highlights panel */}
          <div className="lg:col-span-8">
            <div className="relative h-full backdrop-blur-xl bg-white border border-teal-primary/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(13,148,136,0.08)] flex flex-col justify-between overflow-hidden">
              
              {/* Abstract decorative route vector */}
              <div className="absolute top-10 right-10 w-24 h-24 pointer-events-none opacity-5">
                {activeRoute === 'malaysia' && <Car className="w-full h-full text-teal-primary" />}
                {activeRoute === 'cruise' && <Ship className="w-full h-full text-teal-primary" />}
                {activeRoute === 'bali' && <Plane className="w-full h-full text-teal-primary" />}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRoute}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-8 flex-1 flex flex-col justify-between relative z-10"
                >
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-primary/10 text-teal-primary border border-teal-primary/20 text-xs font-bold rounded-full font-inter uppercase">
                      Corridor Blueprint
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-fraunces font-bold text-dark-text flex items-center gap-3">
                      Singapore
                      <ArrowRight className="w-6 h-6 text-coral animate-pulse" />
                      {activeRoute === 'malaysia' && 'Malaysia'}
                      {activeRoute === 'cruise' && 'Cruise'}
                      {activeRoute === 'bali' && 'Bali'}
                    </h3>
                    
                    <p className="text-medium-text font-inter text-sm sm:text-base leading-relaxed">
                      {activeData.description}
                    </p>
                  </div>

                  {/* Route Logistics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-sky-light/50 border border-teal-primary/5 rounded-2xl p-6">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-medium-text uppercase font-inter block">Transit Method</span>
                      <span className="text-sm font-bold text-teal-bright font-inter">{activeData.transit}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-medium-text uppercase font-inter block">Recommended stay pacing</span>
                      <span className="text-sm font-bold text-coral font-inter">{activeData.stayIdea}</span>
                    </div>
                  </div>

                  {/* Key Highlights list */}
                  <div className="space-y-4">
                    <span className="text-[11px] font-bold text-medium-text uppercase tracking-wider font-inter block">Included luxury arrangements:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {activeData.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-teal-primary shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-dark-text font-inter font-medium">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Action trigger footer */}
              <div className="pt-8 mt-8 border-t border-teal-primary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                <span className="text-xs text-medium-text font-inter">
                  Full border documentation and custom flights integrated by our travel team.
                </span>
                
                <button
                  onClick={handleRouteCta}
                  className="py-3 px-6 bg-coral hover:bg-red-500 text-white rounded-full text-xs font-bold font-inter tracking-wider uppercase transition-all shadow-[0_8px_20px_rgba(255,107,107,0.3)] hover:shadow-[0_8px_25px_rgba(255,107,107,0.4)]"
                >
                  Configure This Route
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
