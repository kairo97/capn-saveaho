
import "./ContactMe.css"
import Appointment from "./AppointmentForm/Appointment"
import { useState } from "react";

function ContactMe() {
    const [isOpenForm, setOpenForm] = useState(false)

    const openForm = () => {
        if (isOpenForm === false) {
            setOpenForm(true)
        } else {
            setOpenForm(false)
        }

    }
    return (
        <div className="contact">
            <div className="AppointmentBox">
            {isOpenForm === true && <Appointment/>}
            </div>
            <div className="contactHeaderContainer">
            <h3> Contact Me</h3>
            </div>
            <div className="contactInfo">
                <ul>
                    <li>Jesse Ropp</li>
                    <li>Call me at 253-368-8573</li>
                    <li>email me at:</li>
                    <li><a target="_blank" rel="norefferer" href="mailto:jesro3@yahoo.com">jesro3@yahoo.com</a></li>
                    <li>Set up an appointment, send me your timeframe and job details and I'll be in contact</li>
                </ul>
                    <div className="appointmentBtnBox">
                    <button className="appointmentBtn" onClick={openForm}> Open Appointment Form</button>
                    </div>
            </div>
        </div>
    )
}
export default ContactMe;