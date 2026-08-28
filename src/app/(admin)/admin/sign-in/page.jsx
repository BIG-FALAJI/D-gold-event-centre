import AdminSignIn from "@/components/Admin/AdminSignIn";
import { Suspense } from "react";
export const metadata = { title: "Admin Sign In | D Gold Event Centre" };
export default function AdminSignInPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-slate-100" />}>
      <AdminSignIn />
    </Suspense>
  );
}
