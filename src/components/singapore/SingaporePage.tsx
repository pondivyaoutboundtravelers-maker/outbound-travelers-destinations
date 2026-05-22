"use client";

import React from 'react'
import '@/styles/singapore.css'
import { singaporeData } from '@/lib/singapore/data'
import { buildWhatsAppUrl } from '@/lib/shared/whatsapp'

// Shared Components
import TrustBadgeStrip from '@/components/shared/TrustBadgeStrip'
import PlanningProcess from '@/components/shared/PlanningProcess'
import RelatedDestinations from '@/components/shared/RelatedDestinations'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import WhatsAppFloatingButton from '@/components/shared/WhatsAppFloatingButton'
import ExitIntentModal from '@/components/shared/ExitIntentModal'

// Singapore Components
import Hero from './Hero'
import WhySingapore from './WhySingapore'
import AttractionsGrid from './AttractionsGrid'
import ComboJourneys from './ComboJourneys'
import PackageShowcase from './PackageShowcase'
import ItineraryTimeline from './ItineraryTimeline'
import CostEstimator from './CostEstimator'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import FinalCTA from './FinalCTA'
import SEOContentBlock from './SEOContentBlock'
import LeadFormModalController from './LeadFormModalController'

export default function SingaporePage() {
  // Build dynamic urls
  const stickyCtaWaUrl = buildWhatsAppUrl(
    singaporeData.whatsapp.number,
    singaporeData.whatsapp.stickyMessage
  )
  const floaterWaUrl = buildWhatsAppUrl(
    singaporeData.whatsapp.number,
    singaporeData.whatsapp.floaterMessage
  )
  const exitIntentWaUrl = buildWhatsAppUrl(
    singaporeData.whatsapp.number,
    singaporeData.whatsapp.floaterMessage
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
            'name': 'Singapore Tour Packages',
            'item': 'https://www.outboundtravelers.com/international/singapore-tour-packages',
          },
        ],
      },
      // 2. TouristDestination
      {
        '@type': 'TouristDestination',
        'name': 'Singapore',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '1.3521',
          'longitude': '103.8198',
        },
        'touristType': ['Family', 'Luxury', 'Cruise', 'Honeymoon', 'Friends'],
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
        'mainEntity': singaporeData.faqs.map((faq) => ({
          '@type': 'Question',
          'name': faq.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a,
          },
        })),
      },
      // 5. Products + Offers
      ...singaporeData.packages.map((pkg) => ({
        '@type': 'Product',
        'name': pkg.name,
        'image': `https://www.outboundtravelers.com${pkg.image}`,
        'description': pkg.idealFor,
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'INR',
          'price': pkg.id === 'family-classic' ? '62500.00' : pkg.id === 'luxury-escape' ? '128000.00' : pkg.id === 'cruise-combo' ? '98000.00' : '74500.00',
          'availability': 'https://schema.org/InStock',
        },
      })),
    ],
  }

  return (
    <div data-destination="singapore" className="min-h-screen bg-cream text-dark-text">
      {/* Dynamic JSON-LD script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Component */}
      <Hero />

      {/* 2. Trust Strip */}
      <TrustBadgeStrip badges={singaporeData.trustBadges} />

      {/* 3. Why Singapore Section */}
      <WhySingapore />

      {/* 4. Attractions Bento-Style Grid */}
      <AttractionsGrid />

      {/* 5. Combo Journeys Selector */}
      <ComboJourneys />

      {/* 6. Package Offers Showcase */}
      <PackageShowcase />

      {/* 7. Itinerary Timeline Flow */}
      <ItineraryTimeline />

      {/* 8. Fintech Cost Estimator Slider */}
      <CostEstimator />

      {/* 9. How We Plan Process */}
      <PlanningProcess steps={singaporeData.process} accentColor="#0D9488" />

      {/* 10. Guest Stories / Testimonials */}
      <Testimonials />

      {/* 11. FAQ Accordion */}
      <FAQ />

      {/* 12. SEO Content Block */}
      <SEOContentBlock />

      {/* 13. Related Destinations */}
      <RelatedDestinations destinations={singaporeData.relatedDestinations} />

      {/* 14. Final Call To Action */}
      <FinalCTA />

      {/* 15. Lead Form Dialog modal */}
      <LeadFormModalController />

      {/* 16. Mobile Sticky CTA Footer */}
      <StickyMobileCTA
        accentColor="#0D9488"
        phoneNumber={singaporeData.whatsapp.number}
        whatsappUrl={stickyCtaWaUrl}
      />

      {/* 17. WhatsApp Floating chat button */}
      <WhatsAppFloatingButton
        whatsappUrl={floaterWaUrl}
        accentColor="#0D9488"
        destinationName="Singapore"
      />

      {/* 18. Exit Intent Modal */}
      <ExitIntentModal
        whatsappUrl={exitIntentWaUrl}
        destinationName="Singapore"
      />
    </div>
  )
}
