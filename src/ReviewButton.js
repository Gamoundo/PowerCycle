import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal"

function ReviewButton(props) {

    const [show, setShow] = useState(false);
    const handleClose = () =>  setShow(false);
    const handleShow = () =>  setShow(true);
    
    const handleSubmit = (e) => {
        e.preventDefault();

      let newReview = {
            rating: e.target.rating.value,
            body: e.target.body.value,
            user_id: props.userId,
            game_id: props.id
        }

        console.log(newReview)

        fetch("http://localhost:3000/reviews", {
            method: 'POST',
            body: JSON.stringify(newReview),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(r => r.json())
        .then(review => {
            props.addReview(review)
        }
        )
    }
    console.log(props.userId)
    return (
        
        <div>
            <button variant="primary" onClick={handleShow}>
        Write a Review!
      </button>
            
            
            <Modal show={show}>
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title id="registerForm">
                    Loving/scathing review 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div>
                    <input type="integer" name="rating" />
                    <label htmlFor="rating">Rating</label> 
                    </div>
                    <div>
                    <input type="textarea" name="body" />
                    <label htmlFor="body">Body</label> 
                    </div>
                    
                    
                    <input type="submit" value="Create Review" onClick={handleClose} />
                    
                     
                </form>
            </Modal.Body>
        </Modal>
        </div>
        



        
    )
}

export default ReviewButton;