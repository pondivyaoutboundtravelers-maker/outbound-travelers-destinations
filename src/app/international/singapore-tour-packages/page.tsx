import React from 'react'
import type { Metadata } from 'next'
import SingaporePage from '@/components/singapore/SingaporePage'
import { singaporeData } from '@/lib/singapore/data'

export const metadata: Metadata = {
  title: singaporeData.meta.title,
  description: singaporeData.meta.description,
  alternates: {
    canonical: singaporeData.meta.canonical,
  },
  openGraph: {
    title: singaporeData.meta.title,
    description: singaporeData.meta.description,
    url: singaporeData.meta.canonical,
    images: [
      {
        url: singaporeData.meta.ogImage,
        width: 1200,
        height: 630,
        alt: 'Singapore Tour Packages Outbound Travelers',
      },
    ],
  },
}

export default function Page() {
  return <SingaporePage />
}
