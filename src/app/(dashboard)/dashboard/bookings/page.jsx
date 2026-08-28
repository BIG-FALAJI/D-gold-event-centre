import Link from "next/link";
import { FiArrowRight, FiCalendar, FiClock, FiMapPin } from "react-icons/fi";

const bookings = [
  {
    id: "DG-001",
    event: "Wedding Reception",
    date: "September 12, 2026",
    time: "2:00 PM - 10:00 PM",
    status: "Confirmed",
    guests: 300,
  },
  {
    id: "DG-002",
    event: "Birthday Celebration",
    date: "October 3, 2026",
    time: "4:00 PM - 10:00 PM",
    status: "Pending",
    guests: 150,
  },
];

const statusStyles = {
  Confirmed: "bg-green-50 text-green-700",
  Pending: "bg-amber-50 text-amber-700",
  Cancelled: "bg-red-50 text-red-600",
};

export default function Bookings() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Dashboard
          </p>

          <div className="mt-2 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                My Bookings
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                View and manage your D Gold Event Centre bookings.
              </p>
            </div>

            <Link
              href="/dashboard/book"
              className="inline-flex w-fit items-center gap-2 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Make a Booking
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="border border-slate-200 bg-white p-5 sm:p-6"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Main information */}
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-lg font-semibold text-slate-900">
                      {booking.event}
                    </h2>

                    <span
                      className={`px-2.5 py-1 text-xs font-medium ${
                        statusStyles[booking.status]
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-400">
                    Booking ID: {booking.id}
                  </p>
                </div>

                {/* Details */}
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-3">
                    <FiCalendar className="h-4 w-4 text-slate-400" />

                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-slate-400">
                        Date
                      </p>

                      <p className="mt-1 text-sm font-medium text-slate-700">
                        {booking.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FiClock className="h-4 w-4 text-slate-400" />

                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-slate-400">
                        Time
                      </p>

                      <p className="mt-1 text-sm font-medium text-slate-700">
                        {booking.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FiMapPin className="h-4 w-4 text-slate-400" />

                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-slate-400">
                        Guests
                      </p>

                      <p className="mt-1 text-sm font-medium text-slate-700">
                        {booking.guests} guests
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <Link
                  href={`/dashboard/bookings/${booking.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-500"
                >
                  View Details
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty-state explanation */}
        <div className="mt-8 border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
          <FiCalendar className="mx-auto h-6 w-6 text-slate-300" />

          <p className="mt-4 text-sm font-medium text-slate-700">
            Looking for your next event?
          </p>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
            Check our availability calendar to find a suitable date and start
            planning your event at D Gold.
          </p>

          <Link
            href="/availability"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
          >
            Check availability
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
