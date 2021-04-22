import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal"
import ReactPlayer from 'react-player'

function Login(props) {

    const [show, setShow] = useState(false);
    const handleClose = () =>  setShow(false);
    const handleShow = () =>  setShow(true);
    
    const handleSubmit = (e) => {
        e.preventDefault();

      let user = {
            name: e.target.name.value
            
        }

        console.log(user)

        fetch("http://localhost:3000/login", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(r => r.json())
        .then(user => {
            if (!user.error) {
                const userObj = {
                    name: user.name,
                    age: user.age,
                    id: user.id
                }
                console.log(userObj)
                props.changeUser(userObj)
                window.localStorage.setItem("Power Cycle", JSON.stringify(userObj));
                window.location = '/'
            } else {
                alert("User doesn't exist. Sure it isn't your first time here?")
            }
        })
    }
    return (
        <div>
            <button variant="primary" onClick={handleShow}>
        Login?
      </button>
            
            
            <Modal   show={show}>
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title id="registerForm">
                    You like us that much? 👨‍❤️‍👨 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body classname="modal">
                <form onSubmit={handleSubmit}>
                    <div>
                    <input type="text" name="name" />
                    <label htmlFor="name">Name</label> 
                    </div>
                    
                    
                    <input type="submit" value="Login" onClick={handleClose} />
                    
                     
                </form>
                <ReactPlayer url='https://www.youtube.com/watch?v=0habxsuXW4g'/>
            </Modal.Body>
        </Modal>
        </div>
        



        
    )
}

export default Login;