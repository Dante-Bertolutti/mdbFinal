import type { Metadata } from "next";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { team, companyInfo } from "@/data/team";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Us – Kelowna Web Developers Dante & Milan Bertolutti",
  description:
    "Meet Dante and Milan Bertolutti — the brothers behind MDB Development & IT Services in Kelowna, BC. 8+ years of experience building custom websites, apps, and providing IT support for small businesses across the Okanagan.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About MDB Development & IT Services – Kelowna, BC",
    description:
      "Kelowna web developers Dante & Milan Bertolutti. 8+ years experience, 6+ successful projects.",
    url: "https://mdbdevelopment.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-mdb-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-base font-semibold text-mdb-orange">About Us</p>
          <h1 className="mt-2 text-4xl sm:text-6xl font-bold text-white tracking-tight">
            Kelowna&apos;s Web Development &amp; IT Team
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Web development and IT services built on trust, expertise, and a
            genuine commitment to helping small businesses in Kelowna, BC and
            across the Okanagan succeed online.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-mdb-dark-1 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                MDB Development & IT Services was founded in Kelowna, BC by
                brothers Dante and Milan Bertolutti with a simple mission: to
                provide small businesses in the Okanagan with the same quality
                of web development and IT support that larger companies enjoy,
                but at a scale and price point that makes sense.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                With {companyInfo.yearsExperience} years of combined experience and{" "}
                {companyInfo.projectsCompleted} successful projects under our belt,
                we&apos;ve helped businesses transform their digital presence — from
                custom client portals to e-commerce platforms that drive real
                revenue growth.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe in honest communication, clean code, and delivering
                solutions that actually work. When you work with us, you&apos;re
                working directly with the people who build your project — no
                middlemen, no runarounds.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Team */}
      <section className="bg-mdb-dark-2 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="The Team"
            heading="Who we are"
            description="Two brothers with a shared passion for technology and helping businesses grow."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <AnimateOnScroll key={member.name}>
                <div className="p-8 rounded-2xl bg-mdb-dark-3 border border-gray-800/50 hover:border-mdb-orange/30 transition-all text-center">
                  <div className="h-20 w-20 rounded-full bg-mdb-orange flex items-center justify-center text-white text-2xl font-bold mx-auto">
                    {member.initials}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-mdb-orange text-sm font-medium">
                    {member.role}
                  </p>
                  <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="mt-6 space-y-2">
                    <a
                      href={`tel:${member.phone.replace(/[^\d]/g, "")}`}
                      className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-mdb-orange transition-colors"
                    >
                      <PhoneIcon className="h-4 w-4" />
                      {member.phone}
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-mdb-orange transition-colors"
                    >
                      <EnvelopeIcon className="h-4 w-4" />
                      {member.email}
                    </a>
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
              { value: "8", label: "Years Experience" },
              { value: "6+", label: "Projects Completed" },
              { value: "100%", label: "Satisfaction Rate" },
              { value: "24hr", label: "Response Time" },
            ].map((stat) => (
              <AnimateOnScroll key={stat.label}>
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-mdb-orange">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Let's work together"
        description="Ready to start your project? Reach out and let's discuss how we can help."
        primaryText="Contact Us"
        secondaryText="View Our Work"
        secondaryHref="/portfolio"
      />
    </>
  );
}
