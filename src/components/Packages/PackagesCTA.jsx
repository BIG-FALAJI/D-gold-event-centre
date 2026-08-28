import Link from "next/link";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

export default function PackagesCTA() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 bg-slate-900 p-8 sm:p-10 lg:flex-row lg:items-center lg:p-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <FiCalendar className="h-4 w-4 text-white/50" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                Find your date
              </p>
            </div>

            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              Found the right option?
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/45">
              Check the calendar to see which dates are currently available for
              your event.
            </p>
          </div>

          <Link
            href="/availability"
            className="group inline-flex shrink-0 items-center justify-center gap-3 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
          >
            Check Availability
            <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
