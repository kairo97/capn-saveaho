

import AutoProjects from "./AutoProjects";
import Flooring from "./Flooring";
import Drywall from "./Drywall"
import Misc from "./Misc"
import "./Projects.css"


function Projects({navItem}){

     
return(
          <div className="projectContainer">
               {navItem === "auto" && <AutoProjects/>}
               {navItem === "floor" && <Flooring/>}
               {navItem === "drywall" && <Drywall/>}
               {navItem === "misc" && <Misc/>}
          </div>
               

)


}
export default Projects;