"use client";

import React from "react";
import Hero from "@/components/malaysia/Hero";
import QuickSummary from "@/components/malaysia/QuickSummary";
import VisaInfoBlock from "@/components/malaysia/VisaInfoBlock";
import WhyMalaysia from "@/components/malaysia/WhyMalaysia";
import RegionExplorer from "@/components/malaysia/RegionExplorer";
import TopExperiences from "@/components/malaysia/TopExperiences";
import MalaysiaPackages from "@/components/malaysia/MalaysiaPackages";
import ItineraryTimeline from "@/components/malaysia/ItineraryTimeline";
import HotelTierComparison from "@/components/malaysia/HotelTierComparison";
import CostEstimator from "@/components/malaysia/CostEstimator";
import SeasonCalendar from "@/components/malaysia/SeasonCalendar";
import PlanningProcess from "@/components/malaysia/PlanningProcess";
import InclusionsExclusions from "@/components/malaysia/InclusionsExclusions";
import Testimonials from "@/components/malaysia/Testimonials";
import FAQAccordion from "@/components/malaysia/FAQAccordion";
import RelatedDestinations from "@/components/malaysia/RelatedDestinations";
import FloatingWhatsAppCTA from "@/components/malaysia/FloatingWhatsAppCTA";

export default function MalaysiaPage() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* 1. Fullscreen Cinematic Hero Banner */}
      <Hero />

      {/* 2. Floating Stats Summary Card Row */}
      <QuickSummary />

      {/* 3. Visa Policy Guideline Module */}
      <VisaInfoBlock />

      {/* 4. Core Value Proposition Grid */}
      <WhyMalaysia />

      {/* 5. Destination Region Explorer (Genting, KL, Langkawi, Penang) */}
      <RegionExplorer />

      {/* 6. Handpicked High-End Experiences Grid */}
      <TopExperiences />

      {/* 7. Detailed Package Cards Showcase */}
      <MalaysiaPackages />

      {/* 8. Interactive Itinerary Day Timeline */}
      <ItineraryTimeline />

      {/* 9. Premium vs Luxury Stay Comparison Table */}
      <HotelTierComparison />

      {/* 10. Live Trip Cost Calculator Slider Widget */}
      <CostEstimator />

      {/* 11. Interactive Month-Wise Seasonal Weather Grid */}
      <SeasonCalendar />

      {/* 12. 5-Step Trip Planning Progression Map */}
      <PlanningProcess />

      {/* 13. Double Pane Inclusions/Exclusions Checklist */}
      <InclusionsExclusions />

      {/* 14. Sliding Review Carousel */}
      <Testimonials />

      {/* 15. Rich FAQ Accordion block */}
      <FAQAccordion />

      {/* 16. Grid with navigation to alternate destinations */}
      <RelatedDestinations />

      {/* 17. Responsive Floating chat floater / Mobile CTA bar */}
      <FloatingWhatsAppCTA />
    </main>
  );
}
