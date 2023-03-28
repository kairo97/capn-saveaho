import React from "react";
import "./Header.css"
import Nav from "./Nav.js"

function Header(clickedLink, setClickedLink) {
    return(
        <header>
            <div className="titleBox">
            <h1 className="pageTitle">
                Cap'n Saveaho 
            </h1>
            </div>
            <Nav 
            clickedLink={clickedLink}
            setClickedLink={setClickedLink}/>
        </header>
    )
}
export default Header;