import 'react-toastify/dist/ReactToastify.css';
import { useCartContext } from '../../Context/CartContext';
import { Card, Col, Button, Container, Row, Table } from 'react-bootstrap/'
import { LinkContainer } from 'react-router-bootstrap';
import 'firebase/firestore'



const Cart = () => {


    const { cartList, removeItem, totalPrice, addOneItem, removeOneItem, clear } = useCartContext();
    const isInCart = !cartList.length;

    const EmptyCard = () => (
        <Container>
            <Col className="d-flex text-center flex-column">
                <div variant="h5" className="text-center" >No tienes productos agregados, comienza a agregar productos </div>
                <LinkContainer exact to="/">
                    <Col className="text-center mt-4">
                        <Button>Ir a Productos</Button>
                    </Col>
                </LinkContainer>
            </Col>
        </Container>
    )

    const FilledCard = () => (

        < >
            <Col className="table-responsive">
                {cartList.map((object, id) => (
                    <Card className="card " key={id}>

                        <Table className="table-responsive table-borderless table-shopping-cart" >
                            <thead className="text-muted">
                                <tr className="small text-uppercase text-center">
                                    <th scope="col" width="120">Producto</th>
                                    <th scope="col" width="120">Cantidad</th>
                                    <th scope="col" width="120">Precio</th>
                                    <th scope="col" className="text-right d-none d-md-block" width="200"></th>
                                </tr>
                            </thead>
                            <tbody className="text-center  justify-content-between flex-column">
                                <tr>
                                    <td>
                                        <figure className="itemside align-items-center mx-auto ">
                                            <div variant="h5">{object.object.title}</div>
                                            <div className="aside text-center"><img src={object.object.image} width="150" alt="img logo" /></div>
                                        </figure>
                                    </td>
                                    <td className="d-flex justify-content-between">
                                        <Button className="mt-5" disabled={object.quantity >= object.object.stock} onClick={() => addOneItem(id)}>+</Button>
                                        <p className="mt-5 ">{object.quantity}</p>
                                        <Button className="mt-5 " disabled={object.quantity <= 1} onClick={() => removeOneItem(id)}>-</Button>
                                    </td>
                                    <td className="mt-5">
                                        <div className="price-wrap mt-5"> <var className="price">${object.object.price}</var> </div>
                                    </td>
                                    <td className="text-right d-none d-md-block"> <Button className="btn btn-light " data-abc="true" onClick={() => removeItem(object)}> <i className="far fa-trash-alt"></i></Button> </td>
                                </tr>
                            </tbody>
                        </Table>

                    </Card>
                ))}

            </Col>
        </>
    )
    return (
        <Container fluid>
            <h3 className="text-center">Cart Items:</h3>
            {isInCart ? <EmptyCard /> :
                <Col className="d-flex justify-content-center" >
                    <Row>
                        <Col md={9} xs={12}>
                            <FilledCard />
                        </Col>
                        <Col md={3} className="mx-auto">
                            <Card className="card"
                            >
                                <Card.Body className="card-body text-center">
                                    <dl className="dlist-align">
                                        <dt>Subtotal:</dt>
                                        <dd className="text-right ml-3">${totalPrice()}</dd>
                                    </dl>
                                    <dl className="dlist-align">
                                        <dt>Precio Total:</dt>
                                        <dd className="text-right text-success ml-3">${totalPrice() + 150}+Envio</dd>
                                    </dl>
                                    <Button variant="outline-danger" className="btn btn-out btn-square btn-main mt-2 mx-1" data-abc="true" onClick={() => { clear() }}> Vaciar Carrito </Button>
                                    <Button variant="outline-primary" className="btn btn-out btn-square btn-main mt-2" data-abc="true">Continuar Comprando</Button>

                                    <hr />
                                    <div className="d-flex flex-column align-items-center ">
                                        <LinkContainer exact to="/CartForm">
                                            <Button variant="outline-success" className="btn btn-out btn-square btn-main mt-2" disabled={isInCart} data-abc="true">Finalizar Compra</Button>
                                        </LinkContainer>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>}
        </Container>
    )

}

export default Cart
