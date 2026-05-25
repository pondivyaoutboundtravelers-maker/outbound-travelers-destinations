"use client";

import React from "react";
import { delhiData } from "@/lib/delhi/data";
import { buildWhatsAppUrl } from "@/lib/shared/whatsapp";

// Shared Overlays
import LeadFormModalController from "./LeadFormModalController";
import StickyMobileCTA from "@/components/shared/StickyMobileCTA";
import WhatsAppFloatingButton from "@/components/shared/WhatsAppFloatingButton";
import ExitIntentModal from "@/components/shared/ExitIntentModal";
import FAQAccordion from "@/components/shared/FAQAccordion";
import PlanningProcess from "@/components/shared/PlanningProcess";
import TestimonialCarousel from "@/components/shared/TestimonialCarousel";
import RelatedDestinations from "@/components/shared/RelatedDestinations";

// Delhi Local Components
import Hero from "./Hero";
import EmpiresTimeline from "./EmpiresTimeline";
import GoldenTriangleModule from "./GoldenTriangleModule";
import HeritageExperiences from "./HeritageExperiences";
import OldDelhiFoodWalk from "./OldDelhiFoodWalk";
import PackageShowcase from "./PackageShowcase";
import ItineraryStoryFlow from "./ItineraryStoryFlow";
import CostEstimator from "./CostEstimator";

export default function DelhiPage() {
  const finalCtaWaUrl = buildWhatsAppUrl(
    delhiData.whatsapp.number,
    delhiData.whatsapp.finalCtaMessage
  );
  const stickyCtaWaUrl = buildWhatsAppUrl(
    delhiData.whatsapp.number,
    delhiData.whatsapp.stickyMessage
  );
  const floaterWaUrl = buildWhatsAppUrl(
    delhiData.whatsapp.number,
    delhiData.whatsapp.floaterMessage
  );
  const exitIntentWaUrl = buildWhatsAppUrl(
    delhiData.whatsapp.number,
    delhiData.whatsapp.heroMessage
  );

  return (
    <div
      data-destination="delhi"
      className="min-h-screen bg-[#F8F4EC] text-[#111827] font-sans selection:bg-[#7C2D12] selection:text-[#F8F4EC] relative overflow-hidden"
    >
      <Hero />
      <EmpiresTimeline />
      <GoldenTriangleModule />
      <HeritageExperiences />
      <OldDelhiFoodWalk />
      <PackageShowcase />
      <ItineraryStoryFlow />
      <CostEstimator />
      
      {/* Shared Plannig Process */}
      <div className="bg-[#F8F4EC] py-20 border-b border-[#D4A373]/30">
        <PlanningProcess
          steps={delhiData.process}
          accentColor={delhiData.theme.accentColor}
        />
      </div>

      {/* Shared Testimonials - Archival Postcard styling via background */}
      <div className="bg-[#EADBC8] py-24 relative border-b border-[#D4A373]/30">
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/images/delhi/texture-paper.png')]" />
         <div className="text-center mb-12 relative z-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#B45309] font-bold">
            Traveler Archives
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#111827] mt-2">
            Stories in Stone
          </h2>
        </div>
        <div className="relative z-10">
          <TestimonialCarousel testimonials={delhiData.testimonials} />
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-[#111827] py-24 border-b border-[#2D1606]">
        {/* We invert colors slightly via CSS or trust the shared component adapts to dark bg */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-[#F8F4EC]">
          <FAQAccordion
            title="Heritage Journey FAQs"
            faqs={delhiData.faqs}
            textColor="text-[#F8F4EC]"
            answerColor="text-[#D1D5DB]"
            borderColor="border-[#2D1606]"
            accentColor="text-[#D4A373]"
          >
            <a
              href={finalCtaWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#D4A373] hover:text-[#EADBC8] transition-colors"
            >
              Have a custom architectural query? Speak to us on WhatsApp
            </a>
          </FAQAccordion>
        </div>
      </div>

      {/* Related Destinations */}
      <div className="bg-[#F8F4EC]">
        <RelatedDestinations destinations={delhiData.relatedDestinations} />
      </div>

      {/* Modals & Overlays */}
      <LeadFormModalController />
      
      <StickyMobileCTA
        accentColor={delhiData.theme.accentColor}
        phoneNumber={delhiData.whatsapp.number}
        whatsappUrl={stickyCtaWaUrl}
        formEventName="openLeadForm"
      />
      
      <WhatsAppFloatingButton
        whatsappUrl={floaterWaUrl}
        accentColor={delhiData.theme.accentColor}
        destinationName="Delhi"
      />
      
      <ExitIntentModal
        whatsappUrl={exitIntentWaUrl}
        destinationName="Delhi"
      />
    </div>
  );
}
