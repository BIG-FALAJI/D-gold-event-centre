import Link from "next/link";
import {
  FiHeart,
  FiGift,
  FiUsers,
  FiBriefcase,
  FiHome,
  FiStar,
  FiArrowRight,
} from "react-icons/fi";

const eventTypes = [
  {
    icon: FiHeart,
    title: "Weddings",
    description: "Celebrate your special day with the people who matter.",
  },
  {
    icon: FiGift,
    title: "Birthdays",
    description: "Create a memorable celebration for another year of life.",
  },
  {
    icon: FiUsers,
    title: "Family Gatherings",
    description: "Bring family and loved ones together in one place.",
  },
  {
    icon: FiBriefcase,
    title: "Corporate Events",
    description: "Host meetings, conferences and professional gatherings.",
  },
  {
    icon: FiHome,
    title: "Ceremonies",
    description: "A suitable space for meaningful traditional occasions.",
  },
  {
    icon: FiStar,
    title: "Special Events",
    description: "Whatever the occasion, create a setting worth remembering.",
  },
];

export default function EventTypes() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-slate-500" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Made for Every Occasion
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Your occasion.
              <span className="block text-slate-400">Your way.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-slate-500">
            From intimate celebrations to larger gatherings, D Gold provides a
            welcoming space for moments worth celebrating.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-slate-200 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {eventTypes.map((event) => {
            const Icon = event.icon;

            return (
              <div
                key={event.title}
                className="group bg-white p-7 sm:p-9 lg:p-10"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-slate-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-slate-900" />

                  <span className="text-xs text-slate-300">→</span>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-slate-900">
                  {event.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {event.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
