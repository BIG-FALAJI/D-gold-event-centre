"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  adminAvailability,
  adminBookings,
  adminFaqs,
  adminGallery,
  adminPackages,
  adminTestimonials,
  defaultWebsiteContent,
} from "@/data/adminData";

const AdminContext = createContext(null);
const storageKey = "d_gold_admin_prototype";
const defaults = {
  bookings: adminBookings,
  availability: adminAvailability,
  packages: adminPackages,
  gallery: adminGallery,
  testimonials: adminTestimonials,
  faqs: adminFaqs,
  content: defaultWebsiteContent,
};
function savedData() {
  try {
    return {
      ...defaults,
      ...JSON.parse(localStorage.getItem(storageKey) || "{}"),
    };
  } catch {
    return defaults;
  }
}

export function AdminProvider({ children }) {
  const [data, setData] = useState(defaults);
  const [notice, setNotice] = useState("");
  useEffect(() => {
    const timer = window.setTimeout(() => setData(savedData()), 0);
    return () => window.clearTimeout(timer);
  }, []);
  const update = (key, value) =>
    setData((current) => {
      const next = { ...current, [key]: value };
      localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  const flash = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3200);
  };
  const value = useMemo(
    () => ({ ready: true, ...data, notice, update, flash }),
    [data, notice],
  );
  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}
export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) throw new Error("useAdmin must be used inside AdminProvider");
  return context;
}
