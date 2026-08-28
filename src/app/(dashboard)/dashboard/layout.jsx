import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardSidebar />

      <main className="lg:pl-64">{children}</main>
    </div>
  );
}
