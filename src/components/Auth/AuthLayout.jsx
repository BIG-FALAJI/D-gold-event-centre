import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children, title, description }) {
  return (
    <main className="min-h-screen bg-slate-50 lg:grid lg:grid-cols-2">
      {/* Left / Image */}
      <div className="relative hidden min-h-screen overflow-hidden bg-slate-900 lg:block">
        <Image
          src="/landingBg.jpg"
          alt="D Gold Event Centre"
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/65" />

        <div className="relative z-10 flex min-h-screen flex-col justify-between p-10 xl:p-14">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center border border-white/70 bg-white/10 text-sm font-bold text-white backdrop-blur-sm">
              DG
            </div>

            <div className="leading-none">
              <p className="text-base font-bold tracking-[0.18em] text-white">
                D GOLD
              </p>

              <p className="mt-1 text-[9px] tracking-[0.28em] text-white/60">
                EVENT CENTRE
              </p>
            </div>
          </Link>

          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              D Gold Event Centre
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white xl:text-5xl">
              Your memorable occasion starts with the right space.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/60">
              Manage your bookings, explore event options, and plan your next
              occasion with D Gold.
            </p>
          </div>

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} D Gold Event Centre
          </p>
        </div>
      </div>

      {/* Right / Form */}
      <div className="flex min-h-screen items-center justify-center px-5 py-12 sm:px-8 lg:px-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <Link href="/" className="mb-10 flex items-center gap-3 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center bg-slate-900 text-xs font-bold text-white">
              DG
            </div>

            <div className="leading-none">
              <p className="text-sm font-bold tracking-[0.18em] text-slate-900">
                D GOLD
              </p>

              <p className="mt-1 text-[8px] tracking-[0.28em] text-slate-500">
                EVENT CENTRE
              </p>
            </div>
          </Link>

          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              {title}
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {description}
            </p>
          </div>

          <div className="mt-8">{children}</div>
        </div>
      </div>
    </main>
  );
}
