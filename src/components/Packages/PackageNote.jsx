import { FiInfo } from "react-icons/fi";

export default function PackageNote() {
  return (
    <section className="bg-slate-100 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="flex gap-4 border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-slate-900 text-white">
            <FiInfo className="h-4 w-4" />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Need something different?
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              Every event is different. If your occasion requires a different
              arrangement, contact us to discuss your needs and available
              options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
