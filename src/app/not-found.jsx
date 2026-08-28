import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-16">
      <div className="w-full max-w-xl text-center">
        {/* Logo */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center bg-slate-900 text-sm font-bold tracking-wider text-white">
          DG
        </div>

        {/* 404 */}
        <p className="mt-10 text-7xl font-semibold tracking-tight text-slate-900 sm:text-8xl">
          404
        </p>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          Page Not Found
        </p>

        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          This page doesn&apos;t exist
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-500">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved, removed, or the address may be incorrect.
        </p>

        {/* Actions */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            <FiHome className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Brand */}
        <div className="mt-12 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400">
          <FiArrowLeft className="h-3 w-3" />D Gold Event Centre · Egbeda, Lagos
        </div>
      </div>
    </main>
  );
}
