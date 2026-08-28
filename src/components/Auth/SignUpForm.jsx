"use client";

import Link from "next/link";
import { useState } from "react";
import { FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const { firstName, lastName, email, phone, password, confirmPassword } =
      formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!acceptedTerms) {
      setError("Please accept the Terms of Service and Privacy Policy.");
      return;
    }

    // Temporary frontend-only registration
    localStorage.setItem(
      "d_gold_user",
      JSON.stringify({
        name: `${firstName} ${lastName}`,
        email,
        phone,
        role: "user",
      }),
    );

    window.location.href = "/dashboard";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Name */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            First name
          </label>

          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            className="h-12 w-full border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Last name
          </label>

          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className="h-12 w-full border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
          />
        </div>
      </div>

      {/* Email */}
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
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="h-12 w-full border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Phone number
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="0801 234 5678"
          className="h-12 w-full border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Password
        </label>

        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            placeholder="At least 8 characters"
            className="h-12 w-full border border-slate-200 bg-white px-4 pr-12 text-sm outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center text-slate-400 hover:text-slate-700"
          >
            {showPassword ? (
              <FiEyeOff className="h-4 w-4" />
            ) : (
              <FiEye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Confirm password
        </label>

        <div className="relative">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Repeat your password"
            className="h-12 w-full border border-slate-200 bg-white px-4 pr-12 text-sm outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center text-slate-400 hover:text-slate-700"
          >
            {showConfirmPassword ? (
              <FiEyeOff className="h-4 w-4" />
            ) : (
              <FiEye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Terms */}
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={(event) => setAcceptedTerms(event.target.checked)}
          className="mt-1 h-4 w-4 accent-slate-900"
        />

        <span className="text-xs leading-5 text-slate-500">
          By creating an account, you agree to our{" "}
          <Link
            href="/terms"
            className="font-medium text-slate-900 hover:underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="font-medium text-slate-900 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="group flex h-12 w-full items-center justify-center gap-2 bg-slate-900 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
      >
        Create Account
        <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      {/* Sign In */}
      <p className="text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="font-semibold text-slate-900 hover:underline"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}
