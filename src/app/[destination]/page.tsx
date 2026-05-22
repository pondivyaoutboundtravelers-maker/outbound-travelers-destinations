import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinationsConfig } from "@/data/destinations";
import { destinationRegistry } from "@/lib/destinationRegistry";

type Props = {
  params: { destination: string };
};

// Generate static params for all destinations (required for static exports)
export async function generateStaticParams() {
  return Object.keys(destinationsConfig).map((key) => ({
    destination: key,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const destKey = params.destination.toLowerCase();
  const config = destinationsConfig[destKey];

  if (!config) {
    return {
      title: "Page Not Found",
      description: "The requested destination packages could not be found.",
    };
  }

  return {
    title: config.seo.title,
    description: config.seo.description,
    alternates: {
      canonical: config.seo.canonical,
    },
    openGraph: {
      title: config.seo.title,
      description: config.seo.description,
      url: config.seo.canonical,
      images: [
        {
          url: config.seo.ogImage,
          width: 1200,
          height: 630,
          alt: `${config.title} Outbound Travelers`,
        },
      ],
    },
  };
}

export default function DestinationPage({ params }: Props) {
  const destKey = params.destination.toLowerCase();
  const Component = destinationRegistry[destKey];

  if (!Component) {
    notFound();
  }

  return <Component />;
}
