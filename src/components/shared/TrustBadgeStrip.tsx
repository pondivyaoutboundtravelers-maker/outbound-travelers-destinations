import React from 'react'
import type { TrustBadge } from '@/lib/shared/types'

const Icons: Record<string, React.ReactNode> = {
  trips: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12l-10-10L2 12l10 10 10-10z" /><path d="M12 2v20" /><path d="M2 12h20" /></svg>,
  custom: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" /></svg>,
  verified: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>,
  support: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0118 0v6" /><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" /></svg>,
  quote: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  member: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>,
}

export default function TrustBadgeStrip({ badges }: { badges: TrustBadge[] }) {
  return (
    <section className="bg-cream py-6">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex flex-row md:justify-center items-center gap-8 min-w-max md:min-w-0 md:flex-wrap">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-6 h-6 text-kashmir-accent flex-shrink-0">
                {Icons[badge.icon] || <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="12"/></svg>}
              </div>
              <span className="text-sm font-semibold text-brand-navy leading-tight whitespace-pre-line text-left">
                {badge.label.replace(' ', '\n')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
