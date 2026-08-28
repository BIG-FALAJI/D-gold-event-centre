"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  FiBookOpen,
  FiCalendar,
  FiChevronLeft,
  FiFileText,
  FiGrid,
  FiImage,
  FiLogOut,
  FiMenu,
  FiMessageSquare,
  FiPackage,
  FiSettings,
  FiX,
} from "react-icons/fi";

const groups = [
  {
    label: "Overview",
    items: [{ name: "Dashboard", href: "/admin", icon: FiGrid }],
  },
  {
    label: "Bookings",
    items: [
      { name: "All Bookings", href: "/admin/bookings", icon: FiBookOpen },
      { name: "Availability", href: "/admin/availability", icon: FiCalendar },
    ],
  },
  {
    label: "Venue management",
    items: [
      { name: "Packages", href: "/admin/packages", icon: FiPackage },
      { name: "Gallery", href: "/admin/gallery", icon: FiImage },
    ],
  },
  {
    label: "Website",
    items: [
      {
        name: "Testimonials",
        href: "/admin/testimonials",
        icon: FiMessageSquare,
      },
      { name: "FAQs", href: "/admin/faqs", icon: FiFileText },
      { name: "Website Content", href: "/admin/content", icon: FiFileText },
    ],
  },
  {
    label: "System",
    items: [{ name: "Settings", href: "/admin/settings", icon: FiSettings }],
  },
];

function Brand() {
  return (
    <Link href="/admin" className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center bg-slate-900 text-xs font-bold text-white">
        DG
      </span>
      <span>
        <span className="block text-sm font-bold tracking-[0.16em] text-slate-900">
          D GOLD
        </span>
        <span className="block text-[8px] font-medium tracking-[0.24em] text-slate-500">
          EVENT CENTRE
        </span>
      </span>
    </Link>
  );
}
function Links({ close }) {
  const pathname = usePathname();
  return (
    <nav className="space-y-6 px-4 py-5">
      {groups.map((group) => (
        <div key={group.label}>
          <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            {group.label}
          </p>
          <div className="space-y-0.5">
            {group.items.map(({ name, href, icon: Icon }) => {
              const active =
                href === "/admin"
                  ? pathname === href
                  : pathname.startsWith(href);
              return (
                <Link
                  key={name}
                  href={href}
                  onClick={close}
                  className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors ${active ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"}`}
                >
                  <Icon className="h-4 w-4" />
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}
function Account({ close }) {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("d_gold_admin");
    close?.();
    router.push("/admin/sign-in");
  };
  return (
    <div className="border-t border-slate-200 p-4">
      <Link
        href="/"
        onClick={close}
        className="mb-3 flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900"
      >
        <FiChevronLeft className="h-4 w-4" />
        View Website
      </Link>
      <div className="flex items-center gap-3 border-t border-slate-100 px-3 pt-4">
        <span className="grid h-9 w-9 place-items-center bg-slate-100 text-xs font-semibold text-slate-700">
          AO
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-slate-800">
            Admin Office
          </p>
          <p className="text-xs text-slate-400">Venue manager</p>
        </div>
      </div>
      <button
        type="button"
        onClick={logout}
        className="mt-3 flex w-full items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50"
      >
        <FiLogOut className="h-4 w-4" />
        Sign out
      </button>
    </div>
  );
}
export default function AdminSidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[268px] flex-col border-r border-slate-200 bg-white lg:flex">
        <div className="flex h-20 items-center border-b border-slate-200 px-6">
          <Brand />
        </div>
        <div className="flex-1 overflow-y-auto">
          <Links />
        </div>
        <Account />
      </aside>
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5 lg:hidden">
        <Brand />
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="grid h-10 w-10 place-items-center text-slate-700 hover:bg-slate-100"
        >
          <FiMenu className="h-5 w-5" />
        </button>
      </header>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-slate-950/30"
          />
          <aside className="relative flex h-full w-[268px] max-w-[86vw] flex-col bg-white shadow-2xl">
            <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
              <Brand />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-9 w-9 place-items-center text-slate-500 hover:bg-slate-100"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Links close={() => setOpen(false)} />
            </div>
            <Account close={() => setOpen(false)} />
          </aside>
        </div>
      )}
    </>
  );
}
