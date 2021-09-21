import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ItemDetail from './Details/ItemDetail';

import { useParams } from 'react-router-dom';
import { getPromise } from '../util/mock'
import useStyles from './products/styles';




const ItemDetailContainer = () => {

    const [object, setObject] = useState([]);
    const [loading, setLoading] = useState(true)

    const { idItem } = useParams();

    useEffect(() => {
        getPromise
            .then((response) => {
                if (idItem) {
                    const itemFilter = response.filter((item) => parseInt(item.id) === parseInt(idItem))
                    setObject(itemFilter)
                    console.log(itemFilter)
                } else {
                    setObject(response)
                }

            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [idItem])

    const classes = useStyles();

    return (

        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={3}>
                <Grid item key={object[0].id} xs={12} sm={6} md={4} lg={3}>
                    {loading ? <h2>Loading...</h2> : <ItemDetail object={object[0]} />}
                </Grid>
            </Grid>
        </main>
    )
}

export default ItemDetailContainer
