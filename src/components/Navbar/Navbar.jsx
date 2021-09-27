import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


import logo from '../../asset/logo.png'


import CardWidget from '../CardWidget';
import { LinkContainer } from 'react-router-bootstrap';



const NavBar = () => {


    return (
        <>
            {/* <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <NavLink exact to="/">
                        <Typography variant="h6" className={classes.title} color="inherit">
                            <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                            TodoComida
                        </Typography>
                    </NavLink>
                    <Typography variant="a" component="div" justifyContent='space-between' >
                        <NavLink exact to="/category/plato">Plato</NavLink>
                        <NavLink exact to="/category/picada">Picada</NavLink>
                        <NavLink exact to="/category/bebida">Bebida</NavLink>
                        <NavLink exact to="/category/pizza">Pizzas</NavLink>
                    </Typography>

                    <div className={classes.grow} />
                    <NavLink exact to="/Cart">
                        <CardWidget />
                    </NavLink>


                </Toolbar>
            </AppBar> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <LinkContainer exact to="/">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
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
