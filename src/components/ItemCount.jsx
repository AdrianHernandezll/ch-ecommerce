import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Button } from 'react-bootstrap';





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
                <Col className="d-flex flex-column justify-content-space-between">
                    <div className="text-center">
                        <p>Stock:{count}</p>
                    </div>
                    <div className="d-flex text-center mx-auto mx-sm-auto">
                        <button className="btn btn-lg btn-outline-primary text-uppercase" disabled={count === stock} onClick={addItem}><i className="fas fa-plus"></i></button>
                        <button className="btn btn-lg btn-outline-primary text-uppercase mx-2 " onClick={agregarCarrito} disabled={count === 0}><i className="fas fa-shopping-cart"></i>Agregar al Carro</button>
                        <button className="btn btn-lg btn-outline-primary text-uppercase" disabled={count <= 0} onClick={onSubtract}><i className="fas fa-minus"></i></button>
                    </div>
                </Col>

                :
                <Col className="d-flex mt-5 mx-1">
                    <Col>
                        <Link to={'/'}>
                            <Button variant="outline-primary" className="btn btn-lg text-uppercase px-3">Continuar Compra</Button>
                        </Link>

                    </Col>
                    <Col>
                        <Link to={'/cart'}>
                            <Button variant="outline-success" className="btn btn-lg text-uppercase">Finalizar Compra</Button>
                        </Link>

                    </Col>
                </Col>

            }
        </>


    )
}

export default ItemCount
