import React from 'react'
import type { Metadata } from 'next'
import '@/styles/amritsar.css'
import { amritsarData } from '@/lib/amritsar/data'
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

// Amritsar-Specific Components
import AmritsarHero from '@/components/amritsar/AmritsarHero'
import AmritsarQuickSummary from '@/components/amritsar/AmritsarQuickSummary'
import WhyAmritsar from '@/components/amritsar/WhyAmritsar'
import TopExperiencesAmritsar from '@/components/amritsar/TopExperiencesAmritsar'
import ComboAddonModule from '@/components/amritsar/ComboAddonModule'
import PackageCardsAmritsar from '@/components/amritsar/PackageCardsAmritsar'
import ItineraryAccordionAmritsar from '@/components/amritsar/ItineraryAccordionAmritsar'
import HotelTierSelectorAmritsar from '@/components/amritsar/HotelTierSelectorAmritsar'
import CostEstimatorAmritsar from '@/components/amritsar/CostEstimatorAmritsar'
import SeasonCalendarAmritsar from '@/components/amritsar/SeasonCalendarAmritsar'
import InclusionsExclusionsAmritsar from '@/components/amritsar/InclusionsExclusionsAmritsar'
import GalleryAmritsar from '@/components/amritsar/GalleryAmritsar'
import SEOContentBlockAmritsar from '@/components/amritsar/SEOContentBlockAmritsar'

// Lead Form Client Controller
import LeadFormModalController from './LeadFormModalController'

export const metadata: Metadata = {
  title: amritsarData.meta.title,
  description: amritsarData.meta.description,
  alternates: {
    canonical: amritsarData.meta.canonical,
  },
  openGraph: {
    title: amritsarData.meta.title,
    description: amritsarData.meta.description,
    url: amritsarData.meta.canonical,
    images: [
      {
        url: amritsarData.meta.ogImage,
        width: 1200,
        height: 630,
        alt: 'Golden Temple Harmandir Sahib Amritsar sarovar reflection',
      },
    ],
  },
}

export default function AmritsarPage() {
  const finalCtaWaUrl = buildWhatsAppUrl(
    amritsarData.whatsapp.number,
    amritsarData.whatsapp.finalCtaMessage
  )
  const stickyCtaWaUrl = buildWhatsAppUrl(
    amritsarData.whatsapp.number,
    amritsarData.whatsapp.stickyMessage
  )
  const floaterWaUrl = buildWhatsAppUrl(
    amritsarData.whatsapp.number,
    amritsarData.whatsapp.floaterMessage
  )
  const exitIntentWaUrl = buildWhatsAppUrl(
    amritsarData.whatsapp.number,
    amritsarData.whatsapp.floaterMessage
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
            name: 'Amritsar Tour Packages',
            item: amritsarData.meta.canonical,
          },
        ],
      },
      // 2. TouristDestination
      {
        '@type': 'TouristDestination',
        name: 'Amritsar',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '31.6340',
          longitude: '74.8723',
        },
        touristType: ['Spiritual', 'Heritage', 'Family', 'Pilgrimage'],
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
        mainEntity: amritsarData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
      // 5. Products + Offers
      ...amritsarData.packages.map((pkg) => ({
        '@type': 'Product',
        name: pkg.name,
        image: pkg.image,
        description: `${pkg.duration} package ideal for ${pkg.idealFor}`,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '7999.00',
          availability: 'https://schema.org/InStock',
        },
      })),
    ],
  }

  // Map trust chips structure into custom shared TrustBadge elements
  const trustBadgeIcons = ['trips', 'custom', 'verified', 'support']
  const mappedTrustBadges = amritsarData.hero.trustChips.map((chip, idx) => ({
    icon: trustBadgeIcons[idx % trustBadgeIcons.length],
    label: chip,
  }))


  return (
    <div data-destination="amritsar" className="min-h-screen bg-white">
      {/* Schema Block */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* 1. Hero */}
        <AmritsarHero />

        {/* 2. Trust Badge Strip */}
        <TrustBadgeStrip badges={mappedTrustBadges} />

        {/* 3. Quick Summary */}
        <AmritsarQuickSummary />

        {/* 4. Why Amritsar */}
        <WhyAmritsar />

        {/* 5. Top Experiences */}
        <TopExperiencesAmritsar />

        {/* 6. Combo Addon Module */}
        <ComboAddonModule />

        {/* 7. Package Cards */}
        <PackageCardsAmritsar />

        {/* 8. Itinerary Accordion */}
        <ItineraryAccordionAmritsar />

        {/* 9. Hotel Tier Selector */}
        <HotelTierSelectorAmritsar />

        {/* 10. Cost Estimator */}
        <CostEstimatorAmritsar />

        {/* 11. Season Calendar */}
        <SeasonCalendarAmritsar />

        {/* 12. Planning Process */}
        <PlanningProcess steps={amritsarData.process} accentColor="#A16207" />

        {/* 13. Inclusions & Exclusions */}
        <InclusionsExclusionsAmritsar />

        {/* 14. Gallery Grid */}
        <GalleryAmritsar />

        {/* 15. Testimonials */}
        <TestimonialCarousel testimonials={amritsarData.testimonials} />

        {/* 16. FAQ Accordion */}
        <FAQAccordion faqs={amritsarData.faqs} title="Amritsar Travel FAQs">
          <a
            href={finalCtaWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold hover:underline mt-4 text-[#A16207]"
          >
            Have another question? Ask our Amritsar experts on WhatsApp
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09.928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
            </svg>
          </a>
        </FAQAccordion>

        {/* 17. SEO Content Block */}
        <SEOContentBlockAmritsar />

        {/* 18. Related Destinations */}
        <RelatedDestinations destinations={amritsarData.relatedDestinations} title="Explore More Destinations" />

        {/* 19. Final CTA */}
        <FinalCTA
          accentColor="#A16207"
          headline="Your Amritsar journey begins with one message."
          body="Tell us your dates and whether this is standalone or paired with Kashmir, Shimla, or Manali. We'll build it around you."
          whatsappUrl={finalCtaWaUrl}
          whatsappButtonLabel="WhatsApp our Amritsar team"
        />
      </main>

      {/* Controllers and Floating Elements */}
      <LeadFormModalController />

      <StickyMobileCTA
        accentColor="#A16207"
        phoneNumber={amritsarData.whatsapp.number}
        whatsappUrl={stickyCtaWaUrl}
      />

      <WhatsAppFloatingButton
        whatsappUrl={floaterWaUrl}
        accentColor="#A16207"
      />

      <ExitIntentModal
        whatsappUrl={exitIntentWaUrl}
        title="Planning an Amritsar trip?"
        body="Get a free 15-minute planning call with our Amritsar specialist."
      />
    </div>
  )
}
