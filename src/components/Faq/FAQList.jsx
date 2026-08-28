"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqCategories = [
  {
    title: "General",
    questions: [
      {
        question: "Where is D Gold Event Centre located?",
        answer:
          "D Gold Event Centre is located at No. 49, Isiba Oluwo, Egbeda, Lagos.",
      },
      {
        question: "What types of events can I host at D Gold?",
        answer:
          "D Gold is suitable for a variety of occasions including weddings, birthdays, naming ceremonies, anniversaries, corporate gatherings, family celebrations, and other private events.",
      },
      {
        question: "How many guests can the venue accommodate?",
        answer:
          "The venue can accommodate up to 500 guests, depending on the event arrangement and seating setup.",
      },
    ],
  },

  {
    title: "Booking & Availability",
    questions: [
      {
        question: "How can I check if a date is available?",
        answer:
          "You can visit our Availability page to check the venue calendar and see dates that are available, pending, or booked.",
      },
      {
        question: "How do I book the venue?",
        answer:
          "Select your preferred date, review the available options, provide your event details, and proceed through the booking process.",
      },
      {
        question: "Can I book the venue for a full day?",
        answer:
          "Venue booking duration depends on the selected package and the requirements of your event. Please contact us if you need a specific arrangement.",
      },
      {
        question: "Can I cancel or reschedule my booking?",
        answer:
          "Cancellation and rescheduling policies depend on the booking terms. Please contact D Gold directly for assistance with an existing booking.",
      },
    ],
  },

  {
    title: "Venue & Setup",
    questions: [
      {
        question: "Can I choose how the venue is arranged?",
        answer:
          "Yes. D Gold offers flexible event setup options so the space can be arranged according to the type and requirements of your occasion.",
      },
      {
        question: "Can I decorate the venue myself?",
        answer:
          "Decoration arrangements depend on your booking and event requirements. Please contact us before your event to discuss decoration plans.",
      },
      {
        question: "Can I visit the venue before booking?",
        answer:
          "Yes. We recommend contacting D Gold to arrange a suitable time to visit and view the venue before making your final decision.",
      },
    ],
  },

  {
    title: "Payment",
    questions: [
      {
        question: "How much does it cost to book the venue?",
        answer:
          "Venue pricing depends on the selected package, event type, date, and requirements. Visit our Packages page or contact us for current pricing.",
      },
      {
        question: "Do I need to pay before my booking is confirmed?",
        answer:
          "Booking confirmation is subject to the payment terms associated with your selected package. The booking process will provide the relevant information before confirmation.",
      },
      {
        question: "Are there additional charges?",
        answer:
          "Additional charges may apply depending on your selected services or specific event requirements. Any applicable charges should be confirmed before finalizing your booking.",
      },
    ],
  },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-200">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-sm font-semibold text-slate-900 sm:text-base">
          {question}
        </span>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center border border-slate-200 text-slate-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <FiChevronDown className="h-4 w-4" />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl pr-10 text-sm leading-7 text-slate-500">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQList() {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (categoryIndex, questionIndex) => {
    const id = `${categoryIndex}-${questionIndex}`;

    setOpenItem((current) => (current === id ? null : id));
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        {faqCategories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-16 last:mb-0">
            <div className="mb-6 flex items-center gap-4">
              <h2 className="text-lg font-semibold text-slate-900">
                {category.title}
              </h2>

              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div>
              {category.questions.map((item, questionIndex) => {
                const id = `${categoryIndex}-${questionIndex}`;

                return (
                  <FAQItem
                    key={id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openItem === id}
                    onToggle={() => handleToggle(categoryIndex, questionIndex)}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
