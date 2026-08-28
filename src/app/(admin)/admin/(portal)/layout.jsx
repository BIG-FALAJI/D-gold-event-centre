import AdminGuard from "@/components/admin/AdminGuard";
import { AdminProvider } from "@/components/Admin/AdminProvider";
import AdminSidebar from "@/components/Admin/AdminSidebar";

export default function AdminPortalLayout({ children }) {
  return (
    <AdminGuard>
      <AdminProvider>
        <div className="min-h-screen bg-slate-50">
          <AdminSidebar />

          <main className="min-h-screen lg:pl-[268px]">{children}</main>
        </div>
      </AdminProvider>
    </AdminGuard>
  );
}
