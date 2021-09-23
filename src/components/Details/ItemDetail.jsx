import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid } from '@material-ui/core';
import ItemCount from '../ItemCount';
import { AddShoppingCart } from '@material-ui/icons';


import useStyles from '../products/product/style'




const ItemDetail = ({ object }) => {

    const classes = useStyles();

    return (

        <Grid container justifyContent="center">
            <Grid item md={4} >
                <Card className={classes.root}>
                    <CardMedia className={classes.media} image={object.image} title={object.name} />

                </Card>
            </Grid>
            <Grid container md={3} >
                <Card className={classes.root}>
                    <CardContent >
                        <div className={classes.cardContent}>
                            <Typography variant="h5" gutterBottom>
                                {object.name}
                            </Typography>
                            <Typography variant="h5">
                                ${object.price}
                            </Typography>

                        </div>
                        <Typography variant="body2">{object.description}</Typography>
                    </CardContent>
                    <Grid container >
                        <Grid item md={7} sx={{ flexGrow: 1 }} >
                            <CardActions disableSpacing className={classes.cardActions}>
                                <ItemCount />
                            </CardActions>
                        </Grid>
                        <Grid item md={4} >
                            <Grid item md={4} >
                                <IconButton className={classes.cardActions}>
                                    <AddShoppingCart />
                                </IconButton>

                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid >




    )
}

export default ItemDetail


