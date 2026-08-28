export default function ContactHero() {
  return (
    <section className="bg-slate-900 px-5 pb-20 pt-36 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-white/50" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Contact D Gold
            </p>
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's plan something
            <span className="block text-white/40">memorable together.</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            Have questions about the venue, availability, or your upcoming
            event? We'd love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}
