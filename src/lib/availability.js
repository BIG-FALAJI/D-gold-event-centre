import { bookings } from "@/data/bookings";

export function isDateBooked(date) {
  return bookings.some(
    (booking) =>
      booking.date === date &&
      (booking.status === "confirmed" || booking.status === "pending"),
  );
}
