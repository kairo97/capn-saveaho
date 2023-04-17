import "./Appointment.css"
import { useState } from "react";
function Appointment(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(name, email, subject, message)
      fetch('http://localhost:3001/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
      alert("form submitted, I will be in contact as soon as possible, thank you.")
      
    };

    return (
        <div className="appointment">
          <form className="appointmentForm" onSubmit={handleSubmit}>
            <p className="formP clientName"> what is your name?</p>
            <input className="formInput nameInput" type="text" placeholder="first name   last name"></input>
            <p className="formP jobtype">what type of job is it you need done?</p>
            <input className="formInput jobinput" type="text" placeholder="job type" required value={name} onChange={(event) => setName(event.target.value)} />
            <p className="formP jobdates">when are you looking to get this job done?</p>
            <input className="formInput dateinput" type="text" placeholder="ideal start date - last possible start date" required value={email} onChange={(event) => setEmail(event.target.value)} />
            <p className="formP contactP"> how should I contact you?</p>
            <input className="formInput contactinput" type="text" placeholder="phone-number/email address" required value={subject} onChange={(event) => setSubject(event.target.value)} />
            <p className="formP timeframeP"> what is your availability for an estimate?</p>
            <input className="formInput timeInput" type="text" placeholder="(example)mon-fri 9am-5pm" value={message} onChange={(event) => setMessage(event.target.value)} />
            <button className="formBtn" type="submit">Submit</button>
          </form>
        </div>
      );
    }
export default Appointment;