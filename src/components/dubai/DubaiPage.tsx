"use client";

import React from "react";
import { dubaiData } from "@/lib/dubai/data";
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

// Dubai Local Components
import Hero from "./Hero";
import DubaiLayersExperience from "./DubaiLayersExperience";
import BurjKhalifaModule from "./BurjKhalifaModule";
import DesertSafariCinematic from "./DesertSafariCinematic";
import DhowCruiseLuxury from "./DhowCruiseLuxury";
import AtlantisThemeParks from "./AtlantisThemeParks";
import AbuDhabiJourney from "./AbuDhabiJourney";
import PackageShowcase from "./PackageShowcase";
import ItineraryStoryFlow from "./ItineraryStoryFlow";
import CostEstimator from "./CostEstimator";

export default function DubaiPage() {
  const stickyCtaWaUrl = buildWhatsAppUrl(dubaiData.whatsapp.number, dubaiData.whatsapp.stickyMessage);
  const floaterWaUrl = buildWhatsAppUrl(dubaiData.whatsapp.number, dubaiData.whatsapp.floaterMessage);
  const exitIntentWaUrl = buildWhatsAppUrl(dubaiData.whatsapp.number, dubaiData.whatsapp.heroMessage);
  const finalCtaWaUrl = buildWhatsAppUrl(dubaiData.whatsapp.number, dubaiData.whatsapp.finalCtaMessage);

  return (
    <div
      data-destination="dubai"
      className="min-h-screen bg-[#FAF7F2] text-[#0F172A] font-sans selection:bg-[#050816] selection:text-[#FACC15] relative overflow-hidden"
    >
      <Hero />
      <DubaiLayersExperience />
      <BurjKhalifaModule />
      <DesertSafariCinematic />
      <DhowCruiseLuxury />
      <AtlantisThemeParks />
      <AbuDhabiJourney />
      <PackageShowcase />
      <ItineraryStoryFlow />
      <CostEstimator />

      {/* Shared Planning Process — themed wrapper */}
      <div className="bg-[#FAF7F2] py-24 border-b border-[#E7D3B3]">
        <PlanningProcess steps={dubaiData.process} accentColor="#CA8A04" />
      </div>

      {/* Shared Testimonials — cinematic wrapper */}
      <div className="bg-[#0F172A] py-24 relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23CA8A04' stroke-width='0.3'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} />
        <div className="text-center mb-16 relative z-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#FACC15] font-bold">Traveler Stories</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#FAF7F2] mt-4">Luxury <span className="italic bg-gradient-to-r from-[#FACC15] to-[#CA8A04] bg-clip-text text-transparent">Memories</span></h2>
        </div>
        <div className="relative z-10">
          <TestimonialCarousel testimonials={dubaiData.testimonials} />
        </div>
      </div>

      {/* FAQs — Dark midnight with ivory text */}
      <div className="bg-[#050816] py-24 border-b border-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-[#FAF7F2]">
          <FAQAccordion
            title="Dubai Travel FAQs"
            faqs={dubaiData.faqs}
            textColor="text-[#FAF7F2]"
            answerColor="text-[#D1D5DB]"
            borderColor="border-[#0F172A]"
            accentColor="text-[#FACC15]"
          >
            <a href={finalCtaWaUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FACC15] hover:text-[#FAF7F2] transition-colors">
              Have a custom Dubai query? Speak to us on WhatsApp
            </a>
          </FAQAccordion>
        </div>
      </div>

      {/* Related Destinations */}
      <div className="bg-[#FAF7F2]">
        <RelatedDestinations destinations={dubaiData.relatedDestinations} />
      </div>

      {/* Modals & Overlays */}
      <LeadFormModalController />
      <StickyMobileCTA accentColor="#CA8A04" phoneNumber={dubaiData.whatsapp.number} whatsappUrl={stickyCtaWaUrl} formEventName="openLeadForm" />
      <WhatsAppFloatingButton whatsappUrl={floaterWaUrl} accentColor="#CA8A04" destinationName="Dubai" />
      <ExitIntentModal whatsappUrl={exitIntentWaUrl} destinationName="Dubai" />
    </div>
  );
}
