"use client";

import Image from "next/image";
import { useState } from "react";
import { FiX, FiZoomIn } from "react-icons/fi";

const images = [
  {
    src: "/Auditorium.jpg",
    alt: "D Gold Event Centre",
    category: "Venue",
  },
  {
    src: "/images.jpg",
    alt: "D Gold Event Centre interior",
    category: "Interior",
  },
  {
    src: "/landingBg.jpg",
    alt: "D Gold Event Centre",
    category: "Venue",
  },
  {
    src: "/uiBg.jpg",
    alt: "D Gold Event Centre setup",
    category: "Setup",
  },
  {
    src: "/brand.jpeg",
    alt: "D Gold Event Centre",
    category: "Venue",
  },
];

const categories = ["All", "Venue", "Interior", "Setup", "Events"];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((image) => image.category === activeCategory);

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-6">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                  active
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-[4/3] overflow-hidden bg-slate-100 text-left"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/40" />

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    {image.category}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    {image.alt}
                  </p>
                </div>

                <span className="flex h-9 w-9 items-center justify-center bg-white text-slate-900">
                  <FiZoomIn className="h-4 w-4" />
                </span>
              </div>
            </button>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-sm text-slate-400">
              No images available in this category yet.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-5"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center bg-white text-slate-900"
          >
            <FiX className="h-5 w-5" />
          </button>

          <div
            className="relative h-[80vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
