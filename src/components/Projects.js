

import AutoProjects from "./AutoProjects";
import Flooring from "./Flooring";
import "./Projects.css"
import { useState } from "react";

function Projects(){
     const [navItem, setNavItem] = useState('')
    
          
     
return(
     <div className="navBar">
          <ul className="navMenu">
               <li className="navItem" id="auto" onClick={() => setNavItem("auto")}>Auto Repair</li>
               <li className="navItem" id="floor" onClick={() => setNavItem('floor')}>Flooring</li>
               <li className="navItem" id="drywall" onClick={() => setNavItem('drywall')}>Drywall</li>
               <li className="navItem" id="misc" onClick={() => setNavItem('misc')}>Misc</li>
          </ul>
          <div className="projectContainer">
               {navItem === "auto" && <AutoProjects/>}
               {navItem === "floor" && <Flooring/>}
               
          </div>

     </div>
)


}
export default Projects;