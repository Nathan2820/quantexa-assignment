import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableTemplate from './TableTemplate';

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
        <div>
            {console.log("Data: ", data)}
            <TableTemplate data={data}/>
        </div>
    );
}

export default LandingPage;