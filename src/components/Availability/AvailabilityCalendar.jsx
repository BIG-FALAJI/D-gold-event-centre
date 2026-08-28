"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiClock,
  FiLock,
} from "react-icons/fi";

const bookedDates = ["2026-08-28", "2026-09-05", "2026-09-12", "2026-09-19"];

const pendingDates = ["2026-08-30", "2026-09-10"];

export default function AvailabilityCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const monthName = currentMonth.toLocaleString("en-US", {
    month: "long",
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const previousMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
    setSelectedDate(null);
  };

  const formatDate = (day) => {
    const date = new Date(year, month, day);

    const formatted = `${date.getFullYear()}-${String(
      date.getMonth() + 1,
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    return formatted;
  };

  const isPastDate = (day) => {
    const date = new Date(year, month, day);

    const todayStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );

    return date < todayStart;
  };

  const isBooked = (date) => bookedDates.includes(date);

  const isPending = (date) => pendingDates.includes(date);

  const getDateStatus = (date) => {
    if (isBooked(date)) return "booked";
    if (isPending(date)) return "pending";

    return "available";
  };

  const handleDateSelect = (day) => {
    const date = formatDate(day);

    if (isPastDate(day) || isBooked(date) || isPending(date)) {
      return;
    }

    setSelectedDate(date);
  };

  const calendarDays = [];

  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const formattedSelectedDate = selectedDate
    ? new Date(`${selectedDate}T00:00:00`).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Calendar Card */}
          <div className="bg-white p-5 shadow-sm sm:p-8 lg:p-10">
            {/* Calendar Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                  Select a date
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  {monthName} {year}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previousMonth}
                  className="flex h-10 w-10 items-center justify-center border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100"
                  aria-label="Previous month"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={nextMonth}
                  className="flex h-10 w-10 items-center justify-center border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100"
                  aria-label="Next month"
                >
                  →
                </button>
              </div>
            </div>

            {/* Weekdays */}
            <div className="mt-6 grid grid-cols-7">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="py-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {calendarDays.map((day, index) => {
                if (!day) {
                  return <div key={index} />;
                }

                const date = formatDate(day);

                const past = isPastDate(day);
                const booked = isBooked(date);
                const pending = isPending(date);
                const selected = selectedDate === date;

                return (
                  <button
                    key={`${year}-${month}-${day}-${index}`}
                    type="button"
                    disabled={past || booked || pending}
                    onClick={() => handleDateSelect(day)}
                    className={`relative flex aspect-square items-center justify-center text-sm font-medium transition-all ${
                      past
                        ? "cursor-not-allowed text-slate-200"
                        : booked
                          ? "cursor-not-allowed bg-slate-100 text-slate-300"
                          : pending
                            ? "cursor-not-allowed bg-amber-50 text-amber-400"
                            : selected
                              ? "bg-slate-800 text-white"
                              : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {day}

                    {booked && (
                      <span className="absolute bottom-2 h-1 w-1 rounded-full bg-slate-400" />
                    )}

                    {pending && (
                      <span className="absolute bottom-2 h-1 w-1 rounded-full bg-amber-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-800" />
                <span className="text-xs text-slate-500">Selected</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white ring-1 ring-slate-300" />
                <span className="text-xs text-slate-500">Available</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="text-xs text-slate-500">Reserved</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="text-xs text-slate-500">Pending</span>
              </div>
            </div>
          </div>

          {/* Information Card */}
          <aside className="flex flex-col bg-slate-900 p-6 text-white sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center bg-white/10">
              <FiCalendar className="h-5 w-5" />
            </div>

            {selectedDate ? (
              <>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                  Selected Date
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight">
                  {formattedSelectedDate}
                </h3>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex gap-3">
                    <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />

                    <div>
                      <p className="text-sm font-medium">
                        Date appears available
                      </p>

                      <p className="mt-1 text-xs leading-6 text-white/40">
                        You can continue to provide your event details and
                        submit a booking request.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/booking?date=${selectedDate}`}
                  className="group mt-auto flex items-center justify-center gap-2 bg-white px-5 py-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                >
                  Continue to Booking
                  <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </>
            ) : (
              <>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                  No date selected
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight">
                  Choose a date to get started.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  Select any available date on the calendar to see the next step
                  toward booking D Gold Event Centre.
                </p>

                <div className="mt-auto space-y-4 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <FiCheck className="h-4 w-4 text-white/50" />

                    <span className="text-xs text-white/50">
                      Available dates can be selected
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FiLock className="h-4 w-4 text-white/50" />

                    <span className="text-xs text-white/50">
                      Reserved dates cannot be selected
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FiClock className="h-4 w-4 text-white/50" />

                    <span className="text-xs text-white/50">
                      Pending dates are temporarily unavailable
                    </span>
                  </div>
                </div>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
