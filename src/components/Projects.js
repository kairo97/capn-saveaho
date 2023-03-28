import HomeRepairs from "./HomeRepairs";

function Projects(clickedLink, setClickedLink){
     const renderImage = () => {
        if (clickedLink === "homeRepairs"){
            return(
                <HomeRepairs/>
                )
            }
     }

}
export default Projects;