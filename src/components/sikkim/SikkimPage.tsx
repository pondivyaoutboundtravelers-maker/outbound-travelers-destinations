"use client";

import React from 'react'
import { sikkimData } from '@/lib/sikkim/data'
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

// Sikkim Components
import CinematicHero from '@/components/sikkim/CinematicHero'
import PermitInfoStrip from '@/components/sikkim/PermitInfoStrip'
import LuxuryQuickSummary from '@/components/sikkim/LuxuryQuickSummary'
import WhyVisitSikkim from '@/components/sikkim/WhyVisitSikkim'
import TopExperiencesGrid from '@/components/sikkim/TopExperiencesGrid'
import HoneymoonHighlight from '@/components/sikkim/HoneymoonHighlight'
import InteractiveRegionSelector from '@/components/sikkim/InteractiveRegionSelector'
import PremiumPackageShowcase from '@/components/sikkim/PremiumPackageShowcase'
import ScenicItineraryTimeline from '@/components/sikkim/ScenicItineraryTimeline'
import LuxuryHotelTierComparison from '@/components/sikkim/LuxuryHotelTierComparison'
import SeasonExperienceCalendar from '@/components/sikkim/SeasonExperienceCalendar'
import MountainGallery from '@/components/sikkim/MountainGallery'

// Local Component Controllers
import LeadFormModalController from './LeadFormModalController'

export default function SikkimPage() {
  // Build dynamic urls
  const finalCtaWaUrl = buildWhatsAppUrl(
    sikkimData.whatsapp.number,
    sikkimData.whatsapp.finalCtaMessage
  )
  const stickyCtaWaUrl = buildWhatsAppUrl(
    sikkimData.whatsapp.number,
    sikkimData.whatsapp.stickyMessage
  )
  const floaterWaUrl = buildWhatsAppUrl(
    sikkimData.whatsapp.number,
    sikkimData.whatsapp.floaterMessage
  )
  const exitIntentWaUrl = buildWhatsAppUrl(
    sikkimData.whatsapp.number,
    sikkimData.whatsapp.floaterMessage
  )

  // Construct JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Breadcrumbs
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.outboundtravelers.com',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Destinations',
            'item': 'https://www.outboundtravelers.com/destinations',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Sikkim Tour Packages',
            'item': 'https://www.outboundtravelers.com/sikkim',
          },
        ],
      },
      // 2. TouristDestination
      {
        '@type': 'TouristDestination',
        'name': 'Sikkim',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '27.3389',
          'longitude': '88.6065',
        },
        'touristType': ['Luxury', 'Honeymoon', 'Family', 'Adventure'],
      },
      // 3. TravelAgency
      {
        '@type': 'TravelAgency',
        'name': 'Outbound Travelers',
        'image': 'https://www.outboundtravelers.com/logo.png',
        'telephone': '+919876543210',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Nagercoil',
          'addressLocality': 'Kanyakumari',
          'addressRegion': 'Tamil Nadu',
          'postalCode': '629001',
          'addressCountry': 'IN',
        },
      },
      // 4. FAQ Page
      {
        '@type': 'FAQPage',
        'mainEntity': sikkimData.faqs.map((faq) => ({
          '@type': 'Question',
          'name': faq.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a,
          },
        })),
      },
    ],
  }

  return (
    <div data-destination="sikkim" className="min-h-screen bg-slate-50">
      {/* Dynamic JSON-LD script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Component */}
      <CinematicHero />

      {/* 2. Trust Strip */}
      <PermitInfoStrip />

      {/* 3. Quick Summary */}
      <LuxuryQuickSummary />

      {/* 4. Why Visit Section */}
      <WhyVisitSikkim />

      {/* 5. Interactive Region Selector */}
      <InteractiveRegionSelector />

      {/* 6. Top Experiences Grid */}
      <TopExperiencesGrid />

      {/* 7. Honeymoon Banner */}
      <HoneymoonHighlight />

      {/* 8. Package Offers Grid */}
      <PremiumPackageShowcase />

      {/* 9. Daily Timeline */}
      <ScenicItineraryTimeline />

      {/* 10. Accommodations Selector */}
      <LuxuryHotelTierComparison />

      {/* 11. Month Guide Calendar */}
      <SeasonExperienceCalendar />

      {/* 12. Media Gallery */}
      <MountainGallery />

      {/* 13. How We Plan Process */}
      <PlanningProcess steps={sikkimData.process} accentColor={sikkimData.theme.accentColor} />

      {/* 14. Testimonial Strip */}
      <div className="bg-white py-12">
        <div className="text-center mb-8">
           <h2 className="text-3xl md:text-5xl font-fraunces font-bold text-slate-900">Traveler Stories</h2>
        </div>
        <TestimonialCarousel testimonials={sikkimData.testimonials} />
      </div>

      {/* 15. Interactive FAQ list */}
      <div className="bg-slate-50">
        <FAQAccordion title="Sikkim Travel FAQs" faqs={sikkimData.faqs}>
          <a
            href={finalCtaWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0F766E] hover:underline"
          >
            Have another question? Ask on WhatsApp
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.805 1.452 5.426.002 9.84-4.408 9.843-9.84.002-2.63-1.023-5.101-2.883-6.963C16.552 1.95 14.09 .928 11.46.928c-5.43 0-9.844 4.412-9.847 9.844-.001 1.733.456 3.424 1.323 4.908l-.893 3.256 3.32-.871c1.554.848 3.033 1.22 4.604 1.22zm10.777-7.44c-.26-.13-1.536-.759-1.774-.846-.237-.087-.41-.13-.58.13-.172.26-.666.846-.817 1.018-.152.173-.303.195-.563.065-.26-.13-1.097-.404-2.09-1.289-.773-.69-1.295-1.542-1.447-1.802-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.402-.796-1.921-.21-.507-.442-.437-.607-.446-.157-.008-.337-.01-.518-.01-.18 0-.476.068-.724.338-.25.27-.95.93-.95 2.27 0 1.34.975 2.632 1.111 2.816.136.183 1.92 2.925 4.65 4.103.65.28 1.157.447 1.553.573.654.208 1.248.179 1.718.109.523-.078 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.238-.172-.498-.302z" />
            </svg>
          </a>
        </FAQAccordion>
      </div>

      {/* 16. Other Destinations link */}
      <RelatedDestinations destinations={sikkimData.relatedDestinations} />

      {/* 17. Call-To-Action Foot band */}
      <FinalCTA
        accentColor={sikkimData.theme.accentColor}
        headline="Experience the Himalayas in Unprecedented Luxury."
        body="Tell us your dates, your group, and your idea of a perfect trip. We'll design a cinematic Sikkim escape tailored exactly for you."
        whatsappUrl={finalCtaWaUrl}
        formEventName="openLeadForm"
      />

      {/* 18. Multi-Step Form dialog */}
      <LeadFormModalController />

      {/* 19. Mobile Footer CTA Sticky Bar */}
      <StickyMobileCTA
        accentColor={sikkimData.theme.accentColor}
        phoneNumber={sikkimData.whatsapp.number}
        whatsappUrl={stickyCtaWaUrl}
        formEventName="openLeadForm"
      />

      {/* 20. Sticky chat floater */}
      <WhatsAppFloatingButton whatsappUrl={floaterWaUrl} accentColor={sikkimData.theme.accentColor} destinationName="Sikkim" />

      {/* 21. Exit Capture trigger modal */}
      <ExitIntentModal whatsappUrl={exitIntentWaUrl} destinationName="Sikkim" />
    </div>
  )
}
