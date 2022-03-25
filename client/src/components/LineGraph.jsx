import React from 'react';
import Container from 'react-bootstrap/Container';
import {Line} from 'react-chartjs-2';
import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
    } from 'chart.js';
    
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineGraph = (props) => {
    let priceDataAug = [];
    let priceDataJul = [];
    let priceDataOct = [];
    let priceDataDec = [];
    let highestPrices = [];

    /*
        Here the props variable is mapped and each row of data is evaluated via the if statements and if the conditions are met
        the code block is executed within the if statement. This is used to seperate the data into their relevant months.
    */
    props.data.map(data => {
        if(data.date.substring(3,5) === '07') {
            priceDataJul.push(data.amount);
        }
        if(data.date.substring(3,5) === '08') {
            priceDataAug.push(data.amount);
        }
        if(data.date.substring(3,5) === '10') {
            priceDataOct.push(data.amount);
        }
        if(data.date.substring(3,5) === '12') {
            priceDataDec.push(data.amount);
        }
    });

    /*
        Each array is sorted from greatest -> smallest and then 
        highestPrices is assigned the first entry of each array 
        which corresponds to the largest value.
    */
    priceDataJul.sort((a,b) => b-a);
    priceDataAug.sort((a,b) => b-a);
    priceDataOct.sort((a,b) => b-a);
    priceDataDec.sort((a,b) => b-a);
    highestPrices.push(priceDataJul[0], priceDataAug[0], priceDataOct[0], priceDataDec[0]);

    /*
        The labels for the line graph and the data are instantiated 
        ready to pass to the Line component in the return statement.
    */
    const state = {
        labels: ['July','August','October','December'],
        datasets: [{
                label: 'Cost (GBP)',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: highestPrices
        }]
    }

    console.log("Prices: ", priceDataAug);
    
    /*
        The return statement renders the Line component and is passed the state object 
        containing the configuration information for the line graph.
    */
    return(
        <Container>
            <h3>Highest expense by month</h3>
            <Line data={state}
                options={{
                    title:{
                        display: true,
                        text: 'Highest price per month 2016',
                        fontSize: 20
                    },
                    legend:{
                        display: true,
                        position: 'right'
                    }   
                }} />
        </Container>
    );
}

export default LineGraph;