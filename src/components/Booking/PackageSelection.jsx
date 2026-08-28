"use client";

import { FiCheck } from "react-icons/fi";

const packages = [
  {
    id: "basic",
    name: "Basic",
    description: "A simple venue option for intimate events.",
    price: "₦250,000",
    features: [
      "Venue access",
      "Basic seating arrangement",
      "Standard lighting",
      "Clean-up after event",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    description: "A balanced package for most celebrations.",
    price: "₦400,000",
    features: [
      "Venue access",
      "Flexible seating arrangement",
      "Enhanced lighting",
      "Event setup assistance",
      "Clean-up after event",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    description: "A complete experience for memorable occasions.",
    price: "₦600,000",
    features: [
      "Full venue access",
      "Premium event setup",
      "Enhanced lighting",
      "Event support",
      "Dedicated venue assistance",
      "Clean-up after event",
    ],
  },
];

export default function PackageSelection({ selectedPackage, onSelect }) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Choose your package
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Select the package that best suits your event. You can review your
          selection before confirming your booking.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {packages.map((pkg) => {
          const isSelected = selectedPackage === pkg.id;

          return (
            <button
              key={pkg.id}
              type="button"
              onClick={() => onSelect(pkg)}
              className={`relative text-left transition-all ${
                isSelected
                  ? "border-2 border-slate-900"
                  : "border border-slate-200 hover:border-slate-400"
              } bg-white`}
            >
              {pkg.popular && (
                <div className="absolute right-4 top-4 bg-slate-900 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  Popular
                </div>
              )}

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {pkg.name}
                </p>

                <div className="mt-4">
                  <span className="text-2xl font-semibold text-slate-900">
                    {pkg.price}
                  </span>
                </div>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">
                  {pkg.description}
                </p>

                <div className="my-6 h-px bg-slate-200" />

                <div className="space-y-3">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-slate-100">
                        <FiCheck className="h-3 w-3 text-slate-700" />
                      </span>

                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-7 flex items-center justify-center border px-4 py-3 text-sm font-semibold transition-colors ${
                    isSelected
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 text-slate-700"
                  }`}
                >
                  {isSelected ? "Selected" : "Select Package"}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
