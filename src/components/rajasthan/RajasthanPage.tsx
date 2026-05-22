"use client";

import React from "react";
import Hero from "@/components/rajasthan/Hero";
import RoyalIntro from "@/components/rajasthan/RoyalIntro";
import CircuitExperience from "@/components/rajasthan/CircuitExperience";
import HeritageStaySpotlight from "@/components/rajasthan/HeritageStaySpotlight";
import RoyalExperiences from "@/components/rajasthan/RoyalExperiences";
import SignaturePackages from "@/components/rajasthan/SignaturePackages";
import ImmersiveItinerary from "@/components/rajasthan/ImmersiveItinerary";
import HotelTierComparison from "@/components/rajasthan/HotelTierComparison";
import AtmosphericSeasons from "@/components/rajasthan/AtmosphericSeasons";
import PlanningProcess from "@/components/rajasthan/PlanningProcess";
import LuxuryTestimonials from "@/components/rajasthan/LuxuryTestimonials";
import FAQAccordion from "@/components/rajasthan/FAQAccordion";
import RelatedDestinations from "@/components/rajasthan/RelatedDestinations";
import FinalCTA from "@/components/rajasthan/FinalCTA";
import FloatingWhatsAppCTA from "@/components/rajasthan/FloatingWhatsAppCTA";

export default function RajasthanPage() {
  // JSON-LD Structured Data for Premium Rajasthan Travel
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
            "name": "Rajasthan Tour Packages",
            "item": "https://www.outboundtravelers.com/rajasthan",
          },
        ],
      },
      {
        "@type": "TouristDestination",
        "name": "Rajasthan",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "27.0238",
          "longitude": "74.2179",
        },
        "touristType": ["Royal Palaces", "Desert dunes", "Heritage stays", "Honeymoon", "Lakes"],
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
    <div data-destination="rajasthan" className="relative min-h-screen bg-[#F7F3EE] text-[#5B2147] selection:bg-[#5B2147]/10 selection:text-[#5B2147] overflow-x-hidden font-sans antialiased">
      {/* Dynamic JSON-LD Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Fullscreen Palace Arch Hero */}
      <Hero />

      {/* 2. Editorial Royal Introduction Story */}
      <RoyalIntro />

      {/* 3. Immersive City Circuit Cards */}
      <CircuitExperience />

      {/* 4. Heritage Stays Spotlight */}
      <HeritageStaySpotlight />

      {/* 5. Immersive Experiences Grid */}
      <RoyalExperiences />

      {/* 6. Signature Heritage Packages */}
      <SignaturePackages />

      {/* 7. Alternating Day Itinerary Sequences */}
      <ImmersiveItinerary />

      {/* 8. Heritage Hotel Tier Comparison Table */}
      <HotelTierComparison />

      {/* 9. Atmospheric Seasonal Calendar */}
      <AtmosphericSeasons />

      {/* 10. Royal Pathway Planning */}
      <PlanningProcess />

      {/* 11. Textured Quote Testimonials */}
      <LuxuryTestimonials />

      {/* 12. Mughal Framed FAQ Accordion */}
      <FAQAccordion />

      {/* 13. Related Destinations */}
      <RelatedDestinations />

      {/* 14. Final Sunset Dunes CTA Footer */}
      <FinalCTA />

      {/* 15. Royal Gold WhatsApp CTA Floater */}
      <FloatingWhatsAppCTA />
    </div>
  );
}
