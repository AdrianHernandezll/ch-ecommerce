import { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import Item from '../Item'

import useStyles from '../styles';

const ItemList = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    const Productos = [
        { id: 1, name: 'Pizza Muzzarella', description: 'Muzzarella y salsa de tomate', price: 8, image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480228383.jpg' },
        { id: 2, name: 'Pizza Muzzarella con Jamón', description: 'Muzzarella, jamón y salsa de tomate', price: 10, image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480261032.jpg' },
        { id: 3, name: 'Muzzarella con Jamón y Morrón', description: 'Muzzarella, Jamón, Morrón y Salsa de Tomate', price: 6, image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480236996.jpg' },
    ];

    const getPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Productos)
        }, 3000)
    });

    useEffect(() => {
        getPromise.then((response) => {
            setItems(response)
        })
            .catch(error => console.log(error))
            .finally(setLoading(false))
    }, [])




    const classes = useStyles();
    return (

        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={3}>
                {loading ? <h2>Loading...</h2> :
                    items.map(item => (
                        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                            <Item item={item} />
                        </Grid>
                    ))
                }

            </Grid>
        </main>
    )

}

export default ItemList



