"use client";

import React from "react";
import { motion } from "framer-motion";
import { andamanData } from "@/lib/andaman/data";
import { buildWhatsAppUrl } from "@/lib/shared/whatsapp";

// Shared Components
import TrustBadgeStrip from "@/components/shared/TrustBadgeStrip";
import PlanningProcess from "@/components/shared/PlanningProcess";
import FAQAccordion from "@/components/shared/FAQAccordion";
import TestimonialCarousel from "@/components/shared/TestimonialCarousel";
import RelatedDestinations from "@/components/shared/RelatedDestinations";
import StickyMobileCTA from "@/components/shared/StickyMobileCTA";
import WhatsAppFloatingButton from "@/components/shared/WhatsAppFloatingButton";
import ExitIntentModal from "@/components/shared/ExitIntentModal";
import LeadFormModalController from "./LeadFormModalController";

// Andaman Local Visual Components
import Hero from "./Hero";
import FloatingIslandSelector from "./FloatingIslandSelector";
import ExperienceTimelineRiver from "./ExperienceTimelineRiver";
import HoneymoonLuxuryShowcase from "./HoneymoonLuxuryShowcase";
import ScubaDiscoverySection from "./ScubaDiscoverySection";
import PackageCards from "./PackageCards";
import ItineraryStoryFlow from "./ItineraryStoryFlow";
import CostEstimator from "./CostEstimator";

export default function AndamanPage() {
  const finalCtaWaUrl = buildWhatsAppUrl(
    andamanData.whatsapp.number,
    andamanData.whatsapp.finalCtaMessage
  );
  const stickyCtaWaUrl = buildWhatsAppUrl(
    andamanData.whatsapp.number,
    andamanData.whatsapp.stickyMessage
  );
  const floaterWaUrl = buildWhatsAppUrl(
    andamanData.whatsapp.number,
    andamanData.whatsapp.floaterMessage
  );
  const exitIntentWaUrl = buildWhatsAppUrl(
    andamanData.whatsapp.number,
    andamanData.whatsapp.heroMessage
  );

  // Construct JSON-LD Schema
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
            "name": "Andaman Tour Packages",
            "item": "https://www.outboundtravelers.com/andaman",
          },
        ],
      },
      {
        "@type": "TouristDestination",
        "name": "Andaman & Nicobar Islands",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "11.7401",
          "longitude": "92.6586",
        },
        "touristType": ["Honeymoon", "Luxury", "Scuba Diving", "Family"],
      },
      {
        "@type": "FAQPage",
        "mainEntity": andamanData.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div
      data-destination="andaman"
      className="min-h-screen bg-[#FFF7ED] text-[#1C1917] font-sans selection:bg-[#0891B2] selection:text-white relative overflow-hidden"
    >
      {/* Schema Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Fullscreen Parallax Hero — Deep Ocean Teal */}
      <Hero />

      {/* 2. Trust badges — Warm Cream */}
      <div className="relative -mt-10 z-30 max-w-7xl mx-auto px-4 md:px-8">
        <div className="backdrop-blur-xl bg-white/80 border border-stone-200 rounded-[2.5rem] p-2 shadow-xl">
          <TrustBadgeStrip badges={andamanData.trustBadges} />
        </div>
      </div>

      {/* 3. Floating Island Selector — Warm Cream bg */}
      <FloatingIslandSelector />

      {/* 4. Experience Timeline River — Soft Teal bg */}
      <ExperienceTimelineRiver />

      {/* 5. Honeymoon Luxury Showcase — Full-bleed image overlay */}
      <HoneymoonLuxuryShowcase />

      {/* 6. Deep Sea Scuba Discovery Section — Deep Ocean */}
      <ScubaDiscoverySection />

      {/* 7. Modular Staggered Package Cards — Sand bg */}
      <PackageCards />

      {/* 8. Alternate Itinerary Story Flow — Light Teal bg */}
      <ItineraryStoryFlow />

      {/* 9. Glassmorphic Calculator Cost Estimator — Cream bg */}
      <CostEstimator />

      {/* 10. Planning Process strip — Warm Sand */}
      <div className="bg-[#FFFBF5] border-y border-stone-200/50 py-20">
        <PlanningProcess
          steps={andamanData.process}
          accentColor={andamanData.theme.accentColor}
        />
      </div>

      {/* 11. Testimonial slide carousel — Soft cyan tint */}
      <div className="bg-[#F0FDFA] py-24 relative">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#0891B2] font-bold">
            Guest Chronicles
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1C1917] mt-2">
            Stories from the Turquoise Frontier
          </h2>
        </div>
        <TestimonialCarousel testimonials={andamanData.testimonials} />
      </div>

      {/* 12. Dynamic FAQ accordion — Cream bg */}
      <div className="bg-[#FFF7ED] border-t border-stone-200/50 py-24">
        <FAQAccordion title="Andaman Expedition FAQs" faqs={andamanData.faqs}>
          <a
            href={finalCtaWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0891B2] hover:underline"
          >
            Have a custom island query? Speak to us on WhatsApp
          </a>
        </FAQAccordion>
      </div>

      {/* 13. Related Alternate Destinations */}
      <RelatedDestinations destinations={andamanData.relatedDestinations} />

      {/* 14. Lead Form modal controller */}
      <LeadFormModalController />

      {/* 15. Mobile Sticky CTA */}
      <StickyMobileCTA
        accentColor={andamanData.theme.accentColor}
        phoneNumber={andamanData.whatsapp.number}
        whatsappUrl={stickyCtaWaUrl}
        formEventName="openLeadForm"
      />

      {/* 16. Floating chat controller */}
      <WhatsAppFloatingButton
        whatsappUrl={floaterWaUrl}
        accentColor={andamanData.theme.accentColor}
        destinationName="Andaman"
      />

      {/* 17. Exit intent listener */}
      <ExitIntentModal
        whatsappUrl={exitIntentWaUrl}
        destinationName="Andaman"
      />
    </div>
  );
}
