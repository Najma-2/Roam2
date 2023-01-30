
import React from "react";


function NavBar({ onChangePage }) {

    // function handleLinkClick(e) {
    //     e.preventDefault()
    //     onChangePage(e.target.pathname)
    // }

    return (
        <nav>
            
        <div className="nav-links">
            <ul>
            <li><a  href="/">Home</a></li>
            <li><a  href="/login">Login</a></li>
            <li><a  href="/signup">Sign up</a></li>
            <li><a  href="/destinations">Destinations</a></li>
            </ul>
        </div>
        </nav>

);
}

export default NavBar;
