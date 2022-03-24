import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableTemplate from './TableTemplate';
import { Container, Row, Col } from 'react-bootstrap';

const LandingPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:3001/data", {})
        .then(res => setData(res.data))
        .catch(err => {
            console.log("Error: ", err)
        });
    }, []);

    return(
        <Container>
            <Row>
                <Col>
                    {console.log("Data: ", data)}
                    <br/>
                    <TableTemplate data={data}/>
                </Col>
            </Row>
        </Container>
    );
}

export default LandingPage;