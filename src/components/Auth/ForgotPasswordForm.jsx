"use client";

import Link from "next/link";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    setError("");

    // Temporary frontend-only simulation.
    // Later this will call the real backend/API.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center bg-slate-100 text-slate-900">
          <FiCheckCircle className="h-6 w-6" />
        </div>

        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
          Check your email
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-500">
          If an account exists for{" "}
          <span className="font-medium text-slate-700">{email}</span>, we've
          sent instructions to reset your password.
        </p>

        <Link
          href="/sign-in"
          className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
        >
          <FiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Email address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setError("");
          }}
          placeholder="you@example.com"
          autoComplete="email"
          className="h-12 w-full border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
        />
      </div>

      <button
        type="submit"
        className="group flex h-12 w-full items-center justify-center gap-2 bg-slate-900 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
      >
        Send Reset Link
        <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      <Link
        href="/sign-in"
        className="group flex items-center justify-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
      >
        <FiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to sign in
      </Link>
    </form>
  );
}
