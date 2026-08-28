import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiMaximize2 } from "react-icons/fi";

const venueHighlights = [
  "Elegant and welcoming event space",
  "Suitable for different types of occasions",
  "Convenient Egbeda, Lagos location",
  "Available for private and special events",
];

export default function VenuePreview() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-slate-500" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                The Venue
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              A setting worth celebrating in.
            </h2>
          </div>

          <Link
            href="/venue"
            className="group inline-flex w-fit items-center gap-2 border-b border-slate-300 pb-2 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-900"
          >
            View full venue
            <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Main Showcase */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Main Image */}
          <div className="relative min-h-[430px] overflow-hidden bg-slate-200 sm:min-h-[560px]">
            <Image
              src="/images.jpg"
              alt="Inside D Gold Event Centre"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

            {/* Image Content */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  D Gold Event Centre
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  Your occasion, your space.
                </h3>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between bg-slate-100 p-7 sm:p-10 lg:p-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Designed for your occasion
              </p>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Whether you're planning a celebration, ceremony, gathering, or
                another special occasion, D Gold provides a dedicated
                environment where your event can come together.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Venue highlights
              </p>

              <div className="space-y-3">
                {venueHighlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-white text-slate-700">
                      <FiCheck className="h-3 w-3" />
                    </span>

                    <p className="text-sm leading-6 text-slate-600">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/venue"
              className="group mt-10 inline-flex w-fit items-center gap-3 bg-slate-800 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
            >
              Explore the venue
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
