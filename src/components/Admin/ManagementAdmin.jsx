"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FiEdit2,
  FiEye,
  FiEyeOff,
  FiMinus,
  FiMove,
  FiPlus,
  FiSave,
  FiStar,
  FiTrash2,
} from "react-icons/fi";
import { useAdmin } from "./AdminProvider";
import {
  AdminButton,
  AdminModal,
  AdminPageHeader,
  Notice,
  StatusBadge,
} from "./AdminUI";
const Form = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit} className="space-y-4 p-5">
    {children}
  </form>
);
const Input = ({ label, ...props }) => (
  <label className="block text-sm font-medium text-slate-700">
    {label}
    <input
      {...props}
      className="mt-2 w-full border border-slate-200 px-3 py-2.5 text-sm font-normal outline-none focus:border-slate-500"
    />
  </label>
);
const Textarea = ({ label, ...props }) => (
  <label className="block text-sm font-medium text-slate-700">
    {label}
    <textarea
      {...props}
      className="mt-2 min-h-24 w-full border border-slate-200 px-3 py-2.5 text-sm font-normal outline-none focus:border-slate-500"
    />
  </label>
);
export function PackagesPage() {
  const { packages, update, flash } = useAdmin();
  const [editing, setEditing] = useState(null);
  const save = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const item = {
      id: editing?.id || `pkg-${Date.now()}`,
      name: form.get("name"),
      description: form.get("description"),
      price: form.get("price"),
      features: form
        .get("features")
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean),
      active: editing?.active ?? true,
      popular: editing?.popular ?? false,
    };
    update(
      "packages",
      editing
        ? packages.map((p) => (p.id === item.id ? item : p))
        : [...packages, item],
    );
    flash(editing ? "Package updated." : "Package added.");
    setEditing(null);
  };
  return (
    <>
      <AdminPageHeader
        eyebrow="Venue management"
        title="Packages"
        description="Manage the packages presented to prospective customers."
        action={
          <AdminButton onClick={() => setEditing({})}>
            <FiPlus />
            Add package
          </AdminButton>
        }
      />
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:grid-cols-2 sm:px-8 xl:grid-cols-3 lg:px-10">
        {packages.map((p) => (
          <article
            key={p.id}
            className={`border bg-white p-5 ${p.active ? "border-slate-200" : "border-slate-200 opacity-65"}`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                {p.popular && (
                  <span className="mb-3 inline-flex items-center gap-1 bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700">
                    <FiStar className="h-3 w-3" />
                    Popular
                  </span>
                )}
                <h2 className="font-semibold text-slate-900">{p.name}</h2>
              </div>
              <StatusBadge status={p.active ? "confirmed" : "rejected"} />
            </div>
            <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">
              {p.description}
            </p>
            <p className="mt-5 text-lg font-semibold text-slate-900">
              {p.price}
            </p>
            <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
              {p.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <AdminButton
                variant="secondary"
                onClick={() => setEditing(p)}
                className="px-3 py-2"
              >
                <FiEdit2 />
                Edit
              </AdminButton>
              <AdminButton
                variant="secondary"
                onClick={() => {
                  update(
                    "packages",
                    packages.map((item) =>
                      item.id === p.id
                        ? { ...item, popular: !item.popular }
                        : item,
                    ),
                  );
                  flash(
                    p.popular ? "Popular badge removed." : "Marked as popular.",
                  );
                }}
                className="px-3 py-2"
              >
                {p.popular ? "Unmark popular" : "Mark popular"}
              </AdminButton>
              <button
                type="button"
                onClick={() => {
                  update(
                    "packages",
                    packages.map((item) =>
                      item.id === p.id
                        ? { ...item, active: !item.active }
                        : item,
                    ),
                  );
                  flash("Package availability updated.");
                }}
                className="text-sm font-medium text-slate-500 hover:text-slate-900"
              >
                {p.active ? "Disable" : "Enable"}
              </button>
            </div>
          </article>
        ))}
      </div>
      {editing && (
        <AdminModal
          title={editing.id ? "Edit package" : "Add package"}
          onClose={() => setEditing(null)}
        >
          <Form onSubmit={save}>
            <Input
              label="Package name"
              name="name"
              defaultValue={editing.name}
              required
            />
            <Textarea
              label="Description"
              name="description"
              defaultValue={editing.description}
              required
            />
            <Input
              label="Price"
              name="price"
              defaultValue={editing.price}
              required
            />
            <Input
              label="Features (comma separated)"
              name="features"
              defaultValue={editing.features?.join(", ")}
              required
            />
            <div className="flex justify-end gap-2">
              <AdminButton variant="secondary" onClick={() => setEditing(null)}>
                Cancel
              </AdminButton>
              <AdminButton type="submit">Save package</AdminButton>
            </div>
          </Form>
        </AdminModal>
      )}
      <Notice />
    </>
  );
}
export function GalleryPage() {
  const { gallery, update, flash } = useAdmin();
  const [adding, setAdding] = useState(false);
  const add = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    update("gallery", [
      ...gallery,
      {
        id: `gallery-${Date.now()}`,
        title: f.get("title"),
        category: f.get("category"),
        image: "/event-hall.jpg",
        published: true,
      },
    ]);
    flash("Image added to the gallery prototype.");
    setAdding(false);
  };
  return (
    <>
      <AdminPageHeader
        eyebrow="Venue management"
        title="Gallery"
        description="Manage the images featured across the D Gold website."
        action={
          <AdminButton onClick={() => setAdding(true)}>
            <FiPlus />
            Add image
          </AdminButton>
        }
      />
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:grid-cols-2 sm:px-8 xl:grid-cols-4 lg:px-10">
        {gallery.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden border border-slate-200 bg-white"
          >
            <div className="relative aspect-[4/3] bg-slate-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between gap-2">
                <div>
                  <h2 className="text-sm font-semibold text-slate-800">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs text-slate-400">{item.category}</p>
                </div>
                <StatusBadge
                  status={item.published ? "confirmed" : "completed"}
                />
              </div>
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => {
                    update(
                      "gallery",
                      gallery.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, published: !entry.published }
                          : entry,
                      ),
                    );
                    flash("Gallery visibility updated.");
                  }}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900"
                >
                  {item.published ? "Unpublish" : "Publish"}
                </button>
                <button
                  onClick={() => {
                    update(
                      "gallery",
                      gallery.filter((entry) => entry.id !== item.id),
                    );
                    flash("Gallery item removed.");
                  }}
                  className="text-sm font-medium text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {adding && (
        <AdminModal title="Add gallery image" onClose={() => setAdding(false)}>
          <Form onSubmit={add}>
            <Input label="Image title" name="title" required />
            <Input
              label="Category"
              name="category"
              placeholder="Weddings, Corporate, Venue…"
              required
            />
            <p className="text-xs leading-5 text-slate-400">
              Prototype note: this adds an existing local placeholder image.
              Connect this form to your storage provider later.
            </p>
            <div className="flex justify-end gap-2">
              <AdminButton variant="secondary" onClick={() => setAdding(false)}>
                Cancel
              </AdminButton>
              <AdminButton type="submit">Add image</AdminButton>
            </div>
          </Form>
        </AdminModal>
      )}
      <Notice />
    </>
  );
}
function SimpleManager({ kind }) {
  const { testimonials, faqs, update, flash } = useAdmin();
  const list = kind === "testimonial" ? testimonials : faqs;
  const key = kind === "testimonial" ? "testimonials" : "faqs";
  const [editing, setEditing] = useState(null);
  const save = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const item =
      kind === "testimonial"
        ? {
            id: editing?.id || `test-${Date.now()}`,
            name: f.get("name"),
            event: f.get("event"),
            text: f.get("text"),
            rating: Number(f.get("rating")),
            published: editing?.published ?? true,
          }
        : {
            id: editing?.id || `faq-${Date.now()}`,
            question: f.get("question"),
            answer: f.get("answer"),
            published: editing?.published ?? true,
          };
    update(
      key,
      editing
        ? list.map((entry) => (entry.id === item.id ? item : entry))
        : [...list, item],
    );
    flash(`${kind === "testimonial" ? "Testimonial" : "FAQ"} saved.`);
    setEditing(null);
  };
  const move = (id, direction) => {
    const index = list.findIndex((item) => item.id === id);
    const next = index + direction;
    if (next < 0 || next >= list.length) return;
    const copy = [...list];
    [copy[index], copy[next]] = [copy[next], copy[index]];
    update(key, copy);
  };
  return (
    <>
      <AdminPageHeader
        eyebrow="Website"
        title={kind === "testimonial" ? "Testimonials" : "FAQs"}
        description={
          kind === "testimonial"
            ? "Customer feedback displayed on your public website."
            : "Answer the questions customers ask most often."
        }
        action={
          <AdminButton onClick={() => setEditing({})}>
            <FiPlus />
            Add {kind === "testimonial" ? "testimonial" : "FAQ"}
          </AdminButton>
        }
      />
      <div className="mx-auto max-w-5xl space-y-3 px-5 py-7 sm:px-8 lg:px-10">
        {list.map((item) => (
          <article
            key={item.id}
            className="border border-slate-200 bg-white p-5"
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  {kind === "testimonial" ? (
                    <>
                      <h2 className="font-semibold text-slate-900">
                        {item.name}
                      </h2>
                      <span className="text-xs text-slate-400">
                        {item.event} · {"★".repeat(item.rating)}
                      </span>
                    </>
                  ) : (
                    <h2 className="font-semibold text-slate-900">
                      {item.question}
                    </h2>
                  )}
                  <StatusBadge
                    status={item.published ? "confirmed" : "completed"}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {kind === "testimonial" ? item.text : item.answer}
                </p>
              </div>
              <div className="flex h-fit shrink-0 flex-wrap gap-3 text-sm font-medium">
                <button
                  onClick={() => setEditing(item)}
                  className="text-slate-600 hover:text-slate-900"
                >
                  Edit
                </button>
                <button
                  onClick={() =>
                    update(
                      key,
                      list.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, published: !entry.published }
                          : entry,
                      ),
                    )
                  }
                  className="text-slate-600"
                >
                  {item.published ? "Unpublish" : "Publish"}
                </button>
                {kind === "faq" && (
                  <>
                    <button
                      onClick={() => move(item.id, -1)}
                      className="text-slate-500"
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => move(item.id, 1)}
                      className="text-slate-500"
                    >
                      ↓
                    </button>
                  </>
                )}
                <button
                  onClick={() => {
                    update(
                      key,
                      list.filter((entry) => entry.id !== item.id),
                    );
                    flash("Item deleted.");
                  }}
                  className="text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {editing && (
        <AdminModal
          title={editing.id ? "Edit item" : `Add ${kind}`}
          onClose={() => setEditing(null)}
        >
          <Form onSubmit={save}>
            {kind === "testimonial" ? (
              <>
                <Input
                  label="Customer name"
                  name="name"
                  defaultValue={editing.name}
                  required
                />
                <Input
                  label="Event type"
                  name="event"
                  defaultValue={editing.event}
                  required
                />
                <Input
                  label="Rating (1–5)"
                  name="rating"
                  type="number"
                  min="1"
                  max="5"
                  defaultValue={editing.rating || 5}
                  required
                />
                <Textarea
                  label="Testimonial"
                  name="text"
                  defaultValue={editing.text}
                  required
                />
              </>
            ) : (
              <>
                <Input
                  label="Question"
                  name="question"
                  defaultValue={editing.question}
                  required
                />
                <Textarea
                  label="Answer"
                  name="answer"
                  defaultValue={editing.answer}
                  required
                />
              </>
            )}
            <div className="flex justify-end gap-2">
              <AdminButton variant="secondary" onClick={() => setEditing(null)}>
                Cancel
              </AdminButton>
              <AdminButton type="submit">Save</AdminButton>
            </div>
          </Form>
        </AdminModal>
      )}
      <Notice />
    </>
  );
}
export function TestimonialsPage() {
  return <SimpleManager kind="testimonial" />;
}
export function FaqsPage() {
  return <SimpleManager kind="faq" />;
}
