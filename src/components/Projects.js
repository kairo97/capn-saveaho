

import { useState } from "react"
import automotive from "../images/automotive.jpg"
import remodel from "../images/remodel.jpg"
import tree from "../images/treeRemoval.jpg"
import "./Projects.css"


function Projects({}){

const [isActive, setIsActive] = useState(0)
const projects = [
     {
          id:0,
          photo: remodel,
          text: "Home Remodel/Repairs"
     },
     {
          id:1,
          photo: automotive,
          text: "Automotive Repair"
     },
     {
          id:2,
          photo: tree,
          text: "Residential Tree Removal"
     }
]

const handleBackClick = () => {
     setIsActive((isActive - 1 + projects.length) % projects.length)
          };
   
const handleNextClick = () => {
     setIsActive((isActive + 1 ) % projects.length);
};

     return(
          <div className="imageContainer">
               <div className="backBtnContainer btnContainer">
               <button className="backBtn btn" onClick={handleBackClick}> back </button>
               </div>
                   <div className="imageAndTitle">
                     {isActive >= 0 && (
                          <img className="image" src={projects.find((project) => project.id === isActive).photo}></img>
                          )}
                    {isActive >= 0 && (
                         <p className="imageTitle">{projects.find((project) => project.id === isActive).text}</p>
                         )}
                    </div>
                    <div className="nextBtnContainer btnContainer">
                <button className="nextBtn btn" onClick={handleNextClick}> next </button>
                    </div>
          </div>
         )
     }


export default Projects;