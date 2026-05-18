import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { RelatedDestination } from '@/lib/shared/types'

interface RelatedDestinationsProps {
  destinations: RelatedDestination[]
  title?: string
}

export default function RelatedDestinations({ destinations, title = 'Explore More Destinations' }: RelatedDestinationsProps) {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-brand-navy font-bold text-center mb-8">
        {title}
      </h2>
      <div className="flex overflow-x-auto gap-6 pb-4 md:grid md:grid-cols-4 md:pb-0 no-scrollbar">
        {destinations.map((dest, idx) => (
          <Link
            key={idx}
            href={dest.href}
            className="group block relative rounded-xl overflow-hidden shadow-sm h-64 min-w-[240px] md:min-w-0 flex-shrink-0 border border-border-soft hover:shadow-md transition-shadow"
          >
            {/* Image parent with relative class */}
            <div className="absolute inset-0 z-0">
              <div className="relative w-full h-full bg-gray-200">
                {/* Fallback image style since local assets aren't in this sandbox */}
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex flex-col justify-end text-white">
              <h3 className="text-lg font-bold font-fraunces mb-1">{dest.name}</h3>
              <span className="text-xs font-semibold text-amber-400 group-hover:underline flex items-center gap-1">
                View packages
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
