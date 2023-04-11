import React, { useState } from "react"
import "./Review.css"

function Review() {
    const [reviewP, setReviewP] = useState(0) 
    const reviews = [
        {   
        id:0,
        text: "We hired Jesse for many different jobs, from framing, sheetrock, plumbing, and auto repair. He's always honest, fair, and hard working! (His sidekick, a super mellow well mannered black lab is a sweetheart too!) we highly recommend Jesse for just about any job around the home or vehicles. If he can't do it he'll connect you with someone who can. Jesse is a great guy you can really trust to get the job done!",
        author: "Kara Mckay"
    }, {
        id:1,
        text: "review 2",
        author:"another reviewer"
    }
    ]
    const handleNextClick = () => {
        setReviewP((reviewP + 1) % reviews.length);
      };

    return(
        <div className="reviewBox">
            <div className="reviewBoxHeader">
                <h2 className="reviewBoxTitle">Reviews</h2>
                <button className="reviewBtn" onClick={handleNextClick}>Next Review</button>
            </div>
            {reviews.length > 0 && reviews.find((review) => review.id === reviewP) && (
            <p className="reviewP">
                 {reviews.find((review) => review.id === reviewP).text}
                 </p>
                )}
            {reviews.length > 0 && reviews.find((review) => review.id === reviewP) && (
            <p className="reviewAuthor">
                written by: {reviews.find((review) => review.id === reviewP).author}
                </p>
            )}

        </div>
    )
}
export default Review;