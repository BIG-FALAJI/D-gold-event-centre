"use client";

import Link from "next/link";
import { useState } from "react";
import { FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    /*
      Mock authentication for now.

      We'll replace this with a real API request
      when the backend is added.
    */

    localStorage.setItem(
      "d_gold_user",
      JSON.stringify({
        name: "Demo User",
        email: formData.email,
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
          className="h-12 w-full border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
        />
      </div>

      {/* Password */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor="password"
            className="text-sm font-medium text-slate-700"
          >
            Password
          </label>

          <Link
            href="/forgot-password"
            className="text-xs font-medium text-slate-500 transition-colors hover:text-slate-900"
          >
            Forgot password?
          </Link>
        </div>

        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="h-12 w-full border border-slate-200 bg-white px-4 pr-12 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center text-slate-400 transition-colors hover:text-slate-700"
          >
            {showPassword ? (
              <FiEyeOff className="h-4 w-4" />
            ) : (
              <FiEye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="group flex h-12 w-full items-center justify-center gap-2 bg-slate-900 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
      >
        Sign In
        <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      {/* Sign Up */}
      <p className="text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <Link
          href="/sign-up"
          className="font-semibold text-slate-900 hover:underline"
        >
          Create an account
        </Link>
      </p>
    </form>
  );
}
