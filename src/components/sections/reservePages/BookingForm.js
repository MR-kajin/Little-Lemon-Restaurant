import { useState } from "react";
import { Link } from "react-router-dom";

export default function ReservationForm() {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [people, setPeople] = useState("");
    const [date, setDate] = useState("");
    const [occasion, setOccasion] = useState("");
    const [preferences, setPreferences] = usestate("");
    const [commments, setComments] = usestate("");

    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map(times => <option>{times}</option>)
    );

    function handleDateChange(e) {
        setDate(e.target.value);

        var stringify = e.target.value;
        const data = new Date(stringify);

        props.updateTimes(data);
        (props.availableTimes.map(times => <option>{times}</option>))
    }

    return (
        <form className="reservation-form">
            <div>
                <label htmlFor="fName">First Name</label> <br></br>
                <input
                    type="text"
                    id="fName"
                    placeholder="First Name"
                    required
                    minLength={2}
                    maxLength={50}
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="lName">Last Name</label> <br></br>
                <input
                    type="text"
                    id="lName"
                    placeholder="Last Name"
                    minLength={2}
                    maxLength={50}
                    value={lName}
                    onChange={(e) => setLName(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="email">Email</label> <br></br>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    minLength={4}
                    maxLength={50}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="phonenum">Phone Number</label> <br></br>
                <input
                    type="tel"
                    id="phonenum"
                    placeholder="(xxx)-xxx-xxxx"
                    required
                    minLength={10}
                    maxLength={25}
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="people">Number of People</label> <br></br>
                <input
                    type="number"
                    id="people"
                    placeholder="Number of People"
                    required
                    min={1}
                    max={100}
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="date">Select Date</label> <br></br>
                <input
                    type="date"
                    id="date"
                    required
                    value={date}
                    onChange={handleDateChange}
                ></input>
            </div>
            <div>
                <label htmlFor="time">Select Time</label><br></br>
                <select id="time" required>
                    {finalTime}
                </select>
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label> <br></br>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="preferences">Seating preferences</label>
                <select
                    id="preferences"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                >
                    <option>None</option>
                    <option>Indoor</option>
                    <option>Outdoor (Patio)</option>
                    <option>Outdoor (Sidewalk)</option>
                </select>
            </div>
            <div>
                <label htmlFor="comments">Additional Comments</label>
                <textarea
                    id="comments"
                    row={8}
                    cols={50}
                    placeholder="Additional Comments"
                    value={commments}
                    onChange={(e) => setComments(e.target.value)}
                ></textarea>
            </div>

            <div>
                <small>
                    <p>
                        Note: You cannot edit your reservation after submission. Please
                        double-check your answer before submitting your reservation request.
                    </p>
                </small>
                <Link className="action-button" to="/confirmation">
                    Book Table
                </Link>
            </div>
        </form>
    );

}