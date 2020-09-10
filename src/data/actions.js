export const save = (player1Name, player2Name, winningScore, alternate) => {
    return {
        player1Name, 
        player2Name, 
        winningScore: +winningScore, 
        alternate: +alternate,
        type: "SAVE",
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
