import { newGame } from './state';
import axios from '../../axios';

export const postNewGame = (
    player1Name, 
    player2Name, 
    winningScore, 
    alternate,
    ) => {
        return dispatch => {
            axios.post('/games', {
              player_1: player1Name,
              player_2: player2Name,
              winning_score: winningScore,
              change_serve: alternate,  
            }).then(({ data }) => {
                dispatch(newGame(
                    data.data.player_1.name,
                    data.data.player_2.name,
                    data.data.winning_score,
                    data.data.change_serve
                ));
            });
    };
};