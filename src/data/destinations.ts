import { kashmirData } from "@/lib/kashmir/data";
import { sikkimData } from "@/lib/sikkim/data";
import { singaporeData } from "@/lib/singapore/data";

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
      canonical: "https://www.outboundtravelers.com/international/singapore-tour-packages",
      ogImage: singaporeData.meta.ogImage,
    },
  },
};

