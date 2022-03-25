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

    props.data.map(data => {
        if(data.expense_type.includes("T&S UK")) {
            tsUkData.push(data);
        } else {
            restOfData.push(data);
        }
    });

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