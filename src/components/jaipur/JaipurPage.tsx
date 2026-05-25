"use client";

import React from "react";
import { jaipurData } from "@/lib/jaipur/data";
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

// Jaipur Local Components
import Hero from "./Hero";
import RoyalJaipurStory from "./RoyalJaipurStory";
import HeritageHaveliExperience from "./HeritageHaveliExperience";
import HoneymoonPhotoModule from "./HoneymoonPhotoModule";
import TopExperiences from "./TopExperiences";
import ShoppingCraftCulture from "./ShoppingCraftCulture";
import PackageShowcase from "./PackageShowcase";
import ItineraryStoryFlow from "./ItineraryStoryFlow";
import CostEstimator from "./CostEstimator";

export default function JaipurPage() {
  const finalCtaWaUrl = buildWhatsAppUrl(
    jaipurData.whatsapp.number,
    jaipurData.whatsapp.finalCtaMessage
  );
  const stickyCtaWaUrl = buildWhatsAppUrl(
    jaipurData.whatsapp.number,
    jaipurData.whatsapp.stickyMessage
  );
  const floaterWaUrl = buildWhatsAppUrl(
    jaipurData.whatsapp.number,
    jaipurData.whatsapp.floaterMessage
  );
  const exitIntentWaUrl = buildWhatsAppUrl(
    jaipurData.whatsapp.number,
    jaipurData.whatsapp.heroMessage
  );

  return (
    <div
      data-destination="jaipur"
      className="min-h-screen bg-[#FAF8F2] text-[#0F172A] font-sans selection:bg-[#0B3D2E] selection:text-[#FAF8F2] relative overflow-hidden"
    >
      <Hero />
      <RoyalJaipurStory />
      <HeritageHaveliExperience />
      <HoneymoonPhotoModule />
      <TopExperiences />
      <ShoppingCraftCulture />
      <PackageShowcase />
      <ItineraryStoryFlow />
      <CostEstimator />

      {/* Shared Planning Process — themed wrapper */}
      <div className="bg-[#FAF8F2] py-24 border-b border-[#DCE7DD]">
        <PlanningProcess
          steps={jaipurData.process}
          accentColor={jaipurData.theme.accentColor}
        />
      </div>

      {/* Shared Testimonials — emerald heritage framing */}
      <div className="bg-[#EFE7DA] py-24 relative border-b border-[#DCE7DD]">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230B3D2E' fill-opacity='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z M30 10L50 30L30 50L10 30Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="text-center mb-16 relative z-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-bold">
            Traveler Chronicles
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0F172A] mt-4">
            Royal <span className="italic text-[#0B3D2E]">Memories</span>
          </h2>
        </div>
        <div className="relative z-10">
          <TestimonialCarousel testimonials={jaipurData.testimonials} />
        </div>
      </div>

      {/* FAQs — Dark Emerald with white text */}
      <div className="bg-[#052E16] py-24 border-b border-[#0B3D2E]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-[#FAF8F2]">
          <FAQAccordion
            title="Royal Jaipur FAQs"
            faqs={jaipurData.faqs}
            textColor="text-[#FAF8F2]"
            answerColor="text-[#D1D5DB]"
            borderColor="border-[#0B3D2E]"
            accentColor="text-[#C6A15B]"
          >
            <a
              href={finalCtaWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#C6A15B] hover:text-[#FAF8F2] transition-colors"
            >
              Have a custom heritage query? Speak to us on WhatsApp
            </a>
          </FAQAccordion>
        </div>
      </div>

      {/* Related Destinations */}
      <div className="bg-[#FAF8F2]">
        <RelatedDestinations destinations={jaipurData.relatedDestinations} />
      </div>

      {/* Modals & Overlays */}
      <LeadFormModalController />

      <StickyMobileCTA
        accentColor={jaipurData.theme.accentColor}
        phoneNumber={jaipurData.whatsapp.number}
        whatsappUrl={stickyCtaWaUrl}
        formEventName="openLeadForm"
      />

      <WhatsAppFloatingButton
        whatsappUrl={floaterWaUrl}
        accentColor={jaipurData.theme.accentColor}
        destinationName="Jaipur"
      />

      <ExitIntentModal
        whatsappUrl={exitIntentWaUrl}
        destinationName="Jaipur"
      />
    </div>
  );
}
