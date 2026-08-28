export default function FAQHero() {
  return (
    <section className="bg-slate-900 pt-32 pb-20 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-white/40" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Frequently Asked Questions
            </p>
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Everything you need
            <span className="block text-white/40">to know before booking.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Find answers to common questions about D Gold Event Centre,
            availability, bookings, venue setup, and hosting your event with us.
          </p>
        </div>
      </div>
    </section>
  );
}
