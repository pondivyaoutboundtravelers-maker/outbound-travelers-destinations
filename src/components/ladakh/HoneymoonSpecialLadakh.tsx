import React from 'react'
import Image from 'next/image'

export default function HoneymoonSpecialLadakh() {
  const highlights = [
    'Private stargazing cabin at Pangong Tso',
    'Luxury dome camp stay with room heaters',
    'Romantic riverside lunch in Nubra Valley',
    'Acclimatization day cozy breakfast in bed',
  ]

  return (
    <section id="honeymoon" className="py-12 md:py-16 px-4 md:px-8" style={{ backgroundColor: 'var(--accent-destination-soft)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Left Side: Image */}
        <div className="w-full md:w-[45%] relative h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-md bg-gray-200">
          <Image
            src="https://picsum.photos/seed/ladakh-honeymoon-feat/800/1000"
            alt="Honeymoon couple enjoying scenic mountain lake views in Ladakh"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            onError={(e) => {
              e.currentTarget.srcset = "";
              e.currentTarget.src = "/api/placeholder?text=Ladakh+Honeymoon";
            }}
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-[55%] flex flex-col items-start text-left">
          <span 
            className="inline-block text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded mb-3 tracking-wider"
            style={{ backgroundColor: 'var(--accent-destination)' }}
          >
            Honeymoon Special
          </span>
          <h2 className="text-3xl md:text-4xl font-fraunces font-bold text-brand-navy mb-4 leading-tight">
            Ladakh for the Two of You
          </h2>
          <p className="text-sm md:text-base text-muted leading-relaxed mb-6 font-inter">
            Imagine stargazing together outside a premium lakefront cottage by Pangong Tso's deep blue waters. Cozying up in Nubra Valley's luxury dome camps under warm blankets with private space. Enjoying a romantic picnic lunch by a glacier river. We design every detail so your high-altitude love story is safe, warm, and breathtaking.
          </p>

          {/* Bullet points with heart icon */}
          <ul className="space-y-3 mb-8 w-full">
            {highlights.map((h, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm md:text-base text-brand-navy font-semibold">
                <span className="text-red-500 flex-shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </span>
                {h}
              </li>
            ))}
          </ul>

          <a
            href="#bali-packages" // Or appropriate id
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 text-white transition-colors font-bold rounded-lg shadow-sm text-sm"
            style={{ backgroundColor: 'var(--accent-destination)' }}
          >
            See honeymoon packages
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
