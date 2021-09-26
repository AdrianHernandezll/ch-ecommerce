import { useContext } from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { useCartContext } from '../../Context/CartContext';


const Cart = () => {
    // const isEmpty = true;

    // const EmpyCard = () => (
    //     <Typography variant="subtitle1">No tienes Items, Agregue items</Typography>

    // );

    // const FilledCard = () => (
    //     <>

    //     </>
    // );

    const { cartList } = useCartContext();


    return (
        <Container>
            {/* <div className={classes.toolbar} />
            <Typography variant="h3">Hola soy Cart</Typography>
            {isEmpty ? <EmpyCard /> : <FilledCard />} */}

            {cartList.map(object => <h2 key={object.id}> {object.object.name}</h2>)}

        </Container>
    )
}

export default Cart
