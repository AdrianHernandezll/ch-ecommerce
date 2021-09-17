import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ItemDetail from './Details/ItemDetail';

import useStyles from './products/styles'




const ItemDetailContainer = () => {

    const [object, setObject] = useState([]);

    const Productos = [
        { id: 1, name: 'Pizza Muzzarella', description: 'Muzzarella y salsa de tomate', price: 8, image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480228383.jpg' },
        { id: 2, name: 'Pizza Muzzarella con Jamón', description: 'Muzzarella, jamón y salsa de tomate', price: 10, image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480261032.jpg' },
        { id: 3, name: 'Muzzarella con Jamón y Morrón', description: 'Muzzarella, Jamón, Morrón y Salsa de Tomate', price: 6, image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480236996.jpg' },
    ];
    const unArray = Productos.find(productos => productos)


    useEffect(() => {
        const newPromise = new Promise((resolve, reject) => {
            let res = '200'
            if (res === '200') {
                setTimeout(() => {
                    resolve(unArray)
                }, 3000)
            }

        });

        newPromise.then((response) => {
            setObject(response)
        })
            .catch(error => console.log(error))
            .finally('ok')
    }, [])


    const classes = useStyles();



    return (

        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={3}>
                <Grid item key={object.id} xs={12} sm={6} md={4} lg={3}>
                    <ItemDetail object={object} />
                </Grid>
            </Grid>
        </main>
    )
}

export default ItemDetailContainer
