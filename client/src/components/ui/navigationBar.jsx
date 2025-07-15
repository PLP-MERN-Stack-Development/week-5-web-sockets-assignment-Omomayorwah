import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar () {

 return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">MyBlog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-3 ml-6">
              <Nav.Link href="#home">About Us</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Tech</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Socials
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Economics</NavDropdown.Item>
              </NavDropdown>
               <Nav.Link href="#link">Community</Nav.Link>
               <Nav.Link href="#link">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
 )
}

export default NavigationBar