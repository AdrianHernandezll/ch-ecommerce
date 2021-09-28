import Container from 'react-bootstrap/Container'
import { useCartContext } from '../../Context/CartContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Cart = () => {


    const { cartList } = useCartContext();


    return (
        <Container>
            {cartList.map(object =>
                <div key={object.object.id} className="cart_section">
                    <Container fluid>
                        <Row >
                            <Col lg={10} className="offset-lg-1">
                                <div className="cart_container">
                                    <div className="cart_title">Shopping Cart<small> (1 item in your cart) </small></div>
                                    <div className="cart_items">
                                        <ul className="cart_list">
                                            <li className="cart_item clearfix">
                                                <div className="cart_item_image"><img src={object.object.image} alt="img" /></div>
                                                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                                    <div className="cart_item_name cart_info_col">
                                                        <div className="cart_item_title">Nombre</div>
                                                        <div className="cart_item_text">{object.name}</div>
                                                    </div>
                                                    <div className="cart_item_color cart_info_col">
                                                        <div className="cart_item_title">Categoria</div>
                                                        <div className="cart_item_text"><span style={{ backgroundColor: "#999999" }}></span>{object.category}</div>
                                                    </div>
                                                    <div className="cart_item_quantity cart_info_col">
                                                        <div className="cart_item_title">Quantity</div>
                                                        <div className="cart_item_text">1</div>
                                                    </div>
                                                    <div className="cart_item_price cart_info_col">
                                                        <div className="cart_item_title">Precio</div>
                                                        <div className="cart_item_text">${object.price}</div>
                                                    </div>
                                                    <div className="cart_item_total cart_info_col">
                                                        <div className="cart_item_title">Total</div>
                                                        <div className="cart_item_text">₹22000</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="order_total">
                                        <div className="order_total_content text-md-right">
                                            <div className="order_total_title">Order Total:</div>
                                            <div className="order_total_amount">₹22000</div>
                                        </div>
                                    </div>
                                    <div className="cart_buttons"> <button type="button" className="button cart_button_clear">Continue Shopping</button> <button type="button" className="button cart_button_checkout">Add to Cart</button> </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>)}
        </Container>
    )
}

export default Cart
