import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const galleryImages = [
  {
    src: "/landingBg.jpg",
    alt: "D Gold Event Centre",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/uiBg.jpg",
    alt: "D Gold Event Centre interior",
    className: "",
  },
  {
    src: "/brand.jpeg",
    alt: "D Gold Event Centre event setup",
    className: "",
  },
  {
    src: "/Auditorium-4.jpg",
    alt: "Event at D Gold Event Centre",
    className: "md:col-span-2",
  },
];

export default function GalleryPreview() {
  return (
    <section className="bg-slate-100 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-slate-500" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Gallery
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              See the space.
              <span className="block text-slate-400">Imagine your moment.</span>
            </h2>
          </div>

          <Link
            href="/gallery"
            className="group inline-flex w-fit items-center gap-2 border-b border-slate-300 pb-2 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-900"
          >
            View full gallery
            <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Gallery */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:auto-rows-[220px] md:grid-cols-4 lg:mt-16">
          {galleryImages.map((image, index) => (
            <Link
              href="/gallery"
              key={image.src}
              className={`group relative min-h-[260px] overflow-hidden bg-slate-200 ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/30" />

              {/* Number */}
              <span className="absolute right-4 top-4 text-xs font-medium tracking-[0.2em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                0{index + 1}
              </span>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center bg-white text-slate-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <FiArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-slate-300 pt-6 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            Every celebration has its own story. Take a closer look at the space
            and see where yours could begin.
          </p>

          <Link
            href="/gallery"
            className="text-sm font-semibold text-slate-900 hover:text-slate-500"
          >
            Explore all photos →
          </Link>
        </div>
      </div>
    </section>
  );
}
