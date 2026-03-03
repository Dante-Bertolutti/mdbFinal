"use client";

import { useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface GalleryImage {
  title: string;
  description: string;
  src: string;
}

interface PortfolioShowcaseProps {
  projectName: string;
  projectDescription: string;
  embedUrl: string;
  galleryImages: GalleryImage[];
  stackHighlights: string;
  roleScope: string;
  outcomes: string;
  bgClass?: string;
}

export default function PortfolioShowcase({
  projectName,
  projectDescription,
  embedUrl,
  galleryImages,
  stackHighlights,
  roleScope,
  outcomes,
  bgClass = "bg-mdb-dark-1",
}: PortfolioShowcaseProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  return (
    <section className={`w-full ${bgClass} py-16 md:py-20`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-16">
        {/* Header */}
        <header className="max-w-2xl text-left">
          <p className="text-xs uppercase tracking-[0.45em] text-mdb-orange font-semibold">
            Featured Project
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white">
            {projectName}
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-400">
            {projectDescription}
          </p>
        </header>

        {/* Main content grid */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Live preview */}
          <div className="flex">
            <div className="flex h-full w-full flex-col rounded-lg border border-gray-700 bg-mdb-dark-2 shadow-md">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-xl font-semibold text-white">
                  Live Experience
                </h3>
                <p className="text-sm text-gray-400">
                  Interact with the live site directly below.
                </p>
              </div>
              <div className="flex-1 p-6 pt-0">
                <iframe
                  title={`${projectName} Live Preview`}
                  src={embedUrl}
                  className="h-full min-h-[420px] w-full overflow-hidden rounded-xl border border-gray-700 shadow-inner"
                />
              </div>
            </div>
          </div>

          {/* Gallery cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {galleryImages.map((item, index) => (
              <div
                key={item.title}
                onClick={() => setSelectedImageIndex(index)}
                className="group cursor-pointer rounded-lg border border-gray-700 bg-mdb-dark-2 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:border-mdb-orange/50"
              >
                <div className="aspect-square w-full overflow-hidden rounded-t-lg border-b border-gray-700 bg-mdb-dark-3 transition group-hover:brightness-110">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info grid */}
        <footer className="grid gap-6 rounded-2xl border border-gray-700 bg-mdb-dark-2 p-6 text-sm text-gray-400 shadow-sm md:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold text-white">
              Stack Highlights
            </h3>
            <p className="mt-2">{stackHighlights}</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">
              Role & Scope
            </h3>
            <p className="mt-2">{roleScope}</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">Outcomes</h3>
            <p className="mt-2">{outcomes}</p>
          </div>
        </footer>
      </div>

      {/* Modal lightbox */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-3xl border border-gray-700 bg-mdb-dark-2 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-mdb-dark-3 p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>

            <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={galleryImages[selectedImageIndex].src}
                  alt={galleryImages[selectedImageIndex].title}
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <h3 className="text-2xl font-semibold text-white">
                  {galleryImages[selectedImageIndex].title}
                </h3>
                <p className="text-gray-400">
                  {galleryImages[selectedImageIndex].description}
                </p>
                <p className="text-xs uppercase tracking-[0.4em] text-mdb-orange">
                  Gallery Frame {selectedImageIndex + 1} of{" "}
                  {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
