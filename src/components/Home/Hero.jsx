import Link from "next/link";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[url('/landingBg.jpg')] bg-cover bg-center px-4 py-15 text-white sm:px-6 lg:px-8 lg:py-20">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-slate-900/65" />

      {/* Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-900/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-32 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-white/70" />

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/75 sm:text-sm">
              D Gold Event Centre
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Where unforgettable
            <span className="block text-white/70">moments come to life.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            A beautiful and versatile event space in Egbeda, Lagos, designed to
            give your celebrations, ceremonies, and special occasions the
            setting they deserve.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/availability"
              className="group inline-flex items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-slate-100"
            >
              <FiCalendar className="h-4 w-4" />
              Check Availability
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/venue"
              className="inline-flex items-center justify-center border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              Explore Our Venue
            </Link>
          </div>

          {/* Location */}
          <div className="mt-10 flex items-center gap-2 text-sm text-white/50">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            No. 49, Isiba Oluwo, Egbeda, Lagos
          </div>
        </div>
      </div>
    </section>
  );
}
