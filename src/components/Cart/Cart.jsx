import Container from 'react-bootstrap/Container'
import { useCartContext } from '../../Context/CartContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';






const Cart = () => {
    const isInCart = true;

    const EmptyCard = () => {
        <div variant="h5" className="text-center">No tienes productos agregados, comienza a agregar productos </div>
    }

    const FilledCard = () => {


    }


    const { cartList } = useCartContext();


    return (
        <Container>
            <Col  >
                <Row>
                    <h3 className="text-center">Cart Shop</h3>
                    {isInCart ? <EmptyCard /> : <FilledCard />}
                </Row>
            </Col>
        </Container>
    )
}

export default Cart
