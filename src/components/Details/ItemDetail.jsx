import { useState, useContext } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid } from '@material-ui/core';
import ItemCount from '../ItemCount';


import useStyles from '../products/product/style'
import { useCartContext } from '../../Context/CartContext';




const ItemDetail = ({ object }) => {
    const [countSelect, setCountSelect] = useState(0);

    const { addToCart } = useCartContext();

    console.log(addToCart)

    const onAdd = (cant) => {

        addToCart({ object: object, cantidad: cant })

    }

    const classes = useStyles();

    return (

        <Grid container justifyContent="center" >
            <Grid item lg={4} md={8} sm={8} xs={12} >
                <Card className={classes.root}>
                    <CardMedia className={classes.media} image={object.image} title={object.name} />

                </Card>
            </Grid>
            <Grid container lg={4} md={8} sm={8} xs={12}>
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
                        <Grid item md={10} sx={{ flexGrow: 1 }} >
                            <CardActions disableSpacing className={classes.cardActions}>
                                <ItemCount stock={5} initial={1} onAdd={onAdd} />
                            </CardActions>
                        </Grid>

                    </Grid>
                </Card>
            </Grid>
        </Grid >




    )
}

export default ItemDetail


