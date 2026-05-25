import React from 'react'
import { Metadata } from 'next'
import { baliData } from '@/lib/bali/data'
import '@/styles/bali.css'

// Bali Specific Components
import BaliHero from '@/components/bali/BaliHero'
import BaliQuickSummary from '@/components/bali/BaliQuickSummary'
import WhyBali from '@/components/bali/WhyBali'
import TopExperiencesBali from '@/components/bali/TopExperiencesBali'
import HoneymoonSpecialBali from '@/components/bali/HoneymoonSpecialBali'
import PackageCardsBali from '@/components/bali/PackageCardsBali'
import ItineraryAccordionBali from '@/components/bali/ItineraryAccordionBali'
import HotelTierSelectorBali from '@/components/bali/HotelTierSelectorBali'
import CostEstimatorBali from '@/components/bali/CostEstimatorBali'
import SeasonCalendarBali from '@/components/bali/SeasonCalendarBali'
import InclusionsExclusionsBali from '@/components/bali/InclusionsExclusionsBali'
import GalleryGridBali from '@/components/bali/GalleryGridBali'
import SEOContentBlockBali from '@/components/bali/SEOContentBlockBali'

// Shared Components
import TrustBadgeStrip from '@/components/shared/TrustBadgeStrip'
import PlanningProcess from '@/components/shared/PlanningProcess'
import FAQAccordion from '@/components/shared/FAQAccordion'
import TestimonialCarousel from '@/components/shared/TestimonialCarousel'
import RelatedDestinations from '@/components/shared/RelatedDestinations'
import FinalCTA from '@/components/shared/FinalCTA'
import WhatsAppFloatingButton from '@/components/shared/WhatsAppFloatingButton'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import ExitIntentModal from '@/components/shared/ExitIntentModal'
import LeadFormModalController from './LeadFormModalController'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'

export const metadata: Metadata = {
  title: baliData.meta.title,
  description: baliData.meta.description,
  alternates: {
    canonical: baliData.meta.canonical,
  },
  openGraph: {
    title: baliData.meta.title,
    description: baliData.meta.description,
    url: baliData.meta.canonical,
    images: [{ url: baliData.meta.ogImage, width: 1200, height: 630 }],
  },
}

export default function BaliPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.outboundtravelers.com' },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://www.outboundtravelers.com/destinations' },
          { '@type': 'ListItem', position: 3, name: 'Bali Tour Packages', item: baliData.meta.canonical },
        ],
      },
      {
        '@type': 'TouristDestination',
        name: 'Bali',
        geo: { '@type': 'GeoCoordinates', latitude: -8.3405, longitude: 115.0920 },
        touristType: ['Honeymoon', 'Family', 'Adventure', 'Group', 'Luxury'],
      },
      {
        '@type': 'TravelAgency',
        name: 'Outbound Travelers',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Nagercoil',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN'
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: baliData.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a }
        }))
      },
      ...baliData.packages.map(pkg => ({
        '@type': 'Product',
        name: pkg.name,
        description: pkg.duration + ' package ideal for ' + pkg.idealFor,
        image: pkg.image,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'INR',
          description: pkg.price
        }
      }))
    ]
  }

  return (
    <div data-destination="bali" className="min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* Hero Section */}
        <BaliHero />

        {/* Trust Badges */}
        <TrustBadgeStrip badges={baliData.trustBadges} />

        {/* Quick Summary */}
        <BaliQuickSummary />

        {/* Why Visit */}
        <WhyBali />

        {/* Top Experiences */}
        <TopExperiencesBali />

        {/* Honeymoon Special Block */}
        <HoneymoonSpecialBali />

        {/* Package Cards */}
        <div id="bali-packages">
          <PackageCardsBali />
        </div>

        {/* Day-by-Day Itinerary */}
        <ItineraryAccordionBali />

        {/* Hotel Tiers */}
        <HotelTierSelectorBali />

        {/* Cost Estimator */}
        <CostEstimatorBali />

        {/* Best Time to Visit */}
        <SeasonCalendarBali />

        {/* Planning Process */}
        <PlanningProcess steps={baliData.process} accentColor="#D97706" />

        {/* Inclusions / Exclusions */}
        <InclusionsExclusionsBali />

        {/* Photo Gallery */}
        <GalleryGridBali />

        {/* Testimonials */}
        <TestimonialCarousel testimonials={baliData.testimonials} />

        {/* FAQ */}
        <FAQAccordion faqs={baliData.faqs} title="Bali Travel FAQs" />
        <div className="flex justify-center mb-16 px-4">
          <a
            href={buildWhatsAppUrl(baliData.whatsapp.number, baliData.whatsapp.stickyMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#D97706] hover:underline flex items-center gap-2"
          >
            Have more questions? Ask our Bali experts on WhatsApp
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* SEO Content Block */}
        <SEOContentBlockBali />

        {/* Related Destinations */}
        <RelatedDestinations destinations={baliData.relatedDestinations} title="Explore More Destinations" />

        {/* Final Bottom CTA */}
        <FinalCTA 
          accentColor="#D97706"
          headline="Your Bali story starts with one message."
          body="Tell us your dates, your travelers, and what Bali means to you. We'll come back with a plan that fits — usually within two hours."
          whatsappUrl={buildWhatsAppUrl(baliData.whatsapp.number, baliData.whatsapp.finalCtaMessage)}
          whatsappButtonLabel="WhatsApp our Bali team"
        />
      </main>

      {/* Overlays and Floating Elements */}
      <LeadFormModalController />

      <StickyMobileCTA
        accentColor="#D97706"
        phoneNumber={baliData.whatsapp.number}
        whatsappUrl={buildWhatsAppUrl(baliData.whatsapp.number, baliData.whatsapp.stickyMessage)}
      />

      <WhatsAppFloatingButton
        whatsappUrl={buildWhatsAppUrl(baliData.whatsapp.number, baliData.whatsapp.floaterMessage)}
        accentColor="#D97706"
      />

      <ExitIntentModal
        whatsappUrl={buildWhatsAppUrl(baliData.whatsapp.number, baliData.whatsapp.heroMessage)}
      />
    </div>
  )
}
