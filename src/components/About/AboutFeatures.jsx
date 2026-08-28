import { FiMaximize, FiSliders, FiUsers, FiHeart } from "react-icons/fi";

const features = [
  {
    icon: FiMaximize,
    title: "Versatile Space",
    description:
      "A flexible environment that can accommodate different types of occasions and guest arrangements.",
  },
  {
    icon: FiSliders,
    title: "Flexible Setup",
    description:
      "Arrange the venue to suit the style, atmosphere, and requirements of your event.",
  },
  {
    icon: FiUsers,
    title: "For Every Occasion",
    description:
      "From intimate celebrations to larger gatherings, D Gold is designed to welcome your guests comfortably.",
  },
  {
    icon: FiHeart,
    title: "Memorable Moments",
    description:
      "A welcoming environment where important moments can be celebrated and remembered.",
  },
];

export default function AboutFeatures() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Why D Gold
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Designed around your occasion.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            Whatever you're celebrating, the space should work for you.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white p-7 transition-colors duration-300 hover:bg-slate-50 lg:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center bg-slate-100 text-slate-700">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-sm font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
