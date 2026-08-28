"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  FiCalendar,
  FiGrid,
  FiLogOut,
  FiMenu,
  FiSettings,
  FiUser,
  FiX,
} from "react-icons/fi";

const links = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: FiGrid,
  },
  {
    name: "My Bookings",
    href: "/dashboard/bookings",
    icon: FiCalendar,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: FiUser,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: FiSettings,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("d_gold_user");
    setIsMobileMenuOpen(false);
    window.location.href = "/sign-in";
  };

  const isLinkActive = (href) => {
    return (
      pathname === href || (href !== "/dashboard" && pathname.startsWith(href))
    );
  };

  return (
    <>
      {/* =====================================================
          DESKTOP SIDEBAR
      ===================================================== */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
        {/* Logo */}
        <div className="flex h-20 items-center border-b border-slate-200 px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center bg-slate-900 text-xs font-bold text-white">
              DG
            </div>

            <div className="leading-none">
              <p className="text-sm font-bold tracking-[0.18em] text-slate-900">
                D GOLD
              </p>

              <p className="mt-1 text-[8px] tracking-[0.25em] text-slate-500">
                EVENT CENTRE
              </p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <p className="mb-4 px-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
            Menu
          </p>

          <div className="space-y-1">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = isLinkActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 px-3 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom */}
        <div className="border-t border-slate-200 p-4">
          <Link
            href="/"
            className="mb-1 flex items-center gap-3 px-3 py-3 text-sm text-slate-500 transition-colors hover:text-slate-900"
          >
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            Back to website
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-3 py-3 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
          >
            <FiLogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* =====================================================
          MOBILE HEADER
      ===================================================== */}
      <div className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5 lg:hidden">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center bg-slate-900 text-[10px] font-bold text-white">
            DG
          </div>

          <span className="text-sm font-bold tracking-[0.15em] text-slate-900">
            D GOLD
          </span>
        </Link>

        {/* Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open dashboard menu"
          aria-expanded={isMobileMenuOpen}
          className="flex h-10 w-10 items-center justify-center text-slate-900 transition-colors hover:bg-slate-100"
        >
          <FiMenu className="h-6 w-6" />
        </button>
      </div>

      {/* =====================================================
          MOBILE SIDEBAR / DRAWER
      ===================================================== */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <button
            type="button"
            aria-label="Close dashboard menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* Drawer */}
          <aside className="relative flex h-full w-72 max-w-[85vw] flex-col bg-white shadow-xl">
            {/* Drawer Header */}
            <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center bg-slate-900 text-xs font-bold text-white">
                  DG
                </div>

                <div className="leading-none">
                  <p className="text-sm font-bold tracking-[0.18em] text-slate-900">
                    D GOLD
                  </p>

                  <p className="mt-1 text-[8px] tracking-[0.25em] text-slate-500">
                    EVENT CENTRE
                  </p>
                </div>
              </Link>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close dashboard menu"
                className="flex h-10 w-10 items-center justify-center text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 px-4 py-6">
              <p className="mb-4 px-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                Menu
              </p>

              <div className="space-y-1">
                {links.map((link) => {
                  const Icon = link.icon;
                  const isActive = isLinkActive(link.href);

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-3 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-slate-900 text-white"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Mobile Bottom */}
            <div className="border-t border-slate-200 p-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mb-1 flex items-center gap-3 px-3 py-3 text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                Back to website
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full items-center gap-3 px-3 py-3 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
              >
                <FiLogOut className="h-4 w-4" />
                Sign out
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
