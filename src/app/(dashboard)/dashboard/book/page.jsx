"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiMail,
  FiPhone,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import { isDateBooked } from "@/lib/availability";

const eventTypes = [
  "Wedding",
  "Birthday",
  "Naming Ceremony",
  "Corporate Event",
  "Burial Ceremony",
  "Conference",
  "Other",
];

const packages = [
  {
    id: "basic",
    name: "Basic",
    description: "A simple venue option for intimate events.",
    price: "#",
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
    price: "#",
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
    price: "#",
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

export default function NewBookingPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    date: "",
    eventType: "",
    guests: "",
    package: null,
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleNextFromStepOne = () => {
    if (!formData.date || !formData.eventType || !formData.guests) {
      setError("Please complete all the required fields.");
      return;
    }

    if (isDateBooked(formData.date)) {
      setError(
        "Sorry, this date is already reserved. Please choose another date.",
      );
      return;
    }

    if (Number(formData.guests) < 1) {
      setError("Guest count must be at least 1.");
      return;
    }

    if (Number(formData.guests) > 500) {
      setError("The maximum venue capacity is 500 guests.");
      return;
    }

    setError("");
    setStep(2);
  };

  const handlePackageSelect = (selectedPackage) => {
    setFormData((prev) => ({
      ...prev,
      package: selectedPackage,
    }));

    setError("");
  };

  const handleNextFromStepTwo = () => {
    if (!formData.package) {
      setError("Please select a package before continuing.");
      return;
    }

    setError("");
    setStep(3);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone) {
      setError("Please complete your contact information.");
      return;
    }

    setError("");
    setStep(4);
  };

  const goBack = () => {
    setError("");

    if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-6 sm:px-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-900"
          >
            <FiArrowLeft className="h-4 w-4" />
            Back to dashboard
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8">
        {/* Page Heading */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            New Booking
          </p>

          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Plan your event
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Tell us about your event and we'll help you reserve your preferred
            date at D Gold Event Centre.
          </p>
        </div>

        {/* Progress */}
        {step !== 4 && (
          <div className="mb-8">
            <div className="flex items-center">
              {/* Step 1 */}
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center text-xs font-semibold ${
                  step >= 1
                    ? "bg-slate-900 text-white"
                    : "border border-slate-200 bg-white text-slate-400"
                }`}
              >
                {step > 1 ? <FiCheck className="h-4 w-4" /> : "1"}
              </div>

              <div
                className={`h-px flex-1 ${
                  step >= 2 ? "bg-slate-900" : "bg-slate-200"
                }`}
              />

              {/* Step 2 */}
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center text-xs font-semibold ${
                  step >= 2
                    ? "bg-slate-900 text-white"
                    : "border border-slate-200 bg-white text-slate-400"
                }`}
              >
                {step > 2 ? <FiCheck className="h-4 w-4" /> : "2"}
              </div>

              <div
                className={`h-px flex-1 ${
                  step >= 3 ? "bg-slate-900" : "bg-slate-200"
                }`}
              />

              {/* Step 3 */}
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center text-xs font-semibold ${
                  step >= 3
                    ? "bg-slate-900 text-white"
                    : "border border-slate-200 bg-white text-slate-400"
                }`}
              >
                3
              </div>
            </div>

            <div className="mt-3 flex justify-between text-[11px] font-medium uppercase tracking-wider text-slate-400">
              <span>Event Information</span>
              <span>Package</span>
              <span>Review</span>
            </div>
          </div>
        )}

        {/* ========================= */}
        {/* STEP 1 */}
        {/* ========================= */}

        {step === 1 && (
          <div className="border border-slate-200 bg-white">
            <div className="border-b border-slate-200 p-6 sm:p-8">
              <h2 className="font-semibold text-slate-900">
                Event Information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Choose your preferred date and tell us about your event.
              </p>
            </div>

            <div className="space-y-6 p-6 sm:p-8">
              {error && (
                <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Date */}
              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Event Date
                </label>

                <div className="relative">
                  <FiCalendar className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="h-12 w-full border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                  />
                </div>
              </div>

              {/* Event Type */}
              <div>
                <label
                  htmlFor="eventType"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Event Type
                </label>

                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="h-12 w-full border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                >
                  <option value="">Select event type</option>

                  {eventTypes.map((eventType) => (
                    <option key={eventType} value={eventType}>
                      {eventType}
                    </option>
                  ))}
                </select>
              </div>

              {/* Guests */}
              <div>
                <label
                  htmlFor="guests"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Number of Guests
                </label>

                <div className="relative">
                  <FiUsers className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="500"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="e.g. 250"
                    className="h-12 w-full border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                  />
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Maximum venue capacity: 500 guests.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col-reverse gap-3 border-t border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <Link
                href="/availability"
                className="text-center text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
              >
                Check availability first
              </Link>

              <button
                type="button"
                onClick={handleNextFromStepOne}
                className="group inline-flex items-center justify-center gap-2 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Continue
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        )}

        {/* ========================= */}
        {/* STEP 2 */}
        {/* ========================= */}

        {step === 2 && (
          <div className="border border-slate-200 bg-white">
            <div className="border-b border-slate-200 p-6 sm:p-8">
              <h2 className="font-semibold text-slate-900">
                Choose your package
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Select the package that best suits your event.
              </p>
            </div>

            <div className="p-6 sm:p-8">
              {error && (
                <div className="mb-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              <div className="grid gap-5 lg:grid-cols-3">
                {packages.map((pkg) => {
                  const isSelected = formData.package?.id === pkg.id;

                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => handlePackageSelect(pkg)}
                      className={`relative text-left transition-all ${
                        isSelected
                          ? "border-2 border-slate-900"
                          : "border border-slate-200 hover:border-slate-400"
                      }`}
                    >
                      {pkg.popular && (
                        <span className="absolute right-4 top-4 bg-slate-900 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                          Popular
                        </span>
                      )}

                      <div className="p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                          {pkg.name}
                        </p>

                        <p className="mt-4 text-2xl font-semibold text-slate-900">
                          {pkg.price}
                        </p>

                        <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">
                          {pkg.description}
                        </p>

                        <div className="my-6 h-px bg-slate-200" />

                        <div className="space-y-3">
                          {pkg.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-start gap-3"
                            >
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-slate-100">
                                <FiCheck className="h-3 w-3 text-slate-700" />
                              </span>

                              <span className="text-sm text-slate-600">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div
                          className={`mt-7 flex items-center justify-center border px-4 py-3 text-sm font-semibold ${
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

            {/* Footer */}
            <div className="flex flex-col-reverse gap-3 border-t border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
              >
                <FiArrowLeft className="h-4 w-4" />
                Back
              </button>

              <button
                type="button"
                onClick={handleNextFromStepTwo}
                className="group inline-flex items-center justify-center gap-2 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Continue
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        )}

        {/* ========================= */}
        {/* STEP 3 */}
        {/* ========================= */}

        {step === 3 && (
          <form
            onSubmit={handleSubmit}
            className="border border-slate-200 bg-white"
          >
            <div className="border-b border-slate-200 p-6 sm:p-8">
              <h2 className="font-semibold text-slate-900">Your Details</h2>

              <p className="mt-1 text-sm text-slate-500">
                Enter your contact information so we can reach you about your
                booking.
              </p>
            </div>

            <div className="space-y-6 p-6 sm:p-8">
              {error && (
                <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              <div className="grid gap-6 sm:grid-cols-2">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <FiUser className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="h-12 w-full border border-slate-200 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <FiMail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="h-12 w-full border border-slate-200 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Phone Number
                  </label>

                  <div className="relative">
                    <FiPhone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0800 000 0000"
                      className="h-12 w-full border border-slate-200 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="notes"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Additional Notes
                    <span className="ml-2 font-normal text-slate-400">
                      Optional
                    </span>
                  </label>

                  <textarea
                    id="notes"
                    name="notes"
                    rows="4"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us anything else about your event..."
                    className="w-full resize-none border border-slate-200 p-4 text-sm text-slate-700 outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                  />
                </div>
              </div>
            </div>

            {/* Review Summary */}
            <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-sm font-semibold text-slate-900">
                Booking Summary
              </h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs text-slate-400">Event Date</p>
                  <p className="mt-1 text-sm font-medium text-slate-800">
                    {formData.date}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Event Type</p>
                  <p className="mt-1 text-sm font-medium text-slate-800">
                    {formData.eventType}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Guests</p>
                  <p className="mt-1 text-sm font-medium text-slate-800">
                    {formData.guests}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Package</p>
                  <p className="mt-1 text-sm font-medium text-slate-800">
                    {formData.package?.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col-reverse gap-3 border-t border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
              >
                <FiArrowLeft className="h-4 w-4" />
                Back
              </button>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Confirm Booking
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        )}

        {/* ========================= */}
        {/* STEP 4 — SUCCESS */}
        {/* ========================= */}

        {step === 4 && (
          <div className="border border-slate-200 bg-white p-8 text-center sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
              <FiCheck className="h-7 w-7 text-green-600" />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Booking Received
            </p>

            <h1 className="mt-2 text-2xl font-semibold text-slate-900">
              Your booking request has been submitted
            </h1>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">
              Thank you for choosing D Gold Event Centre. We've received your
              booking request and will contact you with the next steps.
            </p>

            {/* Booking ID */}
            <div className="mx-auto mt-8 max-w-sm border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs text-slate-400">Booking Reference</p>

              <p className="mt-2 text-lg font-semibold tracking-wider text-slate-900">
                DG-{Math.floor(100000 + Math.random() * 900000)}
              </p>
            </div>

            {/* Summary */}
            <div className="mx-auto mt-6 max-w-sm border border-slate-200 p-5 text-left">
              <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                <span className="text-sm text-slate-500">Event</span>

                <span className="text-right text-sm font-medium text-slate-900">
                  {formData.eventType}
                </span>
              </div>

              <div className="flex justify-between gap-4 border-b border-slate-100 py-3">
                <span className="text-sm text-slate-500">Date</span>

                <span className="text-right text-sm font-medium text-slate-900">
                  {formData.date}
                </span>
              </div>

              <div className="flex justify-between gap-4 border-b border-slate-100 py-3">
                <span className="text-sm text-slate-500">Guests</span>

                <span className="text-right text-sm font-medium text-slate-900">
                  {formData.guests}
                </span>
              </div>

              <div className="flex justify-between gap-4 pt-3">
                <span className="text-sm text-slate-500">Package</span>

                <span className="text-right text-sm font-medium text-slate-900">
                  {formData.package?.name}
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/dashboard/bookings"
                className="inline-flex items-center justify-center bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                View My Bookings
              </Link>

              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
