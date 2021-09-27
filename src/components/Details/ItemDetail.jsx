import { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import itemDetail from './itemDetail.css'
import ItemCount from '../ItemCount';
import { useCartContext } from '../../Context/CartContext';
import { Col, Row } from 'react-bootstrap';




const ItemDetail = ({ object }) => {
    const [countSelect, setCountSelect] = useState(0);

    const { addToCart } = useCartContext();

    console.log(addToCart)

    const onAdd = (cant) => {

        addToCart({ object: object, cantidad: cant })

    }



    return (

        <>
            <Card>
                <Row>
                    <Col sm={6} className=" border-right mx-auto px-1 px-md-2 px-lg-4 py-5">
                        <article className="gallery-wrap">
                            <div className="img-big-wrap">
                                <img src={object.image} style={{ width: '100%' }} />
                            </div>
                        </article>
                    </Col>
                    <Col sm={6} >
                        <article className="card-body  mx-auto px-1 px-md-2 px-lg-4 py-5">
                            <h3 className="title mb-3">{object.name}</h3>

                            <p className="price-detail-wrap">
                                <span className="price h3 text-warning">
                                    <span className="currency">ARS $</span><span className="num">{object.price}</span>
                                </span>
                            </p>
                            <div className="item-property">
                                <dt>Description</dt>
                                <dd><p>{object.description} </p></dd>
                            </div>

                            <div className="param param-feature">
                                <dt>Categoria</dt>
                                <dd>{object.category}</dd>
                            </div>
                            <div className="param param-feature">
                                <dt>Delivery</dt>
                                <p variant="success">A todo el pais</p>
                            </div>

                            <hr />
                            <div class="col-sm-5">
                                <dl class="param param-inline">
                                    <dt>Cantidad: </dt>
                                    <dd>
                                        <select class="form-control form-control-sm" style={{ width: "70px" }}>
                                            <option> 1 </option>
                                            <option> 2 </option>
                                            <option> 3 </option>
                                        </select>
                                    </dd>
                                </dl>
                            </div>
                            <hr />

                            <a href="/" className="btn btn-lg btn-outline-primary text-uppercase"> <i className="fas fa-shopping-cart"></i> Add to cart </a>
                        </article>
                    </Col>

                </Row>
            </Card>


        </>

        // <Grid container justifyContent="center" >
        //     <Grid item lg={4} md={8} sm={8} xs={12} >
        //         <Card className={classes.root}>
        //             <CardMedia className={classes.media} image={object.image} title={object.name} />

        //         </Card>
        //     </Grid>
        //     <Grid container lg={4} md={8} sm={8} xs={12}>
        //         <Card className={classes.root}>
        //             <CardContent >
        //                 <div className={classes.cardContent}>
        //                     <Typography variant="h5" gutterBottom>
        //                         {object.name}
        //                     </Typography>
        //                     <Typography variant="h5">
        //                         ${object.price}
        //                     </Typography>

        //                 </div>
        //                 <Typography variant="body2">{object.description}</Typography>
        //             </CardContent>
        //             <Grid container >
        //                 <Grid item md={10} sx={{ flexGrow: 1 }} >
        //                     <CardActions disableSpacing className={classes.cardActions}>
        //                         <ItemCount stock={5} initial={1} onAdd={onAdd} />
        //                     </CardActions>
        //                 </Grid>

        //             </Grid>
        //         </Card>
        //     </Grid>
        // </Grid >




    )
}

export default ItemDetail


