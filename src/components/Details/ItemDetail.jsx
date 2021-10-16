import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';
import { useCartContext } from '../../Context/CartContext';
import { Col, Row } from 'react-bootstrap';




const ItemDetail = ({ object }) => {

    const { addToCart } = useCartContext();

    const onAdd = (cant) => {
        addToCart(object, cant)
    }


    return (

        <>
            <Card style={{ width: '90%' }} className="mt-4 mx-auto" >
                <Row>
                    <Col sm={12} md={6} className=" border-right mx-auto mt-2 px-1 px-md-2 px-lg-4 py-5">
                        <article className="gallery-wrap">
                            <div className="img-big-wrap">
                                <img src={object.image} style={{ width: '100%' }} alt="logo" />
                            </div>
                        </article>
                    </Col>
                    <Col sm={12} md={6} className="border-right">
                        <article className="card-body  mx-auto px-1 px-md-2 px-lg-4 py-5 ">
                            <h3 className="title mb-3">{object.title}</h3>

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
                            <div className="param param-feature ">
                                <dt>Delivery</dt>
                                <p className="text-success">A todo el pais</p>
                            </div>
                            <div className="text-center mx-auto d-flex">
                                <ItemCount stock={5} initial={1} onAdd={onAdd} />
                            </div>
                        </article>
                    </Col>

                </Row>
            </Card>


        </>


    )
}

export default ItemDetail


