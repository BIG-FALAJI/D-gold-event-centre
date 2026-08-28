import Link from "next/link";
import { FiArrowRight, FiCalendar, FiCheckCircle } from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "Choose a date",
  },
  {
    number: "02",
    title: "Check availability",
  },
  {
    number: "03",
    title: "Start your booking",
  },
];

export default function AvailabilityCTA() {
  return (
    <section className="bg-slate-900 py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
          {/* Main Content */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/50" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                Check Availability
              </p>
            </div>

            <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Have a date in mind?
              <span className="block text-white/40">
                Let's see if it's yours.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/50 sm:text-lg">
              Before you start planning, check the D Gold calendar and find out
              whether your preferred date is available for booking.
            </p>

            <Link
              href="/availability"
              className="group mt-9 inline-flex items-center gap-3 bg-white px-7 py-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
            >
              <FiCalendar className="h-4 w-4" />
              Check Availability
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Steps */}
          <div className="border border-white/10 bg-white/[0.03]">
            <div className="border-b border-white/10 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <FiCheckCircle className="h-4 w-4 text-white/50" />

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Simple booking process
                </p>
              </div>
            </div>

            <div className="divide-y divide-white/10">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-center gap-5 px-6 py-6 sm:px-8"
                >
                  <span className="text-xs tracking-[0.2em] text-white/30">
                    {step.number}
                  </span>

                  <p className="text-sm font-medium text-white/80">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Small info */}
            <div className="border-t border-white/10 bg-white/[0.02] px-6 py-5 sm:px-8">
              <p className="text-xs leading-6 text-white/40">
                Availability is subject to existing reservations and venue
                confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
