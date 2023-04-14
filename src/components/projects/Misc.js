import "./Misc.css"
import bayWindow from "../../images/misc/baywindow.jpg"
import door from "../../images/misc/door.jpg"
import excavator from "../../images/misc/excavator1.jpeg"
import fusebox from "../../images/misc/fusebox.jpg"
import bathroom from "../../images/misc/momsBathroom.jpg"
import wirenuts from "../../images/misc/wirenuts.jpg"
import vacuum from "../../images/misc/sink&vacuum.jpg"
import wiring from "../../images/misc/wiring.jpeg"
import { useState } from "react"

function Misc() {
    const [miscPhoto, setMiscPhoto] = useState(0)
    const miscPics = [
       { id:0,
        photo:bayWindow,
        text: "..." },
        {id:1,
        photo:door,
        text:".."},
        {id:2,
        photo:excavator,
        text:".."},
        {id:3,
        photo:fusebox,
        text:"..."},
        {id:4,
        photo:bathroom,
        text:"..."},
        {id:5,
        photo:wirenuts,
        text:"..."},
        {id:6,
        photo:vacuum,
        text:"..."},
        {id:7,
        photo:wiring,
        text:"..."}
    ]
    const handleBackClick = () => {
        setMiscPhoto((miscPhoto - 1 + miscPics.length) % miscPics.length);
      };
    
      const handleNextClick = () => {
        setMiscPhoto((miscPhoto + 1) % miscPics.length);
      };
      return (
        <div className="miscImageContainer">
          <div className="backBtnContainer btnContainer">
            <button className="backBtn btn" onClick={handleBackClick}>
              {" "}
              back{" "}
            </button>
          </div>
          <div className="miscImageCarousel">
            <div className="imageBox">
            {miscPhoto >= 0 && (
                <img
                className="image"
                src={miscPics.find((project) => project.id === miscPhoto).photo}
                ></img>
                )}
                </div>
            {miscPhoto >= 0 && (
              <p className="imageTitle">
                {miscPics.find((project) => project.id === miscPhoto).text}
              </p>
            )}
          </div>
          <div className="nextBtnContainer btnContainer">
            <button className="nextBtn btn" onClick={handleNextClick}>
              {" "}
              next{" "}
            </button>
          </div>
        </div>
      );
    }
export default Misc;