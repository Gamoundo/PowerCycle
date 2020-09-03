import React from "react"

function Review(props) {
    console.log(props)
    return (
        <div className="app">
            <p> Rating: {props.rating}</p>
            <p> {props.body}</p>
            <button> Delete</button>
        </div>
    )
}

export default Review;