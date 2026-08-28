import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function GalleryCTA() {
  return (
    <section className="bg-slate-100 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Your occasion awaits
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Ready to make the space yours?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Check our availability and start planning your next event at D
              Gold Event Centre.
            </p>
          </div>

          <Link
            href="/availability"
            className="group inline-flex shrink-0 items-center justify-center gap-3 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Check Availability
            <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
