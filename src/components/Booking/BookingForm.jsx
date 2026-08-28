"use client";

import { useState } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const eventTypes = [
  "Wedding",
  "Birthday",
  "Naming Ceremony",
  "Burial Ceremony",
  "Corporate Event",
  "Conference",
  "Religious Event",
  "Other",
];

export default function BookingForm({ selectedDate }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    guestCount: "",
    eventDate: selectedDate || "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Booking request:", formData);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center bg-white px-6 py-16 text-center sm:px-10">
        <div className="flex h-16 w-16 items-center justify-center bg-slate-900 text-white">
          <FiCheck className="h-7 w-7" />
        </div>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Request Received
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
          Thank you, {formData.fullName.split(" ")[0]}.
        </h2>

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
          Your booking request has been received. The D Gold Event Centre team
          will review your request and contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 shadow-sm sm:p-8 lg:p-10"
    >
      <div className="border-b border-slate-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Event Information
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-slate-900">
          Tell us about your event
        </h2>
      </div>

      <div className="mt-8 space-y-8">
        {/* Name */}
        <div>
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-slate-700"
          >
            Full Name
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="mt-2 w-full border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:bg-white"
          />
        </div>

        {/* Email + Phone */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-2 w-full border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:bg-white"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="text-sm font-medium text-slate-700"
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="0800 000 0000"
              className="mt-2 w-full border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:bg-white"
            />
          </div>
        </div>

        {/* Event Type + Guests */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="eventType"
              className="text-sm font-medium text-slate-700"
            >
              Event Type
            </label>

            <select
              id="eventType"
              name="eventType"
              required
              value={formData.eventType}
              onChange={handleChange}
              className="mt-2 w-full appearance-none border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:bg-white"
            >
              <option value="">Select event type</option>

              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="guestCount"
              className="text-sm font-medium text-slate-700"
            >
              Expected Guests
            </label>

            <input
              id="guestCount"
              name="guestCount"
              type="number"
              min="1"
              required
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="e.g. 250"
              className="mt-2 w-full border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:bg-white"
            />
          </div>
        </div>

        {/* Date */}
        <div>
          <label
            htmlFor="eventDate"
            className="text-sm font-medium text-slate-700"
          >
            Event Date
          </label>

          <input
            id="eventDate"
            name="eventDate"
            type="date"
            required
            value={formData.eventDate}
            onChange={handleChange}
            className="mt-2 w-full border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:bg-white"
          />

          {!selectedDate && (
            <p className="mt-2 text-xs text-slate-400">
              You can also choose your preferred date here.
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="text-sm font-medium text-slate-700"
          >
            Additional Information
            <span className="ml-1 font-normal text-slate-400">(Optional)</span>
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us anything else we should know about your event..."
            className="mt-2 w-full resize-none border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:bg-white"
          />
        </div>

        {/* Submit */}
        <div className="border-t border-slate-200 pt-6">
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-3 bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-slate-700 sm:w-auto"
          >
            Submit Booking Request
            <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <p className="mt-4 text-xs leading-5 text-slate-400">
            Submitting this form does not automatically confirm your booking.
            Our team will review your request and contact you.
          </p>
        </div>
      </div>
    </form>
  );
}
