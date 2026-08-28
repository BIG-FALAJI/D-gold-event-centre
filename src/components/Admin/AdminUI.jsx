"use client";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { useAdmin } from "./AdminProvider";

export function AdminPageHeader({ eyebrow, title, description, action }) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h1>
          {description && (
            <p className="mt-2 text-sm text-slate-500">{description}</p>
          )}
        </div>
        {action}
      </div>
    </header>
  );
}
export function StatusBadge({ status }) {
  const style =
    {
      pending: "bg-amber-50 text-amber-700",
      confirmed: "bg-emerald-50 text-emerald-700",
      rejected: "bg-red-50 text-red-700",
      completed: "bg-slate-100 text-slate-600",
      available: "bg-sky-50 text-sky-700",
      booked: "bg-slate-900 text-white",
      blocked: "bg-red-50 text-red-700",
    }[status] || "bg-slate-100 text-slate-600";
  return (
    <span
      className={`inline-flex px-2.5 py-1 text-xs font-medium capitalize ${style}`}
    >
      {status}
    </span>
  );
}
export function AdminButton({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
}) {
  const styles =
    variant === "danger"
      ? "bg-red-600 text-white hover:bg-red-700"
      : variant === "secondary"
        ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
        : "bg-slate-900 text-white hover:bg-slate-700";
  const classes = `inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${styles} ${className}`;
  return href ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
export function Notice() {
  const { notice } = useAdmin();
  if (!notice) return null;
  return (
    <div className="fixed bottom-5 right-5 z-[60] max-w-sm border border-emerald-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-lg">
      <div className="flex gap-3">
        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
        {notice}
      </div>
    </div>
  );
}
export function AdminModal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/35 p-4">
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-lg bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <h2 className="font-semibold text-slate-900">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1 text-slate-400 hover:text-slate-900"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
export function EmptyState({ title, text }) {
  return (
    <div className="border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
      <p className="font-semibold text-slate-800">{title}</p>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
        {text}
      </p>
    </div>
  );
}
