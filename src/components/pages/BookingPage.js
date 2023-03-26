import Heading from "../sections/reservePages/Heading";
import ReservationForm from "../sections/reservePages/BookingForm"
import { useState } from "react";
import { fetchAPI } from "../../bookingAPI";

export default function BookingPage() {

    const output = fetchAPI(new Date());

    const [availableTimes, setAvailableTimes] = useState(output);

    return (
        <>
            <Heading />
            <ReservationForm availableTimes={availableTimes} updateTimes={setAvailableTimes} />
        </>
    )
}