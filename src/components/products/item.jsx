import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';



import useStyles from './product/style';


const Item = ({ item }) => {

    const classes = useStyles();
    return (
        <Card className={classes.root} style={{ maxHeight: "450px", width: "100p%" }}>
            <CardMedia className={classes.media} image={item.image} title={item.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {item.name}
                    </Typography>
                    <Typography variant="h5">
                        ${item.price}
                    </Typography>

                </div>
                <Typography variant="body2" color="textSecondary">{item.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <Link to={`/item/${item.id}`}>
                    <Button variant="contained">Ver más</Button>
                </Link>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
            {/* <Item item={item} /> */}
        </Card>
    )
}

export default Item
