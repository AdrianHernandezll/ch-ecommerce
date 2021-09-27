
import Container from 'react-bootstrap/Container'
import { useCartContext } from '../../Context/CartContext';


const Cart = () => {


    const { cartList } = useCartContext();


    return (
        <Container>
            {cartList.map(object => <h2 key={object.id}> {object.object.name}</h2>)}
        </Container>
    )
}

export default Cart
