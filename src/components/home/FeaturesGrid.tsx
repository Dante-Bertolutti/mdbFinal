import {
  CodeBracketIcon,
  GlobeAltIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    title: "Custom Web Applications",
    description:
      "Tailored web apps built with modern technologies to solve your specific business challenges.",
    icon: CodeBracketIcon,
  },
  {
    title: "Reliable Web Hosting",
    description:
      "Secure, fast hosting with 99.9% uptime, daily backups, and 24/7 monitoring.",
    icon: ServerIcon,
  },
  {
    title: "Responsive Websites",
    description:
      "Mobile-first websites designed to look great and perform on every device.",
    icon: GlobeAltIcon,
  },
  {
    title: "Ongoing Maintenance",
    description:
      "Security updates, performance optimization, and technical support to keep you running.",
    icon: WrenchScrewdriverIcon,
  },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-mdb-dark-1 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Why Choose MDB Development in Kelowna"
          heading="Everything your business needs to succeed online"
          description="Comprehensive web development and IT solutions for small businesses in Kelowna, BC and the Okanagan Valley."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <AnimateOnScroll key={feature.title} className={`delay-${i * 100}`}>
              <div className="flex gap-5 p-6 rounded-2xl bg-mdb-dark-2 border border-gray-800/50 hover:border-mdb-orange/30 transition-all group">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-mdb-orange/10 flex items-center justify-center group-hover:bg-mdb-orange/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-mdb-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{feature.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
