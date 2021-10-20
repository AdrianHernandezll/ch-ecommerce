import { useState } from 'react';
import { getFirestore } from '../../services/getFirebase';
import firebase from 'firebase/app';
import { toast, ToastContainer } from 'react-toastify';
import { useCartContext } from '../../Context/CartContext';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Form } from 'react-bootstrap';


const CartForm = () => {

    const { totalPrice, cartList, } = useCartContext();
    const notify = () =>
        setTimeout(() => {
            toast("Orden Realizada Correctamente")
            setTimeout(() => {
                window.location.href = '/'
            }, 3000)
        });

    const [formData, setFormData] = useState({
        name: '',
        tel: '',
        email: ''
    })
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
            .then(resp => console.log(resp.id))
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

    return (
        <Container>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover

            />

            <Row>
                <Form onSubmit={handleOnSubmit} className="mx-auto text-center">
                    <Col lg={5} className='mx-auto'>
                        <Form.Control
                            size="lg"
                            type="text"
                            placeholder="Ingrese su nombre completo"
                            name="name"
                            value={formData.name}
                            onChange={handleOnChange}
                            className="mt-4 mb-2 text-center"

                        />
                    </Col>
                    <Col lg={5} className="mx-auto">
                        <Form.Control
                            size="lg"
                            type="number"
                            placeholder="Ingrese su numero"
                            name="tel"
                            value={formData.tel}
                            onChange={handleOnChange}
                            className="mb-2 text-center"
                        />

                    </Col>
                    <Col lg={5} className="mx-auto" >
                        <Form.Control
                            size="lg"
                            type="email"
                            placeholder="Ingrese su Email"
                            name="email"
                            value={formData.email}
                            onChange={handleOnChange}
                            className="mb-2 text-center"
                        />

                    </Col>
                    <Col lg={5} className="mx-auto">
                        <Form.Control
                            size="lg"
                            type="email"
                            placeholder="Confirme su Email"
                            name="email"
                            value={formData.email}
                            onChange={handleOnChange}
                            className="mb-2 text-center"
                        />

                    </Col>
                    <Col lg={5} className="mx-auto mt-3">
                        <Button variant="outline-success" type="submit" className="btn btn-out btn-square btn-main px-3" data-abc="true" onClick={notify} > Realizar Compra </Button>
                    </Col>
                </Form>

            </Row>



        </Container>

    )
}


export default CartForm
