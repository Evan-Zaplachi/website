import * as React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/navbar.css';
import logo from '../img/myLogo.png';


const Navbar = () => {
    return(
        <div className="navbar">
            <NavLink to="/home" className="navbarCon"  activeStyle={{ backgroundColor: "cadetblue" }} >Home</NavLink>
            <NavLink to='/projects' className="navbarCon" activeStyle={{ backgroundColor: "cadetblue" }}>Projects</NavLink>
            <NavLink to='/aboutMe' className="navbarCon" activeStyle={{ backgroundColor: "cadetblue" }}>About Me</NavLink>
            <NavLink to='/contact' className="navbarCon" activeStyle={{ backgroundColor: "cadetblue" }}>Contact</NavLink>

            <span className="navbar-icon">
               <img src={logo} alt="Logo" className="iconSizing" /> 
            </span>
        </div>
    )
}

export default Navbar