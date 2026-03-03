import Link from "next/link";

interface CTASectionProps {
  heading?: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function CTASection({
  heading = "Ready to start your project?",
  description = "Let's build something amazing together. Get in touch and we'll discuss how we can help your business grow.",
  primaryText = "Get Started",
  primaryHref = "/contact",
  secondaryText = "View Services",
  secondaryHref = "/services",
}: CTASectionProps) {
  return (
    <section className="bg-mdb-dark-1 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-mdb-dark-3 px-8 py-16 sm:px-16 sm:py-24 text-center">
          {/* Decorative gradient */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 blur-[100px]"
            style={{
              background: "radial-gradient(circle, #ff9900, transparent 70%)",
            }}
          />

          <h2 className="relative text-3xl sm:text-4xl font-bold text-white">
            {heading}
          </h2>
          <p className="relative mt-4 text-lg text-gray-400 max-w-xl mx-auto">
            {description}
          </p>
          <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className="px-8 py-3.5 bg-mdb-orange text-white font-semibold rounded-lg hover:bg-mdb-orange-hover transition-all hover:shadow-lg hover:shadow-mdb-orange/20"
            >
              {primaryText}
            </Link>
            <Link
              href={secondaryHref}
              className="px-8 py-3.5 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-mdb-orange hover:text-white transition-all"
            >
              {secondaryText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
