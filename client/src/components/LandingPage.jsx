import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
            Landing Page placeholder
            {console.log("Data: ", data)}
        </div>
    );
}

export default LandingPage;