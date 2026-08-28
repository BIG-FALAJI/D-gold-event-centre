import { BookingDetails } from "@/components/Admin/BookingsAdmin";
export default async function Page({ params }) {
  const { id } = await params;
  return <BookingDetails id={id} />;
}
