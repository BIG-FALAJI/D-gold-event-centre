import Link from "next/link";
import { FiArrowRight, FiCalendar, FiPhone } from "react-icons/fi";

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-slate-200" />

      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-slate-200" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden bg-slate-100 px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Small accent */}
          <div className="absolute left-0 top-0 h-full w-1 bg-slate-800" />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            {/* Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-slate-500" />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Make It Happen
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Your special moment deserves the right space.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                Ready to start planning? Check your preferred date or get in
                touch with D Gold Event Centre to take the next step.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <Link
                href="/booking"
                className="group inline-flex items-center justify-center gap-2 bg-slate-800 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
              >
                <FiCalendar className="h-4 w-4" />
                Book the Venue
                <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                <FiPhone className="h-4 w-4" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
