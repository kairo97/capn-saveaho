import React from "react";
import "./Header.css"
import Nav from "./Nav.js"

function Header() {
    return(
        <header>
            <div className="titleBox">
            <h1 className="pageTitle">
                Cap'n Saveaho 
            </h1>
            </div>
            <Nav/>
        </header>
    )
}
export default Header;