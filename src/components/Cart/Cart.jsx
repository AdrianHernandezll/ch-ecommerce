import Container from 'react-bootstrap/Container'
import { useCartContext } from '../../Context/CartContext';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'







const Cart = () => {

    const { cartList } = useCartContext();
    const isInCart = !cartList.length;

    const EmptyCard = () => (

        <div variant="h5" className="text-center" >No tienes productos agregados, comienza a agregar productos </div>
    )

    const FilledCard = () => (

        < >
            <Table className="table-responsive">
                {cartList.map((object, id) => (
                    <Card class="card d-block" key={id}>
                        <Table class="table-responsive">
                            <table class="table table-borderless table-shopping-cart">
                                <thead class="text-muted">
                                    <tr class="small text-uppercase text-center">
                                        <th scope="col">Productos</th>
                                        <th scope="col" width="120">Cantidad</th>
                                        <th scope="col" width="120">Precio</th>
                                        <th scope="col" class="text-right d-none d-md-block" width="200"></th>
                                    </tr>
                                </thead>
                                <tbody className="text-center  justify-content-between">
                                    <tr>
                                        <td>
                                            <figure className="itemside align-items-center mx-auto ">
                                                <div variant="h5">{object.object.title}</div>
                                                <div className="aside text-center"><img src={object.object.image} width="150" alt="img logo" /></div>
                                            </figure>
                                        </td>
                                        <td>
                                            <select className="form-control d-flex align-items-center mt-5">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select> </td>
                                        <td className="mt-5">
                                            <div className="price-wrap mt-5"> <var className="price">${object.object.price.toFixed(2)}</var> </div>
                                        </td>
                                        <td className="text-right d-none d-md-block"> <Button href="/" className="btn btn-light mt-5" data-abc="true"> <i className="far fa-trash-alt"></i></Button> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Table>
                    </Card>
                ))}

            </Table>

        </>
    )
    return (
        <Container fluid>
            <h3 className="text-center">Cart Items:</h3>
            {isInCart ? <EmptyCard /> : <Col className="d-flex justify-content-center">
                <Row>
                    <Col md={8}>
                        <FilledCard />
                    </Col>
                    <Col md={4} className="mx-auto">
                        <Card className="card">
                            <Card.Body className="card-body text-center">
                                <dl className="dlist-align">
                                    <dt>Subtotal:</dt>
                                    <dd className="text-right ml-3">$69.97</dd>
                                </dl>
                                <dl className="dlist-align">
                                    <dt>Precio Total:</dt>
                                    <dd className="text-right text-danger ml-3">- $10.00</dd>
                                </dl>
                                <dl className="dlist-align">
                                    <dt>Total:</dt>
                                    <dd className="text-right text-dark b ml-3"><strong>$59.97</strong></dd>
                                </dl>
                                <hr /> <a href="/" className="btn btn-out btn-primary btn-square btn-main" data-abc="true"> Make Purchase </a> <a href="/" className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>}
        </Container>
    )
}

export default Cart
