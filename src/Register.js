import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal"

function Register() {

    const [show, setShow] = useState(false);
    const handleClose = () =>  setShow(false);
    const handleShow = () =>  setShow(true);
    

    return (
        <div>
            <button variant="primary" onClick={handleShow}>
        Register?
      </button>
            
            
            <Modal show={show}>
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title id="registerForm">
                    Join us? Yes!?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div>
                    <input type="text" name="name" />
                    <label htmlFor="name">Name</label> 
                    </div>
                    <div>
                    <input type="integer" name="age" />
                    <label htmlFor="age">Age</label> 
                    </div> 
                    
                    <input type="submit" value="Register" onClick={handleClose} />
                    
                     
                </form>
            </Modal.Body>
        </Modal>
        </div>
        



        
    )
}

export default Register;