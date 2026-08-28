"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FiArrowRight, FiEye, FiEyeOff, FiLock } from "react-icons/fi";
export default function AdminSignIn() {
  const router = useRouter();
  const params = useSearchParams();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!email || !password)
      return setError("Enter your email and password to continue.");
    localStorage.setItem(
      "d_gold_admin",
      JSON.stringify({ email, name: "Admin Office", remember }),
    );
    router.push(params.get("next") || "/admin");
  };
  return (
    <main className="grid min-h-screen bg-slate-100 lg:grid-cols-[1fr_0.9fr]">
      <section className="hidden bg-slate-900 p-12 text-white lg:flex lg:flex-col">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center border border-white/30 text-sm font-bold">
            DG
          </span>
          <span>
            <span className="block text-base font-bold tracking-[0.18em]">
              D GOLD
            </span>
            <span className="block text-[9px] tracking-[0.25em] text-white/60">
              EVENT CENTRE
            </span>
          </span>
        </Link>
        <div className="my-auto max-w-md">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
            Admin Portal
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight">
            Keep every celebration running beautifully.
          </h1>
          <p className="mt-6 text-base leading-8 text-white/60">
            Manage venue bookings, dates, packages and the public website from
            one calm, focused workspace.
          </p>
        </div>
        <p className="text-sm text-white/40">
          D Gold Event Centre · Egbeda, Lagos
        </p>
      </section>
      <section className="flex items-center justify-center p-5 sm:p-8">
        <div className="w-full max-w-md">
          <Link href="/" className="mb-12 flex items-center gap-3 lg:hidden">
            <span className="grid h-10 w-10 place-items-center bg-slate-900 text-xs font-bold text-white">
              DG
            </span>
            <span className="text-sm font-bold tracking-[0.16em] text-slate-900">
              D GOLD
            </span>
          </Link>
          <div className="border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex h-10 w-10 items-center justify-center bg-slate-100 text-slate-700">
              <FiLock className="h-4 w-4" />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Admin Portal
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              Welcome back
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Sign in to manage D Gold Event Centre.
            </p>
            <form onSubmit={submit} className="mt-7 space-y-5">
              {error && (
                <p className="border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700">
                  {error}
                </p>
              )}
              <label className="block text-sm font-medium text-slate-700">
                Email address
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@dgoldeventcentre.com"
                  className="mt-2 h-11 w-full border border-slate-200 px-3 text-sm outline-none focus:border-slate-500"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Password
                <span className="relative mt-2 block">
                  <input
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-11 w-full border border-slate-200 px-3 pr-11 text-sm outline-none focus:border-slate-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-0 top-0 grid h-11 w-11 place-items-center text-slate-400"
                  >
                    {show ? <FiEyeOff /> : <FiEye />}
                  </button>
                </span>
              </label>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="accent-slate-900"
                  />
                  Remember me
                </label>
                <span className="text-xs font-medium text-slate-400">
                  Forgot password?
                </span>
              </div>
              <button
                type="submit"
                className="flex h-11 w-full items-center justify-center gap-2 bg-slate-900 text-sm font-semibold text-white hover:bg-slate-700"
              >
                Sign in <FiArrowRight />
              </button>
            </form>
            <p className="mt-6 text-center text-xs leading-5 text-slate-400">
              Prototype access only — this is not secure authentication.
            </p>
          </div>
          <Link
            href="/"
            className="mt-6 block text-center text-sm text-slate-500 hover:text-slate-900"
          >
            ← Back to main website
          </Link>
        </div>
      </section>
    </main>
  );
}
