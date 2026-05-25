import React from 'react'
import type { Metadata } from 'next'
import '../../../styles/kerala.css'
import { keralaData } from '@/lib/kerala/data'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'

// Shared components
import TrustBadgeStrip from '@/components/shared/TrustBadgeStrip'
import PlanningProcess from '@/components/shared/PlanningProcess'
import FAQAccordion from '@/components/shared/FAQAccordion'
import TestimonialCarousel from '@/components/shared/TestimonialCarousel'
import RelatedDestinations from '@/components/shared/RelatedDestinations'
import FinalCTA from '@/components/shared/FinalCTA'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import WhatsAppFloatingButton from '@/components/shared/WhatsAppFloatingButton'
import ExitIntentModal from '@/components/shared/ExitIntentModal'

// Kerala-specific components
import KeralaHero from '@/components/kerala/KeralaHero'
import KeralaQuickSummary from '@/components/kerala/KeralaQuickSummary'
import WhyKerala from '@/components/kerala/WhyKerala'
import TopExperiencesKerala from '@/components/kerala/TopExperiencesKerala'
import HoneymoonSpecialKerala from '@/components/kerala/HoneymoonSpecialKerala'
import KeralaRegionsModule from '@/components/kerala/KeralaRegionsModule'
import PackageCardsKerala from '@/components/kerala/PackageCardsKerala'
import ItineraryAccordionKerala from '@/components/kerala/ItineraryAccordionKerala'
import HotelTierSelectorKerala from '@/components/kerala/HotelTierSelectorKerala'
import HouseboatModule from '@/components/kerala/HouseboatModule'
import CostEstimatorKerala from '@/components/kerala/CostEstimatorKerala'
import SeasonCalendarKerala from '@/components/kerala/SeasonCalendarKerala'
import AyurvedaAddonModule from '@/components/kerala/AyurvedaAddonModule'
import InclusionsExclusionsKerala from '@/components/kerala/InclusionsExclusionsKerala'
import GalleryKerala from '@/components/kerala/GalleryKerala'
import SEOContentBlockKerala from '@/components/kerala/SEOContentBlockKerala'

// Client controller
import LeadFormModalController from './LeadFormModalController'

export const metadata: Metadata = {
  title: keralaData.meta.title,
  description: keralaData.meta.description,
  alternates: { canonical: keralaData.meta.canonical },
  openGraph: {
    title: keralaData.meta.title,
    description: keralaData.meta.description,
    url: keralaData.meta.canonical,
    images: [
      {
        url: keralaData.meta.ogImage,
        width: 1200,
        height: 630,
        alt: 'Kerala houseboat backwaters Alleppey Vembanad palm trees',
      },
    ],
  },
}

