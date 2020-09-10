export const newGame = (player1Name, player2Name, winningScore, alternate) => {
    return {
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
