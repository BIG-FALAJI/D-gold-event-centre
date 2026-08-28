"use client";

import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  guests: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
        {/* Introduction */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Send an enquiry
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Tell us about your event.
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
            Share a few details about your occasion and we'll have a better
            understanding of what you're looking for.
          </p>

          <div className="mt-10 border-l border-slate-300 pl-5">
            <p className="text-sm font-medium text-slate-800">
              Planning a wedding, birthday, corporate event or celebration?
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Let us know what you have in mind.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          {submitted ? (
            <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center bg-slate-900 text-white">
                <FiCheckCircle className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                Enquiry received
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                Thank you for reaching out to D Gold Event Centre. We'll be
                happy to discuss your event with you.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234..."
                    className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-500"
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label
                    htmlFor="eventType"
                    className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600"
                  >
                    Event Type
                  </label>

                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={form.eventType}
                    onChange={handleChange}
                    className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500"
                  >
                    <option value="">Select event type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Corporate">Corporate Event</option>
                    <option value="Naming Ceremony">Naming Ceremony</option>
                    <option value="Burial">Burial</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Event Date */}
                <div>
                  <label
                    htmlFor="eventDate"
                    className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600"
                  >
                    Event Date
                  </label>

                  <input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={form.eventDate}
                    onChange={handleChange}
                    className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label
                    htmlFor="guests"
                    className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600"
                  >
                    Number of Guests
                  </label>

                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    value={form.guests}
                    onChange={handleChange}
                    placeholder="e.g. 200"
                    className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600"
                >
                  Tell Us More
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event..."
                  className="mt-2 w-full resize-none border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Send Enquiry
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                This form is currently a demo and does not send data to a
                server.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
