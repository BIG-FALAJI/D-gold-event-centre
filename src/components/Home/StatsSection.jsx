import { FiUsers, FiCalendar, FiMapPin, FiAward } from "react-icons/fi";

const stats = [
  {
    value: "500+",
    label: "Guest Capacity",
    icon: FiUsers,
  },
  {
    value: "10+",
    label: "Event Types",
    icon: FiCalendar,
  },
  {
    value: "Flexible",
    label: "Event Setup",
    icon: FiMapPin,
  },
  {
    value: "Trusted",
    label: "Experience",
    icon: FiAward,
  },
];

export default function StatsSection() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`group px-6 py-10 sm:py-12 lg:px-8 lg:py-14 ${
                  index !== stats.length - 1
                    ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                    : ""
                } ${index === 1 ? "sm:border-r-0 lg:border-r" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-slate-800 group-hover:text-white">
                    <Icon className="h-4 w-4" />
                  </div>

                  <span className="text-xs font-medium tracking-[0.2em] text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-7 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm font-medium text-slate-500">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
