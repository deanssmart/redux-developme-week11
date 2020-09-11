export const newGame = (gameID, player1Name, player2Name, winningScore, alternate) => {
    return {
        gameID,
        player1Name, 
        player2Name, 
        winningScore: +winningScore, 
        alternate: +alternate,
        type: "NEW_GAME",
    };
};

export const reset = () =>{
    return {
        type: "RESET",
    };
};

export const score = (player) => {
    return {
        player,
        type: "SCORE",
    };
};
