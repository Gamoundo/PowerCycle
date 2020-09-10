import React from "react"
import EditButton from "./EditButton";

function Review(props) {
  const  handleDelete = (e) => {
        e.preventDefault();
        
       
        
        
        fetch(`http://localhost:3000/reviews/${props.id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
                
            }
        })
        .then(console.log)
        props.removeReview(props.id)
    } 




    console.log(props.user.id)
    return (
        <div className="app">
            <p> Rating: {props.rating}</p>
            <p> {props.body}</p>
            {props.userId === props.user.id && <EditButton  id={props.id} gameId={props.game_id} userId={props.user_id} rating={props.rating} body={props.body} setReviews={props.setReviews}/> }
            {props.userId === props.user.id && <button onClick={handleDelete}> Delete</button>}
        </div>
    )
}

export default Review;