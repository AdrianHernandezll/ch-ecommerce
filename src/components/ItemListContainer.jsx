import React, { useState } from 'react';
import { useParams } from 'react-router';
// import ItemCount from './ItemCount';
import ItemList from './products/product/ItemList';




const ItemListContainer = () => {
    const [count, setCount] = useState(0) //seteo aca el contador

    const { idCategory } = useParams();

    console.log("??", idCategory);

    const onAdd = (cant) => {//declaro aca la funcion onadd aca para luego pasar los estados (props) a los hijos
        setCount(cant)
        console.log(cant);
        console.log(count);
    }
    return (
        <>

            {/* <ItemCount onAdd={onAdd} stock={8} initial={1} /> */}
            <ItemList idCategory={idCategory} />
        </>
    )
}

export default ItemListContainer
