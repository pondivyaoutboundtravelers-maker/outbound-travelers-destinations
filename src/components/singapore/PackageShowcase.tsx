'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Flame, Compass, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { singaporeData } from '@/lib/singapore/data'

export default function PackageShowcase() {
  
  const handlePackageEnquire = (pkgName: string, id: string) => {
    // Generate custom message and prefill
    const pkg = singaporeData.packages.find((p) => p.id === id)
    const msg = pkg ? pkg.whatsappMessage : `Hi Outbound Travelers, I am interested in your Singapore ${pkgName} package.`
    
    window.dispatchEvent(
      new CustomEvent('openLeadForm', {
        detail: {
          prefill: {
            tripType: id === 'luxury-escape' ? 'Luxury' : id === 'cruise-combo' ? 'Friends' : 'Family',
            specialReq: `Interested in ${pkgName}.`
          }
        }
      })
    )
  }

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-cream text-dark-text overflow-hidden">
      {/* Background visual details */}
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-coral/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-teal-primary/10 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs uppercase font-bold tracking-widest text-teal-primary font-inter block mb-3">
            Bespoke Portfolios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-dark-text max-w-3xl mx-auto leading-tight">
            Flagship Custom Itineraries
          </h2>
          <p className="text-sm md:text-base text-medium-text font-inter max-w-xl mx-auto mt-4 leading-relaxed">
            Fully customizable pacing, handpicked premium properties, and private transits built around your family's comfort.
          </p>
          <div className="w-12 h-1 bg-coral mx-auto mt-6 rounded-full" />
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Loop Packages */}
          {singaporeData.packages.map((pkg, idx) => {
            const isFeatured = pkg.id === 'family-classic'
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden border transition-all duration-500 ${
                  isFeatured
                    ? 'lg:col-span-6 bg-white border-coral/30 shadow-[0_20px_50px_rgba(255,107,107,0.1)]'
                    : 'lg:col-span-6 bg-white/70 border-teal-primary/10 hover:border-teal-primary/30 shadow-sm'
                }`}
              >
                {/* Visual accent circles inside panels */}
                {isFeatured && (
                  <div className="absolute top-0 right-0 w-48 h-48 bg-coral/10 blur-3xl pointer-events-none -z-10" />
                )}

                {/* Card Header */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-bold font-inter text-teal-primary uppercase tracking-wider block">
                      {pkg.duration}
                    </span>

                    {isFeatured ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-coral/10 text-coral border border-coral/20 text-[10px] font-bold rounded-full font-inter uppercase animate-pulse">
                        <Flame className="w-3 h-3 fill-current" />
                        Most Popular For Families
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-sky-light text-ocean-blue border border-ocean-blue/10 text-[10px] font-bold rounded-full font-inter uppercase">
                        Customizable
                      </span>
                    )}
                  </div>

                  <h3 className={`font-fraunces font-bold leading-tight ${
                    isFeatured ? 'text-3xl sm:text-4xl text-dark-text' : 'text-2xl sm:text-3xl text-dark-text'
                  }`}>
                    {pkg.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-medium-text font-inter font-medium">
                    <span className="text-teal-primary">IDEAL FOR:</span> {pkg.idealFor}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="flex-1 space-y-4 mb-8">
                  <span className="text-[10px] font-bold text-medium-text uppercase tracking-widest block font-inter">
                    Trip Highlights Blueprint
                  </span>
                  
                  <div className="space-y-3">
                    {pkg.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${isFeatured ? 'text-coral' : 'text-teal-primary'}`} />
                        <span className="text-xs sm:text-sm text-dark-text font-inter">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Pricing and CTA */}
                <div className="pt-6 border-t border-teal-primary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-medium-text uppercase tracking-wider font-inter block">Dynamic Land Cost</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-fraunces font-bold text-dark-text">{pkg.price}</span>
                      <span className="text-[10px] text-medium-text font-inter">/ person</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handlePackageEnquire(pkg.name, pkg.id)}
                    className={`py-3.5 px-6 rounded-full text-xs font-bold font-inter tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 ${
                      isFeatured
                        ? 'bg-coral hover:bg-red-500 text-white shadow-[0_8px_25px_rgba(255,107,107,0.3)] border border-coral/20 hover:shadow-[0_8px_30px_rgba(255,107,107,0.4)]'
                        : 'bg-white hover:bg-sky-light text-teal-primary border border-teal-primary/20 hover:border-teal-primary shadow-sm'
                    }`}
                  >
                    Select Plan
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            )
          })}

        </div>

      </div>
    </section>
  )
}
