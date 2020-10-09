import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/volunteer1.png';
import './Header.css';

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <Container className="header">
            <Navbar bg="***" variant="light" className="py-4">
                <Link to="/home">
                    <img src={logo} alt="" className="logo" />
                </Link>
                <Nav className="ml-auto customNav">
                    <Link to="/home" className="customLink" >Home</Link>
                    <Nav.Link href="#" className="customLink">Donation</Nav.Link>
                    <Link to="/events" className="customLink">Events</Link>   
                    <Link to="#" className="customLink">{loggedInUser.name}</Link>                    
                    <Link to="#" >
                        <Button variant="primary" className="customBtn">Register</Button>
                    </Link>   
                    {
                        loggedInUser.email ? 
                        <Button variant="primary" className="customButton" onClick={() => setLoggedInUser({})}>Logout</Button>
                         :
                        <Link to="/login">
                            <Button variant="primary" className="customButton">Login</Button>
                        </Link>
                    }
                    <Link to="/admin">
                        <Button variant="dark" className="customBtn" >Admin</Button>
                    </Link>
                </Nav>
            </Navbar>
        </Container>
    );
};

export default Header;