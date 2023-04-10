

import AutoProjects from "./AutoProjects";
import Flooring from "./Flooring";
import Drywall from "./Drywall"
import "./Projects.css"


function Projects({navItem}){

     
return(
          <div className="projectContainer">
               {navItem === "auto" && <AutoProjects/>}
               {navItem === "floor" && <Flooring/>}
               {navItem === "drywall" && <Drywall/>}
          </div>
               

)


}
export default Projects;