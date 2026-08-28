import Link from "next/link";
import { FiArrowRight, FiCalendar, FiStar, FiUsers } from "react-icons/fi";

const packages = [
  {
    number: "01",
    icon: FiCalendar,
    title: "Private Celebrations",
    description:
      "A dedicated space for birthdays, anniversaries, family gatherings, and other personal celebrations.",
  },
  {
    number: "02",
    icon: FiStar,
    title: "Special Occasions",
    description:
      "Create the right setting for ceremonies, receptions, parties, and moments worth remembering.",
  },
  {
    number: "03",
    icon: FiUsers,
    title: "Gatherings & Events",
    description:
      "A versatile venue for meetings, social gatherings, community events, and other occasions.",
  },
];

export default function PackagesPreview() {
  return (
    <section className="bg-slate-900 py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/50" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                Events & Packages
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              A space for every
              <span className="text-white/50"> special occasion.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/50">
            Whatever you're planning, find a setup that works for your occasion
            and speak with us about making your event happen at D Gold.
          </p>
        </div>

        {/* Package Cards */}
        <div className="mt-14 grid border-y border-white/10 md:grid-cols-3 lg:mt-20">
          {packages.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group border-b border-white/10 px-0 py-10 md:border-b-0 md:border-r md:px-8 md:py-12 first:md:pl-0 last:border-r-0 last:md:pr-0 lg:px-10"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/5 transition-colors duration-300 group-hover:bg-white group-hover:text-slate-900">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-xs tracking-[0.2em] text-white/30">
                    {item.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {item.description}
                </p>

                {/* Link */}
                <Link
                  href="/packages"
                  className="group/link mt-7 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  Learn more
                  <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col justify-between gap-6 border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-sm font-semibold">Planning something special?</p>

            <p className="mt-1 text-sm text-white/40">
              Check your preferred date and start planning your event.
            </p>
          </div>

          <Link
            href="/availability"
            className="group inline-flex w-fit items-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
          >
            Check Availability
            <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
