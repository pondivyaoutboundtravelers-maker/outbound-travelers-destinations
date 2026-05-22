"use client";

import React from "react";
import { langkawiData } from "@/data/langkawi";
import { buildWhatsAppUrl } from "@/lib/shared/whatsapp";

// Shared Components
import PlanningProcess from "@/components/shared/PlanningProcess";
import FAQAccordion from "@/components/shared/FAQAccordion";
import TestimonialCarousel from "@/components/shared/TestimonialCarousel";
import RelatedDestinations from "@/components/shared/RelatedDestinations";
import FinalCTA from "@/components/shared/FinalCTA";
import StickyMobileCTA from "@/components/shared/StickyMobileCTA";
import WhatsAppFloatingButton from "@/components/shared/WhatsAppFloatingButton";
import ExitIntentModal from "@/components/shared/ExitIntentModal";

// Langkawi local sections
import Hero from "./Hero";
import HoneymoonSpecial from "./HoneymoonSpecial";
import TopExperiences from "./TopExperiences";
import Packages from "./Packages";
import ItineraryTimeline from "./ItineraryTimeline";
import HotelTierComparison from "./HotelTierComparison";
import CostEstimator from "./CostEstimator";
import SeasonCalendar from "./SeasonCalendar";
import LeadFormModalController from "./LeadFormModalController";
import { Check, X } from "lucide-react";

export default function LangkawiPage() {
  const finalCtaWaUrl = buildWhatsAppUrl(
    langkawiData.whatsapp.number,
    langkawiData.whatsapp.finalCtaMessage
  );
  const stickyCtaWaUrl = buildWhatsAppUrl(
    langkawiData.whatsapp.number,
    langkawiData.whatsapp.stickyMessage
  );
  const floaterWaUrl = buildWhatsAppUrl(
    langkawiData.whatsapp.number,
    langkawiData.whatsapp.floaterMessage
  );
  const exitIntentWaUrl = buildWhatsAppUrl(
    langkawiData.whatsapp.number,
    langkawiData.whatsapp.heroMessage
  );

  // JSON-LD Structured Data Schema
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
            name: "Langkawi Tour Packages",
            item: "https://www.outboundtravelers.com/langkawi",
          },
        ],
      },
      {
        "@type": "TouristDestination",
        name: "Langkawi",
        geo: {
          "@type": "GeoCoordinates",
          latitude: "6.3500",
          longitude: "99.8000",
        },
        touristType: ["Honeymoon", "Luxury", "Beach", "Duty-Free"],
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
      {
        "@type": "FAQPage",
        mainEntity: langkawiData.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div data-destination="langkawi" className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-amber-500 selection:text-black">
      {/* Schema Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Cinematic Fullscreen Hero Banner */}
      <Hero />

      {/* 2. Visa Policy Guideline Module (Float Band) */}
      <div className="bg-neutral-900 border-y border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
              International Travel Rule
            </span>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white font-serif">
              Indian Passport Holders Travel Visa-Free
            </h3>
            <p className="text-neutral-400 text-xs md:text-sm">
              Skip queue papers. Stay up to 30 days visa-free. Direct flights from major South Indian hubs.
            </p>
          </div>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("openLeadForm"))}
            className="px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 text-black font-bold uppercase tracking-wider text-xs whitespace-nowrap shadow-xl"
          >
            Check Visa Guidelines
          </button>
        </div>
      </div>

      {/* 3. Core Value Proposition Grid (Why Langkawi) */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {langkawiData.whyLangkawi.map((val, idx) => (
              <div key={idx} className="space-y-4 bg-white/[0.01] border border-white/5 rounded-3xl p-8 backdrop-blur-md">
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block">
                  0{idx + 1} / Advantage
                </span>
                <h3 className="text-xl font-bold text-white font-serif">{val.title}</h3>
                <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Honeymoon Special Perks */}
      <HoneymoonSpecial />

      {/* 5. Top Experiences Grid */}
      <TopExperiences />

      {/* 6. Detailed Package Cards Showcase */}
      <Packages />

      {/* 7. Interactive Itinerary Day Timeline */}
      <ItineraryTimeline />

      {/* 8. Premium vs Luxury Stay Comparison Table */}
      <HotelTierComparison />

      {/* 9. Live Trip Cost Calculator Slider Widget */}
      <CostEstimator />

      {/* 10. Interactive Month-Wise Seasonal Weather Grid */}
      <SeasonCalendar />

      {/* 11. 5-Step Trip Planning Progression Map */}
      <div className="bg-neutral-900 border-y border-white/5 py-12">
        <PlanningProcess steps={langkawiData.process} accentColor={langkawiData.theme.accentColor} />
      </div>

      {/* 12. Double Pane Inclusions/Exclusions Checklist */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Inclusions */}
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white">What is Included</h3>
              <ul className="space-y-4">
                {langkawiData.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white">What is Excluded</h3>
              <ul className="space-y-4">
                {langkawiData.exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                    <X className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 13. Sliding Review Carousel */}
      <div className="bg-neutral-900 py-16 border-y border-white/5">
        <div className="text-center mb-8">
           <h2 className="text-3xl md:text-5xl font-fraunces font-bold text-white">Traveler Stories</h2>
        </div>
        <TestimonialCarousel testimonials={langkawiData.testimonials} />
      </div>

      {/* 14. Rich FAQ Accordion block */}
      <div className="bg-neutral-950 py-16">
        <FAQAccordion title="Langkawi Travel FAQs" faqs={langkawiData.faqs}>
          <a
            href={finalCtaWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-500 hover:underline"
          >
            Have another question? Ask on WhatsApp
          </a>
        </FAQAccordion>
      </div>

      {/* 15. Grid with navigation to alternate destinations */}
      <RelatedDestinations destinations={langkawiData.relatedDestinations} />

      {/* 16. Call-To-Action Foot band */}
      <FinalCTA
        accentColor={langkawiData.theme.accentColor}
        headline="Experience Langkawi in Unprecedented Luxury."
        body="Tell us your dates, your group, and your idea of a perfect trip. We'll design a cinematic Langkawi escape tailored exactly for you."
        whatsappUrl={finalCtaWaUrl}
        formEventName="openLeadForm"
      />

      {/* 17. Multi-Step Form dialog */}
      <LeadFormModalController />

      {/* 18. Mobile Footer CTA Sticky Bar */}
      <StickyMobileCTA
        accentColor={langkawiData.theme.accentColor}
        phoneNumber={langkawiData.whatsapp.number}
        whatsappUrl={stickyCtaWaUrl}
        formEventName="openLeadForm"
      />

      {/* 19. Sticky chat floater */}
      <WhatsAppFloatingButton whatsappUrl={floaterWaUrl} accentColor={langkawiData.theme.accentColor} destinationName="Langkawi" />

      {/* 20. Exit Capture trigger modal */}
      <ExitIntentModal whatsappUrl={exitIntentWaUrl} destinationName="Langkawi" />
    </div>
  );
}
