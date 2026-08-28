"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
export default function AdminGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (localStorage.getItem("d_gold_admin")) setAllowed(true);
      else
        router.replace(`/admin/sign-in?next=${encodeURIComponent(pathname)}`);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [pathname, router]);
  if (!allowed)
    return (
      <div className="grid min-h-screen place-items-center bg-slate-50 text-sm text-slate-400">
        Loading admin workspace…
      </div>
    );
  return children;
}
