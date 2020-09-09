import React from 'react';

const Table = ({
    history,        
}) => (
        <table className="table table-bordered table-striped">
            <thead className="thead-dark">
                <tr >
                    <th>Game #</th>
                    <th>Winner</th>
                    <th>Player 1 Score</th>
                    <th>Player 2 Score</th>                          
                </tr>
            </thead>
            <tbody>
                { history.length === 0 ? <td colspan="4" className="text-center">No Games Played</td> : history.map((item, i) => (
                    <tr key={ i }>
                       <td>
                           { i + 1 }
                        </td>
                        <td>
                           { item.player_1.won ? "Player 1" : "Player 2" }
                        </td>
                        <td className={ item.player_1.score > item.player_2.score ? "table-success" : "table-danger"}>
                           { item.player_1.score }
                        </td>
                        <td className={ item.player_2.score > item.player_1.score ? "table-success" : "table-danger"}>
                           { item.player_2.score }
                        </td>              
                    </tr>   
                ))}             
            </tbody>
        </table>
);

export default Table;