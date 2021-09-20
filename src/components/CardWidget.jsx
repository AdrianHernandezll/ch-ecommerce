import React from 'react';
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import useStyles from "./Navbar/styles";

const CardWidget = () => {
    const classes = useStyles();
    return (
        <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
                <Badge badgeContent={2} color="secondary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
        </div>
    )
}

export default CardWidget
