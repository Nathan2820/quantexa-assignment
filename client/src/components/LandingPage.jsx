import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableTemplate from './TableTemplate';
import { Container, Row, Col } from 'react-bootstrap';
import LineGraph from './LineGraph';
import DoughnutChart from './DoughnutChart';

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
            <br/>
            <h2>Quantexa Assignment - Transaction Visualisation Tool</h2>
            <Row>
                <Col>
                    {console.log("Data: ", data)}
                    <TableTemplate data={data}/>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <LineGraph data={data}/>
                </Col>
                <Col>
                    <DoughnutChart data={data}/>
                </Col>
            </Row>
            <br/>
        </Container>
    );
}

export default LandingPage;