const stats = [
  {
    value: "500+",
    label: "Guest Capacity",
  },
  {
    value: "10+",
    label: "Event Types",
  },
  {
    value: "Flexible",
    label: "Event Setup",
  },
  {
    value: "Trusted",
    label: "Experience",
  },
];

export default function AboutStats() {
  return (
    <section className="bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 sm:px-8 lg:grid-cols-4 lg:px-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-l border-white/10 pl-5 first:border-l-0 sm:pl-8"
          >
            <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {stat.value}
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
