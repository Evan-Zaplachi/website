import * as React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/navbar.css';
import logo from '../img/myLogo.png';


const StickyNavbar = () => {
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > window.innerHeight*0.8) {
            setScrolled(true);
        }
        else {
            setScrolled(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let x =['navbar'];
    if (scrolled){
        x.push('scrolled')
    }

    if (window.pageYOffset !== null) {
       window.onscroll = function () {
        scrollRotate();
    } 
    }
    

    function scrollRotate() {
        let image = document.getElementById("reload")!;
        image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    }

    return(
        <div className={x.join(" ")}>
            <NavLink to="/home" className="navbarCon"  activeStyle={{ backgroundColor: "cadetblue" }} >Home</NavLink>
            <NavLink to='/projects' className="navbarCon" activeStyle={{ backgroundColor: "cadetblue" }}>Projects</NavLink>
            <NavLink to='/aboutMe' className="navbarCon" activeStyle={{ backgroundColor: "cadetblue" }}>About Me</NavLink>
            <NavLink to='/contact' className="navbarCon" activeStyle={{ backgroundColor: "cadetblue" }}>Contact</NavLink>

            <span className="navbar-icon">
               <img src={logo} alt="Logo" className="iconSizing" id="reload"/> 
            </span>
        </div>
    )
}

export default StickyNavbar
