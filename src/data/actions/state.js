export const newGame = ({
    id,
    player_1,
    player_2,
    winning_score,
    change_serve,
}) => {
    return {
        gameID: id,
        player1Name: player_1.name, 
        player2Name: player_2.name, 
        winningScore: winning_score, 
        alternate: change_serve,
        type: "NEW_GAME",
    };
};

export const reset = () =>{
    return {
        type: "RESET",
    };
};

export const score = ({
    player_1,
    player_2,
}) => {
    return {
        player1: player_1.score, 
        player2: player_2.score,
        player1Serving: player_1.serving,                 
        type: "SCORE",
    };
};
