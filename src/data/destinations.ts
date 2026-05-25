import { kashmirData } from "@/lib/kashmir/data";
import { sikkimData } from "@/lib/sikkim/data";
import { singaporeData } from "@/lib/singapore/data";
import { andamanData } from "@/lib/andaman/data";
import { delhiData } from "@/lib/delhi/data";
import { agraData } from "@/lib/agra/data";
import { jaipurData } from "@/lib/jaipur/data";
import { dubaiData } from "@/lib/dubai/data";
import { maldivesData } from "@/lib/maldives/data";
import { nepalData } from "@/lib/nepal/data";

export interface DestinationSEO {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogTitle?: string;
  ogDescription?: string;
}

export interface DestinationConfig {
  id: string;
  title: string;
  description: string;
  heroImage: string;
  themeColor: string;
  seo: DestinationSEO;
}

export const destinationsConfig: Record<string, DestinationConfig> = {
  kashmir: {
    id: "kashmir",
    title: "Kashmir Tour Packages",
    description: kashmirData.meta.description,
    heroImage: "/images/kashmir/hero.jpg",
    themeColor: "#1F6E3F",
    seo: {
      title: kashmirData.meta.title,
      description: kashmirData.meta.description,
      canonical: "https://www.outboundtravelers.com/kashmir",
      ogImage: kashmirData.meta.ogImage,
    },
  },
  sikkim: {
    id: "sikkim",
    title: "Sikkim Tour Packages",
    description: sikkimData.meta.description,
    heroImage: "/images/sikkim/hero.jpg",
    themeColor: "#0c4a6e",
    seo: {
      title: sikkimData.meta.title,
      description: sikkimData.meta.description,
      canonical: "https://www.outboundtravelers.com/sikkim",
      ogImage: sikkimData.meta.ogImage,
    },
  },
  meghalaya: {
    id: "meghalaya",
    title: "Meghalaya Tour Packages",
    description:
      "Discover off-beat luxury in Meghalaya. Explore Dawki river, living root bridges, and Shillong with our bespoke cinematic tour packages.",
    heroImage: "/images/meghalaya/hero.jpg",
    themeColor: "#0e7490",
    seo: {
      title: "Premium Meghalaya Tour Packages | Outbound Travelers",
      description:
        "Discover off-beat luxury in Meghalaya. Explore Dawki river, living root bridges, and Shillong with our bespoke cinematic tour packages.",
      canonical: "https://www.outboundtravelers.com/meghalaya",
      ogImage: "/images/meghalaya/hero.jpg",
    },
  },
  malaysia: {
    id: "malaysia",
    title: "Malaysia Tour Packages",
    description:
      "Plan your easy first international trip to Malaysia. Direct flights from Bangalore, Chennai, Kochi. 30 days visa-free. Custom family & honeymoon packages.",
    heroImage: "/images/malaysia/hero.jpg",
    themeColor: "#0E7490",
    seo: {
      title: "Premium Malaysia Tour Packages | Visa-Free 30 Days | Outbound Travelers",
      description:
        "Plan your easy first international trip to Malaysia. Direct flights from Bangalore, Chennai, Kochi. 30 days visa-free. Custom family & honeymoon packages.",
      canonical: "https://www.outboundtravelers.com/malaysia",
      ogImage: "/images/malaysia/hero.jpg",
    },
  },
  thailand: {
    id: "thailand",
    title: "Thailand Tour Packages",
    description: "Explore Bangkok nightlife, Phuket beaches, Krabi cliffs, and Phi Phi islands. Luxury family and honeymoon travel experiences across Thailand.",
    heroImage: "/images/thailand/hero.jpg",
    themeColor: "#0891B2",
    seo: {
      title: "Premium Thailand Tour Packages | Luxury Travel | Outbound Travelers",
      description: "Luxury Thailand tours with Bangkok nightlife, Phuket beaches, Krabi cliffs, and Phi Phi island adventures. Family & honeymoon packages.",
      canonical: "https://www.outboundtravelers.com/thailand",
      ogImage: "/images/thailand/hero.jpg",
    },
  },
  "phu-quoc": {
    id: "phu-quoc",
    title: "Phu Quoc Tour Packages",
    description: "Quiet luxury honeymoon island experience in Vietnam. The ultimate premium Bali alternative with Sao Beach white sands, world's longest sea cable car, and JW Marriott luxury.",
    heroImage: "/images/phu-quoc/hero.jpg",
    themeColor: "#0D9488",
    seo: {
      title: "Premium Phu Quoc Tour Packages | quiet luxury Honeymoon | Outbound Travelers",
      description: "Discover Phu Quoc, Vietnam's premium quiet luxury honeymoon island. Indulge in Sao Beach white sands, the longest sea cable car, and top beachfront resorts.",
      canonical: "https://www.outboundtravelers.com/phu-quoc",
      ogImage: "/images/phu-quoc/hero.jpg",
    },
  },
  rajasthan: {
    id: "rajasthan",
    title: "Rajasthan Tour Packages",
    description: "Experience the royal majesty of Jaipur, Udaipur, Jodhpur, and Jaisalmer. Reimagined heritage tours with vetted palace stays, dunes sunset, and private lakeside dinners.",
    heroImage: "/images/rajasthan/hero.jpg",
    themeColor: "#5B2147",
    seo: {
      title: "Premium Rajasthan Tour Packages | Contemporary Royal India | Outbound Travelers",
      description: "Luxury Sabyasachi-style heritage circuits in Rajasthan featuring Taj and Rambagh palace stays, Udaipur sunset yacht cruise, Jaisalmer dunes, and 24/7 royal concierge support.",
      canonical: "https://www.outboundtravelers.com/rajasthan",
      ogImage: "/images/rajasthan/hero.jpg",
    },
  },
  vietnam: {
    id: "vietnam",
    title: "Vietnam Tour Packages",
    description: "Discover a contemporary cultural luxury Vietnam experience. Explore Capella Hanoi, luxury Ha Long cruises, lantern-lit Hội An, Sapa mountains, and Indochina legacy.",
    heroImage: "/images/vietnam/hero.jpg",
    themeColor: "#1F5F5B",
    seo: {
      title: "Premium Vietnam Tour Packages | Contemporary Cultural Luxury | Outbound Travelers",
      description: "Indulge in tailored Vietnam cultural circuits. Stay in Capella Hanoi and InterContinental Danang, with private Ha Long cruises and 24/7 destination support.",
      canonical: "https://www.outboundtravelers.com/vietnam",
      ogImage: "/images/vietnam/hero.jpg",
    },
  },
  singapore: {
    id: "singapore",
    title: "Singapore Tour Packages",
    description: singaporeData.meta.description,
    heroImage: "/images/singapore/hero-desktop.jpg",
    themeColor: "#DC2626",
    seo: {
      title: singaporeData.meta.title,
      description: singaporeData.meta.description,
      canonical: "https://www.outboundtravelers.com/singapore",
      ogImage: singaporeData.meta.ogImage,
    },
  },
  andaman: {
    id: "andaman",
    title: "Andaman Tour Packages",
    description: andamanData.meta.description,
    heroImage: "/images/andaman/hero-desktop.jpg",
    themeColor: "#0B3C5D",
    seo: {
      title: andamanData.meta.title,
      description: andamanData.meta.description,
      canonical: "https://www.outboundtravelers.com/andaman",
      ogImage: andamanData.meta.ogImage,
    },
  },
  langkawi: {
    id: "langkawi",
    title: "Langkawi Tour Packages",
    description:
      "Discover Langkawi's stunning beaches, cable cars, and island hopping. Luxury and honeymoon packages from South India.",
    heroImage: "/images/langkawi/hero.jpg",
    themeColor: "#0E7490",
    seo: {
      title: "Premium Langkawi Tour Packages | Island Luxury | Outbound Travelers",
      description:
        "Explore Langkawi's pristine beaches, Langkawi Sky Bridge, island hopping, and duty-free shopping. Custom honeymoon and family packages.",
      canonical: "https://www.outboundtravelers.com/langkawi",
      ogImage: "/images/langkawi/hero.jpg",
    },
  },
  delhi: {
    id: "delhi",
    title: "Delhi Tour Packages",
    description: delhiData.meta.description,
    heroImage: "/images/delhi/hero.jpg",
    themeColor: "#7C2D12",
    seo: {
      title: delhiData.meta.title,
      description: delhiData.meta.description,
      canonical: "https://www.outboundtravelers.com/delhi",
      ogImage: delhiData.meta.ogImage,
    },
  },
  agra: {
    id: "agra",
    title: "Agra Tour Packages",
    description: agraData.meta.description,
    heroImage: "/images/agra/hero.jpg",
    themeColor: "#0B3D2E",
    seo: {
      title: agraData.meta.title,
      description: agraData.meta.description,
      canonical: "https://www.outboundtravelers.com/agra",
      ogImage: agraData.meta.ogImage,
    },
  },
  jaipur: {
    id: "jaipur",
    title: "Jaipur Tour Packages",
    description: jaipurData.meta.description,
    heroImage: "/images/jaipur/hero.jpg",
    themeColor: "#0B3D2E",
    seo: {
      title: jaipurData.meta.title,
      description: jaipurData.meta.description,
      canonical: "https://www.outboundtravelers.com/jaipur",
      ogImage: jaipurData.meta.ogImage,
    },
  },
  dubai: {
    id: "dubai",
    title: "Dubai Tour Packages",
    description: dubaiData.meta.description,
    heroImage: "/images/dubai/hero.jpg",
    themeColor: "#050816",
    seo: {
      title: dubaiData.meta.title,
      description: dubaiData.meta.description,
      canonical: "https://www.outboundtravelers.com/dubai",
      ogImage: dubaiData.meta.ogImage,
    },
  },
  maldives: {
    id: "maldives",
    title: "Maldives Tour Packages",
    description: maldivesData.meta.description,
    heroImage: "/images/maldives/hero.jpg",
    themeColor: "#0B3D2E",
    seo: {
      title: maldivesData.meta.title,
      description: maldivesData.meta.description,
      canonical: "https://www.outboundtravelers.com/maldives",
      ogImage: maldivesData.meta.ogImage,
    },
  },
  nepal: {
    id: "nepal",
    title: "Nepal Tour Packages",
    description: nepalData.meta.description,
    heroImage: "/images/nepal/hero.jpg",
    themeColor: "#0B3D2E",
    seo: {
      title: nepalData.meta.title,
      description: nepalData.meta.description,
      canonical: "https://www.outboundtravelers.com/nepal",
      ogImage: nepalData.meta.ogImage,
    },
  },
};
