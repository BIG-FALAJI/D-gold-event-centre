import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiMapPin,
  FiUsers,
  FiCalendar,
  FiArrowRight,
} from "react-icons/fi";

const venueFacts = [
  {
    icon: FiMapPin,
    title: "Prime Location",
    text: "Conveniently located in Egbeda, Lagos.",
  },
  {
    icon: FiUsers,
    title: "Versatile Space",
    text: "Designed to accommodate different types of events.",
  },
  {
    icon: FiCalendar,
    title: "Flexible Booking",
    text: "Choose a date that works best for your occasion.",
  },
];

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-slate-500" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                About D Gold
              </p>
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              A space created for moments that matter.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-8 text-slate-500 sm:text-lg">
              D Gold Event Centre is a versatile event venue located at No. 49,
              Isiba Oluwo, Egbeda, Lagos. We provide a welcoming and
              well-presented space for celebrations, ceremonies, corporate
              gatherings, and other memorable occasions.
            </p>

            <Link
              href="/about"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
            >
              Discover D Gold
              <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* Image + Content */}
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Image */}
          <div className="relative min-h-[420px] overflow-hidden bg-slate-200 sm:min-h-[520px]">
            <Image
              src="/landingBg.jpg"
              alt="D Gold Event Centre"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

            {/* Image Label */}
            <div className="absolute bottom-6 left-6">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/70">
                D Gold Event Centre
              </p>

              <p className="mt-2 text-lg font-medium text-white">
                Egbeda, Lagos
              </p>
            </div>
          </div>

          {/* Facts */}
          <div className="flex flex-col justify-between bg-slate-100 p-7 sm:p-10 lg:p-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Why D Gold
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">
                More than a venue.
                <br />A place for memories.
              </h3>
            </div>

            <div className="mt-12 divide-y divide-slate-300">
              {venueFacts.map((fact) => {
                const Icon = fact.icon;

                return (
                  <div
                    key={fact.title}
                    className="flex gap-4 py-5 first:pt-0 last:pb-0"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-white text-slate-700">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">
                        {fact.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {fact.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/venue"
              className="group mt-10 inline-flex w-fit items-center gap-2 border-b border-slate-400 pb-2 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-900"
            >
              Explore the venue
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
