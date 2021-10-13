import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useCartContext } from '../../Context/CartContext';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { LinkContainer } from 'react-router-bootstrap';
import { getFirestore } from '../../services/getFirebase';
import firebase from 'firebase/app'
import 'firebase/firestore'



const Cart = () => {

    const [formData, setFormData] = useState({
        name: '',
        tel: '',
        email: ''
    })

    const { cartList, removeItem, totalPrice, addOneItem, removeOneItem } = useCartContext();
    const isInCart = !cartList.length;

    const handleOnSubmit = (e) => {
        e.preventDefault()
        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate(new Date());

        orden.buyer = formData;

        orden.total = totalPrice();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.object.id;
            const title = cartItem.object.title;
            const price = cartItem.object.price * cartItem.quantity;

            return { id, title, price }
        })


        const db = getFirestore()
        db.collection('orders').add(orden)
            .then(resp => alert(resp.id))
            .catch(err => console.log(err))
            .finally(() =>
                setFormData({
                    name: '',
                    tel: '',
                    email: ''
                })
                //borrarLista()
            )


        //Actualiza todos los items que estan en el listado de Cart del CartContext
        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.object.id)
        )

        const batch = db.batch();

        // por cada item restar del stock la cantidad de el carrito

        itemsToUpdate.get()
            .then(collection => {
                collection.docs.forEach(docSnapshot => {
                    batch.update(docSnapshot.ref, {
                        stock: docSnapshot.data().stock - cartList.find(item => item.object.id === docSnapshot.id).quantity
                    })
                })

                batch.commit().then(res => {
                    console.log('resultado batch:', res)
                })
            })


    }


    function handleOnChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })


    }




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
                    <Card className="card d-block" key={id}>

                        <Table className="table table-borderless table-shopping-cart" >
                            <thead className="text-muted">
                                <tr className="small text-uppercase text-center">
                                    <th scope="col" width="120">Producto</th>
                                    <th scope="col" width="120">Cantidad</th>
                                    <th scope="col" width="120">Precio</th>
                                    <th scope="col" className="text-right d-none d-md-block" width="200"></th>
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
                                    <td className="d-flex justify-content-between">
                                        <Button className="mt-5" disabled={object.quantity >= object.object.stock} onClick={() => addOneItem(id)}>+</Button>
                                        <p className="mt-5 mx-auto">{object.quantity}</p>
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

            <form onSubmit={handleOnSubmit}>
                <input
                    type='text'
                    placeholder='ingrese el nombre'
                    name='name'
                    value={formData.name}
                    onChange={handleOnChange}

                />
                <input
                    type='text'
                    placeholder='ingrese el nro de tel'
                    name='tel'
                    value={formData.tel}
                    onChange={handleOnChange}

                />
                <input
                    type='text'
                    placeholder='ingrese el email'
                    name='email'
                    value={formData.email}
                    onChange={handleOnChange}

                />
                <input
                    type='text'
                    placeholder='Confirme el mail '
                    name='email2'
                    value={formData.email}
                    onChange={handleOnChange}
                />
                <Button type="submit" className="btn btn-out btn-primary btn-square btn-main" data-abc="true" > Realizar Compra </Button>
            </form>


        </>
    )
    return (
        <Container fluid>
            <h3 className="text-center">Cart Items:</h3>
            {isInCart ? <EmptyCard /> :
                <Col className="d-flex justify-content-center" >
                    <Row>
                        <Col md={9}>
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

                                    <hr />

                                    <Button className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continuar Comprando</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>}
        </Container>
    )

}

export default Cart
