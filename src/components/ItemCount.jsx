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
                <>
                    <p>Stock:{count}</p>
                    <button disabled={count === stock} onClick={addItem}>+1</button>
                    <button onClick={agregarCarrito} disabled={count === 0}>Agregar al Carro</button>
                    <button disabled={count <= 0} onClick={onSubtract}>-1</button>
                </>

                :
                <>
                    <Link to={'/'}>
                        <Button  >Continuar Compra</Button>
                    </Link>
                    <Link to={'/cart'}>
                        <Button  >Finalizar Compra</Button>
                    </Link>
                </>

            }
        </>


    )
}

export default ItemCount
