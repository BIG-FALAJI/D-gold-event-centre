"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiMenu, BiX } from "react-icons/bi";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Venue", href: "/venue" },
  { name: "Packages", href: "/packages" },
  { name: "Gallery", href: "/gallery" },
  { name: "Availability", href: "/availability" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (href) => pathname === href;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-slate-900"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 flex items-center gap-3"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`flex h-11 w-11 items-center justify-center border text-sm font-bold tracking-tight transition-colors duration-300 ${
              isScrolled
                ? "border-slate-700 bg-slate-800 text-white"
                : "border-white/80 bg-white/10 text-white backdrop-blur-sm"
            }`}
          >
            DG
          </div>

          <div className="leading-none">
            <p
              className={`text-base font-bold tracking-[0.18em] transition-colors duration-300 ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            >
              D GOLD
            </p>

            <p
              className={`mt-1 text-[9px] font-medium tracking-[0.28em] transition-colors duration-300 ${
                isScrolled ? "text-slate-500" : "text-white/75"
              }`}
            >
              EVENT CENTRE
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative text-sm font-medium transition-colors duration-300 ${
                  active
                    ? isScrolled
                      ? "text-slate-950"
                      : "text-white"
                    : isScrolled
                      ? "text-slate-600 hover:text-slate-950"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}

                {/* Active / Hover underline */}
                <span
                  className={`absolute -bottom-2 left-0 h-px transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  } ${isScrolled ? "bg-slate-900" : "bg-white"}`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/booking"
            className={`inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              isScrolled
                ? "bg-slate-800 text-white hover:bg-slate-700"
                : "bg-white text-slate-900 hover:bg-slate-100"
            }`}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={`relative z-50 flex h-11 w-11 items-center justify-center transition-colors lg:hidden ${
            isScrolled ? "text-slate-900" : "text-white"
          }`}
        >
          {isMenuOpen ? (
            <BiX className="h-7 w-7 text-slate-900" />
          ) : (
            <BiMenu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col px-6 pb-10 pt-28 sm:px-10">
          {/* Mobile Logo */}
          <div className="mb-10 border-b border-slate-200 pb-6">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
              Welcome to
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-[0.12em] text-slate-900">
              D GOLD
            </h2>

            <p className="mt-1 text-xs tracking-[0.25em] text-slate-500">
              EVENT CENTRE
            </p>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col">
            {navLinks.map((link, index) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between border-b py-5 text-lg font-medium transition-colors ${
                    active
                      ? "border-slate-900 text-slate-900"
                      : "border-slate-200 text-slate-800 hover:text-slate-500"
                  }`}
                >
                  <span>{link.name}</span>

                  <span
                    className={`text-sm ${
                      active ? "font-semibold text-slate-900" : "text-slate-400"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <div className="mt-auto">
            <Link
              href="/booking"
              onClick={() => setIsMenuOpen(false)}
              className="flex w-full items-center justify-center bg-slate-800 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
            >
              Book the Venue
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
