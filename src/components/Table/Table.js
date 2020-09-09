import React from 'react';

const Table = ({
    history,        
}) => (
        <table className="table table-bordered">
            <thead className="thead-dark">
                <tr >
                    <th>Game #</th>
                    <th>Winner</th>
                    <th>Player 1 Score</th>
                    <th>Player 2 Score</th>                          
                </tr>
            </thead>
            <tbody>
                { history.map((item, i) => (
                    <tr key={ i }>
                       <td>
                           { i + 1 }
                        </td>
                        <td>
                           { item.player_1.won ? "Player 1" : "Player 2" }
                        </td>
                        <td>
                           { item.player_1.score }
                        </td>
                        <td>
                           { item.player_2.score }
                        </td>              
                    </tr>   
                ))}             
            </tbody>
        </table>
);

export default Table;