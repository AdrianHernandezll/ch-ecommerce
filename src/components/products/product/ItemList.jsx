import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Item from '../Item';
import { getPromise } from '../../../util/mock';

import useStyles from '../styles';


const ItemList = ({ idCategory }) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getPromise
            .then((response) => {
                if (idCategory) {
                    const filtraCategoria = response.filter((producto) => producto.category === idCategory)
                    setItems(filtraCategoria)
                } else {
                    setItems(response)
                }

            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [idCategory])


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



