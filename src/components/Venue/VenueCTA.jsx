import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function VenueCTA() {
  return (
    <section className="bg-slate-900 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
          Ready when you are
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Your next memorable occasion starts here.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
          Check our availability and find a date that works for your event.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/availability"
            className="group inline-flex items-center gap-3 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
          >
            Check Availability
            <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/booking"
            className="inline-flex items-center gap-3 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Book the Venue
          </Link>
        </div>
      </div>
    </section>
  );
}
