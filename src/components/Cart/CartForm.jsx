import { useState } from 'react';
import { getFirestore } from '../../services/getFirebase';
import firebase from 'firebase/app';
import { toast, ToastContainer } from 'react-toastify';
import { useCartContext } from '../../Context/CartContext';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Form } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
import useForm from './useForm';


const CartForm = () => {
    // const { register, errors } = useForm();
    const form = useForm();
    const { totalPrice, cartList, } = useCartContext();
    const notify = () =>
        setTimeout(() => {
            toast("Orden Realizada Correctamente")
            setTimeout(() => {
                window.location.href = '/'
            }, 3000)
        });

    const handleOnSubmit = (e) => {
        e.preventDefault()
        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate(new Date());

        orden.buyer = { name: form.name, tel: form.number, email: form.email };

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


            <Form onSubmit={handleOnSubmit} className="mx-auto text-center">
                <Row>
                    <Col lg={5} className='mx-auto'>
                        <Form.Control
                            size="lg"
                            type="text"
                            // {...register("message", {
                            //     required: "Required",
                            // })}
                            placeholder="Ingrese su Nombre"
                            name="name"
                            value={form.name}
                            onChange={(e) => form.setName(e.target.value)}
                            className="mt-4 mb-2 text-center"

                        />
                        <span className="text-danger text-small d-block mb-2">
                            {form.errors[0] ? "Debe ser mayor a 3 caracteres" : ""}
                        </span>
                    </Col>
                    <Col lg={5} className="mx-auto mt-4">
                        <Form.Control
                            size="lg"
                            type="number"

                            placeholder="Ingrese su numero"
                            name="tel"
                            value={form.number}
                            onChange={(e) => form.setNumber(e.target.value)}
                            className="mb-2 text-center"
                        />
                        <span className="text-danger text-small d-block mb-2">
                            {form.errors[1] ? "No debe ser menor a 9 caracteres" : ""}
                        </span>
                    </Col>
                    <Col lg={5} className="mx-auto" >
                        <Form.Control
                            size="lg"
                            type="email"
                            placeholder="Ingrese su Email"
                            name="email"
                            value={form.email}
                            onChange={(e) => form.setEmail(e.target.value)}
                            className="mb-2 text-center"
                        />
                        <span className="text-danger text-small d-block mb-2">
                            {form.errors[2] ? "Email no valido" : ""}
                        </span>
                    </Col>
                    <Col lg={5} className="mx-auto">
                        <Form.Control
                            size="lg"
                            type="email"
                            placeholder="Confirme su Email"
                            name="email"
                            value={form.emailVerification}
                            onChange={(e) => form.setEmailVerification(e.target.value)}
                            className="mb-2 text-center"
                        />
                        <span className="text-danger text-small d-block mb-2">
                            {form.errors[3] ? "Los emails no son iguales" : ""}
                        </span>
                    </Col>
                    <Col lg={5} className="mx-auto mt-3">
                        <Button disabled={form.disabled} variant="outline-success" type="submit" className="btn btn-out btn-square btn-main px-3" data-abc="true" onClick={notify} > Realizar Compra </Button>
                    </Col>
                </Row>
            </Form>





        </Container>

    )
}


export default CartForm
