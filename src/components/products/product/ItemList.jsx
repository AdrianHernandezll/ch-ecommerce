import { useState, useEffect } from 'react';
import { Container, Placeholder, Card, Row, Col } from 'react-bootstrap';
import Item from '../item';
import { getFirestore } from '../../../services/getFirebase';





const ItemList = ({ idCategory }) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (idCategory) {
            const dbQuery = getFirestore();
            dbQuery.collection('items').where('categoryId', "==", idCategory).get()
                .then(res => {
                    setItems(res.docs.map(items => ({ id: items.id, ...items.data() })))
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
        } else {
            const dbQuery = getFirestore();
            dbQuery.collection('items').get()
                .then(res => {
                    setItems(res.docs.map(items => ({ id: items.id, ...items.data() })))
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
        }
    }, [idCategory])



    return (

        <Container>
            <Row xs={1} md={3} className="g-4">
                {loading ? <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={6} /> <Placeholder xs={8} />
                        </Placeholder>
                        <Placeholder.Button variant="primary" xs={6} />
                    </Card.Body>
                </Card> :
                    items.map(item => (
                        <Col lg={4} sm={12} md={6} key={item.id}>
                            <Item item={item} />
                        </Col>
                    ))}
            </Row>
        </Container>
    )

}

export default ItemList



