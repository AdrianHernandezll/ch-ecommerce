import React, { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial); // []

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
        if (count === 0) {
            alert('No hay artiulos agregados');
        } else {
            onAdd(count)
            alert('Agregado al carrito');
        }
    }
    return (
        <>

            <div className=" ">
                <p>Stock:{count}</p>
                <button className="btn btn-primary" disabled={count === stock} onClick={addItem}>+1</button>
                <button className="btn btn-primary mx-auto" onClick={agregarCarrito}>Agregar al Carro</button>
                <button className="btn btn-primary" disabled={count <= 0} onClick={onSubtract}>-1</button>
            </div>


        </>
    )
}

export default ItemCount
