"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUsers,
} from "react-icons/fi";

export default function BookingDetailsPage() {
  const params = useParams();

  const booking = {
    id: params.id,
    event: "Wedding Reception",
    date: "September 12, 2026",
    time: "2:00 PM - 10:00 PM",
    guests: 300,
    status: "Confirmed",
    package: "Premium Package",
    location: "D Gold Event Centre, Egbeda, Lagos",
  };

  return (
    <div>
      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
          <Link
            href="/dashboard/bookings"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-900"
          >
            <FiArrowLeft className="h-4 w-4" />
            Back to bookings
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 lg:px-10">
        {/* Title */}
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Booking {booking.id}
            </p>

            <h1 className="mt-2 text-2xl font-semibold text-slate-900">
              {booking.event}
            </h1>
          </div>

          <span className="w-fit bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
            {booking.status}
          </span>
        </div>

        {/* Details */}
        <div className="mt-8 border border-slate-200 bg-white">
          <div className="border-b border-slate-200 p-6">
            <h2 className="font-semibold text-slate-900">Event Details</h2>
          </div>

          <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
            <div className="bg-white p-6">
              <div className="flex items-center gap-3">
                <FiCalendar className="h-5 w-5 text-slate-400" />

                <div>
                  <p className="text-xs text-slate-400">Event Date</p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {booking.date}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6">
              <div className="flex items-center gap-3">
                <FiClock className="h-5 w-5 text-slate-400" />

                <div>
                  <p className="text-xs text-slate-400">Time</p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {booking.time}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6">
              <div className="flex items-center gap-3">
                <FiUsers className="h-5 w-5 text-slate-400" />

                <div>
                  <p className="text-xs text-slate-400">Guest Count</p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {booking.guests} guests
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6">
              <div className="flex items-center gap-3">
                <FiMapPin className="h-5 w-5 text-slate-400" />

                <div>
                  <p className="text-xs text-slate-400">Venue</p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    D Gold Event Centre
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 p-6">
            <p className="text-xs text-slate-400">Package</p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {booking.package}
            </p>

            <p className="mt-4 text-xs text-slate-400">Location</p>

            <p className="mt-1 text-sm text-slate-700">{booking.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
