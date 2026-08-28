"use client";

import { useState } from "react";
import { FiAlertTriangle, FiLock, FiSave } from "react-icons/fi";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    bookingUpdates: true,
    emailNotifications: true,
    marketingEmails: false,
  });

  const [message, setMessage] = useState("");

  const handleToggle = (name) => {
    setSettings((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));

    setMessage("");
  };

  const handleSave = () => {
    setMessage("Settings updated successfully.");
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Account
        </p>

        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Settings
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Manage your account preferences and notifications.
        </p>
      </div>

      <div className="space-y-6">
        {/* Notifications */}
        <section className="border border-slate-200 bg-white">
          <div className="border-b border-slate-200 p-6">
            <h2 className="font-semibold text-slate-900">Notifications</h2>

            <p className="mt-1 text-sm text-slate-500">
              Choose which notifications you want to receive.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            <SettingToggle
              title="Booking updates"
              description="Receive updates about your booking requests."
              enabled={settings.bookingUpdates}
              onChange={() => handleToggle("bookingUpdates")}
            />

            <SettingToggle
              title="Email notifications"
              description="Receive important account notifications by email."
              enabled={settings.emailNotifications}
              onChange={() => handleToggle("emailNotifications")}
            />

            <SettingToggle
              title="Marketing emails"
              description="Receive occasional news and offers from D Gold."
              enabled={settings.marketingEmails}
              onChange={() => handleToggle("marketingEmails")}
            />
          </div>

          <div className="border-t border-slate-200 p-6">
            {message && (
              <p className="mb-4 text-sm text-green-600">{message}</p>
            )}

            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-2 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <FiSave className="h-4 w-4" />
              Save Settings
            </button>
          </div>
        </section>

        {/* Password */}
        <section className="border border-slate-200 bg-white">
          <div className="flex items-start gap-4 p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-slate-100">
              <FiLock className="h-4 w-4 text-slate-600" />
            </div>

            <div className="flex-1">
              <h2 className="font-semibold text-slate-900">Password</h2>

              <p className="mt-1 text-sm text-slate-500">
                Change your account password.
              </p>

              <button
                type="button"
                className="mt-4 border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Change Password
              </button>
            </div>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="border border-red-200 bg-white">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-red-50">
                <FiAlertTriangle className="h-4 w-4 text-red-600" />
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">Delete Account</h2>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Permanently delete your account and associated information.
                </p>

                <button
                  type="button"
                  className="mt-4 border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function SettingToggle({ title, description, enabled, onChange }) {
  return (
    <div className="flex items-center justify-between gap-6 p-6">
      <div>
        <h3 className="text-sm font-medium text-slate-800">{title}</h3>

        <p className="mt-1 text-sm leading-5 text-slate-500">{description}</p>
      </div>

      <button
        type="button"
        onClick={onChange}
        aria-pressed={enabled}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          enabled ? "bg-slate-900" : "bg-slate-200"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}
