import type { Metadata } from "next";
import {
  CodeBracketIcon,
  GlobeAltIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  EnvelopeIcon,
  ComputerDesktopIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";
import { services, additionalServices } from "@/data/services";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Web Development, IT Support & Hosting Services in Kelowna, BC",
  description:
    "Custom web application development, responsive website design, managed web hosting, business email, IT callouts, and computer repairs for small businesses in Kelowna, BC and the Okanagan Valley. Get a free consultation today.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | MDB Development & IT Services – Kelowna, BC",
    description:
      "Full-service web development, hosting, IT support & computer repairs for Kelowna businesses.",
    url: "https://mdbdevelopment.com/services",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Web Development & IT Services in Kelowna, BC",
  description:
    "Custom web development, hosting, IT support, and computer repair services for Kelowna businesses.",
  url: "https://mdbdevelopment.com/services",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mdbdevelopment.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://mdbdevelopment.com/services" },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Custom Web Application Development" },
      { "@type": "ListItem", position: 2, name: "Responsive Website Design" },
      { "@type": "ListItem", position: 3, name: "Managed Web Hosting" },
      { "@type": "ListItem", position: 4, name: "Website Maintenance & Support" },
      { "@type": "ListItem", position: 5, name: "Business Email Services" },
      { "@type": "ListItem", position: 6, name: "IT Callouts for Small Businesses" },
      { "@type": "ListItem", position: 7, name: "Computer Repairs" },
    ],
  },
};

const iconMap = {
  code: CodeBracketIcon,
  globe: GlobeAltIcon,
  server: ServerIcon,
  wrench: WrenchScrewdriverIcon,
  envelope: EnvelopeIcon,
};

const additionalIconMap = {
  computer: ComputerDesktopIcon,
  phone: PhoneIcon,
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-mdb-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-base font-semibold text-mdb-orange">
            Our Services
          </p>
          <h1 className="mt-2 text-4xl sm:text-6xl font-bold text-white tracking-tight">
            Web Development &amp; IT Services in Kelowna
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions for small businesses in Kelowna, BC
            and the Okanagan — from custom web applications and responsive
            websites to managed hosting, IT callouts, and computer repairs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-mdb-dark-1 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="What We Offer"
            heading="Our Core Services"
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <AnimateOnScroll key={service.id}>
                  <div className="p-8 rounded-2xl bg-mdb-dark-2 border border-gray-800/50 hover:border-mdb-orange/30 transition-all h-full">
                    <div className="h-12 w-12 rounded-lg bg-mdb-orange/10 flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6 text-mdb-orange" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-gray-400">{service.description}</p>
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-gray-300"
                        >
                          <CheckIcon className="h-5 w-5 text-mdb-orange flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-mdb-dark-2 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Additional Services"
            heading="Beyond Web Development"
            description="We also provide hands-on IT support and computer repair services for small businesses."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service) => {
              const Icon = additionalIconMap[service.icon];
              return (
                <AnimateOnScroll key={service.title}>
                  <div className="p-8 rounded-2xl bg-mdb-dark-3 border border-gray-800/50 hover:border-mdb-orange/30 transition-all h-full">
                    <div className="h-12 w-12 rounded-lg bg-mdb-orange/10 flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6 text-mdb-orange" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-gray-400">{service.description}</p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to get started?"
        description="Let's discuss your project requirements and find the right solution for your business."
        primaryText="Contact Us"
        secondaryText="View Our Work"
        secondaryHref="/portfolio"
      />
    </>
  );
}
