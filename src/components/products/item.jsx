import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';



const Item = ({ item }) => {


    return (


        <>
            <Card style={{ width: '20rem' }} className="my-4 mx-auto">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title className="text-center">{item.title}</Card.Title>
                    <Card.Footer className="text-center" style={{ width: '100%' }}>
                        <Link to={`/item/${item.id}`}>
                            <Button className="text-center d-flex align-self-end mx-auto py-1 px-5" variant="primary">Ver Detalle</Button>
                        </Link>
                    </Card.Footer>

                </Card.Body>
            </Card>
        </>

    )
}

export default Item
