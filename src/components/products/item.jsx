import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ItemList from './product/ItemList';
const Item = () => {
    const [products, setProducts] = useState([])

    const product = [
        { id: 1, name: 'Pizza Muzzarella', description: 'Muzzarella y salsa de tomate', price: 8, image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480228383.jpg' },
        { id: 2, name: 'Pizza Muzzarella con Jamón', description: 'Muzzarella, jamón y salsa de tomate', price: 10, image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480261032.jpg' },
        { id: 3, name: 'Muzzarella con Jamón y Morrón', description: 'Muzzarella, Jamón, Morrón y Salsa de Tomate', price: 6, image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480236996.jpg' },
    ]

    const getPromise = new Promise((res, rej) => {

        let response = '200';
        if (response === '200') {
            setTimeout(() => {
                res(product)
            }, 3000)
        } else {
            rej('404')
        }
    })

    console.log(getPromise);
    getPromise.then(res => {
        setProducts(res)
        console.log(res)
    })
        .catch(error => console.log(error))
        .then(resp => console.log(resp))
    return (
        <main  >

            <Grid container justifyContent="center" spacing={4}>
                {products.map(item => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <ItemList item={item} />
                    </Grid>
                ))
                }

            </Grid>
        </main >
    )
}

export default Item
