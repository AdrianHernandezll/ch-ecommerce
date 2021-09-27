import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button'




const CardWidget = () => {
    return (
        <div >
            {/* <IconButton aria-label="Show cart items" color="inherit">
                <Badge badgeContent={2} color="secondary">
                    <ShoppingCart />
                </Badge>
            </IconButton> */}
            <Button variant="primary">
                <i className="fas fa-shopping-cart"></i> <Badge bg="secondary">9</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>

        </div>
    )
}

export default CardWidget
