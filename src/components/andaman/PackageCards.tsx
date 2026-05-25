"use client";

import React from "react";
import { motion } from "framer-motion";
import { andamanData } from "@/lib/andaman/data";
import { buildWhatsAppUrl } from "@/lib/shared/whatsapp";

export default function PackageCards() {
  const openLeadForm = () => {
    window.dispatchEvent(new CustomEvent("openLeadForm"));
  };

  return (
    <section className="py-24 bg-[#FFFBF5] relative border-y border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#0891B2] font-bold">
            Curated Escapes
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1C1917] mt-2">
            Signature Andaman Blueprints
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {andamanData.packages.map((pkg, index) => {
            const waUrl = buildWhatsAppUrl(andamanData.whatsapp.number, pkg.whatsappMessage);
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col bg-white border border-stone-200 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-500 relative"
              >
                {/* Image Header */}
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.alt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#0C4A6E]/90 backdrop-blur-md text-white px-3 py-1 text-xs font-bold rounded-full">
                    {pkg.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif text-[#1C1917] mb-2">{pkg.name}</h3>
                  <p className="text-sm text-[#57534E] mb-4 line-clamp-2">
                    {pkg.idealFor}
                  </p>
                  
                  <div className="space-y-2 mb-6 flex-grow">
                    {pkg.highlights.slice(0, 3).map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[#44403C]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0891B2] mt-1.5 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer & Actions */}
                  <div className="mt-auto pt-6 border-t border-stone-200 flex items-center justify-between">
                    <div>
                      <span className="block text-xs text-[#78716C] uppercase tracking-wide">Starting</span>
                      <span className="text-[#1C1917] font-bold">{pkg.price}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={openLeadForm}
                        className="w-10 h-10 rounded-full bg-[#0891B2]/10 flex items-center justify-center hover:bg-[#0891B2] transition-colors group/btn"
                        title="Customize Package"
                      >
                        <svg className="w-4 h-4 text-[#0891B2] group-hover/btn:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center hover:bg-[#25D366] transition-colors group/wa"
                        title="Enquire on WhatsApp"
                      >
                        <svg className="w-5 h-5 text-[#25D366] group-hover/wa:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
