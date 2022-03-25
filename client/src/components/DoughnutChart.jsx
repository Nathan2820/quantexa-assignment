import React from 'react';
import Container from 'react-bootstrap/Container';
import {Doughnut} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
ArcElement
);

const DoughnutChart = (props) => {
    let tsUkData = [];
    let restOfData = [];

    /*
        the props variable is mapped through and an if else statement is used to push the relevant data
        into two different arrays for later use.
    */
    props.data.map(data => {
        if(data.expense_type.includes("T&S UK")) {
            tsUkData.push(data);
        } else {
            restOfData.push(data);
        }
    });

    /*
        The state object is instantiated with the configuration for the Doughnut chart.
        The labels are set and the two arrays are passed as the data sources for the doughnut.
    */
    const state = {
        labels: ['Number of T&S UK Expenses', 'Number of other Expenses'],
        datasets: [{
            label: 'Expense Type',
            backgroundColor: [
                '#00A6B4',
                '#c2eaec'
            ],
            data: [tsUkData.length, restOfData.length]
        }]
    }

    /*
        The return statement renders the doughnut component and uses the state object as its
        data source.
    */
    return (
        <Container>
            <h3>Number of T&S UK expense types compared to remaining expense types</h3>
            <Doughnut 
                data={state}
                options={{
                    title:{
                        display:true,
                        text:'Expense Types - T&S UK vs All other data',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                    }
                }}
            />
        </Container>
    );
}

export default DoughnutChart;