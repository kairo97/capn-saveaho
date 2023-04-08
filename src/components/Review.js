import { useState } from "react"
import "./Review.css"

function Review() {
    const [reviewP, setReviewP] = useState(0) 
    const reviews = [
        {   
        id:0,
        text: "We hired Jesse for many different jobs, from framing, sheetrock, plumbing, and auto repair. He's always honest, fair, and hard working! (His sidekick, a super mellow well mannered black lab is a sweetheart too!) we highly recommend Jesse for just about any job around the home or vehicles. If he can't do it he'll connect you with someone who can. Jesse is a great guy you can really trust to get the job done!",
        author: "Kara Mckay"
    }
    ]

    return(
        <div className="reviewBox">
            <div>
            {reviews >= 0 && (
          <p className="reviewP">
            {reviews.find((review) => review.id === reviewP).text}
          </p>
        )}
            </div>
        </div>
    )
}
export default Review;