import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default:
      "MDB Development & IT Services | Web Development & IT Support in Kelowna, BC",
    template: "%s | MDB Development & IT Services – Kelowna, BC",
  },
  description:
    "Kelowna's trusted web development & IT services company. Custom websites, app development, web hosting, business email, IT support, and computer repairs for small businesses in Kelowna, BC and the Okanagan. Run by Dante & Milan Bertolutti.",
  keywords: [
    "web development Kelowna",
    "web developer Kelowna BC",
    "website design Kelowna",
    "IT services Kelowna",
    "IT support Kelowna",
    "computer repair Kelowna",
    "web hosting Kelowna",
    "app development Kelowna",
    "custom web applications Kelowna",
    "small business IT Kelowna",
    "business email services Kelowna",
    "website maintenance Kelowna",
    "SEO Kelowna",
    "Okanagan web development",
    "Kelowna web design company",
    "MDB Development",
    "responsive website design BC",
    "e-commerce development Kelowna",
    "IT callout Kelowna",
    "managed web hosting BC",
  ],
  authors: [
    { name: "Dante Bertolutti" },
    { name: "Milan Bertolutti" },
  ],
  creator: "MDB Development & IT Services",
  publisher: "MDB Development & IT Services",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://mdbdevelopment.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MDB Development & IT Services | Kelowna, BC",
    description:
      "Custom web development, hosting, IT support & computer repairs for small businesses in Kelowna, BC. 8+ years experience, 6+ projects delivered.",
    url: "https://mdbdevelopment.com",
    siteName: "MDB Development & IT Services",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MDB Development & IT Services | Kelowna, BC",
    description:
      "Custom web development, hosting, IT support & computer repairs for small businesses in Kelowna and the Okanagan.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

// JSON-LD structured data for the organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mdbdevelopment.com/#organization",
  name: "MDB Development & IT Services",
  url: "https://mdbdevelopment.com",
  logo: "https://mdbdevelopment.com/favicon.ico",
  description:
    "Professional web development, app development, hosting, IT support, and computer repairs for small businesses in Kelowna, BC and the Okanagan.",
  telephone: ["+12507188479", "+12507180202"],
  email: "contact@mdbdevelopment.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kelowna",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.8880,
    longitude: -119.4960,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Kelowna",
      containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" },
    },
    {
      "@type": "City",
      name: "West Kelowna",
    },
    {
      "@type": "City",
      name: "Penticton",
    },
    {
      "@type": "AdministrativeArea",
      name: "Okanagan",
    },
  ],
  founder: [
    { "@type": "Person", name: "Dante Bertolutti", jobTitle: "Co-Founder & Developer" },
    { "@type": "Person", name: "Milan Bertolutti", jobTitle: "Co-Founder & Developer" },
  ],
  foundingDate: "2018",
  numberOfEmployees: "2",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: ["https://github.com/Dante-Bertolutti"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development & IT Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Custom Web Application Development", description: "Tailored web apps built with modern technologies for businesses in Kelowna and the Okanagan." },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Responsive Website Design", description: "Mobile-first websites optimized for SEO and performance." },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Web Hosting & Maintenance", description: "Reliable managed hosting with SSL, daily backups, and 24/7 monitoring." },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "IT Support & Computer Repairs", description: "On-site and remote IT support for small businesses in Kelowna, BC." },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Business Email Services", description: "Professional domain email setup and management." },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
