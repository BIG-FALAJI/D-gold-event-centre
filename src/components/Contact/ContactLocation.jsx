import { FiMapPin, FiArrowUpRight } from "react-icons/fi";

export default function ContactLocation() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Location Info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Find Us
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Visit D Gold Event Centre.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-500">
              We're located in Egbeda, Lagos, making D Gold a convenient
              destination for celebrations and events around the area.
            </p>

            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-slate-100 text-slate-700">
                <FiMapPin className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  D Gold Event Centre
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  No. 49, Isiba Oluwo,
                  <br />
                  Egbeda, Lagos, Nigeria.
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=D+Gold+Event+Centre+Egbeda+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border-b border-slate-900 pb-1 text-sm font-semibold text-slate-900 transition-colors hover:text-slate-500"
            >
              Get directions
              <FiArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Map Placeholder */}
          <div className="relative min-h-[400px] overflow-hidden bg-slate-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center bg-slate-900 text-white">
                <FiMapPin className="h-6 w-6" />
              </div>

              <p className="mt-5 text-sm font-semibold text-slate-900">
                D Gold Event Centre
              </p>

              <p className="mt-2 text-xs text-slate-500">Egbeda, Lagos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
