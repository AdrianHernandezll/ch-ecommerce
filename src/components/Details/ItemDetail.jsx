import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons';


import useStyles from '../products/product/style'



const ItemDetail = ({ object }) => {
    console.log(object);
    const classes = useStyles();

    return (
        <Card className={classes.root} >

            <CardMedia className={classes.media} image={object.image} title={object.name} />
            <CardContent >
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {object.name}
                    </Typography>
                    <Typography variant="h5">
                        ${object.price}
                    </Typography>

                </div>
                <Typography variant="body2" color="textSecondary">{object.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>

                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
            {/* <Item item={item} /> */}
        </Card>
    )
}

export default ItemDetail


