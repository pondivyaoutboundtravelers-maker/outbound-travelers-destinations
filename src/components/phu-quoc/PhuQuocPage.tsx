"use client";

import React from "react";
import Hero from "@/components/phu-quoc/Hero";
import IntroStory from "@/components/phu-quoc/IntroStory";
import SplitExplorer from "@/components/phu-quoc/SplitExplorer";
import ResortShowcase from "@/components/phu-quoc/ResortShowcase";
import HoneymoonRituals from "@/components/phu-quoc/HoneymoonRituals";
import HorizontalTimeline from "@/components/phu-quoc/HorizontalTimeline";
import SignaturePackages from "@/components/phu-quoc/SignaturePackages";
import ImmersiveItinerary from "@/components/phu-quoc/ImmersiveItinerary";
import HotelTierComparison from "@/components/phu-quoc/HotelTierComparison";
import AtmosphericCalendar from "@/components/phu-quoc/AtmosphericCalendar";
import LuxuryTestimonials from "@/components/phu-quoc/LuxuryTestimonials";
import FAQAccordion from "@/components/phu-quoc/FAQAccordion";
import RelatedDestinations from "@/components/phu-quoc/RelatedDestinations";
import FinalCTA from "@/components/phu-quoc/FinalCTA";
import FloatingWhatsAppCTA from "@/components/phu-quoc/FloatingWhatsAppCTA";

export default function PhuQuocPage() {
  // JSON-LD Structured Data for Premium Phu Quoc Travel
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.outboundtravelers.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Destinations",
            "item": "https://www.outboundtravelers.com/destinations",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Phu Quoc Tour Packages",
            "item": "https://www.outboundtravelers.com/phu-quoc",
          },
        ],
      },
      {
        "@type": "TouristDestination",
        "name": "Phu Quoc",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "10.2899",
          "longitude": "103.9840",
        },
        "touristType": ["Beaches", "Romantic Resorts", "Quiet Luxury", "Honeymoon", "Private Islets"],
      },
      {
        "@type": "TravelAgency",
        "name": "Outbound Travelers",
        "image": "https://www.outboundtravelers.com/logo.png",
        "telephone": "+919876543210",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Nagercoil",
          "addressLocality": "Kanyakumari",
          "addressRegion": "Tamil Nadu",
          "postalCode": "629001",
          "addressCountry": "IN",
        },
      },
    ],
  };

  return (
    <div data-destination="phu-quoc" className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-teal-500/20 selection:text-white overflow-x-hidden">
      {/* Dynamic JSON-LD Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Cinematic Immersive Hero */}
      <Hero />

      {/* 2. Quiet Luxury Introduction Story */}
      <IntroStory />

      {/* 3. Four Corners Split Explorer */}
      <SplitExplorer />

      {/* 4. Resort Showcase Experience */}
      <ResortShowcase />

      {/* 5. Honeymoon Rituals of the Shore */}
      <HoneymoonRituals />

      {/* 6. Atmospheric Horizontal Timeline */}
      <HorizontalTimeline />

      {/* 7. Signature Packages (4 items) */}
      <SignaturePackages />

      {/* 8. Immersive Day Sequence Itinerary */}
      <ImmersiveItinerary />

      {/* 9. Hotel Tier Comparison Matrices */}
      <HotelTierComparison />

      {/* 10. Atmospheric Month Weather Calendar */}
      <AtmosphericCalendar />

      {/* 11. Luxury Testimonial Quotes */}
      <LuxuryTestimonials />

      {/* 12. FAQ Accordion Block */}
      <FAQAccordion />

      {/* 13. Alternate Escapes */}
      <RelatedDestinations />

      {/* 14. Final Sunset CTA Footer */}
      <FinalCTA />

      {/* 15. Sticky Delay WhatsApp Floater */}
      <FloatingWhatsAppCTA />
    </div>
  );
}
