import React from 'react';
import { AppBar, Toolbar, MenuItem, Menu, Typography, Button, Popover } from '@material-ui/core';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';




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
                        <NavLink exact to="/detalle">Productos</NavLink>
                    </Typography>
                    <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                            <div>
                                <Button variant="contained" {...bindTrigger(popupState)}>
                                    Open Popover
                                </Button>
                                <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <Typography sx={{ p: 2 }}>

                                    </Typography>
                                </Popover>
                            </div>
                        )}
                    </PopupState>
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
