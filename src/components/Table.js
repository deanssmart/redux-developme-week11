import React from 'react';

const Table = ({
    columnHeader1, 
    columnHeader2,
    rowHeader1,
    row1Data1, 
    row1Data2,
    rowHeader2, 
    row2Data1, 
    row2Data2,
}) => (
        <table className="table table-bordered">
            <tr className="thead-dark">
                <th></th>
                <th>{ columnHeader1 }</th>
                <th>{ columnHeader2 }</th>
            </tr>
            <tr>
                <th>{ rowHeader1 }</th>
                <td>{ row1Data1 }</td>
                <td>{ row1Data2 }</td>
            </tr>
            <tr>
                <th>{ rowHeader2 }</th>
                <td>{ row2Data1 }</td>
                <td>{ row2Data2 }</td>
            </tr>            
        </table>
);

export default Table;