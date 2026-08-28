import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

const contactDetails = [
  {
    icon: FiMapPin,
    title: "Visit Us",
    text: "No. 49, Isiba Oluwo, Egbeda, Lagos",
  },
  {
    icon: FiPhone,
    title: "Call Us",
    text: "+234 800 000 0000",
  },
  {
    icon: FiMail,
    title: "Email Us",
    text: "hello@dgoldeventcentre.com",
  },
  {
    icon: FiClock,
    title: "Opening Hours",
    text: "Monday – Sunday · 9:00 AM – 8:00 PM",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {contactDetails.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-slate-100 text-slate-700">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-sm font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
