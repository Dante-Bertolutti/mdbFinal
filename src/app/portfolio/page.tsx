import type { Metadata } from "next";
import PortfolioShowcase from "@/components/portfolio/PortfolioShowcase";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import StarRating from "@/components/ui/StarRating";
import { testimonials } from "@/data/testimonials";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Our Work – Web Development Portfolio | Kelowna, BC",
  description:
    "View our web development portfolio — custom client portals, e-commerce platforms, corporate websites, and more. See real results from businesses we've helped in Kelowna, BC and beyond.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Our Work | MDB Development & IT Services – Kelowna, BC",
    description:
      "Portfolio of custom web development projects delivered by MDB Development in Kelowna, BC. Real projects, real results.",
    url: "https://mdbdevelopment.com/portfolio",
  },
};

const fifthAvenueGallery = [
  {
    title: "Cinematic Hero",
    description:
      "Full-screen video hero with rotating development messaging and dual calls-to-action guiding visitors into the portfolio.",
    src: "/5th Ave/5th_Ave_Hero.png",
  },
  {
    title: "Property Spotlights",
    description:
      "WordPress-powered grid that showcases marquee developments and keeps imagery, copy, and links perfectly in sync.",
    src: "/5th Ave/5th_Ave_Properties.png",
  },
  {
    title: "Regional Footprint",
    description:
      "Scroll-triggered region cards share market stats and reinforce Fifth Avenue's North American presence.",
    src: "/5th Ave/5th_Ave_Regions.png",
  },
  {
    title: "Contact Funnel",
    description:
      "Split layout surfaces headquarters details, property contacts, and smart search so prospects reach the right team instantly.",
    src: "/5th Ave/5th_Ave_Contact.png",
  },
];

const highmarkGallery = [
  {
    title: "Professional Landing",
    description:
      "Clean, authoritative hero section establishing trust and credibility for corporate financial planning services across BC, AB, and ON.",
    src: "/Highmark/hero.jpeg",
  },
  {
    title: "Service Overview",
    description:
      "Comprehensive service cards covering buy-sell insurance, business succession planning, key person insurance, and tax-efficient investments.",
    src: "/Highmark/services.jpeg",
  },
  {
    title: "Advisory Process",
    description:
      "Step-by-step process visualization guiding prospects through the 9-stage advisory journey from initial consultation to ongoing reviews.",
    src: "/Highmark/process.jpg",
  },
  {
    title: "Contact & Consultation",
    description:
      "Streamlined contact form with service interest selection, bot protection, and clear calls-to-action for booking a free consultation.",
    src: "/Highmark/contact.jpeg",
  },
];

const elevatedFramingGallery = [
  {
    title: "Cinematic Hero",
    description:
      "Full-screen hero with dynamic messaging showcasing Elevated Framing's expertise in commercial and residential construction.",
    src: "/ElevatedFraming/Elevatedhero.png",
  },
  {
    title: "Work Showcase",
    description:
      "Portfolio grid highlighting key projects and demonstrating the quality and range of construction services offered.",
    src: "/ElevatedFraming/ElevatedWork.png",
  },
  {
    title: "Contact Section",
    description:
      "Streamlined contact interface making it easy for potential clients to reach out and start their next project.",
    src: "/ElevatedFraming/ElevatedContact.png",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-mdb-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-base font-semibold text-mdb-orange">Portfolio</p>
          <h1 className="mt-2 text-4xl sm:text-6xl font-bold text-white tracking-tight">
            Our Work
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Real projects, real results. Explore our featured work and see how
            we&apos;ve helped businesses grow with custom digital solutions.
          </p>
        </div>
      </section>

      {/* Fifth Avenue Realty Showcase */}
      <PortfolioShowcase
        projectName="Fifth Avenue Realty"
        projectDescription="Headless React experience backed by WordPress so the marketing team can refresh listings, regions, contacts, and CRM-ready lead forms without developer support — while visitors get cinematic storytelling, curated portfolios, and frictionless contact paths."
        embedUrl="https://fifthaveproperties.com/"
        galleryImages={fifthAvenueGallery}
        stackHighlights="React front end, WordPress CMS, cinematic media handling, animated hero carousel, CRM-integrated lead capture, and automated property feeds generating detail pages for 40+ active, future, and legacy developments."
        roleScope="UX strategy, visual direction, component architecture, CMS integration, and deployment orchestration for ongoing marketing autonomy."
        outcomes="Elevated brand presence, faster content updates from WordPress, rich property discovery across dozens of unique project pages, and streamlined CRM-ready contact routing for prospective buyers."
        bgClass="bg-mdb-dark-1"
      />

      {/* Highmark Corporate Solutions Showcase */}
      <PortfolioShowcase
        projectName="Highmark Corporate Solutions"
        projectDescription="A professional corporate financial services website for a Kelowna-based firm specializing in business succession planning, buy-sell insurance, corporate investments, and comprehensive financial planning for business owners across British Columbia, Alberta, and Ontario."
        embedUrl="https://highmarkcorporatesolutions.ca"
        galleryImages={highmarkGallery}
        stackHighlights="Astro framework, Tailwind CSS, React components, PHP contact form backend, Schema.org structured data, SEO-optimized architecture with 16+ service detail pages, and bot-protected lead capture."
        roleScope="Full brand refresh from legacy identity, UX strategy, responsive design, content architecture across 16+ service pages, contact form with spam protection, and deployment with ongoing hosting."
        outcomes="Complete digital rebrand, professional online presence serving 500+ clients, comprehensive service discovery across business succession, insurance, and investment offerings, and streamlined consultation booking."
        bgClass="bg-mdb-dark-2"
      />

      {/* Elevated Framing Showcase */}
      <PortfolioShowcase
        projectName="Elevated Framing"
        projectDescription="A construction company website built to showcase commercial and residential framing projects, generate leads, and establish credibility in the local market with a strong visual identity."
        embedUrl="https://elevatedframing.ca"
        galleryImages={elevatedFramingGallery}
        stackHighlights="Modern web stack, responsive design, optimized image galleries, contact form integration, and SEO-focused architecture."
        roleScope="Design direction, full-stack development, content strategy, and deployment with ongoing maintenance support."
        outcomes="Professional online presence, increased client inquiries, streamlined contact routing, and a platform that grows with the business — resulting in a 40% increase in sales."
        bgClass="bg-mdb-dark-1"
      />

      {/* Testimonials */}
      <section className="bg-mdb-dark-2 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Client Testimonials"
            heading="What our clients say"
            description="Don't just take our word for it — hear from the businesses we've helped."
          />

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {testimonials.map((t) => (
              <AnimateOnScroll key={t.name}>
                <div className="rounded-lg bg-mdb-dark-3 border border-mdb-dark-3 p-6 shadow-lg transition-all duration-200 ease-in-out hover:border-mdb-orange hover:-translate-y-0.5 hover:shadow-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mdb-orange">
                      <span className="text-white font-bold text-lg">
                        {t.initials}
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">
                        {t.name}
                      </h3>
                      <p className="text-mdb-orange text-sm">{t.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 leading-relaxed">
                    <p>&ldquo;{t.quote}&rdquo;</p>
                  </blockquote>
                  <div className="mt-4">
                    <StarRating rating={t.rating} />
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-mdb-dark-1 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "6+", label: "Projects Completed" },
              { value: "8", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "3x", label: "Avg. Inquiry Increase" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-mdb-orange">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Let's build your next project"
        description="Ready to see results like these? Get in touch and let's discuss your vision."
        primaryText="Start Your Project"
        secondaryText="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
