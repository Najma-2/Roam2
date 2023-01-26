
import React from "react";


function NavBar({ onChangePage }) {

    function handleLinkClick(e) {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }

    return (
        <nav>
            <a onClick={handleLinkClick} href="/">Home</a>
            <a onClick={handleLinkClick} href="/login">Login</a>
            <a onClick={handleLinkClick} href="/signup">Sign up</a>

        </nav>

);
}

export default NavBar;
