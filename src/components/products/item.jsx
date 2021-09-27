import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


import { Link } from 'react-router-dom';



const Item = ({ item }) => {


    return (


        <>
            <Card style={{ width: 'auto', marginTop: "1rem", height: '600px' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Link to={`/item/${item.id}`}>
                        <Button variant="primary">Ver mas</Button>
                    </Link>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>

                </Card.Body>
            </Card>
        </>
        // <Card className={classes.root} style={{ maxHeight: "450px", height: "500px" }}>
        //     <CardMedia className={classes.media} image={item.image} title={item.name} />
        //     <CardContent>
        //         <div className={classes.cardContent}>
        //             <Typography variant="subtitle1" gutterBottom>
        //                 {item.name}
        //             </Typography>
        //             <Typography variant="subtitle2" color="success">
        //                 ${item.price}
        //             </Typography>

        //         </div>
        //         <Typography variant="body2" color="textSecondary">{item.description}</Typography>
        //     </CardContent>
        //     <CardActions disableSpacing className={classes.cardActions} sx={{ alignItems: 'flex-end' }}>
        //         <Link to={`/item/${item.id}`}>
        //             <Button variant="contained">Ver más</Button>
        //         </Link>
        //         <IconButton aria-label="Add to Cart">
        //             <AddShoppingCart />
        //         </IconButton>
        //     </CardActions>
        //     {/* <Item item={item} /> */}
        // </Card>
    )
}

export default Item
