"use client";

import React from "react";
import Hero from "@/components/vietnam/Hero";
import CulturalIntro from "@/components/vietnam/CulturalIntro";
import DestinationShowcase from "@/components/vietnam/DestinationShowcase";
import LuxuryStayCollection from "@/components/vietnam/LuxuryStayCollection";
import SignatureExperiences from "@/components/vietnam/SignatureExperiences";
import PremiumPackageCollection from "@/components/vietnam/PremiumPackageCollection";
import VietnamJourneyTimeline from "@/components/vietnam/VietnamJourneyTimeline";
import HotelTierComparison from "@/components/vietnam/HotelTierComparison";
import SeasonalVietnamExperience from "@/components/vietnam/SeasonalVietnamExperience";
import TravelPlanningProcess from "@/components/vietnam/TravelPlanningProcess";
import Testimonials from "@/components/vietnam/Testimonials";
import FAQ from "@/components/vietnam/FAQ";
import RelatedDestinations from "@/components/vietnam/RelatedDestinations";
import FinalCTA from "@/components/vietnam/FinalCTA";
import FloatingWhatsAppCTA from "@/components/vietnam/FloatingWhatsAppCTA";

export default function VietnamPage() {
  // JSON-LD Structured Data for Premium Vietnam Travel
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
            "name": "Vietnam Tour Packages",
            "item": "https://www.outboundtravelers.com/vietnam",
          },
        ],
      },
      {
        "@type": "TouristDestination",
        "name": "Vietnam",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "14.0583",
          "longitude": "108.2772",
        },
        "touristType": ["Ancient Town", "Colonial Heritage", "Cruises", "Honeymoon", "Lakes", "Mountains"],
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
    <div data-destination="vietnam" className="relative min-h-screen bg-[#F7F3EB] text-[#2F3E46] selection:bg-[#1F5F5B]/10 selection:text-[#1F5F5B] overflow-x-hidden font-sans antialiased">
      {/* Dynamic JSON-LD Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Cinematic Editorial Hero */}
      <Hero />

      {/* 2. Indochina Cultural Storytelling */}
      <CulturalIntro />

      {/* 3. Vietnam Destinations Showcase */}
      <DestinationShowcase />

      {/* 4. Luxury Stay Collection */}
      <LuxuryStayCollection />

      {/* 5. Signature Experiences */}
      <SignatureExperiences />

      {/* 6. Premium Package Collection */}
      <PremiumPackageCollection />

      {/* 7. Vietnam Journey Timeline */}
      <VietnamJourneyTimeline />

      {/* 8. Hotel Tier Comparison */}
      <HotelTierComparison />

      {/* 9. Seasonal Vietnam Experience */}
      <SeasonalVietnamExperience />

      {/* 10. Travel Planning Process */}
      <TravelPlanningProcess />

      {/* 11. Testimonials */}
      <Testimonials />

      {/* 12. FAQ */}
      <FAQ />

      {/* 13. Related Destinations */}
      <RelatedDestinations />

      {/* 14. Final Cinematic CTA */}
      <FinalCTA />

      {/* 15. Floating WhatsApp CTA */}
      <FloatingWhatsAppCTA />
    </div>
  );
}
