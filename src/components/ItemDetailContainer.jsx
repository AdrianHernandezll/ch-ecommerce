import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import ItemDetail from './Details/ItemDetail';
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom';
import { getPromise } from '../util/mock'
import { Row } from 'react-bootstrap';





const ItemDetailContainer = () => {

    const [object, setObject] = useState([]);
    const [loading, setLoading] = useState(true)

    const { id } = useParams();

    useEffect(() => {
        getPromise
            .then((response) => {
                if (id) {
                    const itemFilter = response.find((item) => parseInt(item.id) === parseInt(id))
                    setObject(itemFilter)
                } else {
                    setObject(response)
                }

            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [id])




    return (
        <Container className="container-fluid mx-auto px-1 px-md-2 px-lg-4 py-5">
            <Row key={object[0]?.id} className="d-flex ">
                {loading ? <Spinner animation="border" className="justify-content-md-center" /> : <ItemDetail object={object} />}
            </Row>
        </Container>
    )
}

export default ItemDetailContainer

