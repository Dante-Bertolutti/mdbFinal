import { testimonials } from "@/data/testimonials";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";

export default function TestimonialsSection() {
  return (
    <section className="bg-mdb-dark-2 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Client Testimonials"
          heading="Trusted by businesses across Canada"
          description="Don't just take our word for it — hear from the businesses we've helped succeed with custom web solutions."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} className={`delay-${i * 100}`}>
              <div className="p-8 rounded-2xl bg-mdb-dark-3 border border-gray-800/50 hover:border-mdb-orange/30 transition-all hover:-translate-y-1 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-mdb-orange flex items-center justify-center text-white font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
                <StarRating rating={t.rating} />
                <p className="mt-4 text-gray-300 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
