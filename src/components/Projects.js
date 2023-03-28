
import HomeRepairs from "./HomeRepairs";
import AutoRepairs from "./AutoRepairs"
import TreeRemoval from "./TreeRemoval";

function Projects({clickedLink}){

     return(
        <div>
         {clickedLink === "home" && <HomeRepairs/>}
         {clickedLink === "autoRepair" && <AutoRepairs/>}
         {clickedLink === "treeRemoval" && <TreeRemoval/>}
        </div>
         )
     }


export default Projects;