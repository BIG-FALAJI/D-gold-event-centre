import Link from "next/link";
import { FiCheck, FiArrowRight, FiUsers, FiCalendar } from "react-icons/fi";

const packages = [
  {
    name: "Essential",
    description:
      "A simple venue option for smaller gatherings and intimate occasions.",
    price: "#",
    capacity: "Up to 150 guests",
    popular: false,
    features: [
      "Venue access",
      "Flexible seating arrangement",
      "Basic event setup",
      "Event-day access",
    ],
  },
  {
    name: "Celebration",
    description:
      "A balanced option for celebrations that need more space and flexibility.",
    price: "#",
    capacity: "Up to 300 guests",
    popular: true,
    features: [
      "Venue access",
      "Flexible seating arrangement",
      "Event setup assistance",
      "Extended event access",
      "Guest-friendly environment",
    ],
  },
  {
    name: "Grand Event",
    description:
      "Designed for larger occasions that require maximum venue capacity.",
    price: "#",
    capacity: "500+ guests",
    popular: false,
    features: [
      "Venue access",
      "Flexible seating arrangement",
      "Event setup assistance",
      "Large guest capacity",
      "Extended event access",
      "Dedicated event support",
    ],
  },
];

export default function PackageList() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex flex-col border p-7 sm:p-8 lg:p-9 ${
                pkg.popular
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-900"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute right-6 top-6">
                  <span className="bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900">
                    Popular
                  </span>
                </div>
              )}

              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.25em] ${
                    pkg.popular ? "text-white/40" : "text-slate-400"
                  }`}
                >
                  Package
                </p>

                <h2 className="mt-4 text-2xl font-semibold">{pkg.name}</h2>

                <p
                  className={`mt-4 min-h-[72px] text-sm leading-7 ${
                    pkg.popular ? "text-white/55" : "text-slate-500"
                  }`}
                >
                  {pkg.description}
                </p>
              </div>

              {/* Price */}
              <div
                className={`my-8 border-y py-6 ${
                  pkg.popular ? "border-white/10" : "border-slate-200"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-[0.2em] ${
                    pkg.popular ? "text-white/40" : "text-slate-400"
                  }`}
                >
                  Starting from
                </p>

                <p className="mt-2 text-2xl font-semibold">{pkg.price}</p>

                <div
                  className={`mt-4 flex items-center gap-2 text-sm ${
                    pkg.popular ? "text-white/60" : "text-slate-500"
                  }`}
                >
                  <FiUsers className="h-4 w-4" />
                  {pkg.capacity}
                </div>
              </div>

              {/* Features */}
              <div className="flex-1">
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    pkg.popular ? "text-white/40" : "text-slate-400"
                  }`}
                >
                  Includes
                </p>

                <ul className="mt-5 space-y-4">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm ${
                        pkg.popular ? "text-white/70" : "text-slate-600"
                      }`}
                    >
                      <FiCheck
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          pkg.popular ? "text-white" : "text-slate-500"
                        }`}
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href="/booking"
                className={`group mt-9 flex items-center justify-center gap-3 px-5 py-3.5 text-sm font-semibold transition-colors ${
                  pkg.popular
                    ? "bg-white text-slate-900 hover:bg-slate-100"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                Choose Package
                <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
