import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-slate-900">
      <Image
        src="/landingBg.jpg"
        alt="D Gold Event Centre"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/70" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 lg:px-10 lg:pb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-white/50" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              About D Gold
            </p>
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            A space created for
            <span className="block text-white/50">memorable occasions.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            D Gold Event Centre provides a versatile space where celebrations,
            gatherings, and important moments can come together in comfort and
            style.
          </p>
        </div>
      </div>
    </section>
  );
}
