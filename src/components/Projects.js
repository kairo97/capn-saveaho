


import "./Projects.css"
import AutoProjects from "./AutoProjects";
import { useState } from "react";

function Projects(){
     const [navItem, setNavItem] = useState('')
return(
     <div className="navBar">
          <ul className="navMenu">
               <li className="navItem" onClick={setNavItem('auto')}>Auto Repair</li>
               <li className="navItem" onClick={setNavItem('floor')}>Flooring</li>
               <li className="navItem" onClick={setNavItem('drywall')}>Drywall</li>
               <li className="navItem" onClick={setNavItem('misc')}>Misc</li>
          </ul>
          <div className="projectContainer">
               {navItem === "auto" && <AutoProjects/>}
          </div>

     </div>
)


}
export default Projects;