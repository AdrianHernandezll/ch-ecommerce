import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ItemDetail from './Details/ItemDetail';

import { newPromiseOne } from '../util/mock';
import useStyles from './products/styles';




const ItemDetailContainer = () => {

    const [object, setObject] = useState([]);

    useEffect(() => {
        newPromiseOne
            .then((response) => setObject(response))
            .catch(error => console.log(error))
            .finally(() => 'ok')
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
