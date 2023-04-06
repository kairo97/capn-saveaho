import "./autoProjects.css"
import engineFront from "./images/autoImages/engineFront.jpg"
import engineCloseup from "./images/autoImages/engineCloseup.jpg"
import jeepside from "./images/autoImages/jeepside.jpg"
import jeeptrashed from "./images/autoImages/jeeptrashed.jpg"
import yellowengine from "./images/autoImages/yellowengine.jpg"

function autoProjects(){
    const autoPhotos =[ {id: 0,
                        photo: engineFront,
                        text: "Engine Work"}, 
                        {id: 1, 
                        photo: engineCloseup,
                        text: "Full Repairs"},
                        {id: 2,
                        photo: jeepside,
                        text: "Custom BodyWork"},
                        {id: 3,
                        photo: jeeptrashed,
                        text:"Body Repair"},
                         {id: 4,
                        photo: yellowengine,
                        text: "Heavy Machinery"} ]

    return(
        <div className="autoImageContainer">

        </div>
    )
} export default autoProjects;