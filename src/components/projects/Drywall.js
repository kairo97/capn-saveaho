import celingPanel from "../../images/drywall/ceilingPanel.jpg";
import baywindow from "../../images/drywall/drywall&baywindow.jpg";
import hardwood from "../../images/drywall/drywall&hardwood.jpg";
import dog from "../../images/drywall/drywall&nugs.jpg";
import shop from "../../images/drywall/drywalledShop.jpg";
import face from "../../images/drywall/drywallface.jpg";
import "./Drywall.css";
import { useState } from "react";

function Drywall() {
  const [drywallImage, setDrywallImage] = useState(0);
  const drywallPhotos = [
    {
      id: 0,
      photo: celingPanel,
      text: "tbd",
    },
    {
      id: 1,
      photo: baywindow,
      text: "tbd",
    },
    {
      id: 2,
      photo: hardwood,
      text: "tbd",
    },
    {
      id: 3,
      photo: dog,
      text: "tbd",
    },
    {
      id: 4,
      photo: shop,
      text: "tbd",
    },
    {
      id: 5,
      photo: face,
      text: "tbd",
    },
  ];
  const handleBackClick = () => {
    setDrywallImage(
      (drywallImage - 1 + drywallPhotos.length) % drywallPhotos.length
    );
  };

  const handleNextClick = () => {
    setDrywallImage((drywallImage + 1) % drywallPhotos.length);
  };
  return (
    <div className="drywallImageContainer">
      <div className="backBtnContainer btnContainer">
        <button className="backBtn btn" onClick={handleBackClick}>
          {" "}
          back{" "}
        </button>
      </div>
      <div className="drywallImageCarousel">
        {drywallImage >= 0 && (
          <img
            className="image"
            src={
              drywallPhotos.find((project) => project.id === drywallImage).photo
            }
          ></img>
        )}
        {drywallImage >= 0 && (
          <p className="imageTitle">
            {drywallPhotos.find((project) => project.id === drywallImage).text}
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
export default Drywall;
