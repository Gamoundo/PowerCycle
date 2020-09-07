import React from "react"

function Review(props) {
  const  handleDelete = (e) => {
        e.preventDefault();
        
        // let user= window.localStorage.getItem("TheLinguist");
        // let  token = JSON.parse(user).userToken;
        // let  user_id = JSON.parse(user).user_id; 
    
        // debugger
    //     console.log('prefetch')
        
    //     let user= window.localStorage.getItem("TheLinguist");
    //  let  token = JSON.parse(user).userToken;
    //  let  user_id = JSON.parse(user).user_id 
        
        
    //     let obj = {
    //         course_id: this.props.id,
    //         user_id: user_id
            
    //     }
        
        
        fetch(`http://localhost:3000/reviews/${props.id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
                
            }
        })
        .then(console.log)
        props.removeReview(props.id)
    } 




    console.log(props)
    return (
        <div className="app">
            <p> Rating: {props.rating}</p>
            <p> {props.body}</p>
            <button onClick={handleDelete}> Delete</button>
        </div>
    )
}

export default Review;