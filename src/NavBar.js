import React from "react"
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '3px',
    margin: '0 6px 6px',
    background: 'yellow',
    textDecoration: 'none',
    color: 'fuchsia',
  }


function Navbar() {
    return (
        <div>
            <NavLink to="/" style={link}>
                Home
            </NavLink>
            <NavLink to='/register' style={link}>
                Register
            </NavLink>
            <NavLink to= "/login" style={link}>
                Login
            </NavLink>
        </div>
    )
}

export default Navbar;