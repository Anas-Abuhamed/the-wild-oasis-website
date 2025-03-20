import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 3600; // for one day // value can't be variable or operation like 5 * 12
// export const revalidate = 15; // for experemant (للتجربة) // re-fetch the data every 15s

export const metadata = {
    title: "Cabins"
}
export default function Page({ searchParams }) { // when we have no async data (because they are in <Suspense></Suspense>) in the component then we don't need async keyword
    const filter = searchParams?.capacity ?? "all";
    return (
        <div>
            <h1 className="text-4xl mb-5 text-accent-400 font-medium">
                Our Luxury Cabins
            </h1>
            <p className="text-primary-200 text-lg mb-10">
                Cozy yet luxurious cabins, located right in the heart of the Italian
                Dolomites. Imagine waking up to beautiful mountain views, spending your
                days exploring the dark forests around, or just relaxing in your private
                hot tub under the stars. Enjoy nature&#39;s beauty in your own little home
                away from home. The perfect spot for a peaceful, calm vacation. Welcome
                to paradise.
            </p>
            <div className="flex justify-end mb-8">
                <Filter />
            </div>
            <Suspense fallback={<Spinner />} key={filter}>
                <CabinList filter={filter} />
                <ReservationReminder />
            </Suspense>
        </div>
    );
}