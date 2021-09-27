import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'





const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    const [changeBoton, setChangeBoton] = useState(true)

    const addItem = () => {
        if (count === stock) {
            alert('Stock superado');
        } else {
            setCount(count + 1);
        }
    }
    const onSubtract = () => {
        if (count < 1) {
            console.log('Agrega un articulo')
        } else {
            setCount(count - 1);
        }
    }

    const agregarCarrito = () => {
        onAdd(count)
        setChangeBoton(false);
    }
    return (
        <>
            {changeBoton ?
                <div className="justify-content-space-between">
                    <div className="text-center">
                        <p>Stock:{count}</p>
                    </div>
                    <div className="d-flex text-center mx-auto">
                        <button className="btn btn-lg btn-outline-primary text-uppercase" disabled={count === stock} onClick={addItem}>+1</button>
                        <button className="btn btn-lg btn-outline-primary text-uppercase mx-2 " onClick={agregarCarrito} disabled={count === 0}><i className="fas fa-shopping-cart"></i>Agregar al Carro</button>
                        <button className="btn btn-lg btn-outline-primary text-uppercase" disabled={count <= 0} onClick={onSubtract}>-1</button>
                    </div>
                </div>

                :
                <div className="d-flex justify-content-around">
                    <Link to={'/'}>
                        <Button className="btn btn-primary px-3">Continuar Compra</Button>
                    </Link>
                    <Link to={'/cart'}>
                        <Button className="btn btn-success">Finalizar Compra</Button>
                    </Link>
                </div>

            }
        </>


    )
}

export default ItemCount
