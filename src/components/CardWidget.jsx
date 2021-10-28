import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import { useCartContext } from '../Context/CartContext';




const CardWidget = () => {

    const { iconCartWd } = useCartContext();
    return (
        <div >
            <Button variant="primary">
                <i className="fas fa-shopping-cart"></i> <Badge bg="secondary">{iconCartWd()}</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>

        </div>
    )
}

export default CardWidget
