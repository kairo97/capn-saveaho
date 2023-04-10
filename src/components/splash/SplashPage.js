import React from "react";
import excavator1 from "../../images/misc/excavator1.jpeg"
import woodCounter from "../../images/misc/woodCountertop.jpeg"
import framingWzane from "../../images/framing/framingWzane.jpeg"
import respirator from "../../images/misc/respirator.jpg"
function SpashPage(){

    return(
        <div className="splashPage">
            <div className="splashHeader">
            <h2>Welcome to Cap'n Saveaho</h2>
            <h3>Your new handyman, mechanic, framer, floorer, sheetrock expert, and all around fix it service</h3>
            <p> if you need it fixed on your house or vehicle, get in touch</p>
            </div>
            <div className="images">
                <img src={excavator1} className="excavtor"/>
                <img src={woodCounter} className="countertop"/>
                <img src={framingWzane} className="framingOutside"/>
                <img src={respirator} className="respiratorPhoto"/>
            </div>
        </div>
    )
}
export default SpashPage;