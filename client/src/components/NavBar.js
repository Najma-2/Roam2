
import React from "react";


function NavBar({ onChangePage }) {

    // function handleLinkClick(e) {
    //     e.preventDefault()
    //     onChangePage(e.target.pathname)
    // }

    return (
        <nav>
            <h1>ROAM</h1>
        <div className="nav-links">
            <a  href="/">Home</a>
            <a  href="/login">Login</a>
            <a  href="/signup">Sign up</a>
            <a  href="/destinations">Destinations</a>
        </div>
        </nav>

);
}

export default NavBar;
