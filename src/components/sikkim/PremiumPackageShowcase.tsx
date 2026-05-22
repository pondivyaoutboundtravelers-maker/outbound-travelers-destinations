'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { sikkimData } from '@/lib/sikkim/data'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'

export default function PremiumPackageShowcase() {
  return (
    <section className="py-20 px-4 md:px-8 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0F766E]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#CCFBF1]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#CCFBF1] font-bold tracking-widest uppercase text-xs">Signature Itineraries</span>
          <h2 className="text-3xl md:text-5xl font-fraunces font-bold mt-3 text-white">
            Curated For You
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4">
            These templates serve as our starting point. Every itinerary is fully bespoke, adapted to your pace and preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sikkimData.packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#CCFBF1]/30 transition-colors group flex flex-col"
            >
              <div className="relative h-[250px] w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#0F766E] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                    {pkg.idealFor.split(',')[0]}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <span className="text-slate-400 text-sm font-medium mb-1">{pkg.duration}</span>
                <h3 className="text-2xl font-fraunces font-bold text-white mb-4 leading-tight">
                  {pkg.name}
                </h3>

                <ul className="space-y-2 mb-8 flex-1">
                  {pkg.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2 text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#CCFBF1]" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-white/10 pt-6 mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-400 text-xs uppercase tracking-wider">Starting From</span>
                    <span className="text-white font-bold text-lg">{pkg.price}</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={buildWhatsAppUrl(sikkimData.whatsapp.number, pkg.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-white transition-colors flex items-center justify-center flex-shrink-0"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09 .928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
                      </svg>
                    </a>
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
                      className="flex-1 bg-white text-slate-900 font-bold rounded-xl hover:bg-[#CCFBF1] transition-colors text-sm"
                    >
                      Enquire Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
