import React from 'react'
import type { Metadata } from 'next'
import '@/styles/ladakh.css'
import { ladakhData } from '@/lib/ladakh/data'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'

// Shared Components
import TrustBadgeStrip from '@/components/shared/TrustBadgeStrip'
import PlanningProcess from '@/components/shared/PlanningProcess'
import FAQAccordion from '@/components/shared/FAQAccordion'
import TestimonialCarousel from '@/components/shared/TestimonialCarousel'
import RelatedDestinations from '@/components/shared/RelatedDestinations'
import FinalCTA from '@/components/shared/FinalCTA'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import WhatsAppFloatingButton from '@/components/shared/WhatsAppFloatingButton'
import ExitIntentModal from '@/components/shared/ExitIntentModal'

// Ladakh-Specific Components
import LadakhHero from '@/components/ladakh/LadakhHero'
import LadakhQuickSummary from '@/components/ladakh/LadakhQuickSummary'
import WhyLadakh from '@/components/ladakh/WhyLadakh'
import AltitudeWarningBlock from '@/components/ladakh/AltitudeWarningBlock'
import TopExperiencesLadakh from '@/components/ladakh/TopExperiencesLadakh'
import PackageCardsLadakh from '@/components/ladakh/PackageCardsLadakh'
import ItineraryAccordionLadakh from '@/components/ladakh/ItineraryAccordionLadakh'
import HotelTierSelectorLadakh from '@/components/ladakh/HotelTierSelectorLadakh'
import CostEstimatorLadakh from '@/components/ladakh/CostEstimatorLadakh'
import SeasonCalendarLadakh from '@/components/ladakh/SeasonCalendarLadakh'
import InclusionsExclusionsLadakh from '@/components/ladakh/InclusionsExclusionsLadakh'
import GalleryGridLadakh from '@/components/ladakh/GalleryGridLadakh'
import SEOContentBlockLadakh from '@/components/ladakh/SEOContentBlockLadakh'

// Lead Form Client Controller
import LeadFormModalController from './LeadFormModalController'

// Metadata Configuration
export const metadata: Metadata = {
  title: ladakhData.meta.title,
  description: ladakhData.meta.description,
  alternates: {
    canonical: ladakhData.meta.canonical,
  },
  openGraph: {
    title: ladakhData.meta.title,
    description: ladakhData.meta.description,
    url: ladakhData.meta.canonical,
    images: [
      {
        url: ladakhData.meta.ogImage,
        width: 1200,
        height: 630,
        alt: 'Ladakh Tour Packages — Pangong Tso and Himalayan landscapes',
      },
    ],
  },
}

export default function LadakhPage() {
  // WhatsApp Link Builders
  const finalCtaWaUrl = buildWhatsAppUrl(
    ladakhData.whatsapp.number,
    ladakhData.whatsapp.finalCtaMessage
  )
  const stickyCtaWaUrl = buildWhatsAppUrl(
    ladakhData.whatsapp.number,
    ladakhData.whatsapp.stickyMessage
  )
  const floaterWaUrl = buildWhatsAppUrl(
    ladakhData.whatsapp.number,
    ladakhData.whatsapp.floaterMessage
  )
  const exitIntentWaUrl = buildWhatsAppUrl(
    ladakhData.whatsapp.number,
    ladakhData.whatsapp.floaterMessage
  )

  // Construct JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Breadcrumbs
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.outboundtravelers.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Destinations',
            item: 'https://www.outboundtravelers.com/destinations',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Ladakh Tour Packages',
            item: ladakhData.meta.canonical,
          },
        ],
      },
      // 2. TouristDestination
      {
        '@type': 'TouristDestination',
        name: 'Ladakh',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '34.1526',
          longitude: '77.5771',
        },
        touristType: ['Adventure', 'Honeymoon', 'Family', 'Group', 'Trekking', 'Biking'],
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
      // 4. FAQPage
      {
        '@type': 'FAQPage',
        mainEntity: ladakhData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
      // 5. Products + Offers
      ...ladakhData.packages.map((pkg) => ({
        '@type': 'Product',
        name: pkg.name,
        image: pkg.image,
        description: `${pkg.duration} package ideal for ${pkg.idealFor}`,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '24999.00',
          availability: 'https://schema.org/InStock',
        },
      })),
    ],
  }

  return (
    <div data-destination="ladakh" className="min-h-screen bg-white">
      {/* Schema Block */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* 1. Hero */}
        <LadakhHero />

        {/* 2. Trust Badge Strip */}
        <TrustBadgeStrip badges={ladakhData.trustBadges} />

        {/* 3. Quick Summary */}
        <LadakhQuickSummary />

        {/* 4. Why Ladakh */}
        <WhyLadakh />

        {/* 5. Altitude Warning Block */}
        <AltitudeWarningBlock />

        {/* 6. Top Experiences */}
        <TopExperiencesLadakh />

        {/* 7. Package Cards */}
        <PackageCardsLadakh />

        {/* 8. Itinerary Accordion */}
        <ItineraryAccordionLadakh />

        {/* 9. Hotel Tier Selector */}
        <HotelTierSelectorLadakh />

        {/* 10. Cost Estimator */}
        <CostEstimatorLadakh />

        {/* 11. Season Calendar */}
        <SeasonCalendarLadakh />

        {/* 12. Planning Process */}
        <PlanningProcess steps={ladakhData.process} accentColor="#1F3A8A" />

        {/* 13. Inclusions & Exclusions */}
        <InclusionsExclusionsLadakh />

        {/* 14. Gallery Grid */}
        <GalleryGridLadakh />

        {/* 15. Testimonials */}
        <TestimonialCarousel testimonials={ladakhData.testimonials} />

        {/* 16. FAQ Accordion */}
        <FAQAccordion faqs={ladakhData.faqs} title="Ladakh Travel FAQs">
          <a
            href={finalCtaWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold hover:underline mt-4 text-[#1F3A8A]"
          >
            Have another question? Ask our Ladakh experts on WhatsApp
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09.928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
            </svg>
          </a>
        </FAQAccordion>

        {/* 17. SEO Content Block */}
        <SEOContentBlockLadakh />

        {/* 18. Related Destinations */}
        <RelatedDestinations destinations={ladakhData.relatedDestinations} title="Explore More Destinations" />

        {/* 19. Final CTA */}
        <FinalCTA
          accentColor="#1F3A8A"
          headline="Your Ladakh adventure starts with one message."
          body="Tell us your dates, your group, and how you want to experience Ladakh. We'll build the trip around you — usually within two hours."
          whatsappUrl={finalCtaWaUrl}
          whatsappButtonLabel="WhatsApp our Ladakh team"
        />
      </main>

      {/* Controllers and Floating Elements */}
      <LeadFormModalController />

      <StickyMobileCTA
        accentColor="#1F3A8A"
        phoneNumber={ladakhData.whatsapp.number}
        whatsappUrl={stickyCtaWaUrl}
      />

      <WhatsAppFloatingButton
        whatsappUrl={floaterWaUrl}
        accentColor="#1F3A8A"
      />

      <ExitIntentModal
        whatsappUrl={exitIntentWaUrl}
      />
    </div>
  )
}
