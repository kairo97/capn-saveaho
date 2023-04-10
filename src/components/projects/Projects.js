

import AutoProjects from "./AutoProjects";
import Flooring from "./Flooring";
import Drywall from "./Drywall"
import "./Projects.css"


function Projects(navItem){
     
return(
     <div className="navBar">
          <div className="projectContainer">
               {navItem === "auto" && <AutoProjects/>}
               {navItem === "floor" && <Flooring/>}
               {navItem === "drywall" && <Drywall/>}
          </div>
     </div>
               

)


}
export default Projects;