import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import ItemDetail from './Details/ItemDetail';

import { useParams } from 'react-router-dom';
import { getPromise } from '../util/mock'
import useStyles from './products/styles';




const ItemDetailContainer = () => {

    const [object, setObject] = useState([]);
    const [loading, setLoading] = useState(true)

    const { id } = useParams();

    useEffect(() => {
        getPromise
            .then((response) => {
                if (id) {
                    const itemFilter = response.find((item) => parseInt(item.id) === parseInt(id))
                    setObject(itemFilter)
                    console.log(itemFilter)
                } else {
                    setObject(response)
                }

            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [id])

    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container key={object[0]?.id}  >
                {loading ? <h2>Loading...</h2> : <ItemDetail object={object} />}
            </Grid>

        </main>
    )
}

export default ItemDetailContainer
