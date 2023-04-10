

import AutoProjects from "./AutoProjects";
import Flooring from "./Flooring";
import Drywall from "./Drywall"
import "./Projects.css"
import { useState, useEffect } from "react";

function Projects(isFirstLoad,setFirstLoad){
     const [navItem, setNavItem] = useState('')
     const ChangePage = (event) => {
          event.preventDefault()
          if (event.target === document.querySelector("#auto")) {
               setNavItem("auto")
          } else if (event.target === document.querySelector("#floor")) {
               setNavItem("floor")
          } else if (event.target === document.querySelector("#drywall")) {
               setNavItem("drywall")
          } else if (event.target === document.querySelector("#misc")) {
               setNavItem("misc")
          }
               setFirstLoad(false)
     }
     
          
     
return(
     <div className="navBar">
          <ul className="navMenu">
               <li className="navItem" id="auto" onClick={ChangePage}>Auto Repair</li>
               <li className="navItem" id="floor" onClick={ChangePage}>Flooring</li>
               <li className="navItem" id="drywall" onClick={ChangePage}>Drywall</li>
               <li className="navItem" id="misc" onClick={ChangePage}>Misc</li>
          </ul>
          <div className="projectContainer">
               {navItem === "auto" && <AutoProjects/>}
               {navItem === "floor" && <Flooring/>}
               {navItem === "drywall" && <Drywall/>}
               
          </div>

     </div>
)


}
export default Projects;