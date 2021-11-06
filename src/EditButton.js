import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal"

function EditButton(props) {

    const [show, setShow] = useState(false);
    const handleClose = () =>  setShow(false);
    const handleShow = () =>  setShow(true);
    
    const handleSubmit = (e) => {
        e.preventDefault();

      let newReview = {
            rating: e.target.rating.value,
            body: e.target.body.value
            // user_id: props.userId,
            // game_id: props.gameId
        }

        console.log(newReview)

        fetch(`http://localhost:3000/reviews/${props.id}`, {
            method: 'PATCH',
            body: JSON.stringify(newReview),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(r => r.json())
        .then(rev => props.setReviews(rev))
        // window.location = '/'
        // .then(review => {
        //     props.addReview(review)
        // }
        // )
    }
    console.log(props.userId)
    return (
        
        <div>
            <button variant="primary" onClick={handleShow}>
        Right a Review!
      </button>
            
            
            <Modal show={show}>
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title id="registerForm">
                    The better review 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div>
                    <input type="integer" name="rating" placeholder={props.rating}/>
                    <label htmlFor="rating">Rating</label> 
                    </div>
                    <div>
                    <input type="textarea" name="body" placeholder={props.body}/>
                    <label htmlFor="body">Body</label> 
                    </div>
                    
                    
                    <input type="submit" value="Edit Review" onClick={handleClose} />
                    
                     
                </form>
            </Modal.Body>
        </Modal>
        </div>
        



        
    )
}

export default EditButton;