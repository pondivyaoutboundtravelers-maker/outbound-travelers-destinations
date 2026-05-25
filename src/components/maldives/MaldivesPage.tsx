"use client";
import React from "react";
import { maldivesData } from "@/lib/maldives/data";
import { buildWhatsAppUrl } from "@/lib/shared/whatsapp";

import LeadFormModalController from "./LeadFormModalController";
import StickyMobileCTA from "@/components/shared/StickyMobileCTA";
import WhatsAppFloatingButton from "@/components/shared/WhatsAppFloatingButton";
import ExitIntentModal from "@/components/shared/ExitIntentModal";
import FAQAccordion from "@/components/shared/FAQAccordion";
import PlanningProcess from "@/components/shared/PlanningProcess";
import TestimonialCarousel from "@/components/shared/TestimonialCarousel";
import RelatedDestinations from "@/components/shared/RelatedDestinations";

import Hero from "./Hero";
import IslandExperience from "./IslandExperience";
import OverwaterVillaModule from "./OverwaterVillaModule";
import HoneymoonCinematic from "./HoneymoonCinematic";
import OceanAdventure from "./OceanAdventure";
import ResortShowcase from "./ResortShowcase";
import IslandRouteJourney from "./IslandRouteJourney";
import PackageShowcase from "./PackageShowcase";
import ItineraryStoryFlow from "./ItineraryStoryFlow";
import CostEstimator from "./CostEstimator";

export default function MaldivesPage() {
  const stickyCtaWaUrl = buildWhatsAppUrl(maldivesData.whatsapp.number, maldivesData.whatsapp.stickyMessage);
  const floaterWaUrl = buildWhatsAppUrl(maldivesData.whatsapp.number, maldivesData.whatsapp.floaterMessage);
  const exitIntentWaUrl = buildWhatsAppUrl(maldivesData.whatsapp.number, maldivesData.whatsapp.heroMessage);
  const finalCtaWaUrl = buildWhatsAppUrl(maldivesData.whatsapp.number, maldivesData.whatsapp.finalCtaMessage);

  return (
    <div data-destination="maldives" className="min-h-screen bg-[#FAF7F2] text-[#0F172A] font-sans selection:bg-[#0B3D2E] selection:text-[#06B6D4] relative overflow-hidden">
      <Hero />
      <IslandExperience />
      <OverwaterVillaModule />
      <HoneymoonCinematic />
      <OceanAdventure />
      <ResortShowcase />
      <IslandRouteJourney />
      <PackageShowcase />
      <ItineraryStoryFlow />
      <CostEstimator />

      <div className="bg-[#FAF7F2] py-24 border-b border-[#DCE7DD]">
        <PlanningProcess steps={maldivesData.process} accentColor="#0B3D2E" />
      </div>

      <div className="bg-[#F5EFE2] py-24 relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='30' viewBox='0 0 60 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15 Q15 5 30 15 Q45 25 60 15' fill='none' stroke='%2306B6D4' stroke-width='0.3'/%3E%3C/svg%3E")`, backgroundSize: '60px 30px' }} />
        <div className="text-center mb-16 relative z-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#06B6D4] font-bold">Traveler Stories</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0F172A] mt-4">Paradise <span className="italic text-[#0B3D2E]">Memories</span></h2>
        </div>
        <div className="relative z-10"><TestimonialCarousel testimonials={maldivesData.testimonials} /></div>
      </div>

      <div className="bg-[#052E16] py-24 border-b border-[#0B3D2E]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-[#FAF7F2]">
          <FAQAccordion title="Maldives Travel FAQs" faqs={maldivesData.faqs} textColor="text-[#FAF7F2]" answerColor="text-[#D1D5DB]" borderColor="border-[#0B3D2E]" accentColor="text-[#06B6D4]">
            <a href={finalCtaWaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#06B6D4] hover:text-[#FAF7F2] transition-colors">
              Have a custom island query? Speak to us on WhatsApp
            </a>
          </FAQAccordion>
        </div>
      </div>

      <div className="bg-[#FAF7F2]"><RelatedDestinations destinations={maldivesData.relatedDestinations} /></div>

      <LeadFormModalController />
      <StickyMobileCTA accentColor="#0B3D2E" phoneNumber={maldivesData.whatsapp.number} whatsappUrl={stickyCtaWaUrl} formEventName="openLeadForm" />
      <WhatsAppFloatingButton whatsappUrl={floaterWaUrl} accentColor="#0B3D2E" destinationName="Maldives" />
      <ExitIntentModal whatsappUrl={exitIntentWaUrl} destinationName="Maldives" />
    </div>
  );
}