export default function KeralaPage() {
  const finalCtaWaUrl = buildWhatsAppUrl(keralaData.whatsapp.number, keralaData.whatsapp.finalCtaMessage)
  const stickyCtaWaUrl = buildWhatsAppUrl(keralaData.whatsapp.number, keralaData.whatsapp.stickyMessage)
  const floaterWaUrl = buildWhatsAppUrl(keralaData.whatsapp.number, keralaData.whatsapp.floaterMessage)
  const exitIntentWaUrl = buildWhatsAppUrl(keralaData.whatsapp.number, keralaData.whatsapp.floaterMessage)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.outboundtravelers.com' },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://www.outboundtravelers.com/destinations' },
          { '@type': 'ListItem', position: 3, name: 'Kerala Tour Packages', item: keralaData.meta.canonical },
        ],
      },
      // 2. TouristDestination
      {
        '@type': 'TouristDestination',
        name: 'Kerala',
        geo: { '@type': 'GeoCoordinates', latitude: '10.8505', longitude: '76.2711' },
        touristType: ['Honeymoon', 'Family', 'Wellness', 'Heritage', 'Beach'],
      },
      // 3. TravelAgency
      {
        '@type': 'TravelAgency',
        name: 'Outbound Travelers',
        image: 'https://www.outboundtravelers.com/logo.png',
        telephone: '+919876543210',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Nagercoil',
          addressLocality: 'Kanyakumari',
          addressRegion: 'Tamil Nadu',
          postalCode: '629001',
          addressCountry: 'IN',
        },
      },
      // 4. FAQPage — all 12 questions
      {
        '@type': 'FAQPage',
        mainEntity: keralaData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      // 5. Product + Offer × 6 packages
      ...keralaData.packages.map((pkg) => ({
        '@type': 'Product',
        name: pkg.name,
        image: pkg.image,
        description: `${pkg.duration} Kerala package ideal for ${pkg.idealFor}`,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '12500',
          availability: 'https://schema.org/InStock',
        },
      })),
    ],
  }

  // Map trust chips to TrustBadge format
  const trustBadgeIcons = ['trips', 'custom', 'verified', 'support']
  const trustBadges = keralaData.hero.trustChips.map((chip, idx) => ({
    icon: trustBadgeIcons[idx % trustBadgeIcons.length],
    label: chip,
  }))

  return (
    <main data-destination="kerala" className="min-h-screen bg-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <KeralaHero />

      {/* 2. Trust Badge Strip */}
      <TrustBadgeStrip badges={trustBadges} />

      {/* 3. Quick Summary */}
      <KeralaQuickSummary />

      {/* 4. Why Kerala */}
      <WhyKerala />

      {/* 5. Top Experiences */}
      <TopExperiencesKerala />

      {/* 6. Honeymoon Special — Kerala-unique */}
      <HoneymoonSpecialKerala />

      {/* 7. Regions Module — Kerala-unique */}
      <KeralaRegionsModule />

      {/* 8. Package Cards */}
      <PackageCardsKerala />

      {/* 9. Itinerary Accordion */}
      <ItineraryAccordionKerala />

      {/* 10. Hotel Tier Selector */}
      <HotelTierSelectorKerala />

      {/* 11. Houseboat Module — Kerala-unique */}
      <HouseboatModule />

      {/* 12. Cost Estimator */}
      <CostEstimatorKerala />

      {/* 13. Season Calendar */}
      <SeasonCalendarKerala />

      {/* 14. Planning Process */}
      <PlanningProcess steps={keralaData.process} accentColor="#047857" />

      {/* 15. Ayurveda Addon — Kerala-unique */}
      <AyurvedaAddonModule />

      {/* 16. Inclusions & Exclusions */}
      <InclusionsExclusionsKerala />

      {/* 17. Gallery */}
      <GalleryKerala />

      {/* 18. Testimonials */}
      <TestimonialCarousel testimonials={keralaData.testimonials} />

      {/* 19. FAQ Accordion */}
      <FAQAccordion faqs={keralaData.faqs} title="Kerala Travel FAQs">
        <a
          href={finalCtaWaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold hover:underline mt-4 text-[#047857]"
        >
          Have another question? Ask our Kerala specialists on WhatsApp
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09.928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
          </svg>
        </a>
      </FAQAccordion>

      {/* 20. SEO Content Block */}
      <SEOContentBlockKerala />

      {/* 21. Related Destinations */}
      <RelatedDestinations destinations={keralaData.relatedDestinations} title="Explore More Destinations" />

      {/* 22. Final CTA */}
      <FinalCTA
        accentColor="#047857"
        headline="Your Kerala trip begins with one message."
        body="Tell us your travel month, group, and whether this is honeymoon, family, or wellness. We'll build your houseboat night and circuit around you."
        whatsappUrl={finalCtaWaUrl}
        whatsappButtonLabel="WhatsApp our Kerala team"
      />

      {/* 23. Lead Form Modal */}
      <LeadFormModalController />

      {/* 24. Sticky Mobile CTA */}
      <StickyMobileCTA
        accentColor="#047857"
        phoneNumber={keralaData.whatsapp.number}
        whatsappUrl={stickyCtaWaUrl}
      />

      {/* 25. WhatsApp Floating Button */}
      <WhatsAppFloatingButton
        whatsappUrl={floaterWaUrl}
        accentColor="#047857"
      />

      {/* 26. Exit Intent Modal */}
      <ExitIntentModal
        whatsappUrl={exitIntentWaUrl}
        title="Planning a Kerala trip?"
        body="Get a free 15-minute planning call with our Kerala specialist. Houseboat options, region mix, Ayurveda add-ons — we'll cover it all."
      />
    </main>
  )
}
