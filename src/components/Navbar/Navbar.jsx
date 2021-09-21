import React from 'react';
import { AppBar, Toolbar, MenuItem, Menu, Typography } from '@material-ui/core';

import logo from '../../asset/logo.png'
import useStyles from './styles'

import CardWidget from '../CardWidget';
import { NavLink } from 'react-router-dom';



const Navbar = () => {

    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <NavLink exact to="/">
                        <Typography variant="h6" className={classes.title} color="inherit">
                            <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                            TodoComida
                        </Typography>
                    </NavLink>
                    <Typography variant="h6" component="div" spacing="3" sx={{ flexGrow: 3 }} >
                        <NavLink exact to="/category/plato">Plato</NavLink>
                    </Typography>
                    <NavLink exact to="/category/picada">Picada</NavLink>
                    <Typography>
                    </Typography>
                    <NavLink exact to="/category/bebida">Bebida</NavLink>
                    <Typography>
                    </Typography>
                    <NavLink exact to="/category/pizza">Pizzas</NavLink>
                    <Typography>

                    </Typography>
                    <div className={classes.grow} />
                    <CardWidget />

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
