"use client";

import React from "react";
import CinematicHero from "@/components/meghalaya/CinematicHero";
import QuickSummaryCards from "@/components/meghalaya/QuickSummaryCards";
import WhyMeghalaya from "@/components/meghalaya/WhyMeghalaya";
import TopExperiencesGrid from "@/components/meghalaya/TopExperiencesGrid";
import LivingRootBridgeModule from "@/components/meghalaya/LivingRootBridgeModule";
import PremiumPackages from "@/components/meghalaya/PremiumPackages";
import ItineraryTimeline from "@/components/meghalaya/ItineraryTimeline";
import HotelTierComparison from "@/components/meghalaya/HotelTierComparison";
import CostEstimatorUI from "@/components/meghalaya/CostEstimatorUI";
import SeasonCalendar from "@/components/meghalaya/SeasonCalendar";
import PlanningProcess from "@/components/meghalaya/PlanningProcess";
import InclusionsExclusions from "@/components/meghalaya/InclusionsExclusions";
import Testimonials from "@/components/meghalaya/Testimonials";
import FAQAccordion from "@/components/meghalaya/FAQAccordion";
import RelatedDestinations from "@/components/meghalaya/RelatedDestinations";
import StickyWhatsAppCTA from "@/components/meghalaya/StickyWhatsAppCTA";

export default function MeghalayaPage() {
  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.outboundtravelers.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Destinations",
            item: "https://www.outboundtravelers.com/destinations",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Meghalaya Tour Packages",
            item: "https://www.outboundtravelers.com/meghalaya",
          },
        ],
      },
      {
        "@type": "TouristDestination",
        name: "Meghalaya",
        geo: {
          "@type": "GeoCoordinates",
          latitude: "25.4670",
          longitude: "91.3662",
        },
        touristType: ["Off-beat", "Adventure", "Honeymoon", "Nature"],
      },
      {
        "@type": "TravelAgency",
        name: "Outbound Travelers",
        image: "https://www.outboundtravelers.com/logo.png",
        telephone: "+919876543210",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Nagercoil",
          addressLocality: "Kanyakumari",
          addressRegion: "Tamil Nadu",
          postalCode: "629001",
          addressCountry: "IN",
        },
      },
    ],
  };

  return (
    <div data-destination="meghalaya" className="relative min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Cinematic Hero */}
      <CinematicHero />

      {/* 2. Quick Summary Cards */}
      <QuickSummaryCards />

      {/* 3. Why Meghalaya */}
      <WhyMeghalaya />

      {/* 4. Top Experiences Grid */}
      <TopExperiencesGrid />

      {/* 5. Living Root Bridge Feature Module */}
      <LivingRootBridgeModule />

      {/* 6. Premium Packages */}
      <PremiumPackages />

      {/* 7. Day-wise Itinerary Timeline */}
      <ItineraryTimeline />

      {/* 8. Hotel Tier Comparison */}
      <HotelTierComparison />

      {/* 9. Cost Estimator */}
      <CostEstimatorUI />

      {/* 10. Season Calendar */}
      <SeasonCalendar />

      {/* 11. Planning Process */}
      <PlanningProcess />

      {/* 12. Inclusions & Exclusions */}
      <InclusionsExclusions />

      {/* 13. Testimonials */}
      <Testimonials />

      {/* 14. FAQ Accordion */}
      <FAQAccordion />

      {/* 15. Related Destinations */}
      <RelatedDestinations />

      {/* 16. Sticky WhatsApp CTA */}
      <StickyWhatsAppCTA />
    </div>
  );
}
