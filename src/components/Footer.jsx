import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaMapPin,
  FaPhone,
} from "react-icons/fa";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Venue", href: "/venue" },
  { name: "Packages", href: "/packages" },
  { name: "Gallery", href: "/gallery" },
  { name: "Availability", href: "/availability" },
];

const supportLinks = [
  { name: "Contact Us", href: "/contact" },
  { name: "Book the Venue", href: "/booking" },
  { name: "FAQs", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              {/* Temporary Logo Mark */}
              <div className="flex h-12 w-12 items-center justify-center border border-white/40 bg-white text-sm font-bold tracking-tight text-slate-800">
                DG
              </div>

              <div className="leading-none">
                <p className="text-lg font-bold tracking-[0.18em]">D GOLD</p>

                <p className="mt-1 text-[9px] font-medium tracking-[0.3em] text-white/60">
                  EVENT CENTRE
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/60">
              A beautiful and versatile event space in Egbeda, Lagos, designed
              to make your celebrations, ceremonies, and special occasions
              memorable.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-all duration-300 hover:border-white hover:bg-white hover:text-slate-800"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-all duration-300 hover:border-white hover:bg-white hover:text-slate-800"
              >
                <FaFacebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}

                    <BsArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Information
            </h3>

            <ul className="mt-6 space-y-4">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}

                    <BsArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-5">
              {/* Address */}
              <div className="flex gap-4">
                <FaMapPin className="mt-1 h-5 w-5 shrink-0 text-white/50" />

                <div>
                  <p className="text-sm leading-6 text-white/65">
                    No. 49, Isiba Oluwo,
                    <br />
                    Egbeda, Lagos, Nigeria
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <FaPhone className="mt-1 h-5 w-5 shrink-0 text-white/50" />

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/35">
                    Phone
                  </p>

                  <a
                    href="tel:+2340000000000"
                    className="mt-1 block text-sm text-white/65 transition-colors hover:text-white"
                  >
                    +234 000 000 0000
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <FaMailBulk className="mt-1 h-5 w-5 shrink-0 text-white/50" />

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/35">
                    Email
                  </p>

                  <a
                    href="mailto:info@dgoldeventcentre.com"
                    className="mt-1 block break-all text-sm text-white/65 transition-colors hover:text-white"
                  >
                    info@dgoldeventcentre.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="mt-16 border-t border-white/10 pt-10 lg:mt-20">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Planning something special?
              </p>

              <p className="mt-2 text-sm text-white/50">
                Check our availability and reserve your date.
              </p>
            </div>

            <Link
              href="/booking"
              className="inline-flex w-fit items-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:bg-slate-100"
            >
              Book the Venue
              <BsArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-white/40 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>
            © {new Date().getFullYear()} D Gold Event Centre. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition-colors hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
