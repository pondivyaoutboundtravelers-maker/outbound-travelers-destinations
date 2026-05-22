import React from 'react'
import type { Metadata } from 'next'
import DubaiHero from '@/components/dubai/DubaiHero'
import TrustBadgeStrip from '@/components/shared/TrustBadgeStrip'
import WhyDubai from '@/components/dubai/WhyDubai'
import DubaiExperiences from '@/components/dubai/DubaiExperiences'
import DubaiPackages from '@/components/dubai/DubaiPackages'
import DubaiItinerary from '@/components/dubai/DubaiItinerary'
import CostEstimator from '@/components/dubai/CostEstimator'
import PlanningProcess from '@/components/shared/PlanningProcess'
import Testimonials from '@/components/shared/TestimonialCarousel'
import FAQAccordion from '@/components/shared/FAQAccordion'
import SEOContentBlock from '@/components/dubai/SEOContentBlock' // if exists, otherwise use shared version
import RelatedDestinations from '@/components/shared/RelatedDestinations'
import FinalCTA from '@/components/shared/FinalCTA'
import LeadFormModalController from '@/components/shared/LeadFormModalController'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import WhatsAppFloatingButton from '@/components/shared/WhatsAppFloatingButton'
import ExitIntentModal from '@/components/shared/ExitIntentModal'
import { dubaiData } from '@/lib/dubai/data'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'

export const metadata: Metadata = {
  title: dubaiData.meta.title,
  description: dubaiData.meta.description,
  alternates: {
    canonical: dubaiData.meta.canonical,
  },
  openGraph: {
    title: dubaiData.meta.title,
    description: dubaiData.meta.description,
    url: dubaiData.meta.canonical,
    images: [
      {
        url: dubaiData.meta.ogImage,
        width: 1200,
        height: 630,
        alt: dubaiData.meta.h1,
      },
    ],
  },
}

export default function Page() {
  // Build WhatsApp URLs
  const stickyCtaWaUrl = buildWhatsAppUrl(dubaiData.whatsapp.number, dubaiData.whatsapp.stickyMessage)
  const floaterWaUrl = buildWhatsAppUrl(dubaiData.whatsapp.number, dubaiData.whatsapp.floaterMessage)
  const exitIntentWaUrl = buildWhatsAppUrl(dubaiData.whatsapp.number, dubaiData.whatsapp.exitIntentMessage || dubaiData.whatsapp.floaterMessage)

  // JSON-LD schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // Breadcrumbs
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.outboundtravelers.com' },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://www.outboundtravelers.com/destinations' },
          { '@type': 'ListItem', position: 3, name: 'Dubai Tour Packages', item: dubaiData.meta.canonical },
        ],
      },
      // Destination
      {
        '@type': 'TouristDestination',
        name: 'Dubai',
        geo: { '@type': 'GeoCoordinates', latitude: '25.2048', longitude: '55.2708' },
        touristType: ['Family', 'Luxury', 'Couples', 'Adventure'],
      },
      // Travel Agency
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
      // FAQ
      {
        '@type': 'FAQPage',
        mainEntity: dubaiData.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      // Products (Packages)
      ...dubaiData.packages.map(pkg => ({
        '@type': 'Product',
        name: pkg.name,
        image: `https://www.outboundtravelers.com${pkg.image}`,
        description: pkg.idealFor,
        offers: { '@type': 'Offer', priceCurrency: 'INR', price: pkg.price.replace(/[^0-9]/g, ''), availability: 'https://schema.org/InStock' },
      })),
    ],
  }

  return (
    <div data-destination="dubai" className="min-h-screen bg-[#050505] text-[#F8F6F1]">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Sections in specified order */}
      <DubaiHero />
      <TrustBadgeStrip badges={dubaiData.trustBadges} />
      <WhyDubai />
      <DubaiExperiences />
      <DubaiPackages />
      <DubaiItinerary />
      <CostEstimator />
      <PlanningProcess steps={dubaiData.process} accentColor={dubaiData.theme.accentColor} />
      <Testimonials testimonials={dubaiData.testimonials} />
      <FAQAccordion faqs={dubaiData.faqs} />
      <SEOContentBlock />
      <RelatedDestinations destinations={dubaiData.relatedDestinations} />
      <FinalCTA />
      <LeadFormModalController />
      <StickyMobileCTA accentColor={dubaiData.theme.accentColor} phoneNumber={dubaiData.whatsapp.number} whatsappUrl={stickyCtaWaUrl} />
      <WhatsAppFloatingButton whatsappUrl={floaterWaUrl} accentColor={dubaiData.theme.accentColor} destinationName="Dubai" />
      <ExitIntentModal whatsappUrl={exitIntentWaUrl} destinationName="Dubai" />
    </div>
  )
}
