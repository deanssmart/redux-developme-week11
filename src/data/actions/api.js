import axios from '../../axios';
import { newGame } from './state';
import { score } from './state';

export const postNewGame = (
    player1Name, 
    player2Name, 
    winningScore, 
    alternate,
    ) => {
        return dispatch => {
            axios.post('/', {
              player_1: player1Name,
              player_2: player2Name,
              winning_score: winningScore,
              change_serve: alternate,  
            }).then(({ data }) => dispatch(newGame(data.data)));
    };
};

export const patchScore = (player) => (dispatch, getState) => {
    const id = getState().gameID;

    axios.patch(`${id}/score`, {
        player: player
    }).then(({ data }) => dispatch(score(data.data)));
};