import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableTemplate from './TableTemplate';
import { Container, Row, Col } from 'react-bootstrap';
import LineGraph from './LineGraph';
import DoughnutChart from './DoughnutChart';

const LandingPage = () => {
    const [data, setData] = useState([]);


    /* 
        api call to the backend using axios. This is a get request expecting to receive some data.
        The setData function is used to assign the result of the get request to the array data.
    */
    useEffect(() => {
        axios
        .get("http://localhost:3001/data", {})
        .then(res => setData(res.data))
        .catch(err => {
            console.log("Error: ", err)
        });
    }, []);

    /*
        Here the return statement is used to display the LandingPage of the web app.
        I am using the LandingPage to render my other react components.
    */
    return(
        <Container>
            <br/>
            <h2>Quantexa Assignment - Transaction Visualisation Tool</h2>
            <Row>
                <Col xs={7}>
                    {console.log("Data: ", data)}
                    <TableTemplate data={data}/>
                </Col>
                <Col>
                    <LineGraph data={data}/>
                    <DoughnutChart data={data}/>
                </Col>
            </Row>
            <br/>
        </Container>
    );
}

export default LandingPage;