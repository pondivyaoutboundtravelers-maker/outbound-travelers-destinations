"use client";

import React from "react";
import Hero from "@/components/thailand/Hero";
import QuickSummary from "@/components/thailand/QuickSummary";
import VisaInfoBlock from "@/components/thailand/VisaInfoBlock";
import WhyThailand from "@/components/thailand/WhyThailand";
import RegionExplorer from "@/components/thailand/RegionExplorer";
import HoneymoonSpecial from "@/components/thailand/HoneymoonSpecial";
import TopExperiences from "@/components/thailand/TopExperiences";
import ThailandPackages from "@/components/thailand/ThailandPackages";
import ItineraryTimeline from "@/components/thailand/ItineraryTimeline";
import HotelTierComparison from "@/components/thailand/HotelTierComparison";
import CostEstimator from "@/components/thailand/CostEstimator";
import SeasonCalendar from "@/components/thailand/SeasonCalendar";
import PlanningProcess from "@/components/thailand/PlanningProcess";
import InclusionsExclusions from "@/components/thailand/InclusionsExclusions";
import Testimonials from "@/components/thailand/Testimonials";
import FAQAccordion from "@/components/thailand/FAQAccordion";
import RelatedDestinations from "@/components/thailand/RelatedDestinations";
import FloatingWhatsAppCTA from "@/components/thailand/FloatingWhatsAppCTA";
import FinalCTA from "@/components/thailand/FinalCTA";

export default function ThailandPage() {
  // JSON-LD Structured Data for Premium Thailand Travel
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
            "name": "Thailand Tour Packages",
            "item": "https://www.outboundtravelers.com/thailand",
          },
        ],
      },
      {
        "@type": "TouristDestination",
        "name": "Thailand",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "15.8700",
          "longitude": "100.9925",
        },
        "touristType": ["Beaches", "Temples", "Nightlife", "Luxury", "Honeymoon", "Family"],
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
    <div data-destination="thailand" className="relative min-h-screen bg-neutral-950 text-white selection:bg-[#0891B2]/30 selection:text-white">
      {/* Dynamic JSON-LD Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Fullscreen Cinematic Hero */}
      <Hero />

      {/* 2. Floating Stats Summary Card Row */}
      <QuickSummary />

      {/* 3. Visa Policy Guideline Module */}
      <VisaInfoBlock />

      {/* 4. Core Value Proposition Grid */}
      <WhyThailand />

      {/* 5. Destination Region Explorer (Bangkok, Phuket, Krabi, Pattaya, Phi Phi, Chiang Mai) */}
      <RegionExplorer />

      {/* 6. Intimate Honeymoon Storytelling Curation */}
      <HoneymoonSpecial />

      {/* 7. Top Experiences 10 Grid */}
      <TopExperiences />

      {/* 8. Detailed Package Cards Showcase (6 Custom Packages) */}
      <ThailandPackages />

      {/* 9. Dynamic Timeline Itinerary Slider */}
      <ItineraryTimeline />

      {/* 10. Premium vs Luxury Stay Comparison */}
      <HotelTierComparison />

      {/* 11. Cost Estimator Dynamic Calculator Slider */}
      <CostEstimator />

      {/* 12. Month-Wise Seasonal Weather Grid */}
      <SeasonCalendar />

      {/* 13. 5-Step Trip Planning Roadmap */}
      <PlanningProcess />

      {/* 14. Double Pane Inclusions/Exclusions Checklist */}
      <InclusionsExclusions />

      {/* 15. Review Slider Carousel */}
      <Testimonials />

      {/* 16. Rich FAQ Accordion block */}
      <FAQAccordion />

      {/* 17. Related Destinations Alternative Options */}
      <RelatedDestinations />

      {/* 18. Final Cinematic Call-to-Action */}
      <FinalCTA />

      {/* 19. Responsive Floating WhatsApp Floater */}
      <FloatingWhatsAppCTA />
    </div>
  );
}
