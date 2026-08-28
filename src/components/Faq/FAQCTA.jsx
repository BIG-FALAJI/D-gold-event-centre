import Link from "next/link";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";

export default function FAQCTA() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 border border-slate-200 bg-white p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div className="max-w-xl">
            <div className="flex h-11 w-11 items-center justify-center bg-slate-900 text-white">
              <FiMessageCircle className="h-5 w-5" />
            </div>

            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Still have questions?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              If you couldn't find the answer you're looking for, our team is
              available to help you with your event plans.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Contact Us
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/availability"
              className="inline-flex items-center justify-center border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
