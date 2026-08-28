import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function VenueOverview() {
  return (
    <section id="overview" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* Image */}
          <div className="relative min-h-[420px] overflow-hidden bg-slate-200 sm:min-h-[550px]">
            <Image
              src="/images.jpg"
              alt="Inside D Gold Event Centre"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-slate-500" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                About the Venue
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              More than just
              <span className="block text-slate-400">a place to gather.</span>
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-7 text-slate-500 sm:text-base">
              <p>
                D Gold Event Centre provides a welcoming environment for
                celebrations, gatherings and important occasions.
              </p>

              <p>
                Located in Egbeda, Lagos, our venue offers a practical and
                comfortable setting where you can bring your guests together and
                make your event memorable.
              </p>

              <p>
                Whether you're planning an intimate celebration or a larger
                gathering, the space can be prepared to suit the nature of your
                occasion.
              </p>
            </div>

            <Link
              href="/availability"
              className="group mt-8 inline-flex items-center gap-2 border-b border-slate-300 pb-2 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-900"
            >
              Check available dates
              <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
