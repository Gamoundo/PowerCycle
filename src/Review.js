import React from "react"

function Review(props) {
    console.log(props)
    return (
        <div className="app">
            <p> Rating: {props.rating}</p>
            <p> {props.body}</p>
        </div>
    )
}

export default Review;