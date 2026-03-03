import type { Metadata } from "next";
import {
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "@/components/contact/ContactForm";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { team, companyInfo } from "@/data/team";

export const metadata: Metadata = {
  title: "Contact Us – Web Development & IT Services in Kelowna, BC",
  description:
    "Contact MDB Development & IT Services in Kelowna, BC for a free consultation. Custom web development, hosting, IT support, and computer repairs. Call Dante at (250) 718-8479 or Milan at (250) 718-0202. We respond within 24 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact MDB Development – Kelowna, BC",
    description:
      "Get in touch for web development, IT support, or computer repairs in Kelowna. Free consultation, 24-hour response time.",
    url: "https://mdbdevelopment.com/contact",
  },
};

const contactItems = [
  {
    icon: EnvelopeIcon,
    title: "Email",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    description: "We'll respond within 24 hours",
  },
  {
    icon: ClockIcon,
    title: "Response Time",
    value: "24 hours or less",
    description: "Monday - Friday, 9 AM - 6 PM",
  },
  {
    icon: UsersIcon,
    title: "Team",
    value: "Dante & Milan Bertolutti",
    description: `${companyInfo.yearsExperience} years combined experience`,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-mdb-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-base font-semibold text-mdb-orange">Contact Us in Kelowna, BC</p>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight">
            Get In Touch
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Whether you need a new website, IT
            support, or computer repairs in Kelowna and the Okanagan — let&apos;s
            talk about your project.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-mdb-dark-1 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimateOnScroll>
                <ContactForm />
              </AnimateOnScroll>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <AnimateOnScroll>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-6">
                      {contactItems.map((item) => (
                        <div key={item.title} className="flex gap-4">
                          <div className="h-10 w-10 rounded-lg bg-mdb-orange/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="h-5 w-5 text-mdb-orange" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              {item.title}
                            </p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-white hover:text-mdb-orange transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-white">{item.value}</p>
                            )}
                            <p className="text-sm text-gray-400">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Team contacts */}
                  <div className="pt-8 border-t border-gray-800/50">
                    <h4 className="text-sm font-semibold text-white mb-4">
                      Direct Contact
                    </h4>
                    <div className="space-y-4">
                      {team.map((member) => (
                        <div
                          key={member.name}
                          className="p-4 rounded-xl bg-mdb-dark-2 border border-gray-800/50"
                        >
                          <p className="font-medium text-white">
                            {member.name}
                          </p>
                          <div className="mt-2 space-y-1">
                            <a
                              href={`tel:${member.phone.replace(/[^\d]/g, "")}`}
                              className="flex items-center gap-2 text-sm text-gray-400 hover:text-mdb-orange transition-colors"
                            >
                              <PhoneIcon className="h-4 w-4" />
                              {member.phone}
                            </a>
                            <a
                              href={`mailto:${member.email}`}
                              className="flex items-center gap-2 text-sm text-gray-400 hover:text-mdb-orange transition-colors"
                            >
                              <EnvelopeIcon className="h-4 w-4" />
                              {member.email}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="pt-8 border-t border-gray-800/50">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 sm:p-4 rounded-xl bg-mdb-dark-2 border border-gray-800/50 text-center">
                        <p className="text-2xl font-bold text-mdb-orange">
                          {companyInfo.projectsCompleted}+
                        </p>
                        <p className="text-xs text-gray-400">
                          Projects Completed
                        </p>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-mdb-dark-2 border border-gray-800/50 text-center">
                        <p className="text-2xl font-bold text-mdb-orange">
                          {companyInfo.yearsExperience}
                        </p>
                        <p className="text-xs text-gray-400">
                          Years Experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
