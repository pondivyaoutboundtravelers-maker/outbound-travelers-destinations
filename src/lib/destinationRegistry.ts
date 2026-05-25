import dynamic from "next/dynamic";
import React from "react";

export const destinationRegistry: Record<string, React.ComponentType<any>> = {
  kashmir: dynamic(() => import("@/components/kashmir/KashmirPage"), {
    ssr: true,
  }),
  sikkim: dynamic(() => import("@/components/sikkim/SikkimPage"), {
    ssr: true,
  }),
  meghalaya: dynamic(() => import("@/components/meghalaya/MeghalayaPage"), {
    ssr: true,
  }),
  malaysia: dynamic(() => import("@/components/malaysia/MalaysiaPage"), {
    ssr: true,
  }),
  thailand: dynamic(() => import("@/components/thailand/ThailandPage"), {
    ssr: true,
  }),
  "phu-quoc": dynamic(() => import("@/components/phu-quoc/PhuQuocPage"), {
    ssr: true,
  }),
  rajasthan: dynamic(() => import("@/components/rajasthan/RajasthanPage"), {
    ssr: true,
  }),
  vietnam: dynamic(() => import("@/components/vietnam/VietnamPage"), {
    ssr: true,
  }),
  singapore: dynamic(() => import("@/components/singapore/SingaporePage"), {
    ssr: true,
  }),
  andaman: dynamic(() => import("@/components/andaman/AndamanPage"), {
    ssr: true,
  }),
  langkawi: dynamic(() => import("@/components/langkawi/LangkawiPage"), {
    ssr: true,
  }),
  delhi: dynamic(() => import("@/components/delhi/DelhiPage"), {
    ssr: true,
  }),
  agra: dynamic(() => import("@/components/agra/AgraPage"), {
    ssr: true,
  }),
  jaipur: dynamic(() => import("@/components/jaipur/JaipurPage"), {
    ssr: true,
  }),
  dubai: dynamic(() => import("@/components/dubai/DubaiPage"), {
    ssr: true,
  }),
  maldives: dynamic(() => import("@/components/maldives/MaldivesPage"), {
    ssr: true,
  }),
  nepal: dynamic(() => import("@/components/nepal/NepalPage"), {
    ssr: true,
  }),
};
