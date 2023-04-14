import finishedRoom from "../../images/flooring/finishedRoom.jpg";
import floorboards from "../../images/flooring/floorboards.jpg";
import hardwood from "../../images/flooring/hardwood.jpg";
import hardwoodBefore from "../../images/flooring/hardwoodbefore.jpg";
import hardwoodDoor from "../../images/flooring/hardwoodCircledoor.jpg";
import party from "../../images/flooring/momsparty.jpg";
import kitchen from "../../images/flooring/kitchenRedone.jpg";
import "./Flooring.css";
import { useState } from "react";

function Flooring() {
  const [floorImage, setFloorImage] = useState(0);
  const floorPhotos = [
    { id: 0, photo: finishedRoom, text: "Finish work" },
    { id: 1, photo: floorboards, text: "replacements" },
    { id: 2, photo: hardwoodBefore, text: "before" },
    { id: 3, photo: hardwood, text: "after" },
    { id: 4, photo: hardwoodDoor, text: "tbd" },
    { id: 5, photo: party, text: "happy customers" },
    { id: 6, photo: kitchen, text: "tbd" },
  ];

  const handleBackClick = () => {
    setFloorImage((floorImage - 1 + floorPhotos.length) % floorPhotos.length);
  };

  const handleNextClick = () => {
    setFloorImage((floorImage + 1) % floorPhotos.length);
  };
  return (
    <div className="floorImageContainer">
      <div className="backBtnContainer btnContainer">
        <button className="backBtn btn" onClick={handleBackClick}>
          {" "}
          back{" "}
        </button>
      </div>
      <div className="floorImageCarousel">
        <div className="imageBox">
        {floorImage >= 0 && (
          <img
          className="image"
          src={floorPhotos.find((project) => project.id === floorImage).photo}
          ></img>
          )}
          </div>
        {floorImage >= 0 && (
          <p className="imageTitle">
            {floorPhotos.find((project) => project.id === floorImage).text}
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
export default Flooring;
