import { useState, useEffect } from 'react';
import ItemDetail from './Details/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../services/getFirebase'
import { Row, Spinner, Container } from 'react-bootstrap';

const ItemDetailContainer = () => {

    const [object, setObject] = useState([]);
    const [loading, setLoading] = useState(true)

    const { id } = useParams();

    useEffect(() => {

        const dbQuery = getFirestore();
        dbQuery.collection('items').doc(id).get()
            .then((object) => {
                setObject({ id: object.id, ...object.data() })

            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));

    }, [id])




    return (
        <Container className="container-fluid mx-auto px-1 px-md-2 px-lg-4 py-5">
            <Row key={object?.id} className="d-flex ">
                {loading ? <Spinner animation="border" className="justify-content-md-center" /> : <ItemDetail object={object} />}
            </Row>
        </Container>
    )
}

export default ItemDetailContainer

