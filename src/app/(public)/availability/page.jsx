import AvailabilityCalendar from "@/components/Availability/AvailabilityCalendar";

export const metadata = {
  title: "Check Availability | D Gold Event Centre",
  description:
    "Check available dates and plan your event at D Gold Event Centre.",
};

export default function AvailabilityPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      {/* Page Header */}
      <section className="border-b border-slate-200 bg-white pt-32 pb-16 sm:pt-36 lg:pt-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-slate-500" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Venue Availability
              </p>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Find the perfect date
              <span className="block text-slate-400">for your event.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              Select a date below to see whether D Gold Event Centre is
              available for your occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <AvailabilityCalendar />
    </main>
  );
}
