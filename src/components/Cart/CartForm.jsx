import { useState } from 'react';
import { getFirestore } from '../../services/getFirebase';
import firebase from 'firebase/app';
import { toast } from 'react-toastify';


const CartForm = () => {
    const notify = () =>
        setTimeout(() => {
            toast("Orden Realizada Correctamente")
            setTimeout(() => {
                clear()
            })
        }, 3000);;

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
            <Button type="submit" className="btn btn-out btn-primary btn-square btn-main" data-abc="true" onClick={notify} > Realizar Compra </Button>
        </form>
    )
}

export default CartForm
