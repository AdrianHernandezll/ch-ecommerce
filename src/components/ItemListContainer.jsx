import React, { useState } from 'react';
// import ItemCount from './ItemCount';
import ItemList from './products/product/ItemList';


const ItemListContainer = ({ titulo }) => {
    const [count, setCount] = useState(0) //seteo aca el contador

    const onAdd = (cant) => {//declaro aca la funcion onadd aca para luego pasar los estados (props) a los hijos
        setCount(cant)
        console.log(cant);
        console.log(count);
    }
    return (
        <>
            <p className="text-center">Hola bienvenido al {titulo} </p>
            {/* <ItemCount onAdd={onAdd} stock={8} initial={1} /> */}
            <ItemList />
        </>
    )
}

export default ItemListContainer
