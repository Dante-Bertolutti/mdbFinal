import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title:
    "Web Development & IT Services in Kelowna, BC | MDB Development",
  description:
    "MDB Development & IT Services provides custom web development, responsive website design, web hosting, IT support, and computer repairs for small businesses in Kelowna, BC and across the Okanagan. Contact Dante & Milan Bertolutti today.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Web Development & IT Services in Kelowna, BC | MDB Development",
    description:
      "Custom websites, app development, hosting, IT support & computer repairs for Kelowna businesses. 8+ years experience.",
    url: "https://mdbdevelopment.com",
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MDB Development & IT Services – Kelowna Web Development",
  description:
    "Professional web development, app development, web hosting, IT support, and computer repairs for small businesses in Kelowna, BC and the Okanagan Valley.",
  url: "https://mdbdevelopment.com",
  isPartOf: {
    "@type": "WebSite",
    name: "MDB Development & IT Services",
    url: "https://mdbdevelopment.com",
  },
  about: {
    "@type": "LocalBusiness",
    name: "MDB Development & IT Services",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kelowna",
      addressRegion: "BC",
      addressCountry: "CA",
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mdbdevelopment.com" },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <Hero />
      <FeaturesGrid />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
