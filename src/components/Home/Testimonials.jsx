import Link from "next/link";
import { FiArrowUpRight, FiStar } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "D Gold gave us exactly the kind of space we needed for our celebration. The venue created a beautiful atmosphere for everyone who attended.",
    name: "Adebayo & Family",
    event: "Private Celebration",
  },
  {
    quote:
      "We loved the setting and the overall experience. It was a great place to bring our guests together for such an important occasion.",
    name: "Chioma O.",
    event: "Special Occasion",
  },
  {
    quote:
      "The venue made our event feel special from the moment our guests arrived. We would definitely consider D Gold again for another occasion.",
    name: "Michael A.",
    event: "Social Gathering",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-slate-500" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Client Experiences
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Moments remembered.
              <span className="block text-slate-400">Experiences shared.</span>
            </h2>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 border-b border-slate-300 pb-2 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-900"
          >
            Plan your event
            <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-16">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col justify-between border border-slate-200 bg-slate-50 p-7 sm:p-8 lg:p-10"
            >
              {/* Stars */}
              <div className="flex gap-1 text-slate-700">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar key={star} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-8 text-base leading-7 text-slate-600">
                {testimonial.quote}
              </blockquote>

              {/* Client */}
              <div className="mt-10 border-t border-slate-200 pt-5">
                <p className="text-sm font-semibold text-slate-900">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                  {testimonial.event}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
