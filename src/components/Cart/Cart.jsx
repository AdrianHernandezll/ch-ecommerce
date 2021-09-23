import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';


const Cart = () => {
    const isEmpty = true;

    const EmpyCard = () => (
        <Typography variant="subtitle1">No tienes Items, Agregue items</Typography>

    );

    const FilledCard = () => (
        <>

        </>
    );

    return (
        <Container>
            {/* <div className={classes.toolbar} /> */}
            <Typography variant="h3">Hola soy Cart</Typography>
            {isEmpty ? <EmpyCard /> : <FilledCard />}

        </Container>
    )
}

export default Cart
