import React from "react";
import "./Header.css"
import Nav from "./Nav.js"

function Header({ setClickedLink}) {
    return(
        <header>
            <div className="titleBox">
            <h1 className="pageTitle">
                Cap'n Saveaho 
            </h1>
            </div>
            <Nav 
            setClickedLink={setClickedLink}/>
        </header>
    )
}
export default Header;