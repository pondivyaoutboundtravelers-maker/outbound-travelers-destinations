import React from 'react'
import type { Metadata } from 'next'
import '../../styles/lakshadweep.css'
import { lakshadweepData } from '@/lib/lakshadweep/data'
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

// Lakshadweep-specific components
import LakshadweepHero from '@/components/lakshadweep/LakshadweepHero'
import LakshadweepQuickSummary from '@/components/lakshadweep/LakshadweepQuickSummary'
import WhyLakshadweep from '@/components/lakshadweep/WhyLakshadweep'
import PermitInfoBlockLakshadweep from '@/components/lakshadweep/PermitInfoBlockLakshadweep'
import HotelTierSelectorLakshadweep from '@/components/lakshadweep/HotelTierSelectorLakshadweep'
import HoneymoonLuxuryBlock from '@/components/lakshadweep/HoneymoonLuxuryBlock'
import TopExperiencesLakshadweep from '@/components/lakshadweep/TopExperiencesLakshadweep'
import PackageCardsLakshadweep from '@/components/lakshadweep/PackageCardsLakshadweep'
import ItineraryAccordionLakshadweep from '@/components/lakshadweep/ItineraryAccordionLakshadweep'
import CostEstimatorLakshadweep from '@/components/lakshadweep/CostEstimatorLakshadweep'
import SeasonCalendarLakshadweep from '@/components/lakshadweep/SeasonCalendarLakshadweep'
import InclusionsExclusionsLakshadweep from '@/components/lakshadweep/InclusionsExclusionsLakshadweep'
import GalleryGridLakshadweep from '@/components/lakshadweep/GalleryGridLakshadweep'
import SEOContentBlockLakshadweep from '@/components/lakshadweep/SEOContentBlockLakshadweep'

// Client controller
import LeadFormModalController from './LeadFormModalController'

export const metadata: Metadata = {
  title: lakshadweepData.meta.title,
  description: lakshadweepData.meta.description,
  alternates: { canonical: lakshadweepData.meta.canonical },
  openGraph: {
    title: lakshadweepData.meta.title,
    description: lakshadweepData.meta.description,
    url: lakshadweepData.meta.canonical,
    images: [
      {
        url: lakshadweepData.meta.ogImage,
        width: 1200,
        height: 630,
        alt: 'Lakshadweep lagoon crystal blue water coral reef aerial view',
      },
    ],
  },
}

export default function LakshadweepPage() {
  const finalCtaWaUrl = buildWhatsAppUrl(lakshadweepData.whatsapp.number, lakshadweepData.whatsapp.finalCtaMessage)
  const stickyCtaWaUrl = buildWhatsAppUrl(lakshadweepData.whatsapp.number, lakshadweepData.whatsapp.stickyMessage)
  const floaterWaUrl = buildWhatsAppUrl(lakshadweepData.whatsapp.number, lakshadweepData.whatsapp.floaterMessage)
  const exitIntentWaUrl = buildWhatsAppUrl(lakshadweepData.whatsapp.number, lakshadweepData.whatsapp.floaterMessage)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.outboundtravelers.com' },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://www.outboundtravelers.com/destinations' },
          { '@type': 'ListItem', position: 3, name: 'Lakshadweep Tour Packages', item: lakshadweepData.meta.canonical },
        ],
      },
      // 2. TouristDestination
      {
        '@type': 'TouristDestination',
        name: 'Lakshadweep',
        geo: { '@type': 'GeoCoordinates', latitude: '10.5667', longitude: '72.6417' },
        touristType: ['Honeymoon', 'Luxury', 'Snorkelling', 'Adventure'],
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
        mainEntity: lakshadweepData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      // 5. Product + Offer × packages
      ...lakshadweepData.packages.map((pkg) => ({
        '@type': 'Product',
        name: pkg.name,
        image: pkg.image,
        description: `${pkg.duration} Lakshadweep package ideal for ${pkg.idealFor}`,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '30000',
          availability: 'https://schema.org/InStock',
        },
      })),
    ],
  }

  return (
    <main data-destination="lakshadweep" className="min-h-screen bg-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <LakshadweepHero />

      <TrustBadgeStrip badges={lakshadweepData.trustBadges} />

      <LakshadweepQuickSummary />

      <WhyLakshadweep />

      <PermitInfoBlockLakshadweep />

      <HotelTierSelectorLakshadweep />

      <HoneymoonLuxuryBlock />

      <TopExperiencesLakshadweep />

      <PackageCardsLakshadweep />

      <ItineraryAccordionLakshadweep />

      <CostEstimatorLakshadweep />

      <SeasonCalendarLakshadweep />

      <PlanningProcess steps={lakshadweepData.process} accentColor="#06B6D4" />

      <InclusionsExclusionsLakshadweep />

      <GalleryGridLakshadweep />

      <TestimonialCarousel testimonials={lakshadweepData.testimonials} />

      <FAQAccordion faqs={lakshadweepData.faqs} title="Lakshadweep Travel FAQs">
        <a
          href={finalCtaWaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold hover:underline mt-4 text-[#06B6D4]"
        >
          Have another question? Ask our island specialists on WhatsApp
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09.928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
          </svg>
        </a>
      </FAQAccordion>

      <SEOContentBlockLakshadweep />

      <RelatedDestinations destinations={lakshadweepData.relatedDestinations} title="Explore More Destinations" />

      <FinalCTA
        accentColor="#06B6D4"
        headline="India's most pristine island is one message away."
        body="Tell us your dates and we'll check island availability, start your permit process, and send you a complete quote — usually within two hours."
        whatsappUrl={finalCtaWaUrl}
        whatsappButtonLabel="WhatsApp our island team"
      />

      <LeadFormModalController />

      <StickyMobileCTA
        accentColor="#06B6D4"
        phoneNumber={lakshadweepData.whatsapp.number}
        whatsappUrl={stickyCtaWaUrl}
      />

      <WhatsAppFloatingButton
        whatsappUrl={floaterWaUrl}
        accentColor="#06B6D4"
      />

      <ExitIntentModal
        whatsappUrl={exitIntentWaUrl}
        title="Planning a Lakshadweep trip?"
        body="Get a free 15-minute call with our island specialist — we'll walk you through permits, islands, and what to expect."
      />
    </main>
  )
}
