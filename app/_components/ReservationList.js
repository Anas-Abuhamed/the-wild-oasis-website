"use client"
import { useOptimistic } from "react"
import ReservationCard from "./ReservationCard"
import { deleteReservation } from "../_lib/actions";

function ReservationList({ bookings }) {
    const [optimisticBookings, optimisticDelete] = useOptimistic(bookings,
        (curBooking, bookingId) => {
            return curBooking.filter(booking => booking.id !== bookingId)
        });
    async function handleDelete(bookingId) {
        optimisticDelete(bookingId);   // need exact same information as the delete function
        await deleteReservation(bookingId);
    }
    return (
        <ul className="space-y-6">
            {optimisticBookings.map((booking) => (
                <ReservationCard booking={booking} onDelete={handleDelete} key={booking.id} />
            ))}
        </ul>
    )
}

export default ReservationList
