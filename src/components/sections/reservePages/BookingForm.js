import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import {submitAPI} from "../../../bookingAPI"
import { fetchAPI } from "../../../bookingAPI"

export default function ReservationForm(props) {

    const [date, setDate] = useState("");
    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map(times => <option key={times}>{times}</option>)
    );

    function handleDateChange(e) {
        setDate(e.target.value);

        var stringify = e.target.value;
        const data = new Date(stringify);
        props.updateTimes(fetchAPI(data));
        setFinalTime(props.availableTimes.map(times => <option key={times}>{times}</option>))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      };

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const formik = useFormik({
      initialValues: {
      fName: '',
      lName: '',
      email: '',
      people: '',
      phonenum: '',
      comment: '',
      preferences: '',
      date:{date},
    },

    onSubmit: values => {
    submitAPI(values) && date ? window.location.replace('http://localhost:3000/confirmation') : alert('Something went wrong, please try again after few minutes')
    },

    validationSchema: Yup.object({
      fName: Yup.string()
      .min(2,"Must be at least 2 characters!")
      .max(25, "Must be less then 25 characters!")
      .required('Required'),
      lName: Yup.string()
      .required('Required')
      .min(2,"Must be at least 2 characters!")
      .max(25, "Must be less then 25 characters!"),
      email: Yup.string()
      .email('Invalid email')
      .min(4,"Must be at least 4 characters!")
      .max(50, "Must be less then 50 characters!")
      .required('Required'),
      phonenum: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid'),
      people: Yup.number()
      .required('Required')
      .min(1,"Must be at least 1 person!")
      .max(100, "Must be less then 100 people!"),
      comment: Yup.string()
      .optional()
    }),

  });

    return (
        <form className="reservation-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fName">First Name</label> <br></br>
                <input
                    type="text"
                    id="fName"
                    placeholder= "First Name"
                    value={formik.values.fName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    {...formik.getFieldProps('fName')}
                    className={formik.errors.fName && formik.touched.fName ? "error-control" : "form-control"}
                ></input>
                {formik.errors.fName && formik.touched.fName ? <p className="error-text">{formik.errors.fName}</p> : null}
            </div>
            <div>
                <label htmlFor="lName">Last Name</label> <br></br>
                <input
                    type="text"
                    id="lName"
                    placeholder="Last Name"
                    value={formik.values.lName}
                    onChange={formik.handleChange}
                    {...formik.getFieldProps('lName')}
                    className={formik.errors.lName && formik.touched.lName ? "error-control" : "form-control"}
                ></input>
                {formik.errors.lName && formik.touched.lName ? <p className="error-text">{formik.errors.lName}</p> : null}
            </div>
            <div>
                <label htmlFor="email">Email</label> <br></br>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    {...formik.getFieldProps('email')}
                    className={formik.errors.email && formik.touched.email ? "error-control" : "form-control"}
                ></input>
                {formik.errors.email && formik.touched.email ? <p className="error-text">{formik.errors.email}</p> : null}
            </div>
            <div>
                <label htmlFor="phonenum">Phone Number</label> <br></br>
                <input
                    type="tel"
                    id="phonenum"
                    placeholder="(xxx)-xxx-xxxx"
                    value={formik.values.tel}
                    onChange={formik.handleChange}
                    {...formik.getFieldProps('phonenum')}
                    className={formik.errors.phonenum && formik.touched.phonenum ? "error-control" : "form-control"}
                ></input>
                {formik.errors.phonenum ? <p className="error-text">{formik.errors.phonenum}</p> : null}
            </div>
            <div>
                <label htmlFor="people">Number of People</label> <br></br>
                <input
                    type="number"
                    id="people"
                    placeholder="Number of People"
                    value={formik.values.people}
                    onChange={formik.handleChange}
                    {...formik.getFieldProps('people')}
                    className={formik.errors.people && formik.touched.people ? "error-control" : "form-control"}
                ></input>
                {formik.errors.people && formik.touched.people ? <p className="error-text">{formik.errors.people}</p> : null}
            </div>
            <div>
                <label htmlFor="date">Select Date</label> <br></br>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={handleDateChange}
                ></input>
                {formik.errors.date && formik.touched.date ? <p className="error-text">{formik.errors.date}</p> : null}
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
                    value={formik.values.occasion}
                    onChange={formik.handleChange}
                >
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="preferences">Seating preferences</label> <br></br>
                <select
                    id="preferences"
                    value={formik.values.preferences}
                    onChange={formik.handleChange}
                >
                    <option>None</option>
                    <option>Indoor</option>
                    <option>Outdoor (Patio)</option>
                    <option>Outdoor (Sidewalk)</option>
                </select>
            </div>
            <div>
                <label htmlFor="comments">Additional Comments</label> <br></br><br></br>
                <textarea
                    id="comments"
                    row={8}
                    cols={30}
                    placeholder="Additional Comments"
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                ></textarea>
            </div>

            <div>
                <small>
                    <p>
                        Note: You cannot edit your reservation after submission. Please
                        double-check your answer before submitting your reservation request.
                    </p>
                </small>
                <button type="submit" className="action-button">Book Table</button>
            </div>
        </form>
    );

}