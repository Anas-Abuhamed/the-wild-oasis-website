"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function signInAction() {
    await signIn("google", { redirectTo: "/account" }); // providerName, where to redirect
}


export async function signOutAction() {
    await signOut({ redirectTo: "/" });
}

export async function updateGuest(formData) { // don't need to try & catch to handling error, just condition
    // console.log(formData);
    const session = await auth();
    if (!session)
        throw new Error("You must be logged in");

    const nationalID = formData.get("nationalID");
    const [nationality, countryFlag] = formData.get("nationality").split('%');

    if (!/^[0-9]{6,12}$/.test(nationalID))
        throw new Error("Please provide a valid national ID");

    const updateData = { nationality, countryFlag, nationalID };
    const { data, error } = await supabase
        .from('guests')
        .update(updateData)
        .eq('id', session.user.guestId)
        .select()
        .single();

    if (error)
        throw new Error('Guest could not be updated');
    revalidatePath("account/profile");
    return data;
}

export async function deleteReservation(bookingId) {
    const session = await auth();
    if (!session) throw new Error("You must be logged in");
    const guestBookings = await getBookings(session.user.guestId);
    const guestBookingIds = guestBookings.map(booking => booking.id);
    if (!guestBookingIds.includes(bookingId))
        throw new Error("Error when delete this cabin")
    const { error } = await supabase.from('bookings').delete().eq('id', bookingId);

    if (error) {
        console.error(error);
        throw new Error('Booking could not be deleted');
    }
    revalidatePath("/account/reservations")
}

export async function updateReservation(formData) {
    const session = await auth();
    if (!session) throw new Error("You must logged in");
    const bookingId = formData.get("bookingId");
    const guestBookings = await getBookings(session.user.guestId);
    const guestBookingIds = guestBookings.map(booking => booking.id);
    if (!guestBookingIds.includes(Number(bookingId)))
        throw new Error("Error when updating reservation");
    const { data, error } = await supabase
        .from('bookings')
        .update({ observations: formData.get("observations"), numGuests: formData.get("numGuests") })
        .eq('id', bookingId)
        .select();

    if (error) {
        console.error(error);
        throw new Error('Booking could not be updated');
    }
    revalidatePath(`/account/reservations/edit/${bookingId}`)
    revalidatePath(`/account/reservations`)
    redirect("/account/reservations");
}

export async function createReservation(bookingData, formData) {
    const session = await auth();
    if (!session) throw new Error("You must logged in");
    console.log(bookingData)
    const newBooking = {
        ...bookingData,
        guestId: session.user.guestId,
        numGuests: Number(formData.get("numGuests")),
        observations: formData.get("observations").slice(0, 1000),
        extrasPrice: 0,
        totalPrice: bookingData.cabinPrice,
        isPaid: false,
        hasBreakfast: false,
        status: "unconfirmed"
    }
    const { error } = await supabase
        .from('bookings')
        .insert([newBooking])

    if (error) {
        throw new Error('Booking could not be created');
    }
    revalidatePath(`/cabins/${bookingData.cabinId}`)
    redirect('/cabins/thankyou')
} 