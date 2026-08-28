import Link from "next/link";
import { FiArrowRight, FiCalendar, FiClock, FiMapPin } from "react-icons/fi";

const stats = [
  {
    label: "Total Bookings",
    value: "0",
  },
  {
    label: "Upcoming Events",
    value: "0",
  },
  {
    label: "Pending Bookings",
    value: "0",
  },
  {
    label: "Completed Events",
    value: "0",
  },
];

export default function DashboardOverview() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Dashboard
          </p>

          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your events and bookings from one place.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-slate-200 bg-white p-6"
            >
              <p className="text-sm text-slate-500">{stat.label}</p>

              <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div className="mt-8 grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
          {/* Upcoming booking */}
          <div className="border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 p-6">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Upcoming Booking
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Your next scheduled event
                </p>
              </div>

              <FiCalendar className="h-5 w-5 text-slate-400" />
            </div>

            <div className="p-6">
              <div className="flex min-h-52 flex-col items-center justify-center text-center">
                <div className="flex h-12 w-12 items-center justify-center bg-slate-100 text-slate-400">
                  <FiCalendar className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-sm font-semibold text-slate-900">
                  No upcoming bookings
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  You haven't booked an event yet. Find an available date and
                  start planning your occasion.
                </p>

                <Link
                  href="/availability"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
                >
                  Check availability
                  <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="border border-slate-200 bg-white">
            <div className="border-b border-slate-200 p-6">
              <h2 className="font-semibold text-slate-900">Quick Actions</h2>

              <p className="mt-1 text-xs text-slate-400">
                Common things you may want to do
              </p>
            </div>

            <div className="divide-y divide-slate-200">
              <Link
                href="/availability"
                className="group flex items-center gap-4 p-5 transition-colors hover:bg-slate-50"
              >
                <div className="flex h-10 w-10 items-center justify-center bg-slate-100 text-slate-600">
                  <FiCalendar className="h-4 w-4" />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">
                    Check Availability
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Find a suitable event date
                  </p>
                </div>

                <FiArrowRight className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/venue"
                className="group flex items-center gap-4 p-5 transition-colors hover:bg-slate-50"
              >
                <div className="flex h-10 w-10 items-center justify-center bg-slate-100 text-slate-600">
                  <FiMapPin className="h-4 w-4" />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">
                    Explore Venue
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    View the venue and facilities
                  </p>
                </div>

                <FiArrowRight className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/packages"
                className="group flex items-center gap-4 p-5 transition-colors hover:bg-slate-50"
              >
                <div className="flex h-10 w-10 items-center justify-center bg-slate-100 text-slate-600">
                  <FiClock className="h-4 w-4" />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">
                    View Packages
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Explore available packages
                  </p>
                </div>

                <FiArrowRight className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
