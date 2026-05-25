import React from 'react'
import type { Metadata } from 'next'
import '@/styles/shimla.css'
import { shimlaData } from '@/lib/shimla/data'
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

// Shimla-Specific Components
import ShimlaHero from '@/components/shimla/ShimlaHero'
import ShimlaQuickSummary from '@/components/shimla/ShimlaQuickSummary'
import WhyShimla from '@/components/shimla/WhyShimla'
import FamilyHighlightsBlock from '@/components/shimla/FamilyHighlightsBlock'
import TopExperiencesShimla from '@/components/shimla/TopExperiencesShimla'
import PackageCardsShimla from '@/components/shimla/PackageCardsShimla'
import ItineraryAccordionShimla from '@/components/shimla/ItineraryAccordionShimla'
import HotelTierSelectorShimla from '@/components/shimla/HotelTierSelectorShimla'
import CostEstimatorShimla from '@/components/shimla/CostEstimatorShimla'
import SeasonCalendarShimla from '@/components/shimla/SeasonCalendarShimla'
import InclusionsExclusionsShimla from '@/components/shimla/InclusionsExclusionsShimla'
import GalleryGridShimla from '@/components/shimla/GalleryGridShimla'
import SEOContentBlockShimla from '@/components/shimla/SEOContentBlockShimla'

// Lead Form Client Controller
import LeadFormModalController from './LeadFormModalController'

// Metadata Configuration
export const metadata: Metadata = {
  title: shimlaData.meta.title,
  description: shimlaData.meta.description,
  alternates: {
    canonical: shimlaData.meta.canonical,
  },
  openGraph: {
    title: shimlaData.meta.title,
    description: shimlaData.meta.description,
    url: shimlaData.meta.canonical,
    images: [
      {
        url: shimlaData.meta.ogImage,
        width: 1200,
        height: 630,
        alt: 'Shimla Tour Packages — Toy Train and Snowy Ridges in Himachal Pradesh',
      },
    ],
  },
}

export default function ShimlaPage() {
  // WhatsApp Link Builders
  const finalCtaWaUrl = buildWhatsAppUrl(
    shimlaData.whatsapp.number,
    shimlaData.whatsapp.finalCtaMessage
  )
  const stickyCtaWaUrl = buildWhatsAppUrl(
    shimlaData.whatsapp.number,
    shimlaData.whatsapp.stickyMessage
  )
  const floaterWaUrl = buildWhatsAppUrl(
    shimlaData.whatsapp.number,
    shimlaData.whatsapp.floaterMessage
  )
  const exitIntentWaUrl = buildWhatsAppUrl(
    shimlaData.whatsapp.number,
    shimlaData.whatsapp.floaterMessage
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
            name: 'Shimla Tour Packages',
            item: shimlaData.meta.canonical,
          },
        ],
      },
      // 2. TouristDestination
      {
        '@type': 'TouristDestination',
        name: 'Shimla',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '31.1048',
          longitude: '77.1734',
        },
        touristType: ['Family', 'Honeymoon', 'Group', 'Senior'],
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
        mainEntity: shimlaData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
      // 5. Products + Offers
      ...shimlaData.packages.map((pkg) => ({
        '@type': 'Product',
        name: pkg.name,
        image: pkg.image,
        description: `${pkg.duration} package ideal for ${pkg.idealFor}`,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '14999.00',
          availability: 'https://schema.org/InStock',
        },
      })),
    ],
  }

  return (
    <div data-destination="shimla" className="min-h-screen bg-white">
      {/* Schema Block */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* 1. Hero */}
        <ShimlaHero />

        {/* 2. Trust Badge Strip */}
        <TrustBadgeStrip badges={shimlaData.trustBadges} />

        {/* 3. Quick Summary */}
        <ShimlaQuickSummary />

        {/* 4. Why Shimla */}
        <WhyShimla />

        {/* 5. Family Highlights */}
        <FamilyHighlightsBlock />

        {/* 6. Top Experiences */}
        <TopExperiencesShimla />

        {/* 7. Package Cards */}
        <PackageCardsShimla />

        {/* 8. Itinerary Accordion */}
        <ItineraryAccordionShimla />

        {/* 9. Hotel Tier Selector */}
        <HotelTierSelectorShimla />

        {/* 10. Cost Estimator */}
        <CostEstimatorShimla />

        {/* 11. Season Calendar */}
        <SeasonCalendarShimla />

        {/* 12. Planning Process */}
        <PlanningProcess steps={shimlaData.process} accentColor="#2F5233" />

        {/* 13. Inclusions & Exclusions */}
        <InclusionsExclusionsShimla />

        {/* 14. Gallery Grid */}
        <GalleryGridShimla />

        {/* 15. Testimonials */}
        <TestimonialCarousel testimonials={shimlaData.testimonials} />

        {/* 16. FAQ Accordion */}
        <FAQAccordion faqs={shimlaData.faqs} title="Shimla Travel FAQs">
          <a
            href={finalCtaWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold hover:underline mt-4 text-[#2F5233]"
          >
            Have another question? Ask our Shimla experts on WhatsApp
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09.928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
            </svg>
          </a>
        </FAQAccordion>

        {/* 17. SEO Content Block */}
        <SEOContentBlockShimla />

        {/* 18. Related Destinations */}
        <RelatedDestinations destinations={shimlaData.relatedDestinations} title="Explore More Destinations" />

        {/* 19. Final CTA */}
        <FinalCTA
          accentColor="#2F5233"
          headline="Your Shimla story starts with one message."
          body="Tell us your dates, your family, and whether you want snow or sunshine. We'll build the perfect Shimla trip — usually within two hours."
          whatsappUrl={finalCtaWaUrl}
          whatsappButtonLabel="WhatsApp our Shimla team"
        />
      </main>

      {/* Controllers and Floating Elements */}
      <LeadFormModalController />

      <StickyMobileCTA
        accentColor="#2F5233"
        phoneNumber={shimlaData.whatsapp.number}
        whatsappUrl={stickyCtaWaUrl}
      />

      <WhatsAppFloatingButton
        whatsappUrl={floaterWaUrl}
        accentColor="#2F5233"
      />

      <ExitIntentModal
        whatsappUrl={exitIntentWaUrl}
        title="Planning a Shimla trip?"
        body="Get a free 15-minute planning call with our Shimla specialist."
      />
    </div>
  )
}
