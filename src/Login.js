import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal"

function Login() {

    const [show, setShow] = useState(false);
    const handleClose = () =>  setShow(false);
    const handleShow = () =>  setShow(true);
    

    return (
        <div>
            <button variant="primary" onClick={handleShow}>
        Login?
      </button>
            
            
            <Modal show={show}>
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title id="registerForm">
                    You like us that much? 👨‍❤️‍👨 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div>
                    <input type="text" name="name" />
                    <label htmlFor="name">Name</label> 
                    </div>
                    
                    
                    <input type="submit" value="Login" onClick={handleClose} />
                    
                     
                </form>
            </Modal.Body>
        </Modal>
        </div>
        



        
    )
}

export default Login;