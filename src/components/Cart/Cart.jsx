import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';


const Cart = () => {
    const isEmpty = true;

    const EmpyCard = () => (
        <Typography variant="subtitle1">No tienes Items, Agregue items</Typography>

    );

    const FilledCard = () => (
        <>
            <Grid container spacing={3}>


            </Grid>
        </>
    );

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">My Shoping</Typography>
            {isEmpty ? <EmpyCard /> : <FilledCard />}

        </Container>
    )
}

export default Cart
