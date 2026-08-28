import {
  FiHome,
  FiUsers,
  FiMapPin,
  FiCalendar,
  FiLayers,
  FiHeart,
} from "react-icons/fi";

const features = [
  {
    icon: FiHome,
    title: "Spacious Event Hall",
    description:
      "A welcoming space designed to accommodate your guests comfortably.",
  },
  {
    icon: FiUsers,
    title: "Guest Friendly",
    description:
      "An environment designed with your guests and event experience in mind.",
  },
  {
    icon: FiLayers,
    title: "Flexible Arrangement",
    description:
      "The venue can be arranged to complement different types of occasions.",
  },
  {
    icon: FiCalendar,
    title: "Multiple Event Types",
    description:
      "Suitable for celebrations, ceremonies, gatherings and special occasions.",
  },
  {
    icon: FiMapPin,
    title: "Convenient Location",
    description: "Conveniently located at Isiba Oluwo, Egbeda, Lagos.",
  },
  {
    icon: FiHeart,
    title: "Memorable Occasions",
    description:
      "A space where important moments can be shared with family and friends.",
  },
];

export default function VenueFeatures() {
  return (
    <section className="bg-slate-100 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-slate-500" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Why D Gold
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything you need
            <span className="block text-slate-400">for your occasion.</span>
          </h2>
        </div>

        {/* Features */}
        <div className="mt-12 grid border-l border-t border-slate-200 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group border-b border-r border-slate-200 bg-white p-7 transition-colors duration-300 hover:bg-slate-900 sm:p-8 lg:p-10"
              >
                <div className="flex h-11 w-11 items-center justify-center bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-7 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-white/50">
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
