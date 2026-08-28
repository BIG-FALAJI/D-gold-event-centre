"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FiCalendar, FiCheck } from "react-icons/fi";
import BookingForm from "@/components/Booking/BookingForm";

function BookingPageContent() {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  const formattedDate = date
    ? new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <main className="min-h-screen bg-slate-100">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white pb-16 pt-32 sm:pt-36 lg:pt-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-slate-500" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Venue Booking
              </p>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Let&apos;s plan your
              <span className="block text-slate-400">special occasion.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              Tell us a little about your event and our team will get back to
              you with the next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-10">
          {/* Booking Summary */}
          <aside className="bg-slate-900 p-6 text-white sm:p-8 lg:p-10">
            <div className="flex h-11 w-11 items-center justify-center bg-white/10">
              <FiCalendar className="h-5 w-5" />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Your booking
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              {formattedDate || "Select an event date"}
            </h2>

            {formattedDate ? (
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex gap-3">
                  <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />

                  <p className="text-sm leading-6 text-white/50">
                    Your selected date is currently available. Complete the form
                    to send your booking request.
                  </p>
                </div>
              </div>
            ) : (
              <p className="mt-4 text-sm leading-7 text-white/50">
                You can select your preferred event date from the availability
                calendar.
              </p>
            )}

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                D Gold Event Centre
              </p>

              <p className="mt-2 text-sm leading-6 text-white/50">
                No. 49, Isiba Oluwo, Egbeda, Lagos.
              </p>
            </div>
          </aside>

          {/* Form */}
          <BookingForm selectedDate={date} />
        </div>
      </section>
    </main>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-slate-100" />}>
      <BookingPageContent />
    </Suspense>
  );
}
