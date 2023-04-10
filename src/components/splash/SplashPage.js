import React from "react";
import excavator1 from "../../images/misc/excavator1.jpeg"
import woodCounter from "../../images/misc/woodCountertop.jpeg"
import framingWzane from "../../images/framing/framingWzane.jpeg"
import respirator from "../../images/misc/respirator.jpg"
import "./SplashPage.css"
function SplashPage(){

    return(
        <div className="splashPage">
            <div className="splashHeader">
            <h2 className="splashTitle">Welcome to Cap'n Saveaho</h2>
            <h3 className="splashSubTitle">Your new handyman, mechanic, framer, floorer, sheetrock expert, and all around fix it service</h3>
            <p className="splashP"> if you need it fixed on your house or vehicle, get in touch</p>
            </div>
            <div className="images">
                <img src={excavator1} className="excavator image"/>
                <img src={woodCounter} className="countertop image"/>
                <img src={framingWzane} className="framingOutside image"/>
                <img src={respirator} className="respiratorPhoto image"/>
            </div>
        </div>
    )
}
export default SplashPage;