import React from 'react';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap'
import logo from '../../asset/logo.png'
import CardWidget from '../CardWidget';
import { LinkContainer } from 'react-router-bootstrap';



const NavBar = () => {


    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <LinkContainer exact to="/">
                        <Navbar.Brand>
                            <img
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                            TodoComida
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                                <LinkContainer exact to="/category/plato">
                                    <NavDropdown.Item href="#action/3.1">Plato</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer exact to="/category/picada">
                                    <NavDropdown.Item href="#action/3.2">Picada</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer exact to="/category/bebida">
                                    <NavDropdown.Item href="#action/3.3">Bebida</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer exact to="/category/pizza">
                                    <NavDropdown.Item href="#action/3.4">Pizzas</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <LinkContainer exact to="/Cart">
                                <Nav.Link href="#deets">
                                    <CardWidget />
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
