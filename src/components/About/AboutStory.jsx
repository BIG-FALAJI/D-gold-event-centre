import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        {/* Image */}
        <div className="relative min-h-[420px] overflow-hidden bg-slate-100 sm:min-h-[540px]">
          <Image
            src="/uiBg.jpg"
            alt="Inside D Gold Event Centre"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Who We Are
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            More than a venue.
            <span className="block text-slate-400">
              A place for your moments.
            </span>
          </h2>

          <div className="mt-6 space-y-5 text-sm leading-7 text-slate-500">
            <p>
              At D Gold Event Centre, we believe that the right space can make
              an important occasion even more special.
            </p>

            <p>
              Located in Egbeda, Lagos, our venue provides a flexible setting
              for celebrations, ceremonies, corporate gatherings, and other
              memorable occasions.
            </p>

            <p>
              From the way the space is arranged to the atmosphere created on
              the day, our goal is to provide a comfortable and welcoming
              environment that allows you to focus on what truly matters —
              celebrating with the people who matter to you.
            </p>
          </div>

          <div className="mt-8 h-px w-16 bg-slate-900" />
        </div>
      </div>
    </section>
  );
}
