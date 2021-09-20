import React from 'react';
import { AppBar, Toolbar, MenuItem, Menu, Typography, Link, } from '@material-ui/core';

import logo from '../../asset/logo.png'
import useStyles from './styles'

import CardWidget from '../CardWidget';
import { NavLink } from 'react-router-dom';
import PopoverPopupState from './PopoverPopupState';


const Navbar = () => {

    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <NavLink exact to="/">
                        <Typography variant="h6" className={classes.title} color="inherit">
                            <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                            Commerce
                        </Typography>
                    </NavLink>
                    <Typography variant="h6" component="div" spacing="4" sx={{ flexGrow: 3 }} >
                        <NavLink exact to="/detalle">Productos</NavLink>
                        <Link href="/">Nosotros</Link>
                    </Typography>
                    <Typography>
                        <PopoverPopupState />
                    </Typography>
                    <div className={classes.grow} />
                    <CardWidget />

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
