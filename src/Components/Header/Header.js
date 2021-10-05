import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        // Dynamic Header Section 
        <nav>
            <Navbar className='NaverStyle'  collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                {/* All dynamic menu link here */}
                         <NavLink className='aStyle' to="/Home" activeStyle={{ color: "Gray"}}><img width='50px' src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Eucalyp-Deus_High_School.png" alt="" /></NavLink>
                         <NavLink className='aStyle' to="/Home" activeStyle={{ color: "Gray"}}>Home</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='aStyle' to="/Services" activeStyle={{ color: "Gray"}}>Services</NavLink>
                        <NavLink className='aStyle' to="/Blog" activeStyle={{ color: "Gray"}}>Blog</NavLink>
                        <NavLink className='aStyle' to="/About" activeStyle={{ color: "Gray"}}>About</NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;