import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function AboutCTA() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="bg-slate-100 px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            D Gold Event Centre
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Your next memorable occasion could start here.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            Explore the venue, check availability, and start planning your event
            with D Gold.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/availability"
              className="group inline-flex items-center justify-center gap-2 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Check Availability
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
