export const save = ( player1Name, player2Name, winningScore, alternate ) => {
    return {
        player1Name, 
        player2Name, 
        winningScore: +winningScore, 
        alternate: +alternate,
        type: "SAVE",
    };
};
