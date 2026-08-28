const events = [
  {
    number: "01",
    title: "Weddings",
    description:
      "A beautiful setting for ceremonies, receptions, and wedding celebrations.",
  },
  {
    number: "02",
    title: "Birthdays",
    description:
      "Celebrate another year with family and friends in a comfortable event space.",
  },
  {
    number: "03",
    title: "Corporate Events",
    description:
      "A versatile environment for meetings, gatherings, presentations, and corporate occasions.",
  },
  {
    number: "04",
    title: "Celebrations",
    description:
      "Suitable for naming ceremonies, anniversaries, family gatherings, and more.",
  },
];

export default function AboutEvents() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              What We Host
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              One venue.
              <span className="block text-slate-400">Many occasions.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
              D Gold provides a flexible setting for different types of
              celebrations and gatherings.
            </p>
          </div>

          <div className="border-t border-slate-200">
            {events.map((event) => (
              <div
                key={event.number}
                className="grid gap-4 border-b border-slate-200 py-7 sm:grid-cols-[60px_180px_1fr] sm:items-start"
              >
                <span className="text-xs font-semibold tracking-widest text-slate-400">
                  {event.number}
                </span>

                <h3 className="text-base font-semibold text-slate-900">
                  {event.title}
                </h3>

                <p className="text-sm leading-6 text-slate-500">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
