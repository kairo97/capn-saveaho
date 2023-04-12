function Apointment(){
    

    return(
        <div className="appointment">
            <form className="appointmentForm">
                <p className="formP jobtype">what type of job is it you need done?</p>
                <input className="formInput jobinput" type="text" placeholder="job type" required></input>
                <p className="formP jobdates">when are you looking to get this job done?</p>
                <input className="formInput dateinput" type="text" placeholder="ideal start date - last possible start date" required></input>
                <p className="formP contactP"> how should I contact you?</p>
                <input className="formInput contactinput" type="text" placeholder="phone-number/email address" required></input>
                <p className="formP timeframeP"> what is your avaibility for an estimate?</p>
                <input className="formInput timeInput" type="text" placeholder="(example)mon-fri 9am-5pm"></input>
                <button className="formBtn" type="submit">Submit</button>
            </form>
        </div>
    )
}