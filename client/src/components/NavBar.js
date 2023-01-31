
import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar({ user, setUser }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogout(){
        fetch('/logout', {
            method: 'DELETE',
        })
        .then(() => setUser(null))
    }


    return (
        <Navbar>
        <Container>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
            <Nav className="me-auto">
                <Nav.Link href="/destinations">Destinations</Nav.Link>
                <NavDropdown title='My Profile' id="basic-nav-dropdown">
                    <NavDropdown.Item href={ user ? `/profile` : null }>Profile</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    {user ? 
                    <NavDropdown.Item href="/" onClick={handleLogout}>Logout</NavDropdown.Item> : 
                    <NavDropdown.Item href="/">Login</NavDropdown.Item>}
                    <NavDropdown.Item href="/destinations">Add Your Destination Here</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Container>
    </Navbar>

);
}

export default NavBar;
