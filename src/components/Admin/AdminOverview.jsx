"use client";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiCalendar,
  FiChevronRight,
  FiClock,
  FiEdit3,
  FiPackage,
  FiUsers,
} from "react-icons/fi";
import { useAdmin } from "./AdminProvider";
import { AdminButton, AdminPageHeader, Notice, StatusBadge } from "./AdminUI";
const formatDate = (date) =>
  new Date(`${date}T00:00:00`).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
export default function AdminOverview() {
  const { bookings } = useAdmin();
  const pending = bookings.filter((b) => b.status === "pending").length;
  const confirmed = bookings.filter((b) => b.status === "confirmed");
  const upcoming = confirmed.filter(
    (b) => new Date(b.date) >= new Date("2026-08-28"),
  );
  const metrics = [
    {
      label: "Total bookings",
      value: bookings.length,
      note: "All booking requests",
      icon: FiBookOpen,
    },
    {
      label: "Pending bookings",
      value: pending,
      note: "Require your review",
      icon: FiClock,
    },
    {
      label: "Confirmed bookings",
      value: confirmed.length,
      note: "Approved events",
      icon: FiUsers,
    },
    {
      label: "Upcoming events",
      value: upcoming.length,
      note: "Next 90 days",
      icon: FiCalendar,
    },
  ];
  const activity = [45, 62, 38, 74, 56, 88, 66, 72];
  return (
    <>
      <AdminPageHeader
        eyebrow="Operations dashboard"
        title="Good morning, Admin"
        description="Here’s what’s happening with D Gold Event Centre."
        action={
          <div className="flex flex-wrap gap-2">
            <AdminButton href="/admin/availability" variant="secondary">
              <FiCalendar className="h-4 w-4" />
              View availability
            </AdminButton>
            <AdminButton href="/admin/bookings">
              <FiBookOpen className="h-4 w-4" />
              New booking
            </AdminButton>
          </div>
        }
      />
      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10">
        <p className="mb-5 text-sm text-slate-400">Thursday, 28 August 2026</p>
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map(({ label, value, note, icon: Icon }) => (
            <article
              key={label}
              className="border border-slate-200 bg-white p-5"
            >
              <div className="flex items-start justify-between">
                <p className="text-sm text-slate-500">{label}</p>
                <Icon className="h-4 w-4 text-slate-400" />
              </div>
              <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
                {value}
              </p>
              <p className="mt-2 text-xs text-slate-400">{note}</p>
            </article>
          ))}
        </section>
        <section className="mt-6 grid gap-6 xl:grid-cols-[1.55fr_0.85fr]">
          <div className="border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Recent bookings
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Requests that need attention and upcoming events
                </p>
              </div>
              <Link
                href="/admin/bookings"
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-950"
              >
                View all <FiChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left">
                <thead className="bg-slate-50 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  <tr>
                    <th className="px-5 py-3">Reference</th>
                    <th className="px-4 py-3">Customer & event</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Guests</th>
                    <th className="px-5 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {bookings.slice(0, 4).map((b) => (
                    <tr key={b.id} className="hover:bg-slate-50">
                      <td className="px-5 py-4 text-sm font-semibold text-slate-800">
                        <Link href={`/admin/bookings/${b.id}`}>{b.id}</Link>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-sm font-medium text-slate-700">
                          {b.customer}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">{b.event}</p>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600">
                        {formatDate(b.date)}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600">
                        {b.guests}
                      </td>
                      <td className="px-5 py-4">
                        <StatusBadge status={b.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <aside className="border border-slate-200 bg-white">
            <div className="border-b border-slate-200 p-5">
              <h2 className="font-semibold text-slate-900">Booking activity</h2>
              <p className="mt-1 text-xs text-slate-400">
                New requests · last 8 weeks
              </p>
            </div>
            <div className="p-5">
              <div className="flex h-32 items-end gap-2">
                {activity.map((height, index) => (
                  <div key={index} className="flex flex-1 flex-col justify-end">
                    <div
                      style={{ height: `${height}%` }}
                      className="bg-slate-800 transition-colors hover:bg-slate-600"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[10px] uppercase tracking-wider text-slate-400">
                <span>Jul</span>
                <span>Aug</span>
              </div>
              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-sm font-medium text-slate-800">
                  8 booking requests
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  2 more than the previous period
                </p>
              </div>
            </div>
          </aside>
        </section>
        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="border border-slate-200 bg-white">
            <div className="border-b border-slate-200 p-5">
              <h2 className="font-semibold text-slate-900">Upcoming events</h2>
            </div>
            <div className="divide-y divide-slate-100">
              {upcoming.slice(0, 3).map((b) => (
                <div key={b.id} className="flex items-center gap-4 p-5">
                  <div className="w-11 border-r border-slate-200 pr-3 text-center">
                    <p className="text-xs font-semibold uppercase text-slate-400">
                      {new Date(`${b.date}T00:00:00`).toLocaleString("en", {
                        month: "short",
                      })}
                    </p>
                    <p className="text-xl font-semibold text-slate-900">
                      {new Date(`${b.date}T00:00:00`).getDate()}
                    </p>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-800">
                      {b.event}
                    </p>
                    <p className="mt-1 truncate text-xs text-slate-400">
                      {b.customer} · {b.guests} guests
                    </p>
                  </div>
                  <StatusBadge status={b.status} />
                </div>
              ))}
            </div>
          </div>
          <div className="border border-slate-200 bg-white">
            <div className="border-b border-slate-200 p-5">
              <h2 className="font-semibold text-slate-900">Quick actions</h2>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                ["View bookings", "/admin/bookings", FiBookOpen],
                ["Manage availability", "/admin/availability", FiCalendar],
                ["Manage packages", "/admin/packages", FiPackage],
                ["Edit website content", "/admin/content", FiEdit3],
              ].map(([label, href, Icon]) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 transition-colors hover:bg-slate-50"
                >
                  <span className="grid h-9 w-9 place-items-center bg-slate-100 text-slate-600">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="flex-1 text-sm font-medium text-slate-700">
                    {label}
                  </span>
                  <FiArrowUpRight className="h-4 w-4 text-slate-400" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Notice />
    </>
  );
}
