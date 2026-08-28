import Image from "next/image";
import Link from "next/link";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

export default function VenueHero() {
  return (
    <section className="relative flex min-h-[75vh]  bg-cover bg-center overflow-hidden bg-[url(/uiBg.jpg)] sm:px-6 lg:px-8 lg:py-20">
      {/* Background Image */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/65" />
      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-white/60" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              The D Gold Venue
            </p>
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            A space made for
            <span className="block text-white/55">meaningful occasions.</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            A welcoming event space in Egbeda, Lagos, designed to bring people
            together and create memorable moments.
          </p>

          <div className="mt-8">
            <Link
              href="/availability"
              className="group inline-flex items-center gap-3 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
            >
              Check Availability
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#overview"
          className="mt-14 hidden items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/40 transition-colors hover:text-white/70 sm:flex animate-bounce"
        >
          Discover more
          <FiArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
