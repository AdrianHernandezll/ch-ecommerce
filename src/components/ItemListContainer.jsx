import React from 'react';
import { useParams } from 'react-router';

import ItemList from './products/product/ItemList';





const ItemListContainer = () => {

    const { idCategory } = useParams();

    return (
        <>
            <ItemList idCategory={idCategory} />
        </>
    )
}

export default ItemListContainer
