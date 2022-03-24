import React from 'react';
import Table from 'react-bootstrap/Table';

const TableTemplate = (props) => {

    const showData = (props) => {
        return props.data.map(data => {
            return(
                <tr>
                    <td>{data.department_family}</td>
                    <td>{data.entity}</td>
                    <td>{data.date}</td>
                    <td>{data.expense_type}</td>
                    <td>{data.expense_area}</td>
                    <td>{data.supplier}</td>
                    <td>{data.transaction_number}</td>
                    <td>{data.amount}</td>
                    <td>{data.invoice_currency_unit}</td>
                </tr>
            );
        });
    };

    return (
        <div style={{overflow: "scroll", height: "90vh"}}>
            <Table responsive="sm" striped bordered hover>
                <thead>
                    <tr>
                        <th>Department Family</th>
                        <th>Entity</th>
                        <th>Date</th>
                        <th>Expense Type</th>
                        <th>Expense Area</th>
                        <th>Supplier</th>
                        <th>Transaction Number</th>
                        <th>Amount</th>
                        <th>Invoice Currency Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {showData(props)}
                </tbody>
            </Table>
        </div>
    );
}

export default TableTemplate;