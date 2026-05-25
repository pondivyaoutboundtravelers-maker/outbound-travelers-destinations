"use client";

import React from "react";
import { agraData } from "@/lib/agra/data";
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

// Agra Local Components
import Hero from "./Hero";
import TajSunriseExperience from "./TajSunriseExperience";
import HoneymoonPhotoshoot from "./HoneymoonPhotoshoot";
import MughalHeritageExperiences from "./MughalHeritageExperiences";
import MehtabBaghSunset from "./MehtabBaghSunset";
import PackageShowcase from "./PackageShowcase";
import ItineraryStoryFlow from "./ItineraryStoryFlow";
import CostEstimator from "./CostEstimator";

export default function AgraPage() {
  const finalCtaWaUrl = buildWhatsAppUrl(
    agraData.whatsapp.number,
    agraData.whatsapp.finalCtaMessage
  );
  const stickyCtaWaUrl = buildWhatsAppUrl(
    agraData.whatsapp.number,
    agraData.whatsapp.stickyMessage
  );
  const floaterWaUrl = buildWhatsAppUrl(
    agraData.whatsapp.number,
    agraData.whatsapp.floaterMessage
  );
  const exitIntentWaUrl = buildWhatsAppUrl(
    agraData.whatsapp.number,
    agraData.whatsapp.heroMessage
  );

  return (
    <div
      data-destination="agra"
      className="min-h-screen bg-[#FAFAF7] text-[#0F172A] font-sans selection:bg-[#0B3D2E] selection:text-[#FAFAF7] relative overflow-hidden"
    >
      <Hero />
      <TajSunriseExperience />
      <HoneymoonPhotoshoot />
      <MughalHeritageExperiences />
      <MehtabBaghSunset />
      <PackageShowcase />
      <ItineraryStoryFlow />
      <CostEstimator />
      
      {/* Shared Planning Process */}
      <div className="bg-[#FAFAF7] py-24 border-b border-[#DCE7DD]">
        <PlanningProcess
          steps={agraData.process}
          accentColor={agraData.theme.accentColor}
        />
      </div>

      {/* Shared Testimonials - Elegantly framed */}
      <div className="bg-[#F5F1E8] py-24 relative border-b border-[#DCE7DD]">
         <div className="text-center mb-16 relative z-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-bold">
            Traveler Archives
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#052E16] mt-4">
            Ethereal Memories
          </h2>
        </div>
        <div className="relative z-10">
          <TestimonialCarousel testimonials={agraData.testimonials} />
        </div>
      </div>

      {/* FAQs - Dark Emerald Theme */}
      <div className="bg-[#052E16] py-24 border-b border-[#0B3D2E]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-[#FAFAF7]">
          <FAQAccordion
            title="Curated Taj FAQs"
            faqs={agraData.faqs}
            textColor="text-[#FAFAF7]"
            answerColor="text-[#D1D5DB]"
            borderColor="border-[#0B3D2E]"
            accentColor="text-[#C6A15B]"
          >
            <a
              href={finalCtaWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#C6A15B] hover:text-[#FAFAF7] transition-colors"
            >
              Have a specific photography query? Speak to us on WhatsApp
            </a>
          </FAQAccordion>
        </div>
      </div>

      {/* Related Destinations */}
      <div className="bg-[#FAFAF7]">
        <RelatedDestinations destinations={agraData.relatedDestinations} />
      </div>

      {/* Modals & Overlays */}
      <LeadFormModalController />
      
      <StickyMobileCTA
        accentColor={agraData.theme.accentColor}
        phoneNumber={agraData.whatsapp.number}
        whatsappUrl={stickyCtaWaUrl}
        formEventName="openLeadForm"
      />
      
      <WhatsAppFloatingButton
        whatsappUrl={floaterWaUrl}
        accentColor={agraData.theme.accentColor}
        destinationName="Agra"
      />
      
      <ExitIntentModal
        whatsappUrl={exitIntentWaUrl}
        destinationName="Agra"
      />
    </div>
  );
}
