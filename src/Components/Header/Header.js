import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className='NaverStyle'  collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                         <Link className='aStyle' to="/Home"><img width='50px' src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Eucalyp-Deus_High_School.png" alt="" /></Link>
                         <Link className='aStyle' to="/Home">Home</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='aStyle' to="/Services">Services</Link>
                        <Link className='aStyle' to="/Blog">Blog</Link>
                        <Link className='aStyle' to="/About">About</Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;