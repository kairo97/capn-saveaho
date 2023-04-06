import "./AutoProjects.css";
import engineFront from "../images/autoImages/engineFront.jpg";
import engineCloseup from "../images/autoImages/engineCloseup.jpg";
import jeepside from "../images/autoImages/jeepside.jpg";
import jeeptrashed from "../images/autoImages/jeeptrashed.jpg";
import yellowengine from "../images/autoImages/yellowengine.jpg";
import { useState } from "react";
function AutoProjects() {
  const [currentImage, setCurrentImage] = useState(0);

  const autoPhotos = [
    { id: 0, photo: engineFront, text: "Engine Work" },
    { id: 1, photo: engineCloseup, text: "Full Repairs" },
    { id: 2, photo: jeepside, text: "Custom BodyWork" },
    { id: 3, photo: jeeptrashed, text: "Body Repair" },
    { id: 4, photo: yellowengine, text: "Heavy Machinery" },
  ];

  const handleBackClick = () => {
    setCurrentImage((currentImage - 1 + autoPhotos.length) % autoPhotos.length);
  };

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % autoPhotos.length);
  };
  return (
    <div className="autoImageContainer">
      <div className="backBtnContainer btnContainer">
        <button className="backBtn btn" onClick={handleBackClick}>
          {" "}
          back{" "}
        </button>
      </div>
      <div className="autoImageCarousel">
        {currentImage >= 0 && (
          <img
            className="image"
            src={
              autoPhotos.find((project) => project.id === currentImage).photo
            }
          ></img>
        )}
        {currentImage >= 0 && (
          <p className="imageTitle">
            {autoPhotos.find((project) => project.id === currentImage).text}
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
export default AutoProjects;
