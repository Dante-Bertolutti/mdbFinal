import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mdb-black">
      {/* Gradient blobs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #ff9900 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-15 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #ff9900 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mdb-dark-2 border border-gray-800 mb-8">
          <span className="h-2 w-2 rounded-full bg-mdb-orange" />
          <span className="text-sm text-gray-300">
            Web development &amp; IT services in Kelowna, BC
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
          Web Solutions that{" "}
          <span className="text-mdb-orange">Empower</span> Your Business
        </h1>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
          Kelowna&apos;s trusted web development and IT services team. We build
          custom web applications, design responsive websites, provide reliable
          hosting, and deliver hands-on IT support and computer repairs for small
          businesses across the Okanagan.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-mdb-orange text-white font-semibold rounded-lg hover:bg-mdb-orange-hover transition-all hover:shadow-lg hover:shadow-mdb-orange/20"
          >
            Get Started
          </Link>
          <Link
            href="/services"
            className="px-8 py-3.5 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-mdb-orange hover:text-white transition-all"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
