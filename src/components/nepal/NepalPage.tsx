"use client";
import React from "react";
import { nepalData } from "@/lib/nepal/data";
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
import NepalExperienceLayers from "./NepalExperienceLayers";
import EverestAdventureModule from "./EverestAdventureModule";
import PokharaSerenity from "./PokharaSerenity";
import KathmanduHeritage from "./KathmanduHeritage";
import ResortShowcase from "./ResortShowcase";
import NepalRouteJourney from "./NepalRouteJourney";
import PackageShowcase from "./PackageShowcase";
import ItineraryStoryFlow from "./ItineraryStoryFlow";
import CostEstimator from "./CostEstimator";

export default function NepalPage() {
  const stickyCtaWaUrl = buildWhatsAppUrl(nepalData.whatsapp.number, nepalData.whatsapp.stickyMessage);
  const floaterWaUrl = buildWhatsAppUrl(nepalData.whatsapp.number, nepalData.whatsapp.floaterMessage);
  const exitIntentWaUrl = buildWhatsAppUrl(nepalData.whatsapp.number, nepalData.whatsapp.heroMessage);
  const finalCtaWaUrl = buildWhatsAppUrl(nepalData.whatsapp.number, nepalData.whatsapp.finalCtaMessage);

  return (
    <div data-destination="nepal" className="min-h-screen bg-[#FAF7F2] text-[#0F172A] font-sans selection:bg-[#0B3D2E] selection:text-[#D97706] relative overflow-hidden">
      <Hero />
      <NepalExperienceLayers />
      <EverestAdventureModule />
      <PokharaSerenity />
      <KathmanduHeritage />
      <ResortShowcase />
      <NepalRouteJourney />
      <PackageShowcase />
      <ItineraryStoryFlow />
      <CostEstimator />

      <div className="bg-[#FAF7F2] py-24 border-b border-[#DCE7DD]">
        <PlanningProcess steps={nepalData.process} accentColor="#0B3D2E" />
      </div>

      <div className="bg-[#F5EFE2] py-24 relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='20' fill='none' stroke='%23D97706' stroke-width='0.3'/%3E%3C/svg%3E")`, backgroundSize: '50px 50px' }} />
        <div className="text-center mb-16 relative z-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D97706] font-bold">Traveler Stories</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0F172A] mt-4">Himalayan <span className="italic text-[#0B3D2E]">Memories</span></h2>
        </div>
        <div className="relative z-10"><TestimonialCarousel testimonials={nepalData.testimonials} /></div>
      </div>

      <div className="bg-[#052E16] py-24 border-b border-[#0B3D2E]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-[#FAF7F2]">
          <FAQAccordion title="Nepal Travel FAQs" faqs={nepalData.faqs} textColor="text-[#FAF7F2]" answerColor="text-[#D1D5DB]" borderColor="border-[#0B3D2E]" accentColor="text-[#D97706]">
            <a href={finalCtaWaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#D97706] hover:text-[#FAF7F2] transition-colors">
              Have a custom Nepal query? Speak to us on WhatsApp
            </a>
          </FAQAccordion>
        </div>
      </div>

      <div className="bg-[#FAF7F2]"><RelatedDestinations destinations={nepalData.relatedDestinations} /></div>

      <LeadFormModalController />
      <StickyMobileCTA accentColor="#0B3D2E" phoneNumber={nepalData.whatsapp.number} whatsappUrl={stickyCtaWaUrl} formEventName="openLeadForm" />
      <WhatsAppFloatingButton whatsappUrl={floaterWaUrl} accentColor="#0B3D2E" destinationName="Nepal" />
      <ExitIntentModal whatsappUrl={exitIntentWaUrl} destinationName="Nepal" />
    </div>
  );
}
